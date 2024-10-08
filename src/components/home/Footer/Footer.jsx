import React from "react"
import logo from "../../../assets/iris.png"
import Link from "./Link"

const Footer = () => {
  return (
    <div>
      <div className="bg-footer w-full">
        <div className="py-20 max-w-6xl px-6 mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="flex items-center col-span-2">
            <img src={logo} className="w-12 h-12" alt="SG Proxies" />
            <div className="pl-2">
              <h1 className="text-white text-xl font-semibold">Iris Proxies</h1>
              <p className="text-footer-link text-base">
                Reliable Proxies with Zero Limitations
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="text-white text-xl font-semibold">Navigation</h1>
            <div className="my-1">
              <Link text="Pricing" link="#Pricing" />
            </div>
            <div className="my-1">
              <Link text="Dashboard" link="/dashboard" />
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="text-white text-xl font-semibold">Legal</h1>
            <div className="my-1">
              <Link text="Privacy Policy" link="/privacy" />
            </div>
            <div className="my-1">
              <Link text="Terms of Service" link="/terms" />
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="text-white text-xl font-semibold">Connect</h1>
            <div className="my-1">
              <Link text="Twitter" link="https://twitter.com/irisproxies" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
