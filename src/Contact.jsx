import React, { useRef } from "react";
import Titles from "./components/Titles";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_40g43f5",
        "template_ydfkvii",
        form.current,
        "w2tch2a0M4YxtOGAq"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("exito");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-full h-full py-20 bg-[#171C23]">
      <Titles title="Contacto" />

      <h3>Contactame</h3>
      <div className="flex justify-around">
        <img src="src/assets/Emails.svg" className="w-4/12" alt="" />

        <form
          onSubmit={sendEmail}
          ref={form}
          className=" flex flex-col py-24 px-20 bg-[#21272F] w-2/5 rounded-2xl gap-20"
        >
          <div className="relative flex flex-col">
            <input
              type="text"
              className=" peer placeholder-transparent focus:border-violet-800 outline-none font-lato bg-[#21272F] border-slate-400 text-slate-50 border-b-2 text-xl "
              placeholder="Nombre"
              name="name"
              id="name"
              required
            />
            <label
              htmlFor="name"
              className=" transition-all duration-100 peer-placeholder-shown:top-0 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-200 text-gray-400 absolute font-lato left-0 -top-5"
            >
              Nombre
            </label>
          </div>
          <div className="relative flex flex-col">
            <input
              type="email"
              className="peer placeholder-transparent focus:border-violet-800 outline-none font-lato bg-[#21272F] border-slate-400 text-slate-50 border-b-2 text-xl"
              placeholder="Email"
              name="email"
              id="email"
              required
            />
            <label
              htmlFor="email"
              className=" transition-all duration-100 peer-placeholder-shown:top-0 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-200 text-gray-400 absolute font-lato left-0 -top-5"
            >
              Email
            </label>
          </div>
          <div className="relative">
            <textarea
              className="peer placeholder-transparent outline-none bg-[#343b44] rounded-xl px-5 font-lato w-full text-slate-50 pt-2 text-xl "
              placeholder="Mensaje"
              name="message"
              id="message"
              rows="10"
              required
            ></textarea>
            <label
              htmlFor="message"
              className="transition-all duration-100 peer-placeholder-shown:top-0 peer-placeholder-shown:text-xl peer-placeholder-shown:text-gray-200 text-gray-400 absolute font-lato left-5 -top-9 pt-2 "
            >
              Mensaje
            </label>
          </div>
          <button className="bg-violet-800 font-jost text-slate-50 rounded-lg py-2 text-2xl ">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
} //violet-800

export default Contact;
