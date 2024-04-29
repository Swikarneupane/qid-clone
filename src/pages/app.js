import Image from "next/image"
import React from "react"
import Link from "next/link"

const App = () => {
  return (
    <div className="bg-[#FEFFFE] mx-auto">
      <div className=" flex flex-row items-center justify-center px-16 pt-20 pb-10 gap-9 max-w-[1150px] mx-auto">
        <div className="w-[70%] flex flex-col items-center">
          <h3 className="text-black text-[60px] font-extrabold mb-5">
            Get the qid App
          </h3>

          <div className="flex flex-row gap-5 items-center justify-center w-full h-full">
            <div className="flex flex-col gap-5">
              <Link href="https://apps.apple.com/us/app/qid-quick-id/id1629041779">
                <Image
                  src="/assets/app store.png"
                  width={250}
                  height={20}
                  alt="App Store"
                  // className="w-full h-full"
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.quickids.digilocker.qid">
                <Image
                  src="/assets/google.png"
                  width={250}
                  height={20}
                  alt="App Store"
                  // className="w-full h-full"
                />
              </Link>
            </div>
            <Image
              src="/assets/app2.png"
              height={20}
              width={200}
              alt="QR"
              className=""
            />
          </div>

          {/* <div></div> */}
        </div>
        <div className="w-[55%] pt-10">
          <Image
            src="/assets/app1.png"
            height={8000}
            width={800}
            objectFit="cover"
            alt="App Image"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default App
