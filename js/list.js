import { getBooks, setBooks } from "./util.js"

getBooks();
setBooks();


var ul = document.getElementsByClassName('books')[0]

if (localStorage.getItem('liArray')) {

    var liArray = localStorage.getItem('liArray').split('@')
    liArray.forEach((item) => {
        var div1 = "<div class='cover'><a href='book/book1.html'><img src='images/go高级编程.jpg' alt='封面'></a></div>"
        var div2 = "<div class='info'><a class='title' href='book/book1.html'>" + item.split('#')[0] + "</a><div class='author'>" + item.split('#')[1] + "</div><div>"
        ul.innerHTML += "<li>" + div1 + div2 + "</li>"
    })
}