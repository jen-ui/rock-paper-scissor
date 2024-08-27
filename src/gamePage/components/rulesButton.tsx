import RulesProps from "../interfacce";

const RulesButton = ({setDisplayRules}:RulesProps) => {
    return (
      <div className="flex  w-full items-end md:justify-end justify-center mt-20">
        <button
          className="w-[100px] font-barlow flex items-center rounded-md px-4 justify-center border-[1px] border-white bg-transparent text-white tracking-wide text-base  py-2 md:py-0  "
          onClick={() => {
            setDisplayRules(true);
          }}
        >
          RULES
        </button>
      </div>
    );
}

export default RulesButton