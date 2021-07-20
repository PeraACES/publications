import moment from 'moment';
import Link from 'next/link';

export default function ListProjectEntry({ id, abstract, name, image, createdAt }) {
  return (
    <div className="post-entry-2 d-flex" key={id}>
      {!!image && (
        <div
          className="thumbnail order-md-2"
          style={{ backgroundImage: `url(${image.url})` }}
        ></div>
      )}
      <div className="contents order-md-1 pl-4">
        {!!name && (
          <h2>
            <Link href={`/projects/${id}`}>
              <a>{name}</a>
            </Link>
          </h2>
        )}
        <div className="post-meta">
          <span className="date-read">{moment(createdAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
}
