import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Button = ({ children, linkUrl, buttonType = "primary" }) => {

  let buttonClassname = ""
  switch (buttonType) {
    case "primary":
      buttonClassname = "bg-red-600 text-white hover:bg-red-400"
      break
    case "secondary":
      buttonClassname =
        "bg-white/0 text-red-600 ring-1 ring-red-600/10 hover:bg-white/25 hover:ring-red-600/15"
      break
    case "download":
      buttonClassname = "font-bold py-2 px-4 rounded inline-flex items-center"
      break
    case "link":
      buttonClassname = "text-base text-red-600 hover:text-red-400"
      break
    default:
      buttonClassname = "bg-slate-900 text-white hover:bg-slate-400"
      break
  }

  return (
    <Link
      className={`inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 ${buttonClassname}`}
      to={linkUrl}
    >
      {buttonType === "download" ? (
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
      ) : null}

      {children}
    </Link>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  download: PropTypes.bool,
  buttonType: PropTypes.oneOf(["primary", "secondary", "download", "link"]),
}

export default Button
