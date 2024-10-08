import React from "react"
import styled from "styled-components"
import { Handle } from "rc-slider"
import { motion } from "framer-motion"

export function Tooltip(props) {
  const { value, dragging, index, ...rest } = props
  let string
  if (value.toString().length <= 2) {
    string = value.toString()[0]
  } else {
    string = value.toString().substring(0, 2)
  }
  
  return (
    <div>
      <SliderHandle key={index} value={value} {...rest}>
        {dragging && (
          <div className="-mt-8 whitespace-no-wrap">
            <motion.div
              animate={{ y: -10, opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.75 }}
              transition={{ ease: "easeIn", duration: 0.05 }}
              className="text-white flex items-center bg-neutral-800 w-fit text-sm font-medium px-3 py-1 rounded-md"
            >
              {string} <span className="ml-1">GB</span>
            </motion.div>
          </div>
        )}
      </SliderHandle>
    </div>
  )
}

// If you want to center the text with the handle
const SliderHandle = styled(Handle)`
  display: flex;
  justify-content: center;
`
