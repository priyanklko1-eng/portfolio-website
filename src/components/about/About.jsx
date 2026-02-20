import React from 'react'
import aboutimg from "../../assets/soft1.jpg"
import { IoArrowForward } from "react-icons/io5"

const About = () => {
  return (
    <div id='about' className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center gap-10'>
               <div className='w-[380px] h-[400px] overflow-hidden rounded-b-[210px] rounded-t-[40px]'> <img className="w-full h-full object-cover" src={aboutimg} alt="" /></div>
                <ul>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1' />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Frontend developer</h1>
                            <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam accusamus officia cupiditate esse dolores. Repudiandae nam, iste explicabo, veritatis at repellendus quam voluptatibus libero iure alias soluta eius doloribus natus!</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1' />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Backend developer</h1>
                            <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam accusamus officia cupiditate esse dolores. Repudiandae nam, iste explicabo, veritatis at repellendus quam voluptatibus libero iure alias soluta eius doloribus natus!</p>
                        </span>
                    </div>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1' />
                        <span className='w-96'>
                            <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Database designer</h1>
                            <p className='text-sm md:text-md leading-tight'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam accusamus officia cupiditate esse dolores. Repudiandae nam, iste explicabo, veritatis at repellendus quam voluptatibus libero iure alias soluta eius doloribus natus!</p>
                        </span>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default About