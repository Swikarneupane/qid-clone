// import Link from "next/link"
// import React, { useEffect, useState } from "react"
// import { useRouter } from "next/router"
// import Image from "next/image"

// const navItems = [
//   {
//     text: "App",
//     href: "/app",
//   },
//   {
//     text: "C-Form Pro",
//     href: "/cform",
//   },
//   {
//     text: "Contact",
//     href: "/contact",
//   },
// ]

// const Navbar = () => {
//   const router = useRouter()
//   const path = router.pathname
//   const [openNav, setOpenNav] = useState(true)
//   const [openDropDown, setOpenDropDown] = useState(false)

//   useEffect(() => {
//     if (window.innerWidth <= 1024) {
//       setOpenNav(true)
//     }
//   }, [])

//   return (
//     <div className="mx-auto bg-black flex items-center justify-center pt-8 overflow-hidden">
//       <div className="fixed px-5 py-2 bg-black  w-full  shadow-md z-40">
//         <div className="md:w-[1150px] w-full flex flex-row items-center justify-between mx-auto">
//           <div className="text-[#C4C5C5] text-[45px]">
//             <Link href="/" className=" italic font-bold">
//               qid
//             </Link>
//           </div>
//           {/* <div className=""> */}
//           {openNav && (
//             <div>
//               <Image
//                 src="/assets/menu-white.png"
//                 width={60}
//                 height={20}
//                 alt="Ham"
//                 onClick={() => setOpenDropDown(true)}
//               />
//             </div>
//           )}
//           {openDropDown && (
//             <div>
//               <select>
//                 <option>App</option>
//                 <option>C-Form Pro</option>
//                 <option>Contact</option>
//               </select>
//             </div>
//           )}

//           {!openNav && (
//             <ul className="flex flex-row gap-3 items-center justify-center">
//               {navItems.map((items, index) => (
//                 <Link
//                   key={index}
//                   href={items.href}
//                   className={` ${
//                     path == items.href
//                       ? "text-white"
//                       : "hover:text-white text-[#AEAB9E]"
//                   } cursor-pointer  duration-300 font-semibold text-lg`}>
//                   {items.text}
//                 </Link>
//               ))}
//             </ul>
//           )}
//           {/* </div> */}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import Sidebar from "./Sidebar"
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

const Navbar = () => {
  const router = useRouter()
  const path = router.pathname
  const [openNav, setOpenNav] = useState(false)
  const [openClass, setOpenClass] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  // console.log(path);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 0)
  //   }

  //   window.addEventListener("scroll", handleScroll)

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

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
            className={`flex lg:hidden cursor-pointer ${poppins.className}`}
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
