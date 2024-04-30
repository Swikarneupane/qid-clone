import React from "react"

const Cancellation = () => {
  return (
    <div className=" md:pt-40 pt-32 px-5 pb-5 max-w-[1150px] mx-auto">
      <div className="flex flex-col text-white text-[17px] gap-9 font-semibold">
        <div>
          <h1 className="font-bold md:text-[60px] sm:text-[50px] text-[45px] text-[#BDBDBD]">
            Cancellation and Refund Policy
          </h1>
        </div>
        <div className="bg-white text-black rounded-3xl p-6 flex flex-col gap-5">
          <h3 className="uppercase text-[26px] font-bold">
            CANCELLATION AND REFUND POLICY FOR SUBSCRIPTION-BASED SERVICES
          </h3>
          <p>
            Thank you for choosing our application. This Cancellation and Refund
            Policy outlines the terms and conditions associated with
            cancellations and refunds for our subscription-based services.
          </p>
        </div>
        <div className="bg-white text-black rounded-3xl p-6 flex flex-col gap-5">
          <h3 className="uppercase  text-[26px] font-bold">
            SUBSCRIPTION SERVICES
          </h3>
          <p>
            Our application offers subscription-based services to businesses.
            These services provide access to premium features and
            functionalities, with an increased number of scans and accounts
            available.
          </p>
        </div>
        <div className="bg-white text-black rounded-3xl p-6 flex flex-col gap-5">
          <h3 className="uppercase  text-[26px] font-bold">
            NON-SUBSCRIPTION SERVICES
          </h3>
          <p>
            Certain parts of our application are available without a
            subscription. Users can access these features without any payment.
            These features include a certain number of scans per month and other
            basic functionalities.
          </p>
        </div>
        <div className="bg-white text-black rounded-3xl p-6 flex flex-col gap-5">
          <h3 className="uppercase  text-[26px] font-bold">
            REFUND POLICY FOR BUSINESSES
          </h3>
          <ul className="list-disc px-5">
            <li>
              Subscriptions are provided to businesses based on agreed-upon
              terms and conditions. Refund policies for businesses may vary
              according to the specific deal and agreement between the business
              and our application.
            </li>
            <li>
              In general, once a subscription fee is paid by a business, no
              refunds will be provided. Any exceptions to this policy will be
              determined based on the terms negotiated in the business
              agreement.
            </li>
          </ul>
        </div>
        <div className="bg-white text-black rounded-3xl p-6 flex flex-col gap-5">
          <h3 className="uppercase  text-[26px] font-bold">
            CANCELLATION PROCEDURE
          </h3>
          <ul className="list-disc px-5">
            <li>
              Cancellation of subscription services is not facilitated through
              an automated platform within the application.
            </li>
            <li>
              Businesses wishing to cancel their subscription must submit a
              cancellation request to our company through support@oneqid.com
            </li>
            <li>
              Cancellation requests will be processed per the terms of the
              business agreement.
            </li>
          </ul>
        </div>
        <div className="bg-white text-black rounded-3xl p-6 flex flex-col gap-5">
          <h3 className="uppercase  text-[26px] font-bold">
            CANCELLATION AND REFUND FOR SPECIAL CASES
          </h3>
          <p>
            In exceptional cases, where there are extenuating circumstances,
            businesses may contact our customer support to discuss their
            situation. Our team will review each case individually, and
            decisions will be made at the discretion of the company.
          </p>
        </div>
        <div className="bg-white text-black rounded-3xl p-6 flex flex-col gap-5">
          <h3 className="uppercase  text-[26px] font-bold">POLICY UPDATES</h3>
          <p>
            This policy is subject to change, and any modifications will be
            communicated to users through the application.
          </p>
          <p>
            By using our subscription-based services, businesses and users agree
            to abide by the terms and conditions outlined in this Cancellation
            and Refund Policy. If you have any questions or concerns, please
            contact our customer support team at{" "}
            <a
              href="mailto:support@oneqid.com"
              className="text-red-400 hover:text-gray-700">
              support@oneqid.com.
            </a>
          </p>
          <p>
            For any questions or concerns regarding our Cancellation and Refund
            Policy, please contact us at:
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:support@oneqid.com"
              className="text-red-400 hover:text-gray-700">
              support@oneqid.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+919606406404"
              className="text-red-400 hover:text-gray-700">
              +91 9606406404
            </a>
          </p>
          <p>
            This policy is effective from 21-12-2023 and is subject to change
            without prior notice. Please review our policy periodically for any
            updates.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Cancellation
