import React from "react"
import Button from "../base/Button"

export default function ContentSection({
  title,
  description,
  imageURL,
  linkText,
  linkUrl,
}) {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-12 lg:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </h1>

              <div
                className="mt-6 text-lg leading-8 text-gray-700"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <div className="col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button buttonType={"primary"} linkUrl={linkUrl}>
                  {linkText}
                </Button>
                {/* <Button buttonType={"secondary"} linkUrl="/kontakt/">
                  Kontakt
                </Button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[34rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[39rem]"
            src={imageURL}
            width={624}
            alt={title ? title : "Turnverein Bühl 1920"}
            loading={'lazy'}
            decode="async"
          />
        </div>
      </div>
    </div>
  )
}
