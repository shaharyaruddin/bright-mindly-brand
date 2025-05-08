import Image from 'next/image'
import React from 'react'
import { HiBolt } from 'react-icons/hi2'

const steps = [
  {
    number: '01',
    title: 'Simplified Onboarding',
    points: [
      'Quick and easy setup for immediate use.',
      'Step-by-step guidance for smooth integration.',
      'No technical expertise required to get started.',
    ],
  },
  {
    number: '02',
    title: 'AI-Powered Efficiency',
    points: [
      'Automatic savings on every transaction.',
      'Real-time analytics to track spending.',
      'Seamless adjustments to maximize savings.',
    ],
  },
  {
    number: '03',
    title: ' Transparent Communication',
    points: [
      'Regular updates on progress and changes.',
      'Clear terms and no hidden fees.',
      'Dedicated support available at all stages.',
    ],
  },
  {
    number: '04',
    title: 'Flexible Solutions',
    points: [
      'Customizable plans based on your needs.',
      'Monthly adjustments to suit business changes.',
      'Freedom to upgrade or adjust anytime.',
    ],
  },
]

const OurApproach = () => {
  return (
    <div id='changelog' className="bg-gradient-to-r relative from-white via-[#FAFFF0] to-[#F3FFDB]   py-16 px-4 lg:px-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-left">
          <p className="flex text-green-600 font-medium text-sm gap-2 mb-2">
            <HiBolt className="text-lg" />
            PROCESS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Approach
          </h2>
          <p className="text-gray-700 max-w-2xl mb-12">
            Our streamlined process ensures quick, efficient results, from setup to completion. Enjoy clear steps and full transparency at every stage.
          </p>

{/* FOR RIGHT SIDE OF BG */}

 <Image
            src="/assets/images/bg.svg"
            alt="bg"
            width={110}
            height={110}
            className="absolute top-32 right-28 opacity-40"
          />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-left shadow-sm border border-gray-100"
            >
              <span className="text-gray-800 bg-[#F7F8F5] p-1.5 text-sm rounded-full font-semibold ">{step.number}</span>
              <h3 className=" text-2xl font-medium mt-6 mb-4 text-gray-900">{step.title}</h3>
              <ul className="space-y-2">
                {step.points.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="flex items-center justify-center text-xl text-gray-900 mr-2">•</span>
                    <span className="flex items-center justify-center text-[#1D1F13] mt-1">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurApproach