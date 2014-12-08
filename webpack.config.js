
var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: "./app/app.js",
	output: {
		path: "dist/",
		filename: "bundle.js"
	},
	devtool: 'source-map',
	module: {
		preLoaders: [
    //  {
    //    test: /\.js$/,
    //    loader: "source-map-loader"
    //  }
    ],
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.coffee$/, loader: "coffee-loader"}

		]
	},
	resolve: {
			root: [path.join(__dirname, "bower_components")]
	},
	devtool: "#inline-source-map",
	plugins: [
			new webpack.ResolverPlugin(
					new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
			)
	]
};
