# 第2章 直线图形

### 1.直线

```
3个重要API
moveTo(x1,y1) 移动到某个起始点位置
lineTo(x2,y2) 把(x1,y1)起点连接到终点(x2,y2)  此时还没开始画
stroke()  画笔画上面的线
```
一条直线完整代码：[demo](https://arcsin1.github.io/canvas-demo//line.html)

```
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
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
多条直接完整代码：[demo](https://arcsin1.github.io/canvas-demo//line1.html)

```
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
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
 cxt.moveTo(50,50);
 cxt.lineTo(100,50);
 
 cxt.moveTo(50,100);
 cxt.lineTo(100,100);
 cxt.stroke();

</script>

</body>
</html>
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
// 三角形
text('直线画三角形',60,60)
cxt.moveTo(50, 100);
cxt.lineTo(150, 50);
cxt.lineTo(150, 100);
cxt.lineTo(50, 100);
cxt.stroke();

//画矩形
text('直接画矩形',140,200)
cxt.moveTo(120, 180);
cxt.lineTo(120,300); 
cxt.lineTo(200, 300);
cxt.lineTo(200, 180);
cxt.lineTo(120, 180);
cxt.stroke();


 </script>

</body>
</html>
```