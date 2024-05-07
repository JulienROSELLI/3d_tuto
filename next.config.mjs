/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      rules: [
        {
          test: /\.(glb|gltf)$/,
          type: "asset/resource",
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
