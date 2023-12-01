import * as React from "react"
import { Link } from 'gatsby'
import Container from "./Container"

const aboutUs = [
  {
    name: "Vorstandsteam",
    href: "/vorstandsteam/",
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
      {/* <div className="mx-auto max-w-7xl px-6 pb-8 pt-4 sm:pt-24 lg:px-8 lg:pt-8"> */}
      <Container>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">

          <div className="mt-4 lg:mt-16 grid md:gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-8">
              <div className="mt-10 md:mt-0">
                <div>
                  <p className="text-sm font-semibold leading-6 text-white">
                    Über uns
                  </p>
                  <ul className="mt-6 space-y-4">
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
                <p className="text-sm font-semibold leading-6 text-white">
                  Trainingszeiten
                </p>
                <ul className="mt-6 space-y-4">
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
                <p className="text-sm font-semibold leading-6 text-white">
                  Turnverein 1920 Bühl e.V.
                </p>
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
                  {/* <li>
                    <Link
                      to={"/datenschutz/"}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      Datenschutz
                    </Link>{" "}
                  </li> */}
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
        {/* </div> */}
      </Container>
    </footer>
  )
}
