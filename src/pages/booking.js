import React from "react"

const Booking = () => {
  return (
    <div className="text-white md:py-36 py-24  px-5 min-h-[95vh] flex md:flex-row flex-col items-center gap-10 max-w-[1150px] mx-auto">
      <div className="md:w-[60%] w-full flex flex-col gap-3">
        <h2 className="font-bold md:text-[80px] sm:text-[65px] text-[55px] leading-tight">
          Book a Demo
        </h2>
        <p className="md:text-[28px] text-[22px] text-[#FFFFFFC9] leading-tight mb-5">
          Discover Qid - Your Partner in Secure Identity Management
        </p>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 text-[#A8A8A8]">
          <span
            className={`border-[1px]  rounded-xl text-[#FFFFFFC9] mr-5 w-max py-[7px] px-[10px] border-[#4D4D4D] bg-gradient-to-br  from-[#353535C7] via-[#353535C7]  to-[#006645]`}>
            Quick Guest Check-In
          </span>
          <span
            className={`border-[1px] rounded-xl text-[#FFFFFFC9] sm:ml-2  w-max py-[7px] px-[10px] border-[#4D4D4D] bg-gradient-to-br from-[#353535C7] via-[#353535C7]  to-[#B45B0F]`}>
            C-Form Automation
          </span>
          <span
            className={`border-[1px] rounded-xl text-[#FFFFFFC9] w-max py-[7px] px-[10px] border-[#4D4D4D] bg-gradient-to-br from-[#353535C7] via-[#353535C7] to-[#000000]`}>
            Business Analytics
          </span>
          <span
            className={`border-[1px] rounded-xl text-[#FFFFFFC9] w-max py-[7px] px-[10px] border-[#4D4D4D] bg-gradient-to-br from-[#353535C7] via-[#353535C7] to-[#000000]`}>
            QR Based Customer Onboarding
          </span>
        </div>

        <hr className="my-9 opacity-35 md:w-[75%] w-full" />
        <p className="text-blue-400 font-semibold text-[32px]">
          Trusted by 30,000+ Users
        </p>
      </div>
      <div className="sm:p-10 p-5 md:w-[50%] w-full border-[1px] rounded-3xl font-medium border-[#5E5E5E]">
        <form className="flex flex-col gap-7 ">
          <div className="flex flex-col font-medium">
            <label htmlFor="name" className="text-[#B8B8B8]">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="px-3 py-1 border-b-[1px] border-gray-500 bg-transparent focus:outline-none  font-semibold text-xl"
            />
          </div>
          <div className="flex sm:flex-row flex-col gap-5">
            <div className="flex flex-col">
              <label htmlFor="phnum" className="text-[#B8B8B8]">
                Phone Number
              </label>
              <input
                type="tel"
                name="phnum"
                id="phnum"
                className="px-3 w-full py-1 border-b-[1px] border-gray-500 bg-transparent focus:outline-none font-semibold text-xl"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[#B8B8B8]">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="px-3 w-full py-1 border-b-[1px] border-gray-500 bg-transparent focus:outline-none  font-semibold text-xl"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-[#B8B8B8]">
              Company Name
            </label>
            <input
              type="text"
              name="message"
              id="message"
              className="px-3 py-1 border-b-[1px] border-gray-500 bg-transparent focus:outline-none  font-semibold text-xl"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="industry" className="text-gray-400">
              Industry
            </label>
            <select
              //   type="option"
              name="industry"
              id="industry"
              className="px-3 py-1 border-b-[1px] border-gray-500 bg-transparent focus:outline-none text-lg  font-semibold">
              <option className="text-black">Hospitality</option>
              <option className="text-black">Software Development</option>
              <option className="text-black">Education</option>
              <option className="text-black">Legal</option>
              <option className="text-black">Finance</option>
              <option className="text-black">Retail</option>
              <option className="text-black">E-Commerce</option>
              <option className="text-black">Fintech</option>
              <option className="text-black">Other</option>
            </select>
          </div>
          <button className="bg-white w-max ml-auto hover:bg-blue-500 hover:text-white duration-300 font-semibold text-black px-10 py-3 rounded-3xl mt-7">
            Book Demo
          </button>
        </form>
      </div>
    </div>
  )
}

export default Booking
