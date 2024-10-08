import React from "react"
import icon from "../../../../assets/icon.svg"
import Description from "./Description"
import OrderResidential from "../../../global/Order/OrderResidential"
import LinkButton from "../../../global/LinkButton/LinkButton"
import diagonal from "../../../../assets/diagonal.svg"
import zigzag from "../../../../assets/zigzag.svg"

const ResidentialCard = () => {
  return (
    <div className="max-w-3xl mx-auto relative">
      <img
        src={diagonal}
        className="absolute top-0 right-0 z-20 -mt-5 -mr-5 lg:-mt-10 lg:-mr-10 md:flex"
        alt="Diagonal pattern"
      />
      <div className="bg-light-background p-6 relative mt-16 rounded-md text-left z-30">
        <div className="flex items-center">
          <img src={icon} className="" alt="CenturyLink ISP Icon" />
          <h2 className="text-2xl text-card-title pl-6 font-medium">
            Residential IPs
          </h2>
        </div>
        <div className="pt-10 md:grid md:grid-cols-2">
          <div>
            <Description
              heading="Unblocked Proxies"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. lol"
            />
            <Description
              heading="Millions of Locations"
              description="Integer fermentum, nunc vel ultricies lacinia, lectus velit dictum purus."
            />
            <Description
              heading="Fast Speeds"
              description="Curabitur rutrum a quam id auctor. Nullam dignissim dapibus consequat."
            />
          </div>
          <div>
            <OrderResidential />
          </div>
        </div>
        <div className="pt-2">
          <LinkButton text="Purchase" width="full" link="/login" />
        </div>
      </div>

      <img
        src={zigzag}
        className="absolute bottom-0 left-0 z-50 -mb-1"
        alt="Diagonal pattern"
      />
    </div>
  )
}

export default ResidentialCard
