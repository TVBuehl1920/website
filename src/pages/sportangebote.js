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
        <div class="mx-auto max-w-2xl text-center">
          <h1>  Unsere Sportangebote</h1>
          <p class="mt-6 text-md lg:text-lg leading-6 lg:leading-8 text-gray-600">
            Unser Angebot umfasst eine Vielzahl an unterschiedlichen Sportarten
            für alle Altersklassen. Von Kinderturnen über klassisches
            Gerätturnen bis hin zu unserem umfangreichen Gymwelt-Angebot bieten
            wir alles um dich maximal fit zu halten. Aber schau doch einfach mal
            vorbei! Wir freuen uns auf dich!
          </p>
        </div>
       
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
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

      </Container>
    </Layout>
  )
}
export default SportangebotePage

export const Head = data => {
  return <Seo googleFollow googleIndex title="Sportangebote - Turnverein Bühl / Offenburg" description={"Erkunden Sie das vielseitige Angebot des Turnverein Bühl / Offenburg. Von traditionellem Turnen bis zu innovativen Kursen - für jedes Alter und jedes Niveau."} />
}
