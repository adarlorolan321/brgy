import{u as V}from"./Crud-786ef55f.js";import{u as K}from"./Validate-8784bf9c.js";import{J as A,o as n,c as r,a as d,u as s,b as e,t as a,e as h,n as k,d as u,F as y,r as f,i as _,h as C,X as L,f as P,j as F}from"./app-c4862a89.js";import{A as E}from"./AdminLayout-7f55e786.js";const B={class:"card card-action"},T={class:"card-header"},I=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"Repairs")],-1),M={class:"card-action-element"},O={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},q={class:"offcanvas-header"},H={id:"offCanvasFormLabel",class:"offcanvas-title"},R={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},U={class:"offcanvas-body pt-0 mx-0 flex-grow-0"},z={class:"form-group mb-5"},J=e("label",{for:""},"Status",-1),X={class:"invalid-feedback"},G=["disabled"],W={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Y=["disabled"],Z={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},D={class:"card-body"},ee={class:"row justify-content-between"},se={class:"col-auto"},te={class:"d-flex align-items-center gap-2"},oe=e("div",{class:"w-auto"},"Show",-1),ae={class:"flex-1"},ne=["value"],re=["value"],ie=e("div",{class:"w-auto"},"entries",-1),le={class:"col-auto"},ce={class:"d-flex gap-2 align-items-center"},de=e("div",{class:"w-auto"},"Search:",-1),ue={class:"flex-1"},_e=["value"],me={class:"table-responsive text-nowrap"},ve={class:"table"},he={class:"table-light"},ye=e("th",null,null,-1),pe=e("th",null,"Actions",-1),fe={class:"table-border-bottom-0"},be={key:0},ge=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),ke=[ge],Ce=e("td",null,[e("div",{class:"avatar avatar-lg"},[e("img",{style:{"object-fit":"cover"},src:"",alt:"Avatar",class:"rounded-circle"})])],-1),Qe={style:{width:"35%"}},we={style:{width:"20%"}},xe={style:{width:"30%"}},Se={class:"d-flex gap-2"},$e=["onClick"],je=e("i",{class:"ti ti-pencil"},null,-1),Ne=[je],Ve=["onClick"],Ke=e("i",{class:"ti ti-trash"},null,-1),Ae=[Ke],Le={key:0,class:"card-footer py-3 border-top"},Pe={class:"row justify-content-between"},Fe={class:"col-auto"},Ee={class:"table_info"},Be={class:"col-auto"},Te={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Ie={class:"pagination mb-0"},Me=["innerHTML"],Oe={layout:E,props:{vehicles:Object},computed:{}},We=Object.assign(Oe,{__name:"Index",setup(qe){A();const Q={mechanic_name:null,mechanic_contact_number:null,mechanic_address:null,vehicle_id:null,item:null,total_amount:null,status:null};K();const w="repair";let{isLoadingComponents:He,paginatedData:m,form:i,createPromise:b,updatePromise:g,deletePromise:x,handleCreate:Re,serverQuery:l,handleServerQuery:c,handleEdit:S,formState:p}=V(Q,w);const $=["Pending","Confirmed"];return(Ue,o)=>{const j=C("v-select"),v=C("table-header");return n(),r(y,null,[d(s(L),{title:"Repairs"}),e("div",B,[e("div",T,[I,e("div",M,[e("div",O,[e("div",q,[e("h5",H,a(s(p)=="create"?"Add":"Update")+" Status ",1),s(i).processing?h("",!0):(n(),r("button",R))]),e("div",U,[e("div",z,[J,d(j,{options:$,modelValue:s(i).status,"onUpdate:modelValue":[o[0]||(o[0]=t=>s(i).status=t),o[1]||(o[1]=t=>s(i).clearErrors("status"))],label:"name",class:k(["custom-select",{"is-invalid":s(i).errors.status}]),placeholder:"Select Status"},null,8,["modelValue","class"]),e("div",X,a(s(i).errors.status),1)]),s(p)=="create"?(n(),r("button",{key:0,class:"btn btn-primary",onClick:o[2]||(o[2]=(...t)=>s(b)&&s(b)(...t)),disabled:s(i).processing||s(i).hasErrors},[s(i).processing?(n(),r("span",W)):h("",!0),u(" Save ")],8,G)):h("",!0),s(p)=="update"?(n(),r("button",{key:1,class:"btn btn-primary",onClick:o[3]||(o[3]=(...t)=>s(g)&&s(g)(...t)),disabled:s(i).processing||s(i).hasErrors,style:{"margin-top":"-35px"}},[s(i).processing?(n(),r("span",Z)):h("",!0),u(" Save changes ")],8,Y)):h("",!0)])])])]),e("div",D,[e("div",ee,[e("div",se,[e("div",te,[oe,e("div",ae,[e("select",{class:"form-select",value:s(l).perPage,onInput:o[4]||(o[4]=t=>s(c)("perPage",t.target.value))},[(n(),r(y,null,f([5,10,25,50,100],t=>e("option",{value:String(t),key:t},a(t),9,re)),64))],40,ne)]),ie])]),e("div",le,[e("div",ce,[de,e("div",ue,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:s(l).query,onInput:o[5]||(o[5]=t=>s(c)("query",t.target.value))},null,40,_e)])])])])]),e("div",me,[e("table",ve,[e("thead",he,[e("tr",null,[ye,d(v,{style:{width:"35%"},onClick:o[6]||(o[6]=t=>s(c)("sort","mechanic_name")),serverQuery:s(l),serverQueryKey:"mechanic_name"},{default:_(()=>[u(" Dryver Name ")]),_:1},8,["serverQuery"]),d(v,{style:{width:"35%"},onClick:o[7]||(o[7]=t=>s(c)("sort","mechanic_name")),serverQuery:s(l),serverQueryKey:"mechanic_name"},{default:_(()=>[u(" Vehicle ")]),_:1},8,["serverQuery"]),d(v,{style:{width:"35%"},onClick:o[8]||(o[8]=t=>s(c)("sort","mechanic_name")),serverQuery:s(l),serverQueryKey:"mechanic_name"},{default:_(()=>[u(" Service ")]),_:1},8,["serverQuery"]),d(v,{style:{width:"35%"},onClick:o[9]||(o[9]=t=>s(c)("sort","mechanic_name")),serverQuery:s(l),serverQueryKey:"mechanic_name"},{default:_(()=>[u(" Amount ")]),_:1},8,["serverQuery"]),d(v,{style:{width:"35%"},onClick:o[10]||(o[10]=t=>s(c)("sort","mechanic_name")),serverQuery:s(l),serverQueryKey:"mechanic_name"},{default:_(()=>[u(" Status ")]),_:1},8,["serverQuery"]),d(v,{style:{width:"35%"},onClick:o[11]||(o[11]=t=>s(c)("sort","mechanic_name")),serverQuery:s(l),serverQueryKey:"mechanic_name"},{default:_(()=>[u(" Mechanic Name ")]),_:1},8,["serverQuery"]),d(v,{style:{width:"20%"},onClick:o[12]||(o[12]=t=>s(c)("sort","mechanic_contact_number")),serverQuery:s(l),serverQueryKey:"mechanic_contact_number"},{default:_(()=>[u(" Contact Number ")]),_:1},8,["serverQuery"]),d(v,{style:{width:"20%"},onClick:o[13]||(o[13]=t=>s(c)("sort","mechanic_address")),serverQuery:s(l),serverQueryKey:"mechanic_address"},{default:_(()=>[u(" Address ")]),_:1},8,["serverQuery"]),pe])]),e("tbody",fe,[s(m).data.length<=0?(n(),r("tr",be,ke)):h("",!0),(n(!0),r(y,null,f(s(m).data,t=>(n(),r("tr",{key:t},[Ce,e("td",null,a(t.user.name),1),e("td",null,a(t.vehicle.model)+" / "+a(t.vehicle.year),1),e("td",null,a(t.item),1),e("td",null,a(t.total_amount),1),e("td",null,a(t.status),1),e("td",Qe,a(t.mechanic_name),1),e("td",we,a(t.mechanic_contact_number),1),e("td",xe,a(t.mechanic_address),1),e("td",null,[e("div",Se,[e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:N=>s(S)(t),href:"javascript:void(0);"},Ne,8,$e),e("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:N=>s(x)(t.id)},Ae,8,Ve)])])]))),128))])])]),s(m)&&s(m).meta.links?(n(),r("div",Le,[e("div",Pe,[e("div",Fe,[e("div",Ee," Showing "+a(s(m).meta.from)+" to "+a(s(m).meta.to)+" of "+a(s(m).meta.total)+" entries ",1)]),e("div",Be,[e("nav",Te,[e("ul",Ie,[(n(!0),r(y,null,f(s(m).meta.links,t=>(n(),r("li",{class:"page-item",key:t},[(n(),P(F(t.url?"inertia-link":"button"),{class:k(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:_(()=>[e("span",{innerHTML:t.label},null,8,Me)]),_:2},1032,["class","href"]))]))),128))])])])])])):h("",!0)])],64)}}});export{We as default};
