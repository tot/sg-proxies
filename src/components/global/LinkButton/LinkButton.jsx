import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const LinkButton = ({ text, width, link, onclick }) => {
  let classname, button
  if (width === "full" || width === "modal") {
    classname =
      "focus:outline-none focus:scale-90 py-2 bg-primary text-white w-full rounded-md text-base hover:bg-primary-light duration-75 ease-in transform hover:scale-105"
  } else if (width === "dashboard") {
    classname =
      "focus:outline-none focus:scale-90 px-16 py-2 bg-primary text-white rounded-md text-base hover:bg-primary-light duration-75 ease-in transform hover:scale-105"
  } else if (width === "padding") {
    classname =
      "focus:outline-none focus:scale-90 px-8 py-2 bg-primary text-white rounded-md text-base hover:bg-primary-light duration-75 ease-in transform hover:scale-105"
  } else {
    classname =
      "focus:outline-none focus:scale-90 px-6 py-2 bg-primary text-white rounded-md text-base hover:bg-primary-light duration-75 ease-in transform hover:scale-105"
  }

  if (width === "dashboard" || width === "modal" || width === "padding") {
    button = (
      <button className={classname} onClick={onclick}>
        {text}
      </button>
    )
  } else {
    button = (
      <Link to={link}>
        <button className={classname}>{text}</button>
      </Link>
    )
  }
  return <div>{button}</div>
}

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.string,
  link: PropTypes.string,
  onclick: PropTypes.func,
}

export default LinkButton
