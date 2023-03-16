module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  devServer:{
    open: true,     //设置自动启动浏览器
    host: '192.168.2.110',
    port: 8080,
    proxy:{
      '/api':{
        target:'http://121.37.188.23:8088',
        ws:true,
        changeOrigin: true, //允许跨域
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
