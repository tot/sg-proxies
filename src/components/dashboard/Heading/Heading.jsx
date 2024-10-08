import React from "react"
import PropTypes from "prop-types"

const Heading = ({ text }) => {
  return (
    <div>
      <h2 className="text-dashboard-heading font-medium text-xl">{text}</h2>
      <div className="w-12 h-2px bg-primary rounded-full"></div>
    </div>
  )
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Heading
