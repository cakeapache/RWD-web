const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js(['resources/js/background.js','resources/js/scroll.js'], 'public/js/app.js')
    .js('resources/js/btn.js', 'public/js')
    .postCss('resources/css/index.css', 'public/css/index.css')
    .postCss('resources/css/min-device.css','public/css');