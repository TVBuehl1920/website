import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/base/layout"
import { Seo } from "../components/base/seo"
import Container from "../components/base/Container"

const TurnratPage = ({ data }) => {
  const pageData = data && data.datoCmsTurnrat

  return (
    <Layout>
      <Container prose>
        {" "}
        <div
          className="mt-6 text-lg leading-8 text-gray-700 prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: pageData.content }}
        />
      </Container>
    </Layout>
  )
}
export default TurnratPage

export const query = graphql`
  query PageQuery {
    datoCmsTurnrat {
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
  const seoSettings = (data && data.data?.datoCmsTurnrat?.seoSettings) || {}
  return (
    <Seo
      title={seoSettings?.title}
      description={seoSettings.description}
      googleFollow={data.data?.datoCmsTurnrat?.googleFollow}
      googleIndex={data.data?.datoCmsTurnrat?.googleIndex}
    />
  )
}
