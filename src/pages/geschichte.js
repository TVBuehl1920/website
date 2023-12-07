import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/base/layout"
import { Seo } from "../components/base/seo"
import Container from "../components/base/Container"
import TimelineComponent from "../components/timeline/TimelineComponent"
import { GetAllTimelineEvents } from "../queries/timeline"

const GeschichtePage = ({ data }) => {
  const pageData = data && data.datoCmsStory
  const [timeline] = useState(GetAllTimelineEvents())

  return (
    <Layout>
      <Container>
        <div class="mx-auto max-w-2xl text-center">
          <h1>Geschichte Turnverein 1920 Bühl e.V.</h1>
        </div>
        <TimelineComponent data={timeline && timeline} />
        {pageData.content && (<div
          className="mt-6 text-lg leading-8 text-gray-700 prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: pageData.content }}
        />)}

      </Container>
    </Layout>
  )
}
export default GeschichtePage

export const query = graphql`
  query PageQuery {
    datoCmsStory {
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
  const seoSettings = (data && data.data.datoCmsStory.seoSettings) || {}
  const pageData = data && data.data.datoCmsStory
  return (
    <Seo
      title={seoSettings?.title}
      description={seoSettings.description}
      googleFollow={pageData?.googleFollow}
      googleIndex={pageData?.googleIndex}
    />
  )
}
