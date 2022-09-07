//获取操作对象
var box = document.querySelector('.row')
var pagination = document.querySelector('.pagination');
//使用async函数获取数据库中的商品信息
(async function () {
    var txt = await promiseAjax({
        url: '../php/list.php'
    })
    show1(txt)
})()

//给大盒子row绑定点击事件
box.onclick=function(e){
    
    //事件对象兼容
    var e = e || window.event
    //获取点击对象
    var target=e.target||e.srcElement
    //判断当前点击的是否为li1
    if(target.className=="li1"){
        //获取当前栏目名称
        var name1=target.innerHTML;
        //通过async函数查询当前栏目下所有商品
        (async function(){
            var txt=await promiseAjax({
                url:'../php/list2.php',
                datatype:`oneid=${name1}`
            })
            show1(txt)
        })()
    }
    if(target.className=="li2"){
        //获取当前栏目名称
        var name1=target.innerHTML;
        //通过async函数查询当前栏目下所有商品
        (async function(){
            var txt=await promiseAjax({
                url:'../php/list3.php',
                datatype:`twoid=${name1}`
            })
            show1(txt)
        })()
    }
}

//创建数据显示的方法show1
function show1(txt){
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
    //创建实例分页对象
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
                    <ol class="breadcrumb">
                        <li><a href="#" class="li1">${item.cat_one_id}</a></li>
                        <li><a href="#" class="li2">${item.cat_two_id}</a></li>
                        <li class="active">${item.cat_three_id}</li>
                    </ol>
                    <img src="${item.goods_small_logo}">
                    <div class="caption">
                        <h4>${item.goods_name}</h4>
                        <p>￥<span>${item.goods_price}</span></p>
                        <p>
                            <a href="./cart.html" class="btn btn-primary" role="button">进入购物车</a> 
                            <a href="./xiangqing.html?id=${item.goods_id}"
                                class="btn btn-default" role="button">查看商品详情</a>
                        </p>
                    </div>
                </div>
            </div>
            `
        })
        //把拼接好的内容渲染到页面中
        box.innerHTML=str
    })
}