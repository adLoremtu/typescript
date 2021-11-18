
const path = require('path');

// 波カッコの中で書かれたものがwebpackの設定になるよという宣言
module.exports = {
	// webpackのモジュールバンドルを行うための起点（must）
	entry: {
		bundle: './src/index.ts'
	},
	// webpackでバンドルした（まとめた）ファイルをどこに出力するか
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	// importとexportにて拡張子を書く必要があるか
	resolve: {
		extensions: ['.ts', '.js']
	},
	// 開発用のサーバー設定
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist')
		},
		open: true
	},
	// モジュールに適用させるルール（今回はloaderの設定を入れる）
	module: {
		rules: [
			{
				loader: 'ts-loader',
				test: /\.ts$/
			}
		]
	}
};