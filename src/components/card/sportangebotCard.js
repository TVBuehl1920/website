import React from "react"
import { Link } from "gatsby"

export default function SportangebotCard({
  id,
  previewImage,
  slug,
  title,

  previewText,
}) {
  return (
    <div key={id} className="relative isolate flex flex-col gap-8 lg:flex-row">
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2/1] lg:w-64 lg:shrink-0">
        <img
          src={previewImage.url}
          alt=""
          className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="group relative max-w-xl">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link to={`/sportangebote/${slug}/`}>
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600">{previewText}</p>
        </div>
      </div>
    </div>
  )
}
