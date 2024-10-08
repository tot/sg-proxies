import React, { useState } from "react"
import Navbar from "../Navbar/Navbar"
import Heading from "../Heading/Heading"
import Copy from "../Copy/Copy"
import LinkButton from "../../global/LinkButton/LinkButton"
import Information from "../Information/Information"
import Table from "../Table/Table"
import Modal from "../Modal/Modal"
import ModalGenerate from "../Modal/ModalGenerate"
import triangles from "../../../assets/triangles.svg"
import zigzag from "../../../assets/zigzag.svg"

const Dashboard = () => {
  const [isPurchase, openPurchase] = useState(false)
  const [isGenerate, openGenerate] = useState(false)

  const handlePurchase = () => {
    openPurchase(!isPurchase)
  }

  const handleGenerate = () => {
    openGenerate(!isGenerate)
  }

  return (
    <div className="md:flex min-h-screen lg:h-screen bg-dark-background px-6 xl:px-20 py-8 relative overflow-hidden">
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col h-full">
          <h1 className="font-semibold text-white text-3xl pt-10">Dashboard</h1>
          <div className="lg:flex lg:flex-1 h-full items-stretch flex-row pt-5">
            <div className="lg:w-1/3">
              <Heading text="Overview" />
              <div className="pt-8">
                <div className="pb-8">
                  <LinkButton
                    text="Buy Plan"
                    width="dashboard"
                    onclick={handlePurchase}
                  />
                </div>
                {/* For ISP */}
                {/* <Information active={true} expiration="2020-06-12" /> */}
                {/* For Residential */}
                <Information active={true} usage="2.01 GB / 4 GB" />
              </div>
            </div>
            <div className="flex flex-1 items-stretch flex-col lg:w-2/3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Heading text="My Proxies" />
                  <Copy />
                </div>
                <LinkButton
                  text="Generate Proxies"
                  width="padding"
                  onclick={handleGenerate}
                />
              </div>
              <div className="flex md:flex-1 md:h-full pt-10 relative">
                <Table />

                <img
                  src={zigzag}
                  className="absolute mb-3 bottom-0 right-0"
                  alt="Zigzag pattern"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPurchase && <Modal onclick={handlePurchase} />}
      {isGenerate && <ModalGenerate onclick={handleGenerate} />}
      <img
        src={triangles}
        className="absolute bottom-0 left-0 -mb-5"
        alt="Triangles Pattern"
      />
    </div>
  )
}

export default Dashboard
