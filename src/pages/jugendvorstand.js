import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/base/layout"
import { Seo } from "../components/base/seo"
import Container from "../components/base/Container"

const JugendvorstandPage = ({ data }) => {
  const pageData = data && data.datoCmsJugendvorstand

  return (
    <Layout>
      <Container>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div class="mx-auto max-w-2xl text-center">
            <h1>Unser Jugendvorstand</h1>
          </div>
          <div
            className="mt-3 lg:mt-6 text-md lg:text-lg leading-2 lg:leading-5 text-gray-700 prose lg:prose-xl "
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          />
        </div>
      </Container>
    </Layout>
  )
}
export default JugendvorstandPage

export const query = graphql`
  query PageQuery {
    datoCmsJugendvorstand {
      id
      seoSettings {
        title
        description
      }
      googleIndex
      googleFollow
      content
    }
  }
`

export const Head = data => {
  const seoSettings = (data && data.data?.datoCmsJugendvorstand?.seoSettings) || {}
  return (
    <Seo
      title={seoSettings?.title}
      description={seoSettings.description}
      googleFollow={data.data?.datoCmsJugendvorstand?.googleFollow}
      googleIndex={data.data?.datoCmsJugendvorstand?.googleIndex}
    />
  )
}
