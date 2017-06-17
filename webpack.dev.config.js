const path     = require('path');
const webpack  = require('webpack');

module.exports = {

  devtool: 'eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    './src/app.js'
  ],

  output: {
    path       : path.join(__dirname, 'public'),
    pathinfo   : true,
    filename   : 'bundle.js',
    publicPath : '/public/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  resolve: {
    extensions: ['', '.json', '.js', '.jsx']
  },

  module: {
    loaders: [
        {
            test    : /\.jsx?$/,
            loader  : 'babel',
            exclude : /node_modules/,
            include : path.join(__dirname, 'src')
        },
        {
            test    : /\.scss?$/,
            loader  : 'style!css!sass',
            include : path.join(__dirname, 'sass')
        },
        {
            test    : /\.png$/,
            loader  : 'file'
        },
        {
            test    : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader  : 'file'
        },
        {
            include : /\.json$/,
            loaders : ["json-loader"]
        }
    ]
  }
}
