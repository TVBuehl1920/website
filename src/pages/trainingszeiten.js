import React, { useState } from "react"

import Layout from "../components/base/layout"
import { Seo } from "../components/base/seo"
import Container from "../components/base/Container"
import TrainingTable from "../components/table/TrainingTable"
import { GetAllTrainingTimes } from "../queries/trainingTimes"
const TrainingszeitenPage = () => {
  const [trainingszeiten] = useState(GetAllTrainingTimes())

  // const trainingszeiten = [
  //   {
  //     tag: "Montag",
  //     uhrzeit: "17:00 - 18:00",
  //     gruppe: "Eltern-Kind-Turnen",
  //     trainer: "Katharina Schäfer",
  //   },
  //   {
  //     tag: "Dienstag",
  //     uhrzeit: "17:00 - 18:00",
  //     gruppe: "Eltern-Kind-Turnen",
  //     trainer: "Katharina Schäfer",
  //   },

  //   {
  //     tag: "Montag",
  //     uhrzeit: "16:00 - 17:00",
  //     gruppe: "Turnen",
  //     trainer: "Jonas Schäfer",
  //   },
  //   // Weitere Datenpunkte...
  // ]
  return (
    <Layout>
      <Container>
        {" "}
        <div className="mx-auto max-w-2xl lg:mx-0 mb-4 lg:mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trainingszeiten
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <TrainingTable trainingszeiten={trainingszeiten} />
      </Container>
    </Layout>
  )
}

export default TrainingszeitenPage

export const Head = () => (
  <Seo googleFollow googleIndex title="Trainingszeiten - Turnverein Bühl / Offenburg" description={"Finden Sie Ihre ideale Trainingszeit beim Turnverein Bühl / Offenburg. Übersichtliche Zeiten für alle Kurse und Altersklassen. Planen Sie Ihr Training mit uns."} />
)
