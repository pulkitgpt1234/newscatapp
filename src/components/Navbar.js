import React from 'react'
import { Link } from 'react-router-dom'

function Navbar(props){
    return (
        <div >
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode==='light'?"light":"dark"} bg-${props.mode==='light'?"light":"dark"} border border-${props.mode==='light'?"dark":"light"}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NewsCAT</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                    <li className='nav-item'><Link className="nav-link" to="/business">Business</Link></li>
                    <li className='nav-item'><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                    <li className='nav-item'><Link className="nav-link" to="/health">Health</Link></li>
                    <li className='nav-item'><Link className="nav-link" to="/science">Science</Link></li>
                    <li className='nav-item'><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className='nav-item'><Link className="nav-link" to="/technology">Technology</Link></li>
                </ul>
                <div className={`form-check form-switch text-${props.mode==='light'?"dark":"light"}`} >
                    <input className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
                </div>
            </div>
            </nav>
      </div>
    )
    //fixed-top bootstrap class used
}

export default Navbar
