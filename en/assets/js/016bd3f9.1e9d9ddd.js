"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[870],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1029:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:1},l="Install",c={unversionedId:"tutorial-basics/start",id:"tutorial-basics/start",isDocsHomePage:!1,title:"Install",description:"`shell",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tutorial-basics/start.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/start",permalink:"/table-xlsx/en/docs/tutorial-basics/start",editUrl:"https://github.com/PengChen96/table-xlsx/edit/master/website/docs/tutorial-basics/start.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/table-xlsx/en/docs/intro"},next:{title:"Export File",permalink:"/table-xlsx/en/docs/tutorial-basics/export-file"}},p=[{value:"Usage",id:"usage",children:[{value:"Export File",id:"export-file",children:[]},{value:"Parse File",id:"parse-file",children:[]}]}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install"},"Install"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save table-xlsx @pengchen/xlsx\n# or\nyarn add table-xlsx @pengchen/xlsx\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u26a1\ufe0f ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/sheetjs"},(0,o.kt)("strong",{parentName:"a"},"SheetJS/js-xlsx")),"\u793e\u533a\u7248\u672c\u4e0d\u652f\u6301\u6837\u5f0f\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PengChen96/sheetjs"},(0,o.kt)("strong",{parentName:"a"},"@pengchen/xlsx")),"(\u57fa\u4e8e",(0,o.kt)("a",{parentName:"p",href:"mailto:js-xlsx@0.17.0"},"js-xlsx@0.17.0"),"\u4fee\u6539)",(0,o.kt)("br",{parentName:"p"}),"\n","\ud83d\udcb8 \u5f53\u7136\uff0c\u60a8\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://sheetjs.com/pro"},"SheetJS Pro"),"\u7248\u672c"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"export-file"},"Export File"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { exportFile } from 'table-xlsx';\n\nconst dataSource = [\n  {\n    key: '1',\n    name: '\u80e1\u5f66\u658c',\n    age: 32,\n    address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',\n  },\n  {\n    key: '2',\n    name: '\u80e1\u5f66\u7956',\n    age: 42,\n    address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',\n  },\n];\n\nconst columns = [\n  {\n    title: '\u59d3\u540d',\n    dataIndex: 'name',\n    key: 'name',\n  },\n  {\n    title: '\u5e74\u9f84',\n    dataIndex: 'age',\n    key: 'age',\n  },\n  {\n    title: '\u4f4f\u5740',\n    dataIndex: 'address',\n    key: 'address',\n  },\n];\n\nexportFile({\n  columns: columns,\n  dataSource: dataSource,\n});\n")),(0,o.kt)("h3",{id:"parse-file"},"Parse File"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import { parseFile } from 'table-xlsx';\n\nparseFile({file}).then((result) => {\n  const { columns, dataSource } = result.tables[0];\n  setDataSource(dataSource);\n  setColumns(columns);\n});\n\n<Table\n  dataSource={dataSource}\n  columns={columns}\n/>\n")))}d.isMDXComponent=!0}}]);