import React from "react"

const Link = ({ text, link }) => {
  return (
    <div>
      <a
        href={link}
        className="text-footer-link hover:text-primary transition-colors duration-100 ease-in text-base"
      >
        {text}
      </a>
    </div>
  )
}

export default Link
