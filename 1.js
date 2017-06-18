/*
 
 * 
 * 
 * */

//var a = 100;
//console.log(a);

function Person(name) {
	this.name = name;
}
Person.prototype.run = function(){
	console.log(this.name + ' running');
}
var p1 = new Person('han');
console.log(p1);
p1.run();

//console.log( __filename );

/*模块的加载*/
require('./2.js');

console.log(__filename);
console.log(__dirname);

// setInterval(function () {
// 	var d = new Date();
// 	console.log('现在是：' + d.getFullYear() + "年" + ( d.getMonth() + 1) + "月" + d.getDate() + "日" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() );
// },1000)

function Log(data) {
    process.stdout.write(data);
}

Log("你好");



