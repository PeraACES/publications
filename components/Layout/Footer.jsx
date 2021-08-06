import React from 'react';

export default function Footer() {
  return (
    <>
      <div className="site-section subscribe">
        <div className="container">
          {/* <form action="#" className="row align-items-center">
            <div className="col-md-5 mr-auto">
              <h3>Newsletter Subcribe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis
                aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!
              </p>
            </div>
            <div className="col-md-6 ml-auto">
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button type="submit" className="btn btn-secondary">
                  <span className="icon-paper-plane"></span>
                </button>
              </div>
            </div>
          </form> */}
        </div>
      </div>
      <div className="footer bg-black text-white">
        <div className="container">
          <div className="row m-4">
            <div className="col-md-6 col-12">
              <div className="ftco-footer-widget mb-4 text-center">
                <h3 className="ftco-heading-2">Useful Links</h3>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="http://www.ce.pdn.ac.lk/"
                      className="py-2 d-block"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Dept. of Computer Engineering
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://eng.pdn.ac.lk/"
                      className="py-2 d-block"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Faculty of Engineering
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pdn.ac.lk/"
                      className="py-2 d-block"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      University of Peradeniya
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="ftco-footer-widget mb-4 text-center">
                <h3 className="ftco-heading-2">Have Questions?</h3>
                <div className="block-23 m-3">
                  <ul className="list-unstyled text-center">
                    <li>
                      <a
                        href="https://aces.ce.pdn.ac.lk/"
                        className="py-2 d-block text-primary"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        ACES
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="mailto://aces@eng.pdn.ac.lk">
                        <span className="icon icon-envelope m-2"></span>
                        <span className="text-info">aces@eng.pdn.ac.lk</span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a href="mailto://head@ce.pdn.ac.lk">
                        <span className="icon icon-envelope m-2"></span>
                        <span className="text-info">head@ce.pdn.ac.lk</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="copyright">
                <p>
                  Copyright &copy; 2021 ACES, Association of Computer Engineering
                  Students, University of Peradeniya | All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
