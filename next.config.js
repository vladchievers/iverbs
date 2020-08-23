module.exports = {
  webpack(config) {
    withPWA({
      pwa: {
        dest: "public",
      },
    });
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
