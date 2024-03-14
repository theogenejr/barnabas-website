import * as React from "react"
import { navigate, graphql } from "gatsby"
import { motion, useScroll, useSpring } from "framer-motion"
import { useLocation } from "@reach/router"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import ShareButtons from "../components/SocialShare"
import Comments from "../components/firebaseCommenting/Comments"
import { useState } from "react"
import { firestore } from "../../firebase"
import { useEffect } from "react"
// import Comments from "../components/Comments"

const SinglePost = ({ data }) => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const { wpPost } = data
  const location = useLocation() // use useLocation hook to get the current location

  const formatDate = dateString => {
    const dateObj = new Date(dateString)
    const weekday = dateObj.toLocaleDateString("en-US", { weekday: "long" })
    const month = dateObj.toLocaleDateString("en-US", { month: "long" })
    const day = dateObj.getDate()
    const year = dateObj.getFullYear()

    return `${weekday}, ${month} ${day}, ${year}`
  }

  // Firebase Comments
  const slug = wpPost.slug
  const [comments, setComments] = useState([])
  useEffect(() => {
    const unsubscribe = firestore
      .collection(`comments`)
      .where("slug", "==", slug)
      .onSnapshot(snapshot => {
        const posts = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        setComments(posts)
      })
    return () => unsubscribe()
  }, [slug])

  // End of firebase comments

  const URL_BASE = "http://localhost:8000"
  return (
    <Layout>
      <Seo title={wpPost.title} description={wpPost.excerpt} />
      <div className="w-full md:items-start md:justify-between flex-col md:flex-row gap-4 flex relative px-4 py-8 md:py-16">
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

        <div className="flex justify-center sm:ml-10 md:w-[80%] lg:w-[60%]">
          <motion.div
            className="fixed top-16 left-0 right-0 h-[2px] z-20 origin-left bg-goodBlue "
            style={{ scaleX }}
          />
          <div className="">
            <div className="flex flex-wrap items-center gap-4 text-lg text-[#6b7280]">
              <span>{formatDate(wpPost.date)} </span>
              <span className="w-2 h-2 bg-[#6b7280] rounded-full"></span>
              <span>5 min Read</span>
            </div>

            <div className="sm:text-5xl text-3xl font-bold mt-4 text-[#2f1c6a]">
              <span>{wpPost.title}</span>
            </div>
            <ShareButtons
              title={wpPost.title}
              url={`${URL_BASE}${location.pathname}`} // Update the URL              twitterHandle={"BarnabasAfrica"}
            />
            <div className="w-full mt-4 rounded-3xl h-[70vh]">
              {wpPost.featuredImage && (
                <GatsbyImage
                  src={wpPost.featuredImage.node.sourceUrl}
                  image={wpPost.featuredImage.node}
                  alt={wpPost.title}
                  className="w-full h-full object-cover rounded-3xl"
                />
              )}
            </div>
            <div
              className="wp-content text-[#36344d] mt-8 text-xl font-light"
              dangerouslySetInnerHTML={{ __html: wpPost.content }}
            />
          </div>
        </div>

        <div className="otherPosts"></div>
      </div>
      <div className="px-4">
        <Comments slug={slug} comments={comments} />
        {/* <Comments
          post={wpPost}
          location="single"
          wordPressUrl={process.env.WP_URL || `http://barnabas.local/graphql`}
        /> */}
      </div>
    </Layout>
  )
}

export default SinglePost

export const query = graphql`
  query postById($id: String) {
    wpPost(id: { eq: $id }) {
      __typename
      id
      uri
      slug
      title
      date
      content
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`
