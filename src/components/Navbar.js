import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"

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
  const [openNav, setOpenNav] = useState(true)
  const [openDropDown, setOpenDropDown] = useState(false)

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setOpenNav(true)
    }
  }, [])

  return (
    <div className="mx-auto bg-black flex items-center justify-center pt-8 overflow-hidden">
      <div className="fixed px-5 py-2 bg-black  w-full  shadow-md z-40">
        <div className="md:w-[1150px] w-full flex flex-row items-center justify-between mx-auto">
          <div className="text-[#C4C5C5] text-[45px]">
            <Link href="/" className=" italic font-bold">
              qid
            </Link>
          </div>
          {/* <div className=""> */}
          {openNav && (
            <div>
              <Image
                src="/assets/menu-white.png"
                width={60}
                height={20}
                alt="Ham"
                onClick={() => setOpenDropDown(true)}
              />
            </div>
          )}
          {openDropDown && (
            <div>
              <select>
                <option>App</option>
                <option>C-Form Pro</option>
                <option>Contact</option>
              </select>
            </div>
          )}

          {!openNav && (
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
          )}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
