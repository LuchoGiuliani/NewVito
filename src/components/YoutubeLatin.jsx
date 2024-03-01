import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";

import { SectionWrapper } from "../hoc";
import { textVariant, zoomIn, fadeIn } from "../utils/motion";

const Youtube = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Videos</p>
        <h2 className={styles.sectionHeadText}>Rkt Cumbia Latin Reggaeton</h2>
        
      </motion.div>
      <div className="flex items-center justify-center mt-10 w-[200px] sm:w-fit m-auto shadow-card-latin ">
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/videoseries?si=jNeTQK8G20_rWQlw&amp;list=PL6T13FK9c-7PTOTESbRHUR-jsMfWbg1vA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default SectionWrapper(Youtube, "work");
