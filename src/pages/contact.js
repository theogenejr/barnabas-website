import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactForm from "../components/ContactForm"
import { motion } from "framer-motion"

const ContactPage = () => (
  <Layout>
    <div className="px-4 py-0">
      <div className="flex flex-col lg:flex-row gap-16 lg:px-8 mt-16">
        <div className="lg:max-w-[40vw]">
          <h2 className=" font-bold text-4xl sm:text-6xl flex flex-col">
            Get in touch{" "}
            <motion.div
              initial={{ height: 16, width: 0 }}
              animate={{ height: 16, width: 100 }}
              transition={{ duration: 1, delay: 0 }}
              className=" bg-goodBlue"
            ></motion.div>
          </h2>
          <div className="text-xs mt-10">
            If you'd like to chat or meet up for a cup of coffee, I'd love to
            hear from you! Please don't hesitate to contact me with any
            questions, business inquiries, or just to say hello. I promise I'm
            friendly and approachable, so don't be shy! While I do my best to
            respond to all messages as quickly as possible, please understand
            that it may take up to 72 hours for me to get back to you in some
            cases. You can use the contact form on this page to send me a
            message, and it will be delivered directly to my inbox. If you
            prefer not to use the contact form, you can also reach me by email
            or phone. However, please note that I do not respond to unsolicited
            commercial or spam messages. Feel free to use any of the methods
            listed above to get in touch with me. I look forward to hearing from
            you!
          </div>
          <div className=" flex-col mt-14 hidden lg:flex">
            <h2 className="text-goodBlue font-bold text-2xl mb-4">
              Leave a message
            </h2>
            <span>Mvara - Sudan Zone, Arua, Uganda </span>
            <span className="flex gap-4 my-1 font-bold">
              <span>+256 775308378 </span>
              <span>+256 785 820239 </span>
            </span>
            <span>info@barnabas.one </span>
          </div>
        </div>

        <ContactForm />
      </div>

      <div className=" flex-col my-14 flex lg:hidden">
        <h2 className="text-goodBlue font-bold text-2xl mb-4">
          Leave a message
        </h2>
        <div>
          <a href="http://"></a> Mvara - Sudan Zone, Arua, Uganda
        </div>
        <div className="flex flex-wrap gap-4 my-1 font-bold">
          <div>
            <a href="tel:+256 775308378">+256 775308378</a>
          </div>
          <div>
            <a href="tel:+256 785 820239">+256 785 820239</a>
          </div>
        </div>
        <div>
          <a href="mailto:info@barnabas.one">info@barnabas.one</a>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Contact" />

export default ContactPage
