(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"1b62":function(t,e,i){"use strict";i.d(e,"a",(function(){return b}));var s,a=i("ded3"),o=i.n(a),n=i("970b"),l=i.n(n),c=i("5bc3"),r=i.n(c),d=i("ed6d"),m=i.n(d),p=i("2d0d"),u=i.n(p),h=i("2b0e"),f=i("2fe1"),g=(i("f508"),i("cf57"),i("d9b2")),v=Object(f["b"])(s=function(t){m()(i,t);var e=u()(i);function i(){return l()(this,i),e.apply(this,arguments)}return r()(i,[{key:"confirm",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{message:"Would you like to remove.?",ok:"Yes, I'm sure",color:"primary",spinner:g["a"]};return this.$q.dialog(o()(o()({title:"Remove this Smartphoto?"},t),{},{cancel:!0,persistent:!1}))}}]),i}(h["a"]))||s,b=v},4155:function(t,e,i){},9261:function(t,e,i){"use strict";i.r(e);var s,a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"row"},[i("span",{staticClass:" text-grey-3 bg-pink-5 col-12 text-underline",class:t.$q.screen.lt.sm?"text-h5":"text-h3",staticStyle:{"text-align":"center"}},[t._v("IMAGE GALLERY")]),i("q-icon",{staticClass:"text-white",staticStyle:{position:"absolute",top:"50px",right:"20px","z-index":"300",opacity:"1"},attrs:{name:"fas fa-sign-out-alt",flat:"",size:t.$q.screen.lt.sm?"md":"xl",unelevated:""},on:{click:function(e){return t.$router.push("/")}}},[i("q-tooltip",{attrs:{"max-height":"30%","max-width":"25%"}},[i("div",{staticClass:"tooltip-content"},[t._v("\n          Sign Out\n        ")])])],1)],1),i("q-page-sticky",{style:t.$q.platform.is.mobile||t.$q.screen.lt.md?"z-index:200":"",attrs:{position:"bottom-right",offset:[25,25]}},[i("q-btn",{staticClass:"float-right q-ma-sm",attrs:{label:"Save and Continue",unelevated:"",dense:"",size:"lg",color:"pink-5","icon-right":"send",rounded:""},on:{click:function(e){return t.SaveData()}}})],1),t.showList?i("div",{staticClass:" row q-mt-none q-gutter-xl q-px-md ",style:t.$q.platform.is.desktop||t.$q.screen.gt.md?"":"margin-bottom:70px"},t._l(t.videolist,(function(e,s){return i("q-list",{key:s},["new"===e.id?i("q-item",{staticClass:"Itemclass",staticStyle:{background:"grey"}},[i("span",{staticClass:"text-bold"},[t._v("\n          "+t._s(s+1)+"\n        ")]),i("q-item-section",{staticClass:"q-mt-lg col-xs-10",staticStyle:{"max-width":"400px",height:"320px"},style:t.$q.platform.is.mobile||t.$q.screen.lt.md?"width:80vw":"width:40vw"},[i("q-btn",{attrs:{icon:"add_box",size:"xl",align:"center",label:"Add File",flat:"",color:"white",unelevated:""},on:{click:function(e){t.Uploadfile=!0}}})],1)],1):i("q-item",{staticClass:"Itemclass"},[i("span",{staticClass:"text-bold"},[t._v("\n          "+t._s(s+1)+"\n        ")]),i("q-btn",{staticClass:"deletebutton q-mb-lg",staticStyle:{color:"red"},attrs:{size:"md",flat:"",round:"",icon:"far fa-trash-alt"},on:{click:function(e){return t.deleteitem(s)}}},[i("q-tooltip",{attrs:{"max-height":"30%","max-width":"25%"}},[i("div",{staticClass:"tooltip-content"},[t._v("\n              Delete\n            ")])])],1),i("q-item-section",{staticClass:"q-mt-lg col-xs-10",staticStyle:{"max-width":"400px"},style:t.$q.platform.is.mobile||t.$q.screen.lt.md?"width:80vw":"width:40vw"},[i("q-video",{attrs:{ratio:16/9,src:e.url}}),i("div",{staticClass:"row q-mt-xs  q-gutter-sm"},t._l(e.frames,(function(a,o){return i("div",{key:o},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"q-pa-none",class:e.selectedframe===a.id?"activeimage":"notactiveimg",attrs:{clickable:"",active:e.selectedframe===a.id},on:{click:function(e){return t.setimage(a,s)}}},[i("q-item-section",{staticStyle:{"max-width":"85px"}},[i("q-img",{staticStyle:{"max-width":"70px"},style:t.$q.platform.is.mobile||t.$q.screen.lt.md?"height: 50px;width:13.5vw":"height: 70px;width:8vw",attrs:{src:a.url,"spinner-color":"white"}})],1)],1)],1)})),0)],1)],1)],1)})),1):t._e(),i("q-dialog",{attrs:{persistent:"",maximized:t.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.Uploadfile,callback:function(e){t.Uploadfile=e},expression:"Uploadfile"}},[i("q-card",{style:t.maximizedToggle?"":t.$q.platform.is.mobile||t.$q.screen.lt.md?"width:100vw ;max-width:500px; height:320px":"width: 600px; max-width: 80vw",attrs:{flat:""}},[i("q-bar",{staticClass:"bg-primary text-white"},[i("span",{staticClass:"text-subtitle2"},[t._v("Upload Files")]),i("q-space"),i("q-btn",{attrs:{dense:"",flat:"",icon:"fas fa-compress",disable:!t.maximizedToggle},on:{click:function(e){t.maximizedToggle=!1}}},[t.maximizedToggle?i("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Minimize")]):t._e()],1),i("q-btn",{attrs:{dense:"",flat:"",icon:"crop_square",disable:t.maximizedToggle},on:{click:function(e){t.maximizedToggle=!0}}},[t.maximizedToggle?t._e():i("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Maximize")])],1),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[i("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[t._v("Close")])],1)],1),i("q-card-section",[i("uploder")],1)],1)],1)],1)},n=[],l=(i("4160"),i("d81d"),i("a434"),i("d3b7"),i("e6cf"),i("159b"),i("970b")),c=i.n(l),r=i("5bc3"),d=i.n(r),m=i("ed6d"),p=i.n(m),u=i("2d0d"),h=i.n(u),f=i("ded3"),g=i.n(f),v=i("2ef0"),b=i.n(v),w=i("bc3a"),x=i.n(w),q=i("2b0e"),y=i("2fe1"),k=(i("1b40"),i("2f62")),$=i("1b62"),C=(i("f508"),i("cf57"),i("d9b2")),S=(s=Object(y["b"])({mixins:[$["a"]],methods:g()(g()({},Object(k["d"])("common",["toggleSpinner"])),Object(k["b"])("common",["updatePhotos"])),computed:g()({},Object(k["c"])("common",["getphotos"])),components:{uploder:function(){return Promise.all([i.e(0),i.e(7)]).then(i.bind(null,"3c08"))}}}),s(a=function(t){p()(i,t);var e=h()(i);function i(){return c()(this,i),e.apply(this,arguments)}return d()(i,[{key:"data",value:function(){return{videos:[],showList:!1,Uploadfile:!1,maximizedToggle:!1}}},{key:"beforeDestroy",value:function(){this.$q.loading.isActive&&this.$q.loading.hide()}},{key:"mounted",value:function(){var t=this;this.$q.loading.show({spinner:C["a"],message:'<b>Data</b> fetching is in progress.<br/><span class="text-primary">Hang on...</span>'}),x.a.get("http://www.mocky.io/v2/5ed5fda4340000740006d560?mocky-delay=500ms").then((function(e){var i=e.data;t.$q.loading.hide(),t.videos=b.a.cloneDeep(i),b.a.forEach(t.videos,(function(t){t["selectedframe"]=t.frames[0].id})),t.videos.length<5&&t.videos.push({id:"new"}),t.updatePhotos(b.a.cloneDeep(t.videos)),t.showList=!0})).catch((function(t){return console.log(t)}))}},{key:"setimage",value:function(t,e){this.showList=!1,this.$set(this.videos[e],"selectedframe",t.id),this.showList=!0}},{key:"deleteitem",value:function(t){var e=this;this.deleteitem;var i={message:"photos uploaded for this video will be deleted as well. Do you want to continue ?"};this.confirm(i).onOk((function(){e.showList=!1,e.videos.splice(t,1),e.updatePhotos(b.a.cloneDeep(e.videos)),e.showList=!0}))}},{key:"SaveData",value:function(){var t=b.a.cloneDeep(this.getphotos),e=b.a.map(t,(function(t){var e={id:t.id,frameId:t.selectedframe};return e})),i="http://www.mocky.io/v2/5ed609363400004d0006d602",s=this;console.log(this.$q),this.$q.loading.show({spinner:C["a"],message:'<b>Data</b> Data etting saved .<br/><span class="text-primary">Hang on...</span>'}),x()({method:"post",url:i,data:JSON.stringify(e)}).then((function(t){console.log(s),s.$q.loading.hide(),s.$q.notify({message:"Data Saved Sucessfully...",type:"positive"}),s.$router.push("/"),console.log(t)}),(function(t){console.log(t)}))}},{key:"videolist",get:function(){return this.videos.length<5&&this.videos.push({id:"new"}),this.videos}}]),i}(q["a"]))||a),_=S,z=_,D=(i("b978"),i("2877")),Q=i("0016"),L=i("05c0"),T=i("de5e"),I=i("9c40"),O=i("1c1c"),j=i("66e5"),P=i("4074"),U=i("6ac0"),A=i("068f"),E=i("24e8"),J=i("f09f"),M=i("d847"),N=i("2c91"),R=i("a370"),B=i("714f"),F=i("7f67"),G=i("eebe"),H=i.n(G),Y=Object(D["a"])(z,o,n,!1,null,"230c4a49",null);e["default"]=Y.exports;H()(Y,"components",{QIcon:Q["a"],QTooltip:L["a"],QPageSticky:T["a"],QBtn:I["a"],QList:O["a"],QItem:j["a"],QItemSection:P["a"],QVideo:U["a"],QImg:A["a"],QDialog:E["a"],QCard:J["a"],QBar:M["a"],QSpace:N["a"],QCardSection:R["a"]}),H()(Y,"directives",{Ripple:B["a"],ClosePopup:F["a"]})},b978:function(t,e,i){"use strict";i("4155")}}]);