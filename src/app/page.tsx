import React from 'react'
import Header from '@/app/Components/Header/Header'
import Home from '@/app/Components/Sections/Home'
import WhyChooseUs from '@/app/Components/Sections/WhyChooseUs'
import WhyWeShine from '@/app/Components/Sections/WhyWeShine'
import OurApproach from '@/app/Components/Sections/OurApproach'
import Product from '@/app/Components/Sections/Product'
const page = () => {
  return (
    <>
    
    <Header/>
    <Home />
    <WhyChooseUs/>
    <WhyWeShine />
    <OurApproach />
    <Product />
    
    
    </>
  )
}

export default page