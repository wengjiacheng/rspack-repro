var tcrClient;(()=>{var e={804:(e,t,r)=>{var n=r(294),o=r(284),i=r(869);e.exports={changer:n,varyColor:o,getElementUISeries:i}},294:(e,t,r)=>{var n,o={};function i(){return"undefined"==typeof window?r.g:window}e.exports={_tryNum:0,changeColor:function(e,t){var r=t||i().Promise,u=this;if(!n){n=i()._themeCfg;var s=function(){if(!n){if(u._tryNum<9)return u._tryNum=u._tryNum+1,new r((function(r,n){setTimeout((function(){r(u.changeColor(e,t))}),100)}));n={}}}();if(s)return s}var a=e.oldColors||n.colors||[],c=e.newColors||[],f=n.url||e.cssUrl;return e.changeUrl&&(f=e.changeUrl(f)),new r((function(t,r){var n=o[f];n&&(a=n.colors),function(e,t){if(e.length!==t.length)return!1;for(var r=0,n=e.length;r<n;r++)if(e[r]!==t[r])return!1;return!0}(a,c)?t():function(t,r,n,i){var s=t&&document.getElementById(t.id);if(s&&t.colors)l(s.innerText),t.colors=c,n();else{var f="css_"+ +new Date;(s=document.querySelector(e.appendToEl||"body").appendChild(document.createElement("style"))).setAttribute("id",f),u.getCssString(r,(function(e){l(e),o[r]={id:f,colors:c},n()}),i)}function l(e){e=u.replaceCssText(e,a,c),s.innerText=e}}(n,f,t,r)}))},replaceCssText:function(e,t,r){return t.forEach((function(t,n){var o=new RegExp(t.replace(/\s/g,"").replace(/,/g,",\\s*")+"([\\da-f]{2})?(\\b|\\)|,|\\s)","ig");e=e.replace(o,r[n]+"$1$2")})),e},getCssString:function(e,t,r){var o=n.cssCode;if(o)return n.cssCode="",void t(o);var i=new XMLHttpRequest;i.onreadystatechange=function(){4===i.readyState&&(200===i.status?t(i.responseText):r(i.status))},i.onerror=function(e){r(e)},i.ontimeout=function(e){r(e)},i.open("GET",e),i.send()}}},284:e=>{function t(e){var t=e.toString(16);return 1===t.length&&(t="0"+t),t}function r(e,r,n,u,s){e=i(e),r=i(r),void 0===n&&(n=.5),void 0===u&&(u=1),void 0===s&&(s=1);var a=2*n-1,c=u-s,f=((a*c==-1?a:(a+c)/(1+a*c))+1)/2,l=1-f,d=o(e),g=o(r),p=Math.round(f*d[0]+l*g[0]),h=Math.round(f*d[1]+l*g[1]),v=Math.round(f*d[2]+l*g[2]);return"#"+t(p)+t(h)+t(v)}function n(e,t,n){return r(e,n||"fff",.5,t,1-t)}function o(e){return 3===(e=i(e)).length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),[parseInt(e.slice(0,2),16),parseInt(e.slice(2,4),16),parseInt(e.slice(4,6),16)]}function i(e){return e.replace("#","")}function u(e,t,r){var n=e/255,o=t/255,i=r/255,u=Math.max(n,o,i),s=Math.min(n,o,i),a=u-s,c=(u+s)/2,f=0,l=0;if(Math.abs(a)>1e-5){l=c<=.5?a/(u+s):a/(2-u-s);var d=(u-n)/a,g=(u-o)/a,p=(u-i)/a;f=n==u?p-g:o==u?2+d-p:4+g-d,(f*=60)<0&&(f+=360)}return[f,l,c]}e.exports={lighten:function(e,t){return r("fff",e,t)},darken:function(e,t){return r("000",e,t)},mix:r,toNum3:o,rgb:n,rgbaToRgb:n,pad2:t,rgbToHsl:u,rrggbbToHsl:function(e){var t=o(e),r=u.apply(0,t);return[r[0].toFixed(0),(100*r[1]).toFixed(3)+"%",(100*r[2]).toFixed(3)+"%"].join(",")}}},869:(e,t,r)=>{var n=r(284);e.exports=function(e,t){"#"===e[0]&&(e=e.slice(1));for(var r=["#"+e,n.toNum3(e).join(",")],o=1;o<=9;o++)r.push(n.lighten(e,Number((o/10).toFixed(2)))),r.push(n.darken(e,Number((o/10).toFixed(2))));return r.push(n.lighten(e,.925)),r.push(n.lighten(e,.95)),r.push(n.lighten(e,.975)),r.push(n.rrggbbToHsl(e)),[].push.apply(r,t),r}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var n=r(804);tcrClient=n})();