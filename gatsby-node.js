exports.createPages = async ({ graphql, actions, reporter }) => {
  const result = await graphql(`
    {
      allWpPost {
        nodes {
          __typename
          id
          databaseId
          uri
        }
      }
    }
  `)
  if (result.errors) {
    reporter.error("There was an error fetching posts", result.errors)
  }
  const { allWpPost } = result?.data
  let template = require.resolve(`./src/templates/blog-post.js`)
  allWpPost.nodes.map(post => {
    actions.createPage({
      path: `blog${post.uri}`,
      component: template,
      context: post,
    })
  })
}
