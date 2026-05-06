import { useState } from "react";
import reactLogo from "./assets/svg/react.svg";
import viteLogo from "/vite.svg";
import arrow from "./assets/svg/arrow.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex gap-0.5 absolute top-10 right-15">
        <img className="" src={arrow} alt="" />
        <img className="-rotate-90" src={arrow} alt="" />
        <img className="rotate-90" src={arrow} alt="" />
        <img className="rotate-180" src={arrow} alt="" />
      </div>
      <div className="fixed top-9 left-15 text-sm font-bricolage">
        <span>[</span> Menu <span>]</span>
      </div>
      <div className="relative overflow-hidden w-screen flex flex-col mt-33">
        <h1 className=" text-xl font-dirtyline text-[#00FF33] whitespace-nowrap">
          CHOCOLATE FESTIVAL
        </h1>
        <h1 className=" text-xl font-dirtyline text-[#00FF33] -mt-20 whitespace-nowrap">
          CHOCOLATE FESTIVAL
        </h1>
        <h1 className=" text-xl font-dirtyline text-[#00FF33] -mt-20 whitespace-nowrap">
          CHOCOLATE FESTIVAL
        </h1>
      </div>
      <div className="flex w-screen justify-between mt-10">
        <div className="flex flex-col">
          <div className="subtitle ml-15">Chocolate Festival</div>
          <p className="ml-15">
            Electronic Delight <br /> Festival
          </p>
        </div>
        <div className="flex flex-col">
          <div className="subtitle mr-15 text-right">5 & 6 June 2026</div>
          <p className="mr-15 text-right">
            Pyramides de Vidi
            <br /> Lausanne
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
