/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: true,          // use the Rust-based compiler
  },
};

module.exports = nextConfig;