const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.ttf$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: 'assets/fonts/[name][ext]'
  },
  devServer: {
    static: path.resolve(__dirname, 'src'),
    port: 8080,
    open: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}
