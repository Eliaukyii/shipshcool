module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  devServer:{
    open: true,     //设置自动启动浏览器
    host: '127.0.0.1',
    port: 8090,
    proxy:{
      '/api':{
        target:'http://localhost:8090',
        ws:true,
        changeOrigin: true, //允许跨域
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
