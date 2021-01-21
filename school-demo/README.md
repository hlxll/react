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