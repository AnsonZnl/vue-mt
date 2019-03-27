# imooc-mt

## 启动方式

```console
<!-- node: 10.0.0 -->
sudo mongod
<!-- open other iTerm -->
mongo
<!-- open other iTerm -->
redis-server
<!-- open other iTerm -->
redis-cli
<!-- open other iTerm -->
<!-- 进入项目根目录 -->
npm run dev
<!-- browser open -->
localhost:3000
```

## qq 授权码

vjalqgcbjqdhbbfb

## 初始化项目

```console
<!-- 安装 -->
npm install @vue/cli -g
npm i npx -g
npx create-nuxt-app projectName
koa
element-ui
Universal
yes
yes
ganyihuan
npm
nvm use 10.0.0
<!-- 安装插件 -->
cnpm i scss-loader sass-loader passport-local nodemailer node-sass mongoose koa-router koa-redis koa-passport koa-json koa-generic-session koa-bodyparser babel-preset-es2015 babel-cli axios @nuxtjs/axios crypto-js -S
```

## 导入数据到 mongodb

> 进入 dbs 目录

```md
mongoimport -d student -c areas areas.dat
mongoimport -d student -c category category.dat
mongoimport -d student -c cities cities.dat
mongoimport -d student -c maps maps.dat
mongoimport -d student -c menus menus.dat
mongoimport -d student -c pois pois.dat
mongoimport -d student -c provinces provinces.dat
mongoimport -d student -c regions regions.dat
mongoimport -d student -c topsearches topsearches.dat
mongoimport -d student -c position position.dat
mongoimport -d student -c resultsbykeywords resultsbykeywords.dat
mongoimport -d student -c products products.dat
```

> 慕课网 uid: 3225903
> [接口签名](http://cp-tools.cn/sign)

## postman 接口

```md
http://localhost:3000/geo/getPosition
http://localhost:3000/geo/menu
http://localhost:3000/geo/province
http://localhost:3000/search/top?input=火锅&city=天津&sign=a3c9fe0782107295ee9f1709edd15218
http://localhost:3000/search/hotPlace?city=天津&sign=a3c9fe0782107295ee9f1709edd15218
http://localhost:3000/category/crumbs?city=北京
http://localhost:3000/search/resultsByKeywords?city=广州&keyword=广州流溪河国家森林公园
```

## 内容大纲

![内容大纲](https://i.loli.net/2018/12/30/5c28d153b9341.jpeg)

## 运行图片

![首页](https://i.loli.net/2019/01/10/5c37653fe976f.png)
![登录界面](https://i.loli.net/2018/12/26/5c23a34dbdea7.png)
![注册界面](https://i.loli.net/2018/12/26/5c23a366762d7.png)
![风景列表](https://i.loli.net/2018/12/26/5c23a37d382db.png)
![风景界面](https://i.loli.net/2019/01/10/5c37658f6a373.png)
![订单界面](https://i.loli.net/2019/01/10/5c3765d79b16b.png)
![总订单](https://i.loli.net/2019/01/11/5c376ca8b25ef.png)
