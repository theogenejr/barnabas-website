import * as React from "react"
import { navigate } from "gatsby"
import { motion, useScroll, useSpring } from "framer-motion"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const SinglePost = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  return (
    <Layout>
      <div className="w-full md:items-start md:justify-between flex-col md:flex-row gap-4 flex relative px-4 py-8 md:py-16">
        <motion.div
          className="fixed top-16 left-9 right-9 h-[2px] z-20 origin-left bg-goodBlue "
          style={{ scaleX }}
        />
        <div
          className=" flex gap-2 items-center group pl-2 hover: hover:text-gray-500 uppercase cursor-pointer font-semibold text-base"
          onClick={() => navigate(-1)}
        >
          <div className=" w-5 ">
            <svg
              viewBox="0 0 26 16"
              fill="none"
              className="rotate-180"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 15.2891L16.5938 13.8906L21.4766 9.01562H0.710938V6.98438H21.4766L16.5938 2.10156L18 0.710938L25.2891 8L18 15.2891Z"
                className="fill-[#131212] group-hover:fill-gray-500"
              ></path>
            </svg>
          </div>
          <span>back</span>
        </div>
        <div className="flex items-center justify-center sm:mx-10 md:w-[80%] lg:w-[60%]">
          <div className="shareLinks"></div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-4 text-lg text-[#6b7280]">
              <span>Wednesday 23, 2024 </span>
              <span className="w-2 h-2 bg-[#6b7280] rounded-full"></span>
              <span>5 min Read</span>
            </div>
            <div className="sm:text-5xl text-3xl font-bold mt-4 text-[#2f1c6a]">
              <span>Smyrna My Son: Name and Song meaning</span>
            </div>
            <div className="w-full mt-8 rounded-3xl h-[70vh]">
              <StaticImage
                src="../images/son2.jpg"
                className="w-full h-full rounded-3xl object-cover "
                alt="descriptive image"
              />
            </div>
            <div className="flex flex-col text-[#36344d] mt-8 text-xl">
              My son's name is Smyrna. Today, I would like to share with you all
              its special meaning to me. First, as it is the ancient Greek name
              for the city of Smyrna which is located in modern-day Izmir,
              Turkey– said to be located at a strategic point on the Aegean
              coast of Anatolia. Due to its advantageous port conditions, its
              ease of defense, and its good inland connections, Smyrna rose to
              great prominence, and was once one of the most illustrious of all
              ancient and Hellenistic-era Greek cities. Smyrna was strong, in my
              song I say "You're unbreakable". Smyrna also symbolizes the beauty
              and prosperity that comes from being in high places. As in my
              song, I say "The city on-the mount, The city on-high, Smyrna my
              son, shine to the world" - "A city that is set on an hill cannot
              be hid." Matt. 5:14. Smyrna represents a city on the mount, a
              symbol of elevation and being on high places. It's a reminder for
              me to always strive for beauty and success in my own life and in
              my son's life. It also reminds me of the importance of setting
              high standards and goals for my son, and striving to reach new
              heights. The city on high shows brightness and radiance. It is
              also a reminder to me of the importance of raising my son to be a
              shining light in the world, to be a positive influence and to make
              a difference. It also symbolizes the ability to overcome darkness
              and to bring hope to others. Smyrna also has a biblical meaning:
              Smyrna (Smyrna means “Myrrh.”) - is an expensive spice, used for
              making perfume, incense, medicine, and anointing oil products. In
              my song, you will hear words like Smyrna "Spice of my life". myrrh
              was an important trade item obtained from Arabia, Abyssinia, and
              India - frankincense and myrrh are in then more valuable than
              Gold. That why in my song, I say, "my diamond" "so precious, So
              sweet". Myrrh is precious as in value, Myrrh is sweet, it is
              referred to as the "Sweet smelling myrrh", in the Bible as in "The
              mountains of myrrh" - a symbol of strength and stability. "The
              most pure myrrh" same words I use in my song. sweet smelling myrrh
              is a symbol of beauty and purity. Myrrh was associated with kings
              in the past, in my song, Smyrna is the "king of my heart" as of
              "love". At the birth of Jesus, the two wise men, brought him
              "gifts of gold, frankincense, and MYRRH.” (Matt. 2:11) My wife MI,
              and I, dedicates Smyrna to him today. As myrrh is a symbol of the
              most precious and valuable treasure. It is exactly how we see our
              son, as the most precious gift in our lives. It's also a reminder
              for me to always strive to be a sweet, loving and pure person and
              to raise my son to be the same. It's also a symbol of celebration
              and joy, which is exactly how I feel about being a dad and having
              my son in my life. As "mountain of myrrh" - I am reminded of the
              importance of building a strong foundation for my son, both
              emotionally and physically. It also symbolizes the richness and
              abundance that comes from hard work and perseverance. In the
              Bible, Smyrna is pictured also as one of the seven churches of
              Asia in the book of Revelation. This meaning symbolizes endurance
              and faith in the face of persecution. Their suffering and
              sacrifice to God is sweet like myrrh, and if they overcome, he
              promised them a crown of life. To me, the name Smyrna represents
              strength, resilience and the ability to overcome challenges. It's
              a symbol of purity, holiness and spiritual transformation. It's a
              reminder for me to always strive for spiritual growth and to raise
              my son to be a person of strong faith and character. Lastly, I
              learned that in Saudi Arabia: The name Smyrna means "External
              life". We thank God for the gift of life.
            </div>
          </div>
        </div>
        <div className="otherPosts"></div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Shop" />

export default SinglePost
