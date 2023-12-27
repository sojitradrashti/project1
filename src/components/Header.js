import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='bg-[#2699fb] p-4'>
      <div className='max-w-[1240] py-[12px] items-center flex justify-between mx-auto'>
        <div className='text-3xl font-bold'>WsCube Tech</div>
        {
            toggle ? 
          <AiOutlineClose onClick={() =>setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
         : 
          <AiOutlineMenu onClick={() =>setToggle(!toggle)} className="text-white text-2xl md:hidden block" />
        }

        <ul className='hidden md:flex text-white gap-10 '>
          <li>
            <Link to="/">Home</Link>
            </li>
          <li>
            <Link to="/company">Company</Link>
            </li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        {/*Responsive menu*/}
        <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[92px] ${toggle ? 'left-[0]' : 'left-[-100%]'}` }>
          <li className='p-5'><Link to="/">Home</Link></li>
          <li className='p-5'><Link to="/company">Company</Link></li>
          <li className='p-5'><Link to="/services">Services</Link></li>
          <li className='p-5'><Link to="/about">About</Link></li>
          <li className='p-5'><Link to="/contact">Contact</Link></li>
        </ul>


        
        </div>
    </div>
  );
}

