"use strict";

// 获取页面中的form表单
var frm = document.querySelector('.yonhudengrubiaodan'); // 获取表单元素

var inps = frm.querySelectorAll('input'); // 获取登入按钮

var btn = frm.querySelector('button'); // 获取当前地址栏中的参数

var search = location.search; // 给登入按钮绑定点击事件

btn.onclick = function () {
  // 获取输入框中的value属性值
  var name1 = inps[0].value;
  var pass1 = inps[1].value;

  (function _callee() {
    var txt, url;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(promiseAjax({
              url: '../php/03dengru.php',
              datatype: " username=".concat(name1, "&password=").concat(pass1)
            }));

          case 2:
            txt = _context.sent;

            // 判断txt的响应是否为1
            if (txt == 1) {
              setCookie('name', name1); //  判断search是否有值

              if (search) {
                // 分割参数信息
                url = search.split('url=')[1];
                location = url;
              } else {
                location = './04liebioa.html';
              }
            } else {
              alert("账户或密码输入错误请重新输入");
              location = './02dengru.html';
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  })();
};