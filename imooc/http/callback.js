/**
 * Created by Admin on 2017/6/20.
 */
function learn(something) {
    console.log(something)
}

function we(callback, something) {
    something += ' is coll';
    callback(something);
}

we(learn, 'Nodejs');

we(function (something) {
    console.log(something);
},'Jade');

function Animal(){
    this.name = "Animal";
    this.showName = function(){
        console.log(this.name);
    }
}

function Cat(){
    this.name = "Cat";
}

var animal = new Animal();
var cat = new Cat();

//通过call或apply方法，将原本属于Animal对象的showName()方法交给对象cat来使用了。
//输入结果为"Cat"
// animal.showName.call(cat,"");
animal.showName.apply(cat,[]);