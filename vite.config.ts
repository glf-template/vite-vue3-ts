import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { createHtmlPlugin } from 'vite-plugin-html'

// 按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

function getCurrentTime() {
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const monthFm = month < 10 ? '0' + month : month
  const day = date.getDate()
  const dayFm = day < 10 ? '0' + day : day
  const h = date.getHours()
  const hFm = h < 10 ? '0' + h : h
  const m = date.getMinutes()
  const mFm = m < 10 ? '0' + m : m
  const s = date.getSeconds()
  const sFm = s < 10 ? '0' + s : s
  return year + '-' + monthFm + '-' + dayFm + ' ' + hFm + ':' + mFm + ':' + sFm
}
const ReleaseVersion = require('./package.json').version
const ReleaseTime = getCurrentTime()

const Timestamp = new Date()
  .getTime()
  .toString()
  .match(/.*(.{8})/)[1] // 截取时间戳后八位

// https://vitejs.dev/config/
export default defineConfig({
  envDir: 'env',
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/css/theme.scss" as *;'
      }
    }
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        entryFileNames: `js/[name].${Timestamp}.js`,
        chunkFileNames: `js/[name].chunk-${Timestamp}.js`,
        assetFileNames: `assets/[name].${Timestamp}.[ext]`
      }
    }
  },
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      // 指定symbolId格式
      symbolId: 'icon-[name]'
    }),
    createHtmlPlugin({
      minify: true,
      template: 'public/index.html',
      inject: {
        data: {
          title: 'vite-vue3-ts',
          releaseTime: ReleaseTime,
          releaseVersion: ReleaseVersion
        }
      }
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })]
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 9092, //启动端口
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Request-Method': 'GET, POST, PUT, DELETE',
      'Access-Control-Request-Headers': '*'
    },
    // 设置 https 代理
    proxy: {
      '/api': {
        target: 'your https address'
      }
    }
  }
})
