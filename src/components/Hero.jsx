import React from 'react'
import {motion } from 'framer-motion'
import {styles} from '../style'
import { ComputersCanvas } from './canvas'
import Feedbacks from './Feedbacks'

const Hero = () => {
  return (
   <section className="flex w-full sm:items-center justify-center sm:h-screen mx-auto sm:mt-16 flex-col sm:flex-row p-6">
    <div className="flex justify-center gap-5 p-2 mt-12 sm:mt-16">
      <div>
        <h1 className="text-white text-4xl sm:text-6xl font-bold"  >
         Vito Records 
        </h1>
        <p className="mt-2 text-xl text-white-100"> <span className='text-[#915eff]'>Music</span>  Producer  </p>  
      </div>
    </div>
      {/* <ComputersCanvas />  */}
      <Feedbacks />
   </section>
  )
}

export default Hero