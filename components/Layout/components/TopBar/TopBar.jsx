import React from 'react';

export default function TopBar() {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 d-flex">
            <img src="images/aces_logo.jpg" alt="Image" className="escape-logo" />
            <a href="index.html" className="site-logo">
              ESCaPe Publications
            </a>

            <a
              href="#"
              className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"
            >
              <span className="icon-menu h3"></span>
            </a>
          </div>
          <div className="col-12 col-lg-6 ml-auto d-flex">
            <div class="ml-md-auto top-social d-none d-lg-inline-block">
              <a
                href="https://www.facebook.com/aces.symposium/"
                target="_blank"
                class="d-inline-block p-3"
              >
                <span class="icon-facebook"></span>
              </a>
              <a
                href="https://www.linkedin.com/company/aces-association-of-computer-engineering-students/"
                target="_blank"
                class="d-inline-block p-3"
              >
                <span class="icon-linkedin"></span>
              </a>
              <a
                href="http://aces.ce.pdn.ac.lk/"
                target="_blank"
                class="d-inline-block p-3"
              >
                <span class="icon-dribbble"></span>
              </a>
              {/* <a href="#" class="d-inline-block p-3"><span class="icon-twitter"></span></a>
                            <a href="#" class="d-inline-block p-3"><span class="icon-instagram"></span></a> */}
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
          <div className="col-6 d-block d-lg-none text-right"></div>
        </div>
      </div>
    </div>
  );
}
