const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./demo/src/index",
	output: {
		path: path.join(__dirname, "./demo/build"),
		filename: "bundle.js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
		modules: ["node_modules"],
	},

	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader?name=../assets/images/[name].[ext]"],
			},
		],
	},

	devServer: {
		contentBase: './demo',
		publicPath: '/build',
	},

	// plugins: [
	// 	new HtmlWebpackPlugin(),
	// ],
};