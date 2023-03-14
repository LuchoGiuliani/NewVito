import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import {styles} from '../style'
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant, zoomIn, fadeIn } from "../utils/motion"





const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
  contentStyle={{background:'#1d1836', color:'#fff'}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
  date={experience.date}
  iconStyle={{background: experience.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img src={experience.icon} 
      alt={experience.company_name}
      className= "w-[60%] h-[60%] object-contain" />
    </div>
  }>
    <div>
      <h3 className="text.white text-[24px] font-bold">
      {experience.date}
      </h3>
      <p style={{margin:0}} className="text-secondary text-[16px] font-semibold ">{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point,index)=> (
        <li key={`experience-point-${index}`}
        className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}

        </li>
      ))}
    </ul>
    
  </VerticalTimelineElement>
)


const Experience = () => {
  return (
    <>
    <motion.div 
    variants={textVariant()}>
        <p className={styles.sectionSubText}>Videos</p>
        <h2 className={styles.sectionHeadText}>Youtube</h2>

    </motion.div >
        <div 
         className="mt-12">
        <iframe
        width="100%"
        height="600px"
        src="https://www.youtube.com/embed/videoseries?list=PL6T13FK9c-7OlcKl96DNgbyXH25Yt9vQe"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
        </div>

    {/* <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience,index)=> (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>

    </div> */}
    
    </>
  )
}

export default SectionWrapper(Experience,"work")