# 2.5 clearRect()方法

在Canvas中，可以使用clearRect()方法来清空“<strong>指定矩形区域</strong>"

```
cxt.clearRect(x, y, width, height);
x和y分别表示清空矩形区域最左上角的坐标，width表示矩形的宽度，height表示矩形的高度
```

完整代码：[demo](https://arcsin1.github.io/canvas-demo/cleanRect.html)

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
cxt.fillStyle = "blue";
cxt.fillRect(50, 50, 80, 80);
cxt.clearRect(60, 60, 50, 50);

 </script>

</body>
</html>
```

补充:<strong>（清空整个canvas画布，经常使用的）</strong>

```
cxt.clearRect(0, 0, canvas.width, canvas.height)
```