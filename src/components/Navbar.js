import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import Sidebar from "./Sidebar"
import { useRouter } from "next/router"

const Navbar = () => {
  const router = useRouter()
  const path = router.pathname
  const [openNav, setOpenNav] = useState(false)

  return (
    <div
      className={`text-white flex justify-center fixed  duration-500 pt-2 pb-4 w-full z-[100]  -mt-2 bg-black
      `}>
      {openNav && <Sidebar openNav={openNav} setOpenNav={setOpenNav} />}
      <div
        className={`md:max-w-[1140px] w-full flex justify-between items-center lg:flex-row md:px-3 px-10
        `}>
        <Link
          href="/"
          className="flex font-medium items-center text-white md:mb-0 my-auto ">
          <p className=" xl:text-[40px] text-[40px] my-auto text-[#d6d5d5] flex flex-col items-center font-bold italic">
            qid
          </p>
        </Link>
        {!openNav && (
          <div
            className={`flex lg:hidden cursor-pointer`}
            onClick={() => {
              setOpenNav(true)
            }}>
            <Image
              width={30}
              height={30}
              src={"/assets/menu-white.png"}
              alt="Menu"
              className="w-[1.5rem] md:w-[2.5rem] "
            />
          </div>
        )}
        {openNav && (
          <div
            className="absolute right-10 top-6 cursor-pointer"
            onClick={() => {
              setOpenNav(false)
            }}>
            <Image
              alt="closebtn"
              width={10}
              height={10}
              src="/assets/close-white.png"
              className="w-[1.5rem] md:w-[4rem] object-contain "
            />
          </div>
        )}
        <div className="w-[45%] hidden lg:flex items-center lg:justify-end ">
          <div
            className={` flex items-center justify-center text-[#7A7A7A] text-base font-semibold`}>
            <Link
              href="/app"
              value="/app"
              className={`${
                path == "/app" && "text-[white]"
              } hover:text-white  mr-8 text-base  duration-300`}>
              App
            </Link>
            <Link
              href="/cform"
              value="/cform"
              className={`${
                path == "/cform" && "text-[white]"
              } relative mr-8 text-base hover:text-white duration-300`}>
              C-Form Pro
            </Link>
            <Link
              href="/contact"
              value="/contact"
              className={`${
                path.includes("/contact") && "text-[white]"
              } mr-8 text-base  hover:text-white duration-300`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
