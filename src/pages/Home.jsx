import React from 'react'
import MenuMakanan from '../components/MenuMakanan'
import MenuMinuman from '../components/MenuMinuman'
import MenuAppetizer from '../components/MenuAppetizer'
import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <MenuAppetizer/>
      <MenuMakanan/>
      <MenuMinuman/>

    </div>
  )
}

export default Home
