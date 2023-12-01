import React from "react"
import Button from "../base/Button"

export default function SportContentSection(props) {
  return (
    <div className="relative isolate overflow-hidden bg-white  py-12 lg:py-12 lg:overflow-visible">
      <div className=" grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full  lg:grid-cols-2 lg:gap-x-8 ">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {props?.title}
              </h1>

              <div
                className="mt-6 text-lg leading-8 text-gray-700"
                dangerouslySetInnerHTML={{ __html: props?.description }}
              />

              <div className="mt-8">
                <Button buttonType={"primary"} linkUrl="/trainingszeiten/">
                  zu allen Trainingszeiten
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          {props.imageURL && (<img
            className="lazyload w-[34rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[39rem]"
            src={props.imageURL}
            width={624}
            alt={props?.title ? props?.title : "Turnverein Bühl 1920"}
            loading={'lazy'}
            decode="async"
          />)}
        </div>
      </div>
    </div>
  )
}
