import{q as b,o,c as n,b as e,F as h,r as v,u as y,t as d,a as m,g as _,y as w,f as x,j as k,O as L,h as j,n as l,d as V}from"./app-5b5e10f9.js";function C(r){return new Promise(function(c,u){let a=!1,t=document.querySelector('script[src="'+r+'"]');if(!t)t=document.createElement("script"),t.type="text/javascript",t.async=!0,t.src=r,a=!0;else if(t.hasAttribute("data-loaded")){c(t);return}t.addEventListener("error",u),t.addEventListener("abort",u),t.addEventListener("load",function(){t.setAttribute("data-loaded",!0),c(t)}),a&&document.head.appendChild(t)})}function M(){return{menus:[{label:"Dashboard",route:"welcome",icon:"ti ti-dashboard",only:["data","params"]},{label:"Vehicle",route:"vehicles.index",icon:"ti ti-car",only:["data","params"]},{label:"Vehicle Types",route:"vehicle_types.index",icon:"ti ti-car",only:["data","params"]},{label:"Vehicle Brands",route:"vehicle_brands.index",icon:"ti ti-tag",only:["data","params"]},{label:"Rescue Services",route:"rescue_services.index",icon:"ti ti-bandage",only:["data","params"]}]}}const S={class:"layout-wrapper layout-content-navbar"},A={class:"layout-container"},B={id:"layout-menu",class:"layout-menu menu-vertical menu bg-menu-theme"},D=k('<div class="app-brand demo"><a href="index.html" class="app-brand-link"><span class="app-brand-logo demo"><svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#7367F0"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#7367F0"></path></svg></span><span class="app-brand-text demo menu-text fw-bold">Dryvr</span></a><a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto"><i class="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i><i class="ti ti-x d-block d-xl-none ti-sm align-middle"></i></a></div><div class="menu-inner-shadow"></div>',2),E={class:"menu-inner py-1"},F=["data-i18n"],N={href:"javascript:void(0);",class:"menu-link menu-toggle"},$=["data-i18n"],H={key:0,class:"menu-sub"},Z=["data-i18n"],O={class:"layout-page"},P={class:"layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme",id:"layout-navbar"},T=e("div",{class:"layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none"},[e("a",{class:"nav-item nav-link px-0 me-xl-4",href:"javascript:void(0)"},[e("i",{class:"ti ti-menu-2 ti-sm"})])],-1),q={class:"navbar-nav-right d-flex align-items-center",id:"navbar-collapse"},z=e("div",{class:"navbar-nav align-items-center"},[e("a",{class:"nav-link style-switcher-toggle hide-arrow",href:"javascript:void(0);"},[e("i",{class:"ti ti-sm"})])],-1),R={class:"navbar-nav flex-row align-items-center ms-auto"},Y={class:"nav-item navbar-dropdown dropdown-user dropdown"},G={class:"nav-link dropdown-toggle hide-arrow",href:"javascript:void(0);","data-bs-toggle":"dropdown"},I={class:"avatar avatar-online"},J=["src"],K={class:"dropdown-menu dropdown-menu-end"},Q={class:"dropdown-item",href:"#"},U={class:"d-flex"},W={class:"flex-shrink-0 me-3"},X={class:"avatar avatar-online"},ee=["src"],te={class:"flex-grow-1"},ae={class:"fw-semibold d-block"},se={class:"text-muted"},oe=e("li",null,[e("div",{class:"dropdown-divider"})],-1),ne=e("i",{class:"ti ti-user-check me-2 ti-sm"},null,-1),le=e("span",{class:"align-middle"},"My Profile",-1),ie=e("li",null,[e("div",{class:"dropdown-divider"})],-1),de=e("i",{class:"ti ti-logout me-2 ti-sm"},null,-1),re=e("span",{class:"align-middle"},"Log Out",-1),ce=[de,re],ue={class:"content-wrapper"},pe={class:"container-xxl flex-grow-1 container-p-y"},he={class:"content-footer footer bg-footer-theme"},me={class:"container-fluid"},_e={class:"footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column"},ve=e("a",{href:"https://pixinvent.com",target:"_blank",class:"fw-semibold"},"Pixinvent",-1),fe=e("div",null,[e("a",{href:"https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/",target:"_blank",class:"footer-link me-4"},"Documentation")],-1),ge=e("div",{class:"content-backdrop fade"},null,-1),be=e("div",{class:"layout-overlay layout-menu-toggle"},null,-1),ye=e("div",{class:"drag-target"},null,-1),we={__name:"AdminLayout",setup(r){const{menus:c}=M();b(()=>{setTimeout(()=>{C("/assets/js/main.js")},1e3)});const u=()=>{L.post(route("logout"))};return(a,t)=>{const p=j("inertia-link");return o(),n("div",S,[e("div",A,[e("aside",B,[D,e("ul",E,[(o(!0),n(h,null,v(y(c),(s,f)=>(o(),n(h,{key:"menu-"+f},[s.sub_menu?(o(),n("li",{key:1,class:l(["menu-item",{"active open":a.route().current(s.route)}])},[e("a",N,[e("i",{class:l(["menu-icon tf-icons",s.icon])},null,2),e("div",{"data-i18n":s.label},d(s.label),9,$)]),s.sub_menu?(o(),n("ul",H,[(o(!0),n(h,null,v(s.sub_menu,(i,g)=>(o(),n("li",{key:"sub-menu-"+g,class:l(["menu-item",{active:a.route().current(i.route)}])},[m(p,{href:a.route(i.route),class:l(["menu-link",{"menu-toggle":i.sub_menu}]),only:["data","params"]},{default:_(()=>[e("i",{class:l(["menu-icon tf-icons",i.icon])},null,2),e("div",{"data-i18n":i.label},d(i.label),9,Z)]),_:2},1032,["href","class"])],2))),128))])):V("",!0)],2)):(o(),n("li",{key:0,class:l(["menu-item",{active:a.route().current(s.route)}])},[m(p,{href:a.route(s.route),class:"menu-link",only:["data","params"]},{default:_(()=>[e("i",{class:l(["menu-icon tf-icons",s.icon])},null,2),e("div",{"data-i18n":s.label},d(s.label),9,F)]),_:2},1032,["href"])],2))],64))),128))])]),e("div",O,[e("nav",P,[T,e("div",q,[z,e("ul",R,[e("li",Y,[e("a",G,[e("div",I,[e("img",{src:a.$page.props.auth.user.profile_photo_url,alt:"",class:"rounded-circle"},null,8,J)])]),e("ul",K,[e("li",null,[e("a",Q,[e("div",U,[e("div",W,[e("div",X,[e("img",{src:a.$page.props.auth.user.profile_photo_url,alt:"",class:"rounded-circle"},null,8,ee)])]),e("div",te,[e("span",ae,d(a.$page.props.auth.user.name),1),e("small",se,d(a.$page.props.auth.user.role),1)])])])]),oe,e("li",null,[m(p,{class:"dropdown-item",href:"/user/profile"},{default:_(()=>[ne,le]),_:1})]),ie,e("li",null,[e("a",{class:"dropdown-item",href:"javascript:void(0);",onClick:u},ce)])])])])])]),e("div",ue,[e("div",pe,[w(a.$slots,"default")]),e("footer",he,[e("div",me,[e("div",_e,[e("div",null,[x(" © "+d(new Date().getFullYear())+" , made with ❤️ by ",1),ve]),fe])])]),ge])])]),be,ye])}}},ke=we;export{ke as A};
