const Supervisor = ({ id, image, link, alt, name }) => (
  <div className="col m-2" key={id}>
    <a href={link} target="_blank" rel="noreferrer">
      {!!image && image.url && (
        <>
          {!!image.url ? (
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
          <h2>
            {!!link ? (
              <a href={link} target="_blank" rel="noreferrer">
                {name}
              </a>
            ) : (
              <p>{name}</p>
            )}
          </h2>
        </>
      )}
    </a>
  </div>
);

export default Supervisor;
