path      = require "path"
gulp      = require "gulp"
gutil     = require "gulp-util"
webpackConfig = require("./webpack.config.js")

runWebpack = (config) ->
  webpack   = require "webpack"
  webpack config, (err, stats) ->
    throw new gutil.PluginError("runWebpack", err) if err
    gutil.log("[runWebpack]", stats.toString({colors: true}))


gulp.task "server", ["clean"], (cb)->
  open = require "open"
  server = require("./server.js")
  server.fork {}, 8080, (err, {host, port, path})->
    gutil.log("error", err) if err
    host ?= "localhost"
    path ?= "/"
    url = "http://#{host}:#{port}/webpack-dev-server#{path}"
    gutil.log "server connected #{url}"
    open url


gulp.task "webpack", ["clean"], (callback) ->
  runWebpack(webpackConfig)
  callback()

gulp.task "clean", ->
  del = require "del"
  vinylPaths = require "vinyl-paths"
  gulp.src webpackConfig.output.path, {read: false}
    .pipe vinylPaths(del)

gulp.task "default", ["webpack"]
