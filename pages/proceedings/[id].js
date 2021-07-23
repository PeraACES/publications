import { API_URL } from '../../config';
import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';

export async function getStaticPaths() {
  const res = await fetch(API_URL + '/proceedings');
  const data = await res.json();

  const paths = data.map((proceedings) => {
    return {
      params: { id: proceedings.id.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const proceedings = await fetch(API_URL + `/proceedings/${id}`);
  const proceedingsData = await proceedings.json();

  return {
    props: {
      proceedings: proceedingsData
    }
  };
};

const Details = ({ proceedings }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <span className="caption d-block small">Categories</span>
            <h2>Proceedings</h2>
          </div>
          <div className="post-entry-2 d-flex">
            <img
              width="100%"
              height="100%"
              src={proceedings.image.url}
              alt="Image"
              className="thumbnail order-md-2"
            />
            <div className="contents order-md-1 pl-0">
              <h2>
                <a href="blog-single.html">{proceedings.title}</a>
              </h2>
              <h3 className="mb-4">{proceedings.Theme}</h3>
              <p className="mb-4">{proceedings.markup}</p>
              <h2>Symposium Chair</h2>
              <div className="col-lg-6">
                <div className="post-entry-2 d-flex">
                  <div className="col-md-8">
                    <div className="post-entry-1">
                      <img
                        width="70"
                        height="70"
                        src={proceedings.SymposiumChair.SupervisorImage.url}
                        alt="Image"
                        className="img-fluid"
                      />
                      <h2>
                        <a href="blog-single.html">
                          {proceedings.SymposiumChair.SupervisorName}
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <h2>Symposium Editors</h2>
              <div className="col-lg-6">
                <div className="post-entry-2 d-flex">
                  {proceedings.SymposiumEditors.map((editor) => (
                    <div className="col-md-8">
                      <div className="post-entry-1">
                        <img
                          width="70"
                          height="70"
                          src={editor.SupervisorImage.url}
                          alt="Image"
                          className="img-fluid"
                        />
                        <h2>
                          <a href="blog-single.html">{editor.SupervisorName}</a>
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <PDFViewer
                  document={{
                    url: proceedings.ProceedingPDFUrl
                  }}
                  navbarOnTop={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
