'use strict'
require('./check-versions')()
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV === undefined){
  console.log("no env...");
  process.exit(1);
}
//process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
const fs = require("fs");

const spinner = ora('building for ' + process.env.NODE_ENV + '...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ));

    let assetStr = stats.toString({
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    });

    let publicPath = process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
    let manifestJs = publicPath + "static/js/" + /manifest\..+?\.js/.exec(assetStr)[0];
    let vendorJs = publicPath + "static/js/" + /vendor\..+?\.js/.exec(assetStr)[0];
    let appJs = publicPath + "static/js/" + /app\..+?\.js/.exec(assetStr)[0];
    let appCss = publicPath + "static/css/" + /app\..+?\.css/.exec(assetStr)[0];

    let data = fs.readFileSync(path.resolve(__dirname, 'entry.js'));
    let dataString = data.toString();
    dataString = dataString.replace(/{{app.css}}/, appCss);
    dataString = dataString.replace(/{{app.js}}/, appJs);
    dataString = dataString.replace(/{{manifest.js}}/, manifestJs);
    dataString = dataString.replace(/{{vendor.js}}/, vendorJs);

    fs.writeFile(path.resolve(__dirname, '../dist/static/entry.js'), dataString,  function(err) {
      if (err) {
        return console.error(err);
      }
    });
  })
})
