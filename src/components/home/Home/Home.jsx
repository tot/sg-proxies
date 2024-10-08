import React from "react"
import Navbar from "../Navbar/Navbar"
import Landing from "../Landing/Landing"
import divider from "../../../assets/divider.svg"
import Pricing from "../Pricing/Pricing"
import Faq from "../Faq/Faq"
import Footer from "../Footer/Footer"

const Home = () => {
  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <Navbar links={["Pricing"]} />
      </div>
      <Landing />
      <img src={divider} className="w-full max-w-6xl mx-auto" alt="Divider" />
      <Pricing />
      <img src={divider} className="w-full max-w-6xl mx-auto" alt="Divider" />
      <Faq />
      <Footer />
    </div>
  )
}

export default Home
