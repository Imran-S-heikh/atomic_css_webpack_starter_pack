const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

  entry: './src/script/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  devServer: {
    port: 5555,
    open: true,
    // writeToDisk: true
  },

  //Shows the source file error line
  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      {
        test: /\.(png|jpeg|gif|jpg|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: path.resolve(__dirname, "src/")
        },
      },
      {
        test: /\.(sass|scss|css)$/i,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.html$/,
        use: [
        {
          loader: 'html-loader',
        },
        {
          loader: 'webpack-atomizer-loader',
          options: {
            configPath: path.resolve('./atomizer.config.js')
          }
        }
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyPlugin([
        { from: './src/style/molecules.js', to: './node_modules/atomizer/src/helpers.js'}
    ])
  ],

}
