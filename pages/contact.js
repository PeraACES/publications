import React from 'react';
import fetch from 'isomorphic-fetch';
import { API_URL } from '../config';
import Layout from '../components/Layout/Layout';
import { getContactPageData } from '../lib/api';

const Contact = ({ data, error }) => {
  const { header, body } = data;
  console.log(data);
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  return (
    <Layout>
      <div className="site-section bg-light" id="Contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>{header.title}</h2>
                <h3>{body[0].title}</h3>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <p className="mb-3">{body[0].list[0].title}</p>
                  <p className="mb-3">{body[0].list[0].subtitle}</p>
                  <p className="mb-3">{body[0].list[0].content}</p>
                </div>
                <div className="col-md-6 form-group">
                  <p className="mb-3">{body[0].list[1].title}</p>
                  <p className="mb-3">{body[0].list[1].subtitle}</p>
                  <p className="mb-3">{body[0].list[1].content}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <p className="mb-3">{body[0].list[2].subtitle}</p>
                  <p className="mb-3">{body[0].list[2].title}</p>
                  <p className="mb-3">{body[0].list[2].content}</p>
                </div>
              </div>
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
