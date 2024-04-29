import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

const downloadLists = [
  {
    text: "Android",
    href: "https://play.google.com/store/apps/details?id=com.quickids.digilocker.qid",
  },
  {
    text: "IOS",
    href: "https://apps.apple.com/us/app/qid-quick-id/id1629041779",
  },
  {
    text: "C-Form Pro Plugin",
    href: "https://chromewebstore.google.com/detail/qid-c-form-pro/afghjacdcfhoikcccemlchhmokfgobpj?pli=1",
  },
  {
    text: "Book a Demo",
    href: "/booking",
  },
]
const legalLists = [
  {
    text: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    text: "Terms of Use",
    href: "/terms-of-use",
  },
  {
    text: "Cancellation and Refund Policy",
    href: "/cancellation",
  },
  {
    text: "Shipping and Return Policy",
    href: "/shipping-and-return-policy",
  },
]

const Footer = () => {
  const router = useRouter()
  const path = router.pathname
  return (
    <div className="max-w-[1150px] w-full px-5 py-5 mx-auto">
      <div className="flex flex-row items-center justify-between py-16">
        <div className="text-[#C4C5C5] text-[50px] italic font-bold">qid</div>
        <div className="flex flex-row gap-24">
          <div>
            <h2 className="text-[#FEFFFE] mb-7 font-bold text-2xl">
              Download App
            </h2>
            <ul>
              {downloadLists.map((item, index) => (
                <li
                  key={index}
                  className={`text-[#AEAB9E] mb-7 font-medium text-lg hover:text-white duration-300 cursor-pointer ${
                    path == item.href
                      ? "text-white"
                      : "hover:text-white text-[#AEAB9E]"
                  } `}>
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[#FEFFFE] mb-7 font-bold text-2xl">Legal</h2>
            <ul>
              {legalLists.map((item, index) => (
                <li
                  key={index}
                  className={`text-[#AEAB9E] mb-7 font-medium text-lg hover:text-white duration-300 cursor-pointer ${
                    path == item.href
                      ? "text-white"
                      : "hover:text-white text-[#AEAB9E]"
                  }  `}>
                  <Link href={item.href}>{item.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr className=" w-[100%] my-5 bg-[#abb8c3] text-[#abb8c3]  opacity-35" />

      <div className="text-[#FEFFFE] flex flex-row items-center justify-between">
        <p className="text-lg">Oneqid Technologies Private Limited</p>
        {/* <Link className="bg-white w-max h-max px-2 rounded-2xl" href="/"> */}
        <Link
          href="https://www.linkedin.com/company/oneqid/"
          className="bg-white w-max h-max p-[6px] rounded-2xl hover:opacity-80 duration-300">
          <svg
            viewBox="0 0 15 15"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            className="w-max h-max z-20">
            <path
              d="M4.5 6v5m6 0V8.5a2 2 0 10-4 0V11 6M4 4.5h1M1.5.5h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z"
              stroke="#fff"></path>
          </svg>
        </Link>
        {/* </Link> */}
      </div>
    </div>
  )
}

export default Footer
