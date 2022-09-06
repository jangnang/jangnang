//获取大盒子对象
var box=document.querySelector('.container')
//获取地址栏中的参数
var search1=location.search
//创建变量，接收获取的商品信息
var o1
//创建变量，存放该商品的购买数量
var num=1
//判断地址栏中是否有参数信息
if(!search1){
    alert("非法进入")
    location='./list.html'
}else{
    //获取参数信息
    var id=search1.split('=')[1];
    //根据当前id信息去获取对应的商品信息
    (async function(){
        var txt=await promiseAjax({
            url:'../php/xiangqing.php',
            datatype:'id='+id
        })
        //把字符串转为对象
        o1=eval('('+txt+')')
        //创建字符串，拼接要显示的内容
        var str=`
        <h2>这个是一个详情页<a class="btn btn-primary" href="./list.html" role="button">返回列表页</a></h2>
        <div class="panel panel-default">
            <div class="panel-heading">详细信息</div>
            <div class="panel-body">
                <div class="media">
                    <div class="media-left">
                        <a href="#">
                            <img class="media-object" src="${o1.goods_small_logo}" width="200">
                        </a>
                    </div>
                    <div class="media-body" style="padding-left:20px;">
                        <h3 class="media-heading">${o1.goods_name}</h3>
                        <h3>￥<span>${o1.goods_price}</span></h3>
                        <div class="btn-group" role="group" aria-label="...">
                            <button type="button" class="btn btn-default">XS</button>
                            <button type="button" class="btn btn-default">S</button>
                            <button type="button" class="btn btn-default">M</button>
                            <button type="button" class="btn btn-default">L</button>
                            <button type="button" class="btn btn-default">XL</button>
                        </div>
                        <br />
                        <br />
                        <div class="btn-group" role="group" aria-label="...">
                            <button type="button" class="btn btn-default">-</button>
                            <button type="button" class="btn btn-default">1</button>
                            <button type="button" class="btn btn-default">+</button>
                        </div>
                        <br />
                        <br />
                        <a class="btn btn-success" href="./cart.html" role="button">立即购买</a>
                    </div>
                </div>
                <br/>
                <ul class="nav nav-tabs">
                    <li role="presentation" class="active"><a href="#">Home</a></li>
                    <li role="presentation"><a href="#">Profile</a></li>
                    <li role="presentation"><a href="#">Messages</a></li>
                </ul>
                ${o1.goods_introduce}
            </div>
        </div>
        `
        //把拼接好的内容，渲染到大盒子中
        box.innerHTML=str
    })()
}

//给大盒子box绑定点击事件
box.onclick=function(e){
    var e = e || window.event
    //获取点击对象
    var target=e.target || e.srcElement
    //判断当前点击的是否为加法按钮
    if(target.innerHTML=="+"){
        //获取当前按钮前一个位置的数量
        num=target.previousElementSibling.innerHTML
        num++
        //重新给当前位置赋值
        target.previousElementSibling.innerHTML=num
    }
    //判断当前点击的是否为减法按钮
    if(target.innerHTML=="-"){
        num=target.nextElementSibling.innerHTML
        if(num<=1){
            num=1
        }else{
            num--
            //重新给当前位置赋值
            target.nextElementSibling.innerHTML=num
        }
    }
    //判断当前是否点击"立即购买"
    if(target.innerHTML=="立即购买"){
        //获取当前登录账号
        var name1=getCookie('name')
        //判断账号是否存在
        if(name1){
            //获取当前用户的购物车商品信息
            var carts=localStorage.getItem(name1) || "[]"
            //把当前字符串转为数组对象
            carts=eval('('+carts+')')
            //判断当前数组中是否有值
            if(carts.length>0){
                //bool：主要是判断当前添加的商品是否在localStorage中存在
                var bool=true
                //遍历数组中所有商品
                carts.forEach(item=>{
                    //判断遍历出来的商品是否等于当前要添加的商品
                    if(item.goods_id==o1.goods_id){
                        bool=false
                        //把当前商品的原来的数量和现在要添加数量计算和
                        var mm=item.cart_number+num
                        //判断当前mm是否大于当前商品的库存
                        if(mm<=item.goods_number){
                            item.cart_number=mm
                        }else{
                            alert("你购买的商品已超过了库存，目前只有："+item.goods_number)
                            item.cart_number=parseInt(item.goods_number)
                        }
                        //再重新把当前数组存放在localStorage中
                        localStorage.setItem(name1,JSON.stringify(carts))
                    }
                })
                //判断bool
                if(bool){
                   //修改当前要购买的商品数量
                    o1['cart_number']=num
                    //把当前商品对象追加到数组中
                    carts.push(o1)
                    //再重新把当前数组存放在localStorage中
                    localStorage.setItem(name1,JSON.stringify(carts)) 
                }
            }else{
                //修改当前要购买的商品数量
                o1['cart_number']=num
                //把当前商品对象追加到数组中
                carts.push(o1)
                //再重新把当前数组存放在localStorage中
                localStorage.setItem(name1,JSON.stringify(carts))
            }
        }else{
            alert("你还未登录，请登录之后在购买")
            //获取当前页面地址
            var oldUrl=location.href
            location='./login.html?url='+oldUrl
        }
    }
}