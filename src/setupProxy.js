// eslint-disable-next-line
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log("call http proxy middleware");

  app.use(
    "/api/",
    createProxyMiddleware({
      target: "http://192.168.10.41:3000",
      changeOrigin: true,
    })
  );
};
