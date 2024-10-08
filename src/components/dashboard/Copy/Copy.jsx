import React from "react"
import copy from "../../../assets/copy.svg"
import ReactTooltip from "react-tooltip"

const Copy = () => {
  return (
    <div>
      <button
        data-tip="Copied to clipboard"
        data-event="click"
        className="ml-3 focus:outline-none"
      >
        <img src={copy} alt="Copy" />
      </button>
      <ReactTooltip globalEventOff="click" delayHide={100} />
    </div>
  )
}

export default Copy
