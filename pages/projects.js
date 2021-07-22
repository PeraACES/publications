// import { useEffect, useState } from 'react';
import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout/Layout';
// import { useRouter, withRouter } from 'next/router';
// import Link from 'next/link';
import ListProjectEntry from '../components/Projects/ListProjectEntry';
import { API_URL } from '../config';
import { getAllProjects } from '../lib/api';

// pagination url with filters
// /projects?_limit=5&_start=0 // for first 5 items
// /projects?_limit=10&_start=0 // for first 10 items

// const pageSize = 5;

export default function Projects({ data, error, href }) {
  const { projects } = data;

  // const [page, setPage] = useState(null);

  // const router = useRouter();
  // console.log(href, router, router.query);
  // // const { projects, count } = data;

  // useEffect(() => {
  //   const { query } = router;
  //   console.log('router hook', query.page, !router.query.page && page === null);
  //   if (!router.query.page && page === null) {
  //     console.log('query.page not found');
  //     router.query['page'] = 1;
  //     router.push(router.pathname + '?page=1');
  //   } else if (page === null) {
  //     console.log('setPage', query);
  //     setPage(query.page);
  //   }
  // }, [router]);

  // useEffect(() => {
  //   console.log('page', page);
  // }, [page]);

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
