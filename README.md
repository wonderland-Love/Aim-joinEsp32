# React + HTTP + ESP32 实现远程控制多个设备照明

- [x] ​	需求一：在卧室里，躺着玩手机，有睡意，不想下床去关灯，在身边的任何联网终端上都可以操控照明物开关
- [X] ​	需求二：黑夜里想（上厕所、去客厅取物），可以在家里布满照明设备 ，黑夜我想上厕所，那么使用身边的联网终端点击去厕所，那上厕所一路的照明设备都亮起来；黑夜要去客厅取物，那么使用身边的联网终端点击去客厅，去客厅一路的灯光都亮起来了。
- [ ] ​	需求三：卧室里可变色炫酷灯光，彩色灯光环绕效果，很酷的一个氛围。
- [ ] ​	需求四：亮度调节，可手动调节亮度，让自己处于一个自己舒适的亮度。



## 下载

```bash
npm install
```

## 启动

```bash
npm start
```



## src中的 setupProxy.js 跨域请求？

中间件 **http-proxy-middleware**库  

```js
  //green 表示代理路径
  //target 表示目标服务器的地址

  app.use(
    "/green",
    createProxyMiddleware({
    
    	//esp32的ip地址，服务器端口默认为80
      target: "http://10.0.0.109:80",
      
      // 跨域时一般都设置该值 为 true
      changeOrigin: true,
      
    })
  );
```



## 内网穿透

使用 NATAPP 将本地服务 (localhost:3000 )进行内网穿透，或将项目打包使用**NGINX** 进行反向代理，在进行内网穿透，这是我在freeCodeCamp上发表的一片文章，《如何让你的项目实现内网穿透》这或许可以帮到你：

如何让你的项目实现内网穿透请查看：https://www.freecodecamp.org/chinese/news/intranet-penetration/

 内网穿透工具

- ​	NATAPP：https://natapp.cn/

