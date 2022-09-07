//创建分页器的构造函数
function Pagination(ele,obj,cb){
    //把传入的实参转为实例属性，这样可以在其他方法中操作该属性
    this.ele=ele
    this.obj=obj || {}
    this.cb=cb || function(){}
    //创建默认参数
    this.defInfo={
        //数据信息
        pageInfo:{
            pagenum:1, //当前第1页
            pagesize:10, //每页显示10条
            totalsize:100, //总条数
            totalpage:10 //总页数
        },
        //文本信息
        textInfo:{
            first:"first",//首页
            prev:"prev",//上一页
            list:'',//页码
            next:"next",//下一页
            last:"last",//尾页
        }
    }
    //创建属性，存放页码的盒子
    this.list=null
    //调用入口方法
    this.init()
}
//创建入口方法
Pagination.prototype.init=function(){
    //替换默认参数
    this.update1()
    //把参数中的数据显示出来
    this.show1()
    //给大盒子绑定点击事件
    this.dianji()
}
//创建替换默认参数的方法
Pagination.prototype.update1=function(){
    //判断当前参数中是否有pageInfo
    if(this.obj.pageInfo){
        //遍历该对象中的键值对
        for(var key in this.obj.pageInfo){
            //使用传入的参数去替换默认参数
            this.defInfo.pageInfo[key]=this.obj.pageInfo[key]
        }
    }
    if(this.obj.textInfo){
        for(var key in this.obj.textInfo){
            this.defInfo.textInfo[key]=this.obj.textInfo[key]
        }
    }
}

