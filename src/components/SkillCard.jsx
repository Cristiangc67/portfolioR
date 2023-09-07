import React from "react";

function SkillCard({ name }) {
  return (
    <div className="duration-300 hover:bg-[#272f38] hover:-translate-y-1  hover:drop-shadow-[0_35px_35px_rgb(109,40,217,0.25)]  min-w-[13%] max-h-[13%]  h-1/2 w-1/2 sm:w-1/2 md:w-[20%] lg:w-[17%]   xl:w-[13%]  rounded-2xl bg-[#21272F] py-4 px-6">
      <img
        src={`src/assets/${name}.svg`}
        className=" w-full h-40 mt-1 "
        alt={`icon ${name}`}
      />
      <div>
        <p className="font-lato text-white text-2xl text-center mt-2">{name}</p>
      </div>
    </div>
  );
}

export default SkillCard;
