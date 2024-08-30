import { ButtonProps } from "../interfacce";


const Button = ({ handleClick,children }: ButtonProps) => {
  return (
    <button
      className="w-[100px] font-barlow flex mx-auto md:mx-4 items-center rounded-md px-4 justify-center border-[1px] border-white bg-transparent text-white tracking-wide text-base  py-1 md:py-0  "
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
