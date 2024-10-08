import React, { useState } from "react"
import Card from "./Card/Card"
import ResidentialCard from "./Card/ResidentialCard"

const Pricing = () => {
  const [plan, setPlan] = useState("ISP")
  return (
    <div>
      <div id="Pricing" className="py-32 text-center max-w-6xl mx-auto px-6">
        <h1 className="font-semibold text-white text-4xl">Choose Your Plan</h1>
        {/* <p className="text-paragraph leading-6 max-w-sm mx-auto pt-4">
          Aliquam nec libero posuere, vulputate turpis vel, porta metus. Nulla
          posuere eget turpis vitae tincidunt.
        </p> */}
        <div className="py-5 w-64 mx-auto rounded-full flex">
          <button
            onClick={() => setPlan("ISP")}
            className={
              plan == "ISP"
                ? "w-1/2 p-2 text-sm font-medium rounded-l-full transition-colors ease-in duration-100 focus:outline-none bg-primary text-white border-none"
                : "w-1/2 p-2 text-sm font-medium rounded-l-full transition-colors ease-in duration-100 focus:outline-none bg-inactive-plan text-primary border-none"
            }
          >
            ISP
          </button>
          <button
            onClick={() => setPlan("Residential")}
            className={
              plan == "Residential"
                ? "w-1/2 p-2 text-sm font-medium rounded-r-full transition-colors ease-in duration-100 focus:outline-none bg-primary text-white border-none"
                : "w-1/2 p-2 text-sm font-medium rounded-r-full transition-colors ease-in duration-100 focus:outline-none bg-inactive-plan text-primary border-none"
            }
          >
            Residential
          </button>
        </div>
        {plan === "ISP" ? <Card /> : <ResidentialCard />}
      </div>
    </div>
  )
}

export default Pricing
