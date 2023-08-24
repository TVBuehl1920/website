import { graphql, useStaticQuery } from "gatsby"

export const GetAllTrainingTimes = () => {
  // fix
  const { allDatoCmsTrainingTime } = useStaticQuery(graphql`
    query TrainingTimeQuery {
      allDatoCmsTrainingTime {
        edges {
          node {
            id
            day
            time
            group
            trainer
          }
        }
      }
    }
  `)

  return allDatoCmsTrainingTime.edges
}

export default GetAllTrainingTimes
