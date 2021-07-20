import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import CardProjectEntry from '../components/Projects/CardProjectEntry';
import ListProjectEntry from '../components/Projects/ListProjectEntry';
import SmallProjectEntry from '../components/Projects/SmallProjectEntry';
import { API_URL } from '../config';

const Home = ({ home_page, error }) => {
  const { featured_proceedings, featured_projects, recent_projects, header, body } =
    home_page;

  const featuredProject = featured_projects[0];
  const featuredProjects = featured_projects.slice(1);

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <>
      <div className="site-section" style={{ paddingBottom: '1rem' }}>
        <div className="container">
          <div className="row">
            <div className="col text-left">
              {!!header.title && (
                <div className="section-title" style={{ marginBottom: '10px' }}>
                  <h2>{header.title}</h2>
                </div>
              )}
              {!!header.subtitle && (
                <div className="text-black">
                  <h5>{header.subtitle}</h5>
                </div>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col text-center py-5">
              {!!header.button &&
                Array.isArray(header.button) &&
                header.button.map((item) => (
                  <Link href={item.link} key={item.title}>
                    <a className={`btn btn-${item.color} mr-4`} role="button">
                      {item.title}
                    </a>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="site-section py-0" id="section1">
        <div className="owl-carousel hero-slide owl-style">
          <div className="site-section">
            <div className="container">
              <div className="half-post-entry d-block d-lg-flex bg-light">
                {/* <div className="img-bg" style={{backgroundImage: `url(require('images/big_img_1.jpg'))`}}></div> */}
                <a href="post-single.html">
                  <img
                    src={home_page.featured_proceedings[0].image.formats.small.url}
                    alt="Image"
                    className="img-bg"
                  />
                </a>
                <div className="contents">
                  <span className="caption">
                    {home_page.featured_proceedings[0].subtitle}
                  </span>
                  <h2>
                    <a href="blog-single.html">
                      {home_page.featured_proceedings[0].title}
                    </a>
                  </h2>
                  <ReactMarkdown>
                    {home_page.featured_proceedings[0].markup}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section">
            <div className="container">
              <div className="half-post-entry d-block d-lg-flex bg-light">
                {/* <div className="img-bg" style={{backgroundImage: `url(require('images/big_img_1.jpg'))`}}></div> */}
                <a href="post-single.html">
                  <img
                    src={home_page.featured_proceedings[1].image.formats.small.url}
                    alt="Image"
                    className="img-bg"
                  />
                </a>
                <div className="contents">
                  <span className="caption">
                    {home_page.featured_proceedings[1].subtitle}
                  </span>
                  <h2>
                    <a href="blog-single.html">
                      {home_page.featured_proceedings[1].title}
                    </a>
                  </h2>
                  <ReactMarkdown>
                    {home_page.featured_proceedings[0].markup}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="section-title">
                    <h2>Featured Projects</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  {!!featuredProject && (
                    <CardProjectEntry
                      key={featuredProject.id}
                      id={featuredProject.id}
                      abstract={featuredProject.Abstract}
                      name={featuredProject.ProjectName}
                      image={featuredProject.ProjectImage1}
                      createdAt={featuredProject.createdAt}
                    />
                  )}
                </div>
                <div className="col-md-6">
                  {!!featuredProjects &&
                    Array.isArray(featuredProjects) &&
                    featuredProjects.map((item) => (
                      <SmallProjectEntry
                        key={item.id}
                        id={item.id}
                        abstract={item.Abstract}
                        name={item.ProjectName}
                        image={item.ProjectImage1}
                        createdAt={item.createdAt}
                      />
                    ))}
                  <p>
                    <Link href="/projects">
                      <a className="more">
                        See All Projects{' '}
                        <span className="icon-keyboard_arrow_right"></span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="section-title">
                <h2>Recent Projects</h2>
              </div>
              {!!recent_projects &&
                Array.isArray(recent_projects) &&
                recent_projects.map((item) => (
                  <ListProjectEntry
                    key={item.id}
                    id={item.id}
                    abstract={item.Abstract}
                    name={item.ProjectName}
                    image={item.ProjectImage1}
                    createdAt={item.createdAt}
                  />
                ))}
              <p>
                <Link href="/projects">
                  <a className="more">
                    See All Projects <span className="icon-keyboard_arrow_right"></span>
                  </a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  try {
    // Parses the JSON returned by a network request
    const parseJSON = (resp) => (resp.json ? resp.json() : resp);
    // Checks if a network request came back fine, and throws an error if not
    const checkStatus = (resp) => {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }

      return parseJSON(resp).then((resp) => {
        throw resp;
      });
    };

    const headers = {
      'Content-Type': 'application/json'
    };

    const home_page = await fetch(API_URL + '/home-page', {
      method: 'GET',
      headers
    })
      .then(checkStatus)
      .then(parseJSON);
    // console.log(home_page);
    return { props: { home_page } };
  } catch (error) {
    return { error };
  }
}

export default Home;
