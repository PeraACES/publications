const assetPrefix = process.env.ASSET_PREFIX;

const Author = ({ id, image, alt, name }) => (
  <div className="col mt-2" key={id}>
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
    <h2>{name}</h2>
  </div>
);

export default Author;
