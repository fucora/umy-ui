module.exports=function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist/",t(t.s=3)}([function(e,n){e.exports=require("umy-table")},function(e,n){e.exports=require("umy-ui/lib/locale")},function(e,n){e.exports=require("umy-table/lib/locale")},function(e,n,t){e.exports=t(4)},function(e,n,t){"use strict";t.r(n);var o=function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"demo"},[this._v("我是个测试，这个样式呢在theme文件加下")])};o._withStripped=!0;var r=function(e,n,t,o,r,i,u,l){var a,s="function"==typeof e?e.options:e;if(n&&(s.render=n,s.staticRenderFns=t,s._compiled=!0),o&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),u?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},s._ssrRegister=a):r&&(a=l?function(){r.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:r),a)if(s.functional){s._injectStyles=a;var c=s.render;s.render=function(e,n){return a.call(n),c(e,n)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,a):[a]}return{exports:e,options:s}}({name:"demo"},o,[],!1,null,"57646346",null);r.options.__file="packages/demo/src/demo.vue";var i=r.exports;i.install=function(e){e.component(i.name,i)};var u=i,l=t(1),a=t.n(l),s=t(0),c=t(2),f=t.n(c),d=[s.UTableColumn,s.UTable,s.UxGrid,s.UxTableColumn,u],p=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a.a.use(n.locale),a.a.i18n(n.i18n),f.a.use(n.locale),d.forEach((function(n){e.component(n.name,n)})),e.prototype.$ELEMENT={size:n.size||"",zIndex:n.zIndex||2e3}};"undefined"!=typeof window&&window.Vue&&p(window.Vue);n.default={version:"1.0.2",locale:a.a.use,i18n:a.a.i18n,install:p,UTableColumn:s.UTableColumn,UTable:s.UTable,UxGrid:s.UxGrid,UxTableColumn:s.UxTableColumn,Demo:u}}]).default;