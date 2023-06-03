import{A as p}from"./AdminLayout-5ced846c.js";import{t as u}from"./toastr-17c50d69.js";import{_ as b}from"./icons8-user-60-b72dacec.js";import{_ as f,o,a as c,d as e,b as y,j as v,F as l,h as x,i as g,n as d,t as a,e as w}from"./app-fc82053b.js";const C={layout:p,props:{data:Object},methods:{getFormattedTime(s,t){const n=new Date(`${s} ${t}`);return this.formatTime(n)},formatTime(s){const t={hour:"numeric",minute:"numeric",hour12:!0};return s.toLocaleString("en-US",t)},getRandomTimelinePointClass(s){const t=["timeline-point-info","timeline-point-warning","timeline-point-success"],n=s%t.length;return`timeline-point ${t[n]}`},rescuerFormattedDate(){const s=new Date(this.data.created_at),t={year:"numeric",month:"long",day:"numeric"};return s.toLocaleDateString("en-US",t)},rescuerFormattedTime(){const s=new Date(this.data.created_at),t={hour:"numeric",minute:"numeric",second:"numeric"};return s.toLocaleTimeString("en-US",t)},copyContactNumber(){const s=this.data.mechanic_contact_number;navigator.clipboard.writeText(s).then(()=>{u.success("Contact number copied!")}).catch(t=>{console.error("Failed to copy contact number:",t)})},getRandomTimelineItemClass(s){const t=["timeline-item timeline-item-primary pb-4 border-left-dashed","timeline-item timeline-item-success pb-4 border-left-dashed","timeline-item timeline-item-danger pb-4 border-left-dashed","timeline-item timeline-item-info pb-4 border-left-dashed","timeline-item timeline-item-secondary pb-4 border-left-dashed"],n=Math.floor(Math.random()*t.length);return t[n]}}},T={class:"col-4 mb-4"},k=e("button",{class:"btn btn-outline-primary waves-effect",type:"button"},[e("i",{class:"ti ti-arrow-left ti-xs me-1"}),w(" Back to All Drivers ")],-1),N={key:0,class:"card mb-4"},D=e("div",{class:"card-body d-flex align-items-center justify-content-center"},[e("h5",{class:"pb-0 mb-0 d-flex"},"No repairs activity")],-1),S=[D],F={key:1,class:"card mb-4"},P=e("h4",{class:"card-header mb-2"},"Repairs Activity Timeline",-1),R={class:"card-body pb-0"},L={class:"timeline mb-0"},j={class:"timeline-event"},A={class:"timeline-header border-bottom mb-3"},B={class:"mb-0"},I={class:"text-muted"},O={class:"mb-0"},U={class:"mb-0"},V={class:"mb-3"},z={class:"d-flex mt-3",style:{"margin-bottom":"-13px"}},M={href:"javascript:void(0)",class:"me-3"},E=e("img",{src:b,alt:"PDF image",width:"15",class:"me-2",style:{width:"20px",height:"20px"}},null,-1),H={class:"fw-semibold text-heading"},Y={class:"badge bg-label-success"},$=e("i",{class:"ti ti-phone ti-sm",style:{"font-size":"15px !important"}},null,-1),q=[$],G={class:"mb-0 ml-5",style:{"margin-left":"25px"}};function J(s,t,n,K,Q,r){const h=g("inertia-link");return o(),c(l,null,[e("div",T,[y(h,{href:"/drivers"},{default:v(()=>[k]),_:1})]),n.data.repairs==""?(o(),c("div",N,S)):(o(),c("div",F,[P,e("div",R,[e("ul",L,[(o(!0),c(l,null,x(n.data.repairs,(i,m)=>(o(),c("li",{class:d(r.getRandomTimelineItemClass(m)),key:m.id},[e("span",{class:d(r.getRandomTimelinePointClass(m))},null,2),e("div",j,[e("div",A,[e("h6",B,a(i.vehicle.model)+", "+a(i.vehicle.brand.name)+", "+a(i.vehicle.type.name),1),e("small",I,"PHP "+a(i.total_amount),1)]),e("p",O,"Plate Number: "+a(i.vehicle.plate_number),1),e("p",U,"Color: "+a(i.vehicle.color),1),e("p",V,"Year: "+a(i.vehicle.year),1),e("div",z,[e("a",M,[E,e("span",H,a(i.mechanic_name),1)]),e("p",Y,a(i.status),1),e("a",{onClick:t[0]||(t[0]=(..._)=>r.copyContactNumber&&r.copyContactNumber(..._)),class:"btn btn-label-secondary btn-icon",style:{height:"25px",width:"25px","margin-left":"10px"}},q)]),e("p",G,a(i.mechanic_address),1)])],2))),128))])])]))],64)}const te=f(C,[["render",J]]);export{te as default};