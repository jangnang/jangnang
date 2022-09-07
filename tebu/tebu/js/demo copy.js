//封装一个随机颜色
function color1() {
    //创建r,g,b三个色值
    var r = parseInt(Math.random() * 256)
    var g = parseInt(Math.random() * 256)
    var b = parseInt(Math.random() * 256)
    //拼接色值
    var str = "rgb(" + r + "," + g + "," + b + ")"
    return str
}

//封装一个获取随机范围的数字
function random1(m, n) {
    return parseInt(Math.random() * (n - m + 1)) + m
}

//选择排序：给数组元素进行升序或降序的排列
function choose1(arr, str) {
    //选择排序
    //外层循环遍历被比较的元素
    for (var i = 0; i < arr.length - 1; i++) {
        //内层循环则遍历需要比较的元素
        for (var j = i + 1; j < arr.length; j++) {
            //判断str是否等于desc
            if (str == 'desc') {
                //判断当前被比较和需要比较的元素大小关系
                if (arr[i] < arr[j]) {
                    var temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
            } else {
                //判断当前被比较和需要比较的元素大小关系
                if (arr[i] > arr[j]) {
                    var temp = arr[i]
                    arr[i] = arr[j]
                    arr[j] = temp
                }
            }
        }
    }
    return arr
}

//去除数组中重复的元素
function duplicate1(arr) {
    //创建新数组，接收不重复的元素
    var arr2 = []
    //遍历数组中的每个元素
    for (var i = 0; i < arr.length; i++) {
        //判断当前元素是否在arr2数组中存在
        if (arr2.indexOf(arr[i]) == -1) {
            //给arr2数组追加元素
            arr2.push(arr[i])
        }
    }
    return arr2
}

//替换一个或多个字符
function replace1(s1, old1, new1) {
    //创建字符串，拼接所有内容
    var str = ''
    //遍历字符串中的每个字符
    for (var i = 0; i < s1.length; i++) {
        //判断当前字符串是否等于要替换的旧字符串
        if (s1.substr(i, old1.length) == old1) {
            str += new1
            i = i + old1.length - 1
        } else {
            str += s1[i]
        }
    }
    return str
}
//随机生成指定个数的名字
function fn1(mm) {
    //创建数组，存放所有名称
    var ar1 = []
    var s1 = "赵钱孙李周五正旺冯陈褚卫"
    var s2 = "一二三四五六七八九十"
    var s3 = "氢氦锂铍硼碳氮氧氟氖"
    //循环遍历100次
    for (var i = 1; i <= mm; i++) {
        //使用随机方法来获取下标，并通过下标去获取对应的字符，拼接起来生成一个名字
        var name1 = s1[random1(0, s1.length - 1)] + s2[random1(0, s2.length - 1)] + s3[random1(0, s3.length - 1)]
        //把随机生成的名字追加到数组中
        ar1.push(name1)
    }
    return ar1
}

//创建运动函数
function move(ele, obj, cb) {
    //创建对象，存放每个样式的定时器
    var o1 = {}
    //遍历传入的参数对象
    for (let key in obj) {
        clearInterval(o1[key])
        //把定时器赋值给对象中指定的属性名
        o1[key] = setInterval(() => {
            //创建变量，表示初始值
            var start
            //判断当前样式是否为opacity
            if (key == "opacity") {
                start = getComputedStyle(ele)[key] * 100
            } else {
                start = parseInt(getComputedStyle(ele)[key])
            }
            //设置步长
            if (obj[key] > start) {
                var speed = 6
            } else {
                var speed = -6
            }

            //判断剩余的运动量是否小于等于步长
            if (Math.abs(obj[key] - start) <= Math.abs(speed)) {
                //清除当前样式的定时器
                clearInterval(o1[key])
                //删除o1对象中该属性名
                delete o1[key]
                //判断当前o1对象中的键值对个数是否为0
                if (length1(o1) == 0) {
                    //判断是否传入了运动函数
                    cb ? cb() : ""
                }
                //一步到位
                //判断是否为透明度
                if (key == "opacity") {
                    ele.style[key] = obj[key] / 100
                } else {
                    ele.style[key] = obj[key] + 'px'
                }
            } else {
                //判断当前样式是否透明度
                if (key == "opacity") {
                    ele.style[key] = (start + speed) / 100
                } else {
                    ele.style[key] = start + speed + 'px'
                }
            }
        }, 50)
    }
}

//创建函数，检查o1对象中键值对的个数
function length1(obj) {
    var num = 0 //表示键值对的个数
    //遍历obj对象
    for (var i in obj) {
        num++
    }
    return num
}

//封装cookie
//添加cookie
function setCookie(key, value, t1) {
    //判断t1是否有值
    if (t1) {
        console.log(t1)
        //计算存储时间
        var t1 = new Date() - 8 * 3600 * 1000 + t1 * 1000
        //创建cookie
        document.cookie = `${key}=${value};expires=${new Date(t1)}`
    } else {
        document.cookie = `${key}=${value}`
    }
}

//获取指定的cookie
function getCookie(key) {
    //获取当前所有cookie
    var cookis = document.cookie
    //分割字符串
    var ar1 = cookis.split('; ')
    //遍历数组元素
    for (var i = 0; i < ar1.length; i++) {
        //继续分割数组元素
        var ar2 = ar1[i].split('=')
        //判断当前数组中第一个元素是否等于key
        if (ar2[0] == key) {
            return ar2[1]
        }
    }
}

//删除cookie
function removeCookie(key) {
    setCookie(key, '', -1)
}


//普通函数封装ajax
function ajax1(o1) {
    //创建一个默认参数
    var def1 = {
        url: '', //请求地址
        type: 'get',//请求方式
        datatype: '',//请求参数
        async: true, //是否异步
        success: function () { },//请求成功的回调函数
        error: function () { }//请求失败的回调函数
    }

    //检查实参中是否有请求地址
    if (!o1.url) {
        throw new Error("请输入请求地址")
    }
    //使用实参去替换默认参数
    for (let key in o1) {
        def1[key] = o1[key]
    }
    //1、创建ajax对象
    var xhr = new XMLHttpRequest()
    //判断默认参数中的datatype是否有值
    if (def1.datatype) {
        //判断当前请求方式是否为get
        if (def1.type.toUpperCase() == "GET") {
            //2、配置连接信息
            xhr.open(def1.type, def1.url + '?' + def1.datatype, def1.async)
            //3、发送请求
            xhr.send()
        } else if (def1.type.toUpperCase() == "POST") {
            //2、配置连接信息
            xhr.open(def1.type, def1.url, def1.async)
            //3、设置请求头信息
            xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded")
            //4、发送请求
            xhr.send(def1.datatype)
        }
    } else {
        //2、配置连接信息
        xhr.open(def1.type, def1.url, def1.async)
        //3、发送请求
        xhr.send()
    }

    //监听ajax状态
    xhr.onreadystatechange = function () {
        //判断ajax状态是否结束
        if (xhr.readyState == 4) {
            //判断http请求是否成功
            if (xhr.status == 200) {
                //获取解析完毕的响应结果
                var txt = xhr.responseText
                //调用回调函数，并把响应结果传递过去
                def1.success(txt)
            } else {
                //调用失败的回调函数
                def1.error(xhr.status)
            }
        }
    }
}

//在promise构造函数中封装ajax
function promiseAjax(o1) {
    //创建promise对象
    return new Promise((res, rej) => {
        //创建一个默认参数
        var def1 = {
            url: '', //请求地址
            type: 'get',//请求方式
            datatype: '',//请求参数
            async: true, //是否异步
            success: function () { },//请求成功的回调函数
            error: function () { }//请求失败的回调函数
        }

        //检查实参中是否有请求地址
        if (!o1.url) {
            throw new Error("请输入请求地址")
        }
        //使用实参去替换默认参数
        for (let key in o1) {
            def1[key] = o1[key]
        }
        //1、创建ajax对象
        var xhr = new XMLHttpRequest()
        //判断默认参数中的datatype是否有值
        if (def1.datatype) {
            //判断当前请求方式是否为get
            if (def1.type.toUpperCase() == "GET") {
                //2、配置连接信息
                xhr.open(def1.type, def1.url + '?' + def1.datatype, def1.async)
                //3、发送请求
                xhr.send()
            } else if (def1.type.toUpperCase() == "POST") {
                //2、配置连接信息
                xhr.open(def1.type, def1.url, def1.async)
                //3、设置请求头信息
                xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded")
                //4、发送请求
                xhr.send(def1.datatype)
            }
        } else {
            //2、配置连接信息
            xhr.open(def1.type, def1.url, def1.async)
            //3、发送请求
            xhr.send()
        }

        //监听ajax状态
        xhr.onreadystatechange = function () {
            //判断ajax状态是否结束
            if (xhr.readyState == 4) {
                //判断http请求是否成功
                if (xhr.status == 200) {
                    //获取解析完毕的响应结果
                    var txt = xhr.responseText
                    //调用回调函数，并把响应结果传递过去
                    res(txt)
                } else {
                    //调用失败的回调函数
                    rej(xhr.status)
                }
            }
        }
    })
}
