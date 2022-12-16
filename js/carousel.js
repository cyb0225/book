window.onload = function () {
    //轮播图
    var arrow_l = document.querySelector(".arrow-l");
    var arrow_r = document.querySelector(".arrow-r");
    var box = document.querySelector(".lunbotu");
    box.addEventListener("mouseenter", function() {
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timers);
        timers = NULL;
    })
    box.addEventListener("mouseleave", function() {
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timers = setInterval(function() {
            arrow_r.click();
        }, 3000);
    })
    //动态生成小圆
    var ul = lunbotu.querySelector("ul");
    var ol = lunbotu.querySelector(".circle");
    for (let i = 0; i < ul.children.length; i++) {
        let li = document.createElement("li");
        //记录当前小圆圈的索引号，通过自定义属性来做
        li.setAttribute("index", i);
        ol.appendChild(li);
        //排他思想
        li.addEventListener("click", function() {
            for (let i = 0; i < ol.children.length; i++) {
                ol.children[i].style.backgroundColor = "white";
            }
            this.style.backgroundColor = "pink";
            var index = this.getAttribute("index");
            num = index;
            circle = index;
            var lunbotuWidth = lunbotu.offsetWidth;
            console.log(lunbotuWidth);
            console.log(index);
            animate(ul, -index * lunbotuWidth);
        })
    }
    ol.children[0].style.backgroundColor = "pink";
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    var circle = 0;
    arrow_r.addEventListener("click", function() {
        var lunbotuWidth = lunbotu.offsetWidth;
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * 660);
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].style.backgroundColor = "white";
        }
        ol.children[circle].style.backgroundColor = "pink";
    });

    arrow_l.addEventListener("click", function() {
        var lunbotuWidth = lunbotu.offsetWidth;
        if (num == 0) {
            ul.style.left = 0;
            num = ul.children.length - 1;
        }
        num--;
        animate(ul, -num * 660);
        circle--;
        if (circle < 0) {
            circle = ol.children.length - 1;
        }
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].style.backgroundColor = "white";
        }
        ol.children[circle].style.backgroundColor = "pink";
    });

    var timers = setInterval(function() {
        arrow_r.click();
    }, 3000);
};