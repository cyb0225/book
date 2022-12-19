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