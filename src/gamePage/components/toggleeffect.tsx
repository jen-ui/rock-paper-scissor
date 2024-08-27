import React, { useState, useEffect } from "react";
import { Paper, Rock, Scissors } from "./shapes";
import { useLocation, useNavigate } from "react-router-dom";

function ToggleComponent() {
  const [winner, setWinner] = useState("");
  const [winStatus, setWinStatus] = useState("");
  const [gameover, setGameover] = useState<boolean>(false); 

  const navigate=useNavigate()

  const location = useLocation();
  const { userChoice } = location.state || {};
  

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
      heading: "YOU PICKED",
      component: choices[userChoice].component,
    },
    {
      heading: "THE HOUSE PICKED",
      component: choices[computerChoice].component,
    },
  ];

  useEffect(() => {
    // Function to continuously toggle between the choices
    const toggleChoices = () => {
      let index = 1;
      const intervalId = setInterval(() => {
        setComputerChoice(index);
        index = (index + 1) % choices.length;
      }, 200); // Change every 200ms for a quick toggle effect

      // Stop the toggle after 3 seconds and choose a random final choice
      setTimeout(() => {
        clearInterval(intervalId);
        const randomChoice = Math.floor(Math.random() * choices.length);
        setComputerChoice(randomChoice);

        pickWinner(randomChoice);
      }, 2000); // 3 seconds of toggling
    };

    function pickWinner(randomChoice: number) {
      if (choices[randomChoice].value === choices[userChoice].win) {
        console.log(choices[randomChoice].value, choices[userChoice].win);
        setWinner("U");
        setWinStatus("YOU WIN");
      } else if (choices[randomChoice].value === choices[userChoice].loseTo) {
        console.log(choices[randomChoice].value, choices[userChoice].win);
        setWinner("C");

        setWinStatus("YOU LOSE");
      } else {
        console.log(choices[randomChoice].value, choices[userChoice].value);
        setWinner("");
        setWinStatus("DRAW");
      }
      setGameover(true);
    }

    toggleChoices();
  },[]);

  return (
    <div className="flex flex-col  bg-transparent mx-auto lg:w-[650px] md:w-[550px] sm:w-[450px] min-w-[200px] relative my-20 ">
      <div className="flex w-full h-full items-center justify-between">
        {displayItems.map((item) => {
          return (
            <div
              key={item.heading}
              className="flex md:flex-col gap-12 flex-col-reverse  items-center pt-18 pb-16 "
            >
              <div className="font-semibold font-barlow text-white tracking-normal text-lg  ">
                {item.heading}
              </div>
              <div className="">{item.component}</div>
            </div>
          );
        })}
      </div>

      {gameover && (
        <div className="  relative md:absolute md:flex items-center justify-center w-full h-full ">
          <div className=" flex flex-col mx-auto items-center justify-center w-full h-full ">
            <span className="text-5xl font-barlow font-bold text-white tracking-tight">
              {winStatus}
            </span>
            <button onClick={() => {
              navigate("/")
            }} className=" rounded-md flex items-center justify-center bg-white py-2 mt-4">
              {" "}
              <span className="font-barlow tracking-wide text-darkText mx-8 ">
                PLAY AGAIN
              </span>
            </button>
          </div>
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
