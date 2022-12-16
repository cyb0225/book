import { getBooks } from "./util";
console.log('加载书本详情');



// 根据url path 获取到图书的id
let query = window.location.search.substring(1);
// 获取id
let id = query.split("=")[1];
console.log(id);


// 根据id到json文件中去获取对应的图书信息
// 并判断数组长度是否大于id
let books = getBooks();
console.log(books.length);
if (books.length <= id) {
    alert('该书不存在', id);
    window.location.href = './list.html'
}

// 将图书信息插入到html标签的值中.
let book = books[id];
