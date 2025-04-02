import Banner from '../components/Banner'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'
import React from 'react'
import Header from '../components/Header'
import NavBar from '@/admin/pages/home/home_components/NavBar'

import Footer from '@/admin/pages/home/home_components/Footer'

const Home = () => {
  return (
    <div >
      <NavBar/>
      <Header />
    <div className='p-5 md:p-10 px-16'>
      
       <Slider/>
       <CategoryList/>
       <ProductList/>
       <Banner/>
       
    </div>
    <Footer/>
    </div>
  )
}

export default Home