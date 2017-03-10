import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav.js';

class About extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const divStyle = {  
        color: '#333',
        margin: '200px 200px ' 
    } 
    return (
      <div>
        <Nav title="about"/>
        <div className="right-menu about">
         <div className="container-fluid">
          <div className="panel panel-default">
              <div className="panel-heading"><h1>About Me</h1></div>
              <div className="panel-body">
                <h1>个人信息</h1>
                <ul>
                  <li>曾云/男/1993</li>
                  <li>技术博客: <a href="https://expendo.github.io" target="_blank" rel="external">https://expendo.github.io</a></li>
                  <li>Github: <a href="https://github.com/Expendo" target="_blank" rel="external">https://github.com/Expendo</a></li>
                  <li>Tel: 13896226203</li>
                  <li>QQ: 554688726</li>
                  <li>Email: zy19931129@gmail.com(or 13896226203@163.com)</li>
                </ul>
                <h1>个人技能</h1>
                <ul className="skill">
                  <li>熟悉HTML5/CSS3，可编写符合语义，结构清晰，容易维护的HTML代码结构，对H5新特性有一定掌握，对移动端网页有一定的经验;</li>
                  <li>熟悉Javascript 原生语言，可使用原生JS开发功能以及插件;</li>
                  <li>熟悉JQ、ReactJs、Angularjs、emberjs等JS框架，且有开发经验。了解最新ECMAScript 6的语法;</li>
                  <li>熟悉使用分布式版本控制系统Git，熟悉且经常使用git命令，在Github有开源项目，用reactJs+redux+webpack等搭建个人技术博客；（https://expendo.github.io）</li>
                  <li>熟悉各种前端工具gulp、webpack、less、sass，且有一定开发经验;</li>
                  <li>了解后台python,nodeJS基本语法，并可以开发简单的功能;</li>
                  <li>理解linux知识并使用过;</li>
                  <li>学习能力较强，接受新事物较快，能够迎接新的挑战，不断充实自己;</li>
                </ul>
                <h1>个人评价</h1>
                <ul>
                <li>本人性格开朗大方，待人热情真诚，在工作中能够很好的与同事沟通协调；</li>
                <li>为人诚信开朗，勤奋务实，工作积极、脚踏实地；既能够独立承担项目任务，又能够融入团队进行有效的协作沟通；</li>
                <li>在做事方面，因为本人是个急性子，不喜欢把简单事情复杂化，不喜欢拖沓，能够快速解决的事情，会强迫自己第一时间去完成且有效率的；</li>
                <li>在团队方面注重团队协作精神，注重团队沟通，敢于承担责任且能承受压力。</li>
                </ul>
                <h1>工作经历</h1>
                  <ul>
                   <li><a href="http://www.pconline.com.cn/" target="_blank" rel="external">[广州太平洋网络信息咨询有限公司]</a>（ 2014.11 ~ 2015.9 ）前端开发工程师</li>
                   <li><a href="http://www.sobey.com/" target="_blank" rel="external">[成都索贝数码科技股份有限公司]</a>（2015.9 ~ 2016.9 ） 前端开发工程师</li>
                   <li><a href="http://www.kf5.com/" target="_blank" rel="external">[成都逸创]</a>（2016年9月 ~ 至今 ） 前端开发工程师</li>
                  </ul>
              </div>
          </div>
          </div>
      </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  const {
    isFetching,
    items
  } = state || {
    isFetching: true,
    items: []
  };

  return {
    isFetching,
    items
  }
}

export default connect(mapStateToProps)(About);
