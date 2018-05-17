# 1.6 Canvas状态

Canvas还有一个非常重要的概念：状态。路径和状态，这两个东西在Canvas中极其重要

>  从路径那一章已经知道了状态的定义了，就不多说明

Canvas为我们提供了两个操作状态的方法：save()和restore()。在Canvas中，我们可以使用save()方法来保存“当前状态”，然后可以使用restore()方法来恢复“之前保存的状态”。save()和restore()一般情况下都是成对配合使用的。

### 1.6.1 clip()

> 在Canvas中，我们可以使用“clip()方法”结合“基本图形的绘制”来指定一个“剪切区域”。其中，这个剪切区域是由基本图形绘制出来的。当使用clip()方法指定剪切区域后，后面所有绘制的图形如果超出这个剪切区域，则超出部分不会显示。
>
> 我们可以把整个画布（Canvas）看成一个房子，clip()方法的剪切区域则可以看成一扇窗户。

```
cxt.clip();
我们在使用clip()方法之前，必须要在Canvas中绘制一个基本图形。然后调用clip()方法后，这个基本图形就会变为一个剪切区域。
注意点：
注意，与之前接触的isPointInPath()方法一样，clip()方法也不支持Canvas自带的两个方法：strokeRect()、fillRect()。如果要使用strokeRect()和fillRect()，请使用rect()方法来代替。
意思就是不要使用strokeRect()和fillRect()来作为剪切区域 ，有bug
```

