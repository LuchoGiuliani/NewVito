import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";

import { SectionWrapper } from "../hoc";
import { textVariant, zoomIn, fadeIn } from "../utils/motion";

const Youtube = () => {
  return (
    <div className="h-screen">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Videos</p>
        <h2 className={styles.sectionHeadText}>BoomBap Trap Hip Hop.</h2>
      </motion.div>
      <div className="flex items-center justify-center mt-10  m-auto shadow-card w-fit sm:w-[28em] h-[20em]   ">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/videoseries?si=qpLToqxJ5ZfNdOrW&amp;list=PL6T13FK9c-7P20sijvMpgE9jeWSSt3F_4"
          title="YouTube video player"
         
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          
        ></iframe>
      </div>
    </div>
  );
};

export default SectionWrapper(Youtube, "work");
