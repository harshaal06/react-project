import "./Footer.css"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer bg-dark text-light shadow px-5 py-4">
        <div className="row d-flex justify-content-around">
          <div className="col-md-3 col-sm-12 m-1">
            <p className="fs-1">Heritage Horizon</p>
            <p className="fs-5 fw-light">Get a experience how the royalty lived in the past, several of these palace-turned heritage hotels are a must-visit.</p>
          </div>
          <div className="col-md-2 col-sm-12 m-1">
            <p className="fs-2 m-0">Links</p><hr className="w-50 m-0"/>
            <ul className="fs-5">
              <li className="list-group-item m-2">Home</li>
              <li className="list-group-item m-2">About</li>
              <li className="list-group-item m-2">Services</li>
              <li className="list-group-item m-2">Login/Register</li>
              <li className="list-group-item m-2">Book Tour</li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-12 m-1">
            <p className="fs-2 m-0">Forts Type</p><hr className="w-50 m-0"/>
              <ul className="fs-5">
                <li className="list-group-item m-2">Hill Forts</li>
                <li className="list-group-item m-2">Sea Forts</li>
                <li className="list-group-item m-2">Forest Forts</li>
              </ul>
          </div>
          <div className="col-md-4 col-sm-12 m-1">
            <p className="fs-2 m-0">Contact us</p><hr className="w-50 m-0"/>
            <ul className="fs-5">
                <li className="list-group-item m-2">📌 84, Heritage Horizon, Laxmi Narayan Chowk, Opposite Narayana Residency, Ward No 3, Prasad Colony, Nagpur - 441108</li>
                <li className="list-group-item m-2">📱 +91 8010564343</li>
                <li className="list-group-item m-2">✉️ heritagehorizon@gmail.com</li>
              </ul>
          </div>
        </div>
        <hr className="w-75 mx-auto"/>
        <p className="text-center fs-4">Heritage Horizon</p>
    </div>
  )
}

export default Footer