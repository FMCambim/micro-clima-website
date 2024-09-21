/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your general Next.js configuration options go here
}

const withVideos = require('next-videos')

module.exports = withVideos(nextConfig)
