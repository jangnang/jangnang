//获取操作对象
let frm=document.querySelector('.form-horizontal')
//获取当前表单中所有的表单元素
let inps=frm.querySelectorAll("input")
//获取表单中的按钮对象
let btns=frm.querySelectorAll("button")
//获取输入框后面的span标签
var spans=frm.querySelectorAll('span')

var pass=false;//密码未验证通过
var user=false;//账号未验证通过

//给账号绑定失去焦点事件
inps[0].onblur=function(){
    //获取输入框中的value值
    var val=this.value
    var reg=/^[\u4e00-\u9fa5]{2,4}$/
    if(reg.test(val)){
        //使用async函数发送请求
        (async function(){
            var txt=await promiseAjax({
                url:'../php/zhuce.php',
                datatype:`user1=${val}`
            })
            //判断响应结果是否等于2
            if(txt==2){
                user=true
                spans[0].innerHTML="√"
            }else{
                user=false
                spans[0].innerHTML='该账号已存在，请重新注册'
            }
        })()
    }else{
        spans[0].innerHTML="账号输入有误"
        user=false
    }
}

inps[1].onblur=function(){
    var val=this.value
    var reg=/^\w{6,16}$/
    if(reg.test(val)){
        spans[1].innerHTML="√"
        pass=true
    }else{
        spans[1].innerHTML="密码输入有误"
        pass=false
    }
}

//给注册按钮绑定点击事件
btns[0].onclick=function(){
    //判断所有的表单元素是否都验证成功
    if(user && pass){
        //获取所有输入框中的内容
        var n1=inps[0].value
        var p1=inps[1].value
        var t1=inps[2].value
        var e1=inps[3].value
        //通过ajax发送请求
        ajax1({
            url:'../php/zhuce2.php',
            datatype:`user=${n1}&pass=${p1}&phone=${t1}&email=${e1}`,
            success:function(dt){
                //判断响应结果是否为1
                if(dt==1){
                    alert("注册成功")
                    location='./login.html'
                }else{
                    alert("注册失败")
                }
            }
        })
    }else{
        inps[0].onblur()
        inps[1].onblur()
    }
}
