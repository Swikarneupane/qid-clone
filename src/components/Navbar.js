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
    <div className="fixed px-6 py-3 bg-black w-full flex flex-row items-center justify-between">
      <div className="text-[#C4C5C5] text-4xl">
        <Link href="/">qid</Link>
      </div>
      <div>
        <ul className="flex flex-row gap-5 items-center justify-center">
          {navItems.map((items, index) => (
            <Link
              key={index}
              href={items.href}
              className={` ${
                path == items.href
                  ? "text-white"
                  : "hover:text-white text-[#AEAB9E]"
              } cursor-pointer  duration-300`}>
              {items.text}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
