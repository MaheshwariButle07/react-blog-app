import "./Navbar.css"

import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className="nb-container">
        <Link to="/" className="nb-item">Home</Link>
        <Link to="/about" className="nb-item">About</Link>
        <Link to="/contact" className="nb-item">Contact</Link>
        <Link to="/services" className="nb-item">Services</Link>
      </div>
    </>
  )
}

export default Navbar