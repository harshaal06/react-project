import React from 'react'
import './ProjectCard.css'
import { Link } from 'react-router-dom'

function ProjectCard({ id, imge, title, description, lang, live}) {
  return (
    <div className='project-card bg-dark-subtle shadow border border-2 border-dark text-center px-4 py-3 rounded-5 my-4'>
      <img src={imge} className='w-100 h-75 rounded-5 border border-dark' />
      <Link to={`/projectmore/${id}`} className='text-decoration-none text-black'><h2 className='m-2'>{title.substring(0, 15)}{title.length > 15 ? "..." : null}</h2></Link>
      <div className='my-2'>
        <button className='rounded-5 border border-dark border-2 py-2 px-4 mx-3 fw-bold'>Github 😺</button>
        <Link to={`${live}`}><button className='rounded-5 border border-dark border-2 py-2 px-4 mx-3 fw-bold'>Live - ↗️</button></Link>
      </div>
    </div>
  )
}

export default ProjectCard