import { graphql, useStaticQuery } from "gatsby"

export const GetAllNews = () => {

  const { allDatoCmsNews } = useStaticQuery(graphql`
    query newsQuery {
      allDatoCmsNews(sort: {meta: {publishedAt: DESC}}) {
        edges {
          node {
            id
            slug
            title
            previewText
            meta {
              publishedAt(formatString: "DD MMMM YYYY", locale: "de-DE")
            }
          }
        }
      }
    }
  `)

  return allDatoCmsNews.edges
}

export default GetAllNews