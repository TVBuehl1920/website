import * as React from "react"

import Layout from "../components/base/layout"
import { Seo } from "../components/base/seo"

const NotFoundPage = () => (
  <Layout>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-8xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        Oops! Die Seite wurde nicht gefunden.
      </h2>
      <p className="text-lg text-gray-600 text-center">
        Keine Sorge, auch die Besten verirren sich manchmal.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage

export const Head = () => <Seo title="404: Seite nicht gefunden" />
