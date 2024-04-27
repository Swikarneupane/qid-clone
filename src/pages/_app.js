import "@/styles/globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Raleway } from "next/font/google"

const raleway = Raleway({ subsets: ["latin"] })

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-[#0B0A0B]">
      <div
        className={`bg-[#0B0A0B] max-w-[60vw] mx-auto min-h-screen ${raleway.className} `}>
        <div className="flex w-[100%] mr-0 pt-3">
          <Navbar />
        </div>
        <Component {...pageProps} />
        <div className="flex w-[100%] mr-0 pt-3">
          <Footer />
        </div>
      </div>
    </div>
  )
}
