import{J as E,o as n,a as r,b as u,u as t,d as e,t as l,f as _,n as y,w as N,v as V,e as m,F as p,h as b,j as v,i as w,X as j,g as M,k as Y}from"./app-06a4dc19.js";import{u as $}from"./Crud-995edade.js";import{u as F}from"./Validate-7fe40d45.js";import{A as L}from"./AdminLayout-f00eb0ea.js";import"./toastr-922d3148.js";const I={class:"card card-action"},K={class:"card-header"},q=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"Repairs")],-1),R={class:"card-action-element"},T={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},U={class:"offcanvas-header"},B={id:"offCanvasFormLabel",class:"offcanvas-title"},H={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},O={class:"offcanvas-body pt-0 mx-0 flex-grow-0"},D={class:"form-group mb-3"},z=e("label",{for:""},"Status",-1),J={class:"invalid-feedback"},X={key:0,class:"form-group"},G=e("label",{for:""},"Amount",-1),W={class:"input-group"},Z=e("span",{class:"input-group-text"},"PHP",-1),ee={class:"invalid-feedback"},te=["disabled"],se={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},oe=["disabled"],ae={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ne={class:"card-body"},re={class:"row justify-content-between"},le={class:"col-auto"},ie={class:"d-flex align-items-center gap-2"},de=e("div",{class:"w-auto"},"Show",-1),ce={class:"flex-1"},ue=["value"],_e=["value"],me=e("div",{class:"w-auto"},"entries",-1),ve={class:"col-6"},he={class:"d-flex align-items-center"},pe=e("label",{for:"dateRangePicker",class:"form-label",style:{width:"100px"}},"Date Range",-1),fe={class:"input-group input-daterange",id:"bs-datepicker-daterange"},ye=["value"],be=e("span",{class:"input-group-text"},"to",-1),ge=["value"],ke={class:"col-auto"},we={class:"d-flex gap-2 align-items-center"},Ce=e("div",{class:"w-auto"},"Search:",-1),xe={class:"flex-1"},Qe=["value"],Se={class:"table-responsive text-nowrap"},Pe={class:"table"},Ae={class:"table-light"},Ee=e("th",null,null,-1),Ne=e("th",null,"Actions",-1),Ve={class:"table-border-bottom-0"},je={key:0},Me=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Ye=[Me],$e={class:"avatar avatar-lg"},Fe=["src"],Le={style:{width:"35%"}},Ie={style:{width:"20%"}},Ke={style:{width:"30%"}},qe={class:"d-flex gap-2"},Re=["onClick"],Te=e("i",{class:"ti ti-pencil"},null,-1),Ue=[Te],Be={key:0,class:"card-footer py-3 border-top"},He={class:"row justify-content-between"},Oe={class:"col-auto"},De={class:"table_info"},ze={class:"col-auto"},Je={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Xe={class:"pagination mb-0"},Ge=["innerHTML"],We={layout:L,props:{vehicles:Object},computed:{}},ct=Object.assign(We,{__name:"Index",setup(Ze){E();const C={mechanic_name:null,mechanic_contact_number:null,mechanic_address:null,vehicle_id:null,item:null,total_amount:null,status:null},{validateForm:x}=F(),Q="repair";let{isLoadingComponents:et,paginatedData:c,form:a,createPromise:g,updatePromise:k,deletePromise:tt,handleCreate:st,serverQuery:i,handleServerQuery:d,handleEdit:S,formState:f}=$(C,Q);const P=["Pending","Confirmed"];return(ot,o)=>{const A=w("v-select"),h=w("table-header");return n(),r(p,null,[u(t(j),{title:"Repairs"}),e("div",I,[e("div",K,[q,e("div",R,[e("div",T,[e("div",U,[e("h5",B,l(t(f)=="create"?"Add":"Update")+" Status ",1),t(a).processing?_("",!0):(n(),r("button",H))]),e("div",O,[e("div",D,[z,u(A,{options:P,modelValue:t(a).status,"onUpdate:modelValue":[o[0]||(o[0]=s=>t(a).status=s),o[1]||(o[1]=s=>t(a).clearErrors("status"))],label:"name",class:y(["custom-select",{"is-invalid":t(a).errors.status}]),placeholder:"Select Status"},null,8,["modelValue","class"]),e("div",J,l(t(a).errors.status),1)]),t(a).status==="Confirmed"?(n(),r("div",X,[G,e("div",W,[Z,N(e("input",{id:"modalEditUserPhone",name:"modalEditUserPhone",class:y(["form-control phone-number-mask",{"is-invalid":t(a).errors.total_amount}]),"onUpdate:modelValue":o[2]||(o[2]=s=>t(a).total_amount=s),onInput:o[3]||(o[3]=s=>{t(a).clearErrors("total_amount"),t(x)(["required"],t(a),s.target.value,"total_amount")}),placeholder:"Enter Amount"},null,34),[[V,t(a).total_amount]])]),e("div",ee,l(t(a).errors.total_amount),1)])):_("",!0),t(f)=="create"?(n(),r("button",{key:1,class:"btn btn-primary",onClick:o[4]||(o[4]=(...s)=>t(g)&&t(g)(...s)),disabled:t(a).processing||t(a).hasErrors},[t(a).processing?(n(),r("span",se)):_("",!0),m(" Save ")],8,te)):_("",!0),t(f)=="update"?(n(),r("button",{key:2,class:"btn btn-primary",onClick:o[5]||(o[5]=(...s)=>t(k)&&t(k)(...s)),disabled:t(a).processing||t(a).hasErrors,style:{"margin-top":"20px"}},[t(a).processing?(n(),r("span",ae)):_("",!0),m(" Save changes ")],8,oe)):_("",!0)])])])]),e("div",ne,[e("div",re,[e("div",le,[e("div",ie,[de,e("div",ce,[e("select",{class:"form-select",value:t(i).perPage,onInput:o[6]||(o[6]=s=>t(d)("perPage",s.target.value))},[(n(),r(p,null,b([5,10,25,50,100],s=>e("option",{value:String(s),key:s},l(s),9,_e)),64))],40,ue)]),me])]),e("div",ve,[e("div",he,[pe,e("div",fe,[e("input",{type:"date",id:"dateRangePicker",placeholder:"MM/DD/YYYY",class:"form-control",value:t(i).query,onInput:o[7]||(o[7]=s=>t(d)("created_at",s.target.value))},null,40,ye),be,e("input",{type:"date",placeholder:"MM/DD/YYYY",class:"form-control",value:t(i).query,onInput:o[8]||(o[8]=s=>t(d)("created_at",s.target.value))},null,40,ge)])])]),e("div",ke,[e("div",we,[Ce,e("div",xe,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:t(i).query,onInput:o[9]||(o[9]=s=>t(d)("query",s.target.value))},null,40,Qe)])])])])]),e("div",Se,[e("table",Pe,[e("thead",Ae,[e("tr",null,[Ee,u(h,{style:{width:"35%"},onClick:o[10]||(o[10]=s=>t(d)("sort","mechanic_name")),serverQuery:t(i),serverQueryKey:"mechanic_name"},{default:v(()=>[m(" Dryver Name ")]),_:1},8,["serverQuery"]),u(h,{style:{width:"35%"},onClick:o[11]||(o[11]=s=>t(d)("sort","mechanic_name")),serverQuery:t(i),serverQueryKey:"mechanic_name"},{default:v(()=>[m(" Amount ")]),_:1},8,["serverQuery"]),u(h,{style:{width:"35%"},onClick:o[12]||(o[12]=s=>t(d)("sort","mechanic_name")),serverQuery:t(i),serverQueryKey:"mechanic_name"},{default:v(()=>[m(" Status ")]),_:1},8,["serverQuery"]),u(h,{style:{width:"35%"},onClick:o[13]||(o[13]=s=>t(d)("sort","mechanic_name")),serverQuery:t(i),serverQueryKey:"mechanic_name"},{default:v(()=>[m(" Mechanic Name ")]),_:1},8,["serverQuery"]),u(h,{style:{width:"20%"},onClick:o[14]||(o[14]=s=>t(d)("sort","mechanic_contact_number")),serverQuery:t(i),serverQueryKey:"mechanic_contact_number"},{default:v(()=>[m(" Contact Number ")]),_:1},8,["serverQuery"]),u(h,{style:{width:"20%"},onClick:o[15]||(o[15]=s=>t(d)("sort","mechanic_address")),serverQuery:t(i),serverQueryKey:"mechanic_address"},{default:v(()=>[m(" Address ")]),_:1},8,["serverQuery"]),Ne])]),e("tbody",Ve,[t(c).data.length<=0?(n(),r("tr",je,Ye)):_("",!0),(n(!0),r(p,null,b(t(c).data,s=>(n(),r("tr",{key:s},[e("td",null,[e("div",$e,[e("img",{style:{"object-fit":"cover"},src:s.user.profile_photo_url,alt:"Avatar",class:"rounded-circle"},null,8,Fe)])]),e("td",null,l(s.user.name),1),e("td",null,l(s.total_amount),1),e("td",null,l(s.status),1),e("td",Le,l(s.mechanic_name),1),e("td",Ie,l(s.mechanic_contact_number),1),e("td",Ke,l(s.mechanic_address),1),e("td",null,[e("div",qe,[e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:at=>t(S)(s),href:"javascript:void(0);"},Ue,8,Re)])])]))),128))])])]),t(c)&&t(c).meta.links?(n(),r("div",Be,[e("div",He,[e("div",Oe,[e("div",De," Showing "+l(t(c).meta.from)+" to "+l(t(c).meta.to)+" of "+l(t(c).meta.total)+" entries ",1)]),e("div",ze,[e("nav",Je,[e("ul",Xe,[(n(!0),r(p,null,b(t(c).meta.links,s=>(n(),r("li",{class:"page-item",key:s},[(n(),M(Y(s.url?"inertia-link":"button"),{class:y(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:v(()=>[e("span",{innerHTML:s.label},null,8,Ge)]),_:2},1032,["class","href"]))]))),128))])])])])])):_("",!0)])],64)}}});export{ct as default};
