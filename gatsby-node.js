const each = require("lodash/each")
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Define the template for blog post
const newsTemplate = path.resolve(`./src/templates/aktuelles.js`)
const sportProgramTemplate = path.resolve(`./src/templates/sportangebote.js`)
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  await graphql(
    `
      {
        allDatoCmsNews {
          edges {
            node {
              id
              slug
              title
              content
              seoSettings {
                title
                description
                image {
                  url
                }
                twitterCard
              }
              googleIndex
              googleFollow
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      console.log(result.errors)
      reject(result.errors)
    }

    const newsContents = result.data.allDatoCmsNews.edges
    Promise.all(
      each(newsContents, async (newsContent, index) => {
        const next =
          index === newsContents.length - 1
            ? null
            : newsContents[index + 1].node
        const previous = index === 0 ? null : newsContents[index - 1].node

        createPage({
          ownerNodeId: newsContent.node.id,
          path: `/aktuelles/${newsContent.node.slug}/`,
          component: newsTemplate,
          context: {
            id: newsContent.node.id,
            ...newsContent.node,
            previous,
            next,
          },
        })
      })
    )
  }),
    await graphql(
      `
        {
          allDatoCmsSportProgram {
            edges {
              node {
                id
                slug
                googleIndex
                googleFollow
                title
                seoSettings {
                  title
                  description
                }
                content
                image {
                  url
                }
                imageGallery {
                  url
                }
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      const sportProgramContents = result.data.allDatoCmsSportProgram.edges
      Promise.all(
        each(sportProgramContents, async (sportProgramContent, index) => {
          const next =
            index === sportProgramContents.length - 1
              ? null
              : sportProgramContents[index + 1].node
          const previous =
            index === 0 ? null : sportProgramContents[index - 1].node

          createPage({
            ownerNodeId: sportProgramContent.node.id,
            path: `/sportangebote/${sportProgramContent.node.slug}/`,
            component: sportProgramTemplate,
            context: {
              id: sportProgramContent.node.id,
              ...sportProgramContent.node,
              previous,
              next,
            },
          })
        })
      )
    })
}

// /**
//  * @type {import('gatsby').GatsbyNode['onCreateNode']}
//  */
// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })

//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

// /**
//  * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
//  */
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions

//   // Explicitly define the siteMetadata {} object
//   // This way those will always be defined even if removed from gatsby-config.js

//   // Also explicitly define the Markdown frontmatter
//   // This way the "MarkdownRemark" queries will return `null` even when no
//   // blog posts are stored inside "content/blog" instead of returning an error
//   createTypes(`
//     type SiteSiteMetadata {
//       author: Author
//       siteUrl: String
//       social: Social
//     }
//     type Author {
//       name: String
//       summary: String
//     }
//     type Social {
//       twitter: String
//     }
//     type MarkdownRemark implements Node {
//       frontmatter: Frontmatter
//       fields: Fields
//     }
//     type Frontmatter {
//       title: String
//       description: String
//       date: Date @dateformat
//     }
//     type Fields {
//       slug: String
//     }
//   `)
// }
