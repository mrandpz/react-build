const path = require('path');
const webpack = require('webpack')
module.exports = {
	mode: 'development',
	entry: [
		'react-hot-loader/patch',
		path.join(__dirname, 'src/index.js')
	],
	output: {
		path: path.join(__dirname, './dist'),
		filename: 'bundle.js',
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
		hot: true
	},
	plugins: [
	],
	devtool: 'inline-source-map',
	resolve: {
		alias: {
			pages: path.join(__dirname, 'src/pages'),
			component: path.join(__dirname, 'src/component'),
			router: path.join(__dirname, 'src/router')
		}
	}
}