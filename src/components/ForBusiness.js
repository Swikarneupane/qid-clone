import Image from "next/image"
import React from "react"

const ForBusiness = () => {
  return (
    <div className="text-white py-9 max-w-[1150px]">
      <div className="px-29 text-center md:-mb-36 z-50 relative">
        <h2 className="text-[70px] font-extrabold">
          <span className="italic">qid</span> for{" "}
          <span className="bg-gradient-to-r from-[#757575]   to-[#ffffff] inline-block text-transparent bg-clip-text">
            business
          </span>
        </h2>
        <p className="text-[30px] font-semibold">
          manage all your IDs with one QR
        </p>
      </div>
      <div className="w-[99vw] md:-ml-[20vw] overflow-hidden z-10 relative">
        <Image
          src="/assets/home aadhar.png"
          width={3000}
          height={50}
          alt="Aadhar"
          className="w-[100vw] "
        />
      </div>
    </div>
  )
}

export default ForBusiness
