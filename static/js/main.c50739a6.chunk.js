(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),o=n(2),i=n(3),s=n(5),l=n(4),r=n(1),u=n.n(r),d=(n(12),n(0)),m=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={today:new Date,displayClock:!0,clockName:e.props.name},e.timerId=0,e.consoleTime=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("contextmenu",(function(e){e.preventDefault()})),this.timerId=window.setInterval((function(){e.setState({today:new Date})}),1e3),this.consoleTime=window.setInterval((function(){console.info(e.state.today)}),1e3),document.addEventListener("mousedown",(function(t){t.preventDefault(),2===t.button&&(e.setState({displayClock:!1}),!1===e.state.displayClock&&clearInterval(e.consoleTime)),0===t.button&&!1===e.state.displayClock&&(e.setState({displayClock:!0}),e.consoleTime=window.setInterval((function(){console.info(e.state.today)}),1e3))}))}},{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state,t=e.clockName,n=e.today;return this.state.displayClock&&Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:n.toUTCString().slice(-12,-4)})]})}}]),n}(r.Component);function v(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var p=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={clockName:"Clock-0"},e.nameChangeId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.nameChangeId=window.setInterval((function(){e.setState({clockName:v()})}),3300),document.addEventListener("contextmenu",(function(e){e.preventDefault()}))}},{key:"componentDidUpdate",value:function(e,t){console.debug(t.clockName,this.state.clockName)}},{key:"componentWillUnmount",value:function(){clearInterval(this.nameChangeId)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),Object(d.jsx)(m,{name:this.state.clockName})]})}}]),n}(u.a.Component);c.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c50739a6.chunk.js.map