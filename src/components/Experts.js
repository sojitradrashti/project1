import React from 'react';
import laptop from "../assets/img/image2.jpeg";

function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto my-10 h-[200px] border-black grid grid-cols-3'>
    <div className='border border-[blue] col-span-1 w-[70%]'>
        <img src={laptop} alt=""/>
    </div>
    <div className='border border-[black] col-span-2'></div>
    </div>
  );
};

export default Experts;