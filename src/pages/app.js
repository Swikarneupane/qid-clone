import Image from "next/image"
import React from "react"

const App = () => {
  return (
    <div className="bg-[#FEFFFE] flex flex-row items-center justify-center p-20 gap-5">
      <div className="w-[60%]">
        <h3 className="text-black text-4xl font-bold mb-5">Get the qid App</h3>
        <div className="flex flex-row gap-3">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center justify-center gap-5 bg-black  h-[100px] p-3 rounded-xl text-white">
              {/* Add apple and imgs  */}
              <div className="flex flex-col w-full">
                <p>Download on the</p>
                <p className="text-xl">App Store</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-5 bg-black h-[100px] px-3 rounded-xl text-white">
              {/* Add apple and playstore imgs  */}
              <div className="flex flex-col w-full">
                <p className="text-sm font-extralight">Download on the</p>
                <p className="text-2xl font-semibold">App Store</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/assets/app2.png"
              height={20}
              width={200}
              alt="QR"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* <div></div> */}
      </div>
      <div className="w-[50%] pt-10">
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
  )
}

export default App
