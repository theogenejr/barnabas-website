import React from "react"
import PropTypes from "prop-types"
import Comment from "./Comment"
import CommentForm from "./CommentForm"

const Comments = ({ comments, slug }) => {
  const sortedComments = comments.sort((a, b) => b.time - a.time)
  return (
    <div>
      <div className="py-16 border-y-[1px] border-y-grey mb-4">
        <h2 className="text-2xl">
          <span className="mr-2">Comments</span>
          <span className="text-3xl">
            (
            <span className="text-goodBlue font-extrabold">
              {comments.length}
            </span>
            )
          </span>
        </h2>
      </div>

      <CommentForm slug={slug} />
      <div className="lg:w-1/2 md:w-2/3 md:ml-16">
        {comments.length > 0 &&
          comments
            .filter(comment => !comment.pId)
            .map(comment => {
              return <Comment key={comment.id} comment={comment} slug={slug} />
            })}
      </div>
    </div>
  )
}

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
}

export default Comments
