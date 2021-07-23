import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout/Layout';
import ListProjectEntry from '../components/Projects/ListProjectEntry';
import { API_URL } from '../config';
import { getAllProjects } from '../lib/api';

export default function Projects({ data, error, href }) {
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
    <Layout>
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
