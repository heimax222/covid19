(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{464:function(t,e,n){var content=n(473);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("2bc6109a",content,!0,{sourceMap:!1})},468:function(t,e,n){var content=n(509);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("57335474",content,!0,{sourceMap:!1})},469:function(t,e,n){var content=n(513);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("212ad082",content,!0,{sourceMap:!1})},472:function(t,e,n){"use strict";var r=n(464);n.n(r).a},473:function(t,e,n){(e=n(12)(!1)).push([t.i,".header{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle{display:flex;align-items:center;font-size:1.875rem;line-height:1;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle{font-size:1.25rem}}.date{font-size:.875rem;color:gray}",""]),t.exports=e},476:function(t,e,n){"use strict";var r=n(471),l={props:{title:{type:String,required:!0,default:""},icon:{type:String,required:!1,default:""},date:{type:String,required:!1,default:""}},data:function(){return{formattedDate:Object(r.b)(this.date)}}},o=(n(472),n(21)),d=n(47),c=n.n(d),f=n(141),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header mb-3"},[n("h2",{staticClass:"pageTitle"},[n("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),n("div",{staticClass:"date"},[n("span",[t._v("最終更新 ")]),t._v(" "),n("time",{attrs:{datetime:t.formattedDate}},[t._v(t._s(t.date))])])])}),[],!1,null,null,null);e.a=component.exports;c()(component,{VIcon:f.a})},508:function(t,e,n){"use strict";var r=n(468);n.n(r).a},509:function(t,e,n){(e=n(12)(!1)).push([t.i,".DataSelector{margin-top:2px;border:1px solid #d9d9d9;background-color:#fff}.DataSelector-Button{border:none !important;margin:2px;border-radius:4px !important;height:24px !important;font-size:12px !important;color:#333 !important;background-color:#fff !important}.DataSelector-Button::before{background-color:inherit}.DataSelector .v-btn--active{background-color:#4d4d4d !important;color:#fff !important}",""]),t.exports=e},512:function(t,e,n){"use strict";var r=n(469);n.n(r).a},513:function(t,e,n){(e=n(12)(!1)).push([t.i,".cardTable.v-data-table th{padding:8px 10px;height:auto;border-bottom:1px solid #d9d9d9;white-space:nowrap;color:#4d4d4d;font-size:12px}.cardTable.v-data-table th.text-center{text-align:center}.cardTable.v-data-table tbody tr{color:#333}.cardTable.v-data-table tbody tr td{padding:8px 10px;height:auto;font-size:12px}.cardTable.v-data-table tbody tr td.text-center{text-align:center}.cardTable.v-data-table tbody tr:nth-child(odd) td{background:rgba(217,217,217,.3)}.cardTable.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row){border:none}.note{padding:8px;font-size:12px;color:gray}",""]),t.exports=e},514:function(t,e,n){"use strict";e.a=function(data){var t=[],e=new Date,n=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var r=new Date(e["日付"]),l=e["小計"];isNaN(l)||(n+=l,t.push({label:r,transition:l,cumulative:n}))})),t}},515:function(t,e,n){"use strict";var r=n(23),l=n.n(r),o=[{text:"日付",value:"日付"},{text:"居住地",value:"居住地"},{text:"年代",value:"年代"},{text:"性別",value:"性別"}];e.a=function(data){var t={headers:o,datasets:[]};return data.forEach((function(e){var n,r,o,d,c={"日付":null!==(n=l()(e["発表日"]).format("MM/DD"))&&void 0!==n?n:"不明","居住地":null!==(r=e["居住地"])&&void 0!==r?r:"不明","年代":null!==(o=e["年代"])&&void 0!==o?o:"不明","性別":null!==(d=e["性別"])&&void 0!==d?d:"不明"};t.datasets.push(c)})),t.datasets.sort((function(a,b){return a===b?0:a<b?1:-1})),t}},516:function(t,e,n){var content=n(646);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("62cde0aa",content,!0,{sourceMap:!1})},518:function(t,e,n){var content=n(650);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("6f87ad78",content,!0,{sourceMap:!1})},528:function(t,e,n){"use strict";n(533);var r=n(23),l=n.n(r),o=n(470),d={name:"DataSelector",props:{value:{type:String,required:!1,default:""}}},c=(n(508),n(21)),f=n(47),h=n.n(f),m=n(531),T=n(688),v=n(155),Z=n.n(v),x=n(48),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{staticClass:"DataSelector",attrs:{value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{value:"transition"}},[t._v("\n    日別\n  ")]),t._v(" "),n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{value:"cumulative"}},[t._v("\n    累計\n  ")])],1)}),[],!1,null,null,null),y=component.exports;h()(component,{VBtn:m.a,VBtnToggle:T.a}),Z()(component,{Ripple:x.a});var D=n(475),S=(n(36),{name:"DateSelectSlider",props:{chartData:{type:Array,required:!0},value:{type:Array,required:!0},sliderMax:{type:Number,required:!0,default:1}},data:function(){var t=this;return{sliderValue:this.value,rules:[function(e){return Math.abs(e[0]-e[1])>14||t.$t("表示期間の最小範囲は１４日間です")}]}},watch:{sliderMax:function(){this.sliderValue=[0,this.sliderMax]},sliderValue:function(t,e){Math.abs(t[0]-t[1])<=14?this.sliderValue=e:this.$emit("sliderInput",t)}},methods:{getSliderLabels:function(t){return this.chartData&&0!==this.chartData.length?l()(this.chartData[t].label).format("M/D"):1}}}),_=n(687),w=Object(c.a)(S,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-range-slider",{staticStyle:{"padding-top":"35px"},attrs:{value:t.sliderValue,label:t.$t("表示期間"),rules:t.rules,max:t.sliderMax,min:0,"thumb-label":"always",color:"#85005d","track-color":"#808080"},scopedSlots:t._u([{key:"thumb-label",fn:function(e){return[t._v("\n    "+t._s(t.getSliderLabels(e.value))+"\n  ")]}}]),model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})}),[],!1,null,null,null),C=w.exports;h()(w,{VRangeSlider:_.a});var k={components:{DataView:o.a,DataSelector:y,DataViewBasicInfoPanel:D.a,DateSelectSlider:C},props:{title:{type:String,required:!1,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,required:!1,default:"time-bar-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},unit:{type:String,required:!1,default:""},url:{type:String,required:!1,default:""},defaultdatakind:{type:String,required:!1,default:"transition"}},data:function(){return{dataKind:this.defaultdatakind,graphRange:[0,this.chartData.length-1]}},computed:{sliderMax:function(){return this.chartData&&0!==this.chartData.length?this.chartData.length-1:1},displayCumulativeRatio:function(){var t=this.chartData.slice(-1)[0].cumulative,e=this.chartData.slice(-2)[0].cumulative;return this.formatDayBeforeRatio(t-e)},displayTransitionRatio:function(){var t=this.chartData.slice(-1)[0].transition,e=this.chartData.slice(-2)[0].transition;return this.formatDayBeforeRatio(t-e)},displayInfo:function(){if("transition"===this.dataKind)return{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:"実績値（前日比：".concat(this.displayTransitionRatio," ").concat(this.unit,"）"),unit:this.unit};var t=l()(this.chartData.slice(-1)[0].label).format("M/DD");return{lText:this.chartData[this.chartData.length-1].cumulative.toLocaleString(),sText:"".concat(t," 累計値（前日比：").concat(this.displayCumulativeRatio," ").concat(this.unit,"）"),unit:this.unit}},displayData:function(){return"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:"#85005d",borderWidth:0}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:"#85005d",borderWidth:0}]}},displayOption:function(){var t=this.unit;return{animation:!1,tooltips:{displayColors:!1,callbacks:{label:function(e){return parseInt(e.value).toLocaleString()+t},title:function(t,data){return l()(data.labels[t[0].index]).format("M月D日")}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",type:"time",offset:!0,time:{tooltipFormat:"MM/DD",unit:"day",unitStepSize:1,displayFormats:{day:"D"},round:"day"},stacked:!0,gridLines:{display:!1},ticks:{min:this.chartData[this.graphRange[0]].label,max:this.chartData[this.graphRange[1]].label,fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,minRotation:0}},{id:"month",type:"time",stacked:!0,time:{unit:"month",unitStepSize:1,displayFormats:{month:"YYYY年M月"},round:"day"},gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{min:this.chartData[this.graphRange[0]].label,max:this.chartData[this.graphRange[1]].label,fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold",gridLines:{display:!0}}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]}}}},methods:{sliderUpdate:function(t){this.graphRange=t},formatDayBeforeRatio:function(t){var e=t.toLocaleString();switch(Math.sign(t)){case 1:return"+".concat(e);case-1:default:return"".concat(e)}}}},M=n(672),I=Object(c.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,date:t.date,"title-id":t.titleId},scopedSlots:t._u([{key:"button",fn:function(){return[n("data-selector",{model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0}])},[t._v(" "),n("v-layout",{attrs:{column:""}},[n("bar",{attrs:{"chart-data":t.displayData,options:t.displayOption,height:240}}),t._v(" "),n("date-select-slider",{attrs:{"chart-data":t.chartData,value:[0,t.sliderMax],"slider-max":t.sliderMax},on:{sliderInput:t.sliderUpdate}})],1)],1)}),[],!1,null,null,null);e.a=I.exports;h()(I,{VLayout:M.a})},529:function(t,e,n){"use strict";var r=n(470),l=n(475),o={components:{DataView:r.a,DataViewBasicInfoPanel:l.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,required:!1,default:function(){}},url:{type:String,required:!1,default:""}}},d=(n(512),n(21)),c=n(47),f=n.n(c),h=n(675),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,url:t.url},scopedSlots:t._u([{key:"button",fn:function(){return[n("span")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-basic-info-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0}])},[t._v(" "),n("v-data-table",{staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0}})],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VDataTable:h.a})},622:function(t){t.exports=JSON.parse('{"patients":{"date":"2020/04/09 14:32","data":[{"No":1,"日付":"2020-03-06T00:00:00.000Z","居住地":"奈良市","年代":"60代","性別":"男性","退院":null,"更新日":"2020-03-06T00:00:00.000Z","備考":null},{"No":2,"日付":"2020-03-06T00:00:00.000Z","居住地":"奈良市","年代":"70代","性別":"女性","退院":null,"更新日":"2020-03-06T00:00:00.000Z","備考":null},{"No":3,"日付":"2020-03-06T00:00:00.000Z","居住地":"奈良市","年代":"60代","性別":"男性","退院":null,"更新日":"2020-03-06T00:00:00.000Z","備考":null},{"No":4,"日付":"2020-03-11T00:00:00.000Z","居住地":"奈良市","年代":"40代","性別":"女性","退院":null,"更新日":"2020-03-11T00:00:00.000Z","備考":null},{"No":5,"日付":"2020-04-01T00:00:00.000Z","居住地":"奈良市","年代":"50代","性別":"男性","退院":null,"更新日":"2020-04-01T00:00:00.000Z","備考":null},{"No":6,"日付":"2020-04-07T00:00:00.000Z","居住地":"奈良市","年代":"50代","性別":"男性","退院":null,"更新日":"2020-04-08T00:00:00.000Z","備考":null},{"No":7,"日付":"2020-04-07T00:00:00.000Z","居住地":"奈良市","年代":"40代","性別":"男性","退院":null,"更新日":"2020-04-08T00:00:00.000Z","備考":null}]},"main_summary":{"date":"2020/04/09 14:32","attr":"検査実施人数","value":10,"children":[{"attr":"陽性患者数","value":7,"children":[{"attr":"入院／入院調整中","value":0,"children":[{"attr":"軽症・中等症","value":2},{"attr":"重症","value":1}]},{"attr":"退院","value":0},{"attr":"死亡","value":0}]}]},"patients_summary":{"date":"2020/04/09 14:32","data":[{"日付":"2020-03-01T00:00:00.000Z","小計":0},{"日付":"2020-03-02T00:00:00.000Z","小計":0},{"日付":"2020-03-03T00:00:00.000Z","小計":0},{"日付":"2020-03-04T00:00:00.000Z","小計":0},{"日付":"2020-03-05T00:00:00.000Z","小計":0},{"日付":"2020-03-06T00:00:00.000Z","小計":3},{"日付":"2020-03-07T00:00:00.000Z","小計":0},{"日付":"2020-03-08T00:00:00.000Z","小計":0},{"日付":"2020-03-09T00:00:00.000Z","小計":0},{"日付":"2020-03-10T00:00:00.000Z","小計":0},{"日付":"2020-03-11T00:00:00.000Z","小計":1},{"日付":"2020-03-12T00:00:00.000Z","小計":0},{"日付":"2020-03-13T00:00:00.000Z","小計":0},{"日付":"2020-03-14T00:00:00.000Z","小計":0},{"日付":"2020-03-15T00:00:00.000Z","小計":0},{"日付":"2020-03-16T00:00:00.000Z","小計":0},{"日付":"2020-03-17T00:00:00.000Z","小計":0},{"日付":"2020-03-18T00:00:00.000Z","小計":0},{"日付":"2020-03-19T00:00:00.000Z","小計":0},{"日付":"2020-03-20T00:00:00.000Z","小計":0},{"日付":"2020-03-21T00:00:00.000Z","小計":0},{"日付":"2020-03-22T00:00:00.000Z","小計":0},{"日付":"2020-03-23T00:00:00.000Z","小計":0},{"日付":"2020-03-24T00:00:00.000Z","小計":0},{"日付":"2020-03-25T00:00:00.000Z","小計":0},{"日付":"2020-03-26T00:00:00.000Z","小計":0},{"日付":"2020-03-27T00:00:00.000Z","小計":0},{"日付":"2020-03-28T00:00:00.000Z","小計":0},{"日付":"2020-03-29T00:00:00.000Z","小計":0},{"日付":"2020-03-30T00:00:00.000Z","小計":0},{"日付":"2020-03-31T00:00:00.000Z","小計":0},{"日付":"2020-04-01T00:00:00.000Z","小計":1},{"日付":"2020-04-02T00:00:00.000Z","小計":0},{"日付":"2020-04-03T00:00:00.000Z","小計":0},{"日付":"2020-04-04T00:00:00.000Z","小計":0},{"日付":"2020-04-05T00:00:00.000Z","小計":0},{"日付":"2020-04-06T00:00:00.000Z","小計":1},{"日付":"2020-04-07T00:00:00.000Z","小計":1}]},"inspections_summary":{"date":"2020/04/09 14:32","data":[{"日付":"2020-03-01T00:00:00.000Z","小計":0,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-02T00:00:00.000Z","小計":3,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-03T00:00:00.000Z","小計":1,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-04T00:00:00.000Z","小計":3,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-05T00:00:00.000Z","小計":5,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-06T00:00:00.000Z","小計":5,"陽性判定":3,"陰性確認":null},{"日付":"2020-03-07T00:00:00.000Z","小計":2,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-08T00:00:00.000Z","小計":3,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-09T00:00:00.000Z","小計":2,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-10T00:00:00.000Z","小計":7,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-11T00:00:00.000Z","小計":4,"陽性判定":1,"陰性確認":null},{"日付":"2020-03-12T00:00:00.000Z","小計":0,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-13T00:00:00.000Z","小計":3,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-14T00:00:00.000Z","小計":3,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-15T00:00:00.000Z","小計":2,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-16T00:00:00.000Z","小計":0,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-17T00:00:00.000Z","小計":5,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-18T00:00:00.000Z","小計":3,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-19T00:00:00.000Z","小計":6,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-20T00:00:00.000Z","小計":5,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-21T00:00:00.000Z","小計":3,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-22T00:00:00.000Z","小計":4,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-23T00:00:00.000Z","小計":1,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-24T00:00:00.000Z","小計":5,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-25T00:00:00.000Z","小計":3,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-26T00:00:00.000Z","小計":10,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-27T00:00:00.000Z","小計":3,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-28T00:00:00.000Z","小計":4,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-29T00:00:00.000Z","小計":0,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-30T00:00:00.000Z","小計":1,"陽性判定":0,"陰性確認":null},{"日付":"2020-03-31T00:00:00.000Z","小計":1,"陽性判定":0,"陰性確認":null},{"日付":"2020-04-01T00:00:00.000Z","小計":10,"陽性判定":1,"陰性確認":null},{"日付":"2020-04-02T00:00:00.000Z","小計":3,"陽性判定":0,"陰性確認":null},{"日付":"2020-04-03T00:00:00.000Z","小計":5,"陽性判定":0,"陰性確認":null},{"日付":"2020-04-04T00:00:00.000Z","小計":6,"陽性判定":0,"陰性確認":null},{"日付":"2020-04-05T00:00:00.000Z","小計":2,"陽性判定":0,"陰性確認":null},{"日付":"2020-04-06T00:00:00.000Z","小計":4,"陽性判定":1,"陰性確認":null},{"日付":"2020-04-07T00:00:00.000Z","小計":5,"陽性判定":1,"陰性確認":null}]},"querents":{"date":"2020/04/09 14:32","data":[{"日付":"2020-03-01T00:00:00.000Z","小計":23},{"日付":"2020-03-02T00:00:00.000Z","小計":57},{"日付":"2020-03-03T00:00:00.000Z","小計":54},{"日付":"2020-03-04T00:00:00.000Z","小計":45},{"日付":"2020-03-05T00:00:00.000Z","小計":62},{"日付":"2020-03-06T00:00:00.000Z","小計":50},{"日付":"2020-03-07T00:00:00.000Z","小計":38},{"日付":"2020-03-08T00:00:00.000Z","小計":30},{"日付":"2020-03-09T00:00:00.000Z","小計":88},{"日付":"2020-03-10T00:00:00.000Z","小計":67},{"日付":"2020-03-11T00:00:00.000Z","小計":52},{"日付":"2020-03-12T00:00:00.000Z","小計":60},{"日付":"2020-03-13T00:00:00.000Z","小計":59},{"日付":"2020-03-14T00:00:00.000Z","小計":33},{"日付":"2020-03-15T00:00:00.000Z","小計":21},{"日付":"2020-03-16T00:00:00.000Z","小計":82},{"日付":"2020-03-17T00:00:00.000Z","小計":34},{"日付":"2020-03-18T00:00:00.000Z","小計":60},{"日付":"2020-03-19T00:00:00.000Z","小計":56},{"日付":"2020-03-20T00:00:00.000Z","小計":23},{"日付":"2020-03-21T00:00:00.000Z","小計":22},{"日付":"2020-03-22T00:00:00.000Z","小計":30},{"日付":"2020-03-23T00:00:00.000Z","小計":58},{"日付":"2020-03-24T00:00:00.000Z","小計":32},{"日付":"2020-03-25T00:00:00.000Z","小計":58},{"日付":"2020-03-26T00:00:00.000Z","小計":44},{"日付":"2020-03-27T00:00:00.000Z","小計":92},{"日付":"2020-03-28T00:00:00.000Z","小計":62},{"日付":"2020-03-29T00:00:00.000Z","小計":45},{"日付":"2020-03-30T00:00:00.000Z","小計":135},{"日付":"2020-03-31T00:00:00.000Z","小計":115},{"日付":"2020-04-01T00:00:00.000Z","小計":142},{"日付":"2020-04-02T00:00:00.000Z","小計":138},{"日付":"2020-04-03T00:00:00.000Z","小計":157},{"日付":"2020-04-04T00:00:00.000Z","小計":129},{"日付":"2020-04-05T00:00:00.000Z","小計":86},{"日付":"2020-04-06T00:00:00.000Z","小計":211},{"日付":"2020-04-07T00:00:00.000Z","小計":142}]},"lastUpdate":"2020/04/09 14:32"}')},644:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/03/24","url":"https://www.city.nara.lg.jp/site/coronavirus/61310.html","text":"新型コロナウイルス感染防止のため施設等の一部休館について"},{"date":"2020/03/16","url":"https://www.city.nara.lg.jp/site/coronavirus/55138.html","text":"新型コロナウイルスによる感染拡大防止によるイベント中止一覧"},{"date":"2020/03/16","url":"https://www.city.nara.lg.jp/site/coronavirus/","text":"新型コロナウイルスに関する情報まとめ"}]}')},645:function(t,e,n){"use strict";var r=n(516);n.n(r).a},646:function(t,e,n){(e=n(12)(!1)).push([t.i,".SvgCard[data-v-7dfc845e]  svg{width:100%}.SvgCard .Graph-Desc[data-v-7dfc845e]{margin-top:10px;margin-bottom:0;font-size:12px;color:gray}",""]),t.exports=e},649:function(t,e,n){"use strict";var r=n(518);n.n(r).a},650:function(t,e,n){(e=n(12)(!1)).push([t.i,".MainPage .DataBlock[data-v-d7573a86]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-d7573a86]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-d7573a86]{padding:4px 8px}}",""]),t.exports=e},678:function(t,e,n){"use strict";n.r(e);var r=n(23),l=n.n(r),o=n(476),d=n(528),c=n(622),f=n(529),h=n(514),m=n(515),T=n(537),v=n(644),Z={components:{DataView:n(470).a},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""}}},x=(n(645),n(21)),y=Object(x.a)(Z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{staticClass:"SvgCard",attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("p",{staticClass:"Graph-Desc"},[t._v("\n      （注）表の数字は奈良市が公表したデータ\n    ")])]},proxy:!0}])},[t._v(" "),t._t("default")],2)}),[],!1,null,"7dfc845e",null).exports,D=n(542),S={components:{PageHeader:o.a,TimeBarChart:d.a,DataTable:f.a,SvgCard:y,ConfirmedCasesTable:D.a},data:function(){var t=Object(h.a)(c.patients_summary.data),e=Object(m.a)(c.patients.data),n=Object(h.a)(c.querents.data),r=Object(h.a)(c.inspections_summary.data),o=Object(T.a)(c.main_summary),d={lText:t[t.length-1].cumulative.toLocaleString(),sText:l()(t[t.length-1].label).format("M/D")+"の累計",unit:"人"},data={Data:c,patientsTable:e,patientsGraph:t,querentsGraph:n,inspectionsGraph:r,confirmedCases:o,sumInfoOfPatients:d,headerItem:{icon:"mdi-chart-timeline-variant",title:"奈良市内の最新感染動向",date:c.lastUpdate},newsItems:v.newsItems};return data},head:function(){return{title:"奈良市内の最新感染動向"}}},_=(n(649),n(47)),w=n.n(_),C=n(460),k=n(461),M=Object(x.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"MainPage"},[n("page-header",{attrs:{icon:t.headerItem.icon,title:t.headerItem.title,date:t.headerItem.date}}),t._v(" "),n("v-row",{staticClass:"DataBlock"},[n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("svg-card",{attrs:{title:"検査陽性者の状況","title-id":"details-of-confirmed-cases",date:t.Data.main_summary.date}},[n("confirmed-cases-table",t._b({attrs:{"aria-label":"検査陽性者の状況"}},"confirmed-cases-table",t.confirmedCases,!1))],1)],1),t._v(" "),n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{title:"陽性患者数","title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":t.patientsGraph,date:t.Data.patients.date,unit:"人"}})],1),t._v(" "),n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("data-table",{attrs:{title:"陽性患者の属性","title-id":"attributes-of-confirmed-cases","chart-data":t.patientsTable,"chart-option":{},date:t.Data.patients.date,info:t.sumInfoOfPatients}})],1),t._v(" "),n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{title:"PCR検査実施数","title-id":"number-of-tested","chart-id":"time-bar-chart-inspections","chart-data":t.inspectionsGraph,date:t.Data.inspections_summary.date,unit:"件"}})],1),t._v(" "),n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("time-bar-chart",{attrs:{title:"新型コロナ相談件数","title-id":"number-of-reports-to-covid19-consultation-desk","chart-id":"time-bar-chart-querents","chart-data":t.querentsGraph,date:t.Data.querents.date,unit:"件",url:""}})],1)],1)],1)}),[],!1,null,"d7573a86",null);e.default=M.exports;w()(M,{VCol:C.a,VRow:k.a})}}]);