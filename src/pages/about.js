import * as React from "react"
import { motion, useInView } from "framer-motion"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { useRef } from "react"
import ContactForm from "../components/ContactForm"

function Paragrapgh({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref}>
      <p
        style={{
          transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) .3s",
        }}
      >
        {children}
      </p>
    </section>
  )
}

const About = () => {
  const aboutPar = useRef()
  return (
    <Layout>
      <div className=" px-4">
        <div className="h-[calc(100vh-80px)] rounded-3xl overflow-hidden relative my-2 ">
          <div className="w-full h-full bg-black/50 rounded-3xl">
            <StaticImage
              src="../images/prison.png"
              alt="hero image"
              className=" h-full w-full object-cover rounded-3xl grayscale"
            />
          </div>
          <div className="absolute w-full h-full bg-black/50 top-0 left-0 flex items-start pt-48 sm:pt-32 sm:pl-24 pl-6">
            <div className="flex relative flex-col">
              <span className="uppercase text-white text-6xl sm:text-8xl lg:text-9xl font-black z-20">
                about /
              </span>
              <span className="uppercase text-white text-6xl sm:text-8xl lg:text-9xl font-black z-20">
                bio
              </span>
              <div className="bg-blue-800/50 sm:w-52 w-32 h-32  sm:h-52 md:w-72 md:h-72 absolute right-1/2 left-1/2 -top-10 sm:-right-36 md:-right-56 lg:-right-52 rounded-full z-10 sm:-top-14 md:-top-24 lg:-top-20"></div>
            </div>
          </div>
        </div>

        <div
          className="flex lg:mx-64 md:mx-32 sm:mx-20 flex-col gap-8 lg:text-xl md:text-lg mt-12 font-normal text-slate-700"
          ref={aboutPar}
        >
          <Paragrapgh>
            Barnabas Samuel is a South Sudanese musician, songwriter, and
            community activist. He was born on May 25th, 1993, in Kaya, Morobo
            County, Central Equatoria State, South Sudan, during the Sudanese
            Civil War. When Barnabas was a baby, his parents moved to a refugee
            camp in Uganda, and he started his schooling at Nyarillo Pioneer
            Nursery (Koboko) and later attended Nyarilo Primary (Koboko). They
            returned to Yei, South Sudan, when the first protocol of the
            Comprehensive Peace Agreement (CPA) was signed. He grew up in Yei
            and continued his education at Christ the King and Kanjoro for his
            primary education, and Yei Day SS for secondary school.
          </Paragrapgh>
          <Paragrapgh>
            Barnabas goes by several names within his family, including "Amule,"
            “Mule,” "Lubang," "Lugala," and "Sam," while some of his Arab
            Sudanese family friends call him "Iman" and “Juma.” Initially, he
            was a Gospel evangelist and founded the Bible Truth Sowers
            Ministries in 2007, where he served as the president and speaker. In
            church, he sang in the choir and was known as the "son of
            encouragement" for his inspirational messages.
          </Paragrapgh>
          <Paragrapgh>
            In 2016, Barnabas had to flee to Uganda again with his family when
            another civil war erupted in South Sudan. They settled in Rhino Camp
            Refugee Settlement, where they continue to live today. In Uganda, he
            joined the music industry and on September 2nd, 2021, he released
            his debut album SAMBARA, which became a huge success.
          </Paragrapgh>
          <Paragrapgh>
            The songs in his Sambara album confront political injustices, awakes
            social conscience, gives hope, and brings the issues of the people
            to the forefront. In his song Suluta Wa Fata, he says in the intro,
            "De ma mini de minana Junubin," which translates to "This is not
            from me but from us South Sudanese."
          </Paragrapgh>
          <Paragrapgh>
            Barnabas Samuel is the founder and CEO of Ganya Records, a music
            label that has signed several artists. He hopes to develop it into
            one of the best and most professional labels in South Sudan. His
            music style is a mix of afrobeat, reggae, Zouk, Rumba, RnB, and
            Dancehall, but he is most proactive about reggae music. He sings in
            Arabic, Kakwa, and English.
          </Paragrapgh>
          <Paragrapgh>
            Barnabas Samuel draws his inspiration from his mother, Monica Melesi
            Henry, a retired teacher and a devoted member (Lay Leader) of the
            Episcopal Church of South Sudan – ECSS (formerly known as the
            Episcopal Church of Sudan, which is a province of the Anglican
            Communion in South Sudan) who was also a singer. He also draws
            inspiration from South Sudanese legendary reggae singer Emmanuel
            Kembe. Music runs in his family, as his siblings are all involved in
            music or related professions. His sister Selua Lula is a backup
            singer and a teacher, his brother Jaiksana Soro is a musician, peace
            activist, and a photographer/videographer, his younger brother
            Ronald Ladu aka Taylorbeats is a music producer, and their youngest
            sibling Mathew Gita is an artiste and a musician.
          </Paragrapgh>
          <Paragrapgh>
            Barnabas is married to Mimi Yangi Elizabeth, and they have a son
            named Smyrna Barnabas. Born into a life of poverty and a broken
            home, Barnabas Samuel experienced living in refugee camps and on the
            streets, amidst the turmoil of a war-torn country. Despite the
            challenges, he has worked tirelessly to change his future and that
            of his family. Barnabas embodies the very meaning of what it means
            to be a true survivor. For him, music is a perfect form of escapism
            and a channel through which his unprecedented levels of
            determination, passion, enthusiasm, optimism, and perseverance flow.
            Barnabas draws inspiration from his personal experiences and those
            of his country to fuel his music.
          </Paragrapgh>
          <Paragrapgh>
            Barnabas Samuel is deeply passionate about community and is known
            for his community activism work to improve the quality of life of
            his community and promote community life. He co-founded the
            Community Development Centre (CDC), a community concern organization
            that works for the welfare of communities, addressing urgent needs,
            providing empowerment, and creating platforms for community
            development. CDC now operates in both South Sudan and Uganda. In
            2019, he also founded the Barnabas Samuel Foundation, which offers
            opportunities for people to live a fulfilled life.
          </Paragrapgh>
        </div>
      </div>
      <div className="px-4 w-full flex mt-24 my-16 flex-col items-center justify-center">
        <div className="text-lg sm:text-3xl font-bold ">
          <div className="flex flex-col">
            <h2 className=" font-bold text-4xl sm:text-6xl flex flex-col">
              Get in touch
              <motion.div
                initial={{ height: 16, width: 0 }}
                animate={{ height: 16, width: 100 }}
                transition={{ duration: 1, delay: 0 }}
                className=" bg-goodBlue"
              ></motion.div>
            </h2>
            <p className="text-base mt-4 font-normal">
              Have a question or want to chat? Feel free to drop me a line via
              the form below
            </p>
          </div>

          <div className="h-24 flex items-start justify-center mt-2">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="absolute w-[1px] bg-goodBlue"
            ></motion.div>
          </div>
        </div>
        <div className="mt-4 bg-goodBlue/10 backdrop-blur-md transition duration-500 w-full md:w-2/3 sm:p-10 p-2 py-8 rounded-3xl">
          <ContactForm />
        </div>
      </div>
    </Layout>
  )
}
export const Head = () => <Seo title="About" />

export default About
