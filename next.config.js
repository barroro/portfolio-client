
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withImages = require('next-images');
const withTM = require('next-transpile-modules')(['gsap']);

module.exports = withPlugins([
  [withSass],
  [withImages],
  [withTM],
  [withCss]
]);