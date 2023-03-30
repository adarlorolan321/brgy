import{J as C,o as n,c as i,a as E,u as e,b as s,d as l,t as r,e as c,w as m,v,n as u,F as _,r as b,f as w,X as F,g as U,h as N,i as j}from"./app-0bf5dc0c.js";import{u as A}from"./Crud-b5a7c951.js";import{u as V}from"./Validate-6468ae5e.js";import{A as I}from"./AdminLayout-b9d8c990.js";const L="/build/assets/auth-car3-login-illustration-black-e6043e4f.png",M="/build/assets/4-a9a3f60d.png";const P={class:"card card-action custom-container-card"},B={class:"card-header"},D=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"Rescuer")],-1),R={class:"card-action-element"},T=s("i",{class:"ti ti-plus ti-xs me-1"},null,-1),K={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},G={class:"offcanvas-header"},O={id:"offCanvasFormLabel",class:"offcanvas-title"},H={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},Q={class:"offcanvas-body mx-0 flex-grow-0 pt-0"},z={class:"form-group mb-3"},J=s("label",{for:""},[l("Email "),s("span",{class:"required"},"*")],-1),X={class:"invalid-feedback"},W={class:"form-group mb-3"},Y=s("label",{for:""},[l("First Name "),s("span",{class:"required"},"*")],-1),Z={class:"invalid-feedback"},$={class:"form-group mb-3"},ee=s("label",{for:""},[l("Middle Name "),s("span",{class:"required"},"*")],-1),se={class:"invalid-feedback"},te={class:"form-group mb-3"},ae=s("label",{for:""},[l("Last Name "),s("span",{class:"required"},"*")],-1),oe={class:"invalid-feedback"},ne={class:"form-group mb-3"},ie=s("label",{for:""},[l("Gender "),s("span",{class:"required"},"*")],-1),re={class:"invalid-feedback"},le=w('<div class="form-group mb-3"><label for="">Select Province <span class="required">*</span></label><select class="form-select" id="basic-default-country" required><option value="">Select Province</option><option value="usa">USA</option><option value="uk">UK</option><option value="france">France</option><option value="australia">Australia</option><option value="spain">Spain</option></select></div><div class="form-group mb-3"><label for="">Select City <span class="required">*</span></label><select class="form-select" id="basic-default-country" required><option value="">Select City</option><option value="usa">USA</option><option value="uk">UK</option><option value="france">France</option><option value="australia">Australia</option><option value="spain">Spain</option></select></div><div class="form-group mb-3"><label for="">Service <span class="required">*</span></label><select class="form-select" id="basic-default-country" required><option value="">Select Service</option><option value="usa">USA</option><option value="uk">UK</option><option value="france">France</option><option value="australia">Australia</option><option value="spain">Spain</option></select></div>',3),de=["disabled"],ce={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ue=["disabled"],pe={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},me={class:"card-body"},ve={class:"row justify-content-between"},_e={class:"col-auto"},fe={class:"d-flex align-items-center gap-2"},be=s("div",{class:"w-auto"},"Show",-1),he={class:"flex-1"},ge=["value"],ye=["value"],xe=s("div",{class:"w-auto"},"entries",-1),ke={class:"col-auto"},we={class:"d-flex gap-2 align-items-center"},Se=s("div",{class:"w-auto"},"Search:",-1),qe={class:"flex-1"},Ce=["value"],Ee={class:"row"},Fe=w('<div class="card custom-card__hero"><div class="user-profile-header-banner"><img src="'+L+'" alt=""></div><div class="card-body text-center"><div class="dropdown btn-pinned"><button type="button" class="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="ti ti-dots-vertical text-muted"></i></button><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="javascript:void(0);">Share connection</a></li><li><a class="dropdown-item" href="javascript:void(0);">Block connection</a></li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item text-danger" href="javascript:void(0);">Delete</a></li></ul></div><div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto hero-container"><img src="'+M+'" alt="Avatar Image" class="d-block ms-0 rounded-circle user-profile-img hero-profile"></div><h4 class="mb-1 card-title card-text">Mark Gilbert</h4><h6 class="mb-0 card-text" style="font-weight:400;">Open in Maps</h6><h6 class="mb-0 card-text" style="font-weight:400;">London UK</h6><h6 class="mb-0 card-text" style="font-weight:400;">email@email.com</h6><h6 class="pb-1 card-text">+63999132312312</h6><div class="d-flex align-items-center justify-content-center my-3 gap-2"></div><div class="d-flex align-items-center justify-content-center"><a href="javascript:;" class="btn btn-primary d-flex align-items-center me-3"><i class="ti-xs me-1 ti ti-truck me-1"></i>Manage Rescuer</a><a href="javascript:;" class="btn btn-label-secondary btn-icon"><i class="ti ti-mail ti-sm"></i></a></div></div></div>',1),Ue=[Fe],Ne={key:0,class:"card-footer py-3"},je={class:"row justify-content-between"},Ae={class:"col-auto"},Ve={class:"table_info"},Ie={class:"col-auto"},Le={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Me={class:"pagination mb-0"},Pe=["innerHTML"],Be={layout:I},ze=Object.assign(Be,{__name:"Index",setup(De){C();const S={name:null},{validateForm:p}=V(),q="rescuers";let{paginatedData:d,form:a,createPromise:h,updatePromise:g,deletePromise:Re,handleCreate:y,serverQuery:x,handleServerQuery:k,handleEdit:Te,formState:f}=A(S,q);return(Ke,o)=>(n(),i(_,null,[E(e(F),{title:"Rescuer"}),s("div",P,[s("div",B,[D,s("div",R,[s("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...t)=>e(y)&&e(y)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"},[T,l(" Add Rescuer ")]),s("div",K,[s("div",G,[s("h5",O,r(e(f)=="create"?"Add":"Update")+" Rescuer ",1),e(a).processing?c("",!0):(n(),i("button",H))]),s("div",Q,[s("div",z,[J,m(s("input",{type:"email",class:u(["form-control",{"is-invalid":e(a).errors.name}]),"onUpdate:modelValue":o[1]||(o[1]=t=>e(a).name=t),onInput:o[2]||(o[2]=t=>{e(a).clearErrors("name"),e(p)(["required"],e(a),t.target.value,"name")}),placeholder:"Enter Email"},null,34),[[v,e(a).name]]),s("div",X,r(e(a).errors.name),1)]),s("div",W,[Y,m(s("input",{type:"text",class:u(["form-control",{"is-invalid":e(a).errors.name}]),"onUpdate:modelValue":o[3]||(o[3]=t=>e(a).name=t),onInput:o[4]||(o[4]=t=>{e(a).clearErrors("name"),e(p)(["required"],e(a),t.target.value,"name")}),placeholder:"Enter First Name"},null,34),[[v,e(a).name]]),s("div",Z,r(e(a).errors.name),1)]),s("div",$,[ee,m(s("input",{type:"text",class:u(["form-control",{"is-invalid":e(a).errors.name}]),"onUpdate:modelValue":o[5]||(o[5]=t=>e(a).name=t),onInput:o[6]||(o[6]=t=>{e(a).clearErrors("name"),e(p)(["required"],e(a),t.target.value,"name")}),placeholder:"Enter Middle Name"},null,34),[[v,e(a).name]]),s("div",se,r(e(a).errors.name),1)]),s("div",te,[ae,m(s("input",{type:"text",class:u(["form-control",{"is-invalid":e(a).errors.name}]),"onUpdate:modelValue":o[7]||(o[7]=t=>e(a).name=t),onInput:o[8]||(o[8]=t=>{e(a).clearErrors("name"),e(p)(["required"],e(a),t.target.value,"name")}),placeholder:"Enter Last Name"},null,34),[[v,e(a).name]]),s("div",oe,r(e(a).errors.name),1)]),s("div",ne,[ie,m(s("input",{type:"text",class:u(["form-control",{"is-invalid":e(a).errors.name}]),"onUpdate:modelValue":o[9]||(o[9]=t=>e(a).name=t),onInput:o[10]||(o[10]=t=>{e(a).clearErrors("name"),e(p)(["required"],e(a),t.target.value,"name")}),placeholder:"Enter Gender"},null,34),[[v,e(a).name]]),s("div",re,r(e(a).errors.name),1)]),le,e(f)=="create"?(n(),i("button",{key:0,class:"btn btn-primary",onClick:o[11]||(o[11]=(...t)=>e(h)&&e(h)(...t)),disabled:e(a).processing||e(a).hasErrors},[e(a).processing?(n(),i("span",ce)):c("",!0),l(" Submit ")],8,de)):c("",!0),e(f)=="update"?(n(),i("button",{key:1,class:"btn btn-primary",onClick:o[12]||(o[12]=(...t)=>e(g)&&e(g)(...t)),disabled:e(a).processing||e(a).hasErrors},[e(a).processing?(n(),i("span",pe)):c("",!0),l(" Submit changes ")],8,ue)):c("",!0)])])])]),s("div",me,[s("div",ve,[s("div",_e,[s("div",fe,[be,s("div",he,[s("select",{class:"form-select",value:e(x).perPage,onInput:o[13]||(o[13]=t=>e(k)("perPage",t.target.value))},[(n(),i(_,null,b([5,10,25,50,100],t=>s("option",{value:String(t),key:t},r(t),9,ye)),64))],40,ge)]),xe])]),s("div",ke,[s("div",we,[Se,s("div",qe,[s("input",{type:"search",placeholder:"Search",class:"form-control",value:e(x).query,onInput:o[14]||(o[14]=t=>e(k)("query",t.target.value))},null,40,Ce)])])])])]),s("div",Ee,[(n(),i(_,null,b(3,t=>s("div",{class:"col-xl-4 col-lg-4 col-md-4",key:t},Ue)),64))]),e(d)&&e(d).meta.links?(n(),i("div",Ne,[s("div",je,[s("div",Ae,[s("div",Ve," Showing "+r(e(d).meta.from)+" to "+r(e(d).meta.to)+" of "+r(e(d).meta.total)+" entries ",1)]),s("div",Ie,[s("nav",Le,[s("ul",Me,[(n(!0),i(_,null,b(e(d).meta.links,t=>(n(),i("li",{class:"page-item",key:t},[(n(),U(j(t.url?"inertia-link":"button"),{class:u(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:N(()=>[s("span",{innerHTML:t.label},null,8,Pe)]),_:2},1032,["class","href"]))]))),128))])])])])])):c("",!0)])],64))}});export{ze as default};
