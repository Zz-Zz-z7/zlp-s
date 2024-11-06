window.onload = function() {
    let t = document.querySelector(".t")
    let c = document.querySelector(".c")
    let d = document.querySelector(".d")
    let line = document.querySelector(".line")
    let p2 = document.querySelector(".p2")
    let line2 = document.getElementsByClassName("line2")
    // 滚轮事件（重点）
    window.addEventListener('scroll', function () {
        // window.srcollY是获取滚轮的值
        console.log(window.scrollY.le)
        //alert(window.scrollY)   //srcollY最后面的这个Y必须是大写的
        let opacity = 1 + window.scrollY / -500  //计算一下获取一个在1左右的值拿来当透明度
        let opacity2 = (1 + window.scrollY / -300) * -1
        t.style.opacity = opacity
        // p2就是下面那张图片，一开始的时候他的值是1，但是这里需要他在600左右才显示为1，所有还要乘一个负1，
        //滚轮越往下值越小，然后会小于0，这是负负得正刚好可以让透明度变为1（多余的自动默认为1）
        p2.style.opacity = opacity2
        var top = window.scrollY
        if (top >= 600) {
            // alert()
            c.style.left = 0 + "px"
            d.style.right = 0 + "px"
            line.style.width = 1200 + "px"
        }
        if (top >= 1150) {
            for (i = 0; i < line2.length; i++) {
                line2[i].style.height = "calc(var(--i)*" + 40 + "px)";
            }
        }
    })
}