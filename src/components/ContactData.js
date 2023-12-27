import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'

function ContactData() {
  return (
    <>
     <div className='max-w-[1240px]'>
            <h1 className='text-black font-bold text-center text-3xl my-4'>Let's discuss your project</h1>
            <form className='text-center px-6 py-3 '>
              <input placeholder='Name' className='border border-black my-4 w-[20%]'/><br/>
              <input placeholder='Email' className='border border-black my-4 w-[20%]'/><br/>
              <input placeholder='Phone number' className='border border-black my-4 w-[20%]'/><br/>
              <textarea placeholder='Message' rows={5} className='border border-black my-4 w-[20%]'/><br/>
              <button className='text-white bg-black px-7 py-4 w-[20] rounded'>SUBMIT</button>

            </form>
            
        </div>
    </>
  )
}

export default ContactData




// <form>
//                 <input placeholder="Name"/>
//                 <input placeholder="Email"/>
//                 <input placeholder="Phone nuumber"/>
//                 <textarea placeholder="Message" rows="4"/>
//                 <button>SUBMIT</button>
//             </form> 