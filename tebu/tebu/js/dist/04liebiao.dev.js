"use strict";

// 获取操作对象
var box1 = document.querySelector('.shangpingye');
var pagination = document.querySelector('.pagination');
var xing = document.querySelector('.search');
var ull = document.querySelector('.box');
var lllll = document.querySelector('.lllll'); // 使用async函数获取数据库中的商品信息
//使用async函数获取数据库中的商品信息

var bb = 0; // 给大盒子绑定点击事件

xing.onclick = function (e) {
  //  事件兼容对象
  var e = e || window.event; //  获取点击对象

  var target = e.target || e.srcElement;

  if (target.innerHTML == "搜索") {
    //获取当前栏目名称
    var name1 = target.previousSibling.value;
    console.log(name1); // 通过async函数查询当前栏目下所有商品

    (function _callee() {
      var txt;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(promiseAjax({
                url: '../php/04liebiao2.php',
                datatype: "oneid=".concat(name1)
              }));

            case 2:
              txt = _context.sent;
              show1(txt);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    })();
  }
}; // 给大盒子绑定点击事件


ull.onclick = function (e) {
  //  事件兼容对象
  var e = e || window.event; //  获取点击对象

  var target = e.target || e.srcElement;

  if (target.name == "nnn") {
    var name1 = target.innerHTML;

    (function _callee2() {
      var txt;
      return regeneratorRuntime.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(promiseAjax({
                url: '../php/04liebiao2.php',
                datatype: "oneid=".concat(name1)
              }));

            case 2:
              txt = _context2.sent;
              show1(txt);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    })();
  }

  if (target.innerHTML == "按销量") {
    bb++;
    console.log(bb); // 使用ajax获取数据

    ajax1({
      url: "../php/04liebiao3.php?b=".concat(bb),
      success: function success(dt) {
        var ol = eval('(' + dt + ')');
        console.log(ol);
        show1(dt); // console.log(dt);
      }
    });
  }

  if (target.innerHTML == "按价格") {
    bb++;
    console.log(bb); // 使用ajax获取数据

    ajax1({
      url: "../php/04liebioa4.php?b=".concat(bb),
      success: function success(dt) {
        show1(dt); // console.log(dt);
      }
    });
  }
};

var search = location.search;

if (search) {
  var name1 = search.split('?')[1];
  name1 = decodeURI(name1);
  console.log(name1); // 使用ajax获取数据

  ajax1({
    url: '../php/04liebiao2.php',
    datatype: "oneid=".concat(name1),
    success: function success(dt) {
      // 把字符串转为对象
      // var ol = eval('(' + dt + ')')
      console.log(ol);
      show1(dt);
    }
  });
} else {
  (function _callee3() {
    var txt;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(promiseAjax({
              url: '../php/04liebiao1.php'
            }));

          case 2:
            txt = _context3.sent;
            show1(txt);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  })();
} // 创建分页器


function show1(txt) {
  //把字符串转为对象
  var ar1 = eval('(' + txt + ')'); //创建分页器的参数对象

  var o1 = {
    pageInfo: {
      pagenum: 1,
      pagesize: 20,
      totalsize: ar1.length,
      totalpage: Math.ceil(ar1.length / 20)
    },
    textInfo: {
      first: "首页",
      prev: "上一页",
      next: "下一页",
      last: '尾页'
    }
  };
  var aa = o1.pageInfo.totalsize;
  lllll.innerHTML = aa; // 创建实录分页对象

  new Pagination(pagination, o1, function (n) {
    //获取当前页的数据
    var ar2 = ar1.slice((n - 1) * 20, n * 20); //创建字符串拼接所有信息

    var str = ''; //遍历数组中所有数据

    ar2.forEach(function (item) {
      str += "\n            <div class=\"col-lg-3 col-md-4\">\n            <div class=\"thumbnail\">\n                <img\n                    src=\"".concat(item.t3, "\">\n                <div class=\"caption\">\n                    <h4>").concat(item.t1, "/h4>\n                    <p class=\"caption11\">\uFFE5<span>").concat(item.t4, "</span></p>\n                    <p class=\"caption12\">\u5DF2\u552E\u51FA<span>").concat(item.t16, "</span></p>\n\n                    <p class=\"ccc\">\n                        <a href=\"../pages/06gwuche.html\" class=\"btn btn-primary\" role=\"button\" >\u8FDB\u5165\u8D2D\u7269\u8F66</a>\n                        <a href=\"../pages/05xiangqing.html?id=").concat(item.id, "\" class=\"btn btn-default\" role=\"button\">\u67E5\u770B\u5546\u54C1\u8BE6\u60C5</a>\n                    </p>\n                </div>\n            </div>\n            </div>\n            ");
    }); // 把拼接好的内容渲染到页面中

    box1.innerHTML = str;
  });
}