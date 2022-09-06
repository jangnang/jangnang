<?php
//获取客户端传入的参数
$u=$_GET['user1'];

//连接数据库
$link=mysqli_connect("localhost",'root','','ddd');
//设置编码
mysqli_set_charset($link,"utf8");
//编写SQL
$sql="select * from zhuce where name='$u'";
//执行SQL语句，并返回结果集
$result=mysqli_query($link,$sql);
//判断结果集是否有数据
if($row=mysqli_fetch_assoc($result)){
    echo "1";
}else{
    echo "2";
}
//关闭数据库连接
mysqli_close($link);

?>