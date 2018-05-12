# 1.2 Canvas绘制

HTML5 Canvas，简单来说，就是一门使用JavaScript来操作Canvas元素的技术。使用Canvas元素来绘制图形，需要以下三步:

1. 获取canvas对象
2. 获取上下文环境对象context
3. 开始绘制图形


```
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title></title> 
</head>
<body>

<canvas id="myCanvas" width="200" height="100" style="border:1px solid #c3c3c3;">
</canvas>

<script>
//1、获取canvas对象
const canvas = document.getElementById("myCanvas");
//2、获取上下文环境对象context
const cxt = canvas.getContext("2d");
//3、开始绘制图形
cxt.moveTo(50, 100);
cxt.lineTo(150, 50);
cxt.stroke();

</script>

</body>
</html>

```