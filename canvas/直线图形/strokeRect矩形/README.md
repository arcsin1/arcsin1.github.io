# 2.1 strokeRect矩形

```
2个重要API
cxt.strokeStyle = 属性值; //strokeStyle属性取值有三种，即颜色值、渐变色、图案 
cxt.strokeRect(x,y,width,height);

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

// 描边矩形
text('描边矩形',320,340)
cxt.strokeStyle = 'blue';
cxt.strokeRect(300,300,100,100);

 </script>

</body>
</html>
```