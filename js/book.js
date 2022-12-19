import { getBooks, setBooks } from "./util.js";
console.log('加载书本详情');

// 根据url path 获取到图书的id
let query = window.location.search.substring(1);
// 获取id
let id = query.split("=")[1];
console.log(id);


// 根据id到json文件中去获取对应的图书信息
// 并判断数组长度是否大于id
let books = getBooks();
console.log('book-num',books.length);
if (books.length <= id) {
    alert('该书不存在', id);
    window.location.href = './list.html'
}

// 将图书信息插入到html标签的值中.
let book = books[id];

console.log('要加载的书本', book);


// 渲染标签
document.getElementsByClassName('book-name')[0].innerHTML = book.bookName;
document.getElementsByClassName('cover')[0].src = book.bookCover;
document.getElementsByClassName('author')[0].innerHTML = book.author;
document.getElementsByClassName('publish-house')[0].innerHTML = book.publishTime;
document.getElementsByClassName('pages')[0].innerHTML = book.pages;
document.getElementsByClassName('price')[0].innerHTML = book.price;
document.getElementsByClassName('difficult')[0].innerHTML = book.difficult;
document.getElementsByClassName('access')[0].innerHTML = book.access;
document.getElementsByClassName('tag')[0].innerHTML = book.tag;
document.getElementsByClassName('publihs-time')[0].innerHTML = book.publishTime;

document.getElementsByClassName('content-intro')[0].innerHTML = book.contentIntro;
document.getElementsByClassName('author-intro')[0].innerHTML = book.authorIntro;
document.getElementsByClassName('paragraph')[0].innerHTML = book.paragraph;
document.getElementsByClassName('recommend')[0].innerHTML = book.recommend;
document.getElementsByClassName('material-type')[0].innerHTML = book.materialType;
document.getElementsByClassName('material')[0].innerHTML = book.material;
document.getElementsByClassName('directory')[0].innerHTML = book.directory;

let deleteBtn = document.getElementsByClassName('delete')[0]
deleteBtn.onclick = function () {
    // 判断用户有没有登录
    let a = localStorage.getItem('account')
    if (a === null || a === '' ) {
        alert('请先登录')
        return 
    }

    console.log('delete', id)
    let books = getBooks();
    books.splice(id, 1);
    setBooks(books);
    alert('删除成功');
    window.location.href = './list.html';
}

let editorBtn = document.getElementsByClassName('editor')[0]
editorBtn.onclick = function () {

    // 判断用户有没有登录
    let a = localStorage.getItem('account')
    if (a === null || a === '' ) {
        alert('请先登录')
        return 
    }


    console.log('editor', id);
    // 页面跳转到更新的页面
    window.location.href = './editor.html?id=' + id;
}