const shapes = [
  {
    
    icon: "./icon-scissors.svg",
    alt: "Scissors",
  },
  {
  
    icon: "./icon-paper.svg",
    alt: "paper",
  },
  {
   
    icon: "./icon-rock.svg",
    alt: "rock",
  },
];

const Shape = ({ index }: { index: number }) => {
  let outerClass="flex rounded-full  h-[120px] w-[120px] md:h-[180px] md:w-[180px] items-center justify-center  "
  if (index === 0) {
    outerClass += "bg-scissorGradient drop-shadow-scissor";
  }
  else if (index === 1) {
    outerClass += "bg-paperGradient drop-shadow-paper";
  }
  else if (index === 2){
    outerClass+="bg-rockGradient drop-shadow-rock"
  }
  console.log(index,shapes[index].icon)
  return (
    <div className={outerClass}>
      <div className="flex items-center justify-center rounded-full mx-auto shadow-inner h-3/4  bg-white w-3/4">
        <img
          src={shapes[index].icon}
          alt={shapes[index].alt}
          className="object-contain h-16"
        />
      </div>
    </div>
  );
};
const Paper = () => {
  return (
    <div className="flex rounded-full bg-paperGradient h-[120px] w-[120px] md:h-[180px] md:w-[180px] items-center justify-center  drop-shadow-paper ">
      <div className="flex items-center justify-center rounded-full mx-auto shadow-inner h-3/4  bg-white w-3/4">
        <img
          src="./icon-paper.svg"
          alt="paper"
          className="object-contain h-14"
        />
      </div>
    </div>
  );
};
const Rock = () => {
  return (
    <div className="flex rounded-full bg-rockGradient h-[120px] w-[120px] md:h-[180px] md:w-[180px] items-center justify-center  drop-shadow-rock ">
      <div className="flex items-center justify-center rounded-full mx-auto shadow-inner h-3/4  bg-white w-3/4">
        <img src="./icon-rock.svg" alt="rock" className="object-contain h-14" />
      </div>
    </div>
  );
};



export { Paper,  Rock, Shape };
