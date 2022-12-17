import { getBooks,setBooks } from "./util.js";

let sumbitBtn = document.getElementsByClassName('submit')[0]
sumbitBtn.onclick = function () {
    // 判断用户有没有登录
    let a = localStorage.getItem('account')
    if (a === null || a === '' ) {
        alert('请先登录')
        return 
    }


    // 设置表单数据
    let formData = {
        bookName: document.getElementsByClassName('book-name')[0].value,
        bookCover: document.getElementsByClassName('book-cover')[0].value,
        author: document.getElementsByClassName('author')[0].value,
        authorIntro: document.getElementsByClassName('author-intro')[0].value,
        publishHouse: document.getElementsByClassName('publish-house')[0].value,
        publishTime: document.getElementsByClassName('publish-time')[0].value,
        price: document.getElementsByClassName('price')[0].value,
        pages: document.getElementsByClassName('pages')[0].value,
        directory: document.getElementsByClassName('directory')[0].value,
        // tag: document.getElementsByClassName('tag')[0].value,
        // difficult: document.getElementsByClassName('difficult')[0].value,
        // access: document.getElementsByClassName('access')[0].value,
        paragraph: document.getElementsByClassName('paragraph')[0].value,
        contentIntro: document.getElementsByClassName('content-intro')[0].value,
        recommend: document.getElementsByClassName('recommend')[0].value,
        // materialType: document.getElementsByClassName('material-type')[0].value,
        material: document.getElementsByClassName('material')[0].value,
    }; 


    let tag = document.getElementsByClassName('tag')[0];
    formData.tag = tag.options[tag.selectedIndex].text;

    let access = document.getElementsByClassName('access')[0];
    formData.access = access.options[access.selectedIndex].text;

    let difficult = document.getElementsByClassName('difficult')[0];
    formData.difficult = difficult.options[difficult.selectedIndex].text;

    let materialType = document.getElementsByClassName('material-type')[0];
    formData.materialType = materialType.options[materialType.selectedIndex].text;


    console.log('提交表单', formData);
    

    // 保存json到数组
    let books = getBooks();
    books.push(formData);
    setBooks(books);

    alert('发布成功！');

    // 页面跳转
    window.location.href = './list.html'
}