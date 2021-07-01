import React from 'react'
import TopBar from '../TopBar/TopBar'
import Link from 'next/link'

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
                                            <a href="/" className="nav-link text-left">Home</a>
                                        </li>
                                        <li>
                                            <a href="/precedings" className="nav-link text-left">Precedings</a>
                                        </li>
                                        <li>
                                            <a href="projects" className="nav-link text-left">Projects</a>
                                        </li>
                                        <li>
                                        <Link href="/contact"><a className="nav-link text-left">Contact us</a></Link>
                                        </li>
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
