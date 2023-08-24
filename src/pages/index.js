import * as React from "react"
import { graphql } from "gatsby"

// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/base/layout"
import { Seo } from "../components/base/seo"
import Hero from "../components/hero/hero"
import ContentSection from "../components/contentSection/contentSection"
import Card from "../components/card/card"

const IndexPage = ({ data }) => {
  const pageData = data && data.datoCmsHomepage
  const hero = pageData.hero[0]
  const contentSection1 = pageData.contentSection[0]
    ? pageData.contentSection[0]
    : null
  const contentSection2 = pageData.contentSection[1]
    ? pageData.contentSection[1]
    : null
  const sportangebote = pageData.sportangebote

  console.log("contentSection1: ", contentSection1)
  return (
    <Layout>
      <div className="bg-white">
        <Hero
          title={hero.title}
          description={hero.description}
          imageURL={hero.image.url}
          buttonText={hero.buttonText}
          buttonLink={hero.buttonLink}
        />
        {contentSection1 && (
          <ContentSection
            title={contentSection1.title}
            description={contentSection1.content}
            imageURL={contentSection1.image.url}
            linkText={contentSection1.linkText}
            linkUrl={contentSection1.linkUrl}
          />
        )}
        {contentSection2 && (
          <ContentSection
            title={contentSection2.title}
            description={contentSection2.content}
            imageURL={contentSection2.image.url}
            linkText={contentSection2.linkText}
            linkUrl={contentSection2.linkUrl}
          />
        )}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-9 md:py-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Unsere Sportangebote
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {sportangebote.map(item => (
              <Card
                key={item.id}
                id={item.id}
                previewImage={item.previewImage}
                slug={item.slug}
                title={item.title}
                previewText={item.previewText}
              />
            ))}
          </div>
        </div>
        {/* <ContentSection
          title="Herzlich willkommen beim Turnverein 1920 Bühl"
          description="Hier kannst du mehr über uns erfahren und dich über unsere
                Sportangebote und Aktivitäten informieren. Sport im Verein
                bedeutet nicht nur Bewegung, sondern auch Gemeinschaft, Spaß und
                gegenseitige Unterstützung. Du hast Interesse an unserem
                Sportangebot oder eine Frage? Dann kontaktiere uns entweder per
                Telefon oder sende uns eine Mail und wir werden uns umgehend bei
                dir melden. Wir freuen uns auf dich!"
          imageURL="https://www.datocms-assets.com/102609/1686771343-hero-turn.jpg"
        /> */}
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = data => {
  const { seoSettings } = data.data.datoCmsHomepage
  return <Seo title={seoSettings.title} description={seoSettings.description} googleFollow googleIndex/>
}
export const query = graphql`
  query HomepageQuery {
    datoCmsHomepage {
      id
      originalId
      model {
        id
        name
      }
      googleIndex
      googleFollow
      seoSettings {
        title
        description
        image {
          url
        }
      }
      hero {
        id
        title
        description
        buttonText
        buttonLink
        image {
          url
        }
      }
      contentSection {
        title
        content
        image {
          url
        }
        linkText
        linkUrl
      }
      sportangebote {
        id
        title
        slug
        previewText
        previewImage {
          url
        }
      }
    }
  }
`
