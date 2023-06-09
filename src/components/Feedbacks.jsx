import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

// const FeedbackCard = ({index, testimonial, name, designation, company, image}) => (
//   <motion.div className='bg-black-200 p-10 rounded-3x1 xs:w-[320px] w-full'
//   variants={fadeIn("" , "spring" , index * 0.5, 0.75 )}>
//     <p className='text-white font-black text-[48px]'>"</p>

//     <div className='mt-1'>{testimonial}
//     <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

//     <div className='mt-7 flex justify-between items-center gap-1'>
//       <div className='flex-1 flex flex-col '>
//         <p className='text-white font-medium text-[16px]'>
//           <span className='blue-text-gradient'>@</span>{name}
//         </p>
//         <p className='mt-1 text-secondary text-[12px]'>{designation} of { company}</p>

//       </div>
//       <img src={image} alt={`feedback-by-${name}`} className= "w-10 h-10 rounded-full object-cover" />

//       </div>
//     </div>
//   </motion.div>
// )

const Feedbacks = () => {
  return (
    //  <div className='mt-12 bg-black-100 rounded-[20px]'>
    //   <div className={`${styles.padding} bg-tertiary rounded-2x1 min-h-[300px]`}>
    //     <motion.div variants={textVariant()}>
    //       <p className={`${styles.sectionSubText}`}>What others say</p>
    //       <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
    //     </motion.div>

    //   </div>

    //   <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
    //     {testimonials.map((testimonial, index)=>(
    //      <FeedbackCard
    //      key={testimonial.name}
    //      index={index}
    //      {...testimonial}
    //      />
    //     ))}

    //   </div>

    //  </div>
    <div className="flex flex-wrap gap-4 justify-center items-center flex-col sm:flex-row ">
      
      <div className="xs:w-[280px] w-full">
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[20px]  min-h-[280px] flex justify-evenly items-center flex-col p-2">
            <h2 className="text-center">Total Productions Last Year</h2><h1 className="text-bold text-[48px]">+ 100</h1>
          </div>
        </div>
      </div>
      <div className="xs:w-[280px] w-full">
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[20px]  min-h-[280px] flex justify-evenly items-center flex-col">
            <h2 className="text-center">
              Total Audio <br /> Streams
            </h2>
            <div className="flex bg-tertiary ">
              <h1 className="text-bold text-[48px]" >+6.8M</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="xs:w-[280px] w-full">
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[20px]  min-h-[280px] flex justify-evenly items-center flex-col">
            <h2 className="text-center">Total Youtube Audio Streams</h2>
            <div className="flex">
              <h1 className="text-bold text-[48px]">+4.2M</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
