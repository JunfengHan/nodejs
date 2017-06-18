/**
 * Created by Admin on 2017/6/18.
 */
var fs = require('fs');
var  stdin = process.stdin;
var  stdout = process.stdout;

file(0);
function file(i) {
    var filename = files[i];

    //called for each file walked in the directory
    fs.stat(__dirname + '/' + filename, function (err, stat) {
        if (stat.isDirectory()) {
            console.log(' '+ i + '\033[36m' + filename + '/\033[39m');
        } else {
            console.log(' '+ i + ' \033[90m' + filename + '\033[39m');
        }

        if ( ++i == files.length) {
            read();
        } else (
            file(i)
        )
    });
}

// read user input when files are shown
function read() {
    console.log('');
    stdout.write(' \033[33mEnter your choice: \033[39m');
    stdin.resume();
    stdin.setEncoding('utf-8');
    stdin.on('data', option);
}

//called with the option supplied by the user
function option (data) {
    if (!files[Number(data)]) {
        stdout.write(' \033[31mEnter your choice: \033[39m');
    } else {
        stdin.pause();
    }
}
