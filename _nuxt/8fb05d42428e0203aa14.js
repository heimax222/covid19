(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{465:function(t,e,n){"use strict";var r=n(19),o=n(23),l=n(26),d=n(27),c=n(22),_=n(69),f=n(474),v=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(c.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},w=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(o.a)(this,Object(l.a)(e).apply(this,arguments))).formattedDate=Object(f.b)(t.date),t}return Object(d.a)(e,t),e}(_.c);v([Object(_.b)()],w.prototype,"title",void 0),v([Object(_.b)()],w.prototype,"titleId",void 0),v([Object(_.b)()],w.prototype,"date",void 0),v([Object(_.b)()],w.prototype,"url",void 0),v([Object(_.b)()],w.prototype,"info",void 0);var y=w=v([_.a],w),x=(n(514),n(21)),h=n(47),m=n.n(h),F=n(452),D=n(450),z=n(596),$=n(140),k=n(459),C=n(595),component=Object(x.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView pa-1"},[n("v-toolbar",{staticClass:"DataView-content",attrs:{flat:""}},[n("div",{staticClass:"DataView-TitleContainer"},[n("h3",{staticClass:"DataView-ToolbarTitle",attrs:{id:t.titleId}},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t._t("button")],2),t._v(" "),n("v-spacer"),t._v(" "),t._t("infoPanel")],2),t._v(" "),n("v-card-text",{class:t.$vuetify.breakpoint.xs?"DataView-CardTextForXS":"DataView-CardText"},[t._t("default")],2),t._v(" "),n("v-footer",{staticClass:"DataView-Footer"},[n("time",{attrs:{datetime:t.formattedDate}},[t._v(t._s(t.date)+" 更新")]),t._v(" "),t.url?n("a",{staticClass:"OpenDataLink",attrs:{href:t.url,target:"_blank",rel:"noopener"}},[t._v("\n      発生状況について\n      "),n("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:"15"}},[t._v("\n        mdi-open-in-new\n      ")])],1):t._e()])],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{VCard:F.a,VCardText:D.a,VFooter:z.a,VIcon:$.a,VSpacer:k.a,VToolbar:C.a})},474:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return d}));var r=n(24),o=n.n(r),l=function(t){return o()(t).format("YYYY-MM-DDTHH:mm:ss")},d=function(t){return o()(t).format("YYYY-MM-DD")}},475:function(t,e,n){var content=n(515);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("29fc5700",content,!0,{sourceMap:!1})},476:function(t,e,n){var content=n(525);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("c2d2a004",content,!0,{sourceMap:!1})},477:function(t,e,n){var content=n(527);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2ab77e14",content,!0,{sourceMap:!1})},478:function(t,e,n){var content=n(529);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("bb12c344",content,!0,{sourceMap:!1})},479:function(t,e,n){var content=n(531);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("96e5f060",content,!0,{sourceMap:!1})},480:function(t,e,n){var content=n(533);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("585d0d1e",content,!0,{sourceMap:!1})},487:function(t,e,n){"use strict";var r=n(19),o=n(23),l=n(26),d=n(27),c=n(22),_=n(69),f=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(c.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},v=function(t){function e(){return Object(r.a)(this,e),Object(o.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),e}(_.c);f([Object(_.b)()],v.prototype,"lText",void 0),f([Object(_.b)()],v.prototype,"sText",void 0),f([Object(_.b)()],v.prototype,"unit",void 0);var w=v=f([_.a],v),y=(n(530),n(21)),component=Object(y.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataInfo"},[n("span",{staticClass:"DataView-DataInfo-summary"},[t._v("\n    "+t._s(t.lText)+"\n    "),n("small",{staticClass:"DataView-DataInfo-summary-unit"},[t._v(t._s(t.unit))])]),t._v(" "),n("br"),t._v(" "),n("small",{staticClass:"DataView-DataInfo-date"},[t._v(t._s(t.sText))])])}),[],!1,null,null,null);e.a=component.exports},488:function(t){t.exports=JSON.parse('{"attr":"検査実施人数","value":0,"children":[{"attr":"陽性患者数","value":29,"children":[{"attr":"入院患者数","value":15,"children":[{"attr":"症状のない方","value":2},{"attr":"症状のある方","value":13}]},{"attr":"退院した方","value":14},{"attr":"亡くなられた方","value":0}]}],"last_update":"2020/04/04 20:00"}')},490:function(t){t.exports=JSON.parse('{"data":{"入院患者数":15,"残り病床数":9},"last_update":"2020/04/04 00:00"}')},492:function(t,e,n){"use strict";var r=n(488),o=n(1),l=n(465),d=n(494),c=o.a.extend({components:{DataView:l.a,OpenDataLink:d.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},url:{type:String,required:!1,default:""}}}),_=n(526),f=n(21);var v=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("p",{class:t.$style.note},[t._v("\n      "+t._s(t.$t("（注）奈良県発表資料と同じく陽性者数に県外のクルーズ船乗客を含んでいます"))+"\n    ")])]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}])},[t._v(" "),t._t("default")],2)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null).exports,w=(n(67),n(68),n(6),n(36),o.a.extend({props:{"検査実施人数":{type:Number,required:!0},"陽性者数":{type:Number,required:!0},"入院患者数":{type:Number,required:!0},"症状のない方":{type:Number,required:!0},"症状のある方":{type:Number,required:!0},"亡くなられた方":{type:Number,required:!0},"退院した方":{type:Number,required:!0}},methods:{getAdjustX:function(input){switch(input.toString(10).length){case 1:return 3;case 2:return 0;case 3:return-3;case 4:return-8;default:return 0}}}})),y=n(528);var x={components:{ConfirmedCasesCard:v,ConfirmedCasesTable:Object(f.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.tall,t.$style.tested]},[n("div",{class:[t.$style.pillar_tested]},[n("div",{class:t.$style.content},[n("span",[t._v("\n          "+t._s(t.$t("入院者数"))+"\n          "),n("br"),t._v("("+t._s(t.$t("累計"))+")\n        ")]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.陽性者数))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.tall,t.$style.parent,t.$style.confirmed]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院者数"))),n("br"),t._v("("+t._s(t.$t("現在"))+")")]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.入院患者数))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box,t.$style.hospitalized]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",{domProps:{innerHTML:t._s(t.$t("症状の<br />ある方"))}}),t._v(" "),n("span",[n("strong",[t._v(t._s(t.症状のある方))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.minor]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",{domProps:{innerHTML:t._s(t.$t("症状の<br />ない方"))}}),t._v(" "),n("span",[n("strong",[t._v(t._s(t.症状のない方))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.tall,t.$style.deceased]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",{domProps:{innerHTML:t._s(t.$t("亡くな<br />られた方"))}}),t._v(" "),n("span",[n("strong",[t._v(t._s(t.亡くなられた方))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),n("li",{class:[t.$style.box,t.$style.tall,t.$style.recovered]},[n("div",{class:t.$style.pillar},[n("div",{class:t.$style.content},[n("span",{domProps:{innerHTML:t._s(t.$t("退院<br />した方"))}}),t._v(" "),n("span",[n("strong",[t._v(t._s(t.退院した方))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])}),[],!1,(function(t){this.$style=y.default.locals||y.default}),null,null).exports},data:function(){var t=function(data){return{"検査実施人数":data.value,"陽性者数":data.children[0].value,"入院患者数":data.children[0].children[0].value,"症状のある方":data.children[0].children[0].children[1].value,"症状のない方":data.children[0].children[0].children[0].value,"亡くなられた方":data.children[0].children[2].value,"退院した方":data.children[0].children[1].value}}(r),data={mainSummary:r,confirmedCases:t};return data}},h=n(47),m=n.n(h),F=n(457),D=Object(f.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("confirmed-cases-card",{attrs:{title:this.$t("入院患者数の状況"),"title-id":"details-of-confirmed-cases",date:this.mainSummary.last_update,url:"http://www.pref.nara.jp/"}},[e("confirmed-cases-table",this._b({attrs:{"aria-label":this.$t("入院患者数の状況")}},"confirmed-cases-table",this.confirmedCases,!1))],1)],1)}),[],!1,null,null,null);e.a=D.exports;m()(D,{VCol:F.a})},493:function(t,e,n){"use strict";var r=n(490),o=n(3),l=n(150),d=n(1),c=n(465),_=n(487),f=["#01A0C7","#979797"],v=n(494),w={created:function(){this.canvas=!0},components:{DataView:c.a,DataViewBasicInfoPanel:_.a,OpenDataLink:v.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartId:{type:String,default:"pie-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},unit:{type:String,default:""},info:{type:String,default:""},url:{type:String,required:!1,default:""}},data:function(){return{dataKind:"transition",canvas:!0}},computed:{displayInfo:function(){return{lText:this.chartData[this.chartData.length-1].cumulative.toLocaleString(),sText:this.info,unit:this.unit}},displayData:function(){return{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.chartData.map((function(t){return t.label})),data:this.chartData.map((function(t){return t.transition})),backgroundColor:this.chartData.map((function(t,e){return f[e]})),borderWidth:0}]}},displayOption:function(){var t=this.unit,e=this.chartData,n={tooltips:{displayColors:!1,callbacks:{label:function(n){return"".concat(e[n.index].transition," ").concat(1===n.index?t:"人"," (総病床数: ").concat(e[0].transition+e[1].transition).concat(t,")")},title:function(t,data){return data.labels[t[0].index]}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!0,onHover:function(t){t.currentTarget.style.cursor="pointer"},onLeave:function(t){t.currentTarget.style.cursor="default"}}};return"true"===this.$route.query.ogp&&Object.assign(n,{animation:{duration:0}}),n},tableHeaders:function(){return[{text:"",value:"text"}].concat(Object(l.a)(this.chartData.map((function(t,e){return{text:t.label,value:String(e)}}))))},tableData:function(){var t=this;return this.chartData.map((function(e,i){return Object.assign({text:t.chartData[i].label},Object(o.a)({},i,t.chartData[i].transition))}))}}},y=d.a.extend(w),x=n(532),h=n(21),m=n(47),F=n.n(m),D=n(586);var component=Object(h.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,url:t.url},scopedSlots:t._u([{key:"button",fn:function(){return[n("ul",{class:t.$style.GraphDesc},[n("i18n",{attrs:{tag:"li",path:"（注）病床数は{data}の第一・二種感染症病床の合計"}},[n("a",{class:t.$style.GraphLink,attrs:{href:"https://www.mhlw.go.jp/bunya/kenkou/kekkaku-kansenshou15/02-02.html",target:"_blank",rel:"noopener",place:"data"}},[t._v("\n          "+t._s(t.$t("感染症指定医療機関"))+"\n        ")])])],1)]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}])},[t._v(" "),n("pie-chart",{style:{display:t.canvas?"block":"none"},attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,height:240}}),t._v(" "),n("v-data-table",{staticClass:"cardTable",style:{top:"-9999px",position:t.canvas?"fixed":"static"},attrs:{headers:t.tableHeaders,items:t.tableData,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0,"item-key":"name"}})],1)}),[],!1,(function(t){this.$style=x.default.locals||x.default}),null,null),z=component.exports;F()(component,{VDataTable:D.a});n(7),n(6),n(8);var $={components:{CircleChart:z},data:function(){var t=function(data){var t=[],e=Object.keys(data),n=0;return e.forEach((function(e){n+=data[e],t.push({label:e,transition:data[e],cumulative:n})})),t}(r.data),data={sickbedsSummary:r,sickbedsGraph:t};return data}},k=n(457),C=Object(h.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("circle-chart",{attrs:{title:this.$t("入院患者数と残り病床数"),"title-id":"patients-and-sickbeds","chart-data":this.sickbedsGraph,date:this.sickbedsSummary.last_update,unit:this.$t("床"),info:this.$t("総病床数"),url:"http://www.pref.nara.jp/"}})],1)}),[],!1,null,null,null);e.a=C.exports;F()(C,{VCol:k.a})},494:function(t,e,n){"use strict";var r=n(1).a.extend({props:{url:{type:String,default:""}}}),o=(n(524),n(21)),l=n(47),d=n.n(l),c=n(140),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n  "+t._s(t.$t("出典:"))+"\n  "),n("a",{staticClass:"OpenDataLink",attrs:{href:t.url,target:"_blank",rel:"noopener"}},[t._v("\n    "+t._s(t.$t("京都府公式HP"))+"\n    "),n("v-icon",{staticClass:"ExternalLinkIcon",attrs:{size:"15","aria-label":this.$t("別タブで開く"),role:"img","aria-hidden":!1}},[t._v("\n      mdi-open-in-new\n    ")])],1)])}),[],!1,null,null,null);e.a=component.exports;d()(component,{VIcon:c.a})},514:function(t,e,n){"use strict";var r=n(475);n.n(r).a},515:function(t,e,n){(e=n(12)(!1)).push([t.i,".DataView-DataInfo-summary{color:#4d4d4d;font-family:Hiragino Sans;font-style:normal;font-size:30px;line-height:30px;white-space:nowrap}.DataView-DataInfo-summary-unit{font-size:.6em;width:100%}.DataView-DataInfo-date{font-size:12px;line-height:12px;color:gray;width:100%;display:inline-block}.DataView{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;height:100%}.DataView-content{height:auto !important}.DataView-content .v-toolbar__content{align-items:start}.DataView-TitleContainer{padding:14px 0 8px;color:#4d4d4d}.DataView-ToolbarTitle{font-size:1.25rem;font-weight:normal;line-height:1.5}.DataView-CardText{margin-bottom:46px;margin-top:35px}.DataView-CardTextForXS{margin-bottom:46px;margin-top:70px}.DataView-Footer{background-color:#fff !important;margin:2px 4px 12px;font-size:12px;font-size:0.75rem;color:gray !important;justify-content:space-between;flex-direction:row-reverse}.DataView-Footer .OpenDataLink{text-decoration:none}.DataView-Footer .OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}.v-toolbar__content{height:auto !important}",""]),t.exports=e},524:function(t,e,n){"use strict";var r=n(476);n.n(r).a},525:function(t,e,n){(e=n(12)(!1)).push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},526:function(t,e,n){"use strict";var r=n(477),o=n.n(r);e.default=o.a},527:function(t,e,n){(e=n(12)(!1)).push([t.i,".note_3ycFr{margin-top:10px;margin-bottom:0;font-size:12px;color:gray}",""]),e.locals={note:"note_3ycFr"},t.exports=e},528:function(t,e,n){"use strict";var r=n(478),o=n.n(r);e.default=o.a},529:function(t,e,n){(e=n(12)(!1)).push([t.i,'.container_37WEO{width:100%;display:flex;justify-content:center;box-sizing:border-box;color:#85005d;line-height:1.35;padding-left:0 !important}.container_37WEO *{box-sizing:border-box}.container_37WEO ul{padding-left:0}.pillar_F62Yl{display:flex;flex-direction:column;justify-content:flex-end;flex:0 0 auto;text-align:center;width:100%;border:3px solid #85005d}.pillar_tested_2wrxw{display:flex;flex-direction:column;justify-content:flex-end;flex:0 0 auto;text-align:center;width:100%;border:3px solid #333}.group_1ksdS{display:flex;flex:0 0 auto;padding-left:0;padding-top:3px;border-top:3px solid #85005d;border-left:3px solid #85005d}.box_2dey9{display:flex}.box_2dey9.parent_23pyN{border-top:3px solid #85005d;border-left:3px solid #85005d;position:relative;padding-top:29px}.box_2dey9.parent_23pyN::after{content:"";display:block;position:absolute;top:-1px;right:0;height:30px;border-left:3px solid #85005d}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-29px;border-top:none;border-right:none;border-left:none}.box_2dey9.tested_232AL{display:flex;flex:0 0 auto;width:calc((100% - 3px * 3) / 6);color:#333}.box_2dey9.confirmed_P-yFc{margin-left:3px;width:100%}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc((100% + 3px * 2) / 3 - 3px * 3)}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc((100% + 3px * 2) / 3 * 2 + 3px)}.box_2dey9.hospitalized_3w7PT,.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:3px;width:calc(100% / 2 - 3px)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:3px;width:calc(100% / 3 - 3px);color:#333}.content_1gFZ-{min-height:150px;padding:10px 2px;display:flex;flex-direction:column;justify-content:flex-end;align-items:center}.content_1gFZ->span{display:block;font-size:16px;font-size:1rem}.content_1gFZ->span:last-child{margin-top:.1em}.content_1gFZ->span:not(:last-child){word-break:break-all}.content_1gFZ- span strong{font-size:18px;font-size:1.125rem}.content_1gFZ- span.unit_25C4Z{font-size:16px;font-size:1rem}@media screen and (max-width: 1440px){.pillar_F62Yl,.pillar_tested_2wrxw{border-width:.209vw}.group_1ksdS{padding-top:.209vw;border-top-width:.209vw;border-left-width:.209vw}.content_1gFZ->span{font-size:15px;font-size:0.9375rem}.content_1gFZ- span strong{font-size:17px;font-size:1.0625rem}.content_1gFZ- span.unit_25C4Z{font-size:15px;font-size:0.9375rem}.box_2dey9.parent_23pyN{border-top-width:.209vw;border-left-width:.209vw;padding-top:2.013vw}.box_2dey9.parent_23pyN::after{height:2.223vw;border-left-width:.209vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-2.013vw}.box_2dey9.tested_232AL{width:calc((100% - 0.209vw * 3) / 6)}.box_2dey9.confirmed_P-yFc{margin-left:.209vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.209vw * 2) / 3 - 0.209vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.209vw * 2) / 3 * 2 + 0.209vw )}.box_2dey9.hospitalized_3w7PT,.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.209vw;width:calc(100% / 2 - 0.209vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.209vw;width:calc(100% / 3 - 0.209vw)}}@media screen and (max-width: 1263px){.pillar_F62Yl,.pillar_tested_2wrxw{border-width:.159vw}.group_1ksdS{padding-top:.159vw;border-top-width:.159vw;border-left-width:.159vw}.content_1gFZ->span{font-size:13px;font-size:0.8125rem}.content_1gFZ- span strong{font-size:15px;font-size:0.9375rem}.content_1gFZ- span.unit_25C4Z{font-size:13px;font-size:0.8125rem}.box_2dey9.parent_23pyN{border-top-width:.159vw;border-left-width:.159vw;padding-top:1.583vw}.box_2dey9.parent_23pyN::after{height:1.742vw;border-left-width:.159vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-1.583vw}.box_2dey9.tested_232AL{width:calc((100% - 0.159vw * 3) / 6)}.box_2dey9.confirmed_P-yFc{margin-left:.159vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.159vw * 2) / 3 - 0.159vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.159vw * 2) / 3 * 2 + 0.159vw )}.box_2dey9.hospitalized_3w7PT,.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.159vw;width:calc(100% / 2 - 0.159vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.159vw;width:calc(100% / 3 - 0.159vw)}}@media screen and (max-width: 1170px){.pillar_F62Yl,.pillar_tested_2wrxw{border-width:.171vw}.group_1ksdS{padding-top:.171vw;border-top-width:.171vw;border-left-width:.171vw}.content_1gFZ->span{font-size:13px;font-size:0.8125rem}.content_1gFZ- span strong{font-size:15px;font-size:0.9375rem}.content_1gFZ- span.unit_25C4Z{font-size:13px;font-size:0.8125rem}.box_2dey9.parent_23pyN{border-top-width:.171vw;border-left-width:.171vw;padding-top:1.71vw}.box_2dey9.parent_23pyN::after{height:1.881vw;border-left-width:.171vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-1.709vw}.box_2dey9.tested_232AL{width:calc((100% - 0.171vw * 3) / 6)}.box_2dey9.confirmed_P-yFc{margin-left:.171vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.171vw * 2) / 3 - 0.171vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.171vw * 2) / 3 * 2 + 0.171vw )}.box_2dey9.hospitalized_3w7PT,.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.171vw;width:calc(100% / 2 - 0.171vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.171vw;width:calc(100% / 3 - 0.171vw)}}@media screen and (max-width: 959px){.pillar_F62Yl,.pillar_tested_2wrxw{border-width:.417vw}.group_1ksdS{padding-top:.417vw;border-top-width:.417vw;border-left-width:.417vw}.content_1gFZ->span{font-size:14px;font-size:0.875rem}.content_1gFZ- span strong{font-size:16px;font-size:1rem}.content_1gFZ- span.unit_25C4Z{font-size:14px;font-size:0.875rem}.box_2dey9.parent_23pyN{border-top-width:.417vw;border-left-width:.417vw;padding-top:3.333vw}.box_2dey9.parent_23pyN::after{height:3.75vw;border-left-width:.417vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-3.333vw}.box_2dey9.tested_232AL{width:calc((100% - 0.417vw * 3) / 6)}.box_2dey9.confirmed_P-yFc{margin-left:.417vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.417vw * 2) / 3 - 0.417vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.417vw * 2) / 3 * 2 + 0.417vw )}.box_2dey9.hospitalized_3w7PT,.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.417vw;width:calc(100% / 2 - 0.417vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.417vw;width:calc(100% / 3 - 0.417vw)}}@media screen and (max-width: 767px){.pillar_F62Yl,.pillar_tested_2wrxw{border-width:.313vw}.group_1ksdS{padding-top:.313vw;border-top-width:.313vw;border-left-width:.313vw}.content_1gFZ->span{font-size:14px;font-size:0.875rem}.content_1gFZ- span strong{font-size:16px;font-size:1rem}.content_1gFZ- span.unit_25C4Z{font-size:14px;font-size:0.875rem}.box_2dey9.parent_23pyN{border-top-width:.313vw;border-left-width:.313vw;padding-top:3.541vw}.box_2dey9.parent_23pyN::after{height:3.855vw;border-left-width:.313vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-3.541vw}.box_2dey9.tested_232AL{width:calc((100% - 0.313vw * 3) / 6)}.box_2dey9.confirmed_P-yFc{margin-left:.313vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.313vw * 2) / 3 - 0.313vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.313vw * 2) / 3 * 2 + 0.313vw )}.box_2dey9.hospitalized_3w7PT,.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.313vw;width:calc(100% / 2 - 0.313vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.313vw;width:calc(100% / 3 - 0.313vw)}}@media screen and (max-width: 600px){.pillar_F62Yl,.pillar_tested_2wrxw{border-width:.5vw}.group_1ksdS{padding-top:.5vw;border-top-width:.5vw;border-left-width:.5vw}.content_1gFZ->span{font-size:14px;font-size:0.875rem}.content_1gFZ- span strong{font-size:16px;font-size:1rem}.content_1gFZ- span.unit_25C4Z{font-size:14px;font-size:0.875rem}.box_2dey9.parent_23pyN{border-top-width:.5vw;border-left-width:.5vw;padding-top:4.834vw}.box_2dey9.parent_23pyN::after{height:5.334vw;border-left-width:.5vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-4.833vw}.box_2dey9.tested_232AL{width:calc((100% - 0.5vw * 3) / 6)}.box_2dey9.confirmed_P-yFc{margin-left:.5vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.5vw * 2) / 3 - 0.5vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.5vw * 2) / 3 * 2 + 0.5vw )}.box_2dey9.hospitalized_3w7PT,.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.5vw;width:calc(100% / 2 - 0.5vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.5vw;width:calc(100% / 3 - 0.5vw)}}@media screen and (max-width: 420px){.pillar_F62Yl,.pillar_tested_2wrxw{border-width:.334vw}.group_1ksdS{padding-top:.334vw;border-top-width:.334vw;border-left-width:.334vw}.content_1gFZ->span{font-size:12px;font-size:0.75rem}.content_1gFZ- span strong{font-size:14px;font-size:0.875rem}.content_1gFZ- span.unit_25C4Z{font-size:12px;font-size:0.75rem}.box_2dey9.parent_23pyN{border-top-width:.334vw;border-left-width:.334vw;padding-top:5.166vw}.box_2dey9.parent_23pyN::after{height:5.5vw;border-left-width:.334vw}.box_2dey9.parent_23pyN>.pillar_F62Yl{margin-top:-5.166vw}.box_2dey9.tested_232AL{width:calc((100% - 0.334vw * 3) / 6)}.box_2dey9.confirmed_P-yFc{margin-left:.334vw}.box_2dey9.confirmed_P-yFc>.pillar_F62Yl{width:calc( (100% + 0.334vw * 2) / 3 - 0.334vw * 3 )}.box_2dey9.confirmed_P-yFc>.group_1ksdS{width:calc( (100% + 0.334vw * 2) / 3 * 2 + 0.334vw )}.box_2dey9.hospitalized_3w7PT,.box_2dey9.minor_1RUXC,.box_2dey9.severe_2vs8y{margin-left:.334vw;width:calc(100% / 2 - 0.334vw)}.box_2dey9.deceased_3u1su,.box_2dey9.recovered_JzYjB{margin-left:.334vw;width:calc(100% / 3 - 0.334vw)}}',""]),e.locals={container:"container_37WEO",pillar:"pillar_F62Yl",pillar_tested:"pillar_tested_2wrxw",group:"group_1ksdS",box:"box_2dey9",parent:"parent_23pyN",tested:"tested_232AL",confirmed:"confirmed_P-yFc",hospitalized:"hospitalized_3w7PT",minor:"minor_1RUXC",severe:"severe_2vs8y",deceased:"deceased_3u1su",recovered:"recovered_JzYjB",content:"content_1gFZ-",unit:"unit_25C4Z"},t.exports=e},530:function(t,e,n){"use strict";var r=n(479);n.n(r).a},531:function(t,e,n){(e=n(12)(!1)).push([t.i,".DataView-DataInfo{margin-top:20px;text-align:right}.DataView-DataInfo-summary{display:inline-block;font-family:Hiragino Sans;font-style:normal;font-size:30px;line-height:30px}.DataView-DataInfo-summary-unit{font-size:.6em}.DataView-DataInfo-date{white-space:nowrap;display:inline-block;font-size:12px;line-height:12px;color:gray}.DataView{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;height:100%}.DataView-TitleContainer{padding:14px 0 8px}.DataView-CardText{margin-bottom:46px;margin-top:20px}.v-toolbar__content{height:auto !important}",""]),t.exports=e},532:function(t,e,n){"use strict";var r=n(480),o=n.n(r);e.default=o.a},533:function(t,e,n){(e=n(12)(!1)).push([t.i,".GraphDesc_3_WI3{width:100%;margin:0;margin-bottom:0 !important;padding-left:0 !important;font-size:12px;color:gray;list-style:none}.GraphLink_1RLQC{text-decoration:none}",""]),e.locals={GraphDesc:"GraphDesc_3_WI3",GraphLink:"GraphLink_1RLQC"},t.exports=e}}]);