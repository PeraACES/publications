const assetPrefix = process.env.ASSET_PREFIX;

const Supervisor = ({ id, image, link, alt, name }) => (
  <div className="col m-2" key={id}>
    <a href={link} target="_blank" rel="noreferrer">
      {!!!!image && image.url ? (
        <img
          width="70"
          src={image.url}
          alt={alt}
          style={{ borderRadius: '3px', background: 'transparent' }}
        />
      ) : (
        <img
          width="70"
          src={`${assetPrefix}/images/user-avatar.png`}
          alt={alt}
          style={{ borderRadius: '3px', background: 'transparent' }}
        />
      )}
    </a>
    {!!link ? (
      <h2>
        <a href={link} target="_blank" rel="noreferrer">
          {name}
        </a>
      </h2>
    ) : (
      <h2>{name}</h2>
    )}
  </div>
);

export default Supervisor;
