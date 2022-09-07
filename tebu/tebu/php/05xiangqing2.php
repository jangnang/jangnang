<?php
$t211=$_GET['tt'];
$link=mysqli_connect('localhost','root','','ddd');
//设置编码
mysqli_set_charset($link,"utf8");
// 设置sql语句
$sql="update tebuu1 set  t231='$t211'";
// 执行sql语句
$result=mysqli_query($link,$sql);
// // 获取结果集中第一条数据
// $row=mysqli_fetch_assoc($result);
// // 给获取的内容进行编码，并返回结响应结果
// echo json_encode($row);
// 关闭数据库
mysqli_close($link);
?>