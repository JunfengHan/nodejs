/**
 * Created by Admin on 2017/6/19.
 */

/*
require('http').createServer( function (req, res) {
    res.writeHead(200, { 'Content-Type':'image/png'});
    var stream = require('fs').createReadStream('image.png');
    stream.on('data', function (data) {
        res.write(data);
    });
    stream.on('end', function () {
        res.end();
    })
}).listen(3001);*/

//简易模式
require('http').createServer(function (req, res) {
    console.log(req.headers);
    res.writeHead(200, { 'Content-Type': 'image/png'});
    require('fs').createReadStream('image.png').pipe(res);
}).listen(3001);
