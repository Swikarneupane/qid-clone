import Image from "next/image"
import Link from "next/link"
import React from "react"

const Account = () => {
  return (
    <div className="max-w-[1150px] text-white flex md:flex-row flex-col max-h[100vh] md:gap-3 gap-20 items-center px-5">
      <div className="md:w-[50%] w-full">
        <h2 className="font-bold text-[70px]">
          <span className="bg-gradient-to-r from-[#FFB76B]  via-[#FF7C00] to-[#FF7F04] inline-block text-transparent bg-clip-text ">
            Secure
          </span>
          , easy, and always with you.
        </h2>
        <Link
          href="/app"
          className="bg-white text-black w-max flex flex-row items-center gap-2 py-3 px-5 rounded-3xl font-bold text-[17px]">
          Create free account
          <svg
            viewBox="0 0 15 15"
            fill="#fff"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15">
            <path
              d="M6.146 10.146l-.353.354.707.707.354-.353-.708-.708zM9.5 7.5l.354.354.353-.354-.353-.354L9.5 7.5zM6.854 4.146L6.5 3.793l-.707.707.353.354.708-.708zm0 6.708l3-3-.708-.708-3 3 .708.708zm3-3.708l-3-3-.708.708 3 3 .708-.708zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zM1 7.5A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zm0 1A7.5 7.5 0 0015 7.5h-1A6.5 6.5 0 017.5 14v1z"
              fill="#000000"></path>
          </svg>
        </Link>
      </div>
      <div className="md:w-[45%] w-full">
        <Image
          src="/assets/home1.png"
          height={500}
          width={800}
          alt="Home"
          className="w-full h-full"
        />
      </div>
    </div>
  )
}

export default Account
