# 2.6 多边形

> 在Canvas中，多边形也是使用moveTo()和lineTo()这两个方法画出来的

1.绘制箭头

完整代码：[demo](https://arcsin1.github.io/canvas-demo/arrow.html)

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

//1、获取canvas对象
const canvas = $$("myCanvas");
//2、获取上下文环境对象context
const cxt = canvas.getContext("2d");
//3、开始绘制图形

cxt.moveTo(40, 60);
cxt.lineTo(100, 60);
cxt.lineTo(100, 30);
cxt.lineTo(150, 75);
cxt.lineTo(100, 120);
cxt.lineTo(100, 90);
cxt.lineTo(40, 90);
cxt.lineTo(40, 60);
cxt.stroke();

 </script>

</body>
</html>
```

2.绘制正多边形：[demo](https://arcsin1.github.io/canvas-demo/polygon.html)

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
/*
* n：表示n边形
* cx、cy：表示n边形中心坐标
* size：表示n边形的大小
*/
function createPolygon(cxt, n, cx, cy, size) {
    cxt.beginPath(); // 开始路径
    var degree = (2 * Math.PI )/ n;
    for (var i = 0; i < n; i++) {
            var x = Math.cos(i * degree);
            var y = Math.sin(i * degree);
            cxt.lineTo(x * size + cx, y * size + cy);
    }
    cxt.closePath(); // 关闭路径 经常要用
}
//1、获取canvas对象
const canvas = $$("myCanvas");
//2、获取上下文环境对象context
const cxt = canvas.getContext("2d");
//3、开始绘制图形
createPolygon(cxt, 3, 200, 200, 50);
cxt.fillStyle = "blue";
cxt.fill();


createPolygon(cxt, 4, 100, 100, 50);
cxt.fillStyle = "red";
cxt.fill();

createPolygon(cxt, 5, 300, 100, 50);
cxt.fillStyle = "red";
cxt.fill();

 </script>

</body>
</html>
```