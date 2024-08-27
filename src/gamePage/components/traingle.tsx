import { useNavigate } from "react-router-dom";
import { Paper, Rock, Scissors } from "./shapes";


const Triangle = () => {
  const navigate = useNavigate()
  
  function handleNavigate(userChoice:number) {
    navigate('/ongoingGame', {
      state:{userChoice:userChoice}
    })
  }

  return (
    <div className="flex bg-transparent pt-8 mx-auto w-[300px] h:[300px] md:w-[450px] md:h-[400px] relative mt-20  items-center justify-center">
      <div className="flex ">
        <img
          src="bg-triangle.svg "
          className=" relative object-contain h-[220px] w-[250px] md:h-[280px] md:w-[300px]"
          alt="triangle"
        />
      </div>
      <button
        onClick={() => handleNavigate(1)}
        className="absolute left-0 top-0 "
      >
        <Paper />
      </button>
      <button onClick={() => handleNavigate(2)} className="absolute  bottom-0">
        <Rock />
      </button>
      <button
        onClick={() => handleNavigate(0)}
        className="absolute top-0 right-0"
      >
        <Scissors />
      </button>
    </div>
  );
};

export default Triangle;
