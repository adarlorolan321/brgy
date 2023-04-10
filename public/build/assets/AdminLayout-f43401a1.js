import{q as b,o,c as n,b as e,F as h,r as _,u as y,t as r,a as m,h as v,y as w,f as x,O as k,j as L,n as l,e as j}from"./app-ff5beef1.js";function C(d){return new Promise(function(c,u){let a=!1,t=document.querySelector('script[src="'+d+'"]');if(!t)t=document.createElement("script"),t.type="text/javascript",t.async=!0,t.src=d,a=!0;else if(t.hasAttribute("data-loaded")){c(t);return}t.addEventListener("error",u),t.addEventListener("abort",u),t.addEventListener("load",function(){t.setAttribute("data-loaded",!0),c(t)}),a&&document.head.appendChild(t)})}function V(){return{menus:[{label:"Dashboard",route:"welcome",icon:"ti ti-dashboard",only:["data","params"]},{label:"Dryver",route:"dryver.index",icon:"ti ti-user",only:["data","params"]},{label:"Vehicle Types",route:"vehicle_types.index",icon:"ti ti-car",only:["data","params"]},{label:"Vehicle Brands",route:"vehicle_brands.index",icon:"ti ti-tag",only:["data","params"]},{label:"Rescuer",route:"rescuers.index",icon:"ti ti-truck",only:["data","params"]},{label:"Rescue Services",route:"rescue_services.index",icon:"ti ti-bandage",only:["data","params"]}]}}const M={class:"layout-wrapper layout-content-navbar"},S={class:"layout-container"},A={id:"layout-menu",class:"layout-menu menu-vertical menu bg-menu-theme"},B=x('<div class="app-brand demo"><a href="index.html" class="app-brand-link"><span class="app-brand-logo demo"><svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#6EC5F6"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#6EC5F6"></path></svg></span><span class="app-brand-text demo menu-text fw-bold">Dryvr</span></a><a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto"><i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i><i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i></a></div><div class="menu-inner-shadow"></div>',2),E={class:"menu-inner py-1"},$=["data-i18n"],D={href:"javascript:void(0);",class:"menu-link menu-toggle"},F=["data-i18n"],H={key:0,class:"menu-sub"},N=["data-i18n"],Z={class:"layout-page"},O={class:"layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme",id:"layout-navbar"},q=e("div",{class:"layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"},[e("a",{class:"nav-item nav-link px-0 me-xl-4",href:"javascript:void(0)"},[e("i",{class:"ti ti-menu-2 ti-sm"})])],-1),P={class:"navbar-nav-right d-flex align-items-center",id:"navbar-collapse"},R=e("div",{class:"navbar-nav align-items-center"},[e("a",{class:"nav-link style-switcher-toggle hide-arrow",href:"javascript:void(0);"},[e("i",{class:"ti ti-sm"})])],-1),T={class:"navbar-nav flex-row align-items-center ms-auto"},z={class:"nav-item navbar-dropdown dropdown-user dropdown"},G={class:"nav-link dropdown-toggle hide-arrow",href:"javascript:void(0);","data-bs-toggle":"dropdown"},I={class:"avatar avatar-online"},J=["src"],K={class:"dropdown-menu dropdown-menu-end"},Q={class:"dropdown-item",href:"#"},U={class:"d-flex"},W={class:"flex-shrink-0 me-3"},X={class:"avatar avatar-online"},Y=["src"],ee={class:"flex-grow-1"},te={class:"fw-semibold d-block"},ae={class:"text-muted"},se=e("li",null,[e("div",{class:"dropdown-divider"})],-1),oe=e("i",{class:"ti ti-user-check me-2 ti-sm"},null,-1),ne=e("span",{class:"align-middle"},"My Profile",-1),le=e("li",null,[e("div",{class:"dropdown-divider"})],-1),ie=e("i",{class:"ti ti-logout me-2 ti-sm"},null,-1),re=e("span",{class:"align-middle"},"Log Out",-1),de=[ie,re],ce={class:"content-wrapper"},ue={class:"container-xxl flex-grow-1 container-p-y"},pe=e("footer",{class:"content-footer footer bg-footer-theme"},[e("div",{class:"container-fluid"},[e("div",{class:"footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column"})])],-1),he=e("div",{class:"content-backdrop fade"},null,-1),me=e("div",{class:"layout-overlay layout-menu-toggle"},null,-1),ve=e("div",{class:"drag-target"},null,-1),_e={__name:"AdminLayout",setup(d){const{menus:c}=V();b(()=>{setTimeout(()=>{C("/assets/js/main.js")},1e3)});const u=()=>{k.post(route("logout"))};return(a,t)=>{const p=L("inertia-link");return o(),n("div",M,[e("div",S,[e("aside",A,[B,e("ul",E,[(o(!0),n(h,null,_(y(c),(s,f)=>(o(),n(h,{key:"menu-"+f},[s.sub_menu?(o(),n("li",{key:1,class:l(["menu-item",{"active open":a.route().current(s.route)}])},[e("a",D,[e("i",{class:l(["menu-icon tf-icons",s.icon])},null,2),e("div",{"data-i18n":s.label},r(s.label),9,F)]),s.sub_menu?(o(),n("ul",H,[(o(!0),n(h,null,_(s.sub_menu,(i,g)=>(o(),n("li",{key:"sub-menu-"+g,class:l(["menu-item",{active:a.route().current(i.route)}])},[m(p,{href:a.route(i.route),class:l(["menu-link",{"menu-toggle":i.sub_menu}]),only:["data","params"]},{default:v(()=>[e("i",{class:l(["menu-icon tf-icons",i.icon])},null,2),e("div",{"data-i18n":i.label},r(i.label),9,N)]),_:2},1032,["href","class"])],2))),128))])):j("",!0)],2)):(o(),n("li",{key:0,class:l(["menu-item",{active:a.route().current(s.route)}])},[m(p,{href:a.route(s.route),class:"menu-link",only:["data","params"]},{default:v(()=>[e("i",{class:l(["menu-icon tf-icons",s.icon])},null,2),e("div",{"data-i18n":s.label},r(s.label),9,$)]),_:2},1032,["href"])],2))],64))),128))])]),e("div",Z,[e("nav",O,[q,e("div",P,[R,e("ul",T,[e("li",z,[e("a",G,[e("div",I,[e("img",{src:a.$page.props.auth.user.profile_photo_url,alt:"",class:"rounded-circle"},null,8,J)])]),e("ul",K,[e("li",null,[e("a",Q,[e("div",U,[e("div",W,[e("div",X,[e("img",{src:a.$page.props.auth.user.profile_photo_url,alt:"",class:"rounded-circle"},null,8,Y)])]),e("div",ee,[e("span",te,r(a.$page.props.auth.user.name),1),e("small",ae,r(a.$page.props.auth.user.role),1)])])])]),se,e("li",null,[m(p,{class:"dropdown-item",href:"/user/profile"},{default:v(()=>[oe,ne]),_:1})]),le,e("li",null,[e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:u},de)])])])])])]),e("div",ce,[e("div",ue,[w(a.$slots,"default")]),pe,he])])]),me,ve])}}},ge=_e;export{ge as A};
