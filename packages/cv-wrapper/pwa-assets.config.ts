import {
	defineConfig,
	minimal2023Preset,
	createAppleSplashScreens
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
	headLinkOptions: {
		preset: '2023'
	},
	preset: {
		...minimal2023Preset,
		appleSplashScreens: createAppleSplashScreens()
	},
	images: ['public/logo.svg'],
})
