import React from "react";
import Titles from "./components/Titles";
import WebCard from "./components/WebCard";
import webs from "./data/webs";
import Carousel from "./components/Carousel";

function Portfolio() {
  return (
    <div className="w-full h-full py-20 bg-[#171C23]">
      <Titles title="Portfolio" />
      <div className=" flex-wrap justify-center mx-3 my-20 gap-10 hidden md:flex">
        {webs.map((web) => (
          <WebCard
            name={web.name}
            personal={web.personal}
            image={web.image}
            techs={web.techs}
            link={web.link}
          />
        ))}
      </div>
      <div className="md:hidden block mx-auto mt-10">
        <Carousel />
      </div>
    </div>
  );
}

export default Portfolio;
