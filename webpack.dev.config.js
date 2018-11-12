var path = require("path");
var webpack = require("webpack");
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './index.js',
	module: {
		loaders: [
			{
				loader: 'babel-loader!eslint',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				loader: "style!css!sass"
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				loader: 'file-loader'
			},
			{
				test: /\.(ttf|eot|svg|woff(2)?)(\?[^('|")]*)?$/,
				loader: "file-loader?name=images/[hash:8].[name].[ext]"
			}
		]
	},
	output: {
		filename: 'main.bundle.js'
	},
	devServer: {
		filename: 'main.bundle.js',
		host: '0.0.0.0',
		port: 3000,
		disableHostCheck: true,
		quiet: true
	},
	eslint: {
		configFile: '.eslintrc'
		, formatter: require("eslint-friendly-formatter")
	},
	resolve: {
		modulesDirectories: [
			'src',
			'node_modules'
		],
		extensions: ['', '.json', '.js', '.jsx']
	},
	plugins: [
		new CaseSensitivePathsPlugin() //检查引用文件名字的大小写
		,new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				messages: ["The application is running at : http://0.0.0.0:3000/"]
			}
		})
		
	]
}