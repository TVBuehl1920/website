import * as React from "react"
import PropTypes from "prop-types"

const Container = ({ children, prose }) => {
  return (
    <div className="py-4 lg:py-24">
      <div
        className={`${prose ? "prose md:prose-md lg:prose-xl " : ""
          }mx-auto max-w-7xl px-6 lg:px-8`}
      >
        {children}
      </div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  prose: PropTypes.bool,
}

export default Container
