import { defineConfig } from 'windicss/helpers'
import whcPreset from 'whc-windicss'

export default defineConfig({
	/* #ifdef MP-WEIXIN */
	preflight: false,
	/* #endif */
	presets: [whcPreset({ mode: 'rpx' })],
	theme: {
		extend: {
			height: {
				'status-bar-height': 'var(--status-bar-height)',
				'window-top': 'var(--window-top)',
				'window-bottom': 'var(--window-bottom)'
			}
		}
	}
})
