import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Youtube,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect} from "react";
import YoutubeLatin from "./components/YoutubeLatin";


const App = () => {

  const main = useRef()
 useEffect(()=> {
 const  youtube = document.querySelectorAll(".youtube")
 ScrollTrigger.create({
  trigger: youtube,
  start: "680",
  end: "bottom bottom",

  onEnter: () => {
    gsap.to(youtube, {
      backgroundColor: "#000",
      duration: 1,
    });
  },
  onLeaveBack: () => {
    gsap.to(youtube, {
      backgroundColor: "transparent",
      duration: 1,
    });
  },
});
 },[])
 useEffect(()=> {
  const  youtubeLatin = document.querySelectorAll(".youtubeLatin")
  ScrollTrigger.create({
   trigger: youtubeLatin,
   start: "top 300",
   end: "bottom bottom",
 
   onEnter: () => {
     gsap.to(youtubeLatin, {
       backgroundColor: "#E0762D",
       duration: 1,
     });
   },
   onLeaveBack: () => {
     gsap.to(youtubeLatin, {
       backgroundColor: "transparent",
       duration: 1,
     });
   },
 });
  },[])
 

  return (
   
      <BrowserRouter>
        <div key={main} className="relative z-0 bg-primary">
          <div className=" bg-cover bg-no-repeat bg-center ">
            <Navbar />
            <Hero />
          </div>
          <div className="youtube h-screen p-6">
          <Youtube className="youtube" />
          </div>
          <div className="youtubeLatin h-screen p-6">
          <YoutubeLatin className="youtube" />
          </div>
          <About />
          <StarsCanvas />
          <Works />
          {/* <Feedbacks /> */}
          <Contact />
        </div>
      </BrowserRouter>
    
  );
};

export default App;
