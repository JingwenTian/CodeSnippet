/*!
 * cdnFallback CDN资源加载失败的本地切换
 */

function _cdnFallback(org){
    var nodeName = org.nodeName.toLowerCase()
    , elem = document.createElement(nodeName)
    , map = {script: 'src', link: 'href'}
    , srcName = map[nodeName]
    , src = org[srcName];

    src = src.replace('http://cdn.website.com/', 'http://backup.website.com/');
    if(nodeName == 'link'){
        elem.rel = 'stylesheet';
    }
    elem[srcName] = src;
    document.body.appendChild(elem);
}

/**
应用:
 <link rel="stylesheet" href="http://cdn.website.com/style.css" onerror="_cdnFallback(this)">

**/

/**
借鉴:
!function(e){e.onReady=function(o,t){if(t){var n=function(){e[o]?t():setTimeout(function(){n(o,t)},500)};n(o,t)}}}(window),function(e){var o,t={script:"src",link:"href"},n="su.yzcdn.cn",r="b.yzcdn.cn";e._cdnFallback=function(a){var i,c,l,d,f,g,m,u;if(i=a.nodeName.toLowerCase(),c=t[i]){l=d=a[c],l=l.replace(n,r),f=l==d,f||(g=document,m=g.head||g.getElementsByTagName("head")[0]||g.documentElement,u=g.createElement(i),"link"==i&&(u.rel="stylesheet"),u[c]=l,u.onerror=function(){_cdnFallback(u)},m.appendChild(u)),(new Image).src="//tj.koudaitong.com/1.gif?net_error=1&fileurl="+d;var s=l.indexOf(r)>-1||l.indexOf(n)>-1,p=!o&&f;p&&s&&(e.motify&&e.motify.error&&e.motify.error("啊哦，有东西加载失败了，刷新下试试~"),o=!0)}}}(window),function(e){"use strict";var o;e.localStorage;try{var t=new Date;try{localStorage.setItem(t,t)}catch(n){if(22===n.code)throw"localstorage define error"}var r=localStorage.getItem(t)==t;if(localStorage.removeItem(t),!r)throw"localstorage define error";if("FUNCTION"!=(typeof localStorage.clear).toUpperCase())throw"localstorage define error";o=localStorage}catch(n){var a=function(){return null};o={getItem:a,setItem:a,removeItem:a,clear:a}}"function"==typeof define&&define.amd&&define(function(){return o}),e.YZLocalStorage=o}(window),function(e){e.motify=e.motify||{error:function(e){setTimeout(function(){document.body.insertAdjacentHTML("afterbegin",'<div style="color:red;padding:5px;background:#fff;font-size:12px;border-bottom:1px solid #ddd;margin-bottom:5px;"><a style="border-radius:3px;line-height:18px;text-align:center;float:right;margin-left:5px;padding:4px 7px;color:#fff;background-color:#00BF05;" onclick="location.reload();">刷新</a> <p style="line-height:28px;padding-right:53px;word-break:break-all;margin:0;">'+e+"</p></div>")},500)}},e.zenjs=e.zenjs||{};var o=/complete|loaded/;e.zenjs.ready=function(t){o.test(document.readyState)&&document.body?setTimeout(t):e.addEventListener("load",t,!1)},e.__logs=[],e.Logger={log:function(o){e.__logs.push(o)}}}(window);
**/
