const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/yunduofont/'  // 替换为你的仓库名
    : '/',
  outputDir: 'dist',
  plugins: [vue()],  
  base: './',  
  resolve: {  
    alias: {  
      '@': fileURLToPath(new URL('./src', import.meta.url))  
    }  
  }  
})
