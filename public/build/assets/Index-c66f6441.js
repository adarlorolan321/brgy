import{J as I,o as n,a as i,b as g,u as s,d as e,e as d,t as l,f as c,w as R,v as V,n as y,g as k,F as _,h as p,k as C,j as x,X as B,l as Q}from"./app-95ad3807.js";import{u as T}from"./Crud-c777b422.js";import{u as q}from"./Validate-3a1b5ba3.js";import{A as M}from"./AdminLayout-cbc11565.js";const H={class:"card card-action"},O={class:"card-header"},U=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"Rescue Services")],-1),D={class:"card-action-element"},J=e("i",{class:"ti ti-plus ti-xs me-1"},null,-1),K={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},W={class:"offcanvas-header"},X={id:"offCanvasFormLabel",class:"offcanvas-title"},$={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},G={class:"offcanvas-body mx-0 flex-grow-0 pt-0"},Y={class:"form-group mb-3"},Z=e("label",{for:""},[d("Name "),e("span",{class:"required"},"*")],-1),ee={class:"invalid-feedback"},se={class:"form-group mb-4 dropzone-profile-photo"},te=e("label",{for:"name"},"Brand Icon",-1),oe={key:1},ae={class:"dropzone",ref:"dropzone"},ne=e("div",{class:"dz-message needsclick"}," Please Wait ",-1),ie=[ne],re={key:2,class:"v-invalid-feedback"},le=["disabled"],ce={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},de=["disabled"],_e={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ue={class:"card-body"},ve={class:"row justify-content-between"},me={class:"col-auto"},pe={class:"d-flex align-items-center gap-2"},he=e("div",{class:"w-auto"},"Show",-1),fe={class:"flex-1"},be=["value"],ge=["value"],ye=e("div",{class:"w-auto"},"entries",-1),ke={class:"col-auto"},Ce={class:"d-flex gap-2 align-items-center"},xe=e("div",{class:"w-auto"},"Search:",-1),we={class:"flex-1"},Se=["value"],Fe={class:"table-responsive text-nowrap"},je={class:"table"},Ee={class:"table-light"},Ne=e("th",null,null,-1),ze=e("th",null,"Actions",-1),Le={class:"table-border-bottom-0"},Pe={key:0},Ae=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Ie=[Ae],Re={class:"avatar avatar-lg"},Ve=["src"],Be={style:{width:"90%"}},Qe={class:"d-flex gap-2"},Te=["onClick"],qe=e("i",{class:"ti ti-pencil"},null,-1),Me=[qe],He=["onClick"],Oe=e("i",{class:"ti ti-trash"},null,-1),Ue=[Oe],De={key:0,class:"card-footer py-3 border-top"},Je={class:"row justify-content-between"},Ke={class:"col-auto"},We={class:"table_info"},Xe={class:"col-auto"},$e={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Ge={class:"pagination mb-0"},Ye=["innerHTML"],Ze={layout:M},ns=Object.assign(Ze,{__name:"Index",setup(es){I();const w={name:null,icon:null},{validateForm:S}=q(),F="rescue_services";let{isLoadingComponents:j,paginatedData:r,form:a,createPromise:h,updatePromise:f,deletePromise:E,handleCreate:b,serverQuery:u,handleServerQuery:v,handleEdit:N,formState:m}=T(w,F);return(z,o)=>{const L=x("dropzone"),P=x("table-header");return n(),i(_,null,[g(s(B),{title:"Rescue Services"}),e("div",H,[e("div",O,[U,e("div",D,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...t)=>s(b)&&s(b)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"},[J,d(" Add Rescue Service ")]),e("div",K,[e("div",W,[e("h5",X,l(s(m)=="create"?"Add":"Update")+" Rescue Service ",1),s(a).processing?c("",!0):(n(),i("button",$))]),e("div",G,[e("div",Y,[Z,R(e("input",{type:"text",class:y(["form-control",{"is-invalid":s(a).errors.name}]),"onUpdate:modelValue":o[1]||(o[1]=t=>s(a).name=t),onInput:o[2]||(o[2]=t=>{s(a).clearErrors("name"),s(S)(["required"],s(a),t.target.value,"name")}),placeholder:"Enter name"},null,34),[[V,s(a).name]]),e("div",ee,l(s(a).errors.name),1)]),e("div",se,[te,s(j)?(n(),k(L,{key:0,collection:"icon",url:z.route("api.media.upload"),type:"profile",model:"Rescue\\RescueService",value:s(a).icon,onInput:o[3]||(o[3]=t=>{s(a).icon=t,s(a).clearErrors("icon")}),message:"Drop files here or click to upload profile photo",acceptedFiles:"image/jpeg,image/png",onError:o[4]||(o[4]=t=>{t&&t[0]&&s(a).setError("icon",t[0])})},null,8,["url","value"])):(n(),i("div",oe,[e("div",ae,ie,512)])),s(a).errors.icon?(n(),i("div",re,l(s(a).errors.icon),1)):c("",!0)]),s(m)=="create"?(n(),i("button",{key:0,class:"btn btn-primary",onClick:o[5]||(o[5]=(...t)=>s(h)&&s(h)(...t)),disabled:s(a).processing||s(a).hasErrors},[s(a).processing?(n(),i("span",ce)):c("",!0),d(" Save ")],8,le)):c("",!0),s(m)=="update"?(n(),i("button",{key:1,class:"btn btn-primary",onClick:o[6]||(o[6]=(...t)=>s(f)&&s(f)(...t)),disabled:s(a).processing||s(a).hasErrors},[s(a).processing?(n(),i("span",_e)):c("",!0),d(" Save changes ")],8,de)):c("",!0)])])])]),e("div",ue,[e("div",ve,[e("div",me,[e("div",pe,[he,e("div",fe,[e("select",{class:"form-select",value:s(u).perPage,onInput:o[7]||(o[7]=t=>s(v)("perPage",t.target.value))},[(n(),i(_,null,p([5,10,25,50,100],t=>e("option",{value:String(t),key:t},l(t),9,ge)),64))],40,be)]),ye])]),e("div",ke,[e("div",Ce,[xe,e("div",we,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:s(u).query,onInput:o[8]||(o[8]=t=>s(v)("query",t.target.value))},null,40,Se)])])])])]),e("div",Fe,[e("table",je,[e("thead",Ee,[e("tr",null,[Ne,g(P,{style:{width:"90%"},onClick:o[9]||(o[9]=t=>s(v)("sort","name")),serverQuery:s(u),serverQueryKey:"name"},{default:C(()=>[d(" Name ")]),_:1},8,["serverQuery"]),ze])]),e("tbody",Le,[s(r).data.length<=0?(n(),i("tr",Pe,Ie)):c("",!0),(n(!0),i(_,null,p(s(r).data,t=>(n(),i("tr",{key:t},[e("td",null,[e("div",Re,[e("img",{style:{"object-fit":"cover"},src:t.icon_url,alt:"Avatar",class:"rounded-circle"},null,8,Ve)])]),e("td",Be,l(t.name),1),e("td",null,[e("div",Qe,[e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:A=>s(N)(t),href:"javascript:void(0);"},Me,8,Te),e("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:A=>s(E)(t.id)},Ue,8,He)])])]))),128))])])]),s(r)&&s(r).meta.links?(n(),i("div",De,[e("div",Je,[e("div",Ke,[e("div",We," Showing "+l(s(r).meta.from)+" to "+l(s(r).meta.to)+" of "+l(s(r).meta.total)+" entries ",1)]),e("div",Xe,[e("nav",$e,[e("ul",Ge,[(n(!0),i(_,null,p(s(r).meta.links,t=>(n(),i("li",{class:"page-item",key:t},[(n(),k(Q(t.url?"inertia-link":"button"),{class:y(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:C(()=>[e("span",{innerHTML:t.label},null,8,Ye)]),_:2},1032,["class","href"]))]))),128))])])])])])):c("",!0)])],64)}}});export{ns as default};
