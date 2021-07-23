import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function CarouselItem({ id, slug, title, subtitle, image, markup }) {
  return (
    <div className="site-section" key={id}>
      <div className="container">
        <div className="half-post-entry d-block d-lg-flex bg-light">
          {!!image && (
            <Link href={`https://aces.ce.pdn.ac.lk/publications/proceedings/${slug}`}>
              <a>
                <img src={image.formats.small.url} alt="Image" className="img-bg" />
              </a>
            </Link>
          )}
          <div className="contents">
            {!!subtitle && <span className="caption">{subtitle}</span>}
            <h2>{!!title && <a href="blog-single.html">{title}</a>}</h2>
            {!!markup && <ReactMarkdown>{markup}</ReactMarkdown>}
          </div>
        </div>
      </div>
    </div>
  );
}
