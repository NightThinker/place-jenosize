/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    publicRuntimeConfig: {
        apiKey: process.env.API_KEY,
    },
};

module.exports = nextConfig;
