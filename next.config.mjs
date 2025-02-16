// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images: {
//         domains: ['images.unsplash.com'],
//     }
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',  // Adjust this pattern if needed
            },
        ],
    },
};

export default nextConfig;