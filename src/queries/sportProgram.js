import { graphql, useStaticQuery } from "gatsby"

export const GetAllSportProgram = () => {
  // fix
  const { allDatoCmsSportProgram } = useStaticQuery(graphql`
    query SportProgramQuery {
      allDatoCmsSportProgram {
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
