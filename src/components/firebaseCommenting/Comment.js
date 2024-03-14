import React, { useState } from "react"
import PropTypes from "prop-types"

const SingleComment = ({ comment, formattedDateTime }) => (
  <div>
    <h2 className="font-bold text-2xl capitalize">{comment.name}</h2>
    <p className="font-light">{comment.content}</p>
    {comment.time && (
      <p className="text-xs text-gray-500">{formattedDateTime}</p>
    )}
  </div>
)

const Comment = ({ comment }) => {
  return (
    <div className="mb-8">
      <SingleComment comment={comment} />
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}

export default Comment
