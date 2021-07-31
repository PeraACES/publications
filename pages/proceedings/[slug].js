import { useRouter } from 'next/dist/client/router';
import ErrorPage from 'next/error';
import { getAllProceedingSlugs, getProceedingBySlug } from '../../lib/api';
import Layout from '../../components/Layout/Layout';
import ReactMarkdown from 'react-markdown';
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Supervisor from '../../components/Common/Supervisor';
import Sponsor from '../../components/Common/Sponsor';

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
                  <div className="container">
                    <div className="row text-center">
                      <div className="col">
                        <h5>Symposium Chair</h5>
                        <div className="row mt-4 justify-content-center">
                          <Supervisor
                            id={proceeding.SymposiumChair.id}
                            image={proceeding.SymposiumChair.SupervisorImage}
                            link={proceeding.SymposiumChair.link}
                            alt={proceeding.SymposiumChair.SupervisorName}
                            name={proceeding.SymposiumChair.SupervisorName}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <h5>Symposium Editors</h5>
                        <div className="row mt-4 justify-content-center">
                          {!!proceeding.SymposiumEditors &&
                            Array.isArray(proceeding.SymposiumEditors) &&
                            proceeding.SymposiumEditors.map((editor) => (
                              <Supervisor
                                key={editor.id}
                                id={editor.id}
                                image={editor.SupervisorImage}
                                link={editor.link}
                                alt={editor.SupervisorName}
                                name={editor.SupervisorName}
                              />
                            ))}
                        </div>
                      </div>
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
        <div className="container mt-5 pt-5">
          <div className="row text-center">
            {!!proceeding.sponsorGroups &&
              Array.isArray(proceeding.sponsorGroups) &&
              proceeding.sponsorGroups.map((sponserGroup) => (
                <div className="col" key={sponserGroup.id}>
                  {!!sponserGroup.title && <h5>{sponserGroup.title}</h5>}
                  <div className="row mt-4 justify-content-center">
                    {!!sponserGroup.sponsors &&
                      Array.isArray(sponserGroup.sponsors) &&
                      sponserGroup.sponsors.map((sponsor) => (
                        <Sponsor
                          key={sponsor.id}
                          id={sponsor.id}
                          image={sponsor.image}
                          link={sponsor.link}
                          alt={sponsor.alt}
                        />
                      ))}
                  </div>
                </div>
              ))}
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
