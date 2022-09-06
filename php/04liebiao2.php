<?php
//获取客户端传入的参数
$oneid=$_GET['oneid'];

//连接数据库
$link=mysqli_connect('localhost','root','','ddd');
//设置编码
mysqli_set_charset($link,"utf8");
//SQL语句
$sql="select * from tebuu1 where t1 like '%$oneid%'";
// echo $sql;
// die();
//执行SQL语句，并返回结果集
$result=mysqli_query($link,$sql);
//创建数组，存放所有信息
$ar1=[];
//遍历结果集中的每条数据
while($row=mysqli_fetch_assoc($result)){
    //把当前数据追加到数组中
    array_push($ar1,$row);
}
//给数组进行编码，并返回响应结果
echo json_encode($ar1);
//关闭数据库连接
mysqli_close($link);

?>