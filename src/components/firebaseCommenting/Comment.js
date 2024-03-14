import React, { useState } from "react"
import PropTypes from "prop-types"
import CommentForm from "./CommentForm"
import moment from "moment"

const SingleComment = ({ comment }) => (
  <div>
    <div className="flex-container">
      <div className="flex">
        <img src="https://ui-avatars.com/api/?name=John+Doe" alt="Avatar" />
      </div>
      <div className="flex">
        <p className="comment-author">
          {comment.name} <span>says</span>
        </p>
        {comment.time && (
          <time>{moment(comment.time.toDate()).calendar()}</time>
        )}
      </div>
    </div>
    <p>{comment.content}</p>
  </div>
)

const Comment = ({ comment, child, slug }) => {
  const [showReplyBox, setShowReplyBox] = useState(false)
  return (
    <div>
      <SingleComment comment={comment} />
      {child && (
        <div child className="comment-reply">
          <SingleComment comment={child} />
        </div>
      )}
      {!child && (
        <div>
          {showReplyBox ? (
            <div>
              <button
                className="btn bare"
                onClick={() => setShowReplyBox(false)}
              >
                Cancel Reply
              </button>
              <CommentForm parentId={comment.id} slug={slug} />
            </div>
          ) : (
            <button className="btn bare" onClick={() => setShowReplyBox(true)}>
              Reply
            </button>
          )}
        </div>
      )}
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  slug: PropTypes.string,
  child: PropTypes.object,
}

export default Comment
