# 1.1 Canvas开始

具体例子：[demo](https://arcsin1.github.io/canvas-demo/d3-canvas.html)

### 具体实现步骤如下:

> 说明在canvas里面我最好在开始画另外部分的时候用context.beginPath();开始新路径，避免不必要的错误，不懂的请看Canvas路径那一章

#### 1.1.1 先用D3创建Canvas

```
const width = 800
const height = 600
const margin = { top: 20, bottom: 30, left: 30, right: 20 }
//实际渲染宽度
const renderWitdh = width - margin.left - margin.right 
//实际渲染高度
const renderHeight = height - margin.top - margin.bottom 

const canvas = d3.select('body')
    	.append('canvas')
    	.attr('width', width)
    	.attr('height', height)
        .style('border','1px solid #ddd')

const context = canvas.node().getContext('2d')
// 这个主要把整体的右上角坐标移走
context.translate(margin.left, margin.top);
// 数据
const data = [21, 50, 10, 35, 90, 25, 12, 67, 5, 3, 18]
```

#### 1.1.2  创建比例尺

```
 // x轴比例尺
    var x = d3.scaleBand()
    	.domain(data)
    	.rangeRound([0, renderWitdh])
    	.padding(0.2);
   	
// y轴比列尺
var y = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .rangeRound([renderHeight, 0]);

// 设置y的ticks
var yTickCount = 10;
var yTicks = y.ticks(yTickCount);
    
```

#### 1.1.3 画x轴相关

```
// 开始新的路径
context.beginPath();
context.strokeStyle = "ddd";
// 画出ticks的每个点
x.domain().forEach(d => {
  context.moveTo(x(d) + x.bandwidth() / 2, renderHeight);
  context.lineTo(x(d) + x.bandwidth() / 2,  renderHeight+6 );
});
context.stroke();
     
// 设置文字方式
context.textAlign = "center";
context.textBaseline = "top";
x.domain().forEach((d, i) => {
  context.fillText(i, x(d) + x.bandwidth() / 2, renderHeight + 14);      
});

// x轴横穿线
context.beginPath()
context.moveTo(10, renderHeight+0.5);
context.lineTo(renderWitdh-10, renderHeight+0.5);
context.stroke()

```

#### 1.1.4 画y轴相关

```
// 开始新的路径
context.beginPath();
//context.strokeStyle = "#ddd";
// y-axis的ticks
yTicks.forEach(d => {
  context.moveTo(0, y(d) + 0.5);
  context.lineTo(-6, y(d) + 0.5);
});
context.textAlign = "right";
context.textBaseline = "middle";
yTicks.forEach(d => {
  context.fillText(d, -9, y(d));
});
context.stroke()

// 画y轴线
context.beginPath();
context.lineTo(0.5, 0.5);
context.lineTo(0.5, renderHeight + 0.5);
context.stroke()
```

#### 1.1.5 画柱子和文字说明

```
 // 画柱子
context.beginPath();
context.fillStyle = 'steelblue';    
data.forEach((d, i) => {  
  context.fillRect(x(d), y(d), x.bandwidth(), renderHeight - y(d));
});

// 画data在对应x点上的y取值
context.beginPath();
context.fillStyle = '#000';  
context.textAlign = "center";
context.textBaseline = "bottom";
x.domain().forEach((d, i) => {
  context.fillText(d, x(d) + x.bandwidth() / 2, y(d));
});
```