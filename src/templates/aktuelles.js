import * as React from "react"
import Layout from "../components/base/layout"
import { Seo } from "../components/base/seo"
import Container from "../components/base/Container"
export default function Aktuelles(props) {
  const pageContext = props.pageContext
  return (
    <Layout>
      <Container>
        <div className="mx-auto w-full max-w-7xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-6xl">

              <div className="xl:relative">
                <div className="mx-auto max-w-4xl">
                  <article
                    className=" w-full "
                    itemType="http://schema.org/Article"
                  >
                    <header className="mb-4 lg:mb-6">
                      <h1 >
                        {pageContext.title}
                      </h1>
                    </header>
                    <div className="mx-auto max-w-4xl text-base leading-7 text-gray-700">
                      {" "}
                      <section
                        className="mt-8 prose dark:prose-invert text-gray-700"
                        dangerouslySetInnerHTML={{ __html: pageContext.content }}
                        itemProp="articleBody"
                      />
                    </div>
                  </article>
                </div>

              </div>
            </div>

          </div>
          {" "}

        </div>
      </Container>
    </Layout>
  )
}
export const Head = props => {
  const seoSettings = (props && props.pageContext.seoSettings) || {}
  const pageData = props && props.pageContext

  return (
    <Seo googleFollow={pageData?.googleFollow}
      googleIndex={pageData?.googleIndex}
      title={seoSettings.title ? seoSettings.seoSettings : ''}
      description={seoSettings.description ? seoSettings.description : ''} />
  )
}