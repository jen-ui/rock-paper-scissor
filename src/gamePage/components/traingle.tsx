import { Shape } from "./shapes";


const Triangle = () => {
  

 

  return (
    <div className="flex bg-transparent pt-8 mx-auto w-[300px] h:[300px] md:w-[450px] md:h-[400px] relative mt-20  items-center justify-center">
      <div className="flex ">
        <img
          src="bg-triangle.svg "
          className=" relative object-contain h-[220px] w-[250px] md:h-[280px] md:w-[300px]"
          alt="triangle"
        />
      </div>
      <div
       
        className="absolute left-0 top-0 "
      >
        <Shape index={0} />
      </div>
      <div  className="absolute  bottom-0">
        <Shape index={1} />
      </div>
      <div
       
        className="absolute top-0 right-0"
      >
        <Shape index={2} />
      </div>
    </div>
  );
};

export default Triangle;
