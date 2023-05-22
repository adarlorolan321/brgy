import{u as $}from"./Crud-ae2ec378.js";import{u as j}from"./Validate-ceb3858e.js";import{J as V,o,a as n,b as d,u as t,d as e,t as r,f as h,n as k,e as u,F as p,h as f,k as m,j as C,X as A,g as K,l as L}from"./app-f36329a4.js";import{A as P}from"./AdminLayout-5097ee31.js";import"./toastr-d4d91efb.js";const F={class:"card card-action"},E={class:"card-header"},B=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"Repairs")],-1),T={class:"card-action-element"},I={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},M={class:"offcanvas-header"},O={id:"offCanvasFormLabel",class:"offcanvas-title"},q={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},H={class:"offcanvas-body pt-0 mx-0 flex-grow-0"},R={class:"form-group mb-5"},U=e("label",{for:""},"Status",-1),z={class:"invalid-feedback"},J=["disabled"],X={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},G=["disabled"],W={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Y={class:"card-body"},Z={class:"row justify-content-between"},D={class:"col-auto"},ee={class:"d-flex align-items-center gap-2"},te=e("div",{class:"w-auto"},"Show",-1),se={class:"flex-1"},ae=["value"],oe=["value"],ne=e("div",{class:"w-auto"},"entries",-1),re={class:"col-auto"},le={class:"d-flex gap-2 align-items-center"},ie=e("div",{class:"w-auto"},"Search:",-1),ce={class:"flex-1"},de=["value"],ue={class:"table-responsive text-nowrap"},_e={class:"table"},me={class:"table-light"},ve=e("th",null,null,-1),he=e("th",null,"Actions",-1),pe={class:"table-border-bottom-0"},ye={key:0},fe=e("td",{colspan:"999999",class:"text-center"}," No item found ",-1),be=[fe],ge=e("td",null,[e("div",{class:"avatar avatar-lg"},[e("img",{style:{"object-fit":"cover"},src:"",alt:"Avatar",class:"rounded-circle"})])],-1),ke={style:{width:"35%"}},Ce={style:{width:"20%"}},we={style:{width:"30%"}},Qe={class:"d-flex gap-2"},xe=["onClick"],Se=e("i",{class:"ti ti-pencil"},null,-1),Ne=[Se],$e={key:0,class:"card-footer py-3 border-top"},je={class:"row justify-content-between"},Ve={class:"col-auto"},Ae={class:"table_info"},Ke={class:"col-auto"},Le={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Pe={class:"pagination mb-0"},Fe=["innerHTML"],Ee={layout:P,props:{vehicles:Object},computed:{}},Xe=Object.assign(Ee,{__name:"Index",setup(Be){V();const w={mechanic_name:null,mechanic_contact_number:null,mechanic_address:null,vehicle_id:null,item:null,total_amount:null,status:null};j();const Q="repair";let{isLoadingComponents:Te,paginatedData:_,form:l,createPromise:b,updatePromise:g,deletePromise:Ie,handleCreate:Me,serverQuery:i,handleServerQuery:c,handleEdit:x,formState:y}=$(w,Q);const S=["Pending","Confirmed"];return(Oe,a)=>{const N=C("v-select"),v=C("table-header");return o(),n(p,null,[d(t(A),{title:"Repairs"}),e("div",F,[e("div",E,[B,e("div",T,[e("div",I,[e("div",M,[e("h5",O,r(t(y)=="create"?"Add":"Update")+" Status ",1),t(l).processing?h("",!0):(o(),n("button",q))]),e("div",H,[e("div",R,[U,d(N,{options:S,modelValue:t(l).status,"onUpdate:modelValue":[a[0]||(a[0]=s=>t(l).status=s),a[1]||(a[1]=s=>t(l).clearErrors("status"))],label:"name",class:k(["custom-select",{"is-invalid":t(l).errors.status}]),placeholder:"Select Status"},null,8,["modelValue","class"]),e("div",z,r(t(l).errors.status),1)]),t(y)=="create"?(o(),n("button",{key:0,class:"btn btn-primary",onClick:a[2]||(a[2]=(...s)=>t(b)&&t(b)(...s)),disabled:t(l).processing||t(l).hasErrors},[t(l).processing?(o(),n("span",X)):h("",!0),u(" Save ")],8,J)):h("",!0),t(y)=="update"?(o(),n("button",{key:1,class:"btn btn-primary",onClick:a[3]||(a[3]=(...s)=>t(g)&&t(g)(...s)),disabled:t(l).processing||t(l).hasErrors,style:{"margin-top":"-35px"}},[t(l).processing?(o(),n("span",W)):h("",!0),u(" Save changes ")],8,G)):h("",!0)])])])]),e("div",Y,[e("div",Z,[e("div",D,[e("div",ee,[te,e("div",se,[e("select",{class:"form-select",value:t(i).perPage,onInput:a[4]||(a[4]=s=>t(c)("perPage",s.target.value))},[(o(),n(p,null,f([5,10,25,50,100],s=>e("option",{value:String(s),key:s},r(s),9,oe)),64))],40,ae)]),ne])]),e("div",re,[e("div",le,[ie,e("div",ce,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:t(i).query,onInput:a[5]||(a[5]=s=>t(c)("query",s.target.value))},null,40,de)])])])])]),e("div",ue,[e("table",_e,[e("thead",me,[e("tr",null,[ve,d(v,{style:{width:"35%"},onClick:a[6]||(a[6]=s=>t(c)("sort","mechanic_name")),serverQuery:t(i),serverQueryKey:"mechanic_name"},{default:m(()=>[u(" Dryver Name ")]),_:1},8,["serverQuery"]),d(v,{style:{width:"35%"},onClick:a[7]||(a[7]=s=>t(c)("sort","mechanic_name")),serverQuery:t(i),serverQueryKey:"mechanic_name"},{default:m(()=>[u(" Service ")]),_:1},8,["serverQuery"]),d(v,{style:{width:"35%"},onClick:a[8]||(a[8]=s=>t(c)("sort","mechanic_name")),serverQuery:t(i),serverQueryKey:"mechanic_name"},{default:m(()=>[u(" Amount ")]),_:1},8,["serverQuery"]),d(v,{style:{width:"35%"},onClick:a[9]||(a[9]=s=>t(c)("sort","mechanic_name")),serverQuery:t(i),serverQueryKey:"mechanic_name"},{default:m(()=>[u(" Status ")]),_:1},8,["serverQuery"]),d(v,{style:{width:"35%"},onClick:a[10]||(a[10]=s=>t(c)("sort","mechanic_name")),serverQuery:t(i),serverQueryKey:"mechanic_name"},{default:m(()=>[u(" Mechanic Name ")]),_:1},8,["serverQuery"]),d(v,{style:{width:"20%"},onClick:a[11]||(a[11]=s=>t(c)("sort","mechanic_contact_number")),serverQuery:t(i),serverQueryKey:"mechanic_contact_number"},{default:m(()=>[u(" Contact Number ")]),_:1},8,["serverQuery"]),d(v,{style:{width:"20%"},onClick:a[12]||(a[12]=s=>t(c)("sort","mechanic_address")),serverQuery:t(i),serverQueryKey:"mechanic_address"},{default:m(()=>[u(" Address ")]),_:1},8,["serverQuery"]),he])]),e("tbody",pe,[t(_).data.length<=0?(o(),n("tr",ye,be)):h("",!0),(o(!0),n(p,null,f(t(_).data,s=>(o(),n("tr",{key:s},[ge,e("td",null,r(s.user.name),1),e("td",null,r(s.item),1),e("td",null,r(s.total_amount),1),e("td",null,r(s.status),1),e("td",ke,r(s.mechanic_name),1),e("td",Ce,r(s.mechanic_contact_number),1),e("td",we,r(s.mechanic_address),1),e("td",null,[e("div",Qe,[e("a",{class:"btn btn-icon btn-label-primary waves-effect",onClick:qe=>t(x)(s),href:"javascript:void(0);"},Ne,8,xe)])])]))),128))])])]),t(_)&&t(_).meta.links?(o(),n("div",$e,[e("div",je,[e("div",Ve,[e("div",Ae," Showing "+r(t(_).meta.from)+" to "+r(t(_).meta.to)+" of "+r(t(_).meta.total)+" entries ",1)]),e("div",Ke,[e("nav",Le,[e("ul",Pe,[(o(!0),n(p,null,f(t(_).meta.links,s=>(o(),n("li",{class:"page-item",key:s},[(o(),K(L(s.url?"inertia-link":"button"),{class:k(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:m(()=>[e("span",{innerHTML:s.label},null,8,Fe)]),_:2},1032,["class","href"]))]))),128))])])])])])):h("",!0)])],64)}}});export{Xe as default};
