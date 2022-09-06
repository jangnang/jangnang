"use strict";

// 获取当前用户名
var name1 = getCookie('name');

if (!name1) {
  alert("您尚未登入，请登入");
  location = './02dengru.html?url=' + location.href;
}

var box = document.querySelector('div.panel-default'); //  获取localStorage中指定账户的数据

var carts = localStorage.getItem(name1) || '[]'; // 吧字符串转为对象

carts = eval('(' + carts + ')');
show1(); // 创建一个渲染所有数据的函数

function show1() {
  // 判断当前数组是否为空 
  if (carts.length > 0) {
    // 判断所有商品是否被选中
    var bool = carts.every(function (item) {
      return item.t42 == 1;
    }); // 创建变量渲染所有数据

    var s1 = " <div class=\"panel-heading1\">\n        <input type=\"checkbox\" name=\"quan\" ".concat(bool ? "checked" : '', ">\u5168\u9009\n        <span>\u5546\u54C1</span>\n        <span>\u5355\u4EF7</span>\n        <span>\u6570\u91CF</span>\n        <span>\u5C0F\u8BA1</span>\n        <span>\u64CD\u4F5C</span>\n\n    </div>\n    <div class=\"panel-body\">\n        "); // 拼接商品

    carts.forEach(function (item) {
      s1 += "<div class=\"media\">\n            <div class=\"media-left media-middle\">\n            <input type=\"checkbox\" name=\"xuan\" ".concat(item.t42 == 1 ? "checked" : '', "  data-id='").concat(item.id, "'>\n                <a href=\"#\">\n                    <img class=\"media-object\"\n                        src=\"").concat(item.t5, "\"\n                        width=\"100\" height=\"100\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">").concat(item.t1, "</h4>\n                <h4 class=\"mm-mm\">\uFFE5<span>").concat(item.t4, "</span></h4>\n\n                <button type=\"button\" class=\"btn btn-primary\"data-id='").concat(item.id, "'>\u5220\u9664</button>\n                <div class=\"btn-group\" role=\"group\" aria-label=\"...\">\n                    <button type=\"button\" data-id='").concat(item.id, "' ").concat(item.cart_number == 1 ? "disabled" : '', "   class=\"btn btn-default\">-</button>\n                    <button type=\"button\" class=\"btn btn-default\">").concat(item.cart_number, "</button>\n                    <button type=\"button\"  data-id='").concat(item.id, "' ").concat(item.t231 == item.cart_number ? "disabled" : "", " class=\"btn btn-default\">+</button>\n                    <h4 class=\"mm-mm\" >\uFFE5<span>").concat(parseInt(item.cart_number) * parseFloat(item.t4), " </span></h4>\n                </div>\n            </div>\n        </div>\n      \n        \n            ");
    });
    s1 += "<div class=\"panel-heading\">\n        <input type=\"checkbox\" name=\"quan\" ".concat(bool ? "checked" : '', ">\u5168\u9009\n        <span style=\"cursor: pointer;\">\u5220\u9664\u9009\u4E2D\u5546\u54C1</span>\n        <span style=\"cursor: pointer;\">\u6E05\u7406\u8D2D\u7269\u8F66</span>\n       \n      \n        <div class=\"lld\">\n            <p class=\"jia-ge\">\u5DF2\u9009\u62E9<span>").concat(total1()[0], "</span>\u5546\u54C1</p>\n            <p class=\"jia-ge1\">\u603B\u4EF7\uFF1A\uFFE5<span>").concat(total1()[1], "</span></p>\n            <a class=\"btn btn-success btn-xs\" style=\"cursor: pointer;\">\u53BB\u7ED3\u7B97</a>\n        </div>\n    </div>"); // 拼接底部

    s1 += '</div>'; //把拼接好的内容渲染到页面中

    box.innerHTML = s1;
  } else {
    var str = "\n    <div class=\"jumbotron\">\n        <h1>\u751F\u6D3B\u5982\u6B64\u591A\u5A07\uFF0C\u5FEB\u53BB\u4E70\u4E00\u70B9\u7684\u4E1C\u897F\u7292\u52B3\u81EA\u5DF1\u5427</h1>\n        <p>\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u5FEB\u53BB\u9009\u8D2D\u5427! ^_^</p>\n        <p><a class=\"btn btn-primary btn-lg\" href=\"./04liebioa.html\" role=\"button\">\u8D76\u7D27\u53BB\u9009\u8D2D\u5427</a></p>\n    </div>\n    "; //把数据渲染到页面中

    box.innerHTML = str;
  }
} //把购物车中所有的点击事件委托给大盒子去完成


