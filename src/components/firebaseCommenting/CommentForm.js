import React, { useState } from "react"
import PropTypes from "prop-types"
import { firestore } from "../../../firebase.js"

const CommentForm = ({ parentId, slug }) => {
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const [email, setEmail] = useState("")

  const handleCommentSubmission = async e => {
    e.preventDefault()
    let comment = {
      name: name,
      slug: slug,
      content: content,
      email: email,
      pId: parentId || null,
      time: new Date(),
    }
    setName("")
    setContent("")
    setEmail("")
    firestore
      .collection(`comments`)
      .add(comment)
      .catch(err => {
        console.error("error adding comment: ", err)
      })
  }

  return (
    <div className="my-16 ">
      <h2 className="mb-4 font-semibold text-2xl text-goodBlue">
        Add a comment
      </h2>
      <form onSubmit={handleCommentSubmission}>
        <div className="mb-3">
          <label className="block mb-2">Name*</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full p-2 border rounded-3xl outline-none bg-white/50 px-8"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2">Email*</label>
          <input
            required
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full p-2 border rounded-3xl outline-none bg-white/50 px-8"
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2">Comment*</label>
          <textarea
            id="comment"
            onChange={e => setContent(e.target.value)}
            value={content}
            name="comment"
            required="required"
            cols="45"
            rows="8"
            className="w-full p-2 border rounded-3xl outline-none bg-white/50 resize-none px-8"
          />
        </div>
        <button
          type="submit"
          className="bg-goodBlue hover:bg-sky-700 rounded-full px-4 uppercase font-bold text-white py-2.5 mt-8 cursor-pointer"
        >
          Submit Comment
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
