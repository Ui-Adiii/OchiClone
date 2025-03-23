import React from 'react'
import { BsDot } from "react-icons/bs";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='px-10  rounded-t-3xl w-full text-black py-20 bg-[#cdea68]'>
        <h1 className='text-5xl mb-10 w-4/5 font-medium'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='border-t-[1px] flex gap-5 py-10'>
            <div className='w-1/2  px-10'>
                <h1 className='text-7xl font-medium leading-none tracking-tighter'>Our approach:</h1>
                <button className='py-4 px-8 bg-black mt-4 text-white rounded-full text-xl uppercase'>Read More <BsDot fontSize={"40px"} className='inline'/></button>
            </div>
            <div className='w-1/2 rounded-2xl overflow-hidden'>
                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About