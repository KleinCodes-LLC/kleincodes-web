import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/destinations',
        destination: '/destinations/index.html'
      },
      {
        source: '/destinations/',
        destination: '/destinations/index.html'
      },
      {
        source: '/destinations/privacy',
        destination: '/destinations/privacy.html'
      },
      {
        source: '/destinations/privacy/',
        destination: '/destinations/privacy.html'
      },
      {
        source: '/destinations/terms',
        destination: '/destinations/terms.html'
      },
      {
        source: '/destinations/terms/',
        destination: '/destinations/terms.html'
      },
      {
        source: '/storychef',
        destination: '/storychef/index.html'
      },
      {
        source: '/storychef/',
        destination: '/storychef/index.html'
      },
      {
        source: '/storychef/privacy',
        destination: '/storychef/privacy.html'
      },
      {
        source: '/storychef/privacy/',
        destination: '/storychef/privacy.html'
      },
      {
        source: '/storychef/terms',
        destination: '/storychef/terms.html'
      },
      {
        source: '/storychef/terms/',
        destination: '/storychef/terms.html'
      }
    ]
  }
};

export default nextConfig;
