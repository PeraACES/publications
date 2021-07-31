import moment from 'moment';
import Link from '../Link/Link';
import TextTruncate from 'react-text-truncate';

export default function CardProjectEntry({ id, abstract, name, image, slug, createdAt }) {
  return (
    <div className="post-entry-1" key={id}>
      {!!image && (
        <Link href={`/projects/${slug}`}>
          <a>
            <img src={image.url} alt={image.caption} className="img-fluid" />
          </a>
        </Link>
      )}
      <div className="contents">
        {!!name && (
          <h2>
            <Link href={`/projects/${slug}`}>
              <a>{name}</a>
            </Link>
          </h2>
        )}
        {!!abstract && (
          <Link href={`/projects/${slug}`}>
            <a>
              <TextTruncate line={4} element="p" truncateText="..." text={abstract} />
            </a>
          </Link>
        )}
        <div className="post-meta">
          <span className="date-read">{moment(createdAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
}
