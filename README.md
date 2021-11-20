# EDG_NB
一个骚气的LOL s11总决赛主题弹幕应用，websocket + js

![](https://pic3.zhimg.com/v2-e77017094bd45fc36f4ec6165ddb6548_r.jpg)

网页入口：[http://www.lhqcloud.top/EDG_NB/pages/](http://www.lhqcloud.top/EDG_NB/pages/)


兼容性：现代浏览器，暂未适配移动设备，请在PC浏览。
技术选型：前端基本都是原生CSS3 + ES5编写，后端是`node + socket.io + mysql`


## 运行与部署
安装依赖：
```
npm install
```

建数据库edg_nb, 导入service/bullet.sql建好表。
将pages/index.html部署到静态目录或者本地直接打开到浏览器运行, 然后运行node服务：
```
node ./service/app.js
```
复制代码
websocket进程比较脆弱，你可以使用pm2守护：
```
pm2 start ./service/app.js
```

## 一个彩蛋
项目中“藏”了一个`小彩蛋`给身为召唤师的程序员朋友们，我相信你们很快就能找到这个彩蛋。
如果真需要触发彩蛋的提示，可以在console控制台查看（但我相信大部分看到这篇文章的朋友都不需要提示）。

> 欢迎大家贡献弹幕，如果你喜欢这个网页欢迎你分享给其他召唤师。后面到一定时间我会出一个统计结果，有问题随时交流。

> 断剑重铸之日，其势归来之时！ 加油，召唤师。
