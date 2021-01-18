(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{167:function(e,r,a){"use strict";a.r(r);var n=a(65),t={data:function(){return{genres:null,releases:null,picker:null,menu:!1,message:null,error:null,colour:n.a,loader1:!1,form:{movie:"",image:null,rating:"",summary:"",duration:"",cast:"",releaseDate:"",genres:[]},rules:{required:function(e){return!!e||"required."},counter:function(e){return e.length<=100||"Max 100 characters."},string:function(e){return e.length<=255||"Must be String."},rating:function(e){return e.valueOf()<=10||"Highest rating value is 10"},duration:function(e){return/[0-9]{1||2}[a-zA-Z]{2}[0-9]{1||2}[a-zA-Z]{2}/g.test(e)},picture:function(e){return!e||e.size<2e6||"Avatar size should be less than 2 MB!"}}}},watch:{menu:function(e){var r=this;e&&setTimeout((function(){return r.$refs.picker.activePicker="YEAR"}))}},methods:{save:function(e){this.$refs.menu.save(e)},insertData:function(){var e=this;this.$refs.form.validate(),this.loader1=!0;var r=new FormData;r.append("movie",this.form.movie),r.append("file",this.form.image),r.append("director",this.form.director),r.append("link",this.form.link),r.append("rating",this.form.rating),r.append("summary",this.form.summary),r.append("duration",this.form.duration),r.append("cast",this.form.cast),r.append("releaseDate",this.form.releaseDate),r.append("genres",this.form.genres),this.$store.dispatch("insertData",r).then((function(r){var a=r.data;e.message=a.message,e.loader1=!1})).catch((function(){return e.error="Duplicated Error!"}))}},created:function(){var e=this;this.$store.dispatch("getMovieData").then((function(r){e.genres=r.data.genres,e.releases=r.data.releases}))}},l=a(10),o=a(12),i=a.n(o),s=a(285),d=a(59),u=a(299),c=a(282),m=a(314),k=a(297),f=a(296),v=a(284),g=a(89),p=a(283),h=a(16),b=a(286),y=Object(l.a)(t,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("v-form",{ref:"form",attrs:{id:"form",enctype:"multipart/form-data","lazy-validation":""}},[a("v-container",[a("v-row",[a("v-col",{attrs:{lg:"4"}},[a("v-text-field",{attrs:{label:"Movie",rules:[e.rules.required,e.rules.counter],"prepend-icon":"mdi-movie-roll","solo-inverted":""},model:{value:e.form.movie,callback:function(r){e.$set(e.form,"movie",r)},expression:"form.movie"}})],1),e._v(" "),a("v-col",[a("v-text-field",{attrs:{label:"Cast",rules:[e.rules.required,e.rules.string],"prepend-icon":"mdi-movie-open","solo-inverted":""},model:{value:e.form.cast,callback:function(r){e.$set(e.form,"cast",r)},expression:"form.cast"}})],1),e._v(" "),a("v-col",[a("v-text-field",{attrs:{label:"Duration",rules:[e.rules.required,e.rules.duration],"prepend-icon":"mdi-av-timer","solo-inverted":""},model:{value:e.form.duration,callback:function(r){e.$set(e.form,"duration",r)},expression:"form.duration"}})],1)],1),e._v(" "),a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"Rating",rules:[e.rules.required,e.rules.rating],"prepend-icon":"mdi-star","solo-inverted":""},model:{value:e.form.rating,callback:function(r){e.$set(e.form,"rating",r)},expression:"form.rating"}})],1),e._v(" "),a("v-col",[a("v-text-field",{attrs:{label:"Director",rules:[e.rules.required],"solo-inverted":""},model:{value:e.form.director,callback:function(r){e.$set(e.form,"director",r)},expression:"form.director"}})],1),e._v(" "),a("v-col",[a("v-text-field",{attrs:{label:"Link",rules:[e.rules.required],"solo-inverted":""},model:{value:e.form.link,callback:function(r){e.$set(e.form,"link",r)},expression:"form.link"}})],1),e._v(" "),a("v-col",[a("v-file-input",{attrs:{accept:"image/*","prepend-icon":"mdi-camera",rules:[e.rules.picture],"show-size":"","truncate-length":"10"},model:{value:e.form.image,callback:function(r){e.$set(e.form,"image",r)},expression:"form.image"}})],1)],1),e._v(" "),a("v-row",{staticClass:"ml-9"},e._l(e.genres,(function(r){return a("v-col",{key:r.id,attrs:{cols:"2"}},[a("v-checkbox",{key:r.id,attrs:{value:r.genre,color:e.colour[Math.floor(Math.random()*(e.colour.length+1))],label:r.genre},model:{value:e.form.genres,callback:function(r){e.$set(e.form,"genres",r)},expression:"form.genres"}})],1)})),1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-textarea",{attrs:{"background-color":"light-blue lighten-4","prepend-icon":"mdi-comment",rules:[e.rules.required],filled:""},model:{value:e.form.summary,callback:function(r){e.$set(e.form,"summary",r)},expression:"form.summary"}})],1),e._v(" "),a("v-col",{attrs:{cols:"5"}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"290px"},scopedSlots:e._u([{key:"activator",fn:function(r){var n=r.on,t=r.attrs;return[a("v-text-field",e._g(e._b({attrs:{rules:[e.rules.required],label:"Date",hint:"YYYY-MM-DD format","persistent-hint":"","prepend-icon":"mdi-calendar",autocomplete:"off"},model:{value:e.form.releaseDate,callback:function(r){e.$set(e.form,"releaseDate",r)},expression:"form.releaseDate"}},"v-text-field",t,!1),n))]}}]),model:{value:e.menu,callback:function(r){e.menu=r},expression:"menu"}},[e._v(" "),a("v-date-picker",{ref:"picker",attrs:{max:(new Date).toISOString().substr(0,10),"no-title":""},on:{change:e.save},model:{value:e.form.releaseDate,callback:function(r){e.$set(e.form,"releaseDate",r)},expression:"form.releaseDate"}})],1)],1)],1),e._v(" "),a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-btn",{staticClass:"blue--text ml-9",attrs:{color:"light-blue lighten-4",form:"form",loading:"loader1",depressed:""},on:{click:e.insertData}},[e._v("SUBMIT")])],1),e._v(" "),a("v-col",{attrs:{cols:"6"}},[a("v-alert",{directives:[{name:"show",rawName:"v-show",value:!!e.message,expression:"!!message"}],staticClass:"ml-9",attrs:{type:"success",dense:"",dismissible:""}},[e._v("\n          "+e._s(e.message)+"\n        ")]),e._v(" "),a("v-alert",{directives:[{name:"show",rawName:"v-show",value:!!e.error,expression:"!!error"}],staticClass:"ml-9",attrs:{type:"error",dense:"",dismissible:""}},[e._v("\n          "+e._s(e.error)+"\n        ")])],1)],1)],1)],1)}),[],!1,null,"61fdb3e2",null);r.default=y.exports;i()(y,{VAlert:s.a,VBtn:d.a,VCheckbox:u.a,VCol:c.a,VContainer:m.a,VDatePicker:k.a,VFileInput:f.a,VForm:v.a,VMenu:g.a,VRow:p.a,VTextField:h.a,VTextarea:b.a})},65:function(e,r,a){"use strict";r.a=["red","red lighten-1","red darken-1","red darken-2","red darken-3","red darken-4","red darken-5","cyan","cyan lighten-1","cyan darken-1","cyan darken-2","cyan darken-3","cyan darken-4","cyan darken-5","pink","pink lighten-1","pink darken-1","pink darken-2","pink darken-3","pink darken-4","pink darken-5","yellow","yellow darken-1","yellow darken-2","yellow darken-3","yellow darken-4","yellow darken-5","purple","purple lighten-1","purple darken-1","purple darken-2","purple darken-3","purple darken-4","purple darken-5","indigo","indigo lighten-1","indigo darken-1","indigo darken-2","indigo darken-3","indigo darken-4","indigo darken-5","blue","blue lighten-1","blue darken-1","blue darken-2","blue darken-3","blue darken-4","blue darken-5","teal","teal lighten-1","teal darken-1","teal darken-2","teal darken-3","teal darken-4","teal darken-5","cyan","cyan lighten-1","cyan darken-1","cyan darken-2","cyan darken-3","cyan darken-4","cyan darken-5","green","green lighten-1","green darken-1","green darken-2","green darken-3","green darken-4","green darken-5","lime","lime lighten-1","lime darken-1","lime darken-2","lime darken-3","lime darken-4","lime darken-5","amber","amber lighten-1","amber darken-1","amber darken-2","amber darken-3","amber darken-4","amber darken-5","orange","orange lighten-1","orange darken-1","orange darken-2","orange darken-3","orange darken-4","orange darken-5","blue-grey","blue-grey lighten-1","blue-grey darken-1","blue-grey darken-2","blue-grey darken-3","blue-grey darken-4","blue-grey darken-5","brown","brown lighten-1","brown darken-1","brown darken-2","brown darken-3","brown darken-4","brown darken-5","grey","grey lighten-1","grey darken-1","grey darken-2","grey darken-3","grey darken-4","grey darken-5"]}}]);