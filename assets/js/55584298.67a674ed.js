"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[963],{5318:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return s}});var t=r(7378);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,f=m["".concat(l,".").concat(s)]||m[s]||d[s]||o;return r?t.createElement(f,c(c({ref:n},u),{},{components:r})):t.createElement(f,c({ref:n},u))}));function s(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9334:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var t=r(5773),a=r(808),o=(r(7378),r(5318)),c=["components"],i={slug:"/company"},l="Company",p={unversionedId:"auto-generated/company",id:"auto-generated/company",title:"Company",description:"`randCompanyName`",source:"@site/docs/auto-generated/company.mdx",sourceDirName:"auto-generated",slug:"/company",permalink:"/falso/docs/company",editUrl:"https://github.com/ngneat/falso/docusaurus/edit/main/website/docs/auto-generated/company.mdx",tags:[],version:"current",frontMatter:{slug:"/company"},sidebar:"falso",previous:{title:"Commerce",permalink:"/falso/docs/commerce"},next:{title:"Database",permalink:"/falso/docs/database"}},u=[{value:"<code>randCompanyName</code>",id:"randcompanyname",children:[],level:3},{value:"<code>randBrand</code>",id:"randbrand",children:[],level:3},{value:"<code>randSubscriptionPlan</code>",id:"randsubscriptionplan",children:[],level:3}],d={toc:u};function m(e){var n=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"company"},"Company"),(0,o.kt)("h3",{id:"randcompanyname"},(0,o.kt)("inlineCode",{parentName:"h3"},"randCompanyName")),(0,o.kt)("p",null,"Generate a random company name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randCompanyName } from '@ngneat/falso';\n\nrandCompanyName()\nrandCompanyName({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randCompanyName()}/>;\n}\n")),(0,o.kt)("h3",{id:"randbrand"},(0,o.kt)("inlineCode",{parentName:"h3"},"randBrand")),(0,o.kt)("p",null,"Generate a random brand."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randBrand } from '@ngneat/falso';\n\nrandBrand()\nrandBrand({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randBrand()}/>;\n}\n")),(0,o.kt)("h3",{id:"randsubscriptionplan"},(0,o.kt)("inlineCode",{parentName:"h3"},"randSubscriptionPlan")),(0,o.kt)("p",null,"Generate a random subscription plan."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { randSubscriptionPlan } from '@ngneat/falso';\n\nrandSubscriptionPlan()\nrandSubscriptionPlan({ length: 10 })\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Demo(props) {\n  return <Preview source={() => randSubscriptionPlan()}/>;\n}\n")))}m.isMDXComponent=!0}}]);