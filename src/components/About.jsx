import React, {useRef} from "react";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, icon }) => {
  const tiltref = useRef(null)
  return (
    <div ref={tiltref} className="xs:w-[280px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px]  min-h-[280px] flex justify-evenly items-center flex-col" options={{ max: 45, scale: 1, speed: 450 }}>
          <img src={icon} alt="title" className=" object-contain rounded-[18px]" />
        </div>
      </motion.div>
    </div>
  );
}
const About = () => {
  return (
    <>
      <div className="mt-20 flex flex-col justify-center gap-10 sm:flex-row">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");
