# 第2章 直线图形

### 1.直线

```
3个重要API
moveTo(x1,y1) 移动到某个起始点位置
lineTo(x2,y2) 把(x1,y1)起点连接到终点(x2,y2)  此时还没开始画
stroke()  画笔画上面的线
```

完整代码：[demo](https://arcsin1.github.io/canvas-demo//line.html)

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