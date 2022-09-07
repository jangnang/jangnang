<?php
//获取客户端传入的参数
$name=$_GET["user"];
$pass=$_GET['pass'];
$phone=$_GET['phone'];
$email=$_GET['email'];

//连接数据库
$link=mysqli_connect("localhost",'root','','ddd');
//设置编码
mysqli_set_charset($link,"utf8");
//编写SQL
$sql="insert into zhuce(name,pass,phone,email) values('$name','$pass','$phone','$email')";
//执行SQL语句，返回结果集
$result=mysqli_query($link,$sql);
//判断是否添加成功
if($result){
    echo "1";
}else{
    echo "0";
}
//关闭数据库连接
mysqli_close($link);


?>