//显示所有数据
Pagination.prototype.show1=function(){
    //清空当前大盒子中的所有内容
    this.ele.innerHTML=''
    //显示文本信息
    this.showText()
    //显示页码
    this.showP()
    //禁用按钮
    this.disabled1()
    //显示输入框和按钮
    this.showBtn()
    //调用回调函数
    this.cb(this.defInfo.pageInfo.pagenum)
}
//创建方法显示输入框和跳转按钮
Pagination.prototype.showBtn=function(){
    //获取当前页码
    var pagenum=this.defInfo.pageInfo.pagenum
    //创建输入框对象
    var newInp=document.createElement('input')
    //输入框添加value属性值
    newInp.value=pagenum
    //给输入框设置样式
    setStyle(newInp,{
        width:"30px",
        padding:"5px"
    })
    //把输入框追加到大盒子中
    this.ele.appendChild(newInp)

    //创建按钮
    var btn=document.createElement("button")
    //给按钮设置文本
    btn.innerHTML="GO"
    //给按钮设置样式
    setStyle(btn,{
        padding:"5px"
    })
    //把按钮追加到大盒子
    this.ele.appendChild(btn)

}
//创建禁用方法
Pagination.prototype.disabled1=function(){
    //获取当前大盒子中所有子元素对象
    var divs=this.ele.getElementsByTagName('div')
    //获取当前页码和总页数
    var pagenum=this.defInfo.pageInfo.pagenum
    var totalpage=this.defInfo.pageInfo.totalpage
    //判断当前页是否等于1
    if(pagenum==1){
        divs[0].style.backgroundColor="#666"
        divs[1].style.backgroundColor="#666"
    }

    if(pagenum==totalpage){
        divs[3].style.backgroundColor="#666"
        divs[4].style.backgroundColor="#666"
    }
}
//创建显示文本方法
Pagination.prototype.showText=function(){
    //获取默认参数中的文本内容
    var textInfo=this.defInfo.textInfo
    //遍历每个键值对
    for(var key in textInfo){
        //创建div标签
        var newDiv=document.createElement('div')
        //给div对象添加class属性值
        newDiv.className=key
        //判断当前key是否等于list
        if(key=="list"){
            //给实例属性list赋值
            this.list=newDiv
            //给当前div对象设置样式
            setStyle(newDiv,{
                display:"flex",
                justifyContent: "center",
                alignItems: "center"
            })
        }else{
            //给当前div标签添加文本
            newDiv.innerHTML=textInfo[key]
            //调用方法给当前div对象设置样式
            setStyle(newDiv,{
                border:"1px solid #666",
                margin:"0px 5px",
                padding:"2px 3px"
            })
        }
        //把创建好的div对象追加到大盒子中
        this.ele.appendChild(newDiv)
    }
}
//创建显示页码的方法
Pagination.prototype.showP=function(){
    //获取当前页码以及总页数
    var pagenum=this.defInfo.pageInfo.pagenum
    var totalpage=this.defInfo.pageInfo.totalpage
    //判断总页数是否小于等于10
    if(totalpage<=10){
        //遍历页码
        for(var i=1;i<=totalpage;i++){
            //通过createP方法创建页码标签
            var newP=createP(i,pagenum)
            //把当前p标签追加到页码的盒子中
            this.list.appendChild(newP)
        }
    }else{
        //判断当前页码是否小于5
        if(pagenum<5){
            //前面5个
            for(var i=1;i<=5;i++){
                //通过createP方法创建页码标签
                var newP=createP(i,pagenum)
                //把当前p标签追加到页码的盒子中
                this.list.appendChild(newP)
            }
            //中间...
            var span=document.createElement('span')
            //给span标签添加内容
            span.innerHTML='...'
            //把当前span标签追加到div中
            this.list.appendChild(span)

            //最后显示两页
            for(var i=totalpage-1;i<=totalpage;i++){
                //通过createP方法创建页码标签
                var newP=createP(i,pagenum)
                //把当前p标签追加到页码的盒子中
                this.list.appendChild(newP)
            }
            //判断当前页码是否等于5
        }else if(pagenum==5){
            //前面7个
            for(var i=1;i<=7;i++){
                //通过createP方法创建页码标签
                var newP=createP(i,pagenum)
                //把当前p标签追加到页码的盒子中
                this.list.appendChild(newP)
            }
            //中间...
            var span=document.createElement('span')
            //给span标签添加内容
            span.innerHTML='...'
            //把当前span标签追加到div中
            this.list.appendChild(span)

            //最后显示两页
            for(var i=totalpage-1;i<=totalpage;i++){
                //通过createP方法创建页码标签
                var newP=createP(i,pagenum)
                //把当前p标签追加到页码的盒子中
                this.list.appendChild(newP)
            }
        }else if(pagenum>5 && pagenum<totalpage-4){
            //前面2个
            for(var i=1;i<=2;i++){
                //通过createP方法创建页码标签
                var newP=createP(i,pagenum)
                //把当前p标签追加到页码的盒子中
                this.list.appendChild(newP)
            }
            //中间...
            var span1=document.createElement('span')
            //给span标签添加内容
            span1.innerHTML='...'
            //把当前span标签追加到div中
            this.list.appendChild(span1)

            //中间5个
            for(var i=pagenum-2;i<=pagenum+2;i++){
                //通过createP方法创建页码标签
                var newP=createP(i,pagenum)
                //把当前p标签追加到页码的盒子中
                this.list.appendChild(newP)
            }

            var span2=document.createElement('span')
            //给span标签添加内容
            span2.innerHTML='...'
            //把当前span标签追加到div中
            this.list.appendChild(span2)

            //最后显示两页
            for(var i=totalpage-1;i<=totalpage;i++){
                //通过createP方法创建页码标签
                var newP=createP(i,pagenum)
                //把当前p标签追加到页码的盒子中
                this.list.appendChild(newP)
            }
        }else if(pagenum==totalpage-4){
            //前面2个
            for(var i=1;i<=2;i++){
                //通过createP方法创建页码标签
                var newP=createP(i,pagenum)
                //把当前p标签追加到页码的盒子中
                this.list.appendChild(newP)
            }
            //中间...
            var span1=document.createElement('span')
            //给span标签添加内容
            span1.innerHTML='...'
            //把当前span标签追加到div中
            this.list.appendChild(span1)

            //最后显示七页
            for(var i=totalpage-6;i<=totalpage;i++){
                //通过createP方法创建页码标签
                var newP=createP(i,pagenum)
                //把当前p标签追加到页码的盒子中
                this.list.appendChild(newP)
            }
        }else if(pagenum>totalpage-4){
            //前面2个
            for(var i=1;i<=2;i++){
                //通过createP方法创建页码标签
                var newP=createP(i,pagenum)
                //把当前p标签追加到页码的盒子中
                this.list.appendChild(newP)
            }
            //中间...
            var span1=document.createElement('span')
            //给span标签添加内容
            span1.innerHTML='...'
            //把当前span标签追加到div中
            this.list.appendChild(span1)

            //最后显示5页
            for(var i=totalpage-4;i<=totalpage;i++){
                //通过createP方法创建页码标签
                var newP=createP(i,pagenum)
                //把当前p标签追加到页码的盒子中
                this.list.appendChild(newP)
            }
        }
    }
}
//创建给大盒子绑定点击事件的方法
Pagination.prototype.dianji=function(){
    //给大盒子绑定点击事件
    this.ele.onclick=(e)=>{
        //获取当前页码和总页数
        var pagenum=this.defInfo.pageInfo.pagenum
        var totalpage=this.defInfo.pageInfo.totalpage
        //兼容事件对象
        var e = e || window.event
        //获取点击对象
        var target=e.target || e.srcElement
        //判断是否点击的下一页
        if(target.className=='next' && pagenum!=totalpage){
            //修改当前页码
            pagenum++
            //把修改之后的结果重新赋值给默认参数对象
            this.defInfo.pageInfo.pagenum=pagenum
            //调用显示方法，重新显示页面信息
            this.show1()
        }
        //判断是否点击的上一页
        if(target.className=="prev" && pagenum!=1){
            //修改当前页码
            pagenum--
            //把修改之后的结果重新赋值给默认参数对象
            this.defInfo.pageInfo.pagenum=pagenum
            //调用显示方法，重新显示页面信息
            this.show1()
        }
        //判断是否点击尾页
        if(target.className=="last" &&  pagenum!=totalpage){
            //修改当前页码
            pagenum=totalpage
            //把修改之后的结果重新赋值给默认参数对象
            this.defInfo.pageInfo.pagenum=pagenum
            //调用显示方法，重新显示页面信息
            this.show1()
        }
        //判断是否点击首页
        if(target.className=="first" && pagenum!=1){
             //修改当前页码
             pagenum=1
             //把修改之后的结果重新赋值给默认参数对象
             this.defInfo.pageInfo.pagenum=pagenum
             //调用显示方法，重新显示页面信息
             this.show1()
        }

        //判断当前是否点击页码
        if(target.nodeName=="P" && target.innerHTML!=pagenum){
            //修改当前页码
            pagenum=parseInt(target.innerHTML)
            //把修改之后的结果重新赋值给默认参数对象
            this.defInfo.pageInfo.pagenum=pagenum
            //调用显示方法，重新显示页面信息
            this.show1()
        }
        //判断当前点击的是否为GO按钮
        if(target.innerHTML=="GO"){
            //获取按钮前面输入框的value值
            var val=target.previousElementSibling.value
            //判断当前输入框的value属性值是否等于当前页码
            if(val!=pagenum && val>=1 && val<=totalpage){
                pagenum=parseInt(val)
                //把修改之后的结果重新赋值给默认参数对象
                this.defInfo.pageInfo.pagenum=pagenum
                //调用显示方法，重新显示页面信息
                this.show1()
            }
        }

    }
}

//创建一个生成页码的函数
function createP(m,num){
    //创建p标签
    var p1=document.createElement('p')
    //给p标签添加文本
    p1.innerHTML=m
    //给p标签设置样式
    setStyle(p1,{
        border:'1px solid #666',
        margin:"0px 5px",
        padding:'2px 5px'
    })
    //判断遍历出来的m是否等于当前页
    if(m==num){
       setStyle(p1,{
        backgroundColor:"#ccc"
       }) 
    }
    return p1
}
//创建一个给元素设置样式的函数
function setStyle(ele,obj){
    //遍历obj
    for(var key in obj){
        //设置样式
        ele.style[key]=obj[key]  //div.style['border']="1px solid #666"
    }
}
