import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/base/layout"
import { Seo } from "../components/base/seo"
import Container from "../components/base/Container"

const ContactPage = ({ data }) => {
  const pageData = data && data.datoCmsContact

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
export default ContactPage

export const query = graphql`
  query PageQuery {
    datoCmsContact {
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
  const seoSettings = (data && data.data.datoCmsContact.seoSettings) || {}
  const pageData = data && data.data.datoCmsContact
  return (
    <Seo
      title={seoSettings?.title}
      description={seoSettings.description}
      googleFollow={pageData?.googleFollow}
      googleIndex={pageData?.googleIndex}
    />
  )
}
