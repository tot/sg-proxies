import React from "react"
import success from "../../../../assets/success.svg"

const Success = ({ title, description }) => {
  return (
    <div>
      <div className="border border-blue-500 rounded bg-success-background p-4 flex mb-4">
        <div className="">
          <img src={success} className="pt-1" alt="Error" />
        </div>
        <div className="pl-2">
          <h2 className="text-lg font-semibold text-blue-500">{title}</h2>
          <p className="text-sm font-medium text-blue-500">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Success
