import React, { useRef, useState } from "react"
import { motion } from "framer-motion"

import emailjs from "@emailjs/browser"
import { Link } from "gatsby"

const Subscription = () => {
  const TEMPLATE_ID = "template_es8k9cw"
  const SERVICE_ID = "service_yx3angp"
  const PUBLIC_KEY = "YEqeb9NBxpccLKzQZ"

  const form = useRef()

  const [privacyAccepted, setPrivacyAccepted] = useState(false)

  const [messageType, setMessageType] = useState(null) // Initialize to null

  function handleCheck(event) {
    setPrivacyAccepted(event.target.checked)
  }

  const handleSubmit = e => {
    e.preventDefault()

    setMessageType("loading")

    // Send the email using emailjs
    privacyAccepted
      ? emailjs
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
      : setMessageType("privacy")
  }

  return (
    <div className="min-h-[calc(100vh-140px)] bg-black rounded-3xl py-16 px-8 text-white text-3xl">
      <div className="flex flex-col uppercase ">
        <span className="text-xl font-bold">i have a</span>
        <span className="text-4xl font-black">newsletter</span>
        <motion.div
          initial={{ height: 16, width: 0 }}
          whileInView={{ height: 16, width: 100 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=" bg-goodBlue"
        ></motion.div>
      </div>
      <div className="flex flex-col lg:flex-row mt-10 gap-16 lg:items-center">
        <div className="lg:w-1/2 mb-10">
          <p className="text-base md:text-base lg:text-sm first-letter:font-bold first-letter:text-6xl snap-start">
            I know it sounds crazy, but somehow in a world where social media
            can become overwhelming, I believe that email is a more personal and
            intentional way to connect with my audience. By signing up, you'll
            receive occasional updates about my latest professional and personal
            news, including new products in my shop, upcoming music releases,
            exclusive content, and inspiring lettering events. But this isn't
            just any old newsletter - what I will share is nothing, but good
            vibes and positivity in each email. And that's a promise!
          </p>
        </div>
        <div className="lg:w-1/2">
          <form
            className="flex w-full flex-col gap-2 relative min-h-20 "
            ref={form}
            onSubmit={handleSubmit}
          >
            <div className="flex items-center w-full gap-2 bg-white rounded-full pl-8 pr-2">
              <input
                className="w-full bg-transparent text-goodBlue text-base box-border outline-none placeholder:text-goodBlue block px-2.5 py-2 leading-5 font-normal border-none pr-4 pl-0"
                placeholder="E-mail address"
                type="email"
                name="email"
                required
              />
              <button
                type="submit"
                disabled={messageType === "loading"}
                className="text-xs font-bold leading-3 transition duration-200 my-2 w-32 h-10 flex items-center justify-center uppercase bg-goodBlue rounded-full hover:bg-black"
              >
                sign up
              </button>
            </div>
            <div className="ml-6 h-2">
              {messageType === "success" && (
                <p className="text-green-500 text-xs">successfully signed up</p>
              )}
              {messageType === "error" && (
                <p className="text-red-500 text-xs">Something went wrong</p>
              )}
              {messageType === "privacy" && (
                <p className="text-red-500 text-xs">
                  You must agree to the terms and conditions
                </p>
              )}
              {messageType === "loading" && (
                <p className="text-gray-600 text-xs">Signing up...</p>
              )}
            </div>
            <label className="flex items-center mt-0 sm:mt-4">
              <input
                type="checkbox"
                value={privacyAccepted}
                onChange={handleCheck}
                id="checkbox-id"
                className="appearance-none w-4 h-4 min-w-4 min-h-4 rounded-full border-2 border-goodBlue bg-transparent checked:bg-goodBlue focus:outline-none transition duration-200"
              />
              <span className="cursor-pointer text-xs pl-2 text-goodBlue">
                <p>
                  I agree with the terms and conditions and the{" "}
                  <a href="/privacy-policy" className="underline">
                    privacy policy
                  </a>
                </p>
              </span>
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Subscription
