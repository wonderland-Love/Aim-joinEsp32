// import { blue, blueApi, green, greenApi } from "./esp32api";
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  // /blue 表示代理路径
  //target 表示目标服务器的地址

  //   green
  app.use(
    "/green",
    createProxyMiddleware({
      target: "http://10.0.0.109:80",
      // 跨域时一般都设置该值 为 true
      changeOrigin: true,
    })
  );

  //   blue
  app.use(
    "/blue",
    createProxyMiddleware({
      target: "http://192.168.1.121:80",
      // 跨域时一般都设置该值 为 true
      changeOrigin: true,
    })
  );
};
