var webpack = require("webpack");
var path = require("path");
module.exports = {
  devtool:"inline-source-map",
  entry:[
    "webpack-dev-server/client?http://127.0.0.1:8080/",
    "webpack/hot/only-dev-server",
    "./src"
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    modulesDirectories: ["node_modules", "./src/index.js"],
    extensions: ["", ".js"]
  },
  module:{
    loaders:[
    {
      test: /\.jsx$/,
      exlude:/node_modules/,
      loaders:["babel-loader"]
    }
    ]
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

// might have to double-check this, as this was all manually typed
// had to change test: /\.jsx?$/ to test: /\.jsx$/ without the question mark
// had to change loader:["react-hot", "babel?presets[]=react,presets[]=es2015"] to loaders:["babel-loader"]
// had to create a new file called .babelrc and pin it to the main directory with presets: ["react", "es2015"], plugins: ["react-hot-loader/babel"], remembering to take the quotation marks away from presets and plugins
// remember that to actually see the message at this particular point, you have to go into the URL http://localhost:8080/webpack-dev-server/bundle




