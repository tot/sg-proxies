import React, { useState, useEffect } from "react"
import Slider from "rc-slider"
// import Tooltip from "rc-tooltip"
import "rc-slider/assets/index.css"

import { Tooltip } from "./Tooltip"

const Order = () => {
  const [value, setValue] = useState(25)

  const [price, setPrice] = useState(68.75)
  useEffect(() => {
    setPrice(value * 2.75)
  }, [value])
  return (
    <div>
      <div className="pt-5 md:pt-0">
        <h3 className="font-semibold text-lg text-card-title">Quantity</h3>
        <p className="text-card-label text-base pb-4">
          Select the amount of proxies you need.
        </p>
        <div>
          <div className="w-full">
            <Slider
              min={25}
              max={100}
              value={value}
              defaultValue={25}
              marks={{ 25: "", 50: "", 75: "", 100: "" }}
              step={null}
              onChange={setValue}
              styles={{
                track: {
                backgroundColor: "#b94dff", height: 5
                },
                rail: {
                  backgroundColor: "#313336", height: 5
                },
                handle: {
                  backgroundColor: "#b94dff",
                  border: "none",
                  height: 15,
                  width: 15,
                  boxShadow: "none !important",
                },
              }}
              handle={Tooltip}
              dotStyle={{
                width: 5,
                border: "none",
                height: 5,
                backgroundColor: "#404244",
                boxShadow: "none !important",
              }}
              activeDotStyle={{
                backgroundColor: "transparent",
                boxShadow: "none !important",
              }}
            />
          </div>
        </div>
        <p className="text-sm text-card-subtext pt-2">$2.75 per proxy</p>
      </div>
      <div className="pt-8">
        <h3 className="font-semibold text-lg text-card-title">
          Your Order Details
        </h3>
        <div className="grid grid-cols-2">
          <div className="">
            <h4 className="text-base text-card-header">Price</h4>
            <p className="text-3xl font-bold text-primary-light">${price}</p>
          </div>
          <div className="">
            <h4 className="text-base text-card-header">Proxy Count</h4>
            <p className="text-3xl font-bold text-primary-light">{value}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order