例子：[demo](https://arcsin1.github.io/canvas-demo/clip.html)

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
//绘制一个"描边圆"，圆心为（50，50），半径为40
cxt.beginPath();
cxt.arc(50, 50, 40, 0, 360 * Math.PI / 180, true);
cxt.closePath();
cxt.strokeStyle = "HotPink";
cxt.stroke();

//使用clip()，使得"描边圆"成为一个剪切区域
cxt.clip(); // 你可以试着把这个去掉看看

//绘制一个"填充矩形"
cxt.beginPath();
cxt.fillStyle = "#66CCFF";
cxt.fillRect(50, 50, 100, 80);


 </script>

</body>
</html>
```

> 从上面可以知道，clip()方法可以让某一个基本图形成为一个“剪切区域”（这里的剪切区域是一个圆），从而使得后面所有绘制的图形都只限于这个剪切区域之内，超出剪切区域的部分就不会显示（也就是被剪切掉）

### 1.6.2  save()方法和restore()方法

> 上面代码使用clip()方法进行剪切区域的时候，其实有一个没解决的问题，即如果后面要取消剪切区域，然后绘制其他图形，那么该怎么做呢？此时，就需要用到Canvas中的save()和restore()这两个方法了。
>
> 在Canvas中，我们可以使用save()方法来保存“当前状态”，然后可以使用restore()方法来恢复“之前保存的状态”。save()和restore()一般情况下也都是成对使用的。 
>

```
Canvas状态的保存和恢复，主要用于以下三种场合：
1.图形或图片裁切
2.图形或图片变形
3.以下属性改变的时候：fillStyle、font、globalAlpha、globalCompositeOperation、lineCap、lineJoin、lineWidth、miterLimit、shadowBlur、shadowColor、shadowOffsetX、shadowOffsetY、strokeStyle、textAlign、textBaseline
```

### 1.6.2_1  图形或图片剪切

> Canvas中，我们可以在图形或者图片剪切（clip()）之前使用save()方法来保持当前状态，然后在剪切（clip()）之后使用restore()方法恢复之前保存的状态

例子：[demo](https://arcsin1.github.io/canvas-demo/save.html) 你可以试试把cxt.save()和cxt.restore()这两句代码删除之后看看效果

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
<input id="btn" type="button" value="绘制新图"/>
<script>
function $$(id){
    return document.getElementById(id);
}

//1、获取canvas对象
const canvas = $$("myCanvas");
//2、获取上下文环境对象context
const cxt = canvas.getContext("2d");
//3、开始绘制图形

//save()保存状态
cxt.save();
//使用clip()方法指定一个圆形的剪切区域
cxt.beginPath();
cxt.arc(70, 70, 50, 0, 360 * Math.PI / 180, true);

cxt.closePath();
cxt.stroke();
cxt.clip();
//绘制一张图片
var image = new Image();
image.src = "2.png";
image.onload = function () {
    cxt.drawImage(image, 10, 20);
}
$$("btn").onclick = function () {
    //restore()恢复状态
    cxt.restore();
    //清空画布
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    //绘制一张新图片
    var image = new Image();
    image.src = "7.png";
    image.onload = function () {
        cxt.drawImage(image, 10, 20);
    }
    
}


 </script>

</body>
</html>
```

### 1.6.2_2 图形或图片变形

> 我们可以在图形或者图片变形之前使用save()方法来保持当前状态，然后在变形之后使用restore()方法恢复之前保存的状态。

不使用save()和restore()的移动 : [demo](https://arcsin1.github.io/canvas-demo/trans.html)

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
cxt.fillStyle = "HotPink";
cxt.translate(30, 30);
cxt.fillRect(0, 0, 100, 50);

cxt.fillStyle = "red ";

cxt.translate(60, 60);
cxt.fillRect(0, 0, 100, 50);



 </script>

</body>
</html>
```

> 分析：
> 在这个例子中，第一次调用translate()方法，也就是使用cxt.translate(30, 30);之后，矩形左上角坐标变为（30,30）。第二次调用translate()方法，也就是使用cxt.translate(60, 60);之后，矩形左上角坐标并不是变为（60,60），而是变为（90,90）。
>
> 如果想要使得第二次调用translate()方法是相对于坐标原点作为参考进行移动的，此时我们可以使用save()和restore()来实现
>



基于坐标原点的移动例子: [demo](https://arcsin1.github.io/canvas-demo/trans1.html)

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
cxt.save()
cxt.fillStyle = "HotPink";
cxt.translate(30, 30);
cxt.fillRect(0, 0, 100, 50);
cxt.restore();

cxt.fillStyle = "red ";

cxt.translate(60, 60);
cxt.fillRect(0, 0, 100, 50);



 </script>

</body>
</html>
```

> 说明：
> 在变形操作（平移、缩放、旋转）中，我们一般都是在变形操作之前使用save()方法保存当前状态，其中当前状态包括参考坐标、图形大小等。然后再使用restore( )方法来恢复之前保存的状态。
>
> save( )和restore( )，在变形操作中会大量用到。如果你的变形操作跟预期效果有出入，记得看看是否需要进行状态的保存和恢复。
>



### 1.6.2_3  状态属性的改变

> 在Canvas中，如果以下状态属性发生改变的时候，我们可以在这些状态改变之前使用save()方法来保持，然后在状态保存之后使用restore()方法恢复。是否需要进行保存和恢复，这个取决于我们的开发需求啦

```
这些状态属性包括：填充效果、描边效果、线条效果、文本效果、阴影效果、全局属性这六个方面。
（1）填充效果：fillStyle。
（2）描边效果：strokeStyle。
（3）线条效果：lineCap、lineJoin、lineWidth、miterLimit。
（4）文本效果：font、textAlign、textBaseline。
（5）阴影效果：shadowBlur、shadowColor、shadowOffsetX、shadowOffsetY。
（6）全局属性：globalAlpha、globalCompositeOperation。
```

例子：[demo](https://arcsin1.github.io/canvas-demo/style.html)

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
const text = "绿叶学习网";
cxt.font = "bold 20px 微软雅黑";

cxt.fillStyle = "HotPink";
cxt.save();                 //save()保存状态
cxt.fillText(text, 50, 40);

cxt.fillStyle = "LightSkyBlue ";
cxt.fillText(text, 50, 80);

cxt.restore();              //restore()恢复状态”
cxt.fillText(text, 50, 120);


 </script>

</body>
</html>
```

### 总结

1. save()方法保存的状态包括三个，即剪切状态、变形状态（一般指变换矩阵）和绘图状态。
2. save()不能保存路径状态，如果想要开始新的路径，只有beginPath()一个方法。
3. save()只能保存“状态”，不能保存“图形”。也就是说，如果想要用save()保存一个圆形，这是不可能的。由于Canvas只有当前一个上下文环境，如果想要恢复图形，就只能清空画布再重绘。

 