import { useStaticQuery, graphql } from "gatsby"

export const useLatestBlogPosts = () => {
  const data = useStaticQuery(graphql`
    query LatestBlogPostsQuery {
      allWpPost(sort: { fields: date, order: DESC }) {
        nodes {
          id
          title
          excerpt
          moreBlogPostFields {
            readTime
          }
          slug
          uri
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `)
  return data
}

export default useLatestBlogPosts
