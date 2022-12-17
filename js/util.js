// 获取书本列表
export function getBooks() {
    // 从localStorage中获取
    let row = localStorage.getItem('books');
    if (row === null || row === '') {
        localStorage.setItem('books', []);
        console.log('未设置字段');
        return []
    }
    let books = JSON.parse(row)
    console.log('books', books);
    if (books === null || books === []) {
        return []
    }
    
    return books
}

// 设置书本列表
export function setBooks(books) {
    let row = JSON.stringify(books);
    localStorage.setItem('books', row);
    console.log('设置书单成功');
}