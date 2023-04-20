const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      // {
      //   test: /\.ttf$/i,
      //   type: 'asset/resource'
      // },
      // {
      //   test: /\.(jpg|png|svg)/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 50000
      //     }
      //   }
      // },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',  //<-- Assets module - asset/resource
        generator: {
          filename: 'assets/images/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset',   // <-- Assets module - asset
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 8kb
          }
        },
        generator: {  //If emitting file, the file path is
          filename: 'assets/fonts/[hash][ext][query]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'index.bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    // assetModuleFilename: 'assets/fonts/[name][ext]'
  },
  devServer: {
    static: path.resolve(__dirname, 'src'),
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}
