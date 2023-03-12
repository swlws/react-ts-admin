// eslint-disable-next-line
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  console.log("call http proxy middleware");

  app.use(
    "/api/",
    createProxyMiddleware({
      target: "http://127.0.0.1:8080",
      changeOrigin: true,
    })
  );
};
