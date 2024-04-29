import React from "react"

const list = [
  {
    name: "Quick Guest Check-In",
    gradient: "#006645",
  },
  {
    name: "C-Form Automation",
    gradient: "#",
  },
  {
    name: "",
    gradient: "#000000",
  },
  {
    name: "QR Based Customer Onboarding",
    gradient: "#000000",
  },
]

const Booking = () => {
  return (
    <div className="text-white px-5 min-h-[95vh] flex flex-row items-center gap-10 max-w-[1150px] mx-auto">
      <div className="w-[60%] flex flex-col gap-3">
        <h2 className="font-bold text-[80px]">Book a Demo</h2>
        <p className="text-[28px] text-[#FFFFFFC9] leading-tight mb-5">
          Discover Qid - Your Partner in Secure Identity Management
        </p>

        <div className="grid grid-cols-3 gap-5 text-[#A8A8A8]">
          <span
            className={`border-[1px]  rounded-xl text-[#FFFFFFC9] mr-5 w-max py-[7px] px-[10px] border-[#4D4D4D] bg-gradient-to-br  from-[#353535C7] via-[#353535C7]  to-[#006645]`}>
            Quick Guest Check-In
          </span>
          <span
            className={`border-[1px] rounded-xl text-[#FFFFFFC9] ml-2 w-max py-[7px] px-[10px] border-[#4D4D4D] bg-gradient-to-br from-[#353535C7] via-[#353535C7]  to-[#B45B0F]`}>
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

        <hr className="my-9 opacity-35 w-[75%]" />
        <p className="text-blue-400 font-semibold text-[32px]">
          Trusted by 30,000+ Users
        </p>
      </div>
      <div className="p-10 w-[50%]  border-[1px] rounded-3xl font-medium border-[#5E5E5E]">
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
          <div className="flex flex-row gap-5">
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
