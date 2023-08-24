import React, { useState } from "react"
import { Link } from 'gatsby'
import Layout from "../components/base/layout"
import { Seo } from "../components/base/seo"

import { GetAllNews } from "../queries/news"

const AktuellesPage = () => {

  const [news] = useState(GetAllNews())
  const [showMore, setShowMore] = useState(false)
  return (
    <Layout>
      <div className="bg-white py-4 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Aktuelles
            </h1>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <Hits hits={news} showMore={showMore} />
          </div>
          <div className="flex justify-content p-16 ">
            <div className="mx-auto max-w-7xl">
              <button
                className="py-2 px-3 border border-gray-400 rounded-md w-full"
                style={{ display: news.length < 3 ? "none" : "block" }}
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "WENIGER ANZEIGEN" : "ALLE ANZEIGEN"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default AktuellesPage

export const Head = () => <Seo googleFollow googleIndex title="Neuigkeiten & Highlights beim Turnverein Bühl 1920!" description={"Entdecken Sie die neuesten Events und Aktualitäten beim Turnverein Bühl 1920 in Offenburg. Bleiben Sie immer informiert und engagiert!"} />

const Hits = ({ hits, showMore }) => {
  const numOfArticles = showMore ? hits.length : 3
  return (
    <>
      {hits?.map(({ node }, idx) => {
        return (
          idx < numOfArticles && (
            <article
              key={node.id}
              // className="flex max-w-xl flex-col items-start justify-between"
              className="flex flex-col items-start justify-start bg-white rounded-2xl shadow p-6"
            >
              <div className="flex items-center gap-x-4 text-xs">
                {/* <time dateTime={post.datetime} className="text-gray-500">
                    {node.date}
                  </time> */}
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link to={node.slug}>
                    <span className="absolute inset-0" />
                    {node.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {node.previewText}
                </p>
              </div>
              <Link
                className="mt-2 text-gray-900 hover:text-gray-600"
                to={node.slug}
              >
                Mehr erfahren -{">"}
              </Link>
            </article>
          )
        )
      })}
    </>
  )
}
