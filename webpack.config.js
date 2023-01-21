const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const path = require('path');

// const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// var BundleTracker = require('webpack-bundle-tracker');
// const TerserPlugin = require("terser-webpack-plugin");

var JS_DIR_ENTRY_PATH = './src/assets/js/';
var DIR_OUTPUT_PATH = './dist/';

module.exports = {
    mode: process.env.NODE_ENV,
    name: "app js",
    entry: {
        app_base : JS_DIR_ENTRY_PATH + "index.js",
        alpine: JS_DIR_ENTRY_PATH + "alpine.js",
        htmx: JS_DIR_ENTRY_PATH + "htmx.js",
        editor: JS_DIR_ENTRY_PATH + "monaco_editor.js",
    },
    output: {
        path: path.resolve(__dirname, DIR_OUTPUT_PATH),
        // filename: '[name].bundle.js',
        filename: 'js/' + "[name].[hash].bundle.js",
        // chunkFilename: './js/chunkFilename.[name].bundle.js',   // prepend folder name
        clean: true,
    },
    plugins: [
		new MonacoWebpackPlugin({
			languages: ['typescript', 'javascript', 'css']
		}),
        new MiniCssExtractPlugin({ 
            filename: 'css/' + "[name].[hash].css",
            // chunkFilename: 'css/[name].[id].css',    // prepend folder name
            ignoreOrder: false,    
        }),
        // new BundleTracker({
        //     path: path.resolve(__dirname, DIR_OUTPUT_PATH),
        //     filename: 'webkit-source.json',
        // }),
	],
    optimization: {
        // minimize: true
        minimizer: [
            new CssMinimizerPlugin(),
            // new TerserPlugin(),
        ]
    },
    module: {
        rules: [
            {
                // test: /\.css$/i,
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    // "style-loader",
                    MiniCssExtractPlugin.loader, //3. Extract css into files
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                    // {
                    //     loader: 'sass-loader',
                    //         options: {
                    //         implementation: require('sass'),
                    //         }
                    // }
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    // "style-loader",
                    MiniCssExtractPlugin.loader, //3. Extract css into files
                    // Translates CSS into CommonJS
                    "css-loader",
                ],
            },
            {
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: {
                    loader: "file-loader",
                    options: {
                      name: "[name].[hash].[ext]",
                      outputPath: 'fonts'  // folder name
                    }
                }
			},
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    name: "[name].[hash].[ext]",
                    outputPath: 'images'  // folder name
                  }
                }
            }
        ]
    },
}