/**
 * Created by Admin on 2017/6/17.
 */

var books = [
    'Metamorphosis',
    'Crime and punishment'
];

function serveBooks() {
    //给客户端返回HTML代码
    var html = '<b>' + books.join('</b><br><b>') + '</b>';

    //恶魔出现，把状态修改了！
    books = [];
    return html;
}
