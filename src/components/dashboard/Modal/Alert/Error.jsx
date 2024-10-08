import React from "react"
import error from "../../../../assets/error.svg"

const Error = ({ title, description }) => {
  return (
    <div>
      <div className="border border-cancel rounded bg-error-background p-4 flex mb-4">
        <div className="">
          <img src={error} className="pt-1" alt="Error" />
        </div>
        <div className="pl-2">
          <h2 className="text-lg font-semibold text-red-600">{title}</h2>
          <p className="text-sm font-medium text-red-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Error
