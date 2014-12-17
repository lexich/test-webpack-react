path      = require "path"
gulp      = require "gulp"
gutil     = require "gulp-util"
del = require "del"
vinylPaths = require "vinyl-paths"
spawn = require('child_process').spawn

webpack   = require "webpack"
WebpackDevServer = require "webpack-dev-server"
webpackConfig = require("./webpack.config.js")

runWebpack = (config) ->
  webpack config, (err, stats) ->
    throw new gutil.PluginError("runWebpack", err) if err
    gutil.log("[runWebpack]", stats.toString({colors: true}))


gulp.task "server", (cb)->
  server = spawn("./node_modules/.bin/webpack-dev-server")
  server.stdout.on "data", (msg)-> gutil.log "OUT: #{msg}"
  server.stderr.on "data", (msg)-> gutil.log "ERR: #{msg}"
  server.on "close", cb

gulp.task "webpack", ["clean"], (callback) ->
  runWebpack(webpackConfig)
  callback()

gulp.task "clean", ->
  gulp.src webpackConfig.output.path, {read: false}
    .pipe vinylPaths(del)

gulp.task "default", ["webpack"]
