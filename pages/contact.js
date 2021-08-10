import Link from 'next/link';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout/Layout';
import { getContactPageData } from '../lib/api';

const Contact = ({ data, error }) => {
  const { header, body, seo, seoMetas } = data;

  const textBlock = body[0];
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <Layout title={'Contact | ACES ESCaPe Publications'} seo={seo} seoMetas={seoMetas}>
      <div className="site-section bg-light" id="Contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>{header.title}</h2>
                <h4>{textBlock.title}</h4>
              </div>
              <div className="row">
                {!!textBlock.list &&
                  Array.isArray(textBlock.list) &&
                  textBlock.list.map((listItem) => (
                    <div
                      className="col-12 col-sm-12 col-md-6 text-center p-3"
                      style={{ paddingBottom: '1rem' }}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col text-left">
                            {!!listItem.title && (
                              <div
                                className="section-title"
                                style={{ marginBottom: '10px' }}
                              >
                                <h4>{listItem.title}</h4>
                              </div>
                            )}
                            {!!listItem.subtitle && (
                              <div className="text-black">
                                <h5>{listItem.subtitle}</h5>
                              </div>
                            )}
                            {!!listItem.content && (
                              <ReactMarkdown>{listItem.content}</ReactMarkdown>
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col text-center py-5">
                            {!!listItem.buttons &&
                              Array.isArray(listItem.buttons) &&
                              listItem.buttons.map((item) => (
                                <Link href={item.link} key={item.title}>
                                  {item.type === 'external' ? (
                                    <a
                                      className={`btn btn-${item.color} m-2`}
                                      role="button"
                                      target="_blank"
                                      rel="noreferrer noopener"
                                    >
                                      {item.title}
                                    </a>
                                  ) : (
                                    <a
                                      className={`btn btn-${item.color} m-2`}
                                      role="button"
                                    >
                                      {item.title}
                                    </a>
                                  )}
                                </Link>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              {/* <div className="row">
                <div className="col-md-6 form-group">
                  <p className="mb-3">{body[0].list[2].subtitle}</p>
                  <p className="mb-3">{body[0].list[2].title}</p>
                  <p className="mb-3">{body[0].list[2].content}</p>
                </div>
              </div> */}
              {/* <form method="post">    
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label for="fname">First Name</label>
                        <input type="text" id="fname" className="form-control form-control-lg" />
                    </div>
                    <div className="col-md-6 form-group">
                        <label for="lname">Last Name</label>
                        <input type="text" id="lname" className="form-control form-control-lg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 form-group">
                        <label for="eaddress">Email Address</label>
                        <input type="text" id="eaddress" className="form-control form-control-lg" />
                    </div>
                    <div className="col-md-6 form-group">
                        <label for="tel">Tel. Number</label>
                        <input type="text" id="tel" className="form-control form-control-lg" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 form-group">
                        <label for="message">Message</label>
                        <textarea name="" id="message" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5" />
                    </div>
                </div>              
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getContactPageData();
  // console.log(data);
  return {
    props: {
      data
    }
  };
}

export default Contact;
