var path = require('path');
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: '/',
    filename: './index.js',
  },
  // Enable sourcemaps for debugging webpack's output.
  // devtool: "source-map",


  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      'react-native': 'react-native-web',
      '@expo/vector-icons': 'react-native-vector-icons'
    }
  },

  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true
  },
  module: {


    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.


      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', "babel-preset-expo"]
        }
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
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.

};