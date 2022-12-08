var inputArray = [...document.getElementsByClassName('input')]
var submit = document.getElementsByClassName('submit')[0]
submit.onclick = function () {
    var li = inputArray[0].value + "#" + inputArray[1].value

    var liArray = localStorage.getItem('liArray') ? localStorage.getItem('liArray') + "@" + li : li
    console.log(liArray)
    localStorage.setItem('liArray', liArray + "@" + li)
    // inputArray.forEach((item) => {
    //     console.log(item.value)
    // })
}