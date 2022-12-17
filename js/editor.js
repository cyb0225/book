import { getBooks, setBooks } from "./util.js";
console.log('加载书本详情');



// 根据url path 获取到图书的id
let query = window.location.search.substring(1);
// 获取id
let id = query.split("=")[1];
console.log(id);

let books = getBooks();
let book = books[id];

console.log('要编辑的书本原始数据', book);


// 渲染页面
let ul = document.getElementsByClassName('book-form')[0]
let div1 = `<h1 class="header-title">新增书单</h1>
<span class="hint">书籍名称</span>
<input class="input book-name" type="text" value="${book.bookName}">
<span class="hint">书籍封面</span>
<input class="input book-cover" type="text" value="${book.bookCover}">
<span class="hint">作者姓名</span>
<input class="input author" type="text" value="${book.author}">
<span class="hint">作者简介</span>
<textarea class="input author-intro" rows="3"></textarea>
<span class="hint">
    出版社信息
</span>
<input class="input publish-house" type="text" value="${book.publishHouse}">
<span class="hint">
    作品发布时间
</span>
<input class="input publish-time" type="text" value="${book.publishTime}">
<span class="hint">市场价</span>
<input class="input price" type="text" value="${book.price}">
<span class="hint">总页数</span>
<input class="input pages" type="text" value="${book.pages}">
<span class="hint">目录</span>
<input class="input directory" type="text" value="${book.directory}">
<span class="hint">标签</span>
<select class="input tag" name="cars">
    <option value="saab">编程语言基础</option>
    <option value="fiat">web开发</option>
    <option value="audi">数据结构</option>
    <option value="audi">计算机网络</option>
    <option value="audi">操作系统</option>
    <option value="audi">编译原理</option>
    <option value="audi">人工智能</option>
    <option value="audi">其他</option>
</select>
<span class="hint"> 阅读难度:</span>
<select class="input difficult" name="cars">
    <option value="saab">1</option>
    <option value="fiat">2</option>
    <option value="audi">3</option>
    <option value="audi">4</option>
    <option value="audi">5</option>
</select>
<span class="hint">评价等级</span>
<select class="input access" id="accesss" name="cars">
    <option value="saab">1</option>
    <option value="fiat">2</option>
    <option value="audi">3</option>
    <option value="audi">4</option>
    <option value="audi">5</option>
</select>
<span class="hint">优选段落</span>
<textarea class="input paragraph" rows="3"></textarea>
<span class="hint">内容简介</span>
<textarea class="input content-intro" rows="3"></textarea>
<span class="hint">推荐阅读方式</span>
<textarea class="input recommend" rows="3"></textarea>
<span class="hint">配套学习资料</span>
<select class="input material-type" name="cars">
    <option value="saab">课程</option>
    <option value="fiat">视频</option>
    <option value="audi">博客</option>
    <option value="audi">代码仓库</option>
    <option value="audi">文档</option>
</select>
<textarea class="input material" rows="1"></textarea>`

ul.innerHTML += div1

// 修改textarea
document.getElementsByClassName('author-intro')[0].value = book.authorIntro
document.getElementsByClassName('paragraph')[0].value = book.paragraph
document.getElementsByClassName('content-intro')[0].value = book.contentIntro
document.getElementsByClassName('recommend')[0].value = book.recommend
document.getElementsByClassName('recommend')[0].value = book.recommend
document.getElementsByClassName('material')[0].value = book.material


// 修改select
let index = 0;
let tag = document.getElementsByClassName('tag')[0];
// console.log(tag.options);
for (let i = 0; i < tag.options.length; i++) {
    if (tag.options[i].text === book.tag) {
        index = i;
    }
}

// console.log('tag index', index);
tag.selectedIndex = index;

index = 0;
let access = document.getElementsByClassName('access')[0];
for (let i = 0; i < access.options.length; i++) {
    if (access.options[i].text === book.access) {
        index = i;
    }
}

access.selectedIndex = index;



index = 0;
let difficult = document.getElementsByClassName('difficult')[0];
for (let i = 0; i < difficult.options.length; i++) {
    if (difficult.options[i].text === book.difficult) {
        index = i;
    }
}

difficult.selectedIndex = index;



index = 0;
let materialType = document.getElementsByClassName('material-type')[0];
for (let i = 0; i < materialType.options.length; i++) {
    if (materialType.options[i].text === book.materialType) {
        index = i;
    }
}

materialType.selectedIndex = index;







// 提交表单
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
    books[id] = formData;
    setBooks(books);

    alert('修改成功！');

    // 页面跳转
    window.history.go(-1);
}