/**
 * Created by Admin on 2017/6/18.
 */
function c () {
    b();
};

function b() {
    a();
};

function a () {
    setTimeout(function () {
        throw new Error('here');
    },10)

};

c();