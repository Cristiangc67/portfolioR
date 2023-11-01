import React, { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("Home");

  const handleClick = (e) => {
    setActive(e.target.textContent);
  };

  /* ${scroll >= 500 ? "" : ""} */

  return (
    <header className="flex justify-around sticky top-0 w-full z-50">
      <nav
        className=" flex
      justify-between items-center
       sm:px-8 px-4 py-2 text-white z-50 transition-all duration-300 w-full bg-[#21272F]"
      >
        <a href="/" className="w-1/12">
          <img
            src="src\assets\cgc.png"
            className="w-20 object-contain"
            alt=""
          />
        </a>
        <div className="flex justify-between text-xl lg:text-2xl w-6/12">
          <a
            className={`${
              active === "Home" ? "active" : ""
            } font-lato hover:text-violet-600`}
            href="#"
            onClick={handleClick}
          >
            Home
          </a>
          <a
            className={`${
              active === "Sobre mi" ? "active" : ""
            } font-lato hover:text-violet-600`}
            href="#"
            onClick={handleClick}
          >
            Sobre mi
          </a>
          <a
            className={`${
              active === "Portfolio" ? "active" : ""
            } font-lato hover:text-violet-600 `}
            href="#"
            onClick={handleClick}
          >
            Portfolio
          </a>
          <a
            className={`${
              active === "Contacto" ? "active" : ""
            } font-lato hover:text-violet-600 `}
            href="#"
            onClick={handleClick}
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
