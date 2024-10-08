import React from "react"
import PropTypes from "prop-types"

const Row = ({ first, second, third, fourth }) => {
  return (
    <div className="md:grid md:grid-cols-4 mb-4">
      <div className="inline-block w-1/2 md:w-full px-4 pt-2 md:p-4 bg-table-background rounded-l-md text-table-entry">
        {first}
      </div>
      <div className="inline-block w-1/2 md:w-full px-4 pt-2 md:p-4 bg-table-background text-table-entry">
        {second}
      </div>
      <div className="inline-block w-1/2 md:w-full px-4 pb-2 md:p-4 bg-table-background text-table-entry">
        {third}
      </div>
      <div className="inline-block w-1/2 md:w-full px-4 pb-2 md:p-4 bg-table-background rounded-r-md text-table-entry">
        {fourth}
      </div>
    </div>
  )
}

Row.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  third: PropTypes.string.isRequired,
  fourth: PropTypes.string.isRequired,
}

export default Row
