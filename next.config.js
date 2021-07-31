const webpack = require('webpack');

const isProd = (process.env.NODE_ENV || 'production') === 'production';

// Use the CDN in production and localhost for development.
const assetPrefix = isProd ? '/publications' : '';

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' }
  }),
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
