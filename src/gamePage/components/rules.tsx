import RulesProps from "../interfacce";


const Rules = ({ setDisplayRules }:RulesProps) => {
    return (
      <div className="flex items-center justify-between gap-12 absolute p-8 flex-col bg-white z-10 mx-auto w-full h-full md:h-[375px] md:w-[375px] rounded-md shadow-rulesShadow  ">
        <div className=" flex w-full justify-between items-center">
          <span className="font-bold mx-auto text-3xl text-darkText tracking-tighter">
            RULES
          </span>
          <button
            onClick={() => {
              setDisplayRules(false);
            }}
            className="hidden md:block"
          >
            <img src="icon-close.svg" alt="close-icon" />
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src="image-rules.svg" alt="rules image" width={250} />
        </div>
        <button
          onClick={() => {
            setDisplayRules(false);
          }}
          className="block md:hidden"
        >
          <img src="icon-close.svg" alt="close-icon" />
        </button>
      </div>
    );
}

export default Rules