//获取页面中的form表单
var frm=document.querySelector('form')
//获取表单元素
var inps=frm.querySelectorAll('input')
//获取登录按钮
var btn=frm.querySelector("button")
//给选中框绑定点击事件
inps[2].onclick=function(){
    //判断当前选中框是否被选中
    if(this.checked){
        btn.disabled=false
    }else{
        btn.disabled=true
    }
}

//获取当前地址栏中的参数
var search=location.search
//给登录按钮绑定点击事件
btn.onclick=function(){
    //获取输入框中的value属性值
    var name1=inps[0].value
    var pass1=inps[1].value;
    //使用async函数来进行访问
    (async function(){
        //在await后面使用promiseAjax来发送请求
        var txt=await promiseAjax({
            url:'../php/login.php',
            datatype:`username=${name1}&password=${pass1}`
        })
        //判断txt的响应结果是否为1
        if(txt==1){
            //保存当前账号
            setCookie('name',name1)
            //判断search是否有值
            if(search){
                //分割参数信息
                var url=search.split('url=')[1]
                location=url
            }else{
                location='./list.html'
            }
        }else{
            alert("账号或密码输入有误")
            location='./login.html'
        }
    })()
}