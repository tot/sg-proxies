import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import icon from "../../../assets/icon.svg"
import Order from "../../global/Order/Order"
import OrderResidential from "../../global/Order/OrderResidential"
import close from "../../../assets/close.svg"
import LinkButton from "../../global/LinkButton/LinkButton"
import Input from "./Input/Input"
import { motion } from "framer-motion"
import Success from "./Alert/Success"
import Error from "./Alert/Error"
import chevron from "../../../assets/chevron.svg"

const Modal = ({ onclick }) => {
  const [page, setPage] = useState(0)
  const dropdown = useRef()
  const [isChoose, openPlans] = useState(false)
  const [selected, selectPlan] = useState("CenturyLink ISP")
  const modal = useRef()
  const handleClick = (e) => {
    if (modal.current && !modal.current.contains(e.target)) {
      onclick()
    }
  }
  const handlePlan = (e) => {
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

  let success = false
  let error = false
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "linear", duration: 0.05 }}
      className="fixed inset-0 bg-modal-background modal-blur w-full flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ ease: "easeIn", duration: 0.15 }}
        ref={modal}
        className="p-6 bg-light-background absolute left-0 right-0 mx-auto max-w-sm rounded-md z-50"
      >
        {page === 0 && (
          <div>
            <div className="flex items-center pb-8 relative">
              <div className="relative">
                <div className="flex items-center">
                  <img src={icon} className="" alt="CenturyLink ISP Icon" />
                  <button
                    className="focus:outline-none flex items-center justify-left"
                    onClick={() => openPlans(!isChoose)}
                  >
                    <h2 className="text-2xl text-card-title pl-6 font-medium">
                      {selected}
                    </h2>
                    <img src={chevron} className="ml-2" alt="Open more" />
                  </button>
                </div>
                {isChoose && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "easeIn", duration: 0.1 }}
                    ref={dropdown}
                    className="ml-20 absolute inline-block rounded-md p-2 bg-table-background origin-top mt-2"
                  >
                    <button
                      className="block w-full focus:outline-none px-3 py-2 text-left hover:bg-light-background text-paragraph duration-75 transition-colors ease-in rounded-md"
                      onClick={() => {
                        openPlans(false)
                        selectPlan("CenturyLink ISP")
                      }}
                    >
                      CenturyLink ISP
                    </button>
                    <button
                      className="block w-full focus:outline-none px-3 py-2 text-left hover:bg-light-background text-paragraph duration-75 transition-colors ease-in rounded-md"
                      onClick={() => {
                        openPlans(false)
                        selectPlan("Residential IPs")
                      }}
                    >
                      Residential IPs
                    </button>
                  </motion.div>
                )}
              </div>
              <button className="absolute top-0 right-0" onClick={onclick}>
                <img src={close} alt="Close" />
              </button>
            </div>
            {selected === "CenturyLink ISP" && <Order />}
            {selected === "Residential IPs" && <OrderResidential />}
            <div className="pt-8">
              <LinkButton
                text="Continue"
                width="modal"
                onclick={() => setPage(1)}
              />
            </div>
          </div>
        )}
        {page === 1 && (
          <div>
            <div className="flex items-center pb-4 relative">
              <h2 className="text-2xl text-card-title font-medium">
                Complete your order
              </h2>
              <button className="absolute top-0 right-0" onClick={onclick}>
                <img src={close} alt="Close" />
              </button>
            </div>
            {error && (
              <Error
                title="Invalid card number"
                description="Please try again with a different card."
              />
            )}
            {success && (
              <Success
                title="Payment processed"
                description="Please check your email for confirmation."
              />
            )}
            <Input
              label="Card Number"
              placeholder="4229916530346281"
              type="number"
            />
            <Input label="Cardholder" placeholder="Grady Murray" type="text" />
            <div className="grid grid-cols-2 gap-6">
              <Input label="Expiry" placeholder="08/22" type="text" />
              <Input label="CVV" placeholder="123" type="number" />
            </div>
            <div className="pt-8">
              <LinkButton
                text="Pay now"
                width="modal"
                onclick={() => setPage(1)}
              />
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

Modal.propTypes = {
  onclick: PropTypes.func.isRequired,
}

export default Modal
