import { useState } from "react";
import ToggleComponent from "./components/toggleeffect";
import Header from "./components/header";
import Rules from "./components/rules";
import RulesButton from "./components/rulesButton";

export function GamePage() {
  const [displayRules, setDisplayRules] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-center w-full relative">
      {displayRules && <Rules setDisplayRules={setDisplayRules} />}
      <div className="relative bg-backgroundColor w-full min-h-screen p-12">
        <Header />
        <ToggleComponent/>

        <RulesButton setDisplayRules={setDisplayRules} />
      </div>
    </div>
  );
}
