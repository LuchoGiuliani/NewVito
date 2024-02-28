import { motion } from "framer-motion";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect} from "react";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const workContainer = document.querySelectorAll(".works_container");

 
  const main = useRef();

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const sections = self.selector(".works_page");
      let paneles = gsap.utils.toArray(".works_page");
      let container = document.querySelector(".works_container");
      console.log(paneles);
      console.log(sections);
      console.log(container);
      gsap.to(paneles, {
        xPercent: -100 * (paneles.length - 1),
        ease: "none",    
        scrollTrigger: {
          trigger: container,
        
          pin: true,
          pinSpacer:false,
          scrub: 1,
          
          end: "+=2500",
        },
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);
  useEffect(() => {
    let paneles = gsap.utils.toArray(".works_page");

    gsap.to(paneles[1], {

      backgroundColor:"#477"
    })
  }, [])

  useEffect(() => {
    let paneles = gsap.utils.toArray(".works_page");
    paneles.forEach((pan) => {
      ScrollTrigger.create({
        trigger:pan,
        start:"bottom middle",
        end:"bottom bottom",
        onEnter: () => {
          gsap.to(pan, {
            backgroundColor: "#E0762D",
            duration: 1,
          })},
         onLeaveBack: () => {
          gsap.to(pan, {
            backgroundColor: "transparent",
            duration: 1,
          });
        },
        })
      })
    },[])
   

  return (
    <div ref={main} className="works_container">
      <div className="h-screen works_page">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>playlist</p>
          <h2 className={styles.sectionHeadText}>Spotify.</h2>
          <iframe
            className="rounded-2xl sm:w-[660px] flex items-center justify-center m-auto "
            src="https://open.spotify.com/embed/playlist/1sjw7ma7rnYcYSQiG83oee?utm_source=generator&theme=0"
            width="100%"
            height="452"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
      <div className="h-screen works_page ">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>playlist</p>
          <h2 className={styles.sectionHeadText}>Spotify.</h2>
          <iframe
            className="rounded-2xl sm:w-[660px] flex items-center justify-center m-auto mt-10"
            src="https://open.spotify.com/embed/playlist/1sjw7ma7rnYcYSQiG83oee?utm_source=generator&theme=0"
            width="100%"
            height="452"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "contact");
