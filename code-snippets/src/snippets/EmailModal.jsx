import React, { useEffect, useState } from 'react';
import { CiCircleRemove } from "react-icons/ci";

const EmailModal = () => {
  const [ emailModal, setEmailModal ] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setEmailModal(true)
    }, 1000);
  }, []);

    const closeModal = () => {
      setEmailModal(false)
    }
  return emailModal && (
    <section className='md:hidden lg:hidden xl:hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-serif z-10'>
      <div className='h-[50%] w-10/12 gradient-bg rounded-md shadow-2xl flex justify-center items-center relative'>
        <form className='flex flex-col mx-10 gap-1.5'>
            <div>
                <div className='text-5xl my-3.5'>
                    <span className='mx-1'>Join our</span>
                    <span className='text-blue-600 mx-1 italic'>Waitlist</span>
                </div>
                <span className='text-xl text-gray-700 mx-1'>for an</span>
                <span className='text-xl mx-1 text-blue-600 font-sans'>exclusive early access</span>
                <span className='text-xl text-gray-700 mx-1'>and discounts!</span>
            </div>
            <div className='flex h-[30px] my-4 gap-2 relative'>
                <input 
                type="email" 
                placeholder='johndoe@gmail.com'
                className='border border-black rounded-md w-3/4 outline-none px-2 text-sm transition-colors duration-300 ease-in-out focus:outline-blue-500'/>
                <button type='submit' className='bg-blue-500 text-white rounded-lg text-xs flex justify-center items-center w-1/4 hover:bg-blue-600'>Join</button>
            </div>
            <label htmlFor='emailSub' className='flex gap-1.5 items-center'>
                <input type="checkbox" name='emailSub' id='emailSub' className='scale-125'/>
                Subscribe to our newsletter to get the latest updates
            </label>
        </form>
        <button 
        onClick={() => closeModal()} 
        className='absolute -top-4 -right-4 text-5xl bg-white rounded-full hover:bg-blue-500 hover:text-white shadow-lg'>
          <CiCircleRemove/>
        </button>
      </div>
    </section>
  )
}

export default EmailModal
