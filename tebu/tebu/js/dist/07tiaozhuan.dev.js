"use strict";

// 获取操作对象
var box1 = document.querySelector('.box'); // 给大盒子绑定点击事件

box1.onclick = function (e) {
  //  事件兼容对象
  var e = e || window.event; //  获取点击对象

  var target = e.target || e.srcElement;

  if (target.name == "nnn") {
    var name1 = target.innerHTML;
    location = "04liebioa.html?".concat(name1);
    console.log(name1);
  }
};