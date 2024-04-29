import React, { useState, useEffect } from "react"

const Elements = () => {
  const [isOpen, setIsOpen] = useState(true)
  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setIsOpen(false)
    }
  }, [])

  return (
    <div className="text-white max-w-[1150px] pb-24 px-5">
      {/* Two base elements part  */}
      <div className="flex md:flex-row flex-col-reverse items-center justify-between mb-24">
        <h2 className="md:w-[30%] text-[55px] font-bold text-[#FFFFFFD1] leading-[55px]">
          Two Base elements of Identity ecosystem
        </h2>
        <div className="md:w-[50%] flex flex-row gap-5">
          <div className="border-[1px] border-[#FFFFFF30] shadow-lg shadow-[#121E13]/50 bg-[#121E13] flex h-max flex-col rounded-3xl p-5 gap-1">
            {isOpen && (
              <p className="text-[51px] font-bold text-[#FFFFFF24]">1</p>
            )}
            <h2 className="text-[41px] font-medium text-[#FFFFFFD1]">
              {isOpen ? "Managing" : "Manage "}
            </h2>
            {isOpen && (
              <p className="text-base font-light text-[#7A7A7A]">
                Consolidate all your IDs securely in one place with qid, making
                them easily accessible whenever you need them
              </p>
            )}
          </div>
          <div className="border-[1px] border-[#FFFFFF30] shadow-lg shadow-[#241B08AD]/50 bg-[#241B08AD] flex h-max flex-col rounded-3xl p-5 gap-1 mt-9">
            {isOpen && (
              <p className="text-[51px] font-bold text-[#FFFFFF24]">2</p>
            )}
            <h2 className="text-[41px] font-medium text-[#FFFFFFD1]">
              {isOpen ? "Sharing" : "Share"}
            </h2>
            {isOpen && (
              <p className="text-base font-light text-[#7A7A7A]">
                Experience lightning-fast and trackable ID sharing with qid,
                ensuring seamless and efficient communication{" "}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Identity part  */}
      <div>
        {/* <div className="flex flex-row gap-5">
          {/* <div className="w-[50px] ">
            <div className=" flex flex-row">
              <div className="w-[5px] mx-auto mb-3 bg-gradient-to-b from-[#2d2c2b]  to-[#5af84a]"></div>
            </div>{" "}
            <hr className="mb-3" />
          </div> */}
        {/* <h3 className="text-[#FFFFFFB3] w-[40%] text-[40px] font-bold leading-[45px]">
            Your true identity,{" "}
            <span className="bg-gradient-to-r from-[#9cff9f]  via-[#5af84a] to-[#5af84a] inline-block text-transparent bg-clip-text ">
              managed
            </span>{" "}
            with ease.
          </h3>
        </div> */}
        <div className="flex flex-row my-3 gap-5">
          <div className="w-[34px]">
            <div className="w-[5px] mx-auto mb-4 bg-gradient-to-b from-[#0b0b0b]  to-[#5af84a] h-[150px]"></div>
            <hr className="mb-3" />
          </div>
          <div className="flex flex-col gap-3 justify-end">
            <h3 className="text-[#FFFFFFB3] w-[60%] text-[40px] font-bold leading-[45px]">
              Your true identity,{" "}
              <span className="bg-gradient-to-r from-[#9cff9f]  via-[#5af84a] to-[#5af84a] inline-block text-transparent bg-clip-text ">
                managed
              </span>{" "}
              with ease.
            </h3>
          </div>
        </div>

        <div className="flex flex-row my-3 gap-5">
          <div className="w-[55px] ml-2">
            <div className="w-[5px] mx-auto mb-1 bg-gradient-to-b from-[#9cff9f] via-[#3b6d36] to-[#eb6b15] md:h-[250px] h-[400px] -mt-2"></div>
          </div>
          {/* <div className=""> */}
          <div className="text-[#797878F5] text-[22px] md:h-[150px] h-[300px] mt-7 ml-3 font-semibold leading-tight">
            With qid, managing your IDs has never been easier. You can store and
            access all your IDs in one place, share them securely with others,
            and even get them verified with just a few clicks. Say goodbye to
            the hassle of carrying physical IDs or struggling with tedious
            verification processes, and hello to the convenience and simplicity
            of qid.
          </div>
          {/* </div> */}
        </div>

        <div className="flex flex-row my-3 gap-5">
          <div className="w-[55px]">
            <hr className="mb-3" />
            <div className="w-[5px] mx-auto mb-3 bg-gradient-to-b from-[#eb6b15]  to-[#0d0d0d] h-[200px]"></div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-[#FFFFFFB3] w-[60%] text-[40px] font-bold leading-[45px]">
              <span className="bg-gradient-to-r from-[#eb6b15]  via-[#c08257] to-[#c08257] inline-block text-transparent bg-clip-text ">
                Share
              </span>{" "}
              your identity with ease, qid has got you covered!
            </h3>
            <div className="text-[#797878F5] text-[22px] font-semibold leading-tight">
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
