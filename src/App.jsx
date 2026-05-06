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
      <div className="relative">
        <h1 className=" text-xl">Chocolate Festival</h1>
        <h1 className=" text-xl ">Chocolate Festival</h1>
        <h1 className=" text-xl">Chocolate Festival</h1>
      </div>
    </>
  );
}

export default App;
