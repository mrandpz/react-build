const path = require('path');
const webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	entry:{
		app: [
				'react-hot-loader/patch',
				path.join(__dirname, 'src/index.js')
		],
		vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
},
	output: {
		path: path.join(__dirname, './dist'),
		filename: '[name].[hash].js',
		chunkFilename: '[name].[chunkhash].js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: ['babel-loader?cacheDirectory=true'],
			include: path.join(__dirname, 'src')
		},{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
	 },{
    test: /\.(png|jpg|gif)$/,
    use: [{
        loader: 'url-loader',
        options: {
            limit: 8192
        }
    }]
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
	plugins: [new HtmlWebpackPlugin({
			filename: 'index.html',
			template: path.join(__dirname, 'src/index.html')
	})],
	optimization: {
		splitChunks: {
			chunks: "async",
			minSize: 30000,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			name: true,
			cacheGroups: {
					default: {
							minChunks: 2,
							priority: -20,
							reuseExistingChunk: true,
					},
					vendors: {
							test: /[\\/]node_modules[\\/]/,
							priority: -10
					}
			}
		},
	},
	
	devtool: 'inline-source-map',
	resolve: {
		alias: {
			pages: path.join(__dirname, 'src/pages'),
			component: path.join(__dirname, 'src/component'),
			router: path.join(__dirname, 'src/router')
		}
	}
}