/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: () => {
    return [
      {source: "/amir", destination: "/", permanent: false},
      {source: "/next", destination: "/react", permanent: true}
    ]
  }
}

module.exports = nextConfig
