import React, { useState, useEffect } from "react";
import { Paper, Rock, Scissors } from "./shapes";
// import { useLocation, useNavigate } from "react-router-dom";

function ToggleComponent() {
  const [winner, setWinner] = useState("");
  const [winStatus, setWinStatus] = useState("");
  const [gameover, setGameover] = useState<boolean>(false);
  const [userChoice, setUserChoice] = useState(0);
  const [intervalId, setIntervalId] = useState<number>();
  const [gameon, setGameOn] = useState<boolean>(false)

  // const navigate = useNavigate();

  const [computerChoice, setComputerChoice] = useState(0);

  const choices = [
    {
      value: 1,
      component: <Scissors />,
      win: 2,
      loseTo: 3,
    },
    {
      value: 2,
      component: <Paper />,
      win: 3,
      loseTo: 1,
    },
    {
      value: 3,
      component: <Rock />,
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
    setGameOn(true)
    setGameover(false)
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
     console.log(intervalId);
    if (value == 2) return;
    console.log(intervalId);

    clearInterval(intervalId);
    const randomChoice1 = Math.floor(Math.random() * choices.length);
    const randomChoice2 = index;

    setComputerChoice(randomChoice1);
    setUserChoice(randomChoice2);

    pickWinner(randomChoice1, randomChoice2);
  };

  function pickWinner(randomChoice1: number, randomChoice2: number) {
    if (choices[randomChoice1].value === choices[randomChoice2].win) {
      console.log(choices[randomChoice1].value, choices[randomChoice2].win);
      setWinner("U");
      setWinStatus("YOU WIN");
    } else if (choices[randomChoice1].value === choices[randomChoice2].loseTo) {
      console.log(choices[randomChoice1].value, choices[randomChoice2].win);
      setWinner("C");

      setWinStatus("YOU LOSE");
    } else {
      console.log(choices[randomChoice1].value, choices[randomChoice2].value);
      setWinner("");
      setWinStatus("DRAW");
    }
    setGameover(true);
  }

  return (
    <div className="flex flex-col  bg-transparent mx-auto lg:w-[650px] md:w-[550px] sm:w-[450px] min-w-[200px] relative my-20 ">
      <div className="flex w-full h-full items-center justify-between">
        {displayItems.map((item) => {
          return (
            <div
              key={item.value}
              className="flex md:flex-col gap-12 flex-col-reverse  items-center pt-18 pb-16 "
            >
              <div className="font-semibold font-barlow text-white tracking-normal text-lg  ">
                {item.heading}
              </div>
              <button onClick={() => stopSpin(item.value)} className="">
                {item.component}
              </button>
            </div>
          );
        })}
       
      </div>

      { (!gameon || gameover) && <div className="  relative md:absolute md:flex items-center justify-center w-full h-full ">
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
        {!gameon && (
          <button
            onClick={() => {
              toggleChoices();
            }}
            className=" rounded-md flex items-center justify-center bg-white py-2 mt-4"
          >
            {" "}
            <span className="font-barlow tracking-wide text-darkText mx-8 ">
              START
            </span>
          </button>
        )}
      </div>}
    </div>
    // <div>
    //   <h1>Computer is choosing...</h1>
    //   <div>{computerChoice}</div>
    // </div>
  );
}

export default ToggleComponent;
