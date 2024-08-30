import { ReactNode } from "react";


type ButtonProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
  children: ReactNode;
};

type ToggleProps = {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score:number
};

type RulesProps = {
  setDisplayRules: React.Dispatch<React.SetStateAction<boolean>>;
};




export type {ToggleProps,ButtonProps, RulesProps}