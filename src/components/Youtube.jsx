
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
        <h2 className={styles.sectionHeadText}>Youtube</h2>
      </motion.div>
      <div className="mt-12">
        <iframe
          width="100%"
          height="600px"
          src="https://www.youtube.com/embed/videoseries?list=PL6T13FK9c-7OlcKl96DNgbyXH25Yt9vQe"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default SectionWrapper(Youtube, "work");
