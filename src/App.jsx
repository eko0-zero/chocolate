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
      <div className="fixed top-15 left-15 text-sm font-bricolage z-100">
        <span>[</span> Menu <span>]</span>
      </div>
      <div className="relative overflow-hidden w-screen flex flex-col mt-42">
        <h1 className=" text-xl font-dirtyline text-[#00FF33] whitespace-nowrap">
          CHOCOLATE FESTIVAL
        </h1>
        <h1 className=" text-xl font-dirtyline text-[#00FF33] -mt-22 whitespace-nowrap">
          CHOCOLATE FESTIVAL
        </h1>
        <h1 className=" text-xl font-dirtyline text-[#00FF33] -mt-22 whitespace-nowrap">
          CHOCOLATE FESTIVAL
        </h1>
      </div>
      <div className="flex w-screen justify-between mt-4">
        <div className="flex flex-col gap-[5px]">
          <div className="subtitle ml-15">Chocolate Festival</div>
          <p className="ml-15">
            Electronic Delight <br /> Festival
          </p>
        </div>
        <div className="flex flex-col gap-[5px]">
          <div className="subtitle mr-15 text-right">5 & 6 June 2026</div>
          <p className="mr-15 text-right">
            Pyramides de Vidi
            <br /> Lausanne
          </p>
        </div>
      </div>
      <div className="title ml-15 mr-[calc(33%-15px)] mt-[225px]">
        About the Chocolate Festival. The electronic music festival returns to
        the Pyramides de Vidy. An official after-party at D! Club.
      </div>
      <div className="ml-15 mt-6 text-sm font-bricolage">
        <span>[</span> See more <span>]</span>
      </div>
      <div className="flex ml-15 mt-20 gap-[10%]">
        <div className="flex flex-col w-[30%] gap-[10px]">
          <div className="subtitle">The Festival</div>
          <p>
            The venue features a large stage under a 600-square-meter tent, a
            covered dining area, shaded areas for relaxing, and tasteful decor
            with lighting effects.
          </p>
        </div>
        <div className="flex flex-col w-[30%] gap-[10px]">
          <div className="subtitle">History</div>
          <p>
            Launched in 2006 as a small local event, CHOCOLATE has become a
            staple of the Lausanne electronic music scene.
          </p>
          <p>
            The association was founded in 2008, and since then, the festival
            has featured more than 288 artists over the course of 19 years.
          </p>
        </div>
      </div>
      <div className="title ml-15 mr-[calc(33%-15px)] mt-[225px]">
        See you on June 5 & 6, 2026, at the Pyramids of Vidi for the 19th
        edition of the festival. Book your tickets now.
      </div>
      <div className="ml-15 mt-6 text-sm font-bricolage">
        <span>[</span> Ticket office <span>]</span>
      </div>
      <div className="flex ml-15 mt-20 gap-[8%]">
        <div className="flex flex-col w-[25%] gap-[10px]">
          <div className="subtitle">June 5 pass</div>
          <p>
            Fridays from 4:00 PM to 1:30 AM <br /> First price tier starting at
            39.-
          </p>
        </div>
        <div className="flex flex-col w-[25%] gap-[10px]">
          <div className="subtitle">June 6 pass</div>
          <p>
            Saturdays from 3:00 PM to 1:30 AM <br />
            First tier starting at 49.-
          </p>
        </div>
        <div className="flex flex-col w-[25%] gap-[10px]">
          <div className="subtitle">June 5-6 pass</div>
          <p>
            Fridays from 4:00 PM to 1:30 AM <br />
            Saturdays from 3:00 PM to 1:30 AM <br />
            First tier starting at 69.-
          </p>
        </div>
      </div>
      <div className="flex flex-col w-[30%] gap-[10px] ml-15 mt-10">
        <div className="subtitle">Pricing</div>
        <p>
          Tickets are offered in price tiers, with a limited number of
          discounted seats available. Once the quota is reached, the price
          increases gradually.
        </p>
      </div>
      <div className="title ml-15 mr-[calc(33%-15px)] mt-[225px]">
        DJ contest
      </div>
      <div className="flex gap-5 text-sm font-bricolage ml-15 mt-10">
        <button className="px-[10px] py-[2px] border border-white rounded-[100px] opacity-50">
          2025
        </button>
        <button className="px-[10px] py-[2px] border border-white rounded-[100px] opacity-50">
          2024
        </button>
        <button className="px-[10px] py-[2px] border border-white rounded-[100px] opacity-50">
          2023
        </button>
        <button className="px-[10px] py-[2px] border border-white rounded-[100px] opacity-50">
          2022
        </button>
        <button className="px-[10px] py-[2px] border border-white rounded-[100px] opacity-50">
          2019
        </button>
      </div>
    </>
  );
}

export default App;
