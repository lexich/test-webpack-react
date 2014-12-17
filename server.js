
var webpack   = require("webpack");
var Server = require("webpack-dev-server");
var child_process = require('child_process');

var runServer = function(config, options, port, cb){
  var server = new Server(webpack(config), options)
  server.listen(port, cb);
  return server;
};

var fork = function(opts, port, cb){
  var child = child_process.fork(__filename);
  child.send({
    msg: "runServer",
    data:{
      options: opts,
      port: port
    }
  });
  child.on("message", function(opt){
    if("connected" === opt.msg){
      cb(opt.error, opt.data);
    }
  })
}

process.on("message", function(opt){
  if(opt.msg === "runServer"){
    var webpackConfig = require("./webpack.config.js");
    var opts = opt.data.options || {};
    var port = opt.data.port || 8080;
    runServer(webpackConfig, opts, port, function(err){
      if(err){
        process.send({
          msg: "connected",
          error: err,
          data: {}
        })
      } else {
        process.send({
          msg: "connected",
          data:{ port: port }
        })
      }
    })
  }
});

module.exports = {
  fork: fork,
  runServer: runServer
};
