/**
 * Created by Admin on 2017/6/18.
 */

exports.name = 'john';
exports.data = 'this is some data';

var privateVariable = 5;

exports.getPrivate= function () {
    return privateVariable;
};