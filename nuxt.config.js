export default {
    head: {
        title: 'InnovaLab_Tasks',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    build: {},
    components: true,
    axios: { baseURL: '/' },
    modules: ['@nuxtjs/axios'],
    css: ['vuesax/dist/vuesax.css'],
    buildModules: ['@nuxtjs/tailwindcss'],
    plugins: [{ src: '@/plugins/plugin-datagrid', mode: 'client' }],
}
