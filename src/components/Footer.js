import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' max-auto  text-white bg-[#2699fb] w-full lg:grid grid-cols-2 '>
    <div className=' mx-5 my-9 px-5 col-span-1'>
        <h1 className='font-bold text-black text-3xl py-2'>WsCube Tech.</h1>
        <p className='text-white py-2'>Loream ipsum dolor sit amet consectetur adipisicing<br/>elit.Id odit ullam iste repellat consequatur libero<br/> reciendis,blanditiis accusantium.</p>
        <div className='flex justify-between w-[50%] my-6 text-black'>
            <FaFacebookSquare size={30}/>
            <FaInstagramSquare size={30}/>
            <FaTwitterSquare size={30}/>
            <FaGithub size={30}/>
        </div>
    </div>
    <div className='flex justify-between  my-9 lg:mx-2'>
        <div>
        <h5 className='text-black font-bold'>Solution</h5>
        <ul className='py-2 text-white'>
        <li>Analytics</li>
        <li>Marketing</li>
        <li>Commerce</li>
        <li>Insights</li>
        </ul>
        </div>
        <div>
        <h5 className='text-black font-bold'>Support</h5>
        <ul className='py-2 text-white'>
        <li>Pricing</li>
        <li>Documentation</li>
        <li>Guides</li>
        <li>API Status</li>
        </ul>
        </div>
        <div>
        <h5 className='text-black font-bold'>Company</h5>
        <ul className='py-2 text-white'>
        <li>About</li>
        <li>Blog</li>
        <li>Jobs</li>
        <li>Press</li>
        <li>Careers</li>
        </ul>
        </div>
    </div>
    </div>
  )
};
export default Footer;
