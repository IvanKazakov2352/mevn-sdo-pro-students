(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22d813"],{f87b:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-row",{staticClass:"fill-height"},[e("v-col",[e("v-toolbar",{staticClass:"mb-2",attrs:{color:"indigo darken-5",dark:"",flat:""}},[e("v-toolbar-title",[t._v(" Список тестов к лекции: "+t._s(t.lection.nameLection)+" ")])],1),e("v-row",t._l(t.lection.tests,(function(a){return e("v-card",{key:a.id,staticClass:"mt-4 mb-4 mr-4 ml-4",attrs:{"max-width":"344"}},[e("v-list-item",[e("v-list-item-content",[e("v-list-item-title",{staticClass:"headline"},[t._v(" "+t._s(a.nameTest)+" ")])],1)],1),e("v-img",{attrs:{src:a.photoTest,height:"194"}}),e("v-card-actions",[e("router-link",{attrs:{tag:"button",to:{name:"lectionTestItem",params:{testID:a.id}}}},[e("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(a){var o=a.on,s=a.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",s,!1),o),[e("v-icon",[t._v(" mdi-exit-to-app ")])],1)]}}],null,!0)},[e("span",[t._v("Пройти тестирование")])])],1)],1)],1)})),1)],1)],1)},s=[],i={metaInfo:{title:"Тестирования к данной лекции | СДО PRO"},computed:{lection:function(){return this.$store.getters.lection(this.$route.params.categoryID,this.$route.params.subcategoryID,this.$route.params.moduleID,this.$route.params.lectionID)}}},n=i,r=e("2877"),l=e("6544"),c=e.n(l),d=e("8336"),m=e("b0af"),u=e("99d9"),v=e("62ad"),p=e("132d"),b=e("adda"),f=e("da13"),h=e("5d23"),V=e("0fd9"),I=e("71d9"),_=e("2a7f"),g=e("3a2f"),w=Object(r["a"])(n,o,s,!1,null,null,null);a["default"]=w.exports;c()(w,{VBtn:d["a"],VCard:m["a"],VCardActions:u["a"],VCol:v["a"],VIcon:p["a"],VImg:b["a"],VListItem:f["a"],VListItemContent:h["a"],VListItemTitle:h["c"],VRow:V["a"],VToolbar:I["a"],VToolbarTitle:_["a"],VTooltip:g["a"]})}}]);
//# sourceMappingURL=chunk-2d22d813.6d524353.js.map