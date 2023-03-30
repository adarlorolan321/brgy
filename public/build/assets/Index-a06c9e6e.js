import{J as P,o as n,c as i,a as g,u as s,b as e,d as c,t as l,e as d,w as A,v as I,n as y,g as k,F as _,r as p,h as C,j as x,X as Q,i as T}from"./app-0bf5dc0c.js";import{u as q}from"./Crud-b5a7c951.js";import{u as M}from"./Validate-6468ae5e.js";import{A as H}from"./AdminLayout-b9d8c990.js";const O={class:"card card-action"},U={class:"card-header"},D=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"Vehicle Brands")],-1),J={class:"card-action-element"},K=e("i",{class:"ti ti-plus ti-xs me-1"},null,-1),W={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},X={class:"offcanvas-header"},$={id:"offCanvasFormLabel",class:"offcanvas-title"},G={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},R={class:"offcanvas-body pt-0 mx-0 flex-grow-0"},Y={class:"form-group mb-3"},Z=e("label",{for:""},[c("Name "),e("span",{class:"required"},"*")],-1),ee={class:"invalid-feedback"},se={class:"form-group mb-4 dropzone-profile-photo"},te=e("label",{for:"name"},"Brand Icon",-1),oe={key:1},ae={class:"dropzone",ref:"dropzone"},ne=e("div",{class:"dz-message needsclick"}," Please Wait ",-1),ie=[ne],re={key:2,class:"v-invalid-feedback"},le=["disabled"],de={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ce=["disabled"],_e={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ue={class:"card-body"},he={class:"row justify-content-between"},me={class:"col-auto"},pe={class:"d-flex align-items-center gap-2"},ve=e("div",{class:"w-auto"},"Show",-1),be={class:"flex-1"},fe=["value"],ge=["value"],ye=e("div",{class:"w-auto"},"entries",-1),ke={class:"col-auto"},Ce={class:"d-flex gap-2 align-items-center"},xe=e("div",{class:"w-auto"},"Search:",-1),we={class:"flex-1"},Ve=["value"],Be={class:"table-responsive text-nowrap"},Fe={class:"table"},Se={class:"table-light"},je=e("th",null,null,-1),Ee=e("th",null,"Actions",-1),Ne={class:"table-border-bottom-0"},ze={key:0},Le=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),Pe=[Le],Ae={class:"avatar avatar-lg"},Ie=["src"],Qe={style:{width:"90%"}},Te={class:"d-flex gap-2"},qe=["onClick"],Me=e("i",{class:"ti ti-pencil"},null,-1),He=[Me],Oe=["onClick"],Ue=e("i",{class:"ti ti-trash"},null,-1),De=[Ue],Je={key:0,class:"card-footer py-3 border-top"},Ke={class:"row justify-content-between"},We={class:"col-auto"},Xe={class:"table_info"},$e={class:"col-auto"},Ge={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Re={class:"pagination mb-0"},Ye=["innerHTML"],Ze={layout:H},ns=Object.assign(Ze,{__name:"Index",setup(es){P();const w={name:null,brand_icon:null},{validateForm:V}=M(),B="vehicle_brands";let{isLoadingComponents:F,paginatedData:r,form:a,createPromise:v,updatePromise:b,deletePromise:S,handleCreate:f,serverQuery:u,handleServerQuery:h,handleEdit:j,formState:m}=q(w,B);return(E,o)=>{const N=x("dropzone"),z=x("table-header");return n(),i(_,null,[g(s(Q),{title:"Vehicle Brands"}),e("div",O,[e("div",U,[D,e("div",J,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...t)=>s(f)&&s(f)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"},[K,c(" Add Vehicle Brand ")]),e("div",W,[e("div",X,[e("h5",$,l(s(m)=="create"?"Add":"Update")+" Vehicle Brand ",1),s(a).processing?d("",!0):(n(),i("button",G))]),e("div",R,[e("div",Y,[Z,A(e("input",{type:"text",class:y(["form-control",{"is-invalid":s(a).errors.name}]),"onUpdate:modelValue":o[1]||(o[1]=t=>s(a).name=t),onInput:o[2]||(o[2]=t=>{s(a).clearErrors("name"),s(V)(["required"],s(a),t.target.value,"name")}),placeholder:"Enter name"},null,34),[[I,s(a).name]]),e("div",ee,l(s(a).errors.name),1)]),e("div",se,[te,s(F)?(n(),k(N,{key:0,collection:"brand_icon",url:E.route("api.media.upload"),type:"profile",model:"Vehicle\\VehicleBrand",value:s(a).brand_icon,onInput:o[3]||(o[3]=t=>{s(a).brand_icon=t,s(a).clearErrors("brand_icon")}),message:"Drop files here or click to upload profile photo",acceptedFiles:"image/jpeg,image/png",onError:o[4]||(o[4]=t=>{t&&t[0]&&s(a).setError("brand_icon",t[0])})},null,8,["url","value"])):(n(),i("div",oe,[e("div",ae,ie,512)])),s(a).errors.brand_icon?(n(),i("div",re,l(s(a).errors.brand_icon),1)):d("",!0)]),s(m)=="create"?(n(),i("button",{key:0,class:"btn btn-primary",onClick:o[5]||(o[5]=(...t)=>s(v)&&s(v)(...t)),disabled:s(a).processing||s(a).hasErrors},[s(a).processing?(n(),i("span",de)):d("",!0),c(" Save ")],8,le)):d("",!0),s(m)=="update"?(n(),i("button",{key:1,class:"btn btn-primary",onClick:o[6]||(o[6]=(...t)=>s(b)&&s(b)(...t)),disabled:s(a).processing||s(a).hasErrors},[s(a).processing?(n(),i("span",_e)):d("",!0),c(" Save changes ")],8,ce)):d("",!0)])])])]),e("div",ue,[e("div",he,[e("div",me,[e("div",pe,[ve,e("div",be,[e("select",{class:"form-select",value:s(u).perPage,onInput:o[7]||(o[7]=t=>s(h)("perPage",t.target.value))},[(n(),i(_,null,p([5,10,25,50,100],t=>e("option",{value:String(t),key:t},l(t),9,ge)),64))],40,fe)]),ye])]),e("div",ke,[e("div",Ce,[xe,e("div",we,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:s(u).query,onInput:o[8]||(o[8]=t=>s(h)("query",t.target.value))},null,40,Ve)])])])])]),e("div",Be,[e("table",Fe,[e("thead",Se,[e("tr",null,[je,g(z,{style:{width:"90%"},onClick:o[9]||(o[9]=t=>s(h)("sort","name")),serverQuery:s(u),serverQueryKey:"name"},{default:C(()=>[c(" Name ")]),_:1},8,["serverQuery"]),Ee])]),e("tbody",Ne,[s(r).data.length<=0?(n(),i("tr",ze,Pe)):d("",!0),(n(!0),i(_,null,p(s(r).data,t=>(n(),i("tr",{key:t},[e("td",null,[e("div",Ae,[e("img",{style:{"object-fit":"cover"},src:t.brand_icon_url,alt:"Avatar",class:"rounded-circle"},null,8,Ie)])]),e("td",Qe,l(t.name),1),e("td",null,[e("div",Te,[e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:L=>s(j)(t),href:"javascript:void(0);"},He,8,qe),e("a",{class:"btn btn-icon btn-label-danger waves-effect",href:"javascript:void(0);",onClick:L=>s(S)(t.id)},De,8,Oe)])])]))),128))])])]),s(r)&&s(r).meta.links?(n(),i("div",Je,[e("div",Ke,[e("div",We,[e("div",Xe," Showing "+l(s(r).meta.from)+" to "+l(s(r).meta.to)+" of "+l(s(r).meta.total)+" entries ",1)]),e("div",$e,[e("nav",Ge,[e("ul",Re,[(n(!0),i(_,null,p(s(r).meta.links,t=>(n(),i("li",{class:"page-item",key:t},[(n(),k(T(t.url?"inertia-link":"button"),{class:y(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:C(()=>[e("span",{innerHTML:t.label},null,8,Ye)]),_:2},1032,["class","href"]))]))),128))])])])])])):d("",!0)])],64)}}});export{ns as default};
