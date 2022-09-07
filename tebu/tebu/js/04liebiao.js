// 获取操作对象
var box1 = document.querySelector('.shangpingye')
var pagination = document.querySelector('.pagination')
var xing = document.querySelector('.search')
var ull = document.querySelector('.box')

var lllll = document.querySelector('.lllll');
// 使用async函数获取数据库中的商品信息
//使用async函数获取数据库中的商品信息



var bb = 0
// 给大盒子绑定点击事件
xing.onclick = function (e) {
    //  事件兼容对象
    var e = e || window.event
    //  获取点击对象
    var target = e.target || e.srcElement
    if (target.innerHTML == "搜索") {
        //获取当前栏目名称

        var name1 = target.previousSibling.value;
        console.log(name1);
        // 通过async函数查询当前栏目下所有商品
        (async function () {
            var txt = await promiseAjax({
                url: '../php/04liebiao2.php',
                datatype: `oneid=${name1}`
            })
            show1(txt)
        })()
    }


}

// 给大盒子绑定点击事件
ull.onclick = function (e) {
    //  事件兼容对象
    var e = e || window.event
    //  获取点击对象
    var target = e.target || e.srcElement

    if (target.name == "nnn") {
        var name1 = target.innerHTML;
        (async function () {
            var txt = await promiseAjax({
                url: '../php/04liebiao2.php',
                datatype: `oneid=${name1}`
            })
            show1(txt)
        })()
    }

    if (target.innerHTML == "按销量") {
        bb++

        console.log(bb);
        // 使用ajax获取数据
        ajax1({
            url: `../php/04liebiao3.php?b=${bb}`,
            success: function (dt) {
                var ol = eval('(' + dt + ')')
                console.log(ol);
                show1(dt)
                // console.log(dt);
            }
        })
    }
    if (target.innerHTML == "按价格") {
        bb++

        console.log(bb);
        // 使用ajax获取数据
        ajax1({
            url: `../php/04liebioa4.php?b=${bb}`,
            success: function (dt) {

                show1(dt)
                // console.log(dt);
            }
        })
    }

}
var search = location.search

if (search) {
    var name1 = search.split('?')[1]
    name1 = decodeURI(name1);


    console.log(name1);
    // 使用ajax获取数据
    ajax1({
        url: '../php/04liebiao2.php',
        datatype: `oneid=${name1}`,
        success: function (dt) {

            // 把字符串转为对象
            // var ol = eval('(' + dt + ')')

            console.log(ol);
            show1(dt)
        }
    })
} else {
    (async function () {
        var txt = await promiseAjax({
            url: '../php/04liebiao1.php'
        })
        show1(txt)
    })()

}

// 创建分页器
function show1(txt) {
    //把字符串转为对象
    var ar1 = eval('(' + txt + ')')
    //创建分页器的参数对象
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
    }
    var aa = o1.pageInfo.totalsize
    lllll.innerHTML = aa
    // 创建实录分页对象
    new Pagination(pagination, o1, (n) => {
        //获取当前页的数据
        var ar2 = ar1.slice((n - 1) * 20, n * 20)


        //创建字符串拼接所有信息
        var str = ''
        //遍历数组中所有数据
        ar2.forEach(item => {
            str += `
            <div class="col-lg-3 col-md-4">
            <div class="thumbnail">
                <img
                    src="${item.t3}">
                <div class="caption">
                    <h4>${item.t1}/h4>
                    <p class="caption11">￥<span>${item.t4}</span></p>
                    <p class="caption12">已售出<span>${item.t16}</span></p>

                    <p class="ccc">
                        <a href="../pages/06gwuche.html" class="btn btn-primary" role="button" >进入购物车</a>
                        <a href="../pages/05xiangqing.html?id=${item.id}" class="btn btn-default" role="button">查看商品详情</a>
                    </p>
                </div>
            </div>
            </div>
            `
        })
        // 把拼接好的内容渲染到页面中
        box1.innerHTML = str
    })
}