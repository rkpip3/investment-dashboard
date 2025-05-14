/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
        // allow importing TTF/OTF font files if you ever reference them in JS/CSS
        config.module.rules.push({
            test: /\.(ttf|otf|eot|woff|woff2)$/,
            use: {
                loader: 'file-loader',
                options: {
                    outputPath: 'static/fonts/',
                    publicPath: '/_next/static/fonts/',
                },
            },
        });
        return config;
    },
    // if you ever load images from external domains, whitelist them here:
    images: {
        domains: [],
    },
};

module.exports = nextConfig;
