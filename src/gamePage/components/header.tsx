const Header = () => {
  return (
    <div className="flex mx-auto lg:w-[700px] md:w-[600px] sm:w-[500px] min-w-[200px] h-32 md:h-36 justify-between p-4 border-2  font-barlow rounded-lg border-headerOutline  bg-transparent   ">
      <div className=" flex flex-col font-semibold  text-3xl leading-6 md:leading-7 text-white md:text-4xl tracking-tight justify-center">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <div className="bg-white tracking-wider md:px-10 px-6  py-1 rounded-md flex flex-col  items-center justify-center">
        <span className="text-scoreText text-[14px]">SCORE</span>
        <span className="text-6xl font-bold text-darkText">13</span>
      </div>
    </div>
  );
};

export default Header;
