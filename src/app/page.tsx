import React from 'react'
import Header from '@/app/Components/Header/Header'
import Home from '@/app/Components/Sections/Home'
import WhyChooseUs from '@/app/Components/Sections/WhyChooseUs'
import WhyWeShine from '@/app/Components/Sections/WhyWeShine'
import OurApproach from '@/app/Components/Sections/OurApproach'
import Product from '@/app/Components/Sections/Product'
import Pricing from '@/app/Components/Sections/Pricing'
import Footer from '@/app/Components/Footer/Footer'
import Business from '@/app/Components/Sections/Business'

const page = () => {
  return (
    <>
    
    <Header/>
    <Home />
    <WhyChooseUs/>
    <WhyWeShine />
    <OurApproach />
    <Product />
    <Pricing />


    <Business />
    <Footer />
    
    
    </>
  )
}

export default page