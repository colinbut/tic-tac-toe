(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(8),l=a.n(s),c=(a(7),a(1)),i=a(2),u=a(4),o=a(3),m=a(5),d=a(9),h=function(e){return n.a.createElement("button",{className:"square",onClick:e.onClick},e.value)};function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(d.a)(t[a],3),n=r[0],s=r[1],l=r[2];if(e[n]&&e[n]===e[s]&&e[n]===e[l])return e[n]}return null}var b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e){var t=this.state.squares.slice();v(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({squares:t,xIsNext:!this.state.xIsNext}))}},{key:"renderSquare",value:function(e){var t=this;return n.a.createElement(h,{value:this.state.squares[e],onClick:function(){return t.handleClick(e)}})}},{key:"render",value:function(){var e,t=v(this.state.squares);return e=t?"Winner: "+t:"Next Player: "+(this.state.xIsNext?"X":"O"),n.a.createElement("div",{className:"board"},n.a.createElement("div",{className:"status"},e),n.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),n.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),n.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(r.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(r.Fragment,null,n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,"Tic Tac Toe")),n.a.createElement("div",{className:"game"},n.a.createElement("div",{className:"game-board"},n.a.createElement(b,null)),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",null,"[PlaceHolder]"),n.a.createElement("ol",null))),n.a.createElement("footer",{className:"footer"},n.a.createElement("h3",null,"by Colin But")))}}]),t}(n.a.Component);l.a.render(n.a.createElement(f,null),document.getElementById("root"))},7:function(e,t,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.063eac1f.chunk.js.map