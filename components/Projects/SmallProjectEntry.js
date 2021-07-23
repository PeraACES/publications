import moment from 'moment';
import Link from 'next/link';

export default function SmallProjectEntry({ id, name, image, slug, createdAt }) {
  return (
    <div className="post-entry-2 d-flex bg-light" key={id}>
      {!!image && (
        <div className="thumbnail" style={{ backgroundImage: `url(${image.url})` }}></div>
      )}
      <div className="contents">
        {!!name && (
          <h2>
            <Link href={`https://aces.ce.pdn.ac.lk/publications/projects/${slug}`}>
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
