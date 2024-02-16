import React from 'react'
import arrowIcon from './arrow.png';

function TaskCard({task,i}) {
  return (
    <div key={i} className='bg-body-secondary rounded-4 my-3 py-2 d-flex align-items-center shadow-sm'>
        <img src={arrowIcon} alt='add' className='arr-icon mx-3' />
        <h4>{task}</h4>
    </div>
)
}

export default TaskCard