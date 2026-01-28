const repoName = 'AmaconWebsite';

const nextConfig = {
  trailingSlash: true,
  distDir: './out',
  output: 'export',
  assetPrefix: `/${repoName}/`,
  basePath: `/${repoName}`,
};

module.exports = nextConfig;