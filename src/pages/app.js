import Image from "next/image"
import React from "react"

const App = () => {
  return (
    <div className="bg-[#FEFFFE] flex flex-row items-center justify-center p-20">
      <div className="w-[60%]">
        <h3 className="text-black text-4xl font-bold mb-5">Get the qid App</h3>
        <div className="flex flex-row gap-3">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-center justify-center gap-5 bg-black  h-[100px] p-3 rounded-xl text-white">
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                className="">
                <path
                  d="M7.875 2.937A.371.371 0 017.5 2.57C7.5 1.15 8.676 0 10.124 0a.37.37 0 01.375.367c0 1.42-1.175 2.57-2.624 2.57z"
                  fill="currentColor"></path>
                <path
                  d="M7.875 2.937A.371.371 0 017.5 2.57C7.5 1.15 8.676 0 10.124 0a.37.37 0 01.375.367c0 1.42-1.175 2.57-2.624 2.57zm5.475 7.731c.145.106.192.3.11.458C12.14 13.712 11.087 15 10.125 15c-.448 0-.888-.142-1.317-.418a1.985 1.985 0 00-2.073-.044c-.52.305-1.015.462-1.485.462-1.415 0-3.75-4.267-3.75-6.608 0-2.5 1.339-4.406 3.375-4.406.958 0 1.785.138 2.48.419.294.118.627.11.914-.025.564-.266 1.308-.394 2.23-.394 1.127 0 2.11.55 2.926 1.615a.362.362 0 01-.075.514c-.911.67-1.35 1.421-1.35 2.277 0 .855.439 1.607 1.35 2.276z"
                  fill="currentColor"></path>
                <path
                  d="M13.35 10.668c.145.106.192.3.11.458C12.14 13.712 11.087 15 10.125 15c-.448 0-.888-.142-1.317-.418a1.985 1.985 0 00-2.073-.044c-.52.305-1.015.462-1.485.462-1.415 0-3.75-4.267-3.75-6.608 0-2.5 1.339-4.406 3.375-4.406.958 0 1.785.138 2.48.419.294.118.627.11.914-.025.564-.266 1.308-.394 2.23-.394 1.127 0 2.11.55 2.926 1.615a.362.362 0 01-.075.514c-.911.67-1.35 1.421-1.35 2.277 0 .855.439 1.607 1.35 2.276z"
                  fill="currentColor"></path>
              </svg>
              <div className="flex flex-col w-full">
                <p>Download on the</p>
                <p className="text-xl">App Store</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-5 bg-black h-[100px] px-3 py-1 rounded-xl text-white">
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                className="h-full w-[20%]">
                <path
                  d="M7.875 2.937A.371.371 0 017.5 2.57C7.5 1.15 8.676 0 10.124 0a.37.37 0 01.375.367c0 1.42-1.175 2.57-2.624 2.57z"
                  fill="currentColor"></path>
                <path
                  d="M7.875 2.937A.371.371 0 017.5 2.57C7.5 1.15 8.676 0 10.124 0a.37.37 0 01.375.367c0 1.42-1.175 2.57-2.624 2.57zm5.475 7.731c.145.106.192.3.11.458C12.14 13.712 11.087 15 10.125 15c-.448 0-.888-.142-1.317-.418a1.985 1.985 0 00-2.073-.044c-.52.305-1.015.462-1.485.462-1.415 0-3.75-4.267-3.75-6.608 0-2.5 1.339-4.406 3.375-4.406.958 0 1.785.138 2.48.419.294.118.627.11.914-.025.564-.266 1.308-.394 2.23-.394 1.127 0 2.11.55 2.926 1.615a.362.362 0 01-.075.514c-.911.67-1.35 1.421-1.35 2.277 0 .855.439 1.607 1.35 2.276z"
                  fill="currentColor"></path>
                <path
                  d="M13.35 10.668c.145.106.192.3.11.458C12.14 13.712 11.087 15 10.125 15c-.448 0-.888-.142-1.317-.418a1.985 1.985 0 00-2.073-.044c-.52.305-1.015.462-1.485.462-1.415 0-3.75-4.267-3.75-6.608 0-2.5 1.339-4.406 3.375-4.406.958 0 1.785.138 2.48.419.294.118.627.11.914-.025.564-.266 1.308-.394 2.23-.394 1.127 0 2.11.55 2.926 1.615a.362.362 0 01-.075.514c-.911.67-1.35 1.421-1.35 2.277 0 .855.439 1.607 1.35 2.276z"
                  fill="currentColor"></path>
              </svg>
              <div className="flex flex-col w-full">
                <p>Download on the</p>
                <p className="text-xl">App Store</p>
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/assets/app2.png"
              height={20}
              width={200}
              alt="QR"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* <div></div> */}
      </div>
      <div className="w-[40%] pt-10 pb-5">
        <Image
          src="/assets/app1.png"
          height={20}
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
