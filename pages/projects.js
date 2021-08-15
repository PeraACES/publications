import { useState } from 'react';
import Layout from '../components/Layout/Layout';
import ListProjectEntry from '../components/Projects/ListProjectEntry';
import { getAllProjects } from '../lib/api';

export default function Projects({ data, error, href }) {
  const { projects } = data;
  const [searchValue, setSearchValue] = useState('');

  const filteredProjects = projects.filter((project) => {
    const searchContent = project.ProjectName + project.Abstract;
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  const displayProjects =
    projects.length > 0 && !searchValue ? projects : filteredProjects;

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
    <Layout title={'ACES ESCaPe Projects | University of Peradeniya'}>
      <div className="site-section" style={{ paddingBottom: '1rem' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                {searchValue !== '' ? <h2>Filtered Projects</h2> : <h2>All Projects</h2>}
                <div className="col">
                  <form action="#" className="search-form d-inline-block col">
                    <div className="d-flex">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Search"
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
              </div>
              {!filteredProjects.length && 'No projects found.'}
              {!!displayProjects &&
                Array.isArray(displayProjects) &&
                displayProjects.map((item) => (
                  <ListProjectEntry
                    key={item.id}
                    id={item.id}
                    slug={item.slug}
                    abstract={item.Abstract}
                    name={item.ProjectName}
                    image={item.ProjectImage1}
                    createdAt={item.createdAt}
                    displayButton={true}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  try {
    const projects = await getAllProjects();
    return {
      props: { data: { projects } }
    };
  } catch (error) {
    return { error };
  }
}
