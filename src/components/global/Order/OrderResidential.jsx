import React, { useState, useEffect } from "react"
import Slider from "rc-slider"
// import Tooltip from "rc-tooltip"
import "rc-slider/assets/index.css"

import { Tooltip } from "./TooltipResidential"

const OrderResidential = () => {
  const [value, setValue] = useState(20)
  const [data, setData] = useState(2)
  const [price, setPrice] = useState(19.5)
  useEffect(() => {
    if (value.toString().length <= 2) {
      setData(value.toString()[0])
      setPrice(data * 9.75)
    } else {
      setData(value.toString().substring(0, 2))
      setPrice(data * 9.75)
    }
    // setPrice(parseInt(price, 10) * 9.75)
    // setPrice(value)
    console.log(price)
  }, [value])
  return (
    <div>
      <div className="pt-5 md:pt-0">
        <h3 className="font-semibold text-lg text-card-title">Data Amount</h3>
        <p className="text-card-label text-base pb-4">
          Select the amount of residential data you need.
        </p>
        <div>
          <div className="w-full">
            <Slider
              min={20}
              max={100}
              value={value}
              defaultValue={20}
              marks={{ 20: "", 40: "", 60: "", 80: "", 100: "" }}
              step={null}
              onChange={setValue}
              handle={Tooltip}
              handleStyle={{
                backgroundColor: "#b94dff",
                border: "none",
                height: 15,
                width: 15,
                boxShadow: "none !important",
              }}
              dotStyle={{
                width: 5,
                border: "none",
                height: 5,
                backgroundColor: "#404244",
              }}
              activeDotStyle={{
                backgroundColor: "transparent",
              }}
              trackStyle={{ backgroundColor: "#b94dff", height: 5 }}
              railStyle={{ backgroundColor: "#313336", height: 5 }}
            />
          </div>
        </div>
        <p className="text-sm text-card-subtext pt-2">$9.75 per gigabyte</p>
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
            <h4 className="text-base text-card-header">Data Amount</h4>
            <p className="text-3xl font-bold text-primary-light">{data} GB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderResidential
