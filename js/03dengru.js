// 获取页面中的form表单
var frm=document.querySelector('.yonhudengrubiaodan')
// 获取表单元素
var inps=frm.querySelectorAll('input')
// 获取登入按钮
var btn=frm.querySelector('button')
// 获取当前地址栏中的参数
var search=location.search
// 给登入按钮绑定点击事件
btn.onclick=function(){
    // 获取输入框中的value属性值
    var name1=inps[0].value
    var pass1=inps[1].value;
    (async function(){
        // 在await后面使用promiseAJAX来发送请求
        var txt=await promiseAjax({
            url:'../php/03dengru.php',
            datatype:` username=${name1}&password=${pass1}`
        })
        // 判断txt的响应是否为1
        if(txt==1){
             setCookie('name',name1)
            //  判断search是否有值
            if(search){
                // 分割参数信息
                var url=search.split('url=')[1]
                location=url
            }else{
                location='./04liebioa.html'
            }

        }else{
            alert("账户或密码输入错误请重新输入")
            location='./02dengru.html'
        }
    })()
}