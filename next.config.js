/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}


/* Social Media Redirect */
module.exports = {
  async redirects() {
    return [
      {
        source: '/facebook',
        destination: 'https://www.facebook.com/Jang.Henrich/',
        permanent: false,
        basePath: false,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/johnhenrichdelapena/',
        permanent: false,
        basePath: false,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/jdpena28/',
        permanent: false,
        basePath: false,
      },
      {
        source: '/github',
        destination: 'https://github.com/jdpena28',
        permanent: false,
        basePath: false,
      }
    ]
  },
}
