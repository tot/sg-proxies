import React, { useState, useEffect } from "react"
import logo from "../../../assets/iris.png"
import PropTypes from "prop-types"
import LinkButton from "../../global/LinkButton/LinkButton"
//import { BrowserRouter as Router, Route } from "react-router-dom"
import { Link } from "react-router-dom"

const Navbar = ({ links }) => {
  const [scroll, setScroll] = useState(10)
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY < 10
      if (isScrolled !== scroll) {
        setScroll(isScrolled)
      }
    }
    document.addEventListener("scroll", onScroll)

    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [scroll])

  return (
    <div>
      <div
        className={
          scroll ? "bg-dark-background" : "bg-blur border-b border-nav-border"
        }
      >
        <div
          className={
            scroll
              ? "max-w-6xl py-10 px-6 mx-auto flex justify-between transition-all duration-75 ease-in"
              : "max-w-6xl py-3 px-6 mx-auto flex justify-between transition-all duration-150 ease-in"
          }
        >
          <div className="">
            <Link smooth to="#Home">
              <img src={logo} alt="Iris Proxies" className="w-8" />
            </Link>
          </div>
          <div className="flex items-center text-white">
            {links.map((link) => (
              <Link
                smooth
                to={`#${link}`}
                key={link}
                className="mx-8 hidden md:block hover:text-primary duration-75 ease-in"
              >
                {link}
              </Link>
            ))}
            <LinkButton text="Dashboard" link="/dashboard" />
          </div>
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  links: PropTypes.array.isRequired,
}

export default Navbar
