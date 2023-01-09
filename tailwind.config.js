module.exports = {
    darkMode: 'class',
    variants: { scrollbar: ['rounded'] },
    content: [
        './pages/**/*.vue',
        './layouts/**/*.vue',
        './nuxt.config.{js,ts}',
        './plugins/**/*.{js,ts}',
        './node_modules/tv-*/**/*.vue',
        './components/**/*.{js,vue,ts}',
    ],
    plugins: [require('@tailwindcss/forms')],
}
