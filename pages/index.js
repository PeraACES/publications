// import Link from 'next/link'
// import Section1 from '../components/Layout/components/Section1/Section1';
// import Section2 from '../components/Layout/components/Section2/Section2';

// export default function Home() {
//   return (
//     <>
//       <Section1 />
//       <Section2 />
//     </>
//   );
// }

import React from 'react'
import { API_URL } from '../config';

const Home = ({home_pages, error}) => {
  // console.log("hello")
  //console.log(home_pages)
  // console.log(home_pages.featured_proceedings)
  if (error) {
      return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className="site-section py-0" id="section1">
            <div className="owl-carousel hero-slide owl-style">
                <div className="site-section">
                    <div className="container">
                        <div className="half-post-entry d-block d-lg-flex bg-light">
                            {/* <a href="post-single.html"><img src={home_pages.featured_proceedings[0].image.url} alt="Image" className="img-bg" /></a> */}
                            <div className="contents">
                                <span className="caption">{home_pages.body[0].subtitle}</span>
                                <h2><a href="blog-single.html">{home_pages.body[0].title}</a></h2>
                                <p className="mb-3">{home_pages.body[0].content}</p>
                                <a href="https://aces.ce.pdn.ac.lk/"><button >{home_pages.body[0].buttons[0].title}</button></a>
                                <a href="https://aces.ce.pdn.ac.lk/escape/"><button>{home_pages.body[0].buttons[1].title}</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="half-post-entry d-block d-lg-flex bg-light">
                            {/* <div className="img-bg" style={{backgroundImage: `url(require('images/big_img_1.jpg'))`}}></div> */}
                            <a href="post-single.html"><img src={home_pages.featured_proceedings[0].image.url} alt="Image" className="img-bg" /></a>
                            <div className="contents">
                                <span className="caption">{home_pages.featured_proceedings[0].subtitle}</span>
                                <h2><a href="blog-single.html">{home_pages.featured_proceedings[0].title}</a></h2>
                                <p className="mb-3">{home_pages.featured_proceedings[0].markup}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <div className="half-post-entry d-block d-lg-flex bg-light">
                            {/* <div className="img-bg" style={{backgroundImage: `url(require('images/big_img_1.jpg'))`}}></div> */}
                            <a href="post-single.html"><img src={home_pages.featured_proceedings[1].image.url} alt="Image" className="img-bg" /></a>
                            <div className="contents">
                                <span className="caption">{home_pages.featured_proceedings[1].subtitle}</span>
                                <h2><a href="blog-single.html">{home_pages.featured_proceedings[1].title}</a></h2>
                                <p className="mb-3">{home_pages.featured_proceedings[1].markup}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

Home.getInitialProps = async ctx => {
  try {
      // Parses the JSON returned by a network request
      const parseJSON = resp => (resp.json ? resp.json() : resp);
      // Checks if a network request came back fine, and throws an error if not
      const checkStatus = resp => {
          if (resp.status >= 200 && resp.status < 300) {
              return resp;
          }
  
          return parseJSON(resp).then(resp => {
              throw resp;
          });
      };
  
      const headers = {
          'Content-Type': 'application/json',
      };
  
      const home_pages = await fetch(API_URL+'/home-page', {
          method: 'GET',
          headers,
      })
          .then(checkStatus)
          .then(parseJSON);
  
      return { home_pages };
  } catch (error) {
      return { error };
  }
};

export default Home;



