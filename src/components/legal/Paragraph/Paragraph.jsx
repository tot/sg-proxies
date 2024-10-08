import React from "react"
import PropTypes from "prop-types"

const Paragraph = ({ text }) => {
  return (
    <div>
      <p className="text-paragraph text-base pb-4">{text}</p>
    </div>
  )
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Paragraph
