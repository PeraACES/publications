const Sponsor = ({ id, image, link, alt }) => (
  <div className="col m-2" key={id}>
    <a href={link} target="_blank" rel="noreferrer">
      {!!image && image.url && (
        <img
          width="70"
          src={image.url}
          alt={alt}
          style={{ borderRadius: '3px', background: 'transparent' }}
        />
      )}
    </a>
  </div>
);

export default Sponsor;
