(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{128:function(e,a,r){"use strict";var t=r(62);r.n(t).a},129:function(e,a,r){(e.exports=r(4)(!1)).push([e.i,".transparent[data-v-01fbcc32]{background:transparent}",""])},130:function(e,a,r){var t=r(131);"string"==typeof t&&(t=[[e.i,t,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(5)(t,n);t.locals&&(e.exports=t.locals)},131:function(e,a,r){(e.exports=r(4)(!1)).push([e.i,".v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip--active{color:inherit}.v-chip-group .v-chip--active.v-chip--no-color:after{opacity:.22}.v-chip-group .v-chip--active.v-chip--no-color:focus:after{opacity:.32}.v-chip-group .v-slide-group__content{padding:4px 0}.v-chip-group--column .v-slide-group__content{white-space:normal;flex-wrap:wrap;max-width:100%}",""])},162:function(e,a,r){"use strict";r.r(a);var t=r(65),n={data:function(){return{item:"",genres:[],color:t.a,movieId:this.$route.params.id,lazyloading:!0}},created:function(){this.movieDetail()},methods:{movieDetail:function(){var e=this,a=axios.get("/api/getAllmovies"),r=axios.get("/api/getAllmovies/".concat(this.movieId));axios.all([a,r]).then(axios.spread((function(){var a=arguments.length<=0?void 0:arguments[0],r=arguments.length<=1?void 0:arguments[1];a.data.movies.map((function(a){a.id==e.movieId&&(e.item=a),e.lazyloading=!1})),r.data.genres.map((function(a){return e.genres.push(a)}))}))).catch((function(e){return console.error(e)}))}}},i=(r(128),r(10)),o=r(12),l=r.n(o),d=r(77),s=r(25),c=r(74),v=(r(130),r(32)),p=r(7),g=r(1),k=Object(g.a)(v.a,p.a).extend({name:"v-chip-group",provide(){return{chipGroup:this}},props:{column:Boolean},computed:{classes(){return{...v.a.options.computed.classes.call(this),"v-chip-group":!0,"v-chip-group--column":this.column}}},watch:{column(e){e&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData(){return this.setTextColor(this.color,{...v.a.options.methods.genData.call(this)})}}}),u=r(282),h=r(314),m=r(83),y=r(69),b=r(82),_=r(283),w=r(21),f=r(295),x=r(309),C=Object(i.a)(n,(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",sm:"3",md:"4"}},[e.lazyloading?r("v-skeleton-loader",{attrs:{type:"image,list-item"}}):r("v-card",{attrs:{height:"auto",tile:"",hover:""}},[r("v-img",{key:e.item.id,attrs:{src:"../../storage/"+e.item.image,alt:e.item.movie,width:"300",height:"400",contain:""}}),e._v(" "),r("v-card-text",[r("p",{staticClass:"text--primary mb-0"},[r("span",{staticClass:"font-weight-bold black--text"},[e._v("Rating")]),e._v(" -\n            "+e._s(e.item.rating)+"\n          ")])])],1)],1),e._v(" "),r("v-col",{attrs:{sm:"9",md:"8"}},[e.lazyloading?r("v-skeleton-loader",{attrs:{type:"card-heading,article"}}):r("v-card",{attrs:{color:"light-blue darken-2 white--text",elevation:"20"}},[r("v-card-title",{staticClass:"display-3"},[e._v(" "+e._s(e.item.movie)+" ")]),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{staticClass:"white--text"},[r("v-row",{staticClass:"ml-2",attrs:{align:"center"}},[r("div",{staticClass:"font-weight-bold"},[e._v("\n              Release - "),r("span",[e._v(e._s(e.item.releaseDate))])]),e._v(" "),r("v-spacer"),e._v(" "),r("div",{staticClass:"mr-3 font-weight-bold"},[e._v("\n              Duration - "),r("span",{},[e._v(e._s(e.item.duration))])])],1),e._v(" "),r("br"),e._v(" "),r("v-chip-group",{attrs:{"active-class":"teal accent-4 white--text",column:""}},e._l(e.genres,(function(a){return r("v-chip",{key:a.id,staticClass:"white--text",attrs:{color:e.color[Math.floor(Math.random()*(e.color.length+1))]}},[e._v(e._s(a.genre))])})),1),e._v(" "),r("br"),r("br"),e._v(" "),r("div",[e._v("\n            "+e._s(e.item.summary)+"\n          ")])],1),e._v(" "),r("v-divider"),e._v(" "),r("v-card-text",{staticClass:"white--text"},[r("v-row",{attrs:{justify:"center"}},[r("div",{staticClass:"ml-3"},[e._v("Director")]),e._v(" "),r("v-spacer"),e._v(" "),r("div",{staticClass:"mr-3"},[e._v(e._s(e.item.director||e.N/e.A))])],1),e._v(" "),r("br"),e._v(" "),r("v-divider"),e._v(" "),r("br"),e._v(" "),r("v-row",{attrs:{justify:"center"}},[r("div",{staticClass:"ml-3"},[e._v("Starring")]),e._v(" "),r("v-spacer"),e._v(" "),r("div",{staticClass:"mx-3"},[e._v(e._s(e.item.cast))])],1)],1)],1)],1)],1),e._v(" "),r("v-card",{attrs:{flat:""}},[r("v-sheet",[r("h1",{staticClass:"text--secondary text-left display-2 mb-10"},[e._v("Teaser...")]),e._v(" "),e.lazyloading?r("v-skeleton-loader",{attrs:{type:"card-avatar"}}):r("v-responsive",{attrs:{"aspect-ratio":16/9}},[r("iframe",{attrs:{width:"100%",height:"500",src:"https://www.youtube.com/embed/"+e.item.link,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture",allowfullscreen:""}})])],1)],1)],1)}),[],!1,null,"01fbcc32",null);a.default=C.exports;l()(C,{VCard:d.a,VCardText:s.b,VCardTitle:s.c,VChip:c.a,VChipGroup:k,VCol:u.a,VContainer:h.a,VDivider:m.a,VImg:y.a,VResponsive:b.a,VRow:_.a,VSheet:w.a,VSkeletonLoader:f.a,VSpacer:x.a})},62:function(e,a,r){var t=r(129);"string"==typeof t&&(t=[[e.i,t,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};r(5)(t,n);t.locals&&(e.exports=t.locals)},65:function(e,a,r){"use strict";a.a=["red","red lighten-1","red darken-1","red darken-2","red darken-3","red darken-4","red darken-5","cyan","cyan lighten-1","cyan darken-1","cyan darken-2","cyan darken-3","cyan darken-4","cyan darken-5","pink","pink lighten-1","pink darken-1","pink darken-2","pink darken-3","pink darken-4","pink darken-5","yellow","yellow darken-1","yellow darken-2","yellow darken-3","yellow darken-4","yellow darken-5","purple","purple lighten-1","purple darken-1","purple darken-2","purple darken-3","purple darken-4","purple darken-5","indigo","indigo lighten-1","indigo darken-1","indigo darken-2","indigo darken-3","indigo darken-4","indigo darken-5","blue","blue lighten-1","blue darken-1","blue darken-2","blue darken-3","blue darken-4","blue darken-5","teal","teal lighten-1","teal darken-1","teal darken-2","teal darken-3","teal darken-4","teal darken-5","cyan","cyan lighten-1","cyan darken-1","cyan darken-2","cyan darken-3","cyan darken-4","cyan darken-5","green","green lighten-1","green darken-1","green darken-2","green darken-3","green darken-4","green darken-5","lime","lime lighten-1","lime darken-1","lime darken-2","lime darken-3","lime darken-4","lime darken-5","amber","amber lighten-1","amber darken-1","amber darken-2","amber darken-3","amber darken-4","amber darken-5","orange","orange lighten-1","orange darken-1","orange darken-2","orange darken-3","orange darken-4","orange darken-5","blue-grey","blue-grey lighten-1","blue-grey darken-1","blue-grey darken-2","blue-grey darken-3","blue-grey darken-4","blue-grey darken-5","brown","brown lighten-1","brown darken-1","brown darken-2","brown darken-3","brown darken-4","brown darken-5","grey","grey lighten-1","grey darken-1","grey darken-2","grey darken-3","grey darken-4","grey darken-5"]}}]);