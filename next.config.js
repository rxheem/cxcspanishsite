/* eslint-disable no-param-reassign */
require("dotenv").config();

const path = require("path");
const Dotenv = require("dotenv-webpack");
const withCSS = require("@zeit/next-css");

const sitemap = require("nextjs-sitemap-generator");
sitemap({
  baseUrl: "https://www.cxcspanish.com",
  pagesDirectory: __dirname + "/pages",
  targetDirectory: "static/"
});

const withImages = require("next-images");
module.exports = withImages();

module.exports = withCSS({
  exportPathMap: function() {
    return {
      "/": { page: "/" }
    };
  },
  target: "serverless",
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, ".env"),
        systemvars: true
      })
    ];

    return config;
  }
});
