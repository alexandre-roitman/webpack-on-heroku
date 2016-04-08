/* eslint no-undef: "off", no-console: "off" */

var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('./config.json');
var app = express();

var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(path.resolve(path.dirname()), config.publicFolder);

var prodListener = app.use(express.static(static_path))
    .get('/', function (req, res) {
        res.sendFile('index.html', {
            root: static_path
        });
    }).listen(process.env.PORT || config.prodPort, function (err) {
        if (err) { console.log(err); }
        console.log('Production is listening at localhost:' + prodListener.address().port);
    });

if (isDevelopment) {
    var webpackDevConf = require('./webpack.config');
    var WebpackDevServer = require('webpack-dev-server');

    new WebpackDevServer(webpack(webpackDevConf), {
        publicPath: webpackDevConf.output.publicPath,
        hot: true,
        stats: { colors: true }
    }).listen(config.devPort, 'localhost', function (err) {
        if (err) { console.log(err); }
        console.log('Development is listening at localhost:' + config.devPort);
    });
}



var db = require("seraph")(process.env.GRAPHENEDB_URL || 'http://app49254525-V8nVGY:W1BRqJoehLMb06gYIi62@app49254525v8nvgy.sb02.stations.graphenedb.com:24789');
console.log(db);
// db.save({ name: "Test-Man", age: 40 }, function(err, node) {
//   if (err) throw err;
//   console.log("Test-Man inserted.");

//   db.delete(node, function(err) {
//     if (err) throw err;
//     console.log("Test-Man away!");
//   });
// });
