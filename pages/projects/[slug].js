import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import ErrorPage from 'next/error';
import { getAllProjectSlugs, getProjectBySlug } from '../../lib/api';
import Layout from '../../components/Layout/Layout';

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
                {/* <span className="caption d-block small">Categories</span> */}
                <h2>{project.ProjectName}</h2>
              </div>
              <div className="post-entry-2 d-flex">
                <img
                  width="100%"
                  height="100%"
                  src={project.ProjectImage1.url}
                  alt="Image"
                  className="thumbnail order-md-2"
                />
                <div className="contents order-md-1 pl-0">
                  <p className="mb-4">{project.Abstract}</p>
                  <h2>Supervisors</h2>
                  <div className="col-lg-6">
                    <div className="post-entry-2 d-flex">
                      {project.supervisors.map((supervisor) => (
                        <div className="col-md-8">
                          <div className="post-entry-1">
                            <img
                              width="70"
                              height="70"
                              src={supervisor.SupervisorImage.url}
                              alt="Image"
                              className="img-fluid"
                            />
                            <h2>
                              <a href="blog-single.html">{supervisor.SupervisorName}</a>
                            </h2>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <h2>Authors</h2>
                  <div className="col-lg-6">
                    <div className="post-entry-2 d-flex">
                      {project.authors.map((author) => (
                        <div className="col-md-8">
                          <div className="post-entry-1">
                            <img
                              width="70"
                              height="70"
                              src={author.AuthorImage.url}
                              alt="Image"
                              className="img-fluid"
                            />
                            <h2>
                              <a href="blog-single.html">{author.AuthorName}</a>
                            </h2>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="post-entry-2 d-flex">
                      <div className="col-md-8">
                        <div className="post-entry-1">
                          <Link href={project.GithubRepoLink}>
                            <input
                              type="submit"
                              value="Github Repo"
                              className="btn-2 btn-primary py-2 px-8"
                            />
                          </Link>
                        </div>
                      </div>

                      <div className="col-md-8">
                        <div className="post-entry-1">
                          <Link href={project.ProjectPortfolioLink}>
                            <input
                              type="submit"
                              value="Portfolio"
                              className="btn-2 btn-primary py-2 px-8"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    fallback: true
  };
}

export default Details;
