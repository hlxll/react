# 安装 less

先打开 webpack 配置，npm run eject
再安装依赖，less 和 less-loader
打开 webpack.config.js 配置。添加
const lessRegex= /\.less$/;
  const lessModuleRegex=/\.module\.less$/;
再添加
{
test: lessRegex,
exclude: lessModuleRegex,
use: getStyleLoaders(
{
importLoaders: 3,
sourceMap: isEnvProduction && shouldUseSourceMap,
},
'less-loader'
),
sideEffects: true,
},
{
test: lessModuleRegex,
use: getStyleLoaders(
{
importLoaders: 3,
sourceMap: isEnvProduction && shouldUseSourceMap,
modules: {
getLocalIdent: getCSSModuleLocalIdent,
},
},
'less-loader'
),
},

# 代理设置

    安装依赖http-proxy-middleware
    在src下创建setupProxy文件，设置代理

# 引入 antd

    引入antd，先安装依赖，在最顶层css文件引文@import '~antd/dist/antd.css';

# node 配置

使用 npx express-generator 创建 node 框架

## 安装 nodemon

    安装依赖，添加nodemon.json文件，在package中添加nodemon启动方法

# 安装 mongodb

重新安装 mongodb，记得使用 export PATH=/usr/local/mongodb/bin:\$PATH
先进入 mongodb 安装目录/usr/local/mongodb/bin 使用
mongod --dbpath /usr/local/var/mongodb -logpath /usr/local/var/log/mongodb/mongo.log --fork
服务启动，一定要正确关闭服务，在 bin 目录下，./mongo 之后使用 use admin，db.shutdownServer()关闭服务

## mongodb 数据

在 mongodb 可视化工具中，表中数据展示界面的按钮 ADD DATA 可以加载 json 文件，school-node 中的 mongo 文件夹有 数据 json 文件

# 高阶组件

是 react 中用于复用组件逻辑的一种高级技巧，基于 react 组合特性的设计模式
