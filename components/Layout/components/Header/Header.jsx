import React from 'react'
import TopBar from '../TopBar/TopBar'

export default function Header() {
    return (
        <>
            <TopBar />
            <div className="header-top"> 
                <div className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block" role="banner">
                    <div className="container">
                        <div className="d-flex align-items-center">                
                            <div className="mr-auto">
                                <nav className="site-navigation position-relative text-right" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                                    <li className="active">
                                    <a href="#section1" className="nav-link text-left">Home</a>
                                    </li>
                                    <li>
                                    <a href="#section2" className="nav-link text-left">Categories</a>
                                    </li>
                                    <li>
                                    <a href="#section3" className="nav-link text-left">Politics</a>
                                    </li>
                                    <li>
                                    <a href="#section4" className="nav-link text-left">Business</a>
                                    </li>
                                    <li>
                                        <a href="#section5" className="nav-link text-left">Health</a>
                                    </li>
                                    <li><a href="categories.html" className="nav-link text-left">Design</a></li>
                                    <li>
                                    <a href="categories.html" className="nav-link text-left">Sport</a>
                                    </li>
                                    <li><a href="contact.html" className="nav-link text-left">Contact</a></li>
                                </ul>                                                                                                                                                                                                                                                                                         
                                </nav>
                            </div>                
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
