const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',

	output: {
		filename: 'VueEasyWizard.js',
		path: path.resolve(__dirname, 'dist'),
		library: 'VueEasyWizard',
		libraryTarget: 'umd'
	},

	plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin(), new VueLoaderPlugin()],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
					}
				}
			},
			{
				test: /\.(scss|css)$/,
				use: [
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
		]
	},

	devServer: {
		open: true
	}
};