box.onclick = function (e) {
  //兼容事件对象
  var e = e || window.event; //获取点击的对象

  var target = e.target || e.srcElement; //判断点击的是否为全选框

  if (target.name == "quan") {
    //遍历每个商品对象
    carts.forEach(function (item) {
      //判断当前全选框是否被选中
      if (target.checked) {
        item.t42 = 1;
      } else {
        item.t42 = 0;
      }
    }); //重新把当前数组存储到localStorage中

    localStorage.setItem(name1, JSON.stringify(carts));
    show1();
  } //判断当前点击的是否为选中框


  if (target.name == "xuan") {
    //获取当前选中框的id
    var id1 = target.getAttribute("data-id"); //遍历商品对象

    carts.forEach(function (item) {
      //判断遍历商品是否跟当前选中的商品相等
      if (item.id == id1) {
        item.t42 = item.t42 == 1 ? 0 : 1;
      }
    }); //重新把当前数组存储到localStorage中

    localStorage.setItem(name1, JSON.stringify(carts));
    show1();
  } //判断当前点击的是否为加法按钮


  if (target.innerHTML == "+") {
    //获取当前按钮的id
    var id = target.getAttribute('data-id'); //遍历数组元素

    carts.forEach(function (item) {
      //判断遍历的商品是否等于当前操作的商品
      if (item.id == id) {
        item.cart_number++;
      }
    }); //重新把当前数组存储到localStorage中

    localStorage.setItem(name1, JSON.stringify(carts));
    show1();
  } //判断当前点击的是否为减法按钮


  if (target.innerHTML == "-") {
    //获取当前按钮的id
    var id = target.getAttribute('data-id'); //遍历所有商品

    carts.forEach(function (item) {
      //判断遍历的商品是否等于当前操作的商品
      if (item.id == id) {
        item.cart_number--;
      }
    }); //重新把当前数组存储到localStorage中

    localStorage.setItem(name1, JSON.stringify(carts));
    show1();
  } //判断当前点击的是否为"删除"


  if (target.innerHTML == "删除") {
    //获取当前按钮的id
    var id = target.getAttribute("data-id"); //使用filter方法过滤

    carts = carts.filter(function (item) {
      return item.id != id;
    }); //重新把当前数组存储到localStorage中

    localStorage.setItem(name1, JSON.stringify(carts));
    show1();
  } //判断当前点击的按钮是否为"去结算"


  if (target.innerHTML == "去结算") {
    //给定一个确认框，判断是否要购买
    if (confirm("\u4F60\u786E\u5B9A\u8981\u82B1\uFFE5".concat(total1()[1], "\u8D2D\u4E70\u5417"))) {
      //过滤当前选中的商品
      carts = carts.filter(function (item) {
        return item.t42 != 1;
      }); //重新把当前数组存储到localStorage中

      localStorage.setItem(name1, JSON.stringify(carts));
      show1();
    }
  } //判断是否为删除删除选中商品


  if (target.innerHTML == "删除选中商品") {
    //根据条件过滤商品
    carts = carts.filter(function (item) {
      return item.t42 != 1;
    }); //把数组重新存放在localStorage中

    localStorage.setItem("cart", JSON.stringify(carts));
    show1();
  } //判断当前点击的是否为清空购物车


  if (target.innerHTML == "清理购物车") {
    //实际上就是删除数组中所有元素
    carts = []; //重新把当前数组存储到localStorage中

    localStorage.setItem(name1, JSON.stringify(carts));
    show1();
  }
}; //统计所选商品数量和价格


function total1() {
  var num = 0; //所选商品数量

  var sum = 0; //所选商品价格
  //遍历所有商品

  carts.forEach(function (item) {
    //判断当前商品是否被选中
    if (item.t42 == 1) {
      //累加需要购买的商品数量
      num += parseInt(item.cart_number); //累加所有需要购买的商品小计

      sum += parseInt(item.cart_number) * parseFloat(item.t4);
    }
  });
  return [num, sum];
}