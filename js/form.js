function submit() {
    // 判断用户有没有登录
    let a = localStorage.getItem('account')
    if (a === null || a === '' ) {
        alert('请先登录')
        return 
    }


    // 设置表单数据
    let formData = {
        bookName: document.getElementsByClassName('book-name')[0].value,
        author: document.getElementsByClassName('author')[0].value,
        
    }; 


    console.log('提交表单', formData);
    // 保存图片


    // 保存json到数组


    // 页面跳转
    // window.location.href = './list.html'
}