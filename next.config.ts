import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const isCloudflarePages = process.env.CF_PAGES === '1';
const isStaticExport = isGitHubPages || isCloudflarePages;
const pagesBasePath = isGitHubPages ? '/hamanodaidokoro' : '';

const nextConfig: NextConfig = {
  output: isStaticExport ? 'export' : undefined,
  basePath: pagesBasePath,
  assetPrefix: pagesBasePath,
  trailingSlash: isStaticExport,
};

export default nextConfig;
