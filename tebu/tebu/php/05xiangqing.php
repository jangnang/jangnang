<?php
// 获取传递参数
$id=$_GET['id'];
// 连接数据库
$link=mysqli_connect('localhost','root','','ddd');
//设置编码
mysqli_set_charset($link,"utf8");
// 设置sql语句
$sql="select * from tebuu1 where id=$id";
// 执行sql语句
$result=mysqli_query($link,$sql);
// 获取结果集中第一条数据
$row=mysqli_fetch_assoc($result);
// 给获取的内容进行编码，并返回结响应结果
echo json_encode($row);
// 关闭数据库
mysqli_close($link);
?>