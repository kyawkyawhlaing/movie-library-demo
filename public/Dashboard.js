(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{132:function(t,e,a){"use strict";var n=a(63);a.n(n).a},133:function(t,e,a){(t.exports=a(4)(!1)).push([t.i,"a[data-v-94be7666]{cursor:pointer}",""])},165:function(t,e,a){"use strict";a.r(e);var n={methods:{logout:function(){var t=this;this.$store.dispatch("logout").then((function(){t.$router.push({name:"Home"})}))}}},r=(a(132),a(10)),o=a(12),l=a.n(o),s=a(313),i=a(86),c=a(282),u=a(314),d=a(311),f=a(283),g=a(21),p=a(309),v=a(310),b=a(312),h=a(42),y=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app-bar",{attrs:{app:"",color:"light-blue darken-1",flat:""}},[a("v-toolbar-title",[t._v("V-Catalogue")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-tabs",{staticClass:"ml-n9",attrs:{centered:"",color:"white"}},[a("v-tab",{staticClass:"font-weight-bold",attrs:{to:{name:"DashboardDataTable"}}},[t._v(" Dashboard ")]),t._v(" "),a("v-tab",{staticClass:"font-weight-bold",attrs:{to:{name:"InsertMovie"}}},[t._v(" Insert Data ")]),t._v(" "),a("v-tab",{staticClass:"font-weight-bold",on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v(" Logout ")])],1),t._v(" "),a("v-avatar",{staticClass:"hidden-sm-and-down",attrs:{color:"grey darken-1 shrink",size:"36"}},[a("img",{attrs:{src:"https://image.freepik.com/free-vector/boy-with-dog-cartoon-design_24640-46773.jpg",alt:"avatar"}})])],1),t._v(" "),a("v-main",{staticClass:"grey lighten-3 pt-3"},[a("h1",{staticClass:"ma-0"},[t._v("V-Catalogue")]),t._v(" "),a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12"}},[a("v-sheet",{attrs:{"min-height":"70vh",rounded:"lg"}},[a("router-view")],1)],1)],1)],1)],1)],1)}),[],!1,null,"94be7666",null);e.default=y.exports;l()(y,{VAppBar:s.a,VAvatar:i.a,VCol:c.a,VContainer:u.a,VMain:d.a,VRow:f.a,VSheet:g.a,VSpacer:p.a,VTab:v.a,VTabs:b.a,VToolbarTitle:h.a})},282:function(t,e,a){"use strict";a(76);var n=a(2),r=a.n(n),o=a(9),l=a(0);const s=["sm","md","lg","xl"],i=s.reduce((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t),{}),c=s.reduce((t,e)=>(t["offset"+Object(l.G)(e)]={type:[String,Number],default:null},t),{}),u=s.reduce((t,e)=>(t["order"+Object(l.G)(e)]={type:[String,Number],default:null},t),{}),d={col:Object.keys(i),offset:Object.keys(c),order:Object.keys(u)};function f(t,e,a){let n=t;if(null!=a&&!1!==a){if(e){n+="-"+e.replace(t,"")}return"col"!==t||""!==a&&!0!==a?(n+="-"+a,n.toLowerCase()):n.toLowerCase()}}const g=new Map;e.a=r.a.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...i,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:a,children:n,parent:r}){let l="";for(const t in e)l+=String(e[t]);let s=g.get(l);if(!s){let t;for(t in s=[],d)d[t].forEach(a=>{const n=e[a],r=f(t,a,n);r&&s.push(r)});const a=s.some(t=>t.startsWith("col-"));s.push({col:!a||!e.cols,["col-"+e.cols]:e.cols,["offset-"+e.offset]:e.offset,["order-"+e.order]:e.order,["align-self-"+e.alignSelf]:e.alignSelf}),g.set(l,s)}return t(e.tag,Object(o.a)(a,{class:s}),n)}})},283:function(t,e,a){"use strict";a(76);var n=a(2),r=a.n(n),o=a(9),l=a(0);const s=["sm","md","lg","xl"],i=["start","end","center"];function c(t,e){return s.reduce((a,n)=>(a[t+Object(l.G)(n)]=e(),a),{})}const u=t=>[...i,"baseline","stretch"].includes(t),d=c("align",()=>({type:String,default:null,validator:u})),f=t=>[...i,"space-between","space-around"].includes(t),g=c("justify",()=>({type:String,default:null,validator:f})),p=t=>[...i,"space-between","space-around","stretch"].includes(t),v=c("alignContent",()=>({type:String,default:null,validator:p})),b={align:Object.keys(d),justify:Object.keys(g),alignContent:Object.keys(v)},h={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,a){let n=h[t];if(null!=a){if(e){n+="-"+e.replace(t,"")}return n+="-"+a,n.toLowerCase()}}const m=new Map;e.a=r.a.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...d,justify:{type:String,default:null,validator:f},...g,alignContent:{type:String,default:null,validator:p},...v},render(t,{props:e,data:a,children:n}){let r="";for(const t in e)r+=String(e[t]);let l=m.get(r);if(!l){let t;for(t in l=[],b)b[t].forEach(a=>{const n=e[a],r=y(t,a,n);r&&l.push(r)});l.push({"no-gutters":e.noGutters,"row--dense":e.dense,["align-"+e.align]:e.align,["justify-"+e.justify]:e.justify,["align-content-"+e.alignContent]:e.alignContent}),m.set(r,l)}return t(e.tag,Object(o.a)(a,{staticClass:"row",class:l}),n)}})},63:function(t,e,a){var n=a(133);"string"==typeof n&&(n=[[t.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(5)(n,r);n.locals&&(t.exports=n.locals)}}]);