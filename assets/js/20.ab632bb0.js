(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{125:function(e,t,i){"use strict";var a=i(0),o=(i(131),i(130)),s=i.n(o),l=i(128),c=i.n(l),d=i(136),n=i(132),r=i.n(n),p=(i(133),i(134)),m=i.n(p),u=i(135),b=i.n(u);a.default.use(s.a),a.default.use(c.a),console.log("ams init config"),a.default.use(m.a),a.default.use(b.a),"undefined"!=typeof window&&(window.Vue=a.default),a.default.use(d.a,{languages:{javascript:r.a}}),c.a.config({resource:{api:{withCredentials:!1}}})},126:function(e,t,i){"use strict";i(125);t.a={data:function(){return{init:!1,showConfig:!1,configCode:"",codeBlock:{type:"form",data:{code:""},resource:{fields:{code:{type:"ams-code",labelWidth:"0"}}}}}},props:{blockName:String,onlineDemo:String},methods:{toggleDemoCofig:function(e){"el-link--inner"!==e.target.className&&(this.showConfig=!this.showConfig)}}}},150:function(e,t,i){"use strict";function a(e,t,i){var a='<!DOCTYPE html>\n<html>\n<head>\n    <meta charset="utf-8">\n    <title>首页</title>\n    <script src="https//h5rsc.vipstatic.com/ams/babel-polyfill/7.4.0/polyfill.min.js"><\/script>\n</head>\n<body>\n    <script>\n        var amsConfigJson = '.concat(i,';\n    <\/script>\n\n    <link rel="stylesheet" href="https://h5rsc.vipstatic.com/ams/element-ui@2.11.1/theme-chalk/index.css" />\n    <script src="https://h5rsc.vipstatic.com/ams/vue@2.6.10.js"><\/script>\n    <script src="https://h5rsc.vipstatic.com/ams/element-ui@2.11.1/index.js"><\/script>\n    <script src="https://unpkg.com/@ams-team/ams/lib/ams.js"><\/script>\n    <script id="ams-config" src="http://h5rsc.vipstatic.com/ams/ams-init@0.1.5.js"><\/script>\n</body>\n</html>');e.download=t,e.href="data:text/plain,".concat(a)}i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return o}));var o="https://www.yournana.club/vipshop/"},344:function(e,t,i){},943:function(e,t,i){"use strict";var a=i(344);i.n(a).a},967:function(e,t,i){"use strict";i.r(t);var a=i(126),o=i(150),s={demoResource:{resource:{api:{contentType:"form",prefix:"".concat(o.b,"ams-page-demo/"),read:"read",update:"update",list:"getList",delete:"delete",create:"create"},fields:{id:{type:"text",label:"id",ctx:"view"},title:{type:"text",label:"标题"},content:{type:"textarea",label:"内容"},create_time:{type:"datetime",label:"创建时间",ctx:"view"},update_time:{type:"datetime",label:"更新时间",ctx:"view"}}}},demoBlock1:{resources:{demoResource:{api:{contentType:"form",prefix:"".concat(o.b,"ams-page-demo/"),read:"read",update:"update",list:"getList",delete:"delete",create:"create"},fields:{id:{type:"text",label:"id",ctx:"view"},title:{type:"text",label:"标题"},content:{type:"textarea",label:"内容"},create_time:{type:"datetime",label:"创建时间",ctx:"view"},update_time:{type:"datetime",label:"更新时间",ctx:"view"}}}},blocks:{demoBlockList1:{pageSize:10,type:"list",ctx:"view",resource:"demoResource",events:{init:"@list"}}}},demoBlock2:{resources:{demoResource:{api:{contentType:"form",prefix:"".concat(o.b,"ams-page-demo/"),read:"read",update:"update",list:"getList",delete:"delete",create:"create"},fields:{id:{type:"text",label:"id",ctx:"view"},title:{type:"text",label:"标题"},content:{type:"textarea",label:"内容"},create_time:{type:"datetime",label:"创建时间",ctx:"view"},update_time:{type:"datetime",label:"更新时间",ctx:"view"}}}},blocks:{demoBlockList2:{pageSize:10,type:"list",ctx:"view",resource:"demoResource",events:{init:"@list",removeItem:"@confirm:确认删除吗? @deleteAction @delete init"},actions:{deleteAction:function(e){var t=e.id;console.log("删除id：",t)}},sorts:{id:!0},operations:{id:{slot:"searchs",type:"field",field:"id",label:"id"},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list"},removeItem:{type:"button",props:{type:"danger",icon:"el-icon-delete",circle:!0}}}}}},demoBlock3:{resources:{demoResource:{api:{contentType:"form",prefix:"".concat(o.b,"ams-page-demo/"),read:"read",update:"update",list:"getList",delete:"delete",create:"create"},fields:{id:{type:"text",label:"id",ctx:"view"},title:{type:"text",label:"标题"},content:{type:"textarea",label:"内容"},create_time:{type:"datetime",label:"创建时间",ctx:"view"},update_time:{type:"datetime",label:"更新时间",ctx:"view"}}}},style:{"z-index":2},blocks:{demoBlockList3:{pageSize:20,type:"list",ctx:"view",resource:"demoResource",events:{init:"@list",removeItem:"@confirm:确认删除吗? @deleteAction @delete init",editItem:"@adminEditDialog.show",addItem:"@adminAddDialog.show"},actions:{deleteAction:function(e){var t=e.id;console.log("删除id：",t)}},sorts:{id:!0},operations:{id:{slot:"searchs",type:"field",field:"id",label:"id"},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list"},addItem:{slot:"searchs",type:"button",label:"添加",props:{type:"primary"}},editItem:{type:"button",props:{type:"primary",icon:"el-icon-edit",circle:!0}},removeItem:{type:"button",props:{type:"danger",icon:"el-icon-delete",circle:!0}}}},adminEditDialog:{type:"dialog",data:{title:"编辑",visible:!1},events:{submit:"editDialogForm.submit"},style:{margin:"5% 5% 5% 15%"},actions:{},operations:{submit:{type:"button",label:"提交",props:{type:"primary"}},hide:{type:"button",label:"关闭"}},blocks:{editDialogForm:{type:"form",resource:"demoResource",ctx:"edit",events:{init:"@read",submit:"@validate @update adminListView.init @adminEditDialog.hide"}}}},adminAddDialog:{type:"dialog",data:{title:"添加",visible:!1},events:{submit:"addDialogForm.submit"},style:{margin:"5% 5% 5% 15%"},actions:{},operations:{submit:{type:"button",label:"提交",props:{type:"primary"}},hide:{type:"button",label:"关闭"}},blocks:{addDialogForm:{type:"form",fields:{id:!1,create_time:!1,update_time:!1},resource:"demoResource",ctx:"edit",events:{submit:"@validate @create adminListView.init @adminAddDialog.hide @clear"},actions:{clear:function(){this.data={}}}}}}}},demoBlock4:{resources:{demoResource:{api:{contentType:"form",prefix:"".concat(o.b,"ams-page-demo/"),read:"read",update:"update",list:"getList",delete:"delete",create:"create"},fields:{id:{type:"text",label:"id",ctx:"view"},title:{type:"text",label:"标题"},content:{type:"textarea",label:"内容"},create_time:{type:"datetime",label:"创建时间",ctx:"view"},update_time:{type:"datetime",label:"更新时间",ctx:"view"}}}},style:{"z-index":2},blocks:{demoBlockRouter:{type:"router",ctx:"view",router:{defaultBreadcrumb:!1,routes:[{path:"",name:"首页",meta:{hasMenu:!0,hidden:!1,noRedirect:!1},block:"demoBlockList4"}]},blocks:{demoBlockList4:{pageSize:20,type:"list",ctx:"view",resource:"demoResource",events:{init:"@list",removeItem:"@confirm:确认删除吗? @deleteAction @delete init",editItem:"@adminEditDialog.show",addItem:"@adminAddDialog.show"},actions:{deleteAction:function(e){var t=e.id;console.log("删除id：",t)}},sorts:{id:!0},operations:{id:{slot:"searchs",type:"field",field:"id",label:"id"},search:{slot:"searchs",type:"button",props:{type:"primary"},label:"搜索",event:"list"},addItem:{slot:"searchs",type:"button",label:"添加",props:{type:"primary"}},editItem:{type:"button",props:{type:"primary",icon:"el-icon-edit",circle:!0}},removeItem:{type:"button",props:{type:"danger",icon:"el-icon-delete",circle:!0}}}},adminEditDialog:{type:"dialog",data:{title:"编辑",visible:!1},events:{submit:"editDialogForm.submit"},style:{margin:"5% 5% 5% 15%"},actions:{},operations:{submit:{type:"button",label:"提交",props:{type:"primary"}},hide:{type:"button",label:"关闭"}},blocks:{editDialogForm:{type:"form",resource:"demoResource",ctx:"edit",events:{init:"@read",submit:"@validate @update adminListView.init @adminEditDialog.hide"}}}},adminAddDialog:{type:"dialog",data:{title:"添加",visible:!1},events:{submit:"addDialogForm.submit"},style:{margin:"5% 5% 5% 15%"},actions:{},operations:{submit:{type:"button",label:"提交",props:{type:"primary"}},hide:{type:"button",label:"关闭"}},blocks:{addDialogForm:{type:"form",fields:{id:!1,create_time:!1,update_time:!1},resource:"demoResource",ctx:"edit",events:{submit:"@validate @create adminListView.init @adminAddDialog.hide @clear"},actions:{clear:function(){this.data={}}}}}}}}}}},l=i(138),c=i.n(l),d=i(137),n=i.n(d),r={mixins:[a.a],mounted:function(){ams.resource("demoResource",s.demoResource),ams.block("".concat(this.blockName),s[this.blockName]);var e=c()(s[this.blockName]);this.configCode=n()(e,{indent_size:2,space_in_empty_paren:!0}),ams&&ams.blocks&&ams.blocks[this.blockName]?this.init=!0:(ams.block("".concat(this.blockName),s[this.blockName]),this.init=!0)}},p=(i(943),i(1)),m=Object(p.a)(r,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-card",{staticClass:"demo demo-card demo-spa",attrs:{shadow:"hover"}},[e.init?i("ams-block",{staticClass:"demo-card-preview",attrs:{name:e.blockName}}):e._e(),e._v(" "),i("div",{class:"demo-card-config "+(e.showConfig?"open":"")},[i("highlight-code",{attrs:{lang:"javascript"}},[e._v("\n            "+e._s(e.configCode)+"\n        ")])],1),e._v(" "),i("div",{staticClass:"demo-card-config-btn",on:{click:e.toggleDemoCofig}},[i("i",{class:"el-icon-caret-"+(e.showConfig?"top":"bottom")}),e._v("\n         "+e._s(e.showConfig?"隐藏":"显示")+"配置\n        "),e.onlineDemo?i("el-link",{attrs:{href:e.onlineDemo,target:"_blank",type:"success"}},[e._v("在线运行")]):e._e()],1)],1)}),[],!1,null,null,null);t.default=m.exports}}]);