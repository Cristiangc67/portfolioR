import React from 'react'

function WebCard({image, name, personal, techs}) {
  return (
    <a className='group h-72  w-3/12 flex relative overflow-hidden rounded-2xl ' href='#' >
      <img src={image} alt="" />
      <div className='items-center  justify-center flex flex-col absolute group-hover:-translate-y-0 text-center w-full h-full bg-[#21272fee]  translate-y-full duration-300 ease-in-out'>
        <p className='font-jost text-slate-50  text-4xl ' >{name}</p>
        <span className='font-lato my-10 text-xl text-slate-50' >{personal? "Proyecto Personal":""}</span>
        <div>
          {techs.map((tech)=>(<span className={`font-jost mx-2 px-2 py-1 bg-${tech} rounded-full text-xl`} >{tech}</span>))}
        </div>
      </div>

    </a>
  )
}

/* bg-[rgba(25,6,55,0.96)] */

export default WebCard