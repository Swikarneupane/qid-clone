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
    <div className="fixed py-5 bg-black flex flex-row w-full items-center justify-between shadow-md">
      <div className="text-[#C4C5C5] text-[40px]">
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
            } cursor-pointer  duration-300 font-semibold`}>
            {items.text}
          </Link>
        ))}
      </ul>
      {/* </div> */}
    </div>
  )
}

export default Navbar
