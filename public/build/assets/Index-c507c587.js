import{J as D,o as r,c as n,a as f,u as t,b as e,d as i,t as a,e as p,w as c,v as m,n as u,l as S,h as I,F as h,r as k,f as O,g as R,X as T,i as G,j as H,k as Q}from"./app-1e71164e.js";import{u as J}from"./Crud-0017f982.js";import{u as W}from"./Validate-8b3f2fc0.js";import{A as X}from"./AdminLayout-048a7e84.js";const K={class:"card card-action custom-container-card"},Y={class:"card-header"},Z=e("div",{class:"card-action-title align-items-center"},[e("h5",{class:"card-title"},"Rescuer")],-1),$={class:"card-action-element"},ee=e("i",{class:"ti ti-plus ti-xs me-1"},null,-1),te={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},se={class:"offcanvas-header"},oe={id:"offCanvasFormLabel",class:"offcanvas-title"},le={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},ae={class:"offcanvas-body mx-0 flex-grow-0 pt-0"},ie={class:"form-group mb-3"},re=e("label",{for:""},[i("Rescuer Type "),e("span",{class:"required"},"*")],-1),ne={class:"invalid-feedback"},de={class:"form-group mb-3"},ce=e("label",{for:""},[i("Rescuer Name "),e("span",{class:"required"},"*")],-1),ue={class:"invalid-feedback"},me={class:"form-group mb-3"},pe=e("label",{for:""},[i("Rescuer Contact Number "),e("span",{class:"required"},"*")],-1),_e={class:"invalid-feedback"},ve={class:"form-group mb-3"},fe=e("label",{for:""},[i("Rescuer Contact Number Status "),e("span",{class:"required"},"*")],-1),he=e("br",null,null,-1),be={class:"radio radio-primary mr-3"},ge=e("span",null,"Verified",-1),ye=e("span",{class:"checkmark"},null,-1),ke={class:"radio radio-primary mr-3"},xe=e("span",null,"Unverified",-1),we=e("span",{class:"checkmark"},null,-1),Ce={class:"form-group mb-3"},Ee=e("label",{for:""},[i("Rescuer Email "),e("span",{class:"required"},"*")],-1),qe={class:"invalid-feedback"},Ve={class:"form-group mb-3"},Se=e("label",{for:""},[i("Rescuer Messenger Link "),e("span",{class:"required"},"*")],-1),Ie={class:"invalid-feedback"},Re={class:"form-group mb-4 dropzone-profile-photo"},Ue=e("label",{for:"name"},"Upload Photo",-1),je={key:1},Le={class:"dropzone",ref:"dropzone"},Pe=e("div",{class:"dz-message needsclick"}," Please Wait ",-1),Fe=[Pe],Ne={key:2,class:"v-invalid-feedback"},Me={class:"form-group mb-3"},ze=e("label",{for:""},[i("Rescue Services "),e("span",{class:"required"},"*")],-1),Ae={class:"form-group mb-3"},Be=e("label",{for:""},[i("Latitude "),e("span",{class:"required"},"*")],-1),De={class:"invalid-feedback"},Oe={class:"form-group mb-3"},Te=e("label",{for:""},[i("Longtitude "),e("span",{class:"required"},"*")],-1),Ge={class:"invalid-feedback"},He={class:"form-group mb-3"},Qe=e("label",{for:""},[i("Gender "),e("span",{class:"required"},"*")],-1),Je={class:"invalid-feedback"},We={class:"form-group mb-3"},Xe=e("label",{for:""},[i("Select Province "),e("span",{class:"required"},"*")],-1),Ke={class:"form-group mb-3"},Ye=e("label",{for:""},[i("Select City "),e("span",{class:"required"},"*")],-1),Ze=["disabled"],$e={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},et=["disabled"],tt={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},st={class:"card-body"},ot={class:"row justify-content-between"},lt={class:"col-3 pr-0"},at={class:"d-flex align-items-center gap-2"},it=e("div",{class:"w-auto"},"Show",-1),rt={class:"flex-1"},nt=["value"],dt=["value"],ct=e("div",{class:"w-auto"},"entries",-1),ut=O('<div class="col-5 pl-0"><div class="d-flex gap-2 align-items-center"><div class="w-auto">Filter by Address:</div><div class="form-group" style="width:65%;"><select class="form-select" id="basic-default-country" required><option value="" hidden>Select Address</option><option value="usa">Private</option><option value="uk">Public</option></select></div></div></div>',1),mt={class:"col-auto"},pt={class:"d-flex gap-2 align-items-center"},_t=e("div",{class:"w-auto"},"Search:",-1),vt={class:"flex-1"},ft=["value"],ht={class:"row"},bt={class:"card custom-card__hero"},gt=e("div",{class:"user-profile-header-banner"},[e("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124202.94479554158!2d121.12289103286562!3d13.391135706669152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bce8d27f6f844d%3A0xf7cc1b1c943ab71b!2sCalapan%2C%20Oriental%20Mindoro!5e0!3m2!1sen!2sph!4v1681094441544!5m2!1sen!2sph",width:"100%",height:"250",style:{border:"0","border-top-left-radius":"5px","border-top-right-radius":"5px"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1),yt={class:"card-body text-center"},kt={class:"dropdown btn-pinned"},xt=e("button",{type:"button",class:"btn dropdown-toggle hide-arrow p-0","data-bs-toggle":"dropdown","aria-expanded":"false"},[e("i",{class:"ti ti-dots-vertical text-muted"})],-1),wt={class:"dropdown-menu dropdown-menu-end"},Ct=e("li",null,[e("a",{class:"dropdown-item",href:"javascript:void(0);"},"Share connection")],-1),Et=e("li",null,[e("a",{class:"dropdown-item",href:"javascript:void(0);"},"Block connection")],-1),qt=e("li",null,[e("hr",{class:"dropdown-divider"})],-1),Vt=["onClick"],St={class:"flex-shrink-0 mt-n2 mx-sm-0 mx-auto hero-container"},It=["src"],Rt={class:"mb-1 card-title card-text"},Ut=e("h6",{class:"mb-0 card-text small-text",style:{"font-weight":"400"}},[e("a",{href:"https://www.google.com/maps/",target:"_blank"},"Open in Maps")],-1),jt={class:"mb-0 card-text small-text",style:{"font-weight":"400"}},Lt={class:"mb-0 card-text small-text",style:{"font-weight":"400"}},Pt={class:"mb-0 card-text small-text"},Ft={class:"mb-0 card-text small-text"},Nt=e("b",null," Latitude: ",-1),Mt={class:"mb-0 card-text small-text"},zt=e("b",null,"Longitude:",-1),At=e("div",{class:"d-flex align-items-center justify-content-center my-3 gap-2"},null,-1),Bt={class:"d-flex align-items-center justify-content-center"},Dt=["onClick"],Ot=e("i",{class:"ti-xs me-1 ti ti-truck me-1"},null,-1),Tt=["href"],Gt=e("i",{class:"ti ti-mail ti-sm"},null,-1),Ht=[Gt],Qt={key:0,class:"card-footer py-3"},Jt={class:"row justify-content-between"},Wt={class:"col-auto"},Xt={class:"table_info"},Kt={class:"col-auto"},Yt={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Zt={class:"pagination mb-0"},$t=["innerHTML"],es={props:{data:Object,services:Object,provinces:Object},layout:X,data(){return{happy:null,filteredCities:[]}},watch:{happy(){this.happy?this.filteredCities=this.happy.cities:this.filteredCities=[]}},methods:{getCities(){form.city=null;const v=this.happy.id,b=this.provinces.find(d=>d.id===v);this.filteredCities=b.cities}}},as=Object.assign(es,{__name:"Index",setup(v){D();const b={type:null,name:null,contact_number:null,is_contact_number_verified:0,email:null,messenger_link:null,latitude:null,longitude:null,province:null,city:null,gender:null,image:null,services:[]},{validateForm:d}=W(),U="rescuers";let{isLoadingComponents:j,paginatedData:_,form:o,createPromise:x,updatePromise:w,deletePromise:L,handleCreate:C,serverQuery:E,handleServerQuery:q,handleEdit:P,formState:g}=J(b,U);const F=[{name:"Male",value:"male"},{name:"Female",value:"female"},{name:"Prefer not to say",value:"prefer_not_to_say"}],N=[{name:"Business",value:"Business"},{name:"Individual",value:"Individual"}];return(M,l)=>{const y=R("v-select"),z=R("dropzone"),V=Q("select");return r(),n(h,null,[f(t(T),{title:"Rescuer"}),e("div",K,[e("div",Y,[Z,e("div",$,[e("button",{class:"btn btn-primary",type:"button",onClick:l[0]||(l[0]=(...s)=>t(C)&&t(C)(...s)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"},[ee,i(" Add Rescuer ")]),e("div",te,[e("div",se,[e("h5",oe,a(t(g)=="create"?"Add":"Update")+" Rescuer ",1),t(o).processing?p("",!0):(r(),n("button",le))]),e("div",ae,[e("div",ie,[re,f(y,{options:N,modelValue:t(o).type,"onUpdate:modelValue":l[1]||(l[1]=s=>t(o).type=s),reduce:s=>s.value,label:"name",onInput:l[2]||(l[2]=s=>{t(o).clearErrors("type"),t(d)(["required"],t(o),s.target.value,"type")}),placeholder:"Select Rescuer Type"},null,8,["modelValue","reduce"]),e("div",ne,a(t(o).errors.type),1)]),e("div",de,[ce,c(e("input",{type:"text",class:u(["form-control",{"is-invalid":t(o).errors.name}]),"onUpdate:modelValue":l[3]||(l[3]=s=>t(o).name=s),onInput:l[4]||(l[4]=s=>{t(o).clearErrors("name"),t(d)(["required"],t(o),s.target.value,"name")}),placeholder:"Enter First Name"},null,34),[[m,t(o).name]]),e("div",ue,a(t(o).errors.name),1)]),e("div",me,[pe,c(e("input",{type:"text",class:u(["form-control",{"is-invalid":t(o).errors.contact_number}]),"onUpdate:modelValue":l[5]||(l[5]=s=>t(o).contact_number=s),onInput:l[6]||(l[6]=s=>{t(o).clearErrors("contact_number"),t(d)(["required"],t(o),s.target.value,"contact_number")}),placeholder:"Enter Rescuer Contact Number"},null,34),[[m,t(o).contact_number]]),e("div",_e,a(t(o).errors.contact_number),1)]),e("div",ve,[fe,he,e("label",be,[c(e("input",{type:"radio",value:1,"onUpdate:modelValue":l[7]||(l[7]=s=>t(o).is_contact_number_verified=s)},null,512),[[S,t(o).is_contact_number_verified]]),ge,ye]),e("label",ke,[c(e("input",{type:"radio",value:0,"onUpdate:modelValue":l[8]||(l[8]=s=>t(o).is_contact_number_verified=s),checked:""},null,512),[[S,t(o).is_contact_number_verified]]),xe,we])]),e("div",Ce,[Ee,c(e("input",{type:"email",class:u(["form-control",{"is-invalid":t(o).errors.email}]),"onUpdate:modelValue":l[9]||(l[9]=s=>t(o).email=s),onInput:l[10]||(l[10]=s=>{t(o).clearErrors("email"),t(d)(["required"],t(o),s.target.value,"email")}),placeholder:"Enter Email"},null,34),[[m,t(o).email]]),e("div",qe,a(t(o).errors.email),1)]),e("div",Ve,[Se,c(e("input",{type:"text",class:u(["form-control",{"is-invalid":t(o).errors.messenger_link}]),"onUpdate:modelValue":l[11]||(l[11]=s=>t(o).messenger_link=s),onInput:l[12]||(l[12]=s=>{t(o).clearErrors("messenger_link"),t(d)(["required"],t(o),s.target.value,"messenger_link")}),placeholder:"Enter Messenger Link"},null,34),[[m,t(o).messenger_link]]),e("div",Ie,a(t(o).errors.messenger_link),1)]),e("div",Re,[Ue,t(j)?(r(),I(z,{key:0,collection:"image",url:M.route("api.media.upload"),type:"profile",model:"Rescue\\Rescuer",value:t(o).image,onInput:l[13]||(l[13]=s=>{t(o).image=s,t(o).clearErrors("image")}),message:"Drop files here or click to upload profile photo",acceptedFiles:"image/jpeg,image/png",onError:l[14]||(l[14]=s=>{s&&s[0]&&t(o).setError("image",s[0])})},null,8,["url","value"])):(r(),n("div",je,[e("div",Le,Fe,512)])),t(o).errors.image?(r(),n("div",Ne,a(t(o).errors.image),1)):p("",!0)]),e("div",Me,[ze,c(f(y,{options:v.services,modelValue:t(o).services,"onUpdate:modelValue":l[15]||(l[15]=s=>t(o).services=s),reduce:s=>s.id,label:"name",multiple:"",onInput:l[16]||(l[16]=s=>{t(o).clearErrors("services"),t(d)(["required"],t(o),s.target.value,"services")}),placeholder:"Select Services"},null,8,["options","modelValue","reduce"]),[[V]])]),e("div",Ae,[Be,c(e("input",{type:"text",class:u(["form-control",{"is-invalid":t(o).errors.latitude}]),"onUpdate:modelValue":l[17]||(l[17]=s=>t(o).latitude=s),onInput:l[18]||(l[18]=s=>{t(o).clearErrors("latitude"),t(d)(["required"],t(o),s.target.value,"latitude")}),placeholder:"Enter Latitude"},null,34),[[m,t(o).latitude]]),e("div",De,a(t(o).errors.latitude),1)]),e("div",Oe,[Te,c(e("input",{type:"text",class:u(["form-control",{"is-invalid":t(o).errors.longitude}]),"onUpdate:modelValue":l[19]||(l[19]=s=>t(o).longitude=s),onInput:l[20]||(l[20]=s=>{t(o).clearErrors("longitude"),t(d)(["required"],t(o),s.target.value,"longitude")}),placeholder:"Enter Longitude"},null,34),[[m,t(o).longitude]]),e("div",Ge,a(t(o).errors.longitude),1)]),e("div",He,[Qe,c(f(y,{options:F,modelValue:t(o).gender,"onUpdate:modelValue":l[21]||(l[21]=s=>t(o).gender=s),reduce:s=>s.value,label:"name",onInput:l[22]||(l[22]=s=>{t(o).clearErrors("gender"),t(d)(["required"],t(o),s.target.value,"gender")}),placeholder:"Select Gender"},null,8,["modelValue","reduce"]),[[V]]),e("div",Je,a(t(o).errors.gender),1)]),e("div",We,[Xe,c(e("input",{type:"text",class:u(["form-control",{"is-invalid":t(o).errors.province}]),"onUpdate:modelValue":l[23]||(l[23]=s=>t(o).province=s),onInput:l[24]||(l[24]=s=>{t(o).clearErrors("province"),t(d)(["required"],t(o),s.target.value,"province")}),placeholder:"Enter Province"},null,34),[[m,t(o).province]])]),e("div",Ke,[Ye,c(e("input",{type:"text",class:u(["form-control",{"is-invalid":t(o).errors.city}]),"onUpdate:modelValue":l[25]||(l[25]=s=>t(o).city=s),onInput:l[26]||(l[26]=s=>{t(o).clearErrors("city"),t(d)(["required"],t(o),s.target.value,"city")}),placeholder:"Enter City"},null,34),[[m,t(o).city]])]),t(g)=="create"?(r(),n("button",{key:0,class:"btn btn-primary",onClick:l[27]||(l[27]=(...s)=>t(x)&&t(x)(...s)),disabled:t(o).processing||t(o).hasErrors},[t(o).processing?(r(),n("span",$e)):p("",!0),i(" Save ")],8,Ze)):p("",!0),t(g)=="update"?(r(),n("button",{key:1,class:"btn btn-primary",onClick:l[28]||(l[28]=(...s)=>t(w)&&t(w)(...s)),disabled:t(o).processing||t(o).hasErrors},[t(o).processing?(r(),n("span",tt)):p("",!0),i(" Save changes ")],8,et)):p("",!0)])])])]),e("div",st,[e("div",ot,[e("div",lt,[e("div",at,[it,e("div",rt,[e("select",{class:"form-select",value:t(E).perPage,onInput:l[29]||(l[29]=s=>t(q)("perPage",s.target.value))},[(r(),n(h,null,k([5,10,25,50,100],s=>e("option",{value:String(s),key:s},a(s),9,dt)),64))],40,nt)]),ct])]),ut,e("div",mt,[e("div",pt,[_t,e("div",vt,[e("input",{type:"search",placeholder:"Search",class:"form-control",value:t(E).query,onInput:l[30]||(l[30]=s=>t(q)("query",s.target.value))},null,40,ft)])])])])]),e("div",ht,[(r(!0),n(h,null,k(v.data.data,(s,A)=>(r(),n("div",{class:"col-xl-4 col-lg-4 col-md-4 col-12",key:A},[e("div",bt,[gt,e("div",yt,[e("div",kt,[xt,e("ul",wt,[Ct,Et,qt,e("li",null,[e("a",{class:"dropdown-item text-danger",href:"javascript:void(0);",onClick:B=>t(L)(s.id)},"Delete",8,Vt)])])]),e("div",St,[e("img",{src:s.image_url,alt:"Avatar Image",class:"d-block ms-0 rounded-circle user-profile-img hero-profile"},null,8,It)]),e("h4",Rt,a(s.name),1),Ut,e("h6",jt,a(s.type),1),e("h6",Lt,a(s.contact_number),1),e("h6",Pt,a(s.email),1),e("h6",Ft,[Nt,i(" "+a(s.latitude),1)]),e("h6",Mt,[zt,i(" "+a(s.longitude),1)]),At,e("div",Bt,[e("a",{href:"javascript:;",class:"btn btn-primary d-flex align-items-center me-3",onClick:B=>t(P)(s)},[Ot,i("Edit Rescuer")],8,Dt),e("a",{href:s.messenger_link,target:"_blank",class:"btn btn-label-secondary btn-icon"},Ht,8,Tt)])])])]))),128))]),t(_)&&t(_).meta.links?(r(),n("div",Qt,[e("div",Jt,[e("div",Wt,[e("div",Xt," Showing "+a(t(_).meta.from)+" to "+a(t(_).meta.to)+" of "+a(t(_).meta.total)+" entries ",1)]),e("div",Kt,[e("nav",Yt,[e("ul",Zt,[(r(!0),n(h,null,k(t(_).meta.links,s=>(r(),n("li",{class:"page-item",key:s},[(r(),I(H(s.url?"inertia-link":"button"),{class:u(["page-link",{active:s.active}]),href:s.url,only:["data","params"]},{default:G(()=>[e("span",{innerHTML:s.label},null,8,$t)]),_:2},1032,["class","href"]))]))),128))])])])])])):p("",!0)])],64)}}});export{as as default};
