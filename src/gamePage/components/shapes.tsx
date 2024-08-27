const Scissors = () => {
  return (
    <div className="flex rounded-full bg-scissorGradient h-[120px] w-[120px] md:h-[180px] md:w-[180px] items-center justify-center  drop-shadow-scissor ">
      <div className="flex items-center justify-center rounded-full mx-auto shadow-inner h-3/4  bg-white w-3/4">
        <img
          src="./icon-scissors.svg"
          alt="siccor"
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

export { Paper, Scissors, Rock };
