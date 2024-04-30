import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Poppins, Montserrat } from "next/font/google"

const poppins = Poppins({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})
const montserrat = Montserrat({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const Sidebar = ({ openNav, setOpenNav }) => {
  const [openClass, setOpenClass] = useState(false)

  const handleClickOutside = () => {
    setOpenClass(false)
  }

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
      className={`absolute flex  ${poppins.className} items-center  w-[100vw] h-[max] bg-[#303030] z-[100] mt-[70px] `}>
      {/* <div
        className="absolute right-5 top-0 cursor-pointer"
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
      </div> */}
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
