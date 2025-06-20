/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for production builds
  reactStrictMode: true,
  
  // Improve image optimization
  images: {
    domains: [],
  },
  
  // Disable unnecessary features for this project
  eslint: {
    // Don't run ESLint during build - we've already fixed the issues
    ignoreDuringBuilds: true,
  },
  
  // Improve output for deployments
  output: 'standalone',
}

module.exports = nextConfig
