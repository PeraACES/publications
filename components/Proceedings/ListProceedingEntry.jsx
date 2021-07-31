import moment from 'moment';
import Link from '../Link/Link';
import ReactMarkdown from 'react-markdown';

export default function ListProjectEntry({
  id,
  markup,
  title,
  image,
  slug,
  createdAt,
  displayButton = false
}) {
  //console.log(markup);
  return (
    <div className="post-entry-2 d-flex pb-5 mb-5" key={id}>
      {!!image && (
        <div
          className="thumbnail order-md-2"
          style={{ backgroundImage: `url(${image.url})` }}
        ></div>
      )}
      <div className="contents order-md-1 pl-4">
        {!!title && (
          <h2>
            <Link href={`/proceedings/${slug}`}>
              <a>{title}</a>
            </Link>
          </h2>
        )}
        {!!markup && <ReactMarkdown>{markup}</ReactMarkdown>}
        <div className="post-meta">
          <span className="date-read">{moment(createdAt).fromNow()}</span>
        </div>
        {displayButton && (
          <Link href={`/proceedings/${slug}`}>
            <a className="btn btn-info mt-2" role="button">
              View More
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
