import { useState } from "react";
import ToggleComponent from "./components/toggleeffect";
import Header from "./components/header";
import Rules from "./components/rules";
import Triangle from "./components/traingle";
import Button from "./components/button";

export function GamePage() {
  const [displayRules, setDisplayRules] = useState<boolean>(false);
  const [playGame, setPlayGame] = useState<boolean>(false)
  const[score,setScore]=useState(0)


  


  return (
    <div className="flex items-center justify-center w-full relative">
      {displayRules && <Rules setDisplayRules={setDisplayRules} />}
      <div className="relative bg-backgroundColor w-full min-h-screen p-12">
        <Header score={score} />
        {
          
          playGame ? (
          <ToggleComponent setScore={setScore} score={score} />
        ) : (
          <Triangle  />
        )
        }

        <div className=" flex-col-reverse w-full  flex lg:flex-row  md:justify-between justify-center items-center mt-20">

          <Button handleClick={()=>setPlayGame(!playGame)}>{ playGame?"BACK":"PLAY"}</Button>
          <Button handleClick={()=>setDisplayRules(true)}>RULES</Button>

        </div>
        
      </div>
    </div>
  );
}