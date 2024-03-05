import React from 'react'
import { Link } from 'react-router-dom'

function ProjectInfo({id,imge,title,description,lang}) {
  return (
        <div className='row border border-2 w-75 h-100 my-4 mx-auto p-4'>
          <img src={imge} className='col-5'/>
          <div className='col-7'>
            <h1 className='fs-2 fw-bold my-3'>{title}</h1>
            <p className='fs-4 fst-italic my-3'>📌 {lang}</p>
            <p className='me-4 text-js'>{description}<br></br>
            <Link to="/project" className=' text-decoration-none fw-bolder fst-italic fs-4'>Read Less</Link></p>
          </div>
        </div>
  )
}

export default ProjectInfo