import React from 'react'
import Article from '../components/Article'
import AvailableProduct from '../components/AvailableProduct'
import Featured from '../components/Featured'
import Hero from '../components/Layout/Hero/Hero'
import News from '../components/News'
import Products from '../components/Products/Products'
import Search from '../components/Search'
import Services from '../components/Services'

export default function Home() {
  return (
    <div>
      <Hero />
      <AvailableProduct />
      <Products />
      <Article />
      <Services />
      <News />
      <Featured />
      <Search />
    </div>
  )
}
