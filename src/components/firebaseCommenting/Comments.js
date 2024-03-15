import React from "react"
import PropTypes from "prop-types"
import Comment from "./Comment"
import CommentForm from "./CommentForm"

const Comments = ({ comments, slug }) => {
  return (
    <div>
      <div className="py-8 border-y-[1px] border-y-grey my-16">
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

      <div className="">
        {comments.length > 0 &&
          comments
            .filter(comment => !comment.pId)
            .map(comment => {
              return <Comment key={comment.id} comment={comment} slug={slug} />
            })}
      </div>

      <CommentForm slug={slug} />
    </div>
  )
}

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
}

export default Comments
