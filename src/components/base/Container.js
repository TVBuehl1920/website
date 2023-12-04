import * as React from "react"
import PropTypes from "prop-types"

const Container = ({ children, prose }) => {
  return (
    <div className="container mx-auto py-4 lg:py-12 lg:mb-5 px-4 lg:px-0 ">
      {/* <div
        className={`${prose ? "prose md:prose-md lg:prose-xl " : ""
          }`}
      > */}
        {children}
      {/* </div> */}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  prose: PropTypes.bool,
}

export default Container
