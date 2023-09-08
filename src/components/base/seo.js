import React from "react"

export const Seo = ({
  title,
  description,
  googleIndex,
  googleFollow,
  children,
}) => {
  //   const {
  //     title: defaultTitle,
  //     description: defaultDescription,
  //     siteUrl,
  //   } = useSiteMetadata()

  //   const seo = {
  //     title: title || defaultTitle,
  //     description: description || defaultDescription,
  //     url: `${siteUrl}${pathname || ``}`,
  //   }
  // const siteName = "Turnverein 1920 Bühl"
//   const ogTypeValue = ogType || "website"
  const siteTitle = title || "Turnverein 1920 Bühl"
  const metaDescription = description || "Turnverein 1920 Bühl"
  const robots = getRobots(googleFollow, googleIndex)
//   const path = slug || useRouter().query.slug
  //   const siteUrl = domainUrl + "/" + path + "/";
  //   const siteImage =
  //     ogImgUrl ||
  //     "https://sevdesk.imgix.net/34060/1602755209-funktionen-hero.jpg?auto=format";

  return (
    <>
      <title>{siteTitle}</title>

      <meta name="description" content={metaDescription} />
      <meta name="robots" content={robots} />
      <meta name="twitter:title" content={siteTitle} />
      {/* <meta name="twitter:url" content={seo.url} /> */}
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

const getRobots = (googleFollow, googleIndex) => {
  const follow = googleFollow ? "follow" : "nofollow"
  const index = googleIndex ? "index" : "noindex"
  return follow + "," + index
}
