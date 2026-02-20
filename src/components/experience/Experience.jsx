import React from 'react'
import { FaGoogle, FaCss3, FaAmazon, FaFigma, FaJs, FaHtml5,FaReact } from "react-icons/fa";
import { SiMongodb, SiRadixui, SiNetflix } from "react-icons/si";

const Experience = () => {
    return (
        <div id='Experience' className='p-10 md:p-24'>
            <h1 className='text-2xl md:text-4xl text-white font-bold'>Experience</h1>
            <div className='flex flex-wrap items-center justify-around'>
                <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaHtml5 size={50} color='#e34e26' />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaCss3 size={50} color='#1572bc' />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaFigma size={50} color='#f24e1e' />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaHtml5 size={50} color='#e34e26' />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaJs size={50} color='#fd7f1e' />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <SiMongodb size={50} color='#47a248' />
                    </span>
                    <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
                        <FaReact size={50} color='#61dafb' />
                    </span>
                </div>
                <div>
                <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                    <FaGoogle color='#4285F4' size={50}/>
                    <span className='text-white'>
                        <h2 className='leading-tight'>Software engineer, Google</h2>
                        <p className='text-sm leading-tight font-thin'>Sept 2023,present</p>
                        <ul className='text-sm p-2'>
                            <li>-work as a software developer</li>
                            <li>-senior sde</li>
                            <li></li>
                        </ul>

                    </span>
                </div>
                <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                    <SiNetflix color='#e50915' size={50}/>
                    <span className='text-white'>
                        <h2 className='leading-tight'>Software engineer, Netflix</h2>
                        <p className='text-sm leading-tight font-thin'>Sept 2023,present</p>
                        <ul className='text-sm p-2'>
                            <li>-work as a software developer</li>
                            <li>-senior sde</li>
                            <li></li>
                        </ul>

                    </span>
                </div>
                <div className='flex gap-10 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-center'>
                    <FaAmazon color='#ff9900' size={50}/>
                    <span className='text-white'>
                        <h2 className='leading-tight'>Software engineer, Amazon</h2>
                        <p className='text-sm leading-tight font-thin'>Sept 2023,present</p>
                        <ul className='text-sm p-2'>
                            <li>-work as a software developer</li>
                            <li>-senior sde</li>
                            <li></li>
                        </ul>

                    </span>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Experience