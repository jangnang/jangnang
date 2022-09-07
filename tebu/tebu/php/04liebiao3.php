<?php
//获取客户端传入的参数

$b=$_GET['b'];

//连接数据库
$link=mysqli_connect("localhost",'root','','ddd');
//设置编码
mysqli_set_charset($link,"utf8");
//判断b是否为奇数
if($b%2!=0){
    //判断当前参数是否为空
   
       
        //编写SQL
        $sql="select * from tebuu1  order by t16 asc";
    
}else{
    //判断当前参数是否为空
   
        //编写SQL
        $sql="select * from tebuu1  order by t16 desc";
    
}


//执行SQL语句，并返回结果集
$result=mysqli_query($link,$sql);
//创建数组，存放所有数据
$ar1=[];
//遍历结果集中的每条数据
while($row=mysqli_fetch_assoc($result)){
    //把遍历的数据追加到数组中
    array_push($ar1,$row);
    
}

//给数组进行编码，并返回响应结果
echo json_encode($ar1);

//关闭数据库连接
mysqli_close($link);
?>