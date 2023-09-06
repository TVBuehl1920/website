import * as React from "react"
import { Link } from 'gatsby'
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
const aboutUs = [
  {
    name: "Vorstand",
    href: "/vorstand/",
  },
  {
    name: "Turnrat",
    href: "/turnrat/",
  },
  {
    name: "Übungsleiter",
    href: "/uebungsleiter/",
  },
  {
    name: "Geschichte",
    href: "/geschichte/",
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            {" "}
            {/* <img
              className="h-7"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Company name"
            /> */}
              <StaticImage src="../../images/logo.jpg"    className="h-7" alt="" objectFit="cover" layout="fixed"
              width={200}
              height={64} />
            {/* <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0"> */}
            {/* <div className="md:grid md:grid-cols-2 md:gap-8">*/}
          </div>
          <div className="mt-16 grid gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div className="mt-10 md:mt-0">
                <div>
                  <h3 className="text-sm font-semibold leading-6 text-white">
                    Über uns
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {aboutUs.map(item => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="text-sm leading-6 text-gray-300 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Trainingszeiten
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      to={"/trainingszeiten/"}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Termine
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Turnverein 1920 Bühl e.V.
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      to={"/sportangebote/"}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Sportangebote
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/impressum/"}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Impressum
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/datenschutz/"}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Datenschutz
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      to={"/kontakt/"}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Kontakt
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </footer>
  )
}
