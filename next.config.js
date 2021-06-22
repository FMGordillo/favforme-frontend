module.exports = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  redirects: () => [
    {
      source: "/ong/:slug",
      destination: "/404",
      permanent: false,
    },
  ],
};
