

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/server/server.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    mainFields: ['browser', 'main', 'module'],
    extensions: [".ts", ".tsx", ".js", ".json", ".jsx"],
    alias: {
      'react-native': 'react-native-web'
    }

  },

  target: 'node',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'production'`
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx|ts$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|)$/,
        loader: "url-loader",

      },
      {
        test: /\.ttf$/,
        loader: "url-loader", // or directly file-loader
        include: path.resolve(__dirname, "node_modules/react-native-vector-icons"),
      },


    ]
  }
};