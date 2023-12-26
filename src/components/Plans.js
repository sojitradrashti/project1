import React from 'react'
import laptop1 from "../assets/img/single.png";
import laptop2 from "../assets/img/double.png";
import laptop3 from "../assets/img/triple.png";

export default function Plans() {
  return (
    <div className='py-[100px] px-2'>
        <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6">
            <div className='shadow-xl my-4 h-[500px] hover:scale-105 duration-500'>
                <img alt='/' src={laptop1} className='w-[150px] h-[120px] m-4 mx-auto'/>
                <h1 className='text-3xl font-bold text-center'>Web development</h1>
                <h1 className='text-center font-bold text-3xl m-4'>$149</h1>
                <div className='font-bold text-center'>
                    <p className='border-b py-2 mx-8'>Lorem Ipsum is simply</p>
                    <p className='border-b py-2 mx-8'>Lorem Ipsum is simply dummy text of <br/>the printing</p>
                    <p className='border-b py-2 mx-8'>Lorem Ipsum is simply dumm.</p>
                </div>
                <div className='bg-[#00df9a] text-black w-[200px] rounded-md  my-6 mx-auto px-6 py-3 text-center'>
                <button>Start Trial</button>
                </div>
            </div>
            <div className='shadow-xl my-4 h-[500px] bg-gray-100 hover:scale-105 duration-500'>
            <img alt='/' src={laptop2} className='w-[150px] h-[120px] m-4 mx-auto'/>
            <h1 className='text-3xl font-bold text-center'>Digital Marketing</h1>
            <h1 className='text-center font-bold text-3xl m-4'>$149</h1>
            <div className='font-bold text-center'>
                    <p className='border-b py-2 mx-8'>Lorem Ipsum is simply</p>
                    <p className='border-b py-2 mx-8'>Lorem Ipsum is simply dummy text of <br/>the printing</p>
                    <p className='border-b py-2 mx-8'>Lorem Ipsum is simply dumm.</p>
                </div>
                <div className='bg-black text-[#00df9a] w-[200px] rounded-md  my-6 mx-auto px-6 py-3 text-center'>
                <button>Start Trial</button>
                </div>
            </div>
            <div className='shadow-xl my-4 h-[500px] hover:scale-105 duration-500 '>
            <img alt='/' src={laptop3} className='w-[150px] h-[120px] m-4 mx-auto'/>
            <h1 className='text-3xl font-bold text-center'>App development</h1>
            <h1 className='text-center font-bold text-3xl m-4'>$149</h1>
            <div className='font-bold text-center'>
                    <p className='border-b py-2 mx-8'>Lorem Ipsum is simply</p>
                    <p className='border-b py-2 mx-8'>Lorem Ipsum is simply dummy text of <br/>the printing</p>
                    <p className='border-b py-2 mx-8'>Lorem Ipsum is simply dumm.</p>
                </div>
                <div className='bg-[#00df9a] text-black w-[200px] rounded-md  my-6 mx-auto px-6 py-3 text-center'>
                <button>Start Trial</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}
