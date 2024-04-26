import Account from "@/components/Account"
import Elements from "@/components/Elements"
import Hero from "@/components/Hero"
import { Inter } from "next/font/google"
import ForBusiness from "@/components/ForBusiness"
import Analytics from "@/components/Analytics"
import Testimonials from "@/components/Testimonials"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}>
      <Hero />
      <Account />
      <Elements />
      <ForBusiness />
      <Analytics />
      <Testimonials />
    </main>
  )
}
