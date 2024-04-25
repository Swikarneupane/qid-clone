import Link from "next/link"
import React from "react"

const downloadLists = [
  {
    text: "Android",
    href: "/",
  },
  {
    text: "IOS",
    href: "/",
  },
  {
    text: "C-Form Pro Plugin",
    href: "/",
  },
  {
    text: "Book a Demo",
    href: "/",
  },
]
const legalLists = [
  {
    text: "Privacy Policy",
    href: "/",
  },
  {
    text: "Terms of Use",
    href: "/",
  },
  {
    text: "Cancellation and Refund Policy",
    href: "/",
  },
  {
    text: "Shipping and Return Policy",
    href: "/",
  },
]

const Footer = () => {
  return (
    <div className="w-[100%] py-5">
      <hr className="bg-[#C4C5C5] text-[#C4C5C5] w-[100%] mb-5" />
      <div className="flex flex-row items-center justify-between">
        <div className="text-[#C4C5C5] text-4xl">qid</div>
        <div className="flex flex-row gap-9">
          <div>
            <h2 className="text-[#FEFFFE]">Download App</h2>
            <ul>
              {downloadLists.map((item, index) => (
                <li key={index} className="text-[#AEAB9E]">
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[#FEFFFE]">Legal</h2>
            <ul>
              {legalLists.map((item, index) => (
                <li key={index} className="text-[#AEAB9E]">
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className="bg-[#C4C5C5] text-[#C4C5C5] w-[100%] my-5" />

      <div className="text-[#FEFFFE] flex flex-row items-center justify-between">
        <p className="text-lg">Oneqid Technologies Private Limited</p>
        {/* <Link className="bg-white w-max h-max px-2 rounded-2xl" href="/"> */}
        <div className="bg-white w-max h-max p-2 rounded-2xl">
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            className="w-max h-max z-20">
            <path
              d="M4.5 6v5m6 0V8.5a2 2 0 10-4 0V11 6M4 4.5h1M1.5.5h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z"
              stroke="currentColor"></path>
          </svg>
        </div>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default Footer
// E9E6E6 for hero section