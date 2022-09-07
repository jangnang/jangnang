"use strict";

//获取操作对象
var frm = document.querySelector('.rigth-zhuche1'); //获取当前表单中所有的表单元素

var inps = frm.querySelectorAll("input"); //获取表单中的按钮对象

var btns = frm.querySelectorAll("button"); //获取输入框后面的span标签

var spans = frm.querySelectorAll('span');
var pass = false; //密码未验证通过

var user = false; //账号未验证通过

var email = false; //密码未验证通过

var user = false; //账号未验证通过
//给账号绑定失去焦点事件

inps[0].onblur = function () {
  //获取输入框中的value值
  var val = this.value;
  var reg = /^([\u4e00-\u9fa5]|\w){2,10}$/;

  if (reg.test(val)) {
    //使用async函数发送请求
    (function _callee() {
      var txt;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(promiseAjax({
                url: '../php/01zhuce.php',
                datatype: "user1=".concat(val)
              }));

            case 2:
              txt = _context.sent;

              //判断响应结果是否等于2
              if (txt == 2) {
                user = true;
                spans[0].innerHTML = "√";
              } else {
                user = false;
                spans[0].innerHTML = 'x';
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    })();
  } else {
    spans[0].innerHTML = "x";
    user = false;
  }
};

inps[1].onblur = function () {
  var val = this.value;
  var reg = /^\w{6,16}$/;

  if (reg.test(val)) {
    spans[1].innerHTML = "√";
    pass = true;
  } else {
    spans[1].innerHTML = "x";
    pass = false;
  }
};

inps[2].onblur = function () {
  var val = this.value;
  var vel1 = inps[1].value;

  if (val == vel1) {
    spans[2].innerHTML = "√";
    pass = true;
  } else {
    spans[2].innerHTML = "x";
    pass = false;
  }
};

inps[3].onblur = function () {
  var val = this.value;
  var reg = /^(1|\+861)[3-8]{1}\d{9}$/;

  if (reg.test(val)) {
    spans[3].innerHTML = "√";
    phone = true;
  } else {
    spans[3].innerHTML = "x";
    phone = false;
  }
};

inps[4].onblur = function () {
  var val = this.value;
  var reg = /^\w{2,18}@[0-9a-z]{1,10}(\.[a-z]{2,3}){1,2}$/;

  if (reg.test(val)) {
    spans[4].innerHTML = "√";
    email = true;
  } else {
    spans[4].innerHTML = "x";
    email = false;
  }
};

inps[5].onclick = function () {
  //判断当前选中框是否被选中
  if (this.checked) {
    btns[0].disabled = false;
  } else {
    btns[0].disabled = true;
  }
}; //给注册按钮绑定点击事件


btns[0].onclick = function () {
  //判断所有的表单元素是否都验证成功
  if (user && pass && phone && email) {
    //获取所有输入框中的内容
    var n1 = inps[0].value;
    var p1 = inps[1].value;
    var t1 = inps[3].value;
    var e1 = inps[4].value; //通过ajax发送请求

    ajax1({
      url: '../php/02zhuce2.php',
      datatype: "user=".concat(n1, "&pass=").concat(p1, "&phone=").concat(t1, "&email=").concat(e1),
      success: function success(dt) {
        //判断响应结果是否为1
        if (dt == 1) {
          alert("注册成功");
          location = './02dengru.html';
        } else {
          alert("注册失败");
        }
      }
    });
  } else {
    inps[0].onblur();
    inps[1].onblur();
    inps[2].onblur();
    inps[4].onblur();
  }
};