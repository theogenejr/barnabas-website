import React, { useState } from "react"
import PropTypes from "prop-types"
import { firestore } from "../../../firebase.js"

const CommentForm = ({ parentId, slug }) => {
  const [name, setName] = useState("")
  const [content, setContent] = useState("")

  const handleCommentSubmission = async e => {
    e.preventDefault()
    let comment = {
      name: name,
      slug: slug,
      content: content,
      pId: parentId || null,
      time: new Date(),
    }
    setName("")
    setContent("")
    firestore
      .collection(`comments`)
      .add(comment)
      .catch(err => {
        console.error("error adding comment: ", err)
      })
  }

  return (
    <div>
      <form onSubmit={e => handleCommentSubmission(e)}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </label>
        <label htmlFor="comment">
          Comment
          <textarea
            id="comment"
            onChange={e => setContent(e.target.value)}
            value={content}
            name="comment"
            required="required"
            cols="45"
            rows="8"
          ></textarea>
        </label>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  )
}

CommentForm.propTypes = {
  parentId: PropTypes.string,
  slug: PropTypes.string.isRequired,
}

export default CommentForm
