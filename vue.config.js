const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false // 🚫 Disable ESLint during `npm run serve`
})
