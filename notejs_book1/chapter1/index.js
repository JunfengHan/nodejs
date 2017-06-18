/**
 * Created by Admin on 2017/6/18.
 */
var mybuffer = new Buffer('==ii1j2i3hli23h', 'base64');
console.log(mybuffer);
require('fs').writeFile('logo.png', mybuffer);