import{V as s}from"./index-1b6981e7.js";import{a as D}from"./use-translate-ad5eefa4.js";import{A as F,y as d,r as v,o as C,a as M,e as a,w as u,C as t,F as _}from"./vue-libs-6a67f9c6.js";import"./utils-f9349256.js";import"./Picker-3d13cce4.js";import"./use-expose-c87283be.js";import"./index-5b517ddf.js";import"./with-install-0d9206aa.js";import"./use-touch-87b155f0.js";import"./constant-00b7fd44.js";import"./use-sync-prop-ref-011d5386.js";import"./index-ebb73d3f.js";import"./use-id-5464e261.js";import"./use-route-ea8124d0.js";import"./index-4437616e.js";import"./index-386f5015.js";import"./on-popup-reopen-2b57f4ff.js";import"./use-refs-4e2d69f7.js";import"./index-a81fbffb.js";import"./interceptor-e18d38f8.js";import"./index-5f7b1062.js";const L=F({__name:"index",setup(T){const o=D({"zh-CN":{day:"日",year:"年",month:"月",chooseDate:"选择日期",columnsType:"选项类型",optionsFilter:"过滤选项",chooseYearMonth:"选择年月",optionsFormatter:"格式化选项"},"en-US":{day:" Day",year:" Year",month:" Month",chooseDate:"Choose Date",columnsType:"Columns Type",optionsFilter:"Options Filter",chooseYearMonth:"Choose Year-Month",optionsFormatter:"Options Formatter"}}),n=new Date(2020,0,1),i=new Date(2025,5,1),c=d(["2021","01","01"]),f=d(["2021","01"]),y=d(["2021","01"]),h=d(["2021","01"]),p=["year","month"],x=(m,e)=>m==="month"?e.filter(r=>Number(r.value)%6===0):e,V=(m,e)=>(m==="year"&&(e.text+=o("year")),m==="month"&&(e.text+=o("month")),m==="day"&&(e.text+=o("day")),e);return(m,e)=>{const r=v("demo-block");return C(),M(_,null,[a(r,{card:"",title:t(o)("basicUsage")},{default:u(()=>[a(t(s),{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=l=>c.value=l),title:t(o)("chooseDate"),"min-date":t(n),"max-date":t(i)},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),a(r,{card:"",title:t(o)("columnsType")},{default:u(()=>[a(t(s),{modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=l=>f.value=l),title:t(o)("chooseYearMonth"),"min-date":t(n),"max-date":t(i),"columns-type":p},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),a(r,{card:"",title:t(o)("optionsFormatter")},{default:u(()=>[a(t(s),{modelValue:y.value,"onUpdate:modelValue":e[2]||(e[2]=l=>y.value=l),title:t(o)("chooseYearMonth"),"min-date":t(n),"max-date":t(i),formatter:V,"columns-type":p},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),a(r,{card:"",title:t(o)("optionsFilter")},{default:u(()=>[a(t(s),{modelValue:h.value,"onUpdate:modelValue":e[3]||(e[3]=l=>h.value=l),title:t(o)("optionFilter"),filter:x,"min-date":t(n),"max-date":t(i),"columns-type":p},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"])],64)}}});export{L as default};
