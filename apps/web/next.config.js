/**
 * @type {import('next').NextConfig}
 */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /prisma-client\/index\.js$/,
      loader: 'string-replace-loader',
      options: {
        search: 'config.dirname = dirname',
        replace: `config.dirname = '${path.dirname(require.resolve('database/generated/prisma-client'))}'`,
      }
    })
    return config
  }
};
