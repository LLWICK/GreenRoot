import Banner from '../components/Banner'
import CategoryList from '../components/CategoryList'
import ProductList from '../components/ProductList'
import Slider from '../components/Slider'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
       <Slider/>
       <CategoryList/>
       <ProductList/>
       <Banner/>
       <Footer /> 
    </div>
  )
}

export default Home