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
          className="cursor-pointer group hover:bg-gray-200/40 hover:shadow-md transition duration-200 p-4 rounded-2xl"
        >
          <Link to={`/blog${post.uri}`}>
            <div className="h-52">
              {post.featuredImage && (
                <GatsbyImage
                  image={post.featuredImage.node}
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.title}
                  className="h-full object-cover rounded-2xl"
                />
              )}
            </div>

            <div className="mt-4 text-lg group-hover:text-goodBlue font-semibold">
              {post.title}
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default RecentBlogPosts
