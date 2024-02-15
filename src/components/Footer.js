import emailjs from "@emailjs/browser"
import { Link } from "gatsby"
import React, { useRef, useState } from "react"

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
    <div className=" text-white rounded-t-3xl  bg-blue-700 py-32 sm:px-20 px-4">
      <div className="flex justify-stretch items-start gap-20 flex-col lg:flex-row w-full">
        <ul className="flex w-full lg:w-1/2 items-center justify-between">
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
                    Message sent successfully
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
                  <p className="text-gray-600 text-xs">Loading...</p>
                )}
              </div>
              <label className="flex items-center mt-4">
                <input
                  type="checkbox"
                  value={privacyAccepted}
                  onChange={handleCheck}
                  id="checkbox-id"
                  className="appearance-none w-4 h-4 rounded-full border-2 border-white bg-transparent checked:bg-white focus:outline-none transition duration-200"
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
        <ul className="flex w-full  justify-between text-sm uppercase font-medium flex-wrap mb-8">
          <li className="">2024 Barnabas Samuel</li>
          <li className="">copyright all rights reserved</li>
        </ul>
        <div className="flex justify-between w-full items-center gap-4">
          <div className="*:text-black gap-3 flex *:h-5 *:w-5 *:cursor-pointer mr-10">
            <div className="hover:text-white transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
              </svg>
            </div>

            <div className="hover:text-white transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path>
              </svg>
            </div>

            <div className="hover:text-white transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
              </svg>
            </div>

            <div className="hover:text-white transition duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
              </svg>
            </div>
          </div>
          <div className="group relative flex justify-center items-center text-white text-sm font-bold">
            <div className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md"></div>

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
  )
}
