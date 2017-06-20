/**
 * Created by Admin on 2017/6/19.
 */
require('http').createServer(function (req, res) {
    res.writeHead(200,{ 'Content-Type': 'text/html'});
    res.write('Hello \  n');

    setTimeout(function () {
        res.end('World');
    }, 2000);

}).listen(3000);