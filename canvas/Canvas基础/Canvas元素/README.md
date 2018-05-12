# 1.3 Canvas元素

Canvas是一个**行内块元素**（即inline-block），我们一般需要指定其三个属性：id、width和height。width和height分别定义Canvas的宽度和高度。默认情况下，Canvas的宽度为300px，高度为150px

> 注意：定义canvas宽高，千万不要用css样式定义，请用如下方式：

```
在HTML属性中定义：
  <canvas id="myCanvas" width="200" height="100"></canvas>

或者js方式定义属性：
   const canvas=document.getElementById('myCanvas');
   canvas.width = 500
   canvas.height = 500
   const context=canvas.getContext('2d');

用css方式定义canvas宽高无法获取真实宽高，只会获取到默认的 300 X 150
```