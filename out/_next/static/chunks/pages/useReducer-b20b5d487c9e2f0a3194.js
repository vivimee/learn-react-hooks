_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{IOqG:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/useReducer",function(){return e("vAj9")}])},Qetd:function(n,t,e){"use strict";var c=Object.assign.bind(Object);n.exports=c,n.exports.default=n.exports},vAj9:function(n,t,e){"use strict";e.r(t);var c=e("nKUr"),o=e("q1tI"),r={count:0};function u(n,t){switch(t.type){case"increment":return{count:n.count+t.payload};case"decrement":return{count:n.count-t.payload};default:throw new Error("unknown action type")}}t.default=function(){var n=Object(o.useReducer)(u,r),t=n[0],e=n[1];return Object(c.jsxs)(c.Fragment,{children:["Count: ",t.count,Object(c.jsx)("button",{onClick:function(){return e({type:"decrement",payload:1})},children:"-1"}),Object(c.jsx)("button",{onClick:function(){return e({type:"increment",payload:2})},children:"+2"})]})}}},[["IOqG",0,1]]]);