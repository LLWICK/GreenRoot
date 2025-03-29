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
    <div>
      <NavBar/>
      <Header />
       <Slider/>
       <CategoryList/>
       <ProductList/>
       <Banner/>
       <Footer/>
    </div>
  )
}

export default Home