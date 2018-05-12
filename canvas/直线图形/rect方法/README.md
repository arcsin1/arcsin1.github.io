# 2.3 rect()方法

```
rect(x,y,width,height)

strokeRect()、fillRect()和rect()都可以画矩形。这三种方法参数是相同的，不同在于实现效果方面。其中strokeRect()和fillRect()这两个方法在调用之后，会立即把矩形绘制出来。而rect()方法在调用之后，并不会把矩形绘制出来。

只有在使用rect()方法之后再调用stroke()或者fill()方法，才会把矩形绘制出来(线条和颜色)
```



1.rect()和stroke()

```
cxt.strokeStyle="red";
cxt.rect(50,50,80,80);
cxt.stroke();

等价于

cxt.strokeStyle="red";
cxt.strokeRect(50,50,80,80);


```

2.rect()和fill()

```
cxt.fillStyle="red";
cxt.rect(50,50,80,80);
cxt.fill();

等价于

cxt.fillStyle="red";
cxt.fillRect(50,50,80,80);


```

