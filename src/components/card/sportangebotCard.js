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
      {/* <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[1/1] lg:w-64 lg:shrink-0"> */}
      <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:h-48 lg:w-64 lg:shrink-0">
        {previewImage && (
          <img
            src={previewImage?.url}
            alt={title ? title : "Turnverein Bühl 1920"}
            className="lazyload absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2/1] lg:w-64 "
            loading={'lazy'}
            decode="async"
          />
        )}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div>
        <div className="group relative max-w-xl">
          <h2 className="mt-3 text-lg lg:text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link to={`/sportangebote/${slug}/`}>
              <span className="absolute inset-0" />
              {title}
            </Link>
          </h2>
          <p className="mt-5 text-sm leading-6 text-gray-600">{previewText}</p>
        </div>
      </div>
    </div>
  )
}
