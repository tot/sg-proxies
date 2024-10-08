import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function FaqItem({ question, answer }) {
  const [isOpen, toggleItem] = useState(false)
  return (
    <div
      className={
        isOpen
          ? "w-full lg:w-faq mx-auto mb-4 transition-colors ease-in duration-75 border rounded-md border-inactive-plan"
          : "w-full lg:w-faq mx-auto mb-4 transition-colors ease-in duration-75 border rounded-md border-light-background"
      }
    >
      <button
        onClick={() => toggleItem(!isOpen)}
        className={
          isOpen
            ? "transition-colors ease-in duration-75 focus:outline-none block w-full bg-none text-left p-3 outline-none bg-inactive-plan rounded-t-md text-lg text-primary transition-color"
            : "transition-colors ease-in duration-75 focus:outline-none block w-full bg-none text-left p-3 outline-none bg-light-background rounded-t-md text-lg text-card-header"
        }
      >
        {question}
        <span className="float-right">{isOpen ? "-" : "+"}</span>
      </button>
      <div>
        {isOpen && (
          <AnimatePresence>
            <motion.div
              // initial={{ opacity: 0 }}
              animate={{ y: 100 }}
              transition={{ ease: "easeIn", duration: 500 }}
              className="text-left p-4 text-base text-paragraph"
            >
              {answer}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  )
}

export default FaqItem
