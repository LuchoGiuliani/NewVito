import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Works = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>playlist</p>
        <h2 className={styles.sectionHeadText}>Spotify.</h2>
        <iframe
          className="rounded-xl"
          src="https://open.spotify.com/embed/playlist/1sjw7ma7rnYcYSQiG83oee?utm_source=generator&theme=0"
          width="100%"
          height="352"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Works, "contact");
