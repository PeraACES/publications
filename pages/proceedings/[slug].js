import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import ErrorPage from 'next/error';
import { getAllProceedingSlugs, getProceedingBySlug } from '../../lib/api';
import Layout from '../../components/Layout/Layout';
import SingleProceedingEntry from '../../components/Proceedings/SingleProceedingEntry';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Details = ({ proceeding }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    if (pageNumber > 0) setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }
  // console.log(project);
  const router = useRouter();

  if (!router.isFallback && !proceeding?.slug) {
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
    <Layout title={proceeding.title}>
      <div className="site-section" style={{ paddingBottom: '1rem' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>{proceeding.title}</h2>
              </div>
              <div className="post-entry-2 d-flex">
                <img
                  width="100%"
                  height="100%"
                  src={proceeding.image.url}
                  alt="Image"
                  className="thumbnail order-md-1 mr-5"
                />
                <div className="contents order-md-2 pl-0 pt-0">
                  <h2>Symposium Chair</h2>
                  <div className="col-lg-6">
                    <div className="post-entry-2 d-flex">
                      <div className="col-md-8" key={proceeding.SymposiumChair.id}>
                        <div className="post-entry-1">
                          {!!proceeding.SymposiumChair.SupervisorImage && (
                            <img
                              width="70"
                              height="70"
                              src={proceeding.SymposiumChair.SupervisorImage.url}
                              alt="Image"
                              className="img-fluid"
                            />
                          )}

                          <h2>
                            {!!proceeding.SymposiumChair.link ? (
                              <a
                                href={proceeding.SymposiumChair.link}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {proceeding.SymposiumChair.SupervisorName}
                              </a>
                            ) : (
                              <p>{proceeding.SymposiumChair.SupervisorName}</p>
                            )}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h2>Symposium Editors</h2>
                  <div className="col-lg-6">
                    <div className="post-entry-2 d-flex">
                      {proceeding.SymposiumEditors.map((editors) => (
                        <div className="col-md-8" key={editors.id}>
                          <div className="post-entry-1">
                            {!!editors.SupervisorImage && (
                              <img
                                width="70"
                                height="70"
                                src={editors.SupervisorImage.url}
                                alt="Image"
                                className="img-fluid"
                              />
                            )}

                            <h2>
                              {!!editors.link ? (
                                <a href={editors.link} target="_blank" rel="noreferrer">
                                  {editors.SupervisorName}
                                </a>
                              ) : (
                                <p>{editors.SupervisorName}</p>
                              )}
                            </h2>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg">
                {!!proceeding.markup && (
                  <ReactMarkdown>{proceeding.markup}</ReactMarkdown>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="mt-5 row justify-content-center">
            <div className="col-8">
              <Document
                file={proceeding.ProceedingPDFUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                className="row justify-content-center border"
              >
                <Page
                  pageNumber={pageNumber}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                />
              </Document>
              <div className="text-center">
                <p>
                  Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <button
                  className="btn btn-light btn-sm mr-3"
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                >
                  Previous
                </button>
                <button
                  className="btn btn-light btn-sm"
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  const data = await getProceedingBySlug(params.slug);
  // console.log(data);
  return {
    props: {
      proceeding: data
    }
  };
}

export async function getStaticPaths() {
  const slugs = await getAllProceedingSlugs();
  return {
    paths: slugs?.map((slug) => `/proceedings/${slug}`) || [],
    fallback: false
  };
}

export default Details;
