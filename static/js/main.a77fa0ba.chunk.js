(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{125:function(t,e,n){"use strict";n.r(e);var i=n(2),c=n.n(i),l=n(49),s=n.n(l),o=(n(56),n(8)),a=n(9),r=n(11),d=n(10),u=n(1),h=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h1",{children:"TODO"})})}}]),n}(i.Component),p=n(29),j=n(51),b=n(12),m=(n(58),n(50)),O=n.n(m),f=n(27),x=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).handlesubmit=function(e){e.preventDefault(),""===t.state.inputitem?alert("field cant be empty"):(t.props.clickhandler({text:t.state.inputitem,completed:!1,id:O.a.generate()}),t.setState({inputitem:""}))},t.state={inputitem:""},t.inputhandler=t.inputhandler.bind(Object(b.a)(t)),t}return Object(a.a)(n,[{key:"inputhandler",value:function(t){this.setState({inputitem:t.target.value})}},{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:this.handlesubmit,style:{display:"flex",alignItems:"center",marginTop:"10px"},children:[Object(u.jsx)("input",{className:"inp",type:"text",value:this.state.inputitem,onChange:this.inputhandler,placeholder:"...todos"}),Object(u.jsx)("button",{className:"submit",type:"submit",onClick:this.handlesubmit,children:Object(u.jsx)(f.a,{className:"submitlogo",size:"17px",color:"white"})})]})})}}]),n}(i.Component),v=n(28),y=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"todo",style:{backgroundColor:this.props.item.completed?"black":"",color:this.props.item.completed?"white":""},children:[Object(u.jsx)("p",{style:{textDecorationLine:this.props.item.completed?"line-through":""},children:this.props.itemtext}),console.log(this.props.item.completed),Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{onClick:this.props.completehandler,children:Object(u.jsx)(v.b,{size:"17px",color:"black"})},this.props.itemskey),Object(u.jsx)("button",{onClick:this.props.deletehandler,children:Object(u.jsx)(v.a,{size:"17px",color:"black"})})]})]})}}]),n}(i.Component),k=function(t){Object(r.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={list:[],option:"All"},t.addtodo=t.addtodo.bind(Object(b.a)(t)),t.completehandler=t.completehandler.bind(Object(b.a)(t)),t.selecthandler=t.selecthandler.bind(Object(b.a)(t)),t}return Object(a.a)(n,[{key:"addtodo",value:function(t){this.setState({list:[].concat(Object(j.a)(this.state.list),[t])})}},{key:"completehandler",value:function(t){var e=this;this.setState((function(n){return{list:e.state.list.map((function(e){return t===e.id?Object(p.a)(Object(p.a)({},e),{},{completed:!n.completed}):e}))}}))}},{key:"deletehandler",value:function(t){this.setState({list:this.state.list.filter((function(e){return t===e.id?null:e}))})}},{key:"selecthandler",value:function(t){t.preventDefault(),this.setState({option:t.target.value})}},{key:"render",value:function(){var t=this,e=[];return"Completed"===this.state.option?(e=this.state.list.filter((function(t){return t.completed})),console.log(e)):e="Uncompleted"===this.state.option?this.state.list.filter((function(t){return!t.completed})):this.state.list,Object(u.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"},children:[Object(u.jsx)(x,{clickhandler:this.addtodo,inputhandler:this.inputhandler}),Object(u.jsxs)("select",{value:this.state.option,onChange:this.selecthandler,style:{height:"30px",textAlign:"center",border:"2px slid black"},children:[Object(u.jsx)("option",{children:"All"}),Object(u.jsx)("option",{children:"Completed"}),Object(u.jsx)("option",{children:"Uncompleted"})]}),e.map((function(e){return Object(u.jsx)(y,{item:e,itemtext:e.text,itemskey:e.key,completehandler:function(){return t.completehandler(e.id,Event)},uncompletehandler:function(){return t.uncompletehandler(e.id)},deletehandler:function(){return t.deletehandler(e.id)}},e.id)}))]})}}]),n}(i.Component);var g=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(h,{}),Object(u.jsx)(k,{})]})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,l=e.getLCP,s=e.getTTFB;n(t),i(t),c(t),l(t),s(t)}))};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root")),C()},56:function(t,e,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.a77fa0ba.chunk.js.map