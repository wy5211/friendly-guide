!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.friendlyGuide=e():t.friendlyGuide=e()}(self,(function(){return(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{close:()=>u,guide:()=>p});var n={el:null,classWarp:null,position:"bottom",onClickContainer:null,onClickNext:null,onClickPrev:null,onClickClose:null,nextBtnText:"下一步",prevBtnText:"上一步",showNext:!0,showPrev:!0,showClose:!0,maskClosable:!0,explain:{width:340,title:"title",content:"content"}},o="mask_guide_container";function i(){document.getElementById(o)&&window.document.body.removeChild(document.getElementById(o))}var r="rgba(0,0,0,0.5)",l=function(t,e){t.maskClosable&&e.addEventListener("click",(function(){i(),t.onClickClose&&t.onClickClose()}))},c="mask_guide_explain",a="friendly_guide_explain",d=function(t){var e=t.explain,n=t.el.getBoundingClientRect()||{},o={class:"".concat("mask_guide_explain"),id:"mask_guide_explain"},r={position:"absolute",left:n.left,top:"".concat(n.top+n.height,"px"),width:"".concat(e.width,"px"),margin:"8px",borderRadius:"6px",color:"#333",background:"#FFF",boxShadow:"0px 0px 10px #fff"},l=document.createElement("div");for(var d in o)l.setAttribute(d,o[d]);for(var p in r)l.style[p]=r[p];return l.appendChild(function(t){var e=t.explain,n={class:"".concat(c,"_title")},o={padding:"10px 20px",fontSize:"14px",lineHeight:"20px",fontWeight:"400",borderBottom:"1px solid #dfe1e6"},r=document.createElement("div");for(var l in n)r.setAttribute(l,n[l]);for(var a in o)r.style[a]=o[a];"[object String]"!==Object.prototype.toString.call(e.title)?r.appendChild(e.title):r.innerText=e.title;var d=t.showClose&&function(t){var e={class:"".concat(c,"_close")},n={position:"absolute",top:"5px",right:"10px",width:"20px",height:"20px",padding:"4px",color:"#ccc",textAlign:"center",cursor:"pointer"},o=document.createElement("div");for(var r in e)o.setAttribute(r,e[r]);for(var l in n)o.style[l]=n[l];return o.innerHTML="×",o.addEventListener("click",t.onClickClose?t.onClickClose:i),o}(t);return d&&r.appendChild(d),r}(t)),l.appendChild(function(t){var e=t.explain,n={class:"".concat("friendly_guide_explain","_body")},o={boxSizing:"border-box",padding:"10px 20px",wordBreak:"break-all",fontSize:"14px"},i=document.createElement("div");for(var r in n)i.setAttribute(r,n[r]);for(var l in o)i.style[l]=o[l];if("string"!=typeof e.content)throw new Error("content 暂时只支持 String 类型");return i.innerText=e.content,i}(t)),l.appendChild(function(t){if(!t.showNext&&!t.showPrev)return document.createElement("div");var e={class:"".concat(a,"_footer")},n={boxSizing:"border-box",padding:"0px 20px 20px 20px",textAlign:"center"},o=document.createElement("div");for(var r in e)o.setAttribute(r,e[r]);for(var l in n)o.style[l]=n[l];return t.showPrev&&o.appendChild(function(t){var e={class:"".concat(a,"_prev_button")};if(t.prevBtnColor&&"string"!=typeof t.prevBtnColor)throw new Error("按钮颜色为 String 类型");var n={padding:"3px 6px",color:"#333",backgroundColor:t.prevBtnColor||"#c4c6cc",border:"1px solid ".concat(t.prevBtnColor||"#c4c6cc"),borderRadius:"3px",marginRight:"8px"},o=document.createElement("button");for(var r in e)o.setAttribute(r,e[r]);for(var l in n)o.style[l]=n[l];if("string"!=typeof t.prevBtnText)throw new Error("上一步按钮，是 string 类型，若不需要请将showPrev置为 false");return o.innerText=t.prevBtnText,o.addEventListener("click",t.onClickPrev?t.onClickPrev:i),o}(t)),t.showNext&&o.appendChild(function(t){var e={class:"".concat(a,"_next_button")};if(t.nextBtnColor&&"string"!=typeof t.nextBtnColor)throw new Error("按钮颜色为 String 类型");var n={padding:"3px 6px",backgroundColor:t.nextBtnColor||"#1890FF",border:"1px solid ".concat(t.nextBtnColor||"#1890FF"),color:"#FFF",borderRadius:"3px"},o=document.createElement("button");for(var r in e)o.setAttribute(r,e[r]);for(var l in n)o.style[l]=n[l];if("string"!=typeof t.nextBtnText)throw new Error("下一步按钮，是 string 类型，若不需要请将 showNext 置为 false");return o.innerText=t.nextBtnText,o.addEventListener("click",t.onClickNext?t.onClickNext:i),o}(t)),o}(t)),l};function p(t){i();var e=Object.assign({},n,t);if(t.explain&&(e.explain=Object.assign({},n.explain,t.explain)),"string"!=typeof e.el)throw new Error("目标元素的 id 有误！");if(e.el=document.getElementById(e.el),null===e.el)throw new Error("未找到目标元素id对应的dom");var o=function(t){var e=t||{},n=e.classWarp,o=e.onClickContainer,i=e.el,c=function(t){var e=t.classWarp,n=t.onClickContainer,o={class:"".concat("mask_guide_container"," ").concat(e),id:"mask_guide_container"},i={position:"fixed",left:0,top:0,right:0,bottom:0,height:"100%",width:"100%","z-index":999},r=document.createElement("div");for(var l in o)r.setAttribute(l,o[l]);for(var c in i)r.style[c]=i[c];return n&&r.addEventListener("click",n),r}({classWarp:n,onClickContainer:o});if(document.body.appendChild(c),c.appendChild(function(t){var e=t.el.getBoundingClientRect()||{},n=e.width,o=e.left,i=e.top,c={position:"absolute",background:r,top:0,left:"".concat(o,"px"),width:"".concat(n,"px"),height:"".concat(i,"px")},a=document.createElement("div");for(var d in c)a.style[d]=c[d];return l(t,a),a}(t)),c.appendChild(function(t){var e=t.el.getBoundingClientRect()||{},n=e.width,o=e.left,i={position:"absolute",background:r,top:0,left:"".concat(o+n,"px"),width:"".concat(document.body.offsetWidth-o+n,"px"),height:"100%"},c=document.createElement("div");for(var a in i)c.style[a]=i[a];return l(t,c),c}(t)),c.appendChild(function(t){var e=t.el.getBoundingClientRect()||{},n=e.width,o=e.left,i=e.top,c=e.height,a={position:"absolute",background:r,top:"".concat(i+c,"px"),left:"".concat(o,"px"),bottom:0,width:"".concat(n,"px")},d=document.createElement("div");for(var p in a)d.style[p]=a[p];return l(t,d),d}(t)),c.appendChild(function(t){var e=(t.el.getBoundingClientRect()||{}).left,n={position:"absolute",background:r,top:0,left:0,bottom:0,height:"100%",width:"".concat(e,"px")},o=document.createElement("div");for(var i in n)o.style[i]=n[i];return l(t,o),o}(t)),c.appendChild(function(t){var e=t.getBoundingClientRect()||{},n=e.width,o=e.height,i=e.top,r=e.left,l={position:"absolute",opacity:1,top:"".concat(i,"px"),left:"".concat(r,"px"),height:"".concat(o,"px"),width:"".concat(n,"px")},c={class:"friendly_guide_target",id:"friendly_guide_target"},a=document.createElement("div");for(var d in l)a.style[d]=l[d];for(var p in c)a.setAttribute(p,c[p]);return a}(i)),t.explain){var a=d(t);c.appendChild(a);var p=a.getBoundingClientRect(),u=function(t,e){var n=t.position,o=t.el.getBoundingClientRect(),i=o.height,r=o.width,l=o.left,c=o.top,a=(document.body.getBoundingClientRect().width,document.body.getBoundingClientRect().height,{top:function(){return{left:l-(e.width-r)/2,top:c-e.height-15}},left:function(){return{left:l-e.width-15,top:c-(e.height-i)/2}},bottom:function(){return{left:l-(e.width-r)/2,top:c+i}},right:function(){return{left:l+r,top:c-(e.height-i)/2}}});return a[n]?a[n]():(console.warn("cannot resolve position: ".concat(n)),a.bottom())}(t,{width:p.width,height:p.height});for(var s in u)a.style[s]="".concat(u[s],"px")}var f=function(t){var e=document.createElement("div"),n=function(t){var e=t.position.toLowerCase(),n=e.slice(0,1).toUpperCase()+e.slice(1),o={position:"fixed",border:"8px solid transparent",width:0,height:0};return o["border".concat(n,"Color")]="#FFF",o}(t);for(var o in n)e.style[o]=n[o];var i=function(t){var e=t.el.getBoundingClientRect(),n=e.height,o=e.width,i=e.left,r=e.top;return{top:function(){return{left:i+(o-16)/2,top:r-8}},left:function(){return{left:i-8,top:r+(n-16)/2}},bottom:function(){return{left:i+(o-16)/2,top:r+n-8}},right:function(){return{left:i+o-8,top:r+(n-16)/2}}}[t.position]()}(t);for(var r in i)e.style[r]="".concat(i[r],"px");return e}(t);return c.appendChild(f),c}(e);return document.body.appendChild(o),o}var u=i;return e})()}));