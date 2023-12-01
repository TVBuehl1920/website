import * as React from "react"
import Layout from "../components/base/layout"
import { Seo } from "../components/base/seo"
import ImageGallery from "../components/imageGallery/imageGallery"
import SportContentSection from "../components/contentSection/sportContentSection"
import Container from "../components/base/Container"
export default function Sportangebote(props) {
  const pageContext = props.pageContext

  return (
    <Layout>
      <Container>
        <SportContentSection
          title={pageContext?.title}
          description={pageContext?.content}
          imageURL={pageContext?.image?.url}
        />
        <div className="gallerySpacing">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ImageGallery imageArray={pageContext?.imageGallery} />{" "}
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export const Head = props => {
  const seoSettings = (props && props.pageContext?.seoSettings) || {}
  const pageData = props && props.pageContext

  return (
    <Seo googleFollow={pageData?.googleFollow}
      googleIndex={pageData?.googleIndex}
      title={seoSettings.title ? seoSettings.seoSettings : ''}
      description={seoSettings.description ? seoSettings.description : ''} />
  )
}
