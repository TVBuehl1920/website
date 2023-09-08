import { graphql, useStaticQuery } from "gatsby"

export const GetAllSportProgram = () => {
  // fix
  const { allDatoCmsSportProgram } = useStaticQuery(graphql`
    query SportProgramQuery {
      allDatoCmsSportProgram(sort: {position: ASC}) {
        nodes {
          id
          slug
          title
          previewText
          previewImage {
            url
          }
        }
      }
    }
  `)

  return allDatoCmsSportProgram.nodes
}

export default GetAllSportProgram
