import React from "react"
import { Link } from "gatsby"

export default function Card({ id, previewImage, slug, title, previewText }) {
  return (
    <div key={id} className="flex flex-col items-start justify-between">
      <Link to={`sportangebote/${slug}/`} className="w-full">
        <div className="relative w-full">
          {previewImage && (
            <img
              src={previewImage?.url}
              alt=""
              className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            />
          )}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        </div>
      </Link>
      <div className="max-w-xl">
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link to={`sportangebote/${slug}/`}>
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {previewText}
          </p>
        </div>
      </div>

    </div >
  )
}
