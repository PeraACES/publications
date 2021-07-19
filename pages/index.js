import Link from 'next/link';
import CardProjectEntry from '../components/Projects/CardProjectEntry';
import ListProjectEntry from '../components/Projects/ListProjectEntry';
import SmallProjectEntry from '../components/Projects/SmallProjectEntry';
import { API_URL } from '../config';

const Home = ({ home_page, error }) => {
  // console.log("hello")
  const { featured_proceedings, featured_projects, recent_projects, header, body } =
    home_page;

  const featuredProject = featured_projects[0];
  const featuredProjects = featured_projects.slice(1);
  console.log(!!featuredProjects && Array.isArray(featuredProjects));
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <>
      <div className="site-section py-0" id="section1">
        <div className="owl-carousel hero-slide owl-style">
          <div className="site-section">
            <div className="container">
              <div className="half-post-entry d-block d-lg-flex bg-light">
                {/* <a href="post-single.html"><img src={home_page.featured_proceedings[0].image.url} alt="Image" className="img-bg" /></a> */}
                <div className="contents">
                  <span className="caption">{home_page.body[0].subtitle}</span>
                  <h2>
                    <a href="blog-single.html">{home_page.body[0].title}</a>
                  </h2>
                  <p className="mb-3">{home_page.body[0].content}</p>
                  <a href="https://aces.ce.pdn.ac.lk/">
                    <button>{home_page.body[0].buttons[0].title}</button>
                  </a>
                  <a href="https://aces.ce.pdn.ac.lk/escape/">
                    <button>{home_page.body[0].buttons[1].title}</button>
                  </a>
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
                    src={home_page.featured_proceedings[0].image.url}
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
                  <p className="mb-3">{home_page.featured_proceedings[0].markup}</p>
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
                    src={home_page.featured_proceedings[1].image.url}
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
                  <p className="mb-3">{home_page.featured_proceedings[1].markup}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="row">
                <div class="col-12">
                  <div class="section-title">
                    <h2>Featured Projects</h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  {!!featuredProject && (
                    <CardProjectEntry
                      id={featuredProject.id}
                      abstract={featuredProject.Abstract}
                      name={featuredProject.ProjectName}
                      image={featuredProject.ProjectImage1}
                      createdAt={featuredProject.createdAt}
                    />
                  )}
                </div>
                <div class="col-md-6">
                  {!!featuredProjects &&
                    Array.isArray(featuredProjects) &&
                    featuredProjects.map((item) => (
                      <SmallProjectEntry
                        id={item.id}
                        abstract={item.Abstract}
                        name={item.ProjectName}
                        image={item.ProjectImage1}
                        createdAt={item.createdAt}
                      />
                    ))}
                  <p>
                    <Link href="/projects">
                      <a class="more">
                        See All Projects <span class="icon-keyboard_arrow_right"></span>
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="section-title">
                <h2>Recent Projects</h2>
              </div>
              {!!recent_projects &&
                Array.isArray(recent_projects) &&
                recent_projects.map((item) => (
                  <ListProjectEntry
                    id={item.id}
                    abstract={item.Abstract}
                    name={item.ProjectName}
                    image={item.ProjectImage1}
                    createdAt={item.createdAt}
                  />
                ))}
              <p>
                <Link href="/projects">
                  <a class="more">
                    See All Projects <span class="icon-keyboard_arrow_right"></span>
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

Home.getInitialProps = async (ctx) => {
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
    console.log(home_page);
    return { home_page };
  } catch (error) {
    return { error };
  }
};

export default Home;
