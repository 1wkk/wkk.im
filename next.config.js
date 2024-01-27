/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://wkk1.notion.site/wkk-185f530dac7443e3957e827a106c4b06?pvs=4',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
