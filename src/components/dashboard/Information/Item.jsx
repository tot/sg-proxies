import React, { useState, useEffect, useRef } from "react"
import chevron from "../../../assets/chevron.svg"
import { motion } from "framer-motion"

const Item = ({ title, description }) => {
  let element
  let plans = ["ISP #948332", "ISP #0292938", "ISP #332", "ISP #344"]
  const dropdown = useRef()
  const [isOpen, openPlans] = useState(false)
  const [selected, selectPlan] = useState(plans[0])
  const handleClick = (e) => {
    if (dropdown.current && !dropdown.current.contains(e.target)) {
      openPlans(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  })

  if (title === "Manage") {
    element = (
      <button className="text-cancel font-medium text-base">
        {description}
      </button>
    )
  } else if (title === "Plan") {
    element = (
      <div className="relative">
        <button
          className="focus:outline-none text-dashboard-heading font-semibold text-base flex items-center"
          onClick={() => openPlans(!isOpen)}
        >
          {selected} <img src={chevron} className="ml-2" alt="Open more" />
        </button>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeIn", duration: 0.1 }}
            ref={dropdown}
            className="absolute left-0 rounded-md p-2 bg-table-background origin-top mt-2"
          >
            {plans.map((plan) => {
              return (
                <button
                  className="block w-full focus:outline-none px-3 py-2 text-left hover:bg-light-background text-paragraph duration-75 transition-colors ease-in rounded-md"
                  key={plan}
                  onClick={() => {
                    openPlans(false)
                    selectPlan(plan)
                  }}
                >
                  {plan}
                </button>
              )
            })}
          </motion.div>
        )}
      </div>
    )
  } else {
    element = (
      <p className="text-dashboard-heading font-semibold text-base">
        {description}
      </p>
    )
  }

  return (
    <div>
      <div className="pb-5">
        <h3 className="text-paragraph font-medium text-base">{title}</h3>
        {element}
      </div>
    </div>
  )
}

export default Item
