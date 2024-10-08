import React from "react"
import PropTypes from "prop-types"

const Heading = ({ text }) => {
  return (
    <div>
      <h1 className="text-2xl text-white font-medium pt-6 pb-2">{text}</h1>
    </div>
  )
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Heading
