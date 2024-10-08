import React from "react"
import LinkButton from "../../global/LinkButton/LinkButton"
import illustration from "../../../assets/illustration.svg"

const Landing = () => {
  return (
    <div>
      <div id="Home" className="max-w-6xl mx-auto p-6 py-32 xl:py-56 md:flex">
        <div className="w-full md:w-1/2 md:pr-10">
          <h1 className="text-white text-3xl lg:text-5xl font-bold">
            Reliable Proxies with Zero Limitations
          </h1>
          <p className="text-paragraph leading-loose text-base py-5">
            Pellentesque tristique, est et fringilla congue, urna augue laoreet
            nunc, dapibus consequat neque orci lobortis leo. Morbi vel viverra
            erat. Pellentesque consequat in.
          </p>
          <LinkButton text="Purchase" link="/dashboard" />
        </div>
        <div className="w-full md:w-1/2 mt-16 md:mt-0">
          <img
            src={illustration}
            className=""
            alt="Proxy Servers Illustration"
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
