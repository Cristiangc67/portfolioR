import React from 'react'
import Titles from './components/Titles'
import WebCard from "./components/WebCard";
import webs from "./data/webs"

function Portfolio() {
  return (
    <div className='w-full h-full py-20 bg-[#171C23]'>
      <Titles title="Portfolio"/>
      <div className=' flex flex-wrap justify-center mx-3 my-20 gap-10'>
      {webs.map((web) => (
            <WebCard name={web.name} personal={web.personal} image={web.image} techs={web.techs}/>
          ))}
        
      </div>
    </div>
  )
}

export default Portfolio