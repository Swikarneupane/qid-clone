import Image from "next/image"
import React from "react"

const Analytics = () => {
  return (
    <div className="text-white flex flex-col gap-5 py-8">
      <div className="flex flex-row gap-5">
        <div className="flex flex-col w-[20%] gap-5 border-[1px] border-gray-700 p-5 rounded-xl">
          <Image
            src="/assets/home3.png"
            width={100}
            height={30}
            alt="QR"
            className="rounded-lg w-full h-full"
          />
          <h3>Collect IDs with QR</h3>
          <p className="font-extralight text-sm">Easy to setup QR code stand</p>
        </div>
        <div className="flex flex-col w-[80%] gap-5 border-[1px] border-gray-700 p-5 rounded-xl">
          <h3>Business Analytics</h3>
          <Image
            src="/assets/home2.png"
            width={40000}
            height={900}
            alt="QR"
            className="rounded-md w-full h-full"
          />
          <p className="font-extralight text-sm">
            Unlock the power of data with qid – your ultimate tool for
            comprehensive business analytics.
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col w-[20%] gap-5 border-[1px] border-gray-700 p-5 rounded-xl">
          <h3>Customized Interface</h3>
          <p className="font-extralight text-sm">
            Tailor qid’s interface to perfectly align with your brand, creating
            a seamless and personalized user experience.
          </p>
        </div>
        <div className="flex flex-col w-[40%] gap-5 border-[1px] border-gray-700 p-5 rounded-xl">
          <h3>Developer APIs</h3>
          <p className="font-extralight text-sm">
            Supercharge your applications with qid’s robust developer APIs,
            enabling you to effortlessly leverage the full potential of our
            platform and create unique, personalized experiences for your users.
          </p>
        </div>
        <div className="flex flex-col w-[40%] gap-5 border-[1px] border-gray-700 p-5 rounded-xl">
          <h3>One-Click C-Form</h3>
          <p className="font-extralight text-sm">
            Simplify C-Form filling with qid’s 1-Click solution, automating the
            process and saving you time while ensuring compliance.{" "}
          </p>
        </div>
      </div>
      <button className="bg-white mx-auto text-black w-max flex flex-row items-center gap-2 py-4 px-6 rounded-3xl font-bold">
        Create Business Account
        <svg
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15">
          <path
            d="M6.146 10.146l-.353.354.707.707.354-.353-.708-.708zM9.5 7.5l.354.354.353-.354-.353-.354L9.5 7.5zM6.854 4.146L6.5 3.793l-.707.707.353.354.708-.708zm0 6.708l3-3-.708-.708-3 3 .708.708zm3-3.708l-3-3-.708.708 3 3 .708-.708zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zM1 7.5A6.5 6.5 0 017.5 1V0A7.5 7.5 0 000 7.5h1zM7.5 14A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zm0 1A7.5 7.5 0 0015 7.5h-1A6.5 6.5 0 017.5 14v1z"
            fill="currentColor"></path>
        </svg>
      </button>
    </div>
  )
}

export default Analytics
