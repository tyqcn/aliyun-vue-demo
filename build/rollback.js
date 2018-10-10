const co = require("co");
const ossConfig = require("./ossConfig");
const ossBaseDir = ossConfig.ossBaseDir;
const client = ossConfig.client;

co(function *(){
  yield client.copy(ossBaseDir + "entry.js", ossBaseDir + "entry.js.bar");
}).catch(function (err) {
  console.log(err);
});
