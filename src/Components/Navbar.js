import React from 'react'
import "./style.css";

export const Navbar = () => {
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary "> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{'fontFamily':'cursive'}}>
                <div className="container-fluid">
                    <a className="navbar-brand mx-5" href="/">Nishant</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-item" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/aboutus">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/skills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/experience">Experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contactus">Contact Us</a>
                            </li>   
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
