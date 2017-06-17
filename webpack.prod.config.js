const path              = require('path')
const webpack           = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  devtool: 'cheap-source-map',

  entry: {
    app: './src/app.js'
  },

  output: {
    path       : path.join(__dirname, 'public'),
    filename   : 'bundle.js',
    publicPath : '/public/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
   new ExtractTextPlugin("style.css",{allChunks:false})
  ],

  resolve: {
    extensions: ['', '.json', '.js', '.jsx']
  },

  module: {
    loaders: [
        {
            test    : /\.jsx?$/,
            loader  : 'babel',
            include : path.join(__dirname, 'src'),
            exclude : /node_modules/,
        },
        {
            test    : /\.scss?$/,
            loader  : ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader"),
            include : path.join(__dirname, 'sass')
        },
        {
            test    : /\.(png|jpg|svg)$/,
            include : path.join(__dirname, 'img'),
            loader  : 'url-loader?limit=30000&name=images/[name].[hash].[ext]'
        },
        {
            include : /\.json$/,
            loaders : ["json-loader"]
        }

    ]
  }
}
