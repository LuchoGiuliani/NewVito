import React from 'react'
import {motion } from 'framer-motion'
import {styles} from '../style'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
   <section className='relative w-full h-screen mx-auto mt-12'>
    <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
      <div className='flex flex-col justify-center items-center mt-5'> 
      <div className='w-1 sm:h-80 h-40 violet-gradient ' />
      </div>
      <div>
        <h1 className={`${styles.heroHeadText} text-white `}>
         Vito Records 
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}> <span className='text-[#915eff]'>Music</span>  Producer  </p>  
      </div>
    </div>
      <ComputersCanvas /> 
   </section>
  )
}

export default Hero