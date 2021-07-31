const webpack = require('webpack');

const isProd = (process.env.NODE_ENV || 'production') === 'production';

// const { ON_GITHUB_PAGES } = process.env;

// const basePath = ON_GITHUB_PAGES ? '/publications' : '';
// Use the CDN in production and localhost for development.
const assetPrefix = isProd ? '/publications' : '';

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' }
  }),
  //   distDir: 'out/_next',
  assetPrefix,
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix)
      })
    );
    return config;
  }
};
