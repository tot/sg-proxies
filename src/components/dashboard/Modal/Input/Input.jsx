import React from "react"
import PropTypes from "prop-types"

const Input = ({ label, placeholder, type }) => {
  return (
    <div>
      <div className="pb-4">
        <label className="text-base text-card-title">{label}</label>
        <input
          className="focus:outline-none w-full mt-1 px-3 py-2 bg-input-background text-paragraph border border-input-border rounded-md"
          placeholder={placeholder}
          type={type}
        ></input>
      </div>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Input
