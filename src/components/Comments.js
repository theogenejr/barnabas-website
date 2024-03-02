import React, { useState, useEffect } from "react"

// CommentsList component
const CommentsList = ({ comments }) => {
  return (
    <ul className="list-none p-0">
      {comments.map(comment => (
        <li
          key={comment.id}
          className="my-3 p-3 border border-gray-300 rounded"
        >
          <strong>{comment.author_name}</strong>
          <p dangerouslySetInnerHTML={{ __html: comment.content.rendered }} />
        </li>
      ))}
    </ul>
  )
}

// CommentForm component
const CommentForm = ({ post, commentsEndpoint }) => {
  const [authorName, setAuthorName] = useState("")
  const [authorEmail, setAuthorEmail] = useState("")
  const [commentContent, setCommentContent] = useState("")

  const submitComment = async () => {
    try {
      const response = await fetch(commentsEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author_name: authorName,
          author_email: authorEmail,
          content: commentContent,
          post: post.postId,
        }),
      })

      if (response.status === 201) {
        // Optionally, you can fetch comments again to refresh the list after submission.
        // For simplicity, we'll assume the submission is successful.
        console.log("Comment submitted successfully!")
      } else {
        console.error("Failed to submit comment")
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="my-16">
      <h3 className="text-xl font-bold my-3">Leave a Comment</h3>
      <form onSubmit={e => e.preventDefault()}>
        <div className="mb-3">
          <label className="block mb-2">Name*</label>
          <input
            type="text"
            required
            value={authorName}
            onChange={e => setAuthorName(e.target.value)}
            className="w-full p-2 border rounded-3xl outline-none bg-white/50 px-8"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2">Email*</label>
          <input
            required
            type="email"
            value={authorEmail}
            onChange={e => setAuthorEmail(e.target.value)}
            className="w-full p-2 border rounded-3xl outline-none bg-white/50 px-8"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2">Comment*</label>
          <textarea
            required
            rows="4"
            value={commentContent}
            onChange={e => setCommentContent(e.target.value)}
            className="w-full p-2 border rounded-3xl outline-none bg-white/50 resize-none px-8"
          />
        </div>
        <button
          type="submit"
          onClick={submitComment}
          className="bg-goodBlue hover:bg-sky-700 rounded-full px-4 uppercase font-bold text-white py-2.5 mt-8 cursor-pointer"
        >
          Submit Comment
        </button>
      </form>
    </div>
  )
}

// Comments component
const Comments = ({ post, location, wordPressUrl }) => {
  const encodedString = post.id
  const decodedString = atob(encodedString)
  const decodedPostId = decodedString.split(":")[1]
  const commentsEndpoint = `${wordPressUrl}/wp-json/wp/v2/comments?post=${decodedPostId}`

  const postCommentsEndpoint = commentsEndpoint

  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(postCommentsEndpoint)
        if (!response.ok) {
          throw new Error("Failed to fetch comments")
        }
        const commentsData = await response.json()
        setComments(commentsData)
      } catch (error) {
        console.error(error)
        setComments([])
      }
    }

    // Fetch comments only for single blog post pages
    if (location === "single") {
      fetchComments()
    }
  }, [location, post.postId, postCommentsEndpoint])

  return (
    <div className="my-4 md:px-24 lg:mx-44">
      {location === "single" && (
        <>
          <h2 className="text-2xl font-bold my-3">
            Comments ({comments.length})
          </h2>
          <CommentsList post={post} comments={comments} />
          <CommentForm post={post} commentsEndpoint={commentsEndpoint} />
        </>
      )}
    </div>
  )
}

export default Comments
