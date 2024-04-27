import React from "react"

const Elements = () => {
  return (
    <div className="text-white">
      {/* Two base elements part  */}
      <div className="flex flex-row items-center justify-between">
        <h2 className="w-[30%] text-[40px] font-bold">
          Two Base elements of Identity ecosystem
        </h2>
        <div className="w-[50%] flex flex-row gap-5">
          <div className="border-[1px] border-gray-700 shadow-xl shadow-[#121F12] bg-[#121F12] flex h-max flex-col rounded-xl p-5 gap-3">
            <p className="text-[50px] font-extrabold text-gray-700">1</p>
            <h2 className="text-[20px] font-semibold ">Managing</h2>
            <p className="text-sm font-light">
              Consolidate all your IDs securely in one place with qid, making
              them easily accessible whenever you need them
            </p>
          </div>
          <div className="border-[1px] border-gray-700 shadow-current flex flex-col rounded-xl bg-[#1B1406] p-5 mt-9 gap-3">
            <p className="text-[40px] font-extrabold text-gray-700">2</p>
            <h2 className="text-[20px] font-semibold ">Sharing</h2>
            <p className="text-sm font-extralight">
              Experience lightning-fast and trackable ID sharing with qid,
              ensuring seamless and efficient communication{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Identity part  */}
      <div>
        <div className="flex flex-row my-3">
          <div className="w-[10%] items-center justify-center">
            <hr className="mb-3 hidden" />
            <div className=" mx-auto flex flex-row">
              <div className="w-[10%] mx-auto mb-3 bg-green-500 h-full"></div>
            </div>{" "}
            <hr />
          </div>
          <h3>Your true identity, managed with ease.</h3>
        </div>
        <div className="flex flex-row my-3">
          <div className="w-[10%] mx-auto flex flex-row">
            <div className="w-[10%] mx-auto mb-3 bg-green-500 h-full"></div>
          </div>
          <div>
            With qid, managing your IDs has never been easier. You can store and
            access all your IDs in one place, share them securely with others,
            and even get them verified with just a few clicks. Say goodbye to
            the hassle of carrying physical IDs or struggling with tedious
            verification processes, and hello to the convenience and simplicity
            of qid.
          </div>
        </div>
        <div className="flex flex-row my-3">
          <div className="w-[10%]">
            <hr className="mb-3" />
            <div className="w-[5%] mx-auto mb-3 bg-green-500 h-full"></div>
          </div>
          <div className="flex flex-col">
            <h3>Share your identity with ease, qid has got you covered!</h3>
            <div>
              Sharing IDs with qid is simple and convenient. Just add the ID to
              your qid profile and share it with anyone, anytime, anywhere. No
              need to carry physical IDs or worry about losing them.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Elements
