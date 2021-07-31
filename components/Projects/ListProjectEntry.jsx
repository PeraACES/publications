import moment from 'moment';
import Link from '../Link/Link';
import TextTruncate from 'react-text-truncate';

export default function ListProjectEntry({
  id,
  abstract,
  name,
  image,
  slug,
  createdAt,
  displayButton = false
}) {
  return (
    <div className="post-entry-2 d-flex pb-5 mb-5" key={id}>
      {!!image && (
        <div
          className="thumbnail order-md-2"
          style={{ backgroundImage: `url(${image.url})` }}
        ></div>
      )}
      <div className="contents order-md-1 pl-4">
        {!!name && (
          <h2>
            <Link href={`/projects/${slug}`}>
              <a>{name}</a>
            </Link>
          </h2>
        )}
        {!!abstract && (
          <TextTruncate line={4} element="p" truncateText="..." text={abstract} />
        )}
        <div className="post-meta">
          <span className="date-read">{moment(createdAt).fromNow()}</span>
        </div>
        {displayButton && (
          <Link href={`/projects/${slug}`}>
            <a className="btn btn-info mt-2" role="button">
              View More
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}
