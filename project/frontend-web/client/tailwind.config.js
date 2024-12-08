/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        colors: {
            "primary-blue": '#006DAA',
            black: '#000000',
            white: '#FFFFFF',
        },
        fontFamily: {
            source: ['Source Sans Pro', 'sans-serif'],
        },
    },
    plugins: [require('flowbite/plugin')],
}
