import React from 'react';
import Link from '../Link/Link';

const assetPrefix = process.env.ASSET_PREFIX;

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
      <div className="header-top">
        <div className="container pb-0 pt-1">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 d-flex">
              <Link href="/">
                <a className="site-logo">
                  <img
                    src={`${assetPrefix}/images/aces-logo-vector.png`}
                    alt="aces-logo"
                    className="escape-logo"
                  />
                  ESCaPe Publications
                </a>
              </Link>
              <a
                href="#"
                className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
              >
                <span className="icon-menu h3"></span>
              </a>
            </div>
            {/* <div className="col-12 col-lg-6 ml-auto d-flex">
            <div className="ml-md-auto top-social d-none d-lg-inline-block">
              <a
                href="https://www.facebook.com/aces.symposium/"
                target="_blank"
                className="d-inline-block p-3"
              >
                <span className="icon-facebook"></span>
              </a>
              <a
                href="https://www.linkedin.com/company/aces-association-of-computer-engineering-students/"
                target="_blank"
                className="d-inline-block p-3"
              >
                <span className="icon-linkedin"></span>
              </a>
              <a
                href="http://aces.ce.pdn.ac.lk/"
                target="_blank"
                className="d-inline-block p-3"
              >
                <span className="icon-dribbble"></span>
              </a>
            </div>
            <form action="#" className="search-form d-inline-block">
              <div className="d-flex">
                <input type="text" className="form-control" placeholder="Search..." />
                <button type="submit" className="btn btn-secondary">
                  <span className="icon-search"></span>
                </button>
              </div>
            </form>
          </div>
          <div className="col-6 d-block d-lg-none text-right"></div> */}
          </div>
        </div>
      </div>
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
                      <Link href="/proceedings">
                        <a className="nav-link text-left">PROCEEDINGS</a>
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
