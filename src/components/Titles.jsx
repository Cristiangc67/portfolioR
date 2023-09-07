import React from "react";
import { InView, useInView } from "react-intersection-observer";

function Titles({ title }) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={` ${
        inView ? "scale-y-100" : "scale-y-0"
      } duration-700 w-max relative after:absolute after:bg-violet-700 after:h-[5px] after:w-full after:bottom-0`}
    >
      <h2 className="tracking-wide relative text-6xl text-white font-jost text-start ms-20 font-semibold">
        {title}
      </h2>
    </div>
  );
}

export default Titles;
