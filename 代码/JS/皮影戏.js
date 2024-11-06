window.onload = function() {
    // 获取左边大图的元素
    let b = document.querySelector(".big_img")
    // 获取右边小图的所有元素
    let d = document.getElementsByClassName("d")

    let time
    let index = 0

    // 设置一个重置函数
    let reset = function () {
        for (let i = 0; i < d.length; i++) {
            d[i].className = "d"
        }
    }
    // 设置一个选中函数
    let chioce = function () {
        // 先代入重置函数
        reset()
        d[index].className = "d dd"
    }
    // 设置启动轮播图的时间函数
    function ts() {
        time = setInterval(function () {
            chioce()
            index++
            b.style.backgroundImage = "url('../Image/皮影戏" + [index] + ".jpg')"
            if (index == 5) {
                index = 0
            }
        }, 1500);
    }
    for (let i = 0; i < d.length; i++) {
        // 鼠标移动到当前小图片上时触发
        d[i].onmousemove = function () {
            // 鼠标移动到当前小图片时右边大图片变成当前的小图片
            b.style.backgroundImage = "url('../Image/皮影戏" + [i + 1] + ".jpg')"
            // 鼠标移动到小图片上面时关闭定时器并重置定时，
            // 鼠标移开后再继续执行
            reset()
            clearInterval(time)
            index = i + 1
            ts()
        }
    }
    // 执行轮播图
    ts()
}