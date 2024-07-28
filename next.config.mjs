/** @type {import('next').NextConfig} */
const nextConfig = {};
export default {
  env: {
    SECRET_KEY: process.env.SECRET_KEY, // Server-side access
    NEXT_PUBLIC_SECRET_KEY: process.env.NEXT_PUBLIC_SECRET_KEY, // Client-side access
  },
};

// module.exports = {
//   env: {
//     SECRET_KEY: process.env.SECRET_KEY, // Server-side access
//     NEXT_PUBLIC_SECRET_KEY: process.env.NEXT_PUBLIC_SECRET_KEY, // Client-side access
//   },
// };
// export default nextConfig;
