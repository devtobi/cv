import {
  createAppleSplashScreens,
  defineConfig,
  minimal2023Preset,
} from '@vite-pwa/assets-generator/config';

export default defineConfig({
  headLinkOptions: {
    preset: '2023',
  },
  preset: {
    ...minimal2023Preset,
    appleSplashScreens: createAppleSplashScreens({
      name: (landscape, size, dark) => {
        const prefix = dark ? 'dark-' : 'light-';
        return `apple-splash-${landscape ? 'landscape' : 'portrait'}-${prefix}${size.width}x${size.height}.png`;
      },
    }),
  },
  images: ['public/logo.svg'],
});
