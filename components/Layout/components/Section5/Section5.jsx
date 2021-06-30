import React from 'react'

export default function Section5() {
    return (
        <div className="site-section" id="section5">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="section-title">
              <h2>Recent News</h2>
            </div>
            <div className="post-entry-2 d-flex">
              {/* <div className="thumbnail order-md-2" style="background-image: url('images/img_h_4.jpg')"></div> */}
              <img src='images/img_h_4.jpg' className="thumbnail order-md-2" />
              <div className="contents order-md-1 pl-0">
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                <div className="post-meta">
                  <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                  <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                </div>
              </div>
            </div>

            <div className="post-entry-2 d-flex">
              {/* <div className="thumbnail order-md-2" style="background-image: url('images/img_h_3.jpg')"></div> */}
              <img src='images/img_h_3.jpg' className="thumbnail order-md-2" />
              <div className="contents order-md-1 pl-0">
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                <div className="post-meta">
                  <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                  <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                </div>
              </div>
            </div>

            <div className="post-entry-2 d-flex">
              {/* <div className="thumbnail order-md-2" style="background-image: url('images/img_h_3.jpg')"></div> */}
              <img src='images/img_h_3.jpg' className="thumbnail order-md-2" />
              <div className="contents order-md-1 pl-0">
                <span className="caption mb-4 d-block">Editor's Pick</span>
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                <div className="post-meta">
                  <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                  <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="section-title">
              <h2>Popular Posts</h2>
            </div>

            <div className="trend-entry d-flex">
              <div className="number align-self-start">01</div>
              <div className="trend-contents">
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <div className="post-meta">
                  <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                  <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                </div>
              </div>
            </div>

            <div className="trend-entry d-flex">
              <div className="number align-self-start">02</div>
              <div className="trend-contents">
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <div className="post-meta">
                  <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                  <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                </div>
              </div>
            </div>

            <div className="trend-entry d-flex">
              <div className="number align-self-start">03</div>
              <div className="trend-contents">
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <div className="post-meta">
                  <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                  <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                </div>
              </div>
            </div>

            <div className="trend-entry d-flex pl-0">
              <div className="number align-self-start">04</div>
              <div className="trend-contents">
                <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                <div className="post-meta">
                  <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                  <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                </div>
              </div>
            </div>
            
            <p>
              <a href="#" className="more">See All Popular <span className="icon-keyboard_arrow_right"></span></a>
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <ul className="custom-pagination list-unstyled">
              <li><a href="#">1</a></li>
              <li className="active">2</li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
}
