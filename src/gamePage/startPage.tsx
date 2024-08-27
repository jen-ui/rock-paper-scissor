import { useState } from "react";
import Header from "./components/header";
import Traingle from "./components/traingle";
import Rules from "./components/rules";
import RulesButton from "./components/rulesButton";

export function StartPage() {
  const [displayRules, setDisplayRules] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-center w-full relative">
      {displayRules && <Rules setDisplayRules={setDisplayRules} />}
      <div className="relative bg-backgroundColor w-full min-h-screen p-12">
        <Header />
        <Traingle />

        <RulesButton setDisplayRules={setDisplayRules} />
      </div>
    </div>
  );
}
