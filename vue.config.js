module.exports = {
    // publicPath: '/wbg/', // 如果加上后缀 则访问时 也需要加上后缀  http://localhost:8081/wbg/
    publicPath: '/',
    css: {
        loaderOptions: {
          sass: {
            data: `@import "@/styles/color.scss";`
          }
        }
      }
}