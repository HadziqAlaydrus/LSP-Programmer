import React from 'react'
import MenuMakanan from '../components/MenuMakanan'
import MenuMinuman from '../components/MenuMinuman'
import MenuAppetizer from '../components/MenuAppetizer'

const Home = () => {
  return (
    <div>
      <div className='text-center text-2xl mt-10 font-bold text-gray-800'>
        <h1>Selamat Datang di Dapur Bunda Bahagia</h1>
      </div>
      <MenuAppetizer/>
      <MenuMakanan/>
      <MenuMinuman/>

    </div>
  )
}

export default Home
