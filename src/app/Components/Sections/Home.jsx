import Head from "next/head";
import { MdArrowOutward } from "react-icons/md";
import { RxQuestionMarkCircled } from "react-icons/rx";

export default function Home() {
  return (
    <div className="flex flex-col px-3 items-center justify-center min-h-screen bg-gray-50">
      <Head>
        <title>GreenClover</title>
      </Head>
      <div className="text-center">
        <div className="bg-[#F0FFD1] py-1.5 flex justify-center w-fit mx-auto px-4 mb-8 rounded-full">
          <p className="text-[#1D1F13] font-medium   text-sm ">
            55,000+ trusted Businesses
          </p>
        </div>
        <h1 className="max-w-5xl italic text-4xl lg:text-6xl font-semibold mb-4">
          Put More Cash Back in Your Business Pocket.
        </h1>
        <p className="text-[#1D1F13] mb-6 max-w-xl mx-auto">
          Maximize savings with GreenClover, the AI-powered business card that
          optimizes every purchase, giving you unmatched value effortlessly.
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="flex items-center gap-3 bg-[#F5F7F0] text-[#1D1F13] px-5 py-3 rounded-md">
            <RxQuestionMarkCircled />
            More Info
          </button>
          <button className="bg-gradient-to-r from-gray-600 to-black flex items-center gap-3 text-white px-5 py-3 rounded-md">
            <MdArrowOutward />
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
