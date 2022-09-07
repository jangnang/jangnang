    //  获取大盒子对象
    var box = document.querySelector('.xiangqingyeshoye')

console.log(box1);
    //  获取地址栏中的参数
    var search1 = location.search
    // 创建变量接收商品信息
    var o1
    // 创建变量存放商品数量
    var num = 1
    // 判断地址栏中是否有参数信息
    if (!search1) {
        alert("非法进入")
        location = './02dengru.html'
    } else {
        // 获取参数信息
        var id = search1.split('=')[1];
        // 根据当前id信息去获取对应的商品信息
        (async function () {
            var txt = await promiseAjax({
                url: '../php/05xiangqing.php',
                datatype: 'id=' + id
            })
            // 把字符串转为对象
            o1 = eval('(' + txt + ')')
            // 创建字符串，拼接要显示的内容
            var str = ` 
            <div class="fengleye">
                <a href="./01sy.html">首页</a>&gt;<a href="./04liebioa.html">产品系列</a>&gt;${o1.t11}
            </div>
            <!-- 上半部分详情页 -->
            <div class="xianqing-tup">


                <div class="jqzoom">
                    <div class="jqzoom-tup"> <img src="${o1.t5}"
                           " width="400"alt="">
                            <div class="mark"></div>
                    </div>
                    <div class="box-rigth1">
                        <img src="${o1.t5}">
                    </div>
                    <ul class="thumb_list">
                        <li class="bd">
                        <img src="${o1.t8}"></li>
                        <li><img src="${o1.t9}"
                                "></li>
                        <li><img src="${o1.t10}"
                               "></li>

                    </ul>
                    <div class="herb_icon">
                        <a href="javascript:;"><img src="http://image.xtep.com.cn/Util/images/product/zy_icon.png"
                                alt="官方直营">官方直营</a>
                        <a href="javascript:;"><img src="http://image.xtep.com.cn/Util/images/product/zp_icon.png"
                                alt="正品保证">正品保证</a>
                        <a href="javascript:;"><img src="http://image.xtep.com.cn/Util/images/product/th_icon.png"
                                alt="七天退换">七天退换</a>
                        <a href="javascript:;"><img src="http://image.xtep.com.cn/Util/images/product/fx_icon.png"
                                alt="分享">分享</a>
                        <a href="javascript:;"><img src="http://image.xtep.com.cn/Util/images/product/sc_icon.png"
                                alt="收藏商品">收藏商品</a>
                    </div>
                </div>
                <!-- 右边详情页 -->
                <div class="pro-main1">
                    <h2 class="pro-tit">${o1.t11}</h2>
                    <div class="xiangqing-mm">
                        <div class="getCoupons">
                            <a href="javascript:;" class="couponBtn">
                                <img src="../images/coupons-btn-pc.png"></a></div>
                        <div class="main-price">
                            <span class="proTitl member">官方折扣价</span>
                            <span class="memberprice"> ￥<b>${o1.t12}</b></span>
                            <div class="code"><a href="javascript:;"><img
                                        src="http://image.xtep.com.cn/util/images/product/code_icon.png"
                                        alt="二维码"></a><span>
                            </div>
                        </div>
                        <div class="main-price">
                            <span class="market">${o1.t14}</span>
                            <span class="marketprice"><b>¥${o1.t13}</b></span></div>
                        <div class="main_lj">
                            <div class="lj">累计评价：<span>${o1.t15}</span></div>
                            <div class="lj">累计售出：<span>${o1.t16}</span></div>

                        </div>
                        <div class="pro-color">
                            <span class="proTitl">颜 色:</span>
                            <div class="item selected"><a  href="javascript:;" > <img width="25" height="25" name="ddd"
                                       
                                        src="${o1.t17}"></a>
                            </div>
                            <div class="item selected"><a  href="javascript:;" name="ddd"><img width="25" height="25" name="ddd"
                                       
                                        src="${o1.t18}"></a>
                            </div>

                        </div>
                        <div class="pro-size">
                            <span class="proTitl">尺 码:</span>
                            <div id="divitemsize_242000" class="itemsize item  selected" ><a title="均码"href="javascript:;" name="ddd"><i name="ddd">${o1.t19}</i></a></div>
                            <div id="divitemsize_242000" class="itemsize item  selected"><a title="均码"href="javascript:;" name="ddd"><i name="ddd">${o1.t20}</i></a></div>
                            <div id="divitemsize_242000" class="itemsize item  selected"><a title="均码"href="javascript:;" name="ddd"><i name="ddd">${o1.t21}</i></a></div>
                            <div id="divitemsize_242000" class="itemsize item  selected"><a title="均码"href="javascript:;" name="ddd"><i name="ddd">${o1.t22}</i></a></div>
                            <div id="divitemsize_242000" class="itemsize item  selected"><a title="均码"href="javascript:;" name="ddd"><i name="ddd">${o1.t23}</i></a></div>
                            <p class="measuring"> <a class="size-a" href="javascript:;"><i></i>尺码详情</a> </p>
                        </div>
                        <div class="pro-number">
                            <span class="proTitl">我要买:</span><a href="javascript:;"
                                class="number numberminus">-</a>
                                <input type="text" value="1" id="scbuycount_231669"
                                name="pronumber" class="pronumber" maxlength="2"  oninput="fn1(this)" ><a href="javascript:;"
                                class="number numberplus">+</a>件
                            <span class="num_kc">（库存<span id="kucun">${o1.t231}</span>件）</span>

                        </div>
                        <div class="choose-btns">

                            <div class="ann">
                           <a href="../pages/06gwuche.html"> <button class="button">加入购物车</button> </a>
                            <button class="button1">立即购买</button>
                            <button class="button2">超出库存</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 下半部分 -->

            </div>
            <div class="pro-box-main" style="min-height:1000px">
                <div class="pro-right">
                    <!-- 搜索 -->
                    <div class="pro-right-cont pro-right-search">
                        <div class="title">商城搜索</div>
                        <div class="cont">
                            <form action="ProductList.aspx">
                                <div class="input">
                                    <label>关键字</label>
                                    <input type="text" name="key" value="" placeholder="" class="in_txt">
                                </div>
                                <div class="input">
                                    <label>价格</label>
                                    <div class="in_txt jg">
                                        <input type="text" name="minprice" value="" placeholder=""><span>-</span><input
                                            type="text" name="maxprice" value="" placeholder="">
                                    </div>
                                </div>
                                <button type="button" class="seach">搜索</button>
                                <!-- p><span>跑鞋</span><span>T恤</span></p -->
                            </form>
                        </div>
                    </div>
                    <!-- 商品分类 -->
                    <div class="pro-right-cont pro-right-list">

                        <div class="pro-list">
                            <div class="new_pro">
                                <img src="https://shop.xtep.com.cn/util/Upload/cate/201901141344/20191141344158A56D042718E7A3E3165408FCB3831145.png"
                                    alt="男鞋">
                                <p>男鞋</p>
                            </div>
                            <ul>

                                <li><a href="javascript:;">跑步鞋</a></li>

                                <li><a href="javascript:;">篮球鞋</a></li>

                                <li><a href="javascript:;">休闲鞋</a></li>

                                <li><a href="javascript:;">板鞋</a></li>

                                <li><a href="javascript:;">综训鞋</a></li>

                                <li><a href="javascript:;">帆布鞋</a></li>

                                <li><a
                                        href="https://shop.xtep.com.cn/util/Upload/cate/201901141343/20191141343439806C94E77DBDADAF03684EADACE8BEE215.png">户外鞋</a>
                                </li>

                            </ul>
                        </div>

                        <div class="pro-list">
                            <div class="new_pro">
                                <img src="https://shop.xtep.com.cn/util/Upload/cate/201901141343/20191141343439806C94E77DBDADAF03684EADACE8BEE215.png"
                                    alt="女鞋">
                                <p>女鞋</p>
                            </div>
                            <ul>

                                <li><a href="javascript:;">跑步鞋</a></li>

                                <li><a href="javascript:;">休闲鞋</a></li>

                                <li><a href="javascript:;">板鞋</a></li>

                                <li><a href="javascript:;">综训鞋</a></li>

                                <li><a href="javascript:;">帆布鞋</a></li>

                                <li><a href="javascript:;">户外鞋</a></li>

                            </ul>
                        </div>

                        <div class="pro-list">
                            <div class="new_pro">
                                <img src="" alt="科技跑鞋">
                                <p>科技跑鞋</p>
                            </div>
                            <ul>

                                <li><a href="javascript:;">动力巢科技</a></li>

                                <li><a href="javascript:;">减震旋科技</a></li>

                                <li><a href="javascript:;">騛速科技</a></li>

                                <li><a href="javascript:;">竞速160X</a></li>

                                <li><a href="javascript:;">氢云科技</a></li>

                                <li><a href="javascript:;">驭能科技</a></li>

                                <li><a href="javascript:;">竞训260</a></li>

                            </ul>
                        </div>

                        <div class="pro-list">
                            <div class="new_pro">
                                <img src="" alt="潮流尖货">
                                <p>潮流尖货</p>
                            </div>
                            <ul>

                                <li><a href="javascript:;">二次元</a></li>

                                <li><a href="javascript:;">机甲系列</a></li>

                                <li><a href="javascript:;">山海系列</a></li>

                                <li><a href="javascript:;">国潮天乘</a></li>

                                <li><a href="javascript:;">怪兽大学</a></li>

                                <li><a href="javascript:;">兔八哥联名</a></li>

                                <li><a href="javascript:;">猫和老鼠联名</a></li>

                                <li><a href="javascript:;">姜子牙联名</a></li>

                            </ul>
                        </div>

                        <div class="pro-list">
                            <div class="new_pro">
                                <img src="https://shop.xtep.com.cn/util/Upload/cate/201901141343/20191141343287300F3716AC968B552961A33BDC33719F49.png"
                                    alt="男装">
                                <p>男装</p>
                            </div>
                            <ul>

                                <li><a href="javascript:;">运动T恤</a></li>

                                <li><a href="javascript:;">休闲T恤</a></li>

                                <li><a href="javascript:;">短裤</a></li>

                                <li><a href="javascript:;">长裤</a></li>

                                <li><a href="javascript:;">针织衫/卫衣/长T</a></li>

                                <li><a href="javascript:;">运动套装</a></li>

                                <li><a href="javascript:;">外套夹克</a></li>

                                <li><a href="javascript:;">棉服</a></li>

                                <li><a href="javascript:;">羽绒服</a></li>

                            </ul>
                        </div>

                        <div class="pro-list">
                            <div class="new_pro">
                                <img src="https://shop.xtep.com.cn/util/Upload/cate/201901141343/20191141343141260105092E4716546422DB8A0220E271C.png"
                                    alt="女装">
                                <p>女装</p>
                            </div>
                            <ul>

                                <li><a href="javascript:;">休闲T恤</a></li>

                                <li><a href="javascript:;">运动T恤</a></li>

                                <li><a href="javascript:;">短裤</a></li>

                                <li><a href="javascript:;">长裤</a></li>

                                <li><a href="javascript:;">运动套装</a></li>

                                <li><a href="javascript:;">针织衫/卫衣/长T</a></li>

                                <li><a href="javascript:;">外套夹克</a></li>

                                <li><a href="javascript:;">羽绒服</a></li>

                                <li><a href="javascript:;">棉服</a></li>

                                <li><a href="javascript:;">运动胸衣</a></li>

                            </ul>
                        </div>

                        <div class="pro-list">
                            <div class="new_pro">
                                <img src="https://shop.xtep.com.cn/util/Upload/cate/201901141342/2019114134258730A58058756A78EFB4697EB55EAECED8AD.png"
                                    alt="童鞋">
                                <p>童鞋</p>
                            </div>
                            <ul>

                                <li><a href="javascript:;">跑步鞋</a></li>

                                <li><a href="javascript:;">休闲鞋</a></li>

                                <li><a href="javascript:;">板鞋</a></li>

                                <li><a href="javascript:;">篮球鞋</a></li>

                                <li><a href="javascript:;">健康鞋</a></li>

                                <li><a href="javascript:;">凉鞋</a></li>

                            </ul>
                        </div>

                        <div class="pro-list">
                            <div class="new_pro">
                                <img src="https://shop.xtep.com.cn/util/Upload/cate/201901141342/2019114134244574684AC190FB0EC71EC39CC005110C3A07.png"
                                    alt="童装">
                                <p>童装</p>
                            </div>
                            <ul>

                                <li><a href="javascript:;">短袖</a></li>

                                <li><a href="javascript:;">短裤</a></li>

                                <li><a href="javascript:;">长裤</a></li>

                                <li><a href="javascript:;">套装</a></li>

                                <li><a href="javascript:;">外套/夹克</a></li>

                                <li><a href="javascript:;">羽绒服棉服</a></li>

                                <li><a href="javascript:;">毛衣/卫衣/长袖T恤</a></li>

                            </ul>
                        </div>

                        <div class="pro-list">
                            <div class="new_pro">
                                <img src="https://shop.xtep.com.cn/util/Upload/cate/201901141342/201911413421491876591C5FF7AA11DA3F4640BA3831EC73.png"
                                    alt="运动配件">
                                <p>运动配件</p>
                            </div>
                            <ul>

                                <li><a href="javascript:;">运动包</a></li>

                                <li><a href="javascript:;">运动袜</a></li>

                                <li><a href="javascript:;">帽子</a></li>

                                <li><a href="javascript:;">护具</a></li>

                                <li><a href="javascript:;">内裤</a></li>

                                <li><a href="javascript:;">其他</a></li>

                            </ul>
                        </div>

                    </div>
                </div>
                <div class="pro-bottommain">
                    <div class="mod_H_dian2">
                        <div class="itemHeaderInner">
                            <span class="tab on"><a 
                                    class="diva_1843 on" id="diva_1843_1865" href="javascript:;">商品介绍</a></span>

                        </div>
                        <p class="qrcode">手机购买<img src="http://image.xtep.com.cn/Util/images/product/code_icon.png"></p>
                    </div>
                    <!-- 商品介绍 -->
                    <div class="ov mod_main div_1843" id="div_1843_1865">
                        <ul class="detailso">
                            <li><b>商品名称：</b><strong>${o1.t25}</strong></li>
                            <li><b>款号：</b><span>${o1.t27}</span></li>
                            <li><b>品牌：</b><span>XTEP/特步</span></li>
                            <li><b>性别：</b><span></span></li>
                            <li><b>颜色分类：</b><span>
                            ${o1.t32}&nbsp;

                                </span></li>
                            <li><b>尺码：</b><span>
                            ${o1.t34}

                                </span></li>
                            <li><b>市场价：</b><span>${o1.t36}</span></li>
                        </ul>
                        <div class="sp">
                            <div class="divfrontadv">

                            </div>
                            <table border="0" cellpadding="0" cellspacing="0" width="750">
                                <tbody>
                                    <tr class="firstRow">
                                        <td><img
                                        src="${o1.t37}">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img
                                        src="${o1.t39}">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img
                                        src="${o1.t39}">
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img
                                        src="${o1.t40}">
                                        </td>
                                    </tr>
                                    <tr>
                                    <td><img
                                    src="${o1.t41}"></td>
                                    </tr>
                                </tbody>
                            </table>




                            </tbody>
                            </table>

                        </div>
                    </div>


                </div>
            </div>
          
            `
            box.innerHTML = str
            //给左边大盒子绑定鼠标移入移出事件
            $('.jqzoom-tup').hover(function () {
                //显示蒙版层和右边大盒子
                $('.mark').css("display", "block")
                $('.box-rigth1').css("display", 'block')
            }, function () {
                //隐藏蒙版层和右边大盒子
                $('.mark').css("display", "none")
                $('.box-rigth1').css("display", 'none')
            })

            //给左边大盒子对象绑定鼠标移动事件
            $('.jqzoom-tup').mousemove(function (e) {
                //获取当前蒙版层要移动的距离
                var left1 = e.pageX - $('.jqzoom-tup').offset().left - parseInt($('.mark').width() / 2)
                var top1 = e.pageY - $('.jqzoom-tup').offset().top - parseInt($('.mark').height() / 2)

                //设置蒙版层的边界条件
                var maxX = $('.jqzoom-tup').width() - $(".mark").width()
                var maxY = $('.jqzoom-tup').height() - $('.mark').height()
                //创建图片的移动距离
                var imgX, imgY

                //判断水平方向
                if (left1 <= 0) {
                    $('.mark').css("left", "0px")
                    imgX = 0
                } else if (left1 >= maxX) {
                    $('.mark').css('left', maxX + 'px')
                    imgX = maxX
                } else {
                    $('.mark').css("left", left1 + 'px')
                    imgX = left1
                }

                //判断垂直方向
                if (top1 <= 0) {
                    $('.mark').css("top", "0px")
                    imgY = 0
                } else if (top1 >= maxY) {
                    $('.mark').css("top", maxY + 'px')
                    imgY = maxY
                } else {
                    $('.mark').css("top", top1 + 'px')
                    imgY = top1
                }

                //让右边盒子中图片进行移动
                $('.box-rigth1 img').css('left', -2 * imgX + 'px')
                $('.box-rigth1 img').css("top", -2 * imgY + 'px')
            })

            //给ul对象对象中的li绑定点击事件
            $(".thumb_list li").click(function () {
                //获取当前li标签中的图片路径
                var url = $(this).find("img").attr("src")
                //把当前图片地址，拿到来修改大盒子中的图片对象
                $(".jqzoom-tup").find("img").attr("src", url)
                $('.box-rigth1 img').attr("src", url)
                //给当前点击的li对象添加class属性值，其他li对象删除class属性值
                $(this).addClass('bd').siblings().removeClass("bd")
            })
            $('.item').click(function(){
                var index=$(this).index()
                console.log(111);
                $(this).addClass('bg').siblings().removeClass('bg')
                })
        })()
    }

    // 给大盒子绑定点击事件
    box.onclick = function (e) {
        var e = e || width.event
        // 获取点击对象
        var target = e.target || e.srcElement
        // 判断当前点击对象是否为加号
        if (target.innerHTML == "+") {
            // 获取当前按钮前一个位置的数量

            num = target.previousElementSibling.value
            // 找到button按钮
            unm = target.nextElementSibling.children
            unm1 = target.parentNode.nextElementSibling.children
            var a2 = unm1[0].children

            var a1 = unm[0].innerHTML
            num++
            //  判断当前的数量是否大于库存数
            if (num > a1) {
                a2[0].style.display = 'none'
                a2[1].style.display = 'none'
                a2[2].style.display = 'block'
                target.previousElementSibling.value = num
            } else {
                a2[0].style.display = 'inline-block'
                a2[1].style.display = 'inline-block'
                a2[2].style.display = 'none'
                target.previousElementSibling.value = num
            }
        }


        // 判断当前是否为减法按钮
        if (target.innerHTML == "-") {
            num = target.nextElementSibling.value
            unm = target.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild
            unm1 = target.parentNode.nextElementSibling.children
            var a2 = unm1[0].children

            var a1 = unm.innerHTML

            console.log(a1);
            num--
            if (num <= 1) {
                num = 1
            }
            if (num <= a1) {

                a2[0].style.display = 'inline-block'
                a2[1].style.display = 'inline-block'
                a2[2].style.display = 'none'
                target.nextElementSibling.value = num
            } else {

                target.nextElementSibling.value = num
            }

        }
        // 判断当前点击的是否为立即购买

        if (target.innerHTML == "立即购买") {
            var a1 = target.parentNode.parentNode.parentNode
            var a2 = a1.children
            var a3 = a2[6].children
            var a4 =a3[2].value
            var a5 = a3[4].lastElementChild.innerHTML
            console.log(a5);
            var a6 = a4 * o1.t12
            var a7 = o1.t231 - a4

            if (confirm('你确定花' + a6 + '元购买吗')) {
             
               
                a3[4].lastElementChild.innerHTML=o1.t231 - a4
        
            }
            console.log(a7);
        }
        //    判断当前点击的是否为立即购买
        if (target.innerHTML == "加入购物车") {
            // 获取当前登入账户
            var name1 = getCookie('name')
            //    判断当前账户是否存在
            if (name1) {
                //   获取当前用户的购物车商品信息
                var carts = localStorage.getItem(name1) || "[]"
                // 把当前字符串转化为数组对象
                carts = eval('(' + carts + ')')
                // 判断当前数组中是否有值
                if (carts.length > 0) {
                    // bool:主要是判断当前添加的商品是否存在localStorage中
                    var bool = true
                    // 遍历数组中所有商品
                    carts.forEach(item => {
                        // 判断遍历出来的商品是否等于当前要添加的商品
                        if (item.id == o1.id) {
                            bool = false
                            // 把当前的商品的原来数量和现在要添加的数量计算和
                            var mm = item.cart_number + num

                            // 判断当前mm是否大于当前商品的库存
                            if (mm <= item.t231) {
                                item.cart_number = mm
                            } else {
                                alert("你购买的商品已超过了库存，目前只有：" + item.t231)
                                item.cart_number = parseInt(item.t231)
                            }
                            //再重新把当前数组存放在localStorage中
                            localStorage.setItem(name1, JSON.stringify(carts))
                        }
                    })
                    if (bool) {
                        //修改当前要购买的商品数量
                        o1['cart_number'] = num
                        //把当前商品对象追加到数组中
                        carts.push(o1)
                        //再重新把当前数组存放在localStorage中
                        localStorage.setItem(name1, JSON.stringify(carts))
                    }
                } else {
                    //修改当前要购买的商品数量
                    o1['cart_number'] = num
                    //把当前商品对象追加到数组中
                    carts.push(o1)
                    //再重新把当前数组存放在localStorage中
                    localStorage.setItem(name1, JSON.stringify(carts))
                }
            } else {
                alert("你还未登录，请登录之后在购买")
                //获取当前页面地址
                var oldUrl = location.href
                location = './login.html?url=' + oldUrl
            }
        }
        
       
    }
  
    // 数量输入框事件
    function fn1(inp) {
        // 获取当前输入框的value
        let val = inp.value
        // 判断当前value是否为数子
        if (!isNaN(val) && val.length != 0) {
            console.log(val);
            // 输入框不能为零
        } else if (val.length == 0) {

            inp.value = 1
        } else {

            inp.value = parseInt(val)

        }

    }