import emailjs from "@emailjs/browser"
import { Link } from "gatsby"
import React, { useRef, useState } from "react"
import SocialMedia from "./SocialMedia"
import { StaticImage } from "gatsby-plugin-image"

export const Footer = () => {
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
    <div className="  text-white rounded-t-3xl  bg-goodBlue py-10 md:py-16  ">
      <div className="flex justify-stretch px-4 items-center md:gap-20 sm:px-20 gap-10 flex-col lg:flex-row w-full">
        <div className="flex flex-col items-center">
          <p className="uppercase text-xl font-bold mb-4">
            I'm on social media
          </p>
          <SocialMedia effectColor="black" originalColor="white" />
        </div>
        <div className="flex flex-col items-center">
          <p className="uppercase text-xl font-bold mb-4">site links</p>
          <ul className="flex flex-col gap-2">
            <li className="">
              <Link
                to="/blog"
                className="text-xl font-semiBold capitalize cursor-pointer  hover:text-black transition duration-200"
              >
                Blog
              </Link>
            </li>
            <li className="">
              <Link
                to="/music"
                className="text-xl font-semiBold capitalize cursor-pointer  hover:text-black transition duration-200"
              >
                music
              </Link>
            </li>
            <li className="">
              <Link
                to="/about"
                className="text-xl font-semiBold capitalize cursor-pointer  hover:text-black transition duration-200"
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                to="/shop"
                className="text-xl font-semiBold capitalize cursor-pointer  hover:text-black transition duration-200"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-xl font-semiBold capitalize cursor-pointer  hover:text-black transition duration-200"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-1/6">
          <StaticImage src="../images/BSF LOGO-Black.png" alt="bsf-logo" />
        </div>
        <div className="w-full gap-2 text-2xl font-bold flex flex-col  lg:w-1/3 ">
          <p>Recieve my newsletter</p>
          <div className="">
            <form
              className="flex w-full flex-col gap-2 relative min-h-20 "
              ref={form}
              onSubmit={handleSubmit}
            >
              <div className="flex items-end w-full gap-2 border-b-2 border-b-white">
                <input
                  className="w-full bg-transparent text-black text-base box-border outline-none placeholder:text-black block px-2.5 py-2 leading-5 font-normal border-none pr-4 pl-0"
                  placeholder="E-mail address"
                  type="email"
                  name="email"
                  required
                />
                <button
                  type="submit"
                  disabled={messageType === "loading"}
                  className="text-xs leading-3 transition duration-200 mb-2 min-w-16 max-w-16 h-16 flex items-center justify-center uppercase bg-black rounded-full hover:bg-white hover:text-black"
                >
                  sign up
                </button>
              </div>
              <div className="ml-6 h-2">
                {messageType === "success" && (
                  <p className="text-green-500 text-xs">
                    Successfully signed up
                  </p>
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
                  className="appearance-none w-4 h-4 min-w-4 min-h-4 rounded-full border-2 border-white bg-transparent checked:bg-white focus:outline-none transition duration-200"
                />
                <span className="cursor-pointer text-xs pl-2 text-white">
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

      <div className="mt-28">
        <div className="text-center mb-8">
          © 2024 Barnabas Samuel - All rights reserved
        </div>
        <div className="flex  justify-between items-center w-full ">
          <div className="w-1/4 h-[1px] bg-white"></div>
          <div className="w-1/2 place-items-center grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 space-y-2 md:gap-0  md:divide-x">
            <div className="flex items-center justify-center cursor-pointer hover:text-black w-full">
              Terms of Service
            </div>
            <div className="flex items-center justify-center cursor-pointer hover:text-black w-full">
              Return Policy
            </div>
            <div className="flex items-center justify-center cursor-pointer hover:text-black w-full">
              Privacy Policy
            </div>
          </div>
          <div className="w-1/4 h-[1px] bg-white"></div>
        </div>
      </div>
    </div>
  )
}
