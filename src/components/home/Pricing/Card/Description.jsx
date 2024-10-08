import React from "react"
import checkmark from "../../../../assets/checkmark.svg"
import border from "../../../../assets/border.svg"
import PropTypes from "prop-types"

const Description = ({ heading, description }) => {
  return (
    <div>
      <table className="table-auto mb-2">
        <tbody>
          <tr>
            <td className="p-0">
              <img src={checkmark} height="32" width="32" alt="Checkmark" />
            </td>
            <td className="pl-4">
              <h3 className="text-card-header text-lg font-medium">
                {heading}
              </h3>
            </td>
          </tr>
          <tr>
            <td className="p-0 self-start">
              <img src={border} className="mx-auto" alt="border" />
            </td>
            <td className="pl-4 flex items-start">
              <p className="text-card-description text-base lg:pr-10">
                {description}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Description.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Description
