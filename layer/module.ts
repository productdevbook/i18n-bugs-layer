import { createResolver, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
    async setup(options, nuxt) {
        const { resolve } = createResolver(import.meta.url)

        nuxt.hook('i18n:registerModule', register => {
            register({
                // langDir path needs to be resolved
                langDir: resolve('./lang'),
                locales: [
                    {
                        code: 'en',
                        file: 'en.json',
                    },
                    {
                        code: 'fr',
                        file: 'fr.json',
                    },
                ]
            })
        })
    }
})
