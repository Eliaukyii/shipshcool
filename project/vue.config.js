module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  devServer:{
    open: true,     //设置自动启动浏览器
    // host: '192.168.2.110',
    host:'192.168.2.100',
    port: 8080,
    proxy:{
      '/api':{
        target:'http://192.168.2.254:8090',
        ws:true,
        changeOrigin: true, //允许跨域
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
