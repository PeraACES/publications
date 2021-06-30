import React from 'react'

export default function Home() {
    return (
        <div className="site-section" id="section2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2>Editor's Pick</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="post-entry-1">
                  <a href="post-single.html"><img src="images/img_h_1.jpg" alt="Image" className="img-fluid" /></a>
                  <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi temporibus praesentium neque, voluptatum quam quibusdam.</p>
                  <div className="post-meta">
                    <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                    <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="post-entry-2 d-flex bg-light">
                  <img src='images/img_v_1.jpg' className="thumbnail" />
                  <div className="contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

                <div className="post-entry-2 d-flex">
                  {/* <div className="thumbnail" style={{backgroundImage: `url(require('images/img_v_2.jpg'))`}}></div> */}
                  <img src='images/img_v_2.jpg' className="thumbnail" />
                  <div className="contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>

                <div className="post-entry-2 d-flex">
                  {/* <div className="thumbnail" style={{backgroundImage: `url(require('images/img_v_3.jpg'))`}}></div> */}
                  <img src='images/img_v_3.jpg' className="thumbnail" />
                  <div className="contents">
                    <h2><a href="blog-single.html">News Needs to Meet Its Audiences Where They Are</a></h2>
                    <div className="post-meta">
                      <span className="d-block"><a href="#">Dave Rogers</a> in <a href="#">News</a></span>
                      <span className="date-read">Jun 14 <span className="mx-1">&bullet;</span> 3 min read <span className="icon-star2"></span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="section-title">
              <h2>Trending</h2>
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

            <div className="trend-entry d-flex">
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
              <a href="#" className="more">See All Trends <span className="icon-keyboard_arrow_right"></span></a>
            </p>

          </div>
        </div>
      </div>
    </div>
    )
}
