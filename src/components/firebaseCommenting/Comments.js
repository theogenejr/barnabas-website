import React from "react"
import PropTypes from "prop-types"
import Comment from "./Comment"
import CommentForm from "./CommentForm"

const Comments = ({ comments, slug }) => {
  return (
    <div>
      <h2>Join the discussion</h2>
      <CommentForm slug={slug} />
      <div>
        {comments.length > 0 &&
          comments
            .filter(comment => !comment.pId)
            .map(comment => {
              let child
              if (comment.id) {
                child = comments.find(c => comment.id === c.pId)
              }
              return (
                <Comment
                  key={comment.id}
                  child={child}
                  comment={comment}
                  slug={slug}
                />
              )
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
