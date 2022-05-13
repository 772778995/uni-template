import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  plugins: [uni(), WindiCSS()]
})
