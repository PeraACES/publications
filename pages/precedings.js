// import { useEffect, useState } from 'react';
import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout/Layout';
// import { useRouter, withRouter } from 'next/router';
// import Link from 'next/link';
import ListProceedingEntry from '../components/Proceedings/ListProceedingEntry';
import { API_URL } from '../config';
import { getAllProceedings } from '../lib/api';

// pagination url with filters
// /projects?_limit=5&_start=0 // for first 5 items
// /projects?_limit=10&_start=0 // for first 10 items

// const pageSize = 5;

export default function Proceedings({ data, error, href }) {
  const { proceedings } = data;
  //console.log(proceedings);

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
    <Layout title={'ACES ESCaPe Precedings | University of Peradeniya'}>
      <div className="site-section" style={{ paddingBottom: '1rem' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>All Proceedings</h2>
              </div>
              {!!proceedings &&
                Array.isArray(proceedings) &&
                proceedings.map((item) => (
                  <ListProceedingEntry
                    key={item.id}
                    id={item.id}
                    slug={item.slug}
                    markup={item.markup}
                    title={item.title}
                    image={item.image}
                    createdAt={item.createdAt}
                    displayButton={true}
                  />
                ))}
              {/* <div className="row">
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
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  try {
    const proceedings = await getAllProceedings();
    return {
      props: { data: { proceedings } }
    };
  } catch (error) {
    return { error };
  }
}
