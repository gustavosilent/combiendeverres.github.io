(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{351:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(119),c=Object(r.c)("storeCounter",{state:function(){return{counter:0}},actions:{addCount:function(t){this.counter+=t},emptyCount:function(){this.counter=0}},getters:{getCount:function(t){return t.counter}}})},353:function(t,e,n){"use strict";n.r(e);var r=n(351),c={name:"LaAddition",data:function(){return{store:Object(r.a)()}}},o=n(61),l={name:"SoireePage",components:{LaAddition:Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center select-none"},[n("div",{staticClass:"mb-4"},[n("div",[n("img",{staticClass:"m-auto w-32 md:w-42 lg:w-48",attrs:{src:"argent.png"}}),t._v(" "),n("h1",{staticClass:"text-2xl mt-4"},[t._v("\n        Vous doit payer "+t._s(t.store.getCount)+" verre(s)\n      ")])])])])}),[],!1,null,null,null).exports}},d=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid flex h-screen"},[n("div",{staticClass:"items-start flex flex-row h-14"},[n("NuxtLink",{staticClass:"p-1",attrs:{to:"/soiree"}},[n("img",{staticClass:"m-auto w-8",attrs:{src:"cloche.png"}}),n("span",{staticClass:"text-xs font-medium"},[t._v("SOIRÉE")])])],1),t._v(" "),n("div",{staticClass:"justify-center items-center"},[n("LaAddition")],1)])}),[],!1,null,null,null);e.default=d.exports}}]);