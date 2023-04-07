module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/novo-caminho",
        destination: "/faq/",
        permanent: true,
      },
    ];
  },
};
