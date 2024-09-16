import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
} from 'unocss'

export default defineConfig({
  shortcuts: [

    [/^wh-(.+)$/, ([, c]) => `w-${c}  h-${c}`],
  ],
  rules: [
  ],
  theme: {
    colors: {
      primary: '#E9B978',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  safelist: [
    'wh-6',
    'op-70',
  ],
})
