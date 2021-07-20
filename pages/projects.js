import fetch from 'isomorphic-fetch';
import Link from 'next/link';
import ListProjectEntry from '../components/Projects/ListProjectEntry';
import { API_URL } from '../config';

const Projects = ({ data, error }) => {
  const { projects } = data;

  if (error) {
    return (
      <>
        <div className="site-section" style={{ paddingBottom: '1rem' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h2>An error occured!</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>An error occured: {error.message}</div> */}
      </>
    );
  }

  return (
    <div className="site-section" style={{ paddingBottom: '1rem' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>All Projects</h2>
            </div>
            {!!projects &&
              Array.isArray(projects) &&
              projects.map((item) => (
                <ListProjectEntry
                  key={item.id}
                  id={item.id}
                  abstract={item.Abstract}
                  name={item.ProjectName}
                  image={item.ProjectImage1}
                  createdAt={item.createdAt}
                  displayButton={true}
                />
              ))}
            <div className="row">
              <div className="col-lg-6">
                <ul className="custom-pagination list-unstyled">
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li className="active">2</li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

    const projects = await fetch(API_URL + '/projects', {
      method: 'GET',
      headers
    })
      .then(checkStatus)
      .then(parseJSON);

    return { props: { data: { projects } } };
  } catch (error) {
    return { error };
  }
}

export default Projects;
