import React from "react"

const Shipping = () => {
  return (
    <div className=" pt-40 px-5 pb-5 min-h-[70vh] max-w-[1150px] mx-auto">
      <div className="flex flex-col text-white text-[17px] gap-9 font-semibold">
        <div>
          <h1 className="font-bold text-[60px]">Shipping and Return Policy</h1>
        </div>
        <div className="bg-white text-black rounded-3xl p-6 flex flex-col gap-5">
          <p>
            Since QID is a service-based application, there is no shipment and
            delivery included. There are no policies related to shipping and
            return for this platform.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Shipping
