# 2.3 fillRect和strokeRect

几何图形完整代码：[demo](https://arcsin1.github.io/canvas-demo/geometry.html)

> 此代码包含了一起使用  和 颜色属性不同的取值使用

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


// 同时使用描边矩形和填充矩形
text('同时使用描边矩形和填充矩形',520,30)
cxt.strokeStyle = "blue";
cxt.strokeRect(500, 50, 80, 80);
cxt.fillStyle = "#FFE8E8";
cxt.fillRect(500, 50, 80, 80);

// 混合模式的颜色重叠

cxt.fillStyle = "HotPink";
cxt.fillRect(50, 400, 80, 80);
cxt.fillStyle = "rgba(0,0,255,0.3)";
cxt.fillRect(30, 420, 80, 80);


 </script>

</body>
</html>
```