import { ReactNode } from "react";


type ButtonProps = {
  handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined,
  children: ReactNode;
};

type ToggleProps = {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  score:number
};




export type {ToggleProps,ButtonProps}