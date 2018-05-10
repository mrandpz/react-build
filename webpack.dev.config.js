const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js');
devConfig = {
	mode: 'development',
	devtool: 'inline-source-map',
	entry:{
		app: [
			'babel-polyfill',
				'react-hot-loader/patch',
				path.join(__dirname, 'src/index.js')
		]
	},
	output: {
		filename: '[name].[hash].js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ["style-loader", "css-loader?modules&localIdentName=[local]-[hash:base64:5]","postcss-loader"]
		}]
	},
	devServer: {
		contentBase: './dist',
		port: 9999,
		historyApiFallback: true,
		host: 'localhost',
		hotOnly: true,
		inline: true,
		hot: true,
		compress:true
	},
	plugins:[
		new webpack.DefinePlugin({
			 MOCK: true
		})
	]
}
module.exports = merge({
	customizeArray(a, b, key) {
			/*entry.app不合并，全替换*/
			if (key === 'entry.app') {
					return b;
			}
			return undefined;
	}
})(commonConfig, devConfig);