# 2.2 fillRect矩形


```
2个重要API
cxt.fillStyle = 属性值; //strokeStyle属性取值有三种，即颜色值、渐变色、图案 
cxt.fillRect(x,y,width,height);

```
几何图形完整代码：[demo](https://arcsin1.github.io/canvas-demo/geometry.html)
```
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title></title> 
</head>
<body>

<canvas id="myCanvas" width="800" height="600" style="border:1px solid #c3c3c3;">
</canvas>

<script>
function $$(id){
    return document.getElementById(id);
}
function text(text,x,y) {
    cxt.font = "bold 15px 微软雅黑"
    cxt.fillStyle = "#000"
    cxt.fillText(text,x,y)
}
//1、获取canvas对象
const canvas = $$("myCanvas");
//2、获取上下文环境对象context
const cxt = canvas.getContext("2d");
//3、开始绘制图形

// 填充矩形
text('填充矩形',320,50)
cxt.fillStyle= 'red';
cxt.fillRect(300, 70, 100, 100);

 </script>

</body>
</html>
```