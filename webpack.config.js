var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const APLICATION_NAME = 'VueEasyWizard';
const pathFolderApplication = path.resolve(__dirname, './src');
const pathNodeModules = path.resolve(__dirname, './node_modules');
const pathDistProduction = path.resolve(__dirname, './dist');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const uglifyJsConfig = {
	test: /\.js(\?.*)?$/i,
	cache: true,
	parallel: true,
	uglifyOptions: {
		output: {
			ascii_only: true
		}
	}
};

module.exports = {
	entry: `${pathFolderApplication}/index.js`,
	mode: 'production',
	output: {
		path: pathDistProduction,
		filename: `${APLICATION_NAME}.min.js`,
		chunkFilename: '[name].js'
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin(uglifyJsConfig),
		],
	},
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							sourceMap: true
						}
					},
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
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
					}
				}
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
						plugins: [
							'@babel/plugin-transform-runtime'
						]
					}
				}

			}
		]
	},
	plugins: [
		new UglifyJsPlugin(uglifyJsConfig),
		new OptimizeCssAssetsPlugin({
			cssProcessorOptions: {
				safe: true
			}
		}),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: `${APLICATION_NAME}.min.css`
		})
	],
	resolve: {
		extensions: ['*', '.js', '.vue', '.json'],
		modules: [
			pathNodeModules
		]
	},
	watchOptions: {
		poll: true
	},
	performance: {
		hints: false
	},
	devtool: 'source-map'
};
