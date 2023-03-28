import{J as C,o as n,c as i,a as V,u as e,b as s,t as l,d as c,w as m,v,n as u,f as r,F as b,r as _,j as h,X as j,e as E,g as F,i as N}from"./app-5b5e10f9.js";import{u as U}from"./Crud-18ba0921.js";import{u as A}from"./Validate-ccd5609b.js";import{A as I}from"./AdminLayout-18d3ad7f.js";const P="/build/assets/5-7779eaf0.png";const L={class:"card card-action custom-container-card"},D={class:"card-header"},M=s("div",{class:"card-action-title align-items-center"},[s("h5",{class:"card-title"},"Vehicle")],-1),T={class:"card-action-element"},B={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},K={class:"offcanvas-header"},H={id:"offCanvasFormLabel",class:"offcanvas-title"},O={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},Q={class:"offcanvas-body mx-0 flex-grow-0 pt-0"},z={class:"form-group mb-3"},G=s("label",{for:""},[r("First Name "),s("span",{class:"required"},"*")],-1),J={class:"invalid-feedback"},X={class:"form-group mb-3"},R=s("label",{for:""},[r("Middle Name "),s("span",{class:"required"},"*")],-1),W={class:"invalid-feedback"},Y={class:"form-group mb-3"},Z=s("label",{for:""},[r("Last Name "),s("span",{class:"required"},"*")],-1),$={class:"invalid-feedback"},ee=h('<div class="form-group mb-3"><label for="">Select Province <span class="required">*</span></label><select class="form-select" id="basic-default-country" required><option value="">Select Province</option><option value="usa">USA</option><option value="uk">UK</option><option value="france">France</option><option value="australia">Australia</option><option value="spain">Spain</option></select></div><div class="form-group mb-3"><label for="">Select City <span class="required">*</span></label><select class="form-select" id="basic-default-country" required><option value="">Select City</option><option value="usa">USA</option><option value="uk">UK</option><option value="france">France</option><option value="australia">Australia</option><option value="spain">Spain</option></select></div><div class="form-group mb-3"><label for="">Country <span class="required">*</span></label><select class="form-select" id="basic-default-country" required><option value="">Select Country</option><option value="usa">USA</option><option value="uk">UK</option><option value="france">France</option><option value="australia">Australia</option><option value="spain">Spain</option></select></div>',3),se={class:"form-group mb-3"},ae=s("label",{for:""},[r("Email "),s("span",{class:"required"},"*")],-1),te={class:"invalid-feedback"},oe={class:"form-group mb-3"},ne=s("label",{for:""},[r("Contact Number "),s("span",{class:"required"},"*")],-1),ie={class:"invalid-feedback"},le=h('<div class="form-group mb-3"><label for="">Driver Type <span class="required">*</span></label><select class="form-select" id="basic-default-country" required disabled><option value="">Private</option></select></div><div class="form-group mb-3"><label for="">Status <span class="required">*</span></label><select class="form-select" id="basic-default-country" required disabled><option value="">Driving</option></select></div>',2),re=["disabled"],de={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ce=["disabled"],ue={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},pe={class:"card-body"},me={class:"row justify-content-between"},ve={class:"col-auto"},be={class:"d-flex align-items-center gap-2"},fe=s("div",{class:"w-auto"},"Show",-1),_e={class:"flex-1"},he=["value"],ge=["value"],ye=s("div",{class:"w-auto"},"entries",-1),xe={class:"col-auto"},ke={class:"d-flex gap-2 align-items-center"},we=s("div",{class:"w-auto"},"Search:",-1),Se={class:"flex-1"},qe=["value"],Ce={class:"row"},Ve=h('<div class="card custom-card__hero"><div class="card-body text-center"><div class="dropdown btn-pinned"><button type="button" class="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="ti ti-dots-vertical text-muted"></i></button><ul class="dropdown-menu dropdown-menu-end"><li><a class="dropdown-item" href="javascript:void(0);">Share connection</a></li><li><a class="dropdown-item" href="javascript:void(0);">Block connection</a></li><li><hr class="dropdown-divider"></li><li><a class="dropdown-item text-danger" href="javascript:void(0);">Delete</a></li></ul></div><div class="mx-auto my-3"><img src="'+P+'" alt="Avatar Image" class="rounded-circle w-px-100"></div><h4 class="mb-1 card-title">Mark Gilbert</h4><span class="pb-1">London UK</span><br><span class="pb-1">email@email.com</span><h6 class="pb-1">+63999132312312</h6><div class="d-flex align-items-center justify-content-center my-3 gap-2"><a href="javascript:;"><span class="badge bg-label-warning">Driving..</span></a></div><div class="d-flex align-items-center justify-content-around my-3 py-1"><div><h4 class="mb-0">18</h4><span>Projects</span></div><div><h4 class="mb-0">834</h4><span>Tasks</span></div><div><h4 class="mb-0">129</h4><span>Connections</span></div></div><div class="d-flex align-items-center justify-content-center"><a href="javascript:;" class="btn btn-primary d-flex align-items-center me-3"><i class="ti-xs me-1 ti ti-car me-1"></i>Manage Vehicles</a><a href="javascript:;" class="btn btn-label-secondary btn-icon"><i class="ti ti-mail ti-sm"></i></a></div></div></div>',1),je=[Ve],Ee={key:0,class:"card-footer py-3"},Fe={class:"row justify-content-between"},Ne={class:"col-auto"},Ue={class:"table_info"},Ae={class:"col-auto"},Ie={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Pe={class:"pagination mb-0"},Le=["innerHTML"],De={layout:I},Ge=Object.assign(De,{__name:"Index",setup(Me){C();const S={name:null},{validateForm:p}=A(),q="vehicles";let{paginatedData:d,form:t,createPromise:g,updatePromise:y,deletePromise:Te,handleCreate:x,serverQuery:k,handleServerQuery:w,handleEdit:Be,formState:f}=U(S,q);return(Ke,o)=>(n(),i(b,null,[V(e(j),{title:"Vehicle"}),s("div",L,[s("div",D,[M,s("div",T,[s("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...a)=>e(x)&&e(x)(...a)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"}," Add Vehicle "),s("div",B,[s("div",K,[s("h5",H,l(e(f)=="create"?"Add":"Update")+" Vehicle ",1),e(t).processing?c("",!0):(n(),i("button",O))]),s("div",Q,[s("div",z,[G,m(s("input",{type:"text",class:u(["form-control",{"is-invalid":e(t).errors.name}]),"onUpdate:modelValue":o[1]||(o[1]=a=>e(t).name=a),onInput:o[2]||(o[2]=a=>{e(t).clearErrors("name"),e(p)(["required"],e(t),a.target.value,"name")}),placeholder:"Enter First Name"},null,34),[[v,e(t).name]]),s("div",J,l(e(t).errors.name),1)]),s("div",X,[R,m(s("input",{type:"text",class:u(["form-control",{"is-invalid":e(t).errors.name}]),"onUpdate:modelValue":o[3]||(o[3]=a=>e(t).name=a),onInput:o[4]||(o[4]=a=>{e(t).clearErrors("name"),e(p)(["required"],e(t),a.target.value,"name")}),placeholder:"Enter Middle Name"},null,34),[[v,e(t).name]]),s("div",W,l(e(t).errors.name),1)]),s("div",Y,[Z,m(s("input",{type:"text",class:u(["form-control",{"is-invalid":e(t).errors.name}]),"onUpdate:modelValue":o[5]||(o[5]=a=>e(t).name=a),onInput:o[6]||(o[6]=a=>{e(t).clearErrors("name"),e(p)(["required"],e(t),a.target.value,"name")}),placeholder:"Enter Last Name"},null,34),[[v,e(t).name]]),s("div",$,l(e(t).errors.name),1)]),ee,s("div",se,[ae,m(s("input",{type:"email",class:u(["form-control",{"is-invalid":e(t).errors.name}]),"onUpdate:modelValue":o[7]||(o[7]=a=>e(t).name=a),onInput:o[8]||(o[8]=a=>{e(t).clearErrors("name"),e(p)(["required"],e(t),a.target.value,"name")}),placeholder:"Enter Email"},null,34),[[v,e(t).name]]),s("div",te,l(e(t).errors.name),1)]),s("div",oe,[ne,m(s("input",{type:"number",class:u(["form-control",{"is-invalid":e(t).errors.name}]),"onUpdate:modelValue":o[9]||(o[9]=a=>e(t).name=a),onInput:o[10]||(o[10]=a=>{e(t).clearErrors("name"),e(p)(["required"],e(t),a.target.value,"name")}),placeholder:"Contact Number"},null,34),[[v,e(t).name]]),s("div",ie,l(e(t).errors.name),1)]),le,e(f)=="create"?(n(),i("button",{key:0,class:"btn btn-primary",onClick:o[11]||(o[11]=(...a)=>e(g)&&e(g)(...a)),disabled:e(t).processing||e(t).hasErrors},[e(t).processing?(n(),i("span",de)):c("",!0),r(" Save ")],8,re)):c("",!0),e(f)=="update"?(n(),i("button",{key:1,class:"btn btn-primary",onClick:o[12]||(o[12]=(...a)=>e(y)&&e(y)(...a)),disabled:e(t).processing||e(t).hasErrors},[e(t).processing?(n(),i("span",ue)):c("",!0),r(" Save changes ")],8,ce)):c("",!0)])])])]),s("div",pe,[s("div",me,[s("div",ve,[s("div",be,[fe,s("div",_e,[s("select",{class:"form-select",value:e(k).perPage,onInput:o[13]||(o[13]=a=>e(w)("perPage",a.target.value))},[(n(),i(b,null,_([5,10,25,50,100],a=>s("option",{value:String(a),key:a},l(a),9,ge)),64))],40,he)]),ye])]),s("div",xe,[s("div",ke,[we,s("div",Se,[s("input",{type:"search",placeholder:"Search",class:"form-control",value:e(k).query,onInput:o[14]||(o[14]=a=>e(w)("query",a.target.value))},null,40,qe)])])])])]),s("div",Ce,[(n(),i(b,null,_(3,a=>s("div",{class:"col-xl-4 col-lg-4 col-md-4",key:a},je)),64))]),e(d)&&e(d).meta.links?(n(),i("div",Ee,[s("div",Fe,[s("div",Ne,[s("div",Ue," Showing "+l(e(d).meta.from)+" to "+l(e(d).meta.to)+" of "+l(e(d).meta.total)+" entries ",1)]),s("div",Ae,[s("nav",Ie,[s("ul",Pe,[(n(!0),i(b,null,_(e(d).meta.links,a=>(n(),i("li",{class:"page-item",key:a},[(n(),E(N(a.url?"inertia-link":"button"),{class:u(["page-link",{active:a.active}]),href:a.url,only:["data","params"]},{default:F(()=>[s("span",{innerHTML:a.label},null,8,Le)]),_:2},1032,["class","href"]))]))),128))])])])])])):c("",!0)])],64))}});export{Ge as default};
