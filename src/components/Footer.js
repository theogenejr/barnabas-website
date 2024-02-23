import emailjs from "@emailjs/browser"
import { Link } from "gatsby"
import React, { useRef, useState } from "react"
import SocialMedia from "./SocialMedia"

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
    <div className="  text-white rounded-t-3xl  bg-goodBlue py-10 md:py-32 sm:px-20 px-4">
      <div className="flex justify-stretch items-start md:gap-20 gap-10 flex-col lg:flex-row w-full">
        <ul className="flex w-full lg:w-1/2 flex-wrap gap-4 items-center justify-center lg:justify-between">
          <li className="">
            <Link
              to="/blog"
              className="text-2xl font-bold capitalize cursor-pointer  hover:text-black transition duration-200"
            >
              Blog
            </Link>
          </li>
          <li className="">
            <Link
              to="/music"
              className="text-2xl font-bold capitalize cursor-pointer  hover:text-black transition duration-200"
            >
              music
            </Link>
          </li>
          <li className="">
            <Link
              to="/about"
              className="text-2xl font-bold capitalize cursor-pointer  hover:text-black transition duration-200"
            >
              About
            </Link>
          </li>
          <li className="">
            <Link
              to="/shop"
              className="text-2xl font-bold capitalize cursor-pointer  hover:text-black transition duration-200"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-2xl font-bold capitalize cursor-pointer  hover:text-black transition duration-200"
            >
              contact
            </Link>
          </li>
        </ul>
        <div className="w-full gap-2 text-2xl font-bold flex flex-col  lg:w-1/2 ">
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

      <div className="flex-col mt-14 lg:mt-32 justify-between items-center w-full md:flex md:place-items-start">
        <ul className="flex w-full justify-center  sm:justify-between text-sm uppercase font-medium flex-wrap mb-8">
          <li className="">2024 Barnabas Samuel</li>
          <li className="">copyright all rights reserved</li>
        </ul>
        <div className="flex flex-wrap justify-center sm:justify-between w-full items-center sm:gap-4 gap-8">
          <SocialMedia effectColor="white" />
          <div className="group relative flex justify-center items-center text-white text-sm font-bold">
            <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md"></div>

            <div className="min-w-56 flex items-center justify-center">
              <div className="shadow-md flex items-center group-hover:gap-2 bg-black p-3 rounded-full cursor-pointer duration-300">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="20px"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-white"
                >
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
                  ></path>
                </svg>
                <span className="text-[0px] group-hover:text-sm duration-300">
                  Website by theogeneJR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
