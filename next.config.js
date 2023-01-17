/*const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enable: process.env.ANALIZE === 'true',
})

const config = {
  future:{
    webpack5: true
  }
}

module.exports = withBundleAnalyzer(config)
*/

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
