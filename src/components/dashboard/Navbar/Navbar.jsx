import React, { useState, useRef, useEffect } from "react"
import logo from "../../../assets/iris.png"
import pfp from "../../../assets/pfp.png"
import chevron from "../../../assets/chevron.svg"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [isOpen, toggleMenu] = useState(false)
  const menu = useRef()
  const handleClick = (e) => {
    if (menu.current && !menu.current.contains(e.target)) {
      toggleMenu(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick)
    }
  })
  return (
    <div>
      <div className="w-full flex justify-between">
        <Link to="/">
          <img src={logo} className="w-12 h-12" alt="IRis Proxies" />
        </Link>
        <div className="flex items-center">
          <img
            src={pfp}
            className="rounded-full h-12 w-12 overflow-hidden border-2 border-primary"
            alt="Profile"
          />
          <div className="relative">
            <button
              className="ml-2 focus:outline-none"
              onClick={() => toggleMenu(true)}
            >
              <img src={chevron} height="20" width="20" alt="Chevron" />
            </button>
            {isOpen && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ ease: "easeIn", duration: 0.1 }}
                ref={menu}
                className="absolute mt-12 top-0 right-0 origin-top-right px-4 py-2 shadow-md bg-table-background text-paragraph font-medium rounded-md hover:text-cancel duration-100 ease-in transition-colors"
              >
                Logout
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
