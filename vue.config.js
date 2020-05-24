module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/css/main.scss";`,
      },
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888', // target host
        ws: true, // proxy websockets
        changeOrigin: true, // needed for virtual hosted sites
      },
    },
  },
};
