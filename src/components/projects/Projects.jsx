import React from 'react'
import Projectcard from './Projectcard'

const Projects = () => {
  return (
    <div id='projects' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5'>
            <Projectcard title="Blogging website" main="This is blogging website."/>
            <Projectcard title="Portfolio website" main="This is portfolio website."/>
            <Projectcard title="Barber shop website" main="This is barber shop website."/>
        </div>
    </div>
  )
}

export default Projects