<?php
// 获取客户端传入的参数
$n=$_GET['username'];
$p=$_GET['password'];
// 链接数据库
$link=mysqli_connect("localhost",'root','','ddd');
// 设置编码
mysqli_set_charset($link,"utf8");
// 设置sql语句
$sql="select * from zhuce where name= '$n' and pass= '$p'";
// 执行sql，并返回结果集
$result=mysqli_query($link,$sql);
// 判断结果集中是否有数据
if($row=mysqli_fetch_assoc($result)){
    echo "1";
}else{
    echo "0";
}
// 关闭数据库连接
mysqli_close($link);
?>