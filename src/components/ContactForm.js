import * as React from "react"
import emailjs from "@emailjs/browser"
import { useState } from "react"
import { useRef } from "react"

const ContactForm = () => {
  const TEMPLATE_ID = "template_k68pxwu"
  const SERVICE_ID = "service_yx3angp"
  const PUBLIC_KEY = "YEqeb9NBxpccLKzQZ"

  const form = useRef()

  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [newsletter, setNewsletter] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [messageType, setMessageType] = useState(null) // Initialize to null

  function handleCheck(event) {
    setNewsletter(event.target.checked)
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Access the form data with the checkbox value
    const formData = new FormData(e.target)
    const submittedValue = formData.get("newsletter")

    // Set isSending to true only if both isError and isSuccess are false
    setMessageType("loading")

    console.log(messageType)

    // Send the email using emailjs
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          form.current.reset()
          setMessageType("success")
        },
        error => {
          console.log("FAILED...", error.text)
          setMessageType("error")
        }
      )
  }
  return (
    <form ref={form} onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 sm:gap-8 md:flex-row">
          <div className="w-full relative bg-white rounded-full px-8 py-2 flex items-center group">
            <input
              type="text"
              id="firstname"
              required
              className="w-full h-10 px-4 text-sm peer bg-transparent outline-none"
              name="firstname"
            />
            <label
              htmlFor="firstname"
              className="cursor-text transform transition-all absolute top-0 left-0 h-full uppercase font-extrabold flex items-center pl-12 text-sm group-focus-within:text-[10px] peer-valid:text-[10px] group-focus-within:h-1/3 peer-valid:h-1/3 group-focus-within:-translate-y-[1px] peer-valid:-translate-y-[1px] group-focus-within:pl-12 peer-valid:pl-12"
            >
              First Name
              <span className="text-xs ml-2 text-gray-500">required</span>
            </label>
          </div>

          <div className="w-full relative bg-white rounded-full px-8 py-2 flex items-center group">
            <input
              type="text"
              id="lastname"
              required
              className="w-full h-10 px-4 text-sm peer bg-transparent outline-none"
              name="lastname"
            />
            <label
              htmlFor="lastname"
              className="cursor-text transform transition-all absolute top-0 left-0 h-full uppercase font-extrabold flex items-center pl-12 text-sm group-focus-within:text-[10px] peer-valid:text-[10px] group-focus-within:h-1/3 peer-valid:h-1/3 group-focus-within:-translate-y-[1px] peer-valid:-translate-y-[1px] group-focus-within:pl-12 peer-valid:pl-12"
            >
              Last Name
              <span className="text-xs ml-2 text-gray-500">required</span>
            </label>
          </div>
        </div>
        <div className="w-full relative bg-white rounded-full px-8 py-2 flex items-center group">
          <input
            type="text"
            id="emailid"
            required
            className="w-full h-10 px-4 text-sm peer bg-transparent outline-none"
            name="emailid"
          />
          <label
            htmlFor="emailid"
            className={`cursor-text transform transition-all absolute top-0 left-0 h-full uppercase font-extrabold flex items-center pl-12 text-sm group-focus-within:text-[10px] peer-valid:text-[10px] group-focus-within:h-1/3 peer-valid:h-1/3 group-focus-within:-translate-y-[1px] peer-valid:-translate-y-[1px] group-focus-within:pl-12 peer-valid:pl-12
            `}
          >
            Email
            <span className="text-xs ml-2 text-gray-500">required</span>
          </label>
        </div>

        <div className="w-full relative bg-white rounded-full px-8 py-2 flex items-center group">
          <input
            type="text"
            id="subject"
            required
            className="w-full h-10 px-4 text-sm peer bg-transparent outline-none"
            name="subject"
          />
          <label
            htmlFor="subject"
            className="cursor-text transform transition-all absolute top-0 left-0 h-full uppercase font-extrabold flex items-center pl-12 text-sm group-focus-within:text-[10px] peer-valid:text-[10px] group-focus-within:h-1/3 peer-valid:h-1/3 group-focus-within:-translate-y-[1px] peer-valid:-translate-y-[1px] group-focus-within:pl-12 peer-valid:pl-12"
          >
            Subject
            <span className="text-xs ml-2 text-gray-500">required</span>
          </label>
        </div>

        <div className="w-full h-64 relative bg-white rounded-3xl px-8 py-8 flex items-start group">
          <textarea
            id="message"
            required
            className="w-full h-full mt-8 px-4 text-sm peer bg-transparent outline-none resize-none"
            name="message"
          />
          <label
            htmlFor="message"
            className="cursor-text transform transition-all absolute top-8 left-0 uppercase font-extrabold flex items-start pl-12 text-sm group-focus-within:text-[10px] peer-valid:text-[10px] group-focus-within:h-1/3 peer-valid:h-1/3 group-focus-within:-translate-y-4 peer-valid:-translate-y-4 group-focus-within:pl-12 peer-valid:pl-12"
          >
            message
            <span className="text-xs ml-2 text-gray-500">required</span>
          </label>
        </div>
      </div>

      <label className="flex items-center w-fit mt-8">
        {/* Hidden input for newsletter value */}
        <input type="hidden" name="newsletter" value={newsletter} />

        <input
          type="checkbox"
          id="checkbox-id"
          className="appearance-none w-3.5 h-3.5 rounded-full border-[1px] border-goodBlue bg-transparent checked:bg-goodBlue focus:outline-none transition duration-200 flex"
          value={newsletter}
          onChange={handleCheck}
        />
        <span className=" cursor-pointer text-sm pl-2 text-black flex items-center">
          <p>I want to also sign up for your newsletter.</p>
        </span>
      </label>

      <button
        className={`bg-goodBlue ${
          messageType === "loading" ? "hover:bg-goodBlue hover:text-white" : ""
        } rounded-full px-9 py-2 transition-all text-white mt-10 mb-2 uppercase text-base font-extrabold hover:bg-black min-w-48 hover:text-blue-400`}
        type="submit"
        disabled={messageType === "loading"}
      >
        <svg
          aria-hidden="true"
          role="status"
          className={`inline w-5 ${
            messageType === "loading" ? "block" : "hidden"
          } h-5 me-3 text-white animate-spin`}
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        {messageType === "loading" ? "Sending..." : "submit"}
      </button>
      <div className="ml-6">
        {messageType === "success" && (
          <p className="text-green-500 text-xs">Message sent successfully</p>
        )}
        {messageType === "error" && (
          <p className="text-red-500 text-xs">Something went wrong</p>
        )}
        {messageType === "privacy" && (
          <p className="text-red-500 text-xs">
            You must agree to the terms and conditions
          </p>
        )}
      </div>
    </form>
  )
}
export default ContactForm
