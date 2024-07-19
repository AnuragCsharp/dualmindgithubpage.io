/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  distDir: 'nextbuild', // Set the custom output directory here
  basePath: '/dualmindgithubpage.io', // The repository name on GitHub Pages
  assetPrefix: '/dualmindgithubpage.io/',
};

export default nextConfig;
