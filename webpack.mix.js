const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [
    //
  ]);

  // module.exports = {
  //     optimization: {
  //         minimize: true,
  //         namedModules: true,
  //         namedChunks: true,
  //         removeAvailableModules: true,
  //         flagIncludedChunks: true,
  //         occurrenceOrder: false,
  //         usedExports: true,
  //         concatenateModules: true,
  //         sideEffects: false, // <----- in prod defaults to true if left blank
  //     }
  // };
  
