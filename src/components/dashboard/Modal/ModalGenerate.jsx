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

const ModalGenerate = ({ onclick }) => {
  let locationsList = ["United States", "Europe"]
  let typesList = ["United States", "Release", "Shopify", "Supreme", "Release"]
  const locations = useRef()
  const types = useRef()
  const [isChoose, openLocations] = useState(false)
  const [location, setLocation] = useState(locationsList[0])
  const [isChooseType, openTypes] = useState(false)
  const [type, setType] = useState(typesList[0])
  const modal = useRef()
  const handleClick = (e) => {
    if (modal.current && !modal.current.contains(e.target)) {
      onclick()
    }
  }
  const handleLocations = (e) => {
    if (locations.current && !locations.current.contains(e.target)) {
      openLocations(false)
    }
  }
  const handleTypes = (e) => {
    if (types.current && !types.current.contains(e.target)) {
      openTypes(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("mousedown", handleLocations)
    document.addEventListener("mousedown", handleTypes)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("mousedown", handleLocations)
      document.removeEventListener("mousedown", handleTypes)
    }
  })

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
        className="p-6 bg-light-background absolute left-0 right-0 mx-auto max-w-md rounded-md z-50"
      >
        <div>
          <div className="flex items-center pb-4 relative">
            <h2 className="text-2xl text-card-title font-medium">
              Generate Proxies
            </h2>
            <button className="absolute top-0 right-0" onClick={onclick}>
              <img src={close} alt="Close" />
            </button>
          </div>
          <div className="relative pb-4">
            <h3 className="text-base text-card-title">Location</h3>
            <button
              className="focus:outline-none w-full mt-1 px-3 py-2 bg-input-background text-paragraph border border-input-border rounded-md flex items-center justify-between"
              onClick={() => openLocations(!isChoose)}
            >
              <h2 className="text-base text-input-text">{location}</h2>
              <img src={chevron} className="ml-2" alt="Open more" />
            </button>
            {isChoose && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeIn", duration: 0.1 }}
                ref={locations}
                className="z-10 w-full absolute inline-block rounded-md p-2 bg-table-background origin-top mt-2"
              >
                {locationsList.map((location) => {
                  return (
                    <button
                      className="block w-full focus:outline-none px-3 py-2 text-left hover:bg-light-background text-paragraph duration-75 transition-colors ease-in rounded-md"
                      onClick={() => {
                        openLocations(false)
                        setLocation(location)
                      }}
                    >
                      {location}
                    </button>
                  )
                })}
              </motion.div>
            )}
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative pb-4">
              <h3 className="text-base text-card-title">Type</h3>
              <button
                className="focus:outline-none w-full mt-1 px-3 py-2 bg-input-background text-paragraph border border-input-border rounded-md flex items-center justify-between"
                onClick={() => openTypes(!isChooseType)}
              >
                <h2 className="text-base text-input-text">{type}</h2>
                <img src={chevron} className="ml-2" alt="Open more" />
              </button>
              {isChooseType && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ease: "easeIn", duration: 0.1 }}
                  ref={types}
                  className="z-10 w-full absolute inline-block rounded-md max-h-dropdown overflow-y-auto p-2 bg-table-background origin-top mt-2"
                >
                  {typesList.map((type) => {
                    return (
                      <button
                        className="block w-full focus:outline-none px-3 py-2 text-left hover:bg-light-background text-paragraph duration-75 transition-colors ease-in rounded-md"
                        onClick={() => {
                          openTypes(false)
                          setType(type)
                        }}
                      >
                        {type}
                      </button>
                    )
                  })}
                </motion.div>
              )}
            </div>
            <Input label="Amount" placeholder="1" type="number" />
          </div>
          <div className="pt-8">
            <LinkButton
              text="Create now"
              width="modal"
              onclick={() => {
                onclick()
              }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

ModalGenerate.propTypes = {
  onclick: PropTypes.func.isRequired,
}

export default ModalGenerate
