import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";

import { SectionWrapper } from "../hoc";
import { textVariant, zoomIn, fadeIn } from "../utils/motion";

const Youtube = () => {
  return (
    <div className="">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Videos</p>
        <h2 className={styles.sectionHeadText}>BoomBap Trap Hip Hop.</h2>
      </motion.div>
      <div className="flex items-center justify-center mt-10 w-[200px] m-auto shadow-card sm:w-fit   ">
        <iframe
          width="660"
          height="415"
          src="https://www.youtube.com/embed/videoseries?si=qpLToqxJ5ZfNdOrW&amp;list=PL6T13FK9c-7P20sijvMpgE9jeWSSt3F_4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default SectionWrapper(Youtube, "work");
