const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,  //关闭语法检查
})

module.exports={
  devServer: {
    open: false
  }
}