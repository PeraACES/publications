import fetch from 'isomorphic-fetch';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import { API_URL } from '../config';

// pagination url with filters
// /proceedings?_limit=5&_start=0 // for first 5 items
// /proceedings?_limit=10&_start=0 // for first 10 items

const Precedings = ({ proceedings, error }) => {
  //console.log(proceedings)
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              {/* <span className="caption d-block small">Categories</span>
                        <h2>Projects</h2> */}
            </div>
            {proceedings.map((proceedings) => (
              <div key={proceedings.id} className="post-entry-2 d-flex">
                <img
                  width="100%"
                  height="100%"
                  src={`${proceedings.image.url}`}
                  alt="Image"
                  className="thumbnail order-md-2"
                />
                <div className="contents order-md-1 pl-0">
                  <h2>
                    <a href="blog-single.html">{proceedings.title}</a>
                  </h2>
                  <h3 className="mb-3">{proceedings.subtitle}</h3>
                  <p className="mb-3">{proceedings.markup}</p>
                  <div className="row">
                    <div className="col-12">
                      <Link href={'/proceedings/' + proceedings.id}>
                        <input
                          type="submit"
                          value="View More"
                          className="btn-2 btn-primary py-2 px-8"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="row">
                        <div className="col-lg-6">
                            <ul className="custom-pagination list-unstyled">
                            <li><a href="#">1</a></li>
                            <li className="active">2</li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            </ul>
                        </div>
                    </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

Precedings.getInitialProps = async (ctx) => {
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

    const proceedings = await fetch(API_URL + '/proceedings', {
      method: 'GET',
      headers
    })
      .then(checkStatus)
      .then(parseJSON);

    return { proceedings };
  } catch (error) {
    return { error };
  }
};

export default Precedings;
