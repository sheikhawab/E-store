import FeaturedProducts from '@/Components/Home/FeaturedProducts'
import HeroSection from '@/Components/Home/HeroSection'
import RecentlyAdded from '@/Components/Home/RecentlyAdded'
import React from 'react'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <RecentlyAdded/>
    <FeaturedProducts/>
    </>
  )
}

export default Home
