/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ✅ THIS enables next export (generates /out)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
