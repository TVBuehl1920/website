import * as React from "react"
import Layout from "../components/base/layout"
import { Seo } from "../components/base/seo"
import Container from "../components/base/Container"
export default function Aktuelles(props) {
  const pageContext = props.pageContext
  return (
    <Layout>
      <Container>
      <div className="flex justify-between px-4 py-6 mx-auto max-w-screen-xl ">
        {" "}
        <article
          className="mx-auto w-full max-w-2xl px-4 sm:px-6 xl:max-w-3xl xl:px-0 pt-10"
          itemType="http://schema.org/Article"
        >
          <header className="mb-4 lg:mb-6">
            <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 md:text-6xl lg:col-span-2 xl:col-auto sm:text-5xl">
              {pageContext.title}
            </h1>
          </header>
          <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
            {" "}
            <section
            className="mt-6 text-lg leading-8 text-gray-700"
              dangerouslySetInnerHTML={{ __html: pageContext.content }}
              itemProp="articleBody"
            />
          </div>
        </article>
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