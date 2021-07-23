import Link from 'next/link';

const Person = ({ id, name, image, link }) => (
  <>
    {!!id && (
      <div className="col-md-8" key={id}>
        <div className="post-entry-1">
          {!!image && (
            <img
              width="70"
              height="70"
              className="img-fluid"
              src={image.url}
              alt={`person-${id}-image`}
            />
          )}
          {!!link ? (
            <a className="text-black mt-2" href={link} target="_blank" rel="noreferrer">
              {name}
            </a>
          ) : (
            <h6 className="text-black mt-2">{name}</h6>
          )}
        </div>
      </div>
    )}
  </>
);

export default function SingleProjectEntry({
  id,
  name,
  image,
  slug,
  authors,
  supervisors,
  createdAt
}) {
  return (
    <>
      <div className="section-title">{!!name && <h2>{name}</h2>}</div>
      <div className="half-post-entry d-block d-lg-flex">
        {/* {!!image && <img                   width="100%"
                  height="100%" src={image.url} alt={image.caption} className="thumbnail mr-5" />} */}
        <div className="contents">
          <div className="row">
            <h5>Supervisors</h5>
            <div className="col-lg-6">
              <div className="post-entry-2 d-flex">
                {!!supervisors &&
                  Array.isArray(supervisors) &&
                  supervisors.map((item) => (
                    <Person
                      key={item.SupervisorID}
                      id={item.SupervisorID}
                      name={item.SupervisorName}
                      image={item.SupervisorImage}
                      link={item.link}
                    />
                  ))}
              </div>
            </div>
          </div>
          <div className="row">
            <h5>Authors</h5>
            <div className="container pt-3">
              <div className="col-lg-6">
                <div className="post-entry-2 d-flex">
                  {!!authors &&
                    Array.isArray(authors) &&
                    authors.map((item) => (
                      <Person
                        key={item.AuthorID}
                        id={item.AuthorID}
                        name={item.AuthorName}
                        image={item.AuthorImage}
                        link={item.link}
                      />
                    ))}
                </div>
              </div>
            </div>
            {/* <div className="container pt-3">
              <div className="row justify-content-between">
                {!!authors &&
                  Array.isArray(authors) &&
                  authors.map((item) => (
                    <Person
                      key={item.AuthorID}
                      id={item.AuthorID}
                      name={item.AuthorName}
                      image={item.AuthorImage}
                      link={item.link}
                    />
                  ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
