import{J as N,o,c as i,a as y,u as t,b as e,t as l,d,w as j,v as E,n as g,f as _,F as c,r as v,g as k,h as L,X as P,e as A,i as Q}from"./app-d58b28ed.js";import{u as q}from"./Crud-44109d34.js";import{u as B}from"./Validate-f0fd693d.js";import{A as I}from"./AdminLayout-2cc555b0.js";const M={class:"card card-action"},$={class:"card-header"},H=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"Vehicle Types")],-1),O={class:"card-action-element"},U={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},z={class:"offcanvas-header"},D={id:"offCanvasFormLabel",class:"offcanvas-title"},J={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},K={class:"offcanvas-body mt-4 mx-0 flex-grow-0"},X={class:"form-group mb-3"},G=e("label",{for:""},[_("Name "),e("span",{class:"required"},"*")],-1),R={class:"invalid-feedback"},W=["disabled"],Y={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Z=["disabled"],ee={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},te={class:"card-body"},se={class:"row justify-content-between"},ae={class:"col-auto"},oe={class:"d-flex align-items-center gap-2"},ne=e("div",{class:"w-auto"},"Show",-1),ie={class:"flex-1"},re=["value"],le=["value"],de=e("div",{class:"w-auto"},"entries",-1),ce={class:"col-auto"},_e={class:"d-flex gap-2 align-items-center"},ue=e("div",{class:"w-auto"},"Search:",-1),me={class:"flex-1"},he=["value"],ve={class:"table-responsive text-nowrap"},pe={class:"table"},fe={class:"table-light"},be=e("th",null,"Actions",-1),ye={class:"table-border-bottom-0"},ge={key:0},ke=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Ce=[ke],xe={style:{width:"60%"}},we={class:"d-flex gap-2"},Se=["onClick"],Ve=e("i",{class:"ti ti-pencil"},null,-1),Fe=[Ve],Te=["onClick"],Ne=e("i",{class:"ti ti-trash"},null,-1),je=[Ne],Ee={key:0,class:"card-footer py-3 border-top"},Le={class:"row justify-content-between"},Pe={class:"col-auto"},Ae={class:"table_info"},Qe={class:"col-auto"},qe={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Be={class:"pagination mb-0"},Ie=["innerHTML"],Me={layout:I},Je=Object.assign(Me,{__name:"Index",setup($e){N();const C={name:null},{validateForm:x}=B(),w="vehicle_types";let{paginatedData:r,form:n,createPromise:p,updatePromise:f,deletePromise:S,handleCreate:b,serverQuery:u,handleServerQuery:m,handleEdit:V,formState:h}=q(C,w);return(He,a)=>{const F=L("table-header");return o(),i(c,null,[y(t(P),{title:"Vehicle Types"}),e("div",M,[e("div",$,[H,e("div",O,[e("button",{class:"btn btn-primary",type:"button",onClick:a[0]||(a[0]=(...s)=>t(b)&&t(b)(...s)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Vehicle Type "),e("div",U,[e("div",z,[e("h5",D,l(t(h)=="create"?"Add":"Update")+" Vehicle Type ",1),t(n).processing?d("",!0):(o(),i("button",J))]),e("div",K,[e("div",X,[G,j(e("input",{type:"text",class:g(["form-control",{"is-invalid":t(n).errors.name}]),"onUpdate:modelValue":a[1]||(a[1]=s=>t(n).name=s),onInput:a[2]||(a[2]=s=>{t(n).clearErrors("name"),t(x)(["required"],t(n),s.target.value,"name")}),placeholder:"Enter name"},null,34),[[E,t(n).name]]),e("div",R,l(t(n).errors.name),1)]),t(h)=="create"?(o(),i("button",{key:0,class:"btn btn-primary",onClick:a[3]||(a[3]=(...s)=>t(p)&&t(p)(...s)),disabled:t(n).processing||t(n).hasErrors},[t(n).processing?(o(),i("span",Y)):d("",!0),_(" Save ")],8,W)):d("",!0),t(h)=="update"?(o(),i("button",{key:1,class:"btn btn-primary",onClick:a[4]||(a[4]=(...s)=>t(f)&&t(f)(...s)),disabled:t(n).processing||t(n).hasErrors},[t(n).processing?(o(),i("span",ee)):d("",!0),_(" Save changes ")],8,Z)):d("",!0)])])])]),e("div",te,[e("div",se,[e("div",ae,[e("div",oe,[ne,e("div",ie,[e("select",{class:"form-select",value:t(u).perPage,onInput:a[5]||(a[5]=s=>t(m)("perPage",s.target.value))},[(o(),i(c,null,v([5,10,25,50,100],s=>e("option",{value:String(s),key:s},l(s),9,le)),64))],40,re)]),de])]),e("div",ce,[e("div",_e,[ue,e("div",me,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:t(u).query,onInput:a[6]||(a[6]=s=>t(m)("query",s.target.value))},null,40,he)])])])])]),e("div",ve,[e("table",pe,[e("thead",fe,[e("tr",null,[y(F,{style:{width:"90%"},onClick:a[7]||(a[7]=s=>t(m)("sort","name")),serverQuery:t(u),serverQueryKey:"name"},{default:k(()=>[_(" Name ")]),_:1},8,["serverQuery"]),be])]),e("tbody",ye,[t(r).data.length<=0?(o(),i("tr",ge,Ce)):d("",!0),(o(!0),i(c,null,v(t(r).data,s=>(o(),i("tr",{key:s},[e("td",xe,l(s.name),1),e("td",null,[e("div",we,[e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:T=>t(V)(s),href:"javascript:void(0);"},Fe,8,Se),e("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:T=>t(S)(s.id)},je,8,Te)])])]))),128))])])]),t(r)&&t(r).meta.links?(o(),i("div",Ee,[e("div",Le,[e("div",Pe,[e("div",Ae," Showing "+l(t(r).meta.from)+" to "+l(t(r).meta.to)+" of "+l(t(r).meta.total)+" entries ",1)]),e("div",Qe,[e("nav",qe,[e("ul",Be,[(o(!0),i(c,null,v(t(r).meta.links,s=>(o(),i("li",{class:"page-item",key:s},[(o(),A(Q(s.url?"inertia-link":"button"),{class:g(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:k(()=>[e("span",{innerHTML:s.label},null,8,Ie)]),_:2},1032,["class","href"]))]))),128))])])])])])):d("",!0)])],64)}}});export{Je as default};
