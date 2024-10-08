import React from "react"
import PropTypes from "prop-types"
import Item from "./Item"

const Information = ({ active, expiration, usage, plan }) => {
  return (
    <div>
      {active ? (
        <div className="md:grid md:grid-cols-3 lg:block">
          <Item title="Plan" description={plan} />
          {expiration && <Item title="Expiration" description={expiration} />}
          {usage && <Item title="Usage" description={usage} />}
          <Item title="Manage" description="Cancel Subscription" />
        </div>
      ) : (
        <div className="md:grid md:grid-cols-3 lg:block">
          <Item title="Plan" description="No available plans" />
          <Item title="Expiration" description="--" />
        </div>
      )}
    </div>
  )
}

Information.propTypes = {
  active: PropTypes.bool.isRequired,
  expiration: PropTypes.string,
  plan: PropTypes.string,
}

export default Information
