import Image from "next/image"
import React from "react"

const ForBusiness = () => {
  return (
    <div className="text-white py-9">
      <div className="px-29 text-center">
        <h2>qid for business</h2>
        <p>manage all your IDs with one QR</p>
      </div>
      <div className="w-[98vw]">
        <Image
          src="/assets/home aadhar.png"
          width={1000}
          height={50}
          alt="Aadhar"
          className="w-[100%]"
        />
      </div>
    </div>
  )
}

export default ForBusiness
