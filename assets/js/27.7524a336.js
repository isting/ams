(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1071:function(e,t,i){"use strict";i.r(t);var o=i(126),a=(i(234),i(156),{scheduleBlock:{type:"calendar",ctx:"view",resource:{fields:{date:{type:"date",props:{"value-format":"yyyy-MM",type:"month"}}}},data:{searchs:{date:"2019-03"},year:2019,month:2,content:{}},options:{title:"日历看板",draggable:!0},searchs:{date:!0},on:{end:function(e){console.log("from:",e.from.dataset.date,e.from.dataset.time,e.oldIndex),console.log("to:",e.to.dataset.date,e.to.dataset.time,e.newIndex)},"cell-click":function(e,t,i,o){console.log("click",e,t,i,o)}},events:{init:"@fieldChange",getList:"@getList"},actions:{fieldChange:function(e){var t=e.name,i=e.value,o=this.block.data;t&&(o.searchs[t]=i),"date"===t&&(o.year=i.split("-")[0],o.month=i.split("-")[1]-1);this.callAction(this.block.events.getList,{})},getList:function(e){this.block.options.draggable?this.block.data.content={15519744e5:{10:[{html:"<div>数据1</div>",id:1},{html:"<div>数据2</div>",id:2}],20:[{html:"<div>数据3</div>",id:3}]},155232e7:{10:[{html:"<div>数据4</div>",id:4}],20:[{html:"<div>数据5</div>",id:5}]}}:this.block.data.content={15519744e5:{10:["<div>数据1</div>","<div>数据2</div>"],20:["<div>数据3</div>"]},155232e7:{10:["<div>数据4</div>"],20:["<div>数据5</div>"]}}}}}}),n=i(138),s=i.n(n),d=i(137),c=i.n(d),l={mixins:[o.a],mounted:function(){var e=s()(a[this.blockName]);this.configCode=c()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block(this.blockName,a[this.blockName]),this.init=!0)}},r=i(1),f=Object(r.a)(l,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{staticClass:"demo demo-card",attrs:{shadow:"hover"}},[e.init?i("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),i("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[i("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),i("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[i("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?i("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=f.exports},125:function(e,t,i){"use strict";var o=i(0),a=(i(131),i(130)),n=i.n(a),s=i(128),d=i(136),c=i(132),l=i.n(c),r=(i(133),i(134)),f=i.n(r),m=i(135),h=i.n(m);o.default.use(n.a),o.default.use(s.default),console.log("ams init config"),o.default.use(f.a),o.default.use(h.a),"undefined"!=typeof window&&(window.Vue=o.default),o.default.use(d.a,{languages:{javascript:l.a}}),s.default.config({resource:{api:{withCredentials:!1}}})},126:function(e,t,i){"use strict";i(125);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}}}]);