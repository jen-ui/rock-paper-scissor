import { useState} from "react";
import { Shape } from "./shapes";
import { ToggleProps } from "../interfacce";
// import { useLocation, useNavigate } from "react-router-dom";

function ToggleComponent({ setScore,score }: ToggleProps) {
  const [winStatus, setWinStatus] = useState("");
  const [gameover, setGameover] = useState<boolean>(false);
  const [userChoice, setUserChoice] = useState(0);
  const [intervalId, setIntervalId] = useState<number>();
  const [gameon, setGameOn] = useState<boolean>(false);


  // const navigate = useNavigate();

  const [computerChoice, setComputerChoice] = useState(0);

  const choices = [
    {
      value: 1,
      component: <Shape index={0} />,
      win: 2,
      loseTo: 3,
    },
    {
      value: 2,
      component: <Shape index={1} />,
      win: 3,
      loseTo: 1,
    },
    {
      value: 3,
      component: <Shape index={2} />,
      win: 1,
      loseTo: 2,
    },
  ];

  const displayItems = [
    {
      value: 1,
      heading: "YOU PICKED",
      component: choices[userChoice].component,
    },
    {
      value: 2,
      heading: "THE HOUSE PICKED",
      component: choices[computerChoice].component,
    },
  ];
  let index: number = 1;

  // Function to continuously toggle between the choices
  const toggleChoices = () => {
    setGameOn(true);
    setGameover(false);
    let computerIndex: number = 0;
    const interID = setInterval(() => {
      
      setUserChoice(index);
      setComputerChoice(computerIndex);
      index = (index + 1) % choices.length;
      computerIndex = Math.floor(Math.random() * choices.length);
    }, 200); // Change every 200ms for a quick toggle effect
    setIntervalId(interID);
  };

  // Stop the toggle after 3 seconds and choose a random final choice
  const stopSpin = (value: number) => {
    console.log("inside stop spin2");
    if (value == 2) return;


    clearInterval(intervalId);
    const randomChoice1 = Math.floor(Math.random() * choices.length);
    const randomChoice2 = index;

    setComputerChoice(randomChoice1);
    setUserChoice(randomChoice2);
    

    pickWinner(randomChoice1, randomChoice2);
    console.log("inside stop spin")
  };

  function pickWinner(randomChoice1: number, randomChoice2: number) {
    if (choices[randomChoice1].value === choices[randomChoice2].win) {
      console.log(score)
      const tempScore = score
      setScore(tempScore+1);
      setWinStatus("YOU WIN");
    } else if (choices[randomChoice1].value === choices[randomChoice2].loseTo) {

      setWinStatus("YOU LOSE");
    } else {

      setWinStatus("DRAW");
    }
    setGameover(true);
    setGameOn(false);
  }

  return (
    <div className="flex flex-col  bg-transparent mx-auto lg:w-[650px] md:w-[550px] sm:w-[450px] min-w-[250px] relative my-20 ">
      <div className="flex w-full h-full items-center justify-between gap-10">
        {displayItems.map((item) => {
          return (
            <div
              key={item.value}
              className="flex md:flex-col gap-12 flex-col-reverse  items-center pt-18 pb-16 "
            >
              <div className="font-semibold font-barlow text-white tracking-normal text-lg  ">
                {item.heading}
                
              </div>
              <button disabled={item.value==2||!gameon} onClick={()=> stopSpin(item.value)} className="">
                {item.component}
              </button>
            </div>
          );
        })}
      </div>

      {(!gameon || gameover) && (
        <div className="  relative md:absolute md:flex items-center justify-center w-full h-full ">
          {gameover && (
            <div className=" flex flex-col mx-auto items-center justify-center w-full h-full ">
              <span className="text-5xl font-barlow font-bold text-white tracking-tight">
                {winStatus}
              </span>
              <button
                onClick={() => {
                  toggleChoices();
                }}
                className=" rounded-md flex items-center justify-center bg-white py-2 mt-4"
              >
                {" "}
                <span className="font-barlow tracking-wide text-darkText mx-8 ">
                  PLAY AGAIN
                </span>
              </button>
            </div>
          )}
          {(!gameon && !gameover) && (
            <button
              onClick={() => {
                toggleChoices();
              }}
              className=" rounded-md flex items-center justify-center mx-auto bg-white py-2 mt-4"
            >
              {" "}
              <span className="font-barlow tracking-wide text-darkText mx-8 ">
                START
              </span>
            </button>
          )}
        </div>
      )}
    </div>
    // <div>
    //   <h1>Computer is choosing...</h1>
    //   <div>{computerChoice}</div>
    // </div>
  );
}

export default ToggleComponent;
