import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import webs from "../data/webs";
import CarouselItem from "./CarouselItem";

function Carousel() {
  const [count, setCount] = useState(0);
  const end = webs.length - 1;
  /* const n1 = document.querySelector("#1");
  const n2 = document.querySelector("#2"); */
  const forwardHandler = () => {
    if (count == webs.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  const backHandler = () => {
    if (count == 0) {
      setCount(webs.length - 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex w-full px-10 justify-center items-center overflow-hidden l:hidden">
      <button
        className="bg-[#a6a6a66e] rounded-full hover:-translate-x-1 transition-all"
        onClick={backHandler}
      >
        <IoChevronBack size={50} />
      </button>
      <div class=" w-full overflow-hidden">
        <a href="">
          {webs.map((web) => (
            <div
              className={`relative float-left ${
                web.id == count ? "" : "hidden1"
              } -mr-[100%] w-full duration-[600ms] ease-in-out bg-white rounded-2xl `}
              key={web.id}
            >
              <img
                src={web.image}
                className=" block transition-all rounded-2xl "
                alt={web.name}
              />
              <span className=" text-blue-700 text-2xl ">{web.id}</span>
            </div>
          ))}
        </a>
      </div>

      {/* <div className=" h-4/6 bg-white rounded-2xl ">
        <img
          src={webs[count].image}
          className="transition-all rounded-2xl "
          alt=""
        />
        <span className=" text-blue-700 text-2xl ">{webs[count].id}</span>
      </div> */}
      <button
        className="bg-[#a6a6a66e] rounded-full hover:translate-x-1 transition-all "
        onClick={forwardHandler}
      >
        <IoChevronForward size={50} />
      </button>
    </div>
  );
}

export default Carousel;
