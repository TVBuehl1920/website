import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/base/layout"
import { Seo } from "../components/base/seo"
import LazyImage from "../components/base/LazyImage"
import Container from "../components/base/Container"
const VorstandPage = ({ data }) => {
  const pageData = data && data.allDatoCmsVorstand.edges[0].node
  return (
    <Layout>
      <Container>
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h1> Vorstandsteam</h1>
          </div>
          <ul
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            {pageData?.member?.map(person => (
              <li key={person.name} >
                {person.image?.url ? (

                  <LazyImage
                    classNames="object-cover mx-auto h-56 w-48 rounded-[42px]"
                    aspectRatio={224 / 192}
                    src={person.image.url}
                    alt={person.name}
                    width={192}
                    height={224}
                  />
                  // <img
                  //   className="object-cover mx-auto h-56 w-48 rounded-[42px]"
                  //   src={person.image.url}
                  //   alt={person.name}
                  //   width={192}
                  //   height={224}
                  // />
                ) : null}
                {person.name ? (
                  <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                ) : (
                  ""
                )}
                <p className="text-base text-gray-600">{person.role}</p>
                <p className="mt-4 text-base  text-gray-600">{person.tel}</p>
                {person.email ? (
                  <a
                    href={`mailto:${person.email}`}
                    className="mt-4 text-base  text-blue-400"
                  >
                    {person.email}
                  </a>
                ) : null}
              </li>
            ))}
          </ul>
          {pageData?.content && (<div
            className="mt-6 text-lg leading-8 text-gray-700 prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: pageData?.content }}
          />)}

        </div>
      </Container>
    </Layout>
  )
}

export default VorstandPage

export const query = graphql`
  query VorstandQuery {
    allDatoCmsVorstand {
      edges {
        node {
          id
          googleIndex
          googleFollow
          seoSettings {
            title
            description
          }
          content
          member {
            id
            name
            role
            image {
              url
            }
            tel
            email
          }
        }
      }
    }
  }
`

export const Head = data => {
  const seoSettings =
    (data && data.data.allDatoCmsVorstand.edges[0].node?.seoSettings) || {}
  const pageData = data && data.data.allDatoCmsVorstand.edges[0].node
  return (
    <Seo
      title={seoSettings?.title}
      description={seoSettings.description}
      googleFollow={pageData?.googleFollow}
      googleIndex={pageData?.googleIndex}
    />
  )
}
