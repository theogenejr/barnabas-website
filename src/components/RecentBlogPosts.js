import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const RecentBlogPosts = () => {
  // Query the WordPress posts data
  const data = useStaticQuery(graphql`
    {
      allWpPost(sort: { fields: date, order: DESC }, limit: 3) {
        nodes {
          id
          title
          uri
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 w-full">
      {/* Render your blog posts here */}
      {data.allWpPost.nodes.map(post => (
        <div
          key={post.id}
          className="cursor-pointer group  border-black/10 border-[1px] hover:-translate-y-1 transition duration-500 p-4 rounded-3xl"
        >
          <Link to={`/blog${post.uri}`}>
            <div className="h-52 overflow-hidden rounded-[12px]">
              {post.featuredImage && (
                <GatsbyImage
                  image={post.featuredImage.node}
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.title}
                  className="h-full transition duration-500 group-hover:scale-105 object-cover rounded-[12px]"
                />
              )}
            </div>

            <div className="mt-4 text-sm lg:text-lg group-hover:text-goodBlue font-semibold">
              {post.title}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default RecentBlogPosts
