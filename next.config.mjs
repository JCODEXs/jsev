/** @type {import('next').NextConfig} */
const coreConfig = {
  images: {
    remotePatterns: [
      { hostname: "utfs.io" },
      { hostname: "udemy-certificate.s3.amazonaws.com" },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default coreConfig;
