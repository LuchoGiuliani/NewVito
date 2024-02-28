import { useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";

const Feedbacks = () => {

  const [counter,setCounter] = useState()

  useEffect(()=> {
    let valueDisplays = document.querySelectorAll(".num")
    let interval = 5000;

    valueDisplays.forEach(valueDisplay => {
      let startValue= 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"))
      let duration = Math.floor(interval / endValue) ; 
      let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
          clearInterval(counter)
        }
      }, duration)
    })
  },[])



  return (
    <div className="flex flex-wrap sm:gap-4 justify-center items-center flex-col sm:flex-row ">  
      <div className="w-[280px]  max-w-[12em] max-h-[12em]">
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[1em]  min-h-[280px] flex justify-evenly items-center flex-col p-2">
            <h2 className="text-center">Total Productions Last Year</h2> 
            <div className="flex items-center ">
            <h1 className="text-4xl text-center pr-6 ">+</h1>
            <h1 className="text-bold w-10 text-4xl num" data-val="100"></h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[280px] z-10">
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[1em]  min-h-[280px] flex justify-evenly items-center flex-col">
            <h2 className="text-center">
              Total Audio <br /> Streams
            </h2>
            <div className="flex bg-tertiary ">
              <h1 className="text-4xl pr-6 ">+</h1>
              <h1 className="text-bold text-4xl num" data-val="6.8" > </h1>
              <h1 className="text-4xl">M</h1>

            </div>
          </div>
        </div>
      </div>
      <div className="w-[280px]  max-w-[220px] max-h-[220px]  relative bottom-4 ">
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[1em]  min-h-[280px] flex justify-evenly items-center flex-col">
            <h2 className="text-center">Total Youtube Audio Streams</h2>
            <div className="flex">
              <h1 className="text-4xl pr-6 ">+</h1>
              <h1 className="text-bold text-4xl num" data-val="4.2"></h1>
              <h1 className="text-4xl">M</h1>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");

// import { useState, useEffect } from "react";
// import { SectionWrapper } from "../hoc";

// const NumberCounter = ({ dataVal }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount((prevCount) => Math.min(prevCount + 1, dataVal));
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, [dataVal]);

//   return (
//     <div className="flex items-center text-4xl text-bold">
//       <h1 className="pr-6">+{count}</h1>
//       <h1 className="text-4xl">{dataVal}M</h1>
//       <span aria-live="polite">{count}/{dataVal}</span> </div>
//   );
// };

// const Feedbacks = () => {
//   const feedbackData = [
//     { title: "Total Productions Last Year", dataVal: 100 },
//     { title: "Total Audio Streams", dataVal: 6.8 },
//     { title: "Total Youtube Audio Streams", dataVal: 4.2 },
//   ];

//   return (
//     <div className="flex flex-wrap gap-4 justify-center items-center flex-col sm:flex-row">
//       {feedbackData.map(({ title, dataVal }) => (
//         <div key={title} className="xs:w-[280px] w-full">
//           <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
//             <div className="bg-tertiary rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col p-2">
//               <h2 className="text-center">{title}</h2>
//               <NumberCounter dataVal={dataVal} />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks, "");
