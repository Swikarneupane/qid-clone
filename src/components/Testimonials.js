import Image from "next/image"
import React from "react"
import { Navigation, A11y, Autoplay } from "swiper/modules"

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/autoplay"

const testimonialList = [
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
  return (
    <div className="text-white max-w-[1150px] mt-12">
      <div className=" flex flex-col gap-3 items-center justify-center">
        <h3 className="font-bold text-[65px]">
          <span className="bg-gradient-to-r from-[#FFB76B]  via-[#FF7C00] to-[#FF7F04] inline-block text-transparent bg-clip-text ">
            Identified
          </span>{" "}
          by <span className="italic">qid</span>
        </h3>
        <p className="text-center font-semibold text-[23px]">
          Let’s dive into the real stories of how our service has touched the
          lives of our customers.
        </p>
      </div>
      <div className="mb-16 w-full">
        <Swiper
          modules={[Navigation, A11y, Autoplay]}
          autoplay={{ delay: 4000 }}
          // navigation={true}
          loop={true}
          breakpoints={{
            360: {
              slidesPerView: 1,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
          className="flex flex-row gap-5 h-full cursor-grab">
          {testimonialList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex -ml-2 w-full my-5 text-white bg-[#050505] h-full">
                <div className="p-7 border-[1px] border-[#1D1D1D] flex flex-col rounded-lg gap-5">
                  <div className="w-[120px] h-[120px] rounded-lg">
                    <Image
                      src={item.src}
                      width={500}
                      height={200}
                      alt={item.name}
                      className="rounded-[50%] w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-semibold text-[23px]">{item.message}</p>
                  <div className="text-sm text-[#707070]">
                    <p className="font-semibold text-[18px] mb-2">
                      {item.name}
                    </p>
                    <p className="text-[15px]">{item.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
