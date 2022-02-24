import React from 'react'
import AvailableProduct from '../components/AvailableProduct'
import Header from '../components/Layout/Header/Header'
import Hero from '../components/Layout/Hero/Hero'
import Products from '../components/Products/Products'

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AvailableProduct />
      <Products />
    </div>
  )
}
