"use strict";(self.webpackChunkficbook=self.webpackChunkficbook||[]).push([[968],{9968:(e,i,n)=>{n.r(i),n.d(i,{default:()=>I});var l=n(1101),a=n(1536),t=n(4569),c=n(3043),s=n(8032),o=n(7362),d=n(2967);let r={class:"d-flex flex-column gap-8"},p={class:"direction-selector"},u={class:"badge-icon-container"},_={class:"badge-text"},m={class:"description"},v={class:"option"},b={class:"badge-icon-container"},g={class:"badge-text"},f={class:"description"},w=["value"],h={key:0,class:"alert alert-mini alert-warning"},k=(0,l.aZ)({__name:"fanfic-direction-selector",props:{directionOptions:{},selectedDirectionId:{}},setup(e){let i=(0,a.iH)(e.selectedDirectionId?e.directionOptions.find(i=>i.id===e.selectedDirectionId)||null:e.directionOptions[0]);return(e,n)=>((0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("div",p,[(0,l.Wm)((0,a.SU)(c.Z),{modelValue:i.value,"onUpdate:modelValue":n[0]||(n[0]=e=>i.value=e),options:e.directionOptions,class:"common-select",label:"title",searchable:!1,clearable:!1,"clear-search-on-blur":()=>!1,components:{OpenIndicator:(0,a.SU)(o.$)}},{"selected-option":(0,l.w5)(e=>[(0,l._)("div",{class:(0,t.C_)(`badge-with-icon direction small-direction-${e.slug} selected-option-badge`)},[(0,l._)("div",u,[(0,l.Wm)(s.Z,{"icon-name":`ic_${e.slug}`},null,8,["icon-name"])]),(0,l._)("span",_,(0,t.zw)(e.title),1)],2),(0,l._)("span",m," ("+(0,t.zw)(e.description)+") ",1)]),option:(0,l.w5)(e=>[(0,l._)("div",v,[(0,l._)("div",{class:(0,t.C_)(`badge-with-icon direction small-direction-${e.slug}`)},[(0,l._)("div",b,[(0,l.Wm)(s.Z,{"icon-name":`ic_${e.slug}`},null,8,["icon-name"])]),(0,l._)("span",g,(0,t.zw)(e.title),1)],2),(0,l._)("span",f," ("+(0,t.zw)(e.description)+") ",1)])]),_:1},8,["modelValue","options","components"]),(0,l._)("input",{type:"hidden",name:"direction",value:i.value?.id},null,8,w)]),i.value?.is_lgbt?((0,l.wg)(),(0,l.iD)("div",h,(0,t.zw)(d.t("alert.fanfic-unavailable-for-rus-readers")),1)):(0,l.kq)("v-if",!0)]))}});var z=n(1334);let D=(0,z.Z)(k,[["__scopeId","data-v-1bc57638"]]),I=D}}]);