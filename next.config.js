const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('next').NextConfig} */


const nextConfig = {
    basePath: process.env.BASE_PATH,
    env: {
        basePath: process.env.BASE_PATH,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '{domain}',
                port: '',
                pathname: '{path}',
            },
        ],
        // domains: [{domain}],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    reactStrictMode: true,
    webpack: (config) => {
        config.plugins.push(
            new CopyPlugin({
                patterns: [
                    {
                        from: 'node_modules/leaflet/dist/images',
                        to: path.resolve(__dirname, 'public', 'leaflet', 'images')
                    },
                ],
            }),
        )
        return config
    }
}

module.exports = nextConfig
