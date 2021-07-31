import { useRouter } from 'next/dist/client/router';
import ErrorPage from 'next/error';
import { getAllProjectSlugs, getProjectBySlug } from '../../lib/api';
import Layout from '../../components/Layout/Layout';
import ReactMarkdown from 'react-markdown';
import Supervisor from '../../components/Common/Supervisor';
import Author from '../../components/Common/Author';

const Details = ({ project }) => {
  // console.log(project);
  const router = useRouter();

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return (
      <Layout>
        <div className="site-section" style={{ paddingBottom: '1rem' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <h2>Loading ...</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={project.ProjectName}>
      <div className="site-section" style={{ paddingBottom: '1rem' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>{project.ProjectName}</h2>
              </div>
              <div className="post-entry-2 d-flex">
                {!!project.ProjectImage1 && (
                  <img
                    width="100%"
                    height="100%"
                    src={project.ProjectImage1.url}
                    alt="Image"
                    className="thumbnail order-md-1 mr-5"
                  />
                )}

                <div className="contents order-md-2 pl-0 pt-0">
                  <h2>Supervisors</h2>
                  <div className="col-lg-6">
                    <div className="post-entry-2 d-flex">
                      {project.supervisors.map((supervisor) => (
                        <Supervisor
                          key={supervisor.id}
                          id={supervisor.id}
                          image={supervisor.SupervisorImage}
                          link={supervisor.link}
                          alt={supervisor.SupervisorName}
                          name={supervisor.SupervisorName}
                        />
                      ))}
                    </div>
                  </div>
                  <h2>Authors</h2>
                  <div className="col-lg-6">
                    <div className="post-entry-2 d-flex">
                      {project.authors.map((author) => (
                        <Author
                          key={author.id}
                          id={author.id}
                          image={author.AuthorImage}
                          alt={author.AuthorName}
                          name={author.AuthorName}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg"
                style={{
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  WebkitUserSelect: 'none',
                  userSelect: 'none'
                }}
              >
                {!!project.Abstract && <ReactMarkdown>{project.Abstract}</ReactMarkdown>}
              </div>
              <div></div>
            </div>
            {!!project.ProjectPortfolioLink && (
              <>
                <div className="row">
                  <div className="col mr-5">
                    <p>
                      <a
                        href={project.ProjectPortfolioLink}
                        className="more"
                        target="_blank"
                        rel="noreferrer"
                      >
                        More Information
                        <span className="icon-keyboard_arrow_right"></span>
                      </a>
                    </p>
                  </div>
                </div>
                <br />
              </>
            )}
            {!!project.GithubRepoLink && (
              <div className="row">
                <div className="col">
                  <p>
                    <a
                      href={project.GithubRepoLink}
                      className="more"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Repository{' '}
                      <span className="icon-keyboard_arrow_right"></span>
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const data = await getProjectBySlug(params.slug);
  // console.log(data);
  return {
    props: {
      project: data
    }
  };
}

export async function getStaticPaths() {
  const slugs = await getAllProjectSlugs();
  return {
    paths: slugs?.map((slug) => `/projects/${slug}`) || [],
    fallback: false
  };
}

export default Details;
