import emailjs from "@emailjs/browser"
import { Link } from "gatsby"
import React, { useRef, useState } from "react"
import SocialMedia from "./SocialMedia"
import { StaticImage } from "gatsby-plugin-image"
import Modal from "./Modal"
import { motion } from "framer-motion"

export const Footer = () => {
  const [isTermsModalOpen, setTermsModalOpen] = useState(false)
  const [isReturnModalOpen, setReturnModalOpen] = useState(false)
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false)

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
    <div className="  text-white  bg-goodBlue py-10 md:py-16  ">
      <motion.div
        initial={{ translateY: 150, opacity: 0 }}
        whileInView={{ translateY: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex justify-stretch px-4 items-center lg:items-start md:gap-20 sm:px-20 gap-10 flex-col lg:flex-row w-full"
      >
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
                className="text-xl font-semiBold capitalize cursor-pointer  hover:text-black transition duration-500"
              >
                Blog
              </Link>
            </li>
            <li className="">
              <Link
                to="/music"
                className="text-xl font-semiBold capitalize cursor-pointer  hover:text-black transition duration-500"
              >
                music
              </Link>
            </li>
            <li className="">
              <Link
                to="/about"
                className="text-xl font-semiBold capitalize cursor-pointer  hover:text-black transition duration-500"
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                to="/shop"
                className="text-xl font-semiBold capitalize cursor-pointer  hover:text-black transition duration-500"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-xl font-semiBold capitalize cursor-pointer  hover:text-black transition duration-500"
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-1/2 md:w-1/6 items-center justify-center">
          <StaticImage
            src="../images/logo-white-lg.png"
            alt="bs-logo"
            className="-translate-x-4"
          />
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
                  className="text-xs leading-3 transition duration-500 mb-2 min-w-16 max-w-16 h-16 flex items-center justify-center uppercase bg-black rounded-full hover:bg-white hover:text-black"
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
                    <a
                      onClick={() => setPrivacyModalOpen(true)}
                      className="underline"
                    >
                      privacy policy
                    </a>
                  </p>
                </span>
              </label>
            </form>
          </div>
        </div>
      </motion.div>

      <div className="mt-28">
        <div className="text-center mb-8">
          © 2024 Barnabas Samuel - All rights reserved
        </div>
        <div className="flex  justify-between items-center w-full ">
          <div className="w-1/4 h-[1px] bg-white"></div>
          <div className="w-1/2 place-items-center grid grid-cols-1 md:grid-cols-3 space-y-2 md:gap-0  md:divide-x">
            <div
              className="flex items-center justify-center cursor-pointer hover:text-black w-full transition duration-500"
              onClick={() => setTermsModalOpen(true)}
            >
              Terms of Service
            </div>
            <div
              className="flex items-center justify-center cursor-pointer hover:text-black w-full transition duration-500"
              onClick={() => setReturnModalOpen(true)}
            >
              Return Policy
            </div>
            <div
              className="flex items-center justify-center cursor-pointer hover:text-black w-full transition duration-500"
              onClick={() => setPrivacyModalOpen(true)}
            >
              Privacy Policy
            </div>
          </div>
          <div className="w-1/4 h-[1px] bg-white"></div>
        </div>
      </div>

      {isTermsModalOpen && (
        <Modal onClose={() => setTermsModalOpen(false)}>
          <h1 className="text-2xl text-goodBlue font-bold">PRIVACY POLICY</h1>

          <div className="text-black text-lg mt-4">
            <p className="">
              This Privacy Policy explains how we collect, use, and share your
              personal information when you visit or purchase something from our
              website (the "Site").
            </p>
            <p class=" mt-4">
              <b>Information We Collect:</b>
            </p>

            <ul class="list-disc pl-4 mb-8">
              <li class="mb-2">
                <b>Device Information:</b> We automatically collect data about
                your device, such as browser type, IP address, and browsing
                activity. This helps us improve your experience and optimize the
                Site.
              </li>
              <li class="mb-2">
                <b>Order Information:</b> When you buy something, we collect
                your name, billing address, payment details, email, and phone
                number. This information fulfills your order and keeps you
                informed.
              </li>
            </ul>

            <p class="">
              <b>How We Use Your Information:</b>
            </p>

            <ul class="list-disc pl-4 mb-8">
              <li class="mb-2">
                <b>Order Information:</b> We use this to process your order,
                communicate about it, prevent fraud, and offer relevant products
                or services (if you agree).
              </li>
              <li class="mb-2">
                <b>Device Information:</b> We use this to improve the Site,
                analyze user behavior, and personalize your experience. We also
                use it to identify and prevent potential fraud.
              </li>
            </ul>

            <p class="">
              <b>Sharing Your Information:</b>
            </p>

            <p class="mb-4">
              We share your information with trusted third-party partners who
              help us operate the Site and fulfill your orders (e.g., payment
              processing and analytics). You can learn more about their privacy
              practices through the links provided in the full policy.
            </p>

            <p class="">
              <b>Your Rights:</b>
            </p>

            <p class="mb-4">
              You have the right to access, correct, update, or delete your
              personal information. Contact us using the information below to
              exercise these rights.
            </p>

            <p class="">
              <b>Data Retention:</b>
            </p>

            <p class="mb-4">
              We retain your order information for our records unless you
              request deletion.
            </p>

            <p class="">
              <b>Changes:</b>
            </p>

            <p class="mb-4">
              We may update this policy periodically. Please check back for
              changes.
            </p>

            <p class="">
              <b>Contact Us:</b>
            </p>

            <p class="mb-4">
              If you have any questions or concerns about our privacy practices,
              please contact us at: Email:{" "}
              <a
                href="mailto:info@barnabas.one"
                class="text-blue-500 hover:underline"
              >
                info@barnabas.one
              </a>
            </p>

            <p class="mb-0">
              <b>Revision Date:</b> February 02, 2024
            </p>
          </div>
        </Modal>
      )}
      {isReturnModalOpen && (
        <Modal onClose={() => setReturnModalOpen(false)}>
          <h1 className="text-2xl text-goodBlue uppercase font-bold mb-4">
            return policy
          </h1>
          <p class="text-black">
            Easy Returns: We want you to be happy with your purchase! We offer
            full refunds for digital products that are found to be faulty due to
            creator error, such as broken code causing the product not to
            function as intended.
          </p>
          <h3 class="text-lg font-bold mt-4 text-black">Return Process:</h3>
          <ol class="list-decimal pl-4 mb-8 text-black">
            <li>
              <b>Contact Us:</b> To initiate a return, please email
              info@barnabas.one with "Code Shop - Return Request" in the subject
              line. Briefly explain why you'd like to return the product.
            </li>
            <li>
              <b>Inspection:</b> We'll review your request and inspect the
              product (if applicable).
            </li>
            <li>
              <b>Decision and Refund:</b> If confirmed faulty, you'll receive a
              full refund within 3-7 business days to your original payment
              method.
            </li>
            <li>
              <b>Content Removal:</b> Following a successful return, please
              remove any details associated with the purchase and destroy any
              downloaded materials, including electronic and printed copies like
              PDFs.
            </li>
          </ol>
          <p class="text-black mb-4">
            <b>Important Notes:</b> We reserve the right to deny returns due to
            suspected misuse of the policy or issues outside our control.
          </p>
          <p class="mb-0 text-black">
            <b>Revision Date:</b> February 02, 2024
          </p>
        </Modal>
      )}
      {isPrivacyModalOpen && (
        <Modal onClose={() => setPrivacyModalOpen(false)}>
          <div className="text-black text-lg mt-4">
            <div className="text-black text-lg mt-4">
              <h1 className="text-2xl text-goodBlue uppercase font-bold mb-4">
                terms of use
              </h1>
              <p className="">
                Welcome to Barnabas.one! These <b>Terms of Use</b> ("Terms")
                govern your access to and use of this website (the "Website")
                operated by <b>Barnabas Samuel</b> ("we," "us," or "our").
              </p>

              <p className="mt-4">
                <b>1. Acceptance of Terms</b>
              </p>
              <p className="">
                By accessing or using the Website, you agree to be bound by
                these Terms. If you disagree with any part of these Terms, you
                may not access or use the Website.
              </p>

              <p className="mt-4">
                <b>2. Use of the Website</b>
              </p>
              <p className="">
                The Website is provided for your personal, non-commercial use
                only. You may not use the Website for any purpose that is
                unlawful or prohibited by these Terms. You agree to use the
                Website in a manner that does not:
              </p>
              <ul className="list-disc pl-4 mb-8">
                <li className="mb-2">
                  Infringe on the intellectual property rights of others.
                </li>
                <li className="mb-2">
                  Violate any applicable laws or regulations.
                </li>
                <li className="mb-2">
                  Disrupt or harm the Website or its servers.
                </li>
                <li className="mb-2">
                  Engage in any fraudulent or misleading activity.
                </li>
                <li className="mb-2">
                  Transmit any harmful or offensive content.
                </li>
              </ul>

              <p className="mt-4">
                <b>3. User Content</b>
              </p>
              <p className="">
                The Website may allow you to submit content ("User Content").
                You retain all ownership rights to your User Content, but by
                submitting User Content, you grant us a non-exclusive,
                irrevocable, royalty-free, worldwide license to use, modify,
                publish, and translate your User Content in any and all media.
                You are solely responsible for your User Content and any
                consequences of its use. You represent and warrant that your
                User Content does not infringe on the intellectual property
                rights or other rights of any third party.
              </p>

              <p className="mt-4">
                <b>4. Intellectual Property</b>
              </p>
              <p className="">
                The Website and its content, including but not limited to text,
                images, graphics, logos, and trademarks, are the property of us
                or our licensors and are protected by copyright, trademark, and
                other intellectual property laws. You may not use any of this
                content without our prior written permission.
              </p>

              <p className="mt-4">
                <b>5. Disclaimers</b>
              </p>
              <p className="">
                THE WEBSITE AND ALL CONTENT AND SERVICES PROVIDED ON THE WEBSITE
                ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY
                KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE WEBSITE WILL BE
                UNINTERRUPTED, ERROR-FREE, OR SECURE.
              </p>

              <p className="mt-4">
                <b>6. Limitation of Liability</b>
              </p>
              <p className="">
                WE WILL NOT BE LIABLE FOR ANY DAMAGES ARISING OUT OF OR RELATED
                TO YOUR USE OF THE WEBSITE, INCLUDING BUT NOT LIMITED TO DIRECT,
                INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, PUNITIVE, OR
                EXEMPLARY DAMAGES.
              </p>

              <p className="mt-4">
                <b>7. Termination</b>
              </p>
              <p className="">
                We may terminate your access to the Website at any time, for any
                reason, without notice.
              </p>

              <p className="mt-4">
                <b>8. Governing Law and Jurisdiction</b>
              </p>
              <p className="">
                These Terms shall be governed by and construed in accordance
                with the laws of South Sudan, without regard to its conflict of
                law provisions.
              </p>

              <p className="mt-4">
                <b>9. Entire Agreement</b>
              </p>
              <p className="">
                These Terms constitute the entire agreement between you and us
                regarding your use of the Website.
              </p>

              <p className="mt-4">
                <b>10. Changes to the Terms</b>
              </p>
              <p className="">
                We may update these Terms from time to time. By continuing to
                access or use the Website after we update these Terms, you agree
                to be bound by the updated Terms.
              </p>

              <p className="mt-4">
                <b>11. Contact Us</b>
              </p>
              <p className="">
                If you have any questions about these Terms, please contact us
                at{" "}
                <a
                  href="mailto:info@barnabas.one"
                  class="text-blue-500 hover:underline"
                >
                  info@barnabas.one
                </a>
              </p>

              <p className="mt-4">
                <b>Revision Date:</b> February 02, 2024
              </p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  )
}
