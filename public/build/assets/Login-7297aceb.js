import{A as h,q as _,o as n,c as r,a as d,u as e,b as s,t as c,e as p,x as w,w as g,v as y,n as u,i as b,C as k,d as x,F as L,f as m,g as C,X as V}from"./app-b6ed454b.js";import{_ as M}from"./auth-car4-login-illustration-black-a2816f27.js";const E="/build/assets/misc-mask-light-d25607d4.png";function j(){const l=h({email:null,password:null,remember:!1});return{form:l,login:async()=>{l.post(route("login"),{onSuccess:t=>{}})}}}const N={class:"authentication-wrapper authentication-cover authentication-bg"},D={class:"authentication-inner row"},F=s("div",{class:"d-none d-lg-flex col-lg-7 p-0"},[s("div",{class:"auth-cover-bg auth-cover-bg-color d-flex justify-content-center align-items-center"},[s("img",{src:M,alt:"auth-login-cover",class:"img-fluid my-5 auth-illustration","data-app-light-img":"illustrations/auth-login-illustration-light.png","data-app-dark-img":"illustrations/auth-login-illustration-dark.png"}),s("img",{src:E,alt:"auth-login-cover",class:"platform-bg","data-app-light-img":"illustrations/bg-shape-image-light.png","data-app-dark-img":"illustrations/bg-shape-image-dark.png"})])],-1),S={class:"d-flex col-12 col-lg-5 align-items-center p-sm-5 p-4"},B={class:"w-px-400 mx-auto"},Z=m('<div class="app-brand mb-4"><a href="" class="app-brand-link gap-2"><span class="app-brand-logo demo"><svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z" fill="#6EC5F6"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z" fill="#161616"></path><path opacity="0.06" fill-rule="evenodd" clip-rule="evenodd" d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z" fill="#161616"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z" fill="#6EC5F6"></path></svg></span><span class="app-brand-text demo text-body fw-bold ms-1">Dryvr</span></a></div><h3 class="mb-1 fw-bold">Welcome to Dryvr! 👋</h3><p class="mb-4">Please sign-in to your account and start the adventure</p>',3),$={key:0,class:"alert alert-success"},H={class:"mb-3"},P=s("label",{for:"email",class:"form-label"},"Email or Username",-1),U={key:0,class:"invalid-feedback"},A={class:"mb-3 form-password-toggle"},I={class:"d-flex justify-content-between"},T=s("label",{class:"form-label",for:"password"},"Password",-1),q=s("small",null,"Forgot Password?",-1),z={class:"input-group input-group-merge"},R=["type"],W={key:0,class:"invalid-feedback"},X=m('<div class="mb-3"><div class="form-check"><input class="form-check-input" type="checkbox" id="remember-me"><label class="form-check-label" for="remember-me"> Remember Me </label></div></div><button class="btn btn-primary d-grid w-100">Login</button>',2),G={class:"text-center"},J=s("span",null,"New on our platform?",-1),K=s("span",null,"Create an account",-1),O=m('<div class="divider my-4"><div class="divider-text">or</div></div><div class="d-flex justify-content-center"><a href="javascript:;" class="btn btn-icon btn-label-facebook me-3"><i class="tf-icons fa-brands fa-facebook-f fs-5"></i></a><a href="javascript:;" class="btn btn-icon btn-label-google-plus me-3"><i class="tf-icons fa-brands fa-google fs-5"></i></a><a href="javascript:;" class="btn btn-icon btn-label-twitter"><i class="tf-icons fa-brands fa-twitter fs-5"></i></a></div>',2),es={__name:"Login",props:{status:String},setup(l){const{login:f,form:t}=j(),i=_(!0);return(Q,a)=>{const v=C("inertia-link");return n(),r(L,null,[d(e(V),{title:"Login"}),s("div",N,[s("div",D,[F,s("div",S,[s("div",B,[Z,l.status?(n(),r("div",$,c(l.status),1)):p("",!0),s("form",{onSubmit:a[5]||(a[5]=w(o=>e(f)(),["prevent"])),id:"formAuthentication",class:"mb-3 fv-plugins-bootstrap5 fv-plugins-framework"},[s("div",H,[P,g(s("input",{type:"text",class:u(["form-control",{"is-invalid":e(t).errors.email}]),id:"email","onUpdate:modelValue":a[0]||(a[0]=o=>e(t).email=o),name:"email",placeholder:"Enter your email or username",autofocus:"",onInput:a[1]||(a[1]=o=>e(t).clearErrors("email"))},null,34),[[y,e(t).email]]),e(t).errors.email?(n(),r("div",U,c(e(t).errors.email),1)):p("",!0)]),s("div",A,[s("div",I,[T,d(v,{href:"/forgot-password"},{default:b(()=>[q]),_:1})]),s("div",z,[g(s("input",{type:i.value?"password":"text",id:"password",class:u(["form-control",{"is-invalid":e(t).errors.password}]),name:"password","onUpdate:modelValue":a[2]||(a[2]=o=>e(t).password=o),placeholder:"············","aria-describedby":"password",onInput:a[3]||(a[3]=o=>e(t).clearErrors("email"))},null,42,R),[[k,e(t).password]]),s("span",{class:"input-group-text cursor-pointer",onClick:a[4]||(a[4]=o=>i.value=!i.value)},[s("i",{class:u([i.value?"ti ti-eye-off":"ti ti-eye"])},null,2)])]),e(t).errors.password?(n(),r("div",W,c(e(t).errors.password),1)):p("",!0)]),X],32),s("p",G,[J,x("  "),d(v,null,{default:b(()=>[K]),_:1})]),O])])])])],64)}}};export{es as default};
