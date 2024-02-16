import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="Footer bg-black fs-4 text-white d-flex flex-column">
      <Link to="/" className="text-white text-decoration-none my-3">Home</Link>
      <Link to="/project" className="text-white text-decoration-none my-3">Project</Link>
      <Link to="/quant" className="text-white text-decoration-none my-3">Quant</Link>
      <Link to="/todo" className="text-white text-decoration-none my-3">Todo</Link>
      <Link to="/contact" className="text-white text-decoration-none my-3">Contact</Link>
    </div>
  )
}

export default Footer