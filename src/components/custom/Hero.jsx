import React from 'react'
import { Button } from '../ui/button'

export default function Hero() {
  return (
    <div className='flex items-center mx-56 gap-9  flex-col'>
        <h1 className='font-extrabold text-[50px] text-center mt-16'> <span className='text-[#f56551]'>Discover Your trips with AI:</span> Powerful Personalized trip planner</h1>

        <p className='text-xl text-gray-500 text-center'> Powerful Personalized trip planner making your trips hazle free and enjoying with no worries and with planned budget . </p>

        <Button>Get Started, Its Free</Button>
    </div>
  )
}
