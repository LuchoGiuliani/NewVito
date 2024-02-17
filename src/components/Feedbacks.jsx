import { SectionWrapper } from "../hoc";

const Feedbacks = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center flex-col sm:flex-row ">  
      <div className="xs:w-[280px] w-full">
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[20px]  min-h-[280px] flex justify-evenly items-center flex-col p-2">
            <h2 className="text-center">Total Productions Last Year</h2><h1 className="text-bold text-[48px]">+ 100</h1>
          </div>
        </div>
      </div>
      <div className="xs:w-[280px] w-full">
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[20px]  min-h-[280px] flex justify-evenly items-center flex-col">
            <h2 className="text-center">
              Total Audio <br /> Streams
            </h2>
            <div className="flex bg-tertiary ">
              <h1 className="text-bold text-[48px]" >+6.8M</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="xs:w-[280px] w-full">
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[20px]  min-h-[280px] flex justify-evenly items-center flex-col">
            <h2 className="text-center">Total Youtube Audio Streams</h2>
            <div className="flex">
              <h1 className="text-bold text-[48px]">+4.2M</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
