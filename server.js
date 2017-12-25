const auth        = require('./server/auth-route');
const search      = require('./server/search-route');
const bodyParser  = require('body-parser');
const express     = require('express');
const path        = require('path');
const port        = (process.env.PORT || 8080);
const app         = express();
const publicPathS = express.static(path.join(__dirname, 'public'), { redirect : false });


app.use(bodyParser.json());

if (process.env.NODE_ENV !== 'production') {

  const webpack              = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const DashboardPlugin      = require('webpack-dashboard/plugin');
  const config               = require('./webpack.dev.config.js');
  const compiler             = webpack(config);

  compiler.apply(new DashboardPlugin());

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
      noInfo : true,
      stats : {
          colors : true
      },
      publicPath : config.output.publicPath
  }));

  const indexPathD = path.join(__dirname, 'index.html');
  const publicPath = express.static(path.join(__dirname, 'public'));

  app.use('/public', publicPath);
  app.use('/api/login', auth);
  app.use('/api/search', search);
  app.get('/', function (_, res) { res.sendFile(indexPathD) });
  app.get('*', function (_, res) { res.sendFile(indexPathD) });

} else {

    //const client      = require('redis').createClient();
    //const limiter     = require('express-limiter')(search, client);

    //limiter({
        //path: '/api/search',
        //method: 'post',
        //lookup: 'userName',
        //whitelist:function(req) {
            //return userName == "Luke Skywalker"
        //},
        //total: 5,
        //expire: 1000 * 4
    //});

    const indexPath  = path.join(__dirname, 'public/index.html');
    app.use(publicPathS);
    app.use('/api/login', auth);
    app.use('/api/search', search);
    app.get('/', function (_, res) { res.sendFile(indexPath) });
    app.get('*', function (_, res) { res.sendFile(indexPath) });
}

app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
});
console.log(`Listening at http://localhost:${port}`);
