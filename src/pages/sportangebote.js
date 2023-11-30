import React from "react"
import Layout from "../components/base/layout"
import { Seo } from "../components/base/seo"
import Container from "../components/base/Container"
import SportangebotCard from "../components/card/sportangebotCard"
import { GetAllSportProgram } from "../queries/sportProgram"

const SportangebotePage = () => {
  // const sportProgram = useState(GetAllSportProgram())
  const sportProgram = GetAllSportProgram()
  return (
    <Layout>
      <Container>
        <div>
          {/* <div className="mx-auto max-w-2xl lg:max-w-4xl mb-4"> */}
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unsere Sportangebote
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Unser Angebot umfasst eine Vielzahl an unterschiedlichen Sportarten
            für alle Altersklassen. Von Kinderturnen über klassisches
            Gerätturnen bis hin zu unserem umfangreichen Gymwelt-Angebot bieten
            wir alles um dich maximal fit zu halten. Aber schau doch einfach mal
            vorbei! Wir freuen uns auf dich!
          </p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {sportProgram?.map(item => (
              <SportangebotCard
                key={item.title}
                id={item.id}
                previewImage={item.previewImage}
                slug={item.slug}
                title={item.title}
                previewText={item.previewText}
              />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  )
}
export default SportangebotePage

export const Head = data => {
  return <Seo googleFollow googleIndex title="Sportangebote - Turnverein Bühl / Offenburg" description={"Erkunden Sie das vielseitige Angebot des Turnverein Bühl / Offenburg. Von traditionellem Turnen bis zu innovativen Kursen - für jedes Alter und jedes Niveau."} />
}
