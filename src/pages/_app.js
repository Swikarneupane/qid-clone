import "@/styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Raleway } from "next/font/google"

const raleway = Raleway({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
  return (
    // <div className="bg-[#0B0A0B]">
    //   <div className={` min-h-screen ${raleway.className} bg-[#0B0A0B]`}>
    //     <div className="py-10 ">
    //       <Navbar />
    //     </div>
    //     <Component {...pageProps} />
    //     <div className="flex flex-col  pt-3 mx-auto">
    //       <hr className="bg-[#C4C5C5] text-[#C4C5C5] mb-5" />
    //       <Footer />
    //     </div>
    //   </div>
    // </div>
    <div className={`${raleway.className} bg-[#0B0A0B] `}>
      <div className={`w-[100%] flex justify-center pt-4 -mt-2 `}>
        <Navbar />
      </div>
      <Component {...pageProps} />
      <div className="w-[100%] flex flex-col justify-center">
        <hr className="bg-[#abb8c3] text-[#abb8c3] mb-5 opacity-35" />
        <Footer />
      </div>
    </div>
  )
}
