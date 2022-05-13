import { defineConfig, loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import WindiCSS from 'vite-plugin-windicss'

export default ({ mode }) => {
  loadEnv(mode, './')
  return defineConfig({
    plugins: [uni(), WindiCSS()]
  })
}
