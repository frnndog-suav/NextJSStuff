/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXTAUTH_SECRET: "lamzlamzlamzalzmalzmalzmalzmlam",
    NEXTAUTH_URL: "http://localhost:3000",
    SECRET_KEY: "zmaiwoskxjdhrytufivbqp"
  },
};

module.exports = nextConfig;
