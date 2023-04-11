import{J as C,o as n,c as r,a as E,u as s,b as e,d as l,t as i,e as c,w as m,v,n as u,F as f,r as b,f as k,X as F,h as A,i as U,j}from"./app-54eb06c7.js";import{u as N}from"./Crud-f1c3daf3.js";import{u as V}from"./Validate-892e06a5.js";import{A as I}from"./AdminLayout-c4d7b092.js";const P="/build/assets/4-a9a3f60d.png";const L={class:"card card-action custom-container-card"},M={class:"card-header"},D=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"Rescuer")],-1),B={class:"card-action-element"},R=e("i",{class:"ti ti-plus ti-xs me-1"},null,-1),T={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},K={class:"offcanvas-header"},O={id:"offCanvasFormLabel",class:"offcanvas-title"},z={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},G={class:"offcanvas-body mx-0 flex-grow-0 pt-0"},H={class:"form-group mb-3"},J=e("label",{for:""},[l("Email "),e("span",{class:"required"},"*")],-1),Q={class:"invalid-feedback"},X={class:"form-group mb-3"},W=e("label",{for:""},[l("First Name "),e("span",{class:"required"},"*")],-1),Y={class:"invalid-feedback"},Z={class:"form-group mb-3"},$=e("label",{for:""},[l("Middle Name "),e("span",{class:"required"},"*")],-1),ee={class:"invalid-feedback"},se={class:"form-group mb-3"},te=e("label",{for:""},[l("Last Name "),e("span",{class:"required"},"*")],-1),ae={class:"invalid-feedback"},oe={class:"form-group mb-3"},ne=e("label",{for:""},[l("Gender "),e("span",{class:"required"},"*")],-1),re={class:"invalid-feedback"},ie=k('<div class="form-group mb-3"><label for="">Select Province <span class="required">*</span></label><select class="form-select" id="basic-default-country" required><option value="">Select Province</option><option value="usa">USA</option><option value="uk">UK</option><option value="france">France</option><option value="australia">Australia</option><option value="spain">Spain</option></select></div><div class="form-group mb-3"><label for="">Select City <span class="required">*</span></label><select class="form-select" id="basic-default-country" required><option value="">Select City</option><option value="usa">USA</option><option value="uk">UK</option><option value="france">France</option><option value="australia">Australia</option><option value="spain">Spain</option></select></div><div class="form-group mb-3"><label for="">Service <span class="required">*</span></label><select class="select form-select" required multiple><option value="">Select Service</option><option value="usa">USA</option><option value="uk">UK</option><option value="france">France</option><option value="australia">Australia</option><option value="spain">Spain</option></select></div>',3),le=["disabled"],de={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},ce=["disabled"],ue={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},pe={class:"card-body"},me={class:"row justify-content-between"},ve={class:"col-3 pr-0"},fe={class:"d-flex align-items-center gap-2"},_e=e("div",{class:"w-auto"},"Show",-1),be={class:"flex-1"},he=["value"],ge=["value"],ye=e("div",{class:"w-auto"},"entries",-1),xe=k('<div class="col-5 pl-0"><div class="d-flex gap-2 align-items-center"><div class="w-auto">Filter by Address:</div><div class="form-group" style="width:65%;"><select class="form-select" id="basic-default-country" required><option value="" hidden>Select Address</option><option value="usa">Private</option><option value="uk">Public</option></select></div></div></div>',1),we={class:"col-auto"},ke={class:"d-flex gap-2 align-items-center"},Se=e("div",{class:"w-auto"},"Search:",-1),qe={class:"flex-1"},Ce=["value"],Ee={class:"row"},Fe=e("div",{class:"card custom-card__hero"},[e("div",{class:"user-profile-header-banner"},[e("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124202.94479554158!2d121.12289103286562!3d13.391135706669152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bce8d27f6f844d%3A0xf7cc1b1c943ab71b!2sCalapan%2C%20Oriental%20Mindoro!5e0!3m2!1sen!2sph!4v1681094441544!5m2!1sen!2sph",width:"100%",height:"250",style:{border:"0","border-top-left-radius":"5px","border-top-right-radius":"5px"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})]),e("div",{class:"card-body text-center"},[e("div",{class:"dropdown btn-pinned"},[e("button",{type:"button",class:"btn dropdown-toggle hide-arrow p-0","data-bs-toggle":"dropdown","aria-expanded":"false"},[e("i",{class:"ti ti-dots-vertical text-muted"})]),e("ul",{class:"dropdown-menu dropdown-menu-end"},[e("li",null,[e("a",{class:"dropdown-item",href:"javascript:void(0);"},"Share connection")]),e("li",null,[e("a",{class:"dropdown-item",href:"javascript:void(0);"},"Block connection")]),e("li",null,[e("hr",{class:"dropdown-divider"})]),e("li",null,[e("a",{class:"dropdown-item text-danger",href:"javascript:void(0);"},"Delete")])])]),e("div",{class:"flex-shrink-0 mt-n2 mx-sm-0 mx-auto hero-container"},[e("img",{src:P,alt:"Avatar Image",class:"d-block ms-0 rounded-circle user-profile-img hero-profile"})]),e("h4",{class:"mb-1 card-title card-text"},"Jane Doe"),e("h6",{class:"mb-0 card-text small-text",style:{"font-weight":"400"}},[e("a",{href:"https://www.google.com/maps/",target:"_blank"},"Open in Maps")]),e("h6",{class:"mb-0 card-text small-text",style:{"font-weight":"400"}},"London UK"),e("h6",{class:"mb-0 card-text small-text",style:{"font-weight":"400"}},"email@email.com"),e("h6",{class:"pb-1 card-text small-text"},"+63999132312312"),e("div",{class:"d-flex align-items-center justify-content-center my-3 gap-2"}),e("div",{class:"d-flex align-items-center justify-content-center"},[e("a",{href:"javascript:;",class:"btn btn-primary d-flex align-items-center me-3"},[e("i",{class:"ti-xs me-1 ti ti-truck me-1"}),l("Manage Rescuer")]),e("a",{href:"javascript:;",class:"btn btn-label-secondary btn-icon"},[e("i",{class:"ti ti-mail ti-sm"})])])])],-1),Ae=[Fe],Ue={key:0,class:"card-footer py-3"},je={class:"row justify-content-between"},Ne={class:"col-auto"},Ve={class:"table_info"},Ie={class:"col-auto"},Pe={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Le={class:"pagination mb-0"},Me=["innerHTML"],De={layout:I},Je=Object.assign(De,{__name:"Index",setup(Be){C();const S={name:null},{validateForm:p}=V(),q="rescuers";let{paginatedData:d,form:a,createPromise:h,updatePromise:g,deletePromise:Re,handleCreate:y,serverQuery:x,handleServerQuery:w,handleEdit:Te,formState:_}=N(S,q);return(Ke,o)=>(n(),r(f,null,[E(s(F),{title:"Rescuer"}),e("div",L,[e("div",M,[D,e("div",B,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=(...t)=>s(y)&&s(y)(...t)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"},[R,l(" Add Rescuer ")]),e("div",T,[e("div",K,[e("h5",O,i(s(_)=="create"?"Add":"Update")+" Rescuer ",1),s(a).processing?c("",!0):(n(),r("button",z))]),e("div",G,[e("div",H,[J,m(e("input",{type:"email",class:u(["form-control",{"is-invalid":s(a).errors.name}]),"onUpdate:modelValue":o[1]||(o[1]=t=>s(a).name=t),onInput:o[2]||(o[2]=t=>{s(a).clearErrors("name"),s(p)(["required"],s(a),t.target.value,"name")}),placeholder:"Enter Email"},null,34),[[v,s(a).name]]),e("div",Q,i(s(a).errors.name),1)]),e("div",X,[W,m(e("input",{type:"text",class:u(["form-control",{"is-invalid":s(a).errors.name}]),"onUpdate:modelValue":o[3]||(o[3]=t=>s(a).name=t),onInput:o[4]||(o[4]=t=>{s(a).clearErrors("name"),s(p)(["required"],s(a),t.target.value,"name")}),placeholder:"Enter First Name"},null,34),[[v,s(a).name]]),e("div",Y,i(s(a).errors.name),1)]),e("div",Z,[$,m(e("input",{type:"text",class:u(["form-control",{"is-invalid":s(a).errors.name}]),"onUpdate:modelValue":o[5]||(o[5]=t=>s(a).name=t),onInput:o[6]||(o[6]=t=>{s(a).clearErrors("name"),s(p)(["required"],s(a),t.target.value,"name")}),placeholder:"Enter Middle Name"},null,34),[[v,s(a).name]]),e("div",ee,i(s(a).errors.name),1)]),e("div",se,[te,m(e("input",{type:"text",class:u(["form-control",{"is-invalid":s(a).errors.name}]),"onUpdate:modelValue":o[7]||(o[7]=t=>s(a).name=t),onInput:o[8]||(o[8]=t=>{s(a).clearErrors("name"),s(p)(["required"],s(a),t.target.value,"name")}),placeholder:"Enter Last Name"},null,34),[[v,s(a).name]]),e("div",ae,i(s(a).errors.name),1)]),e("div",oe,[ne,m(e("input",{type:"text",class:u(["form-control",{"is-invalid":s(a).errors.name}]),"onUpdate:modelValue":o[9]||(o[9]=t=>s(a).name=t),onInput:o[10]||(o[10]=t=>{s(a).clearErrors("name"),s(p)(["required"],s(a),t.target.value,"name")}),placeholder:"Enter Gender"},null,34),[[v,s(a).name]]),e("div",re,i(s(a).errors.name),1)]),ie,s(_)=="create"?(n(),r("button",{key:0,class:"btn btn-primary",onClick:o[11]||(o[11]=(...t)=>s(h)&&s(h)(...t)),disabled:s(a).processing||s(a).hasErrors},[s(a).processing?(n(),r("span",de)):c("",!0),l(" Submit ")],8,le)):c("",!0),s(_)=="update"?(n(),r("button",{key:1,class:"btn btn-primary",onClick:o[12]||(o[12]=(...t)=>s(g)&&s(g)(...t)),disabled:s(a).processing||s(a).hasErrors},[s(a).processing?(n(),r("span",ue)):c("",!0),l(" Submit changes ")],8,ce)):c("",!0)])])])]),e("div",pe,[e("div",me,[e("div",ve,[e("div",fe,[_e,e("div",be,[e("select",{class:"form-select",value:s(x).perPage,onInput:o[13]||(o[13]=t=>s(w)("perPage",t.target.value))},[(n(),r(f,null,b([5,10,25,50,100],t=>e("option",{value:String(t),key:t},i(t),9,ge)),64))],40,he)]),ye])]),xe,e("div",we,[e("div",ke,[Se,e("div",qe,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:s(x).query,onInput:o[14]||(o[14]=t=>s(w)("query",t.target.value))},null,40,Ce)])])])])]),e("div",Ee,[(n(),r(f,null,b(3,t=>e("div",{class:"col-xl-4 col-lg-4 col-md-4 col-12",key:t},Ae)),64))]),s(d)&&s(d).meta.links?(n(),r("div",Ue,[e("div",je,[e("div",Ne,[e("div",Ve," Showing "+i(s(d).meta.from)+" to "+i(s(d).meta.to)+" of "+i(s(d).meta.total)+" entries ",1)]),e("div",Ie,[e("nav",Pe,[e("ul",Le,[(n(!0),r(f,null,b(s(d).meta.links,t=>(n(),r("li",{class:"page-item",key:t},[(n(),A(j(t.url?"inertia-link":"button"),{class:u(["page-link",{active:t.active}]),href:t.url,only:["data","params"]},{default:U(()=>[e("span",{innerHTML:t.label},null,8,Me)]),_:2},1032,["class","href"]))]))),128))])])])])])):c("",!0)])],64))}});export{Je as default};
