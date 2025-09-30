/** @type {import('next').NextConfig} */

const imageDomains = (process.env.NEXT_PUBLIC_IMAGE_DOMAINS || '').split(',').map(domain => domain.trim()).filter(Boolean);
const imageRemotePatterns = imageDomains.flatMap(domain => ([
    { protocol: 'http', hostname: domain, pathname: '/**' },
    { protocol: 'https', hostname: domain, pathname: '/**' }
]));

const nextConfig = {
    basePath: '', // 设置统一前缀如/en
    assetPrefix: '', // 静态资源前缀
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true, // build时跳过eslint
    },
    env: {
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "da9h8exvs",
        NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "fi0lxkc1",
    },
    images: {
        domains: imageDomains,
        remotePatterns: imageRemotePatterns,
        unoptimized: true,
    },
    swcMinify: true,
    output: 'standalone',
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    headers: async () => [
        {
            source: '/:path*',
            headers: [
                {
                    key: 'X-DNS-Prefetch-Control',
                    value: 'on'
                },
                {
                    key: 'Strict-Transport-Security',
                    value: 'max-age=63072000; includeSubDomains; preload'
                },
                {
                    key: 'X-XSS-Protection',
                    value: '1; mode=block'
                },
                {
                    key: 'X-Frame-Options',
                    value: 'SAMEORIGIN'
                },
                {
                    key: 'X-Content-Type-Options',
                    value: 'nosniff'
                }
            ]
        }
    ],
    poweredByHeader: false,
    compress: true,
};

export default nextConfig;
