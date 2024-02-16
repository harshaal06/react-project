import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar bg-black fs-4 d-flex justify-content-between text-white">
        <div className="fs-3 fw-bold">Harshal</div>
        <div className="">
            <Link to="/" className="text-white text-decoration-none mx-4">Home</Link>
            <Link to="/project" className="text-white text-decoration-none mx-4">Project</Link>
            <Link to="/quant" className="text-white text-decoration-none mx-4">Quant</Link>
            <Link to="/todo" className="text-white text-decoration-none mx-4">Todo</Link>
            <Link to="/contact" className="text-white text-decoration-none mx-4">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar