import{J as E,o as n,a as r,b as u,u as t,d as e,t as l,f as _,n as y,w as N,v as V,e as m,F as p,h as b,j as v,i as C,X as j,g as $,k as F}from"./app-fc82053b.js";import{u as L}from"./Crud-4cc9f2c9.js";import{u as K}from"./Validate-30abee96.js";import{A as T}from"./AdminLayout-5ced846c.js";import"./toastr-17c50d69.js";const U={class:"card card-action"},B={class:"card-header"},I=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"Repairs")],-1),M={class:"card-action-element"},q={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},H={class:"offcanvas-header"},O={id:"offCanvasFormLabel",class:"offcanvas-title"},R={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},z={class:"offcanvas-body pt-0 mx-0 flex-grow-0"},J={class:"form-group mb-3"},X=e("label",{for:""},"Status",-1),G={class:"invalid-feedback"},W={key:0,class:"form-group"},Y=e("label",{for:""},"Amount",-1),Z={class:"input-group"},D=e("span",{class:"input-group-text"},"PHP",-1),ee={class:"invalid-feedback"},te=["disabled"],se={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},oe=["disabled"],ae={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ne={class:"card-body"},re={class:"row justify-content-between"},le={class:"col-auto"},ie={class:"d-flex align-items-center gap-2"},de=e("div",{class:"w-auto"},"Show",-1),ce={class:"flex-1"},ue=["value"],_e=["value"],me=e("div",{class:"w-auto"},"entries",-1),ve={class:"col-auto"},he={class:"d-flex gap-2 align-items-center"},pe=e("div",{class:"w-auto"},"Search:",-1),fe={class:"flex-1"},ye=["value"],be={class:"table-responsive text-nowrap"},ge={class:"table"},ke={class:"table-light"},Ce=e("th",null,null,-1),we=e("th",null,"Actions",-1),xe={class:"table-border-bottom-0"},Qe={key:0},Se=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Pe=[Se],Ae={class:"avatar avatar-lg"},Ee=["src"],Ne={style:{width:"35%"}},Ve={style:{width:"20%"}},je={style:{width:"30%"}},$e={class:"d-flex gap-2"},Fe=["onClick"],Le=e("i",{class:"ti ti-pencil"},null,-1),Ke=[Le],Te={key:0,class:"card-footer py-3 border-top"},Ue={class:"row justify-content-between"},Be={class:"col-auto"},Ie={class:"table_info"},Me={class:"col-auto"},qe={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},He={class:"pagination mb-0"},Oe=["innerHTML"],Re={layout:T,props:{vehicles:Object},computed:{}},ot=Object.assign(Re,{__name:"Index",setup(ze){E();const w={mechanic_name:null,mechanic_contact_number:null,mechanic_address:null,vehicle_id:null,item:null,total_amount:null,status:null},{validateForm:x}=K(),Q="repair";let{isLoadingComponents:Je,paginatedData:i,form:a,createPromise:g,updatePromise:k,deletePromise:Xe,handleCreate:Ge,serverQuery:d,handleServerQuery:c,handleEdit:S,formState:f}=L(w,Q);const P=["Pending","Confirmed"];return(We,o)=>{const A=C("v-select"),h=C("table-header");return n(),r(p,null,[u(t(j),{title:"Repairs"}),e("div",U,[e("div",B,[I,e("div",M,[e("div",q,[e("div",H,[e("h5",O,l(t(f)=="create"?"Add":"Update")+" Status ",1),t(a).processing?_("",!0):(n(),r("button",R))]),e("div",z,[e("div",J,[X,u(A,{options:P,modelValue:t(a).status,"onUpdate:modelValue":[o[0]||(o[0]=s=>t(a).status=s),o[1]||(o[1]=s=>t(a).clearErrors("status"))],label:"name",class:y(["custom-select",{"is-invalid":t(a).errors.status}]),placeholder:"Select Status"},null,8,["modelValue","class"]),e("div",G,l(t(a).errors.status),1)]),t(a).status==="Confirmed"?(n(),r("div",W,[Y,e("div",Z,[D,N(e("input",{id:"modalEditUserPhone",name:"modalEditUserPhone",class:y(["form-control phone-number-mask",{"is-invalid":t(a).errors.total_amount}]),"onUpdate:modelValue":o[2]||(o[2]=s=>t(a).total_amount=s),onInput:o[3]||(o[3]=s=>{t(a).clearErrors("total_amount"),t(x)(["required"],t(a),s.target.value,"total_amount")}),placeholder:"Enter Amount"},null,34),[[V,t(a).total_amount]])]),e("div",ee,l(t(a).errors.total_amount),1)])):_("",!0),t(f)=="create"?(n(),r("button",{key:1,class:"btn btn-primary",onClick:o[4]||(o[4]=(...s)=>t(g)&&t(g)(...s)),disabled:t(a).processing||t(a).hasErrors},[t(a).processing?(n(),r("span",se)):_("",!0),m(" Save ")],8,te)):_("",!0),t(f)=="update"?(n(),r("button",{key:2,class:"btn btn-primary",onClick:o[5]||(o[5]=(...s)=>t(k)&&t(k)(...s)),disabled:t(a).processing||t(a).hasErrors,style:{"margin-top":"20px"}},[t(a).processing?(n(),r("span",ae)):_("",!0),m(" Save changes ")],8,oe)):_("",!0)])])])]),e("div",ne,[e("div",re,[e("div",le,[e("div",ie,[de,e("div",ce,[e("select",{class:"form-select",value:t(d).perPage,onInput:o[6]||(o[6]=s=>t(c)("perPage",s.target.value))},[(n(),r(p,null,b([5,10,25,50,100],s=>e("option",{value:String(s),key:s},l(s),9,_e)),64))],40,ue)]),me])]),e("div",ve,[e("div",he,[pe,e("div",fe,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:t(d).query,onInput:o[7]||(o[7]=s=>t(c)("query",s.target.value))},null,40,ye)])])])])]),e("div",be,[e("table",ge,[e("thead",ke,[e("tr",null,[Ce,u(h,{style:{width:"35%"},onClick:o[8]||(o[8]=s=>t(c)("sort","mechanic_name")),serverQuery:t(d),serverQueryKey:"mechanic_name"},{default:v(()=>[m(" Dryver Name ")]),_:1},8,["serverQuery"]),u(h,{style:{width:"35%"},onClick:o[9]||(o[9]=s=>t(c)("sort","mechanic_name")),serverQuery:t(d),serverQueryKey:"mechanic_name"},{default:v(()=>[m(" Amount ")]),_:1},8,["serverQuery"]),u(h,{style:{width:"35%"},onClick:o[10]||(o[10]=s=>t(c)("sort","mechanic_name")),serverQuery:t(d),serverQueryKey:"mechanic_name"},{default:v(()=>[m(" Status ")]),_:1},8,["serverQuery"]),u(h,{style:{width:"35%"},onClick:o[11]||(o[11]=s=>t(c)("sort","mechanic_name")),serverQuery:t(d),serverQueryKey:"mechanic_name"},{default:v(()=>[m(" Mechanic Name ")]),_:1},8,["serverQuery"]),u(h,{style:{width:"20%"},onClick:o[12]||(o[12]=s=>t(c)("sort","mechanic_contact_number")),serverQuery:t(d),serverQueryKey:"mechanic_contact_number"},{default:v(()=>[m(" Contact Number ")]),_:1},8,["serverQuery"]),u(h,{style:{width:"20%"},onClick:o[13]||(o[13]=s=>t(c)("sort","mechanic_address")),serverQuery:t(d),serverQueryKey:"mechanic_address"},{default:v(()=>[m(" Address ")]),_:1},8,["serverQuery"]),we])]),e("tbody",xe,[t(i).data.length<=0?(n(),r("tr",Qe,Pe)):_("",!0),(n(!0),r(p,null,b(t(i).data,s=>(n(),r("tr",{key:s},[e("td",null,[e("div",Ae,[e("img",{style:{"object-fit":"cover"},src:s.user.profile_photo_url,alt:"Avatar",class:"rounded-circle"},null,8,Ee)])]),e("td",null,l(s.user.name),1),e("td",null,l(s.total_amount),1),e("td",null,l(s.status),1),e("td",Ne,l(s.mechanic_name),1),e("td",Ve,l(s.mechanic_contact_number),1),e("td",je,l(s.mechanic_address),1),e("td",null,[e("div",$e,[e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:Ye=>t(S)(s),href:"javascript:void(0);"},Ke,8,Fe)])])]))),128))])])]),t(i)&&t(i).meta.links?(n(),r("div",Te,[e("div",Ue,[e("div",Be,[e("div",Ie," Showing "+l(t(i).meta.from)+" to "+l(t(i).meta.to)+" of "+l(t(i).meta.total)+" entries ",1)]),e("div",Me,[e("nav",qe,[e("ul",He,[(n(!0),r(p,null,b(t(i).meta.links,s=>(n(),r("li",{class:"page-item",key:s},[(n(),$(F(s.url?"inertia-link":"button"),{class:y(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:v(()=>[e("span",{innerHTML:s.label},null,8,Oe)]),_:2},1032,["class","href"]))]))),128))])])])])])):_("",!0)])],64)}}});export{ot as default};