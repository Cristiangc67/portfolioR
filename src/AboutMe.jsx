import React from "react";
import Titles from "./components/Titles";
import SkillCard from "./components/SkillCard";
import skills from "./data/skills";
function AboutMe() {
  return (
    <div className=" w-full h-full py-20 bg-[#171C23]">
      <Titles title="Sobre Mi" />
      <div className=" mt-5 flex items-center justify-around">
        <img
          src="src\assets\codeTyping.svg"
          className=" w-3/12 mb-10"
          alt="codetyping"
        />
        <div className="flex flex-col w-5/12 text-2xl leading-10 text-white">
          <p className=" font-lato">
            Como Front End Developer, mi enfoque principal es desarrollar
            experiencias de usuario atractivas y eficientes utilizando las
            últimas tecnologías y herramientas. Mi experiencia en el desarrollo
            de aplicaciones web incluye el uso de React, una de las bibliotecas
            de JavaScript más populares y versátiles en la actualidad. También
            estoy familiarizado con Tailwind y Bootstrap, dos frameworks de CSS
            que me permiten crear diseños elegantes y responsivos con facilidad.
          </p>
        </div>
      </div>

      <div className=" mt-10">
        <h3 className="tracking-widest text-5xl text-white font-jost text-center font-medium">
          Skills
        </h3>

        <div className="flex flex-wrap justify-center gap-24  my-20 mx-3 ">
          {skills.map((skill) => (
            <SkillCard name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

{
  /* <div className=" hidden1 w-max relative after:absolute after:bg-violet-700 after:h-[5px] after:w-full after:bottom-0">
        <h2 className=" tracking-wide relative text-6xl text-white font-jost text-start ms-20 font-semibold">
          Sobre mi
        </h2>
      </div> */
}
