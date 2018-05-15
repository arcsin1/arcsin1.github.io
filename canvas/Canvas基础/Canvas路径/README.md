# 1.5 Canvas路径

<strong>Canvas是基于“状态”来绘制图形的。每一次绘制（stroke()或fill()等），Canvas会检测整个程序定义的所有状态,这些状态包括strokeStyle、fillStyle、lineWidth等。当一个状态值没有被改变时，Canvas就一直使用最初的值。当一个状态值被改变时，考虑2种情况：</strong>

<strong>1.如果使用beginPath()开始一个新的路径，则不同路径使用不同的值</strong>

<strong>2.如果没有使用beginPath()开始一个新的路径，则后面的值会覆盖前面的值（后来者居上原则）</strong> [demo](https://arcsin1.github.io/canvas-demo/path.html)

```
3个重要api：
beginPath()  	// 开始一条新的路径
closePath()  	 // 关闭当前路径
isPointInPath()  // 判断某一个点是否存在于当前路径内

```

### 1.5.1 beginPath()  开始一个新路径 或者 结束路径（即开始新的路径）

```
重要总结：(牢记)
1.如果你画出来的图形跟预期不一样(比如颜色，填充等)，记得检查一下是否有合理的beginPath()
2.判断开始一个新路径的唯一标准是“是否使用了beginPath()”，而不是视觉上我们看到的首尾相连。
3.moveTo()、lineTo()、strokeRect()、fillRect()、rect()、arc()、arcTo()、quadricCurveTo()和bezierCurveTo()这些方法并不会开始新的路径
4.Canvas中的绘制方法如stroke()、fill()等，都是以“之前最近的beginPath()”后面所有定义的状态为基础进行绘制的。
```

使用beginPath()跟上面的demo对比: [demo](https://arcsin1.github.io/canvas-demo/beginpath.html)

```
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title></title> 
</head>
<body>

<canvas id="myCanvas" width="200" height="200" style="border:1px solid #c3c3c3;">
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

// 第一条可以不用beginPath
 cxt.beginPath()
 cxt.moveTo(50,50);
 cxt.lineTo(100,50);
 cxt.stroke();
 
 cxt.beginPath()
 cxt.moveTo(50,100);
 cxt.lineTo(100,100);
 cxt.strokeStyle = 'blue'
 cxt.stroke();

 cxt.beginPath()
 cxt.moveTo(50,150);
 cxt.lineTo(150,150);
 cxt.strokeStyle = 'red'
 cxt.stroke();
 </script>

</body>
</html>
```
### 1.5.2 closePath() 关闭当前路径

> 注意：关闭路径”并不等于“结束路径”，所谓的“关闭路径”一般是指将同一个路径的起点与终点这两点连接起来，使其成为一个封闭的图形。所谓的“结束路径”一般是指开始一个新的路径。“关闭”指的是“封闭”，“结束”指的是“新的开始”。”

```
重要总结：(牢记)
1.closePath()是关闭路径，并不是结束路径。关闭路径，指的是连接起点与终点。结束路径，指的是开始新的路径
2.如果Canvas只有一条线段的话，那么closePath()方法就什么都不做
3.在Canvas中，只有beginPath()这一种方法来开启新的路径。判断新路径的唯一标准为“是否使用beginPath()
4.closePath()主要用于实现“封闭图形”，例如三角形、多边形、圆形、扇形等。然后，才能使用fill()来进行填充操作
```

不使用closePath()和使用对比：[demo](https://arcsin1.github.io/canvas-demo/closepath.html)

```
<!DOCTYPE html>
<html>
<head> 
<meta charset="utf-8"> 
<title></title> 
</head>
<body>

<canvas id="myCanvas" width="200" height="200" style="border:1px solid #c3c3c3;">
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
cxt.arc(70, 70, 50, 0, -90 * Math.PI / 180, true);
cxt.stroke();

cxt.beginPath()
text('使用了closePath',70,180)
cxt.arc(70, 150, 50, 0, -90 * Math.PI / 180, true);
cxt.strokeStyle = 'blue'
cxt.closePath() //必须在绘制之前
cxt.stroke();

 </script>

</body>
</html>
```

用closePath关闭画箭头：[demo](https://arcsin1.github.io/canvas-demo/closepath1.html)

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

text('没有cxt.lineTo(40, 60)封闭',100,20)
cxt.moveTo(40, 60);
cxt.lineTo(100, 60);
cxt.lineTo(100, 30);
cxt.lineTo(150, 75);
cxt.lineTo(100, 120);
cxt.lineTo(100, 90);
cxt.lineTo(40, 90);
// cxt.lineTo(40, 60);
cxt.stroke();


text('另外的closePath来自动封闭',70,250)
cxt.moveTo(130, 150);
cxt.lineTo(190, 150);
cxt.lineTo(190, 120);
cxt.lineTo(250, 175);
cxt.lineTo(190, 210);
cxt.lineTo(190, 180);
cxt.lineTo(130, 180);
cxt.closePath()
cxt.stroke();

 </script>

</body>
</html>
```

<strong>beginPath()和closePath()不一定是配对使用的。如果我们需要开始新路径时，就应该使用beginPath()；如果我们需要封闭图形（连接起点和终点）时，就应该使用closePath()。</strong>



1.5.3 isPointInPath()方法

> 使用isPointInPath()方法来判断某一个点是否存在于当前的路径中。

```
cxt.isPointInPath(x , y);
如果点(x,y)位于当前路径中，返回true；如果点(x,y)不位于当前路径中，返回false。

注意:isPointInPath()不支持Canvas自带的两个方法：strokeRect()、fillRect()。
    如果想要使用strokeRect()和fillRect()，请使用rect()方法来代替。
```