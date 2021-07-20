import React from 'react';
import TopBar from '../TopBar/TopBar';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>
      <TopBar />
      <div className="header-top">
        <div
          className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block"
          role="banner"
        >
          <div className="container">
            <div className="d-flex align-items-center">
              <div className="mr-auto">
                <nav
                  className="site-navigation position-relative text-right"
                  role="navigation"
                >
                  <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                    <li className="active">
                      <Link href="/">
                        <a className="nav-link text-left">HOME</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/precedings">
                        <a className="nav-link text-left">PRECEDINGS</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/projects">
                        <a className="nav-link text-left">PROJECTS</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact">
                        <a className="nav-link text-left">CONTACT</a>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
