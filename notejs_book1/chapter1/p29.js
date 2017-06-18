/**
 * Created by Admin on 2017/6/18.
 */
var http = require('http');

http.createServer(function () {
    throw new Error ('错误不会被捕获')
}).listen(3000)