/** @type {import('next').NextConfig} */

const stripTrailingSlash = (value = '') => value ? value.replace(/\/$/, '') : '';
const normalizeBasePath = (value = '') => {
    if (!value) return '';
    const trimmed = value.trim();
    const withLeading = trimmed.startsWith('/') ? trimmed : '/' + trimmed;
    return withLeading.replace(/\/$/, '');
};

const rawPublicBaseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';
const rawPublicDjangoBaseUrl = process.env.NEXT_PUBLIC_DJANGO_BASE_URL || '';
const rawPublicBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const rawPublicImageDomains = process.env.NEXT_PUBLIC_IMAGE_DOMAINS || '';

const publicBaseUrl = stripTrailingSlash(rawPublicBaseUrl);
const publicDjangoBaseUrl = stripTrailingSlash(rawPublicDjangoBaseUrl);
const publicBasePath = normalizeBasePath(rawPublicBasePath);

const imageDomains = rawPublicImageDomains.split(',').map(domain => domain.trim()).filter(Boolean);
const imageRemotePatterns = imageDomains.flatMap(domain => ([
    { protocol: 'http', hostname: domain, pathname: '/**' },
    { protocol: 'https', hostname: domain, pathname: '/**' }
]));

const nextConfig = {
    basePath: publicBasePath,
    assetPrefix: '',
    reactStrictMode: false,
    eslint: {
        ignoreDuringBuilds: true,
    },
    env: {
        NEXT_PUBLIC_BASE_URL: publicBaseUrl,
        NEXT_PUBLIC_DJANGO_BASE_URL: publicDjangoBaseUrl,
        NEXT_PUBLIC_BASE_PATH: publicBasePath,
        NEXT_PUBLIC_IMAGE_DOMAINS: rawPublicImageDomains,
        NEXT_PUBLIC_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID || '001',
        NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'da9h8exvs',
        NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME || 'fi0lxkc1',
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
