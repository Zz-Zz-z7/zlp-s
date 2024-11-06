window.onload = function() {
//获取按钮和图片列表
let oLeft = document.querySelector(".left");
let oRight = document.querySelector(".right");
let oImgList = document.querySelector(".img-list");

//复制第一张到最后
let clonefirstImg=oImgList.firstElementChild.cloneNode();

//到最后
oImgList.appendChild(clonefirstImg)



let index=0;

function handleRightBtn(){
    index++;
    oImgList.style.left  = index * -800+"px";
    oImgList.style.transition="0.5s  ease"
    if(index==5){
        index=0;
        setTimeout(()=>{
        // index=0;
            oImgList.style.left=0;
        //取消过渡效果,因为切到假图
            oImgList.style.transition="none";
    },500);
  }
  //设置小圆点高亮
   setCircles()

}




// 右按钮的实现
oRight.addEventListener("click", handleRightBtn);



//左按钮实现 
oLeft.addEventListener("click",() => {
  index--;
  if (index == -1){
    oImgList.style.left  = 5 * -800+"px";
    oImgList.style.transition="none";
    index=4;
    setTimeout(()=>{
        // index=4;
        oImgList.style.left  = index * -800+"px";
        oImgList.style.transition="0.5s  ease";
    },0);
  }else{
    oImgList.style.left  = index * -800+"px";
  }
  setCircles()
});

//获取小圆点
const circles = document.querySelectorAll(".circle");

//小圆点高亮显示
function setCircles(){
    for(let i=0;i<circles.length;i++){
        if(i===index){
            circles[i].classList.add("active");
        }else{
            circles[i].classList.remove("active");
        }
    }
}

//小圆点点击切换图片   使用事件代理
const oCircle=document.querySelector(".circle-list");
oCircle.addEventListener("click",(e) =>{
    //当点击小圆点时
    if(e.target.nodeName.toLowerCase() === "li"){
        //当前元素的data-n对应的值和index对应
        const n = Number(e.target.getAttribute("data-n"));
        index=n;
        setCircles()
        oImgList.style.transition = "0.5s ease";
        oImgList.style.left=index * -800+"px";
    }
});

//自动轮播
let autoplay=setInterval(handleRightBtn,2000);
const oWrap=document.getElementById("wrap");

//移入停止轮播
oWrap.addEventListener("mouseenter",()=>{
    clearInterval(autoplay);
});

//移出继续轮播
oWrap.addEventListener("mouseleave",()=>{
    //设表先关
    clearInterval(autoplay);
    autoplay = setInterval(handleRightBtn,2000);
});
}