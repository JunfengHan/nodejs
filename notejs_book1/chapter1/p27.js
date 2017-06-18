/**
 * Created by Admin on 2017/6/18.
 */

var start = Date.now();

setTimeout(function () {
    console.log(Date.now() - start);
    for ( var i = 0; i<100000000; i++){

    }
},1000);

setTimeout(function () {
    console.log(Date.now() - start);
},2000);0