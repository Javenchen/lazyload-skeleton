var lazySkeleton=function(){"use strict";function n(){var r=document.querySelectorAll("img.ylazy");r.forEach(function(n){var e=function n(e){if("BODY"===e.tagName)return!1;var r=e.getAttribute("class");return r&&0<=r.indexOf("yskeleton")?e:n(e.parentNode)}(n);n.skeleton=e||null});var t=window.innerHeight||document.documentElement.clientHeight,i=0;function n(){for(var n=i;n<r.length;n++){var e=t-r[n].getBoundingClientRect().top;console.log(n+"---：",t,r[n].getBoundingClientRect().top,e),0<=e&&(r[n].src=r[n].getAttribute("data-src"),r[n].setAttribute("class","ylazy loaded"),r[n].onload=function(n){if(r[n].skeleton){var e=r[n].skeleton.getAttribute("class");r[n].skeleton.setAttribute("class",e+" loaded")}}(n),i=n+1)}}window.addEventListener("scroll",n,!1),n()}!function(n,e){void 0===e&&(e={});var r=e.insertAt;if(n&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===r&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}("\r\n\r\n.ylazy {\r\n    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);\r\n    animation: loading 1.4s ease infinite;\r\n    background-size: 400% 100%;\r\n    width: 200px;\r\n    height: 100px;\r\n    display: inline-block;\r\n}\r\n\r\n.ylazy.yskeleton {}\r\n\r\n.ylazy.loaded {\r\n    background: none;\r\n    animation: none;\r\n}\r\n\r\n\r\n@keyframes loading {\r\n    0% {\r\n        background-position: 100% 50%;\r\n    }\r\n\r\n    100% {\r\n        background-position: 0 50%;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.yskeleton {\r\n    overflow: hidden;\r\n    /* border: 1px solid #f2f2f2 */\r\n}\r\n\r\n.yskeleton.card {\r\n    /* overflow: hidden; */\r\n    /* min-width: 200px; */\r\n    width: 140px;\r\n    display: inline-block;\r\n}\r\n\r\n.yskeleton.user-card {\r\n    width: 140px;\r\n    display: inline-block;\r\n\r\n}\r\n\r\n.yskeleton-line.user {\r\n    margin: 15px 0;\r\n    max-width: 80%;\r\n}\r\n\r\n.yskeleton-cover {\r\n    width: 100%;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n    display: flex;\r\n}\r\n\r\n.yskeleton.card .yskeleton-cover,\r\n.yskeleton.user-card .yskeleton-cover {\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n\r\n.yskeleton-user {\r\n    width: 50px;\r\n    height: 50px;\r\n    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);\r\n    animation: loading 1.4s ease infinite;\r\n    background-size: 400% 100%;\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n    /* flex: 1; */\r\n}\r\n\r\n.yskeleton.user-card .yskeleton-user {\r\n    margin: 0 auto;\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 10px auto 20px;\r\n}\r\n\r\n.yskeleton-line-wrap {\r\n    /* overflow: hidden; */\r\n    flex: 1\r\n}\r\n\r\n.yskeleton-line {\r\n    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);\r\n    animation: loading 1.4s ease infinite;\r\n    background-size: 400% 100%;\r\n    height: 20px;\r\n    margin: 10px 0;\r\n}\r\n\r\n.yskeleton-line.small {\r\n    height: 14px;\r\n    margin: 5px 0\r\n}\r\n\r\n.yskeleton-card {\r\n    width: 100%;\r\n    padding-bottom: 100%;\r\n    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);\r\n    animation: loading 1.4s ease infinite;\r\n    background-size: 400% 100%;\r\n    margin: 0 auto 10px;\r\n}\r\n\r\n\r\n.yskeleton .content {\r\n    display: none;\r\n}\r\n\r\n.yskeleton.loaded .content {\r\n    display: block;\r\n}\r\n\r\n.yskeleton .yskeleton-cover {\r\n    display: flex;\r\n}\r\n\r\n.yskeleton.loaded .yskeleton-cover {\r\n    display: none;\r\n}"),window.addEventListener("load",function(){document.querySelectorAll(".yskeleton").forEach(function(n){var e=document.createElement("div");e.setAttribute("class","yskeleton-cover");var r=document.createElement("div");r.setAttribute("class","yskeleton-line-wrap");var t=0,i="",l=n.getAttribute("class");0<l.indexOf("user-card")?(e.innerHTML='<div class="yskeleton-user"></div>',i='<div class="yskeleton-line small"></div> <div class="yskeleton-line small"></div>'):0<l.indexOf("card")?(e.innerHTML='<div class="yskeleton-card"></div>',i='<div class="yskeleton-line small"></div> <div class="yskeleton-line small"></div>'):(0<l.indexOf("user")&&(e.innerHTML='<div class="yskeleton-user"></div>',i='<div class="yskeleton-line user"></div>'),t=Number(n.getAttribute("row"))||0);for(var o=0;o<t;o++)i+='<div class="yskeleton-line"></div>';r.innerHTML=i,e.appendChild(r),n.appendChild(e)}),n()})}();
