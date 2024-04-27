import Image from "next/image"
import React, { useRef, useEffect, useState } from "react"
import { Navigation, A11y, Autoplay } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/autoplay"

const testimonials = [
  {
    src: "/assets/testimonials/lavish sharma.jpg",
    name: "Lavish Sharma",
    position: "Operations Manager, The Lost Hostels",
    message:
      "The managers of our property suggest QID to their customers due to its ease of access.",
  },

  {
    src: "/assets/testimonials/mayur sontakke.jpg",
    name: "Mayur Sontakke",
    position: "Founder & CEO, NomadGao",
    message:
      "QID is set to revolutionise not just hospitality, but also other identity-centric industries.",
  },

  {
    src: "/assets/testimonials/dhruv arora.jpg",
    name: "Dhruv Arora",
    position: "Property Owner, Unplan Hostels, Rishikesh",
    message:
      "Best bheed management software for your property's front desk. ID collection has never been this fast.",
  },
  {
    src: "/assets/testimonials/jitesh agrawal.jpg",
    name: "Jitesh Agarwal",
    position: "Founder, The Lost Hostels",
    message:
      "Even while on the move, QID allows me to easily monitor and manage the business with precision.",
  },

  {
    src: "/assets/testimonials/Krishan.jpg",
    name: "Krishan Pandey",
    position: "Property Owner, The Unmad, Dharamkot",
    message:
      "Guests are benefited as they can pre-fill the required documents before they come-in.",
  },
]

const Testimonials = () => {
  const parentRef = useRef(null)
  const childRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  function handleArrowLeft() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    )
  }
  function handleArrowRight() {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }
  useEffect(() => {
    const childHeight = childRef.current.offsetHeight

    parentRef.current.style.height = `${childHeight}px`
  }, [])

  useEffect(() => {
    // setTimeout(() => {
    //   setCurrentIndex((prevIndex) =>
    //     prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    //   )
    // }, 7 * 1000)
  })

  return (
    <div className="text-white">
      <div className=" flex flex-col gap-3 items-center justify-center">
        <h3>Identified by qid</h3>
        <p className="text-center">
          Let’s dive into the real stories of how our service has touched the
          lives of our customers.
        </p>
      </div>
      {/* Testimonial slider part */}
      <div className="flex flex-row items-center gap-5">
        <div className="text-2xl cursor-pointer" onClick={handleArrowLeft}>
          {"<"}
        </div>
        <div
          ref={parentRef}
          className="grid xl:grid-cols-3 grid-cols-1 overflow-hidden gap-5 my-5 w-full">
          <div
            ref={childRef}
            className="p-7 border-[1px] border-gray-500 gap-5 flex flex-col rounded-lg w-full">
            <div className="w-[120px] h-[120px] rounded-lg">
              <Image
                src={testimonials[currentIndex].src}
                width={500}
                height={200}
                alt={testimonials[currentIndex].name}
                // objectFit="contain"
                className="rounded-[50%] w-full h-full object-cover"
              />
            </div>
            <p>{testimonials[currentIndex].message}</p>
            <div className="text-sm text-gray-500">
              <p>{testimonials[currentIndex].name}</p>
              <p>{testimonials[currentIndex].position}</p>
            </div>
          </div>
        </div>
        <div className="text-2xl cursor-pointer" onClick={handleArrowRight}>
          {">"}
        </div>
      </div>
    </div>
  )
}

export default Testimonials



//   return (
//     <>
//       <section
//         id="sponsors"
//         className="flex flex-col w-[100%] h-max text-center  justify-around items-center bg-black text-white  "
//       >
//         <div className=" text-center mt-4 ">
//           <h3 className="font-extrabold text-[40px]  text-center text-[white] border-[#B7002B] border-b-2 mb-10">
//             Our <span className="text-[#B7002B]">Sponsors</span>
//           </h3>
//         </div>
//         <div className="flex flex-row mb-16">
//           <Swiper
//             modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
//             autoplay={{ delay: 2000 }}
//             // freeMode={true}
//             scrollbar={{ draggable: true }}
//             parallax
//             // slidesPerView={3}
//             breakpoints={{
//               360: {
//                 slidesPerView: 2,
//               },
//               680: {
//                 slidesPerView: 3,
//               },
//               1200: {
//                 slidesPerView: 4,
//               },
//             }}
//             className="flex flex-col h-max w-[90vw] "
//           >
//             {loading ? (
//               <div
//                 // key={i}
//                 className="flex h-[80%] w-[100%] justify-between "
//               >
//                 {loader.map((item, i) => (
//                   <Skeleton
//                     key={i}
//                     className=" h-[12rem]"
//                     width={'14rem'}
//                     baseColor="#8f8c8c"
//                     highlightColor="#bbbabaff"
//                     borderRadius={'1rem'}
//                   />
//                 ))}
//               </div>
//             ) : (
//               <>
//                 {sponsers &&
//                   sponsers.map((sponser) => (
//                     <SwiperSlide
//                       key={sponser._id}
//                       className="flex items-center justify-center h-[80%] w-[80%] "
//                     >
//                       <div className="flex justify-center ml-4">
//                         <Image
//                           src={`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/${sponser.image}`}
//                           width={200}
//                           height={200}
//                           alt={sponser ? sponser.name : 'Sponsers'}
//                           className="h-[10rem] md:h-[14rem] lg:h-[16rem] w-max object-contain z-[50]"
//                           unoptimized
//                           priority
//                         />
//                       </div>
//                     </SwiperSlide>
//                   ))}
//               </>
//             )}
//           </Swiper>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Sponsors;
