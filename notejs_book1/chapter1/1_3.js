/**
 * Created by Admin on 2017/6/17.
 */

//node书写一个完整的http

var http = require('http');
var serv = http.createServer(function (req, res) {

    res.writeHead(200, { 'content-Type': 'text/html'});
    res.end('<marquee>Smashing Node!</marquee>')

});
serv.listen(3000);