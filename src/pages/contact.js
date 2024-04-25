import React from "react"

const Contact = () => {
  return (
    <div className="text-white p-20 flex flex-row items-center gap-8">
      <div className="w-[40%] flex flex-col gap-3">
        <h2>Contact Us</h2>
        <p>Discover Qid – Your Partner in Secure Identity Management</p>
        <p className="flex flex-row items-center gap-3">
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15">
            <path
              d="M.5 4.5l7 4 7-4m-13-3h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
              stroke="currentColor"></path>
          </svg>
          contact@oneqid.com
        </p>
        <p className="flex flex-row items-center gap-3">
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15">
            <path
              d="M2.5 0A2.5 2.5 0 000 2.5v2C0 10.299 4.701 15 10.5 15h2a2.5 2.5 0 002.5-2.5v-1.382a1.5 1.5 0 00-.83-1.342l-2.415-1.208a1.5 1.5 0 00-2.094.868l-.298.893a.71.71 0 01-.812.471A5.547 5.547 0 014.2 6.45a.71.71 0 01.471-.812l1.109-.37a1.5 1.5 0 00.98-1.787l-.586-2.344A1.5 1.5 0 004.72 0H2.5z"
              fill="currentColor"></path>
          </svg>
          +91 960 640 640 4
        </p>
        <hr />
        <p>Trusted by 25,000+ Users</p>
      </div>
      <div className="px-8 w-[60%] py-8 border-[1px] rounded-xl">
        <form className="flex flex-col gap-7">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-400">
              Name <span className="text-red-500 text-xs">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-3 py-1 border-b-[1px] border-gray-500 bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex flex-row gap-5">
            <div className="flex flex-col">
              <label htmlFor="phnum" className="text-gray-400">
                Phone Number
              </label>
              <input
                type="tel"
                name="phnum"
                id="phnum"
                className="px-3 w-full py-1 border-b-[1px] border-gray-500 bg-transparent focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-400">
                Email <span className="text-red-500 text-xs">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="px-3 w-full py-1 border-b-[1px] border-gray-500 bg-transparent focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-400">
              Message <span className="text-red-500 text-xs">*</span>
            </label>
            <input
              type="text"
              name="message"
              id="message"
              className="px-3 py-1 border-b-[1px] border-gray-500 bg-transparent focus:outline-none"
            />
          </div>
          <button className="bg-white w-max ml-auto hover:bg-blue-500 hover:text-white duration-300 text-black px-10 py-3 rounded-3xl mt-7">
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
