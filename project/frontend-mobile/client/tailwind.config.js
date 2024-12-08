/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                source: ['SourceSansPro-Regular'],
                sourceLight: ['SourceSansPro-Light'],
                sourceSemiBold: ['SourceSansPro-SemiBold'],
                sourceBold: ['SourceSansPro-Bold'],
            },
        },
        colors: {
            'primary-blue': '#006DAA',
            'dark-blue': '#003654',
            black: '#000000',
            white: '#FFFFFF',
            'white-bg': '#FBFBFB',
        },
    },
    plugins: [],
}
