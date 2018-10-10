const fs = require("fs");
const co = require("co");
const ossConfig = require("./ossConfig");
const baseDist = ossConfig.baseDist;
const ossBaseDir = ossConfig.ossBaseDir;
const client = ossConfig.client;

/*
* 选择要上传的目录，image不是每次都改，所以不是每次都需要上传
* */
const dirs= ["css", "js"/*, "img"*/];
/*
* 阿里云oss的上传是异步的，如果直接执行，可能导致entry.js更新了，其他文件却还没有更新的情况，一瞬间访问会有问题，所以改成同步的
* */
const syncUploadDir = function *(dir, files){
  for(let i = 0; i < files.length; i ++){
    let file = files[i];
    /*
    * 过滤map文件
    * */
    if(!file.endsWith(".map")){
      yield client.put(ossBaseDir + dir + "/" + file, baseDist + "/" + dir + "/" + file);
    }
  }
};

co(function *(){
  for(let i = 0; i < dirs.length; i ++){
    let dir = dirs[i];
    let files = fs.readdirSync(baseDist + "/" + dir);
    yield syncUploadDir(dir, files);
  }

  console.log("entry begin");
  /*
  * 这是为了将entry.js copy 为 entry.js.bar 方便后面回滚，第一次升级因为没有entry.js 所以会报错，可以先注释掉
  * */
  yield client.copy(ossBaseDir + "entry.js.bar", ossBaseDir + "entry.js");
  yield client.put(ossBaseDir + "entry.js", baseDist + "/" + "entry.js");
  console.log("entry end");
});
