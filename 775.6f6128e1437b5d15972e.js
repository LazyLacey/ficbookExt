"use strict";(self.webpackChunkficbook=self.webpackChunkficbook||[]).push([[775],{7775:(e,l,s)=>{s.r(l),s.d(l,{default:()=>F});var t=s(1101),a=s(1275),i=s(4569),r=s(1536),c=s(2967),n=s(9088),o=s(7292),u=s(5315),h=s(8032);let d={class:"list-unstyled search-dropdown-list"},k={class:"list-title"},v=["href"],y={class:"link-txt"},m=(0,t.aZ)({__name:"header-search-links-list",props:{items:{},listTitle:{},listIcon:{}},setup:e=>(e,l)=>((0,t.wg)(),(0,t.iD)("ul",d,[(0,t._)("li",k,[(0,t.Wm)(h.Z,{"icon-name":e.listIcon},null,8,["icon-name"]),(0,t.Uk)(" "+(0,i.zw)(e.listTitle),1)]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.items,e=>((0,t.wg)(),(0,t.iD)("li",{key:e.url},[(0,t._)("a",{href:e.url},[e.icon?((0,t.wg)(),(0,t.j4)(h.Z,{key:0,"icon-name":e.icon,class:"link-start-icon"},null,8,["icon-name"])):(0,t.kq)("v-if",!0),(0,t._)("div",y,(0,i.zw)(e.title),1),(0,t.Wm)(h.Z,{"icon-name":"ic_arrow-next",class:"link-end-icon"})],8,v)]))),128))]))}),w={class:"list-unstyled search-dropdown-list"},p={class:"list-title"},_=["href"],g={class:"link-txt"},f={class:"count-label"},b={class:"link-txt"},D=(0,t.aZ)({__name:"header-search-result-list",props:{items:{},searchQuery:{},searchTabsUrl:{},listTitle:{},searchUrl:{}},emits:["selected"],setup(e,l){let{emit:s}=l,a=e=>e>=1e4?"10000+":`${e}`,r=l=>`${e.searchTabsUrl[l].url}?query=${encodeURIComponent(e.searchQuery)}`,n=`${e.searchUrl}?query=${encodeURIComponent(e.searchQuery)}`,o=(0,t.Fl)(()=>Object.entries(e.items).filter(e=>{let[l,s]=e;return 0!==s}).map(e=>{let[l,s]=e;return{key:l,count:s}}));return(e,l)=>((0,t.wg)(),(0,t.iD)("ul",w,[(0,t._)("li",p,(0,i.zw)(e.listTitle),1),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.value,c=>((0,t.wg)(),(0,t.iD)("li",{key:c.key},[(0,t._)("a",{href:r(c.key),onClick:l[0]||(l[0]=e=>s("selected"))},[(0,t.Wm)(h.Z,{"icon-name":"ic_search",class:"search-icon"}),(0,t._)("div",g,(0,i.zw)(e.searchTabsUrl[c.key].title),1),(0,t._)("div",f,(0,i.zw)(a(c.count)),1),(0,t.Wm)(h.Z,{"icon-name":"ic_arrow-next",class:"link-end-icon"})],8,_)]))),128)),(0,t._)("li",null,[(0,t._)("a",{href:n,onClick:l[1]||(l[1]=e=>s("selected"))},[(0,t.Wm)(h.Z,{"icon-name":"ic_reply"}),(0,t._)("div",b,(0,i.zw)(c.t("header-search-results-list")),1)])])]))}}),H={class:"list-unstyled search-dropdown-list search-history"},U={class:"list-title"},C={class:"flex-grow-1 text-right font-normal"},x={key:0,class:"history-list"},z=["onClick"],Z=(0,t.aZ)({__name:"header-search-history",props:{searchHistory:{}},emits:["selected","clearHistory"],setup(e,l){let{emit:s}=l,n=(0,t.Fl)(()=>e.searchHistory.length>4),o=(0,r.iH)(!1),u=(0,t.Fl)(()=>o.value?e.searchHistory:e.searchHistory.slice(0,4)),d=()=>{o.value=!o.value};return(e,l)=>((0,t.wg)(),(0,t.iD)("ul",H,[(0,t._)("li",U,[(0,t.Wm)(h.Z,{"icon-name":"ic_history"}),(0,t.Uk)(" "+(0,i.zw)(c.t("header-search.history"))+" ",1),(0,t._)("div",C,[u.value.length?((0,t.wg)(),(0,t.iD)("button",{key:0,onClick:l[0]||(l[0]=(0,a.iM)(e=>s("clearHistory"),["stop"])),class:"text-underline"},(0,i.zw)(c.t("header-search.clear")),1)):((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[(0,t.Uk)((0,i.zw)(c.t("header-search.empty")),1)],64))])]),u.value.length?((0,t.wg)(),(0,t.iD)("li",x,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(u.value,e=>((0,t.wg)(),(0,t.iD)("button",{key:e,onClick:l=>s("selected",e),class:"item text-n1"},(0,i.zw)(e),9,z))),128)),n.value?((0,t.wg)(),(0,t.iD)("button",{key:0,onClick:d,class:"item text-n1 text-bold"},(0,i.zw)(o.value?c.t("header-search.collapse"):c.t("header-search.more")),1)):(0,t.kq)("v-if",!0)])):(0,t.kq)("v-if",!0)]))}});var W=s(1120);let q={class:"header-search"},T={class:"input-group"},O=["placeholder"],Y={key:0,class:"search-dropdown"},j={key:0,class:"no-results-message text-t2"},L="header-search-history",S=(0,t.aZ)({__name:"header-search",props:{searchUrl:{},searchTabsUrl:{},sectionsLinkData:{},randomLinkData:{}},setup(e){let l=(0,r.iH)(),s=(0,r.iH)(""),d=(0,r.iH)(!1),k=(0,r.iH)({}),v=()=>{d.value=!0,(0,t.Y3)(()=>l.value.focus()),(0,W.N)(W.O.GlobalSearch)},y=()=>{d.value=!1,l.value.blur(),w()},w=()=>{s.value="",k.value={}},p=async()=>{if(!s.value){w();return}try{k.value=await (0,n.HG)(s.value)}catch(e){console.error(e)}},_=(0,u.D)(p,500),g=e=>0!==Object.keys(e).length&&Object.values(e).every(e=>0===e),f=(0,t.Fl)(()=>Object.keys(k.value).length>0),b=(0,t.Fl)(()=>g(k.value));(0,t.YP)(s,_);let H=(0,r.iH)(JSON.parse(o.B.getLocal(L)||"[]"));(0,t.YP)(H,e=>{o.B.setLocal(L,JSON.stringify(e))},{deep:!0});let U=()=>{let e=s.value;if(!e)return;let l=H.value.filter(l=>l!==e);l.unshift(e),l.length>10&&l.pop(),H.value=l},C=e=>{s.value=e,(0,W.N)(W.O.SearchHistory)},x=()=>H.value=[];return(e,r)=>{let n=(0,t.Q2)("click-outside");return(0,t.wy)(((0,t.wg)(),(0,t.iD)("div",q,[(0,t._)("div",T,[(0,t._)("button",{class:"button-search",onClick:v},[(0,t.Wm)(h.Z,{"icon-name":"ic_search"})]),(0,t.wy)((0,t._)("input",{type:"search",class:"header-search-input",placeholder:c.t("header-search.placeholder"),"onUpdate:modelValue":r[0]||(r[0]=e=>s.value=e),ref_key:"searchInput",ref:l,onClick:v},null,8,O),[[a.nr,s.value,void 0,{trim:!0}]]),d.value?((0,t.wg)(),(0,t.iD)("button",{key:0,onClick:y,class:"button-cancel"},[(0,t.Wm)(h.Z,{"icon-name":"ic_cross"})])):(0,t.kq)("v-if",!0)]),d.value?((0,t.wg)(),(0,t.iD)("div",Y,[b.value&&s.value.length?((0,t.wg)(),(0,t.iD)("div",j,[(0,t._)("span",null,(0,i.zw)(c.t("header-search.no-results-p1")),1),(0,t._)("span",null,(0,i.zw)(c.t("header-search.no-results-p2")),1)])):(0,t.kq)("v-if",!0),!f.value||b.value?((0,t.wg)(),(0,t.iD)(t.HY,{key:1},[(0,t.Wm)(Z,{searchHistory:H.value,onSelected:r[1]||(r[1]=e=>C(e)),onClearHistory:x},null,8,["searchHistory"]),(0,t.Wm)(m,{"list-title":c.t("header-search.extended-search"),"list-icon":"ic_filters",items:e.sectionsLinkData},null,8,["list-title","items"]),(0,t.Wm)(m,{"list-title":c.t("header-search.try-luck"),"list-icon":"ic_dice",items:e.randomLinkData},null,8,["list-title","items"])],64)):((0,t.wg)(),(0,t.j4)(D,{key:2,"list-title":c.t("header-search.matches"),"search-url":e.searchUrl,items:k.value,"search-tabs-url":e.searchTabsUrl,"search-query":s.value,onSelected:U},null,8,["list-title","search-url","items","search-tabs-url","search-query"]))])):(0,t.kq)("v-if",!0)])),[[n,y]])}}}),F=S}}]);