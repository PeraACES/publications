import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout/Layout';
import ListProceedingEntry from '../components/Proceedings/ListProceedingEntry';
import { API_URL } from '../config';
import { getAllProceedings } from '../lib/api';

export default function Proceedings({ data, error, href }) {
  const { proceedings } = data;

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
