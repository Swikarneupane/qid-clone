import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
const Sidebar = ({ setOpenNav }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      setOpenNav(false)
    }

    router.events.on("routeChangeStart", handleRouteChange)
    return () => {
      router.events.off("routeChangeStart", handleRouteChange)
    }
  }, [])

  return (
    <div
      className={`absolute flex  items-center  w-[100vw] h-[max] bg-[#303030] z-[100] mt-[70px] `}>
      <div className="relative flex flex-col text-[#dfdede]  font-semibold duration-300">
        <div className="relative flex flex-col items-start text-left text-base justify-center px-9">
          <Link
            href="/app"
            className="w-[full] flex justify-center items-center h-[3rem] border-white py-2">
            App
          </Link>
          <Link
            href="/cform"
            className="w-[full] flex justify-center items-center h-[3rem] border-white py-2">
            C-Form Pro
          </Link>
          <Link
            href="/contact"
            className="w-[full] flex justify-center items-center h-[3rem] border-white py-2">
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
