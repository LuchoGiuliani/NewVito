import React, {useRef} from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  const tiltref = useRef(null)
  return (
    <Tilt ref={tiltref} className="xs:w-[280px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px]  min-h-[280px] flex justify-evenly items-center flex-col" options={{ max: 45, scale: 1, speed: 450 }}>
          <img src={icon} alt="title" className=" object-contain" />
          {/* <h3 className="text-white text-[20px] font-bold text-center">{title}</h3> */}
        </div>
      </motion.div>
    </Tilt>
  );
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Nuestro</p>
        <h2 className={styles.sectionHeadText}>Home studio</h2> */}
      </motion.div>

     

      <div className="mt-20 flex flex-col justify-center gap-10 sm:flex-row">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");
