import Link from "next/link"
import React from "react"
import { useRouter } from "next/router"

const navItems = [
  {
    text: "App",
    href: "/app",
  },
  {
    text: "C-Form Pro",
    href: "/cform",
  },
  {
    text: "Contact",
    href: "/contact",
  },
]

const Navbar = () => {
  const router = useRouter()
  const path = router.pathname
  return (
    <div className="mx-auto bg-black flex items-center justify-center w-screen pt-8">
      <div className="fixed px-5 py-2 bg-black  w-full  shadow-md z-40">
        <div className="w-[1150px] flex flex-row items-center justify-between mx-auto">
          <div className="text-[#C4C5C5] text-[45px]">
            <Link href="/" className=" italic font-bold">
              qid
            </Link>
          </div>
          {/* <div className=""> */}
          <ul className="flex flex-row gap-3 items-center justify-center">
            {navItems.map((items, index) => (
              <Link
                key={index}
                href={items.href}
                className={` ${
                  path == items.href
                    ? "text-white"
                    : "hover:text-white text-[#AEAB9E]"
                } cursor-pointer  duration-300 font-semibold text-lg`}>
                {items.text}
              </Link>
            ))}
          </ul>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
