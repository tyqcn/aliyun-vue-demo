'use strict';

const path = require('path');
const OSS = require("ali-oss");

const client = new OSS({
  /*
  * oss 区域
  * */
  region: 'oss-cn-beijing',
  accessKeyId: "your accessKeyId",
  accessKeySecret: "your accessKeySecret",
  bucket: 'your bucket'
});

const baseDist = path.resolve(__dirname, '../dist/static/');
const ossBaseDir = "static/";

module.exports = {
  client: client,
  baseDist: baseDist,
  ossBaseDir: ossBaseDir
};
