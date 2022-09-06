// 获取当前用户名
var name1 = getCookie('name')
if (!name1) {
    alert("您尚未登入，请登入")
    location = './02dengru.html?url=' + location.href
}
var box = document.querySelector('div.panel-default')
//  获取localStorage中指定账户的数据
var carts = localStorage.getItem(name1) || '[]';
// 吧字符串转为对象
carts = eval('(' + carts + ')')
show1()
// 创建一个渲染所有数据的函数
function show1() {
    // 判断当前数组是否为空 
    if (carts.length > 0) {
        // 判断所有商品是否被选中
        var bool = carts.every(item => {
            return item.t42 == 1
        })
        // 创建变量渲染所有数据
        var s1 = ` <div class="panel-heading1">
        <input type="checkbox" name="quan" ${bool ? "checked" : ''}>全选
        <span>商品</span>
        <span>单价</span>
        <span>数量</span>
        <span>小计</span>
        <span>操作</span>

    </div>
    <div class="panel-body">
        `
        // 拼接商品
        carts.forEach(item => {
            s1 += `<div class="media">
            <div class="media-left media-middle">
            <input type="checkbox" name="xuan" ${item.t42 == 1 ? "checked" : ''}  data-id='${item.id}'>
                <a href="#">
                    <img class="media-object"
                        src="${item.t5}"
                        width="100" height="100">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">${item.t1}</h4>
                <h4 class="mm-mm">￥<span>${item.t4}</span></h4>

                <button type="button" class="btn btn-primary"data-id='${item.id}'>删除</button>
                <div class="btn-group" role="group" aria-label="...">
                    <button type="button" data-id='${item.id}' ${item.cart_number == 1 ? "disabled" : ''}   class="btn btn-default">-</button>
                    <button type="button" class="btn btn-default">${item.cart_number}</button>
                    <button type="button"  data-id='${item.id}' ${item.t231 == item.cart_number ? "disabled" : ""} class="btn btn-default">+</button>
                    <h4 class="mm-mm" >￥<span>${ parseInt(item.cart_number) * parseFloat(item.t4)} </span></h4>
                </div>
            </div>
        </div>
      
        
            `
        })
        s1 += `<div class="panel-heading">
        <input type="checkbox" name="quan" ${bool ? "checked" : ''}>全选
        <span style="cursor: pointer;">删除选中商品</span>
        <span style="cursor: pointer;">清理购物车</span>
       
      
        <div class="lld">
            <p class="jia-ge">已选择<span>${total1()[0]}</span>商品</p>
            <p class="jia-ge1">总价：￥<span>${total1()[1]}</span></p>
            <a class="btn btn-success btn-xs" style="cursor: pointer;">去结算</a>
        </div>
    </div>`
        // 拼接底部
        s1 += '</div>'
        //把拼接好的内容渲染到页面中
        box.innerHTML = s1
    } else {
        var str = `
    <div class="jumbotron">
        <h1>生活如此多娇，快去买一点的东西犒劳自己吧</h1>
        <p>点击下方按钮快去选购吧! ^_^</p>
        <p><a class="btn btn-primary btn-lg" href="./04liebioa.html" role="button">赶紧去选购吧</a></p>
    </div>
    `
        //把数据渲染到页面中
        box.innerHTML = str
    }
}
//把购物车中所有的点击事件委托给大盒子去完成
box.onclick = function (e) {
    //兼容事件对象
    var e = e || window.event
    //获取点击的对象
    var target = e.target || e.srcElement
    //判断点击的是否为全选框
    if (target.name == "quan") {
        //遍历每个商品对象
        carts.forEach(item => {
            //判断当前全选框是否被选中
            if (target.checked) {
                item.t42 = 1
            } else {
                item.t42 = 0
            }
        })
        //重新把当前数组存储到localStorage中
        localStorage.setItem(name1, JSON.stringify(carts))
        show1()
    } //判断当前点击的是否为选中框
    if (target.name == "xuan") {
        //获取当前选中框的id
        var id1 = target.getAttribute("data-id");
        //遍历商品对象
        carts.forEach(item => {
            //判断遍历商品是否跟当前选中的商品相等
            if (item.id == id1) {
                item.t42 = (item.t42 == 1) ? 0 : 1
            }
        })
        //重新把当前数组存储到localStorage中
        localStorage.setItem(name1, JSON.stringify(carts))
        show1()
    }
    //判断当前点击的是否为加法按钮
    if (target.innerHTML == "+") {
        //获取当前按钮的id
        var id = target.getAttribute('data-id')
        //遍历数组元素
        carts.forEach(item => {
            //判断遍历的商品是否等于当前操作的商品
            if (item.id == id) {
                item.cart_number++
            }
        })
        //重新把当前数组存储到localStorage中
        localStorage.setItem(name1, JSON.stringify(carts))
        show1()
    }
    //判断当前点击的是否为减法按钮
    if (target.innerHTML == "-") {
        //获取当前按钮的id
        var id = target.getAttribute('data-id')
        //遍历所有商品
        carts.forEach(item => {
            //判断遍历的商品是否等于当前操作的商品
            if (item.id == id) {
                item.cart_number--
            }
        })
        //重新把当前数组存储到localStorage中
        localStorage.setItem(name1, JSON.stringify(carts))
        show1()
    }
    //判断当前点击的是否为"删除"
    if (target.innerHTML == "删除") {
        //获取当前按钮的id
        var id = target.getAttribute("data-id")
        //使用filter方法过滤
        carts = carts.filter(item => {
            return item.id != id
        })
        //重新把当前数组存储到localStorage中
        localStorage.setItem(name1, JSON.stringify(carts))
        show1()
    }

    //判断当前点击的按钮是否为"去结算"
    if (target.innerHTML == "去结算") {
        //给定一个确认框，判断是否要购买
        if (confirm(`你确定要花￥${total1()[1]}购买吗`)) {
            //过滤当前选中的商品
            carts = carts.filter(item => {
                return item.t42 != 1
            })
            //重新把当前数组存储到localStorage中
            localStorage.setItem(name1, JSON.stringify(carts))
            show1()
        }
    }
    //判断是否为删除删除选中商品
    if (target.innerHTML == "删除选中商品") {
        //根据条件过滤商品
        carts = carts.filter(item => {
            return item.t42 != 1
        })
        //把数组重新存放在localStorage中
        localStorage.setItem("cart", JSON.stringify(carts))
        show1()

    }
    //判断当前点击的是否为清空购物车
    if (target.innerHTML == "清理购物车") {
        //实际上就是删除数组中所有元素
        carts = []
        //重新把当前数组存储到localStorage中
        localStorage.setItem(name1, JSON.stringify(carts))
        show1()
    }
}
//统计所选商品数量和价格
function total1() {
    var num = 0 //所选商品数量
    var sum = 0 //所选商品价格
    //遍历所有商品
    carts.forEach(item => {
        //判断当前商品是否被选中
        if (item.t42 == 1) {
            //累加需要购买的商品数量
            num += parseInt(item.cart_number)
            //累加所有需要购买的商品小计
            sum += parseInt(item.cart_number) * parseFloat(item.t4)
        }
    })
    return [num, sum]
}

