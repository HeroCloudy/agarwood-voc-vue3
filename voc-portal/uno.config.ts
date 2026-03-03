import { defineConfig, transformerDirectives, transformerVariantGroup, presetWind4 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
