import React from 'react';
import laptop from "../assets/img/image2.jpeg";

export default function Experts() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto my-10 md:grid grid-cols-2 '>
    <div className='col-span-1 md:w-[80%] text-center'>
        <img src={laptop} alt="" className='inline'/>
    </div>
    <div className=' col-span-1 flex flex-col justify-center'>
        <h1 className='text-[#00df9a] font-bold my-2'>LEARN FROM EXPERTS</h1>
        <p className='my-2 text-justify'>
            Loream ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus culpa hic assumenda, Voluptate reprehenderit dolore autem cum ullum sed odit perspiciates. Doloribus quos velit,eveniet ex deserunt fuga?
        </p>
        <button className='w-[30%] bg-black text-white p-3 rounded'>Get started</button>
    </div>
    </div>
  );
};

