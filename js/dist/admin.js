module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat["helpers/icon"]},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["admin/components/HeaderSecondary"]},function(e,t){e.exports=flarum.core.compat["common/components/LinkButton"]},function(e,t){e.exports=flarum.core.compat["components/ExtensionPage"]},function(e,t){e.exports=flarum.core.compat["components/LoadingIndicator"]},function(e,t){e.exports=flarum.core.compat["utils/classList"]},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),i=r(2),o=r(3),s=r.n(o),c=r(4),u=r.n(c);function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=r(5),l=r.n(p),f=r(6),x=r.n(f),v=r(1),g=r.n(v),y=r(7),h=r.n(y),b=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,d(t,r);var a=n.prototype;return a.oninit=function(t){var r=this;e.prototype.oninit.call(this,t),this.token=app.data.settings["extiverse-mercury.token"]||null,this.loading=!0,this.updates=[],this.token?app.request({method:"GET",url:app.forum.attribute("apiUrl")+"/extiverse/mercury/extension-updates"}).then((function(e){r.updates=e,r.loading=!1,m.redraw()})):this.loading=!1},a.className=function(){return"Extiverse Mercury ExtensionUpdates--Page"},a.content=function(){return this.loading?m(x.a,null):e.prototype.content.call(this)},a.sections=function(){var t=e.prototype.sections.call(this);return t.remove("permissions"),t.add("extension-updates",this.extensionUpdates()),t},a.extensionUpdates=function(){var e=this;return this.loading?m("div",null):m("div",{className:"container UserListPage"},m("div",{className:"UserListPage-grid UserListPage-grid--loaded",style:"--columns: 4"},m("div",{"aria-rowindex":1,"aria-colindex":1,className:"UserListPage-grid-header"},app.translator.trans("extiverse-mercury.admin.extension-updates-page.extension-name")),m("div",{"aria-rowindex":1,"aria-colindex":2,className:"UserListPage-grid-header"},app.translator.trans("extiverse-mercury.admin.extension-updates-page.installed-version")),m("div",{"aria-rowindex":1,"aria-colindex":3,className:"UserListPage-grid-header"},app.translator.trans("extiverse-mercury.admin.extension-updates-page.highest-version")),m("div",{"aria-rowindex":1,"aria-colindex":4,className:"UserListPage-grid-header"},app.translator.trans("extiverse-mercury.admin.extension-updates-page.extension-is-up-to-date")),this.updates.map((function(t,r){return e.extensionUpdateItem(t,r)}))))},a.extensionUpdateItem=function(e,t){var r=h()(["UserListPage-grid-rowItem",t%2>0&&"UserListPage-grid-rowItem--shaded"]);return[m("div",{className:r,"aria-rowindex":t+2,"aria-colindex":1},e.title," ",m("code",null,"(",e.name,")")),m("div",{className:r,"aria-rowindex":t+2,"aria-colindex":2},e["current-version"]),m("div",{className:r,"aria-rowindex":t+2,"aria-colindex":3},e["highest-version"]),m("div",{className:"centered "+r,"aria-rowindex":t+2,"aria-colindex":4},e["needs-update"]?g()("fas fa-exclamation-triangle"):g()("fas fa-check"))]},n}(l.a);a.a.initializers.add("extiverse-mercury",(function(){var e="https://extiverse.com/auth/mercury?community="+window.location.host;a.a.extensionData.for("extiverse-mercury").registerSetting({setting:"extiverse-mercury.token",type:"text",label:a.a.translator.trans("extiverse-mercury.admin.settings.token",{a:m("a",{href:e,target:"_blank"})}),help:a.a.translator.trans("extiverse-mercury.admin.settings.token-description",{a:m("a",{href:e,target:"_blank"})})}).registerPage(b),Object(i.extend)(s.a.prototype,"items",(function(e){var t,r,n,a=app.data.settings["extiverse-mercury.token"]||null,i=app.data.settings["extiverse-mercury.updates-required"];a?(t=app.translator.trans("extiverse-mercury.admin.header-secondary.updates",{count:i}),r=(n=i>0)?"fas fa-exclamation-triangle":"fas fa-thumbs-up"):(t=app.translator.trans("extiverse-mercury.admin.header-secondary.no-token"),r="fas fa-exclamation-triangle",n=!0),e.add("extiverse-mercury",m(u.a,{className:"ExtiverseMercuryButton Button "+(n&&"Button--danger"),href:app.route("extension",{id:"extiverse-mercury"}),icon:r},t),10)}))}))}]);
//# sourceMappingURL=admin.js.map