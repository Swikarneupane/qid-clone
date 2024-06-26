import Link from "next/link"
import React from "react"

const Hero = () => {
  return (
    <div className="flex max-w-[1150px] min-h-[70vh] flex-col gap-5 items-center justify-center mb-48 sm:px-5 pl-5">
      <p className="text-[white] text-center font-bold text-[70px] md:leading-[80px] leading-[60px]">
        every person deserves to know and be known by their true identity
      </p>
      <Link
        href="/app"
        className="px-10 w-max py-4 font-bold text-md rounded-3xl bg-white">
        Download qid
      </Link>
    </div>
  )
}

export default Hero
