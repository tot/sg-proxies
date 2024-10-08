import React from "react"
import logo from "../../../assets/iris.png"
import LinkButton from "../../global/LinkButton/LinkButton"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
      <div className="bg-dark-background">
        <div className="max-w-6xl py-6 px-6 mx-auto flex justify-between">
          <div className="">
            <Link to="/">
              <img src={logo} alt="SG Proxies" className="w-8" />
            </Link>
          </div>
          <LinkButton text="Dashboard" link="/dashboard" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
