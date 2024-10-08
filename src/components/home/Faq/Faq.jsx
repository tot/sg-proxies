import React from "react"
import FaqItem from "./FaqItem"

function Faq() {
  return (
    <div>
      <div id="Faq" className="py-32 text-center max-w-6xl mx-auto px-6">
        <h1 className="font-semibold text-white text-4xl">
          Frequently Asked Questions
        </h1>
        <div className="py-20">
          <FaqItem
            question="What is a proxy?"
            answer="Cras rhoncus eros at ex malesuada sollicitudin. Vestibulum pharetra est vitae volutpat varius. In ac purus velit. Aliquam a laoreet elit. Duis interdum interdum lacus non porta."
          />
          <FaqItem
            question="How do I order a plan?"
            answer="Quisque porttitor nunc vitae quam pellentesque placerat. Ut semper odio odio, sit amet vulputate tortor molestie a. Fusce congue facilisis magna id luctus. Morbi eu hendrerit lacus."
          />
        </div>
      </div>
    </div>
  )
}

export default Faq
