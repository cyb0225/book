import { getBooks, setBooks } from "./util.js"

// 获取图书列表
let books = getBooks();

let ul = document.getElementsByClassName('book-list')[0]
books.forEach((item, index) => {
    console.log(index, ":", item);
    let div1 = `<div class="cover">
    <a href="./book.html?id=${index}">
        <img src="${item.bookCover}" alt="封面">
    </a>
</div>`
    let div2 = `<div class="info">
    <a class="name" href="./book.html?id=${index}" title="${item.contentIntro}">《${item.bookName}》</a>
    <div class="author">${item.author}</div>
</div>`

    // console.log('html', ul.innerHTML)

    ul.innerHTML += "<li class=\"book\">" + div1 + div2 + "</li>"
})




// if (localStorage.getItem('liArray')) {

//     var liArray = localStorage.getItem('liArray').split('@')
//     liArray.forEach((item) => {
//         var div1 = "<div class='cover'><a href='book/book1.html'><img src='images/go高级编程.jpg' alt='封面'></a></div>"
//         var div2 = "<div class='info'><a class='title' href='book/book1.html'>" + item.split('#')[0] + "</a><div class='author'>" + item.split('#')[1] + "</div><div>"
//         ul.innerHTML += "<li>" + div1 + div2 + "</li>"
//     })
// }