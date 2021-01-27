# 安装less
  先打开webpack配置，npm run eject
  再安装依赖，less和less-loader
  打开webpack.config.js配置。添加
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
  # 引入antd
    引入antd，先安装依赖，在最顶层css文件引文@import '~antd/dist/antd.css';

# node配置
  使用npx express-generator创建node框架
  ## 安装nodemon
    安装依赖，添加nodemon.json文件，在package中添加nodemon启动方法
# 安装mongodb
  先进入mongodb安装目录/usr/local/mongodb/bin使用
  mongod --dbpath /usr/local/var/mongodb -logpath /usr/local/var/log/mongodb/mongo.log --fork
  服务启动，一定要正确关闭服务，在bin目录下，./mongo之后使用use admin，db.shutdownServer()关闭服务
  ## mongodb数据
  在mongodb可视化工具中，表中数据展示界面的按钮 ADD DATA可以加载json文件，school-node中的mongo文件夹有 数据json文件