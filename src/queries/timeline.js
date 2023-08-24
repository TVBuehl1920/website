import { graphql, useStaticQuery } from "gatsby"

export const GetAllTimelineEvents = () => {
  // fix
  const { allDatoCmsTimeline } = useStaticQuery(graphql`
    query TimelineQuery {
      allDatoCmsTimeline {
        edges {
          node {
            id
            year
            title
            text
            originalId
          }
        }
      }
    }
  `)

  return allDatoCmsTimeline.edges
}

export default GetAllTimelineEvents
