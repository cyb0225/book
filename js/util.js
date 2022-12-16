// 获取书本列表
export function getBooks() {
    let url = "./book/book.json"
    let request = new XMLHttpRequest();
    request.open('get', url);
    request.send(null);
    request.onload = function () {
        if (request.status === 200) {
            var data = JSON.parse(request.responseText)
            console.log('获取成功', data);
            return data
        }
    }
    return null
}

// 设置书本列表
export function setBooks() {
    // const fs = require('fs');
    const filePath = './book/book.json';
    
    let data = fs.readFileSync(filePath);
    data = JSON.parse(data);
    console.log('旧数据',data);
    data = {}
    data.name = 'John Smith';
    data.age = 30;
    data.hobbies = ['reading', 'music'];

    const updatedData = JSON.stringify(data);
    fs.writeFileSync(filePath, updatedData);
}