"use strict";

//  获取大盒子对象
var box = document.querySelector('.xiangqingyeshoye'); //  获取地址栏中的参数

var search1 = location.search; // 创建变量接收商品信息

var o1; // 创建变量存放商品数量

var num = 1; // 判断地址栏中是否有参数信息

if (!search1) {
  alert("非法进入");
  location = './04liebioa.html';
} else {
  // 获取参数信息
  var id = search1.split('=')[1]; // 根据当前id信息去获取对应的商品信息

  (function _callee() {
    var txt, str;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(promiseAjax({
              url: '../php/05xiangqing.php',
              datatype: 'id=' + id
            }));

          case 2:
            txt = _context.sent;
            // 把字符串转为对象
            o1 = eval('(' + txt + ')'); // 创建字符串，拼接要显示的内容

            str = " \n            <div class=\"fengleye\">\n                <a href=\"./01sy.html\">\u9996\u9875</a>&gt;<a href=\"./04liebioa.html\">\u4EA7\u54C1\u7CFB\u5217</a>&gt;".concat(o1.t11, "\n            </div>\n            <!-- \u4E0A\u534A\u90E8\u5206\u8BE6\u60C5\u9875 -->\n            <div class=\"xianqing-tup\">\n\n\n                <div class=\"jqzoom\">\n                    <div class=\"jqzoom-tup\"> <img src=\"").concat(o1.t5, "\"\n                           \" width=\"400\"alt=\"\">\n                            <div class=\"mark\"></div>\n                    </div>\n                    <div class=\"box-rigth1\">\n                        <img src=\"").concat(o1.t5, "\">\n                    </div>\n                    <ul class=\"thumb_list\">\n                        <li class=\"bd\">\n                        <img src=\"").concat(o1.t8, "\"></li>\n                        <li><img src=\"").concat(o1.t9, "\"\n                                \"></li>\n                        <li><img src=\"").concat(o1.t10, "\"\n                               \"></li>\n\n                    </ul>\n                    <div class=\"herb_icon\">\n                        <a href=\"javascript:;\"><img src=\"http://image.xtep.com.cn/Util/images/product/zy_icon.png\"\n                                alt=\"\u5B98\u65B9\u76F4\u8425\">\u5B98\u65B9\u76F4\u8425</a>\n                        <a href=\"javascript:;\"><img src=\"http://image.xtep.com.cn/Util/images/product/zp_icon.png\"\n                                alt=\"\u6B63\u54C1\u4FDD\u8BC1\">\u6B63\u54C1\u4FDD\u8BC1</a>\n                        <a href=\"javascript:;\"><img src=\"http://image.xtep.com.cn/Util/images/product/th_icon.png\"\n                                alt=\"\u4E03\u5929\u9000\u6362\">\u4E03\u5929\u9000\u6362</a>\n                        <a href=\"javascript:;\"><img src=\"http://image.xtep.com.cn/Util/images/product/fx_icon.png\"\n                                alt=\"\u5206\u4EAB\">\u5206\u4EAB</a>\n                        <a href=\"javascript:;\"><img src=\"http://image.xtep.com.cn/Util/images/product/sc_icon.png\"\n                                alt=\"\u6536\u85CF\u5546\u54C1\">\u6536\u85CF\u5546\u54C1</a>\n                    </div>\n                </div>\n                <!-- \u53F3\u8FB9\u8BE6\u60C5\u9875 -->\n                <div class=\"pro-main1\">\n                    <h2 class=\"pro-tit\">").concat(o1.t11, "</h2>\n                    <div class=\"xiangqing-mm\">\n                        <div class=\"getCoupons\">\n                            <a href=\"javascript:;\" class=\"couponBtn\">\n                                <img src=\"../images/coupons-btn-pc.png\"></a></div>\n                        <div class=\"main-price\">\n                            <span class=\"proTitl member\">\u5B98\u65B9\u6298\u6263\u4EF7</span>\n                            <span class=\"memberprice\"> \uFFE5<b>").concat(o1.t12, "</b></span>\n                            <div class=\"code\"><a href=\"javascript:;\"><img\n                                        src=\"http://image.xtep.com.cn/util/images/product/code_icon.png\"\n                                        alt=\"\u4E8C\u7EF4\u7801\"></a><span>\n                            </div>\n                        </div>\n                        <div class=\"main-price\">\n                            <span class=\"market\">").concat(o1.t14, "</span>\n                            <span class=\"marketprice\"><b>\xA5").concat(o1.t13, "</b></span></div>\n                        <div class=\"main_lj\">\n                            <div class=\"lj\">\u7D2F\u8BA1\u8BC4\u4EF7\uFF1A<span>").concat(o1.t15, "</span></div>\n                            <div class=\"lj\">\u7D2F\u8BA1\u552E\u51FA\uFF1A<span>").concat(o1.t16, "</span></div>\n\n                        </div>\n                        <div class=\"pro-color\">\n                            <span class=\"proTitl\">\u989C \u8272:</span>\n                            <div class=\"item selected\"><a  href=\"javascript:;\"><img width=\"25\" height=\"25\"\n                                       \n                                        src=\"").concat(o1.t17, "\"></a>\n                            </div>\n                            <div class=\"item selected\"><a  href=\"javascript:;\"><img width=\"25\" height=\"25\"\n                                       \n                                        src=\"").concat(o1.t18, "\"></a>\n                            </div>\n\n                        </div>\n                        <div class=\"pro-size\">\n                            <span class=\"proTitl\">\u5C3A \u7801:</span>\n                            <div id=\"divitemsize_242000\" class=\"itemsize item  selected\"><a title=\"\u5747\u7801\"href=\"javascript:;\"><i>").concat(o1.t19, "</i></a></div>\n                            <div id=\"divitemsize_242000\" class=\"itemsize item  selected\"><a title=\"\u5747\u7801\"href=\"javascript:;\"><i>").concat(o1.t20, "</i></a></div>\n                            <div id=\"divitemsize_242000\" class=\"itemsize item  selected\"><a title=\"\u5747\u7801\"href=\"javascript:;\"><i>").concat(o1.t21, "</i></a></div>\n                            <div id=\"divitemsize_242000\" class=\"itemsize item  selected\"><a title=\"\u5747\u7801\"href=\"javascript:;\"><i>").concat(o1.t22, "</i></a></div>\n                            <div id=\"divitemsize_242000\" class=\"itemsize item  selected\"><a title=\"\u5747\u7801\"href=\"javascript:;\"><i>").concat(o1.t23, "</i></a></div>\n                            <p class=\"measuring\"> <a class=\"size-a\" href=\"javascript:;\"><i></i>\u5C3A\u7801\u8BE6\u60C5</a> </p>\n                        </div>\n                        <div class=\"pro-number\">\n                            <span class=\"proTitl\">\u6211\u8981\u4E70:</span><a href=\"javascript:;\"\n                                class=\"number numberminus\">-</a>\n                                <input type=\"text\" value=\"1\" id=\"scbuycount_231669\"\n                                name=\"pronumber\" class=\"pronumber\" maxlength=\"2\"  oninput=\"fn1(this)\" ><a href=\"javascript:;\"\n                                class=\"number numberplus\">+</a>\u4EF6\n                            <span class=\"num_kc\">\uFF08\u5E93\u5B58<span id=\"kucun\">").concat(o1.t231, "</span>\u4EF6\uFF09</span>\n\n                        </div>\n                        <div class=\"choose-btns\">\n\n                            <div class=\"ann\">\n                           <a href=\"../pages/06gwuche.html\"> <button class=\"button\">\u52A0\u5165\u8D2D\u7269\u8F66</button> </a>\n                            <button class=\"button1\">\u7ACB\u5373\u8D2D\u4E70</button>\n                            <button class=\"button2\">\u8D85\u51FA\u5E93\u5B58</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- \u4E0B\u534A\u90E8\u5206 -->\n\n            </div>\n            <div class=\"pro-box-main\" style=\"min-height:1000px\">\n                <div class=\"pro-right\">\n                    <!-- \u641C\u7D22 -->\n                    <div class=\"pro-right-cont pro-right-search\">\n                        <div class=\"title\">\u5546\u57CE\u641C\u7D22</div>\n                        <div class=\"cont\">\n                            <form action=\"ProductList.aspx\">\n                                <div class=\"input\">\n                                    <label>\u5173\u952E\u5B57</label>\n                                    <input type=\"text\" name=\"key\" value=\"\" placeholder=\"\" class=\"in_txt\">\n                                </div>\n                                <div class=\"input\">\n                                    <label>\u4EF7\u683C</label>\n                                    <div class=\"in_txt jg\">\n                                        <input type=\"text\" name=\"minprice\" value=\"\" placeholder=\"\"><span>-</span><input\n                                            type=\"text\" name=\"maxprice\" value=\"\" placeholder=\"\">\n                                    </div>\n                                </div>\n                                <button type=\"button\" class=\"seach\">\u641C\u7D22</button>\n                                <!-- p><span>\u8DD1\u978B</span><span>T\u6064</span></p -->\n                            </form>\n                        </div>\n                    </div>\n                    <!-- \u5546\u54C1\u5206\u7C7B -->\n                    <div class=\"pro-right-cont pro-right-list\">\n\n                        <div class=\"pro-list\">\n                            <div class=\"new_pro\">\n                                <img src=\"https://shop.xtep.com.cn/util/Upload/cate/201901141344/20191141344158A56D042718E7A3E3165408FCB3831145.png\"\n                                    alt=\"\u7537\u978B\">\n                                <p>\u7537\u978B</p>\n                            </div>\n                            <ul>\n\n                                <li><a href=\"javascript:;\">\u8DD1\u6B65\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u7BEE\u7403\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u4F11\u95F2\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u677F\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u7EFC\u8BAD\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u5E06\u5E03\u978B</a></li>\n\n                                <li><a\n                                        href=\"https://shop.xtep.com.cn/util/Upload/cate/201901141343/20191141343439806C94E77DBDADAF03684EADACE8BEE215.png\">\u6237\u5916\u978B</a>\n                                </li>\n\n                            </ul>\n                        </div>\n\n                        <div class=\"pro-list\">\n                            <div class=\"new_pro\">\n                                <img src=\"https://shop.xtep.com.cn/util/Upload/cate/201901141343/20191141343439806C94E77DBDADAF03684EADACE8BEE215.png\"\n                                    alt=\"\u5973\u978B\">\n                                <p>\u5973\u978B</p>\n                            </div>\n                            <ul>\n\n                                <li><a href=\"javascript:;\">\u8DD1\u6B65\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u4F11\u95F2\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u677F\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u7EFC\u8BAD\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u5E06\u5E03\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u6237\u5916\u978B</a></li>\n\n                            </ul>\n                        </div>\n\n                        <div class=\"pro-list\">\n                            <div class=\"new_pro\">\n                                <img src=\"\" alt=\"\u79D1\u6280\u8DD1\u978B\">\n                                <p>\u79D1\u6280\u8DD1\u978B</p>\n                            </div>\n                            <ul>\n\n                                <li><a href=\"javascript:;\">\u52A8\u529B\u5DE2\u79D1\u6280</a></li>\n\n                                <li><a href=\"javascript:;\">\u51CF\u9707\u65CB\u79D1\u6280</a></li>\n\n                                <li><a href=\"javascript:;\">\u9A1B\u901F\u79D1\u6280</a></li>\n\n                                <li><a href=\"javascript:;\">\u7ADE\u901F160X</a></li>\n\n                                <li><a href=\"javascript:;\">\u6C22\u4E91\u79D1\u6280</a></li>\n\n                                <li><a href=\"javascript:;\">\u9A6D\u80FD\u79D1\u6280</a></li>\n\n                                <li><a href=\"javascript:;\">\u7ADE\u8BAD260</a></li>\n\n                            </ul>\n                        </div>\n\n                        <div class=\"pro-list\">\n                            <div class=\"new_pro\">\n                                <img src=\"\" alt=\"\u6F6E\u6D41\u5C16\u8D27\">\n                                <p>\u6F6E\u6D41\u5C16\u8D27</p>\n                            </div>\n                            <ul>\n\n                                <li><a href=\"javascript:;\">\u4E8C\u6B21\u5143</a></li>\n\n                                <li><a href=\"javascript:;\">\u673A\u7532\u7CFB\u5217</a></li>\n\n                                <li><a href=\"javascript:;\">\u5C71\u6D77\u7CFB\u5217</a></li>\n\n                                <li><a href=\"javascript:;\">\u56FD\u6F6E\u5929\u4E58</a></li>\n\n                                <li><a href=\"javascript:;\">\u602A\u517D\u5927\u5B66</a></li>\n\n                                <li><a href=\"javascript:;\">\u5154\u516B\u54E5\u8054\u540D</a></li>\n\n                                <li><a href=\"javascript:;\">\u732B\u548C\u8001\u9F20\u8054\u540D</a></li>\n\n                                <li><a href=\"javascript:;\">\u59DC\u5B50\u7259\u8054\u540D</a></li>\n\n                            </ul>\n                        </div>\n\n                        <div class=\"pro-list\">\n                            <div class=\"new_pro\">\n                                <img src=\"https://shop.xtep.com.cn/util/Upload/cate/201901141343/20191141343287300F3716AC968B552961A33BDC33719F49.png\"\n                                    alt=\"\u7537\u88C5\">\n                                <p>\u7537\u88C5</p>\n                            </div>\n                            <ul>\n\n                                <li><a href=\"javascript:;\">\u8FD0\u52A8T\u6064</a></li>\n\n                                <li><a href=\"javascript:;\">\u4F11\u95F2T\u6064</a></li>\n\n                                <li><a href=\"javascript:;\">\u77ED\u88E4</a></li>\n\n                                <li><a href=\"javascript:;\">\u957F\u88E4</a></li>\n\n                                <li><a href=\"javascript:;\">\u9488\u7EC7\u886B/\u536B\u8863/\u957FT</a></li>\n\n                                <li><a href=\"javascript:;\">\u8FD0\u52A8\u5957\u88C5</a></li>\n\n                                <li><a href=\"javascript:;\">\u5916\u5957\u5939\u514B</a></li>\n\n                                <li><a href=\"javascript:;\">\u68C9\u670D</a></li>\n\n                                <li><a href=\"javascript:;\">\u7FBD\u7ED2\u670D</a></li>\n\n                            </ul>\n                        </div>\n\n                        <div class=\"pro-list\">\n                            <div class=\"new_pro\">\n                                <img src=\"https://shop.xtep.com.cn/util/Upload/cate/201901141343/20191141343141260105092E4716546422DB8A0220E271C.png\"\n                                    alt=\"\u5973\u88C5\">\n                                <p>\u5973\u88C5</p>\n                            </div>\n                            <ul>\n\n                                <li><a href=\"javascript:;\">\u4F11\u95F2T\u6064</a></li>\n\n                                <li><a href=\"javascript:;\">\u8FD0\u52A8T\u6064</a></li>\n\n                                <li><a href=\"javascript:;\">\u77ED\u88E4</a></li>\n\n                                <li><a href=\"javascript:;\">\u957F\u88E4</a></li>\n\n                                <li><a href=\"javascript:;\">\u8FD0\u52A8\u5957\u88C5</a></li>\n\n                                <li><a href=\"javascript:;\">\u9488\u7EC7\u886B/\u536B\u8863/\u957FT</a></li>\n\n                                <li><a href=\"javascript:;\">\u5916\u5957\u5939\u514B</a></li>\n\n                                <li><a href=\"javascript:;\">\u7FBD\u7ED2\u670D</a></li>\n\n                                <li><a href=\"javascript:;\">\u68C9\u670D</a></li>\n\n                                <li><a href=\"javascript:;\">\u8FD0\u52A8\u80F8\u8863</a></li>\n\n                            </ul>\n                        </div>\n\n                        <div class=\"pro-list\">\n                            <div class=\"new_pro\">\n                                <img src=\"https://shop.xtep.com.cn/util/Upload/cate/201901141342/2019114134258730A58058756A78EFB4697EB55EAECED8AD.png\"\n                                    alt=\"\u7AE5\u978B\">\n                                <p>\u7AE5\u978B</p>\n                            </div>\n                            <ul>\n\n                                <li><a href=\"javascript:;\">\u8DD1\u6B65\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u4F11\u95F2\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u677F\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u7BEE\u7403\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u5065\u5EB7\u978B</a></li>\n\n                                <li><a href=\"javascript:;\">\u51C9\u978B</a></li>\n\n                            </ul>\n                        </div>\n\n                        <div class=\"pro-list\">\n                            <div class=\"new_pro\">\n                                <img src=\"https://shop.xtep.com.cn/util/Upload/cate/201901141342/2019114134244574684AC190FB0EC71EC39CC005110C3A07.png\"\n                                    alt=\"\u7AE5\u88C5\">\n                                <p>\u7AE5\u88C5</p>\n                            </div>\n                            <ul>\n\n                                <li><a href=\"javascript:;\">\u77ED\u8896</a></li>\n\n                                <li><a href=\"javascript:;\">\u77ED\u88E4</a></li>\n\n                                <li><a href=\"javascript:;\">\u957F\u88E4</a></li>\n\n                                <li><a href=\"javascript:;\">\u5957\u88C5</a></li>\n\n                                <li><a href=\"javascript:;\">\u5916\u5957/\u5939\u514B</a></li>\n\n                                <li><a href=\"javascript:;\">\u7FBD\u7ED2\u670D\u68C9\u670D</a></li>\n\n                                <li><a href=\"javascript:;\">\u6BDB\u8863/\u536B\u8863/\u957F\u8896T\u6064</a></li>\n\n                            </ul>\n                        </div>\n\n                        <div class=\"pro-list\">\n                            <div class=\"new_pro\">\n                                <img src=\"https://shop.xtep.com.cn/util/Upload/cate/201901141342/201911413421491876591C5FF7AA11DA3F4640BA3831EC73.png\"\n                                    alt=\"\u8FD0\u52A8\u914D\u4EF6\">\n                                <p>\u8FD0\u52A8\u914D\u4EF6</p>\n                            </div>\n                            <ul>\n\n                                <li><a href=\"javascript:;\">\u8FD0\u52A8\u5305</a></li>\n\n                                <li><a href=\"javascript:;\">\u8FD0\u52A8\u889C</a></li>\n\n                                <li><a href=\"javascript:;\">\u5E3D\u5B50</a></li>\n\n                                <li><a href=\"javascript:;\">\u62A4\u5177</a></li>\n\n                                <li><a href=\"javascript:;\">\u5185\u88E4</a></li>\n\n                                <li><a href=\"javascript:;\">\u5176\u4ED6</a></li>\n\n                            </ul>\n                        </div>\n\n                    </div>\n                </div>\n                <div class=\"pro-bottommain\">\n                    <div class=\"mod_H_dian2\">\n                        <div class=\"itemHeaderInner\">\n                            <span class=\"tab on\"><a \n                                    class=\"diva_1843 on\" id=\"diva_1843_1865\" href=\"javascript:;\">\u5546\u54C1\u4ECB\u7ECD</a></span>\n\n                        </div>\n                        <p class=\"qrcode\">\u624B\u673A\u8D2D\u4E70<img src=\"http://image.xtep.com.cn/Util/images/product/code_icon.png\"></p>\n                    </div>\n                    <!-- \u5546\u54C1\u4ECB\u7ECD -->\n                    <div class=\"ov mod_main div_1843\" id=\"div_1843_1865\">\n                        <ul class=\"detailso\">\n                            <li><b>\u5546\u54C1\u540D\u79F0\uFF1A</b><strong>").concat(o1.t25, "</strong></li>\n                            <li><b>\u6B3E\u53F7\uFF1A</b><span>").concat(o1.t27, "</span></li>\n                            <li><b>\u54C1\u724C\uFF1A</b><span>XTEP/\u7279\u6B65</span></li>\n                            <li><b>\u6027\u522B\uFF1A</b><span></span></li>\n                            <li><b>\u989C\u8272\u5206\u7C7B\uFF1A</b><span>\n                            ").concat(o1.t32, "&nbsp;\n\n                                </span></li>\n                            <li><b>\u5C3A\u7801\uFF1A</b><span>\n                            ").concat(o1.t34, "\n\n                                </span></li>\n                            <li><b>\u5E02\u573A\u4EF7\uFF1A</b><span>").concat(o1.t36, "</span></li>\n                        </ul>\n                        <div class=\"sp\">\n                            <div class=\"divfrontadv\">\n\n                            </div>\n                            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"750\">\n                                <tbody>\n                                    <tr class=\"firstRow\">\n                                        <td><img\n                                        src=\"").concat(o1.t37, "\">\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td><img\n                                        src=\"").concat(o1.t39, "\">\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td><img\n                                        src=\"").concat(o1.t39, "\">\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td><img\n                                        src=\"").concat(o1.t40, "\">\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                    <td><img\n                                    src=\"").concat(o1.t41, "\"></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n\n\n\n\n                            </tbody>\n                            </table>\n\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n          \n            ");
            box.innerHTML = str; //给左边大盒子绑定鼠标移入移出事件

            $('.jqzoom-tup').hover(function () {
              //显示蒙版层和右边大盒子
              $('.mark').css("display", "block");
              $('.box-rigth1').css("display", 'block');
            }, function () {
              //隐藏蒙版层和右边大盒子
              $('.mark').css("display", "none");
              $('.box-rigth1').css("display", 'none');
            }); //给左边大盒子对象绑定鼠标移动事件

            $('.jqzoom-tup').mousemove(function (e) {
              //获取当前蒙版层要移动的距离
              var left1 = e.pageX - $('.jqzoom-tup').offset().left - parseInt($('.mark').width() / 2);
              var top1 = e.pageY - $('.jqzoom-tup').offset().top - parseInt($('.mark').height() / 2); //设置蒙版层的边界条件

              var maxX = $('.jqzoom-tup').width() - $(".mark").width();
              var maxY = $('.jqzoom-tup').height() - $('.mark').height(); //创建图片的移动距离

              var imgX, imgY; //判断水平方向

              if (left1 <= 0) {
                $('.mark').css("left", "0px");
                imgX = 0;
              } else if (left1 >= maxX) {
                $('.mark').css('left', maxX + 'px');
                imgX = maxX;
              } else {
                $('.mark').css("left", left1 + 'px');
                imgX = left1;
              } //判断垂直方向


              if (top1 <= 0) {
                $('.mark').css("top", "0px");
                imgY = 0;
              } else if (top1 >= maxY) {
                $('.mark').css("top", maxY + 'px');
                imgY = maxY;
              } else {
                $('.mark').css("top", top1 + 'px');
                imgY = top1;
              } //让右边盒子中图片进行移动


              $('.box-rigth1 img').css('left', -2 * imgX + 'px');
              $('.box-rigth1 img').css("top", -2 * imgY + 'px');
            }); //给ul对象对象中的li绑定点击事件

            $(".thumb_list li").click(function () {
              //获取当前li标签中的图片路径
              var url = $(this).find("img").attr("src"); //把当前图片地址，拿到来修改大盒子中的图片对象

              $(".jqzoom-tup").find("img").attr("src", url);
              $('.box-rigth1 img').attr("src", url); //给当前点击的li对象添加class属性值，其他li对象删除class属性值

              $(this).addClass('bd').siblings().removeClass("bd");
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    });
  })();
} // 给大盒子绑定点击事件


box.onclick = function (e) {
  var e = e || width.event; // 获取点击对象

  var target = e.target || e.srcElement; // 判断当前点击对象是否为加号

  if (target.innerHTML == "+") {
    // 获取当前按钮前一个位置的数量
    num = target.previousElementSibling.value; // 找到button按钮

    unm = target.nextElementSibling.children;
    unm1 = target.parentNode.nextElementSibling.children;
    var a2 = unm1[0].children;
    var a1 = unm[0].innerHTML;
    num++; //  判断当前的数量是否大于库存数

    if (num > a1) {
      a2[0].style.display = 'none';
      a2[1].style.display = 'none';
      a2[2].style.display = 'block';
      target.previousElementSibling.value = num;
    } else {
      a2[0].style.display = 'inline-block';
      a2[1].style.display = 'inline-block';
      a2[2].style.display = 'none';
      target.previousElementSibling.value = num;
    }
  } // 判断当前是否为减法按钮


  if (target.innerHTML == "-") {
    num = target.nextElementSibling.value;
    unm = target.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild;
    unm1 = target.parentNode.nextElementSibling.children;
    var a2 = unm1[0].children;
    var a1 = unm.innerHTML;
    console.log(a1);
    num--;

    if (num <= 1) {
      num = 1;
    }

    if (num <= a1) {
      a2[0].style.display = 'inline-block';
      a2[1].style.display = 'inline-block';
      a2[2].style.display = 'none';
      target.nextElementSibling.value = num;
    } else {
      target.nextElementSibling.value = num;
    }
  } // 判断当前点击的是否为立即购买


  if (target.innerHTML == "立即购买") {
    var a1 = target.parentNode.parentNode.parentNode;
    var a2 = a1.children;
    var a3 = a2[6].children;
    var a4 = a3[2].value;
    var a5 = a3[4].lastElementChild.innerHTML;
    console.log(a5);
    var a6 = a4 * o1.t12;
    var a7 = o1.t231 - a4;

    if (confirm('你确定花' + a6 + '元购买吗')) {
      a3[4].lastElementChild.innerHTML = o1.t231 - a4;
    }

    console.log(a7);
  } //    判断当前点击的是否为立即购买


  if (target.innerHTML == "加入购物车") {
    // 获取当前登入账户
    var name1 = getCookie('name'); //    判断当前账户是否存在

    if (name1) {
      //   获取当前用户的购物车商品信息
      var carts = localStorage.getItem(name1) || "[]"; // 把当前字符串转化为数组对象

      carts = eval('(' + carts + ')'); // 判断当前数组中是否有值

      if (carts.length > 0) {
        // bool:主要是判断当前添加的商品是否存在localStorage中
        var bool = true; // 遍历数组中所有商品

        carts.forEach(function (item) {
          // 判断遍历出来的商品是否等于当前要添加的商品
          if (item.id == o1.id) {
            bool = false; // 把当前的商品的原来数量和现在要添加的数量计算和

            var mm = item.cart_number + num; // 判断当前mm是否大于当前商品的库存

            if (mm <= item.t231) {
              item.cart_number = mm;
            } else {
              alert("你购买的商品已超过了库存，目前只有：" + item.t231);
              item.cart_number = parseInt(item.t231);
            } //再重新把当前数组存放在localStorage中


            localStorage.setItem(name1, JSON.stringify(carts));
          }
        });

        if (bool) {
          //修改当前要购买的商品数量
          o1['cart_number'] = num; //把当前商品对象追加到数组中

          carts.push(o1); //再重新把当前数组存放在localStorage中

          localStorage.setItem(name1, JSON.stringify(carts));
        }
      } else {
        //修改当前要购买的商品数量
        o1['cart_number'] = num; //把当前商品对象追加到数组中

        carts.push(o1); //再重新把当前数组存放在localStorage中

        localStorage.setItem(name1, JSON.stringify(carts));
      }
    } else {
      alert("你还未登录，请登录之后在购买"); //获取当前页面地址

      var oldUrl = location.href;
      location = './login.html?url=' + oldUrl;
    }
  }
}; // 数量输入框事件


function fn1(inp) {
  // 获取当前输入框的value
  var val = inp.value; // 判断当前value是否为数子

  if (!isNaN(val) && val.length != 0) {
    console.log(val); // 输入框不能为零
  } else if (val.length == 0) {
    inp.value = 1;
  } else {
    inp.value = parseInt(val);
  }
}