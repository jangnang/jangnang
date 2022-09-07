"use strict";

// 首先获取操作对象
var box = document.getElementById('lunbo');
var img = document.getElementById('img1');
var left = document.getElementById('left');
var right = document.getElementById('right'); // var lis = document.querySelectorAll('li')
// 构造图片和文字数组

var arr_img = ['../images/1920x650.jpg', '../images/PC轮播1.jpg', '../images/1920x650.jpg']; // 图片轮播

var currentIndex = 0;

function slide() {
  // lis[currentIndex].className = ''
  img.src = arr_img[currentIndex]; // text.innerText = arr_text[currentIndex]

  currentIndex = ++currentIndex % 2; // lis[currentIndex].className = 'bg'
} // 使用setInterval完成轮播


var pause = setInterval(slide, 2000); // 鼠标悬停时，停止轮播
// 使用clearInterval来完成

box.addEventListener('mouseover', function () {
  left.style.display = 'block';
  right.style.display = 'block';
  clearInterval(pause);
}); // 鼠标离开后，继续轮播

box.addEventListener('mouseout', function () {
  left.style.display = 'none';
  right.style.display = 'none';
  pause = setInterval(slide, 2000);
}); // 手动切换图片

left.addEventListener('click', function () {
  // lis[currentIndex].className = ''
  currentIndex = --currentIndex % 2;

  if (currentIndex < 0) {
    currentIndex += 2;
  } // lis[currentIndex].className = 'bg'


  img.src = arr_img[currentIndex]; // text.innerText = arr_text[currentIndex];
}); // 点击事件

right.addEventListener('click', function () {
  // lis[currentIndex].className = ''
  currentIndex = ++currentIndex % 2; // lis[currentIndex].className = 'bg'

  img.src = arr_img[currentIndex]; // text.innerText = arr_text[currentIndex];
});
/* 
        需求分析：
            1、页面布局
            2、确认操作对象
            3、封装运动函数
            4、图片和按钮对应
    */
//获取操作对象

var box = document.querySelector('.lunbotu2');
var boxDiv = document.querySelector('.datu');
var imgs = boxDiv.querySelectorAll('ul li');
var imgIndex = 1; //当前图片下标

var btnIndex = 0; //按钮的下标

var dsq1; //图片和图片切换的定时器

var dsq2; //图片移动的定时器

var bool = true; //判断图片目前是否正则移动
//获取图片宽度

var imgWidth = imgs[0].offsetWidth; //初始化滚动距离

boxDiv.scrollLeft = imgIndex * imgWidth; //创建图片和图片的切换函数

function autoMove() {
  //递增图片下标
  imgIndex++; //判断当前图片下标是否大于5

  if (imgIndex > 5) {
    //要显示的图片下标实际上是1
    imgIndex = 1; //修改当前图片的滚动距离

    boxDiv.scrollLeft = 0;
  }

  move(); //修改按钮下标

  btnIndex++;

  if (btnIndex > 4) {
    btnIndex = 0;
  }
} //浏览器状态事件


document.onvisibilitychange = function () {
  //判断当前浏览器是否被隐藏
  if (document.hidden) {
    //停止图片切换
    clearInterval(dsq1);
  } else {
    //继续图片切换
    dsq1 = setInterval(autoMove, 2500);
  }
}; //创建定时器调用切换图片的函数


dsq1 = setInterval(autoMove, 2500); //给大盒子对象绑定鼠标移入移出

box.onmouseover = function () {
  //停止图片切换的定时器
  clearInterval(dsq1);
};

box.onmouseout = function () {
  //创建定时器调用切换图片的函数
  dsq1 = setInterval(autoMove, 2500);
}; //创建图片切换时的运动函数


function move() {
  //获取开始位置
  var start = boxDiv.scrollLeft; //设置结束位置

  var end = imgIndex * imgWidth; //设置步长

  var speed = (end - start) / 10; //设置开始步数

  var s1 = 0; //设置结束步数

  var s2 = 10; //清除定时器

  clearInterval(dsq2); //创建定时器

  dsq2 = setInterval(function () {
    s1++; //当s1跟s2相等时停止运动

    if (s1 == s2) {
      clearInterval(dsq2); //直接走到终点

      boxDiv.scrollLeft = end; //重新把bool设置为true，表示图片可以继续切换

      bool = true;
      return;
    } //修改当前滚动距离


    start = start + speed; //再把修改好的滚动距离赋值给当前位置

    boxDiv.scrollLeft = start;
  }, 50);
} // var  li2=document.querySelector('.qbuerji')
// var  div1=document.querySelector('.asd')
// div1.addEventListener('mouseover', function () {
//     li2.style.display = 'block'
// });
// // 鼠标离开后，继续轮播
// div1.addEventListener('mouseout', function () {
//     li2.style.display = 'none'
// })