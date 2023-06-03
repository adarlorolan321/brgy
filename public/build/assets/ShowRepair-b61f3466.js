import{A as u}from"./AdminLayout-5ced846c.js";import{t as p}from"./toastr-17c50d69.js";import{_ as b}from"./icons8-user-60-b72dacec.js";import{_ as f,o as n,a,d as e,b as y,j as g,F as l,h as x,i as v,n as d,t as r,e as w}from"./app-fc82053b.js";const C={layout:u,props:{data:Object},methods:{getFormattedTime(s,t){const i=new Date(`${s} ${t}`);return this.formatTime(i)},formatTime(s){const t={hour:"numeric",minute:"numeric",hour12:!0};return s.toLocaleString("en-US",t)},getRandomTimelinePointClass(s){const t=["timeline-point-info","timeline-point-warning","timeline-point-success"],i=s%t.length;return`timeline-point ${t[i]}`},rescuerFormattedDate(){const s=new Date(this.data.created_at),t={year:"numeric",month:"long",day:"numeric"};return s.toLocaleDateString("en-US",t)},rescuerFormattedTime(){const s=new Date(this.data.created_at),t={hour:"numeric",minute:"numeric",second:"numeric"};return s.toLocaleTimeString("en-US",t)},copyContactNumber(){const s=this.data.mechanic_contact_number;navigator.clipboard.writeText(s).then(()=>{p.success("Contact number copied!")}).catch(t=>{console.error("Failed to copy contact number:",t)})},getRandomTimelineItemClass(s){const t=["timeline-item timeline-item-primary pb-4 border-left-dashed","timeline-item timeline-item-success pb-4 border-left-dashed","timeline-item timeline-item-danger pb-4 border-left-dashed","timeline-item timeline-item-info pb-4 border-left-dashed","timeline-item timeline-item-secondary pb-4 border-left-dashed"],i=Math.floor(Math.random()*t.length);return t[i]}}},T={class:"col-4 mb-4"},k=e("button",{class:"btn btn-outline-primary waves-effect",type:"button"},[e("i",{class:"ti ti-arrow-left ti-xs me-1"}),w(" Back to All Vehicles ")],-1),N={key:0,class:"card mb-4"},S=e("div",{class:"card-body d-flex align-items-center justify-content-center"},[e("h5",{class:"pb-0 mb-0 d-flex"},"No repairs activity")],-1),D=[S],F={key:1,class:"card mb-4"},R=e("h4",{class:"card-header mb-2"},"Repairs Activity Timeline",-1),L={class:"card-body pb-0"},P={class:"timeline mb-0"},j={class:"timeline-event"},A={class:"timeline-header border-bottom mb-3"},B={class:"text-muted"},I={class:"d-flex mt-3",style:{"margin-bottom":"-13px"}},V={href:"javascript:void(0)",class:"me-3"},O=e("img",{src:b,alt:"PDF image",width:"15",class:"me-2",style:{width:"20px",height:"20px"}},null,-1),U={class:"fw-semibold text-heading"},z={class:"badge bg-label-success"},M=e("i",{class:"ti ti-phone ti-sm",style:{"font-size":"15px !important"}},null,-1),E=[M],H={class:"mb-0 ml-5",style:{"margin-left":"25px"}};function $(s,t,i,q,G,o){const h=v("inertia-link");return n(),a(l,null,[e("div",T,[y(h,{href:"/vehicles"},{default:g(()=>[k]),_:1})]),i.data.repairs==""?(n(),a("div",N,D)):(n(),a("div",F,[R,e("div",L,[e("ul",P,[(n(!0),a(l,null,x(i.data.repairs,(c,m)=>(n(),a("li",{class:d(o.getRandomTimelineItemClass(m)),key:m.id},[e("span",{class:d(o.getRandomTimelinePointClass(m))},null,2),e("div",j,[e("div",A,[e("small",B,"PHP "+r(c.total_amount),1)]),e("div",I,[e("a",V,[O,e("span",U,r(c.mechanic_name),1)]),e("p",z,r(c.status),1),e("a",{onClick:t[0]||(t[0]=(..._)=>o.copyContactNumber&&o.copyContactNumber(..._)),class:"btn btn-label-secondary btn-icon",style:{height:"25px",width:"25px","margin-left":"10px"}},E)]),e("p",H,r(c.mechanic_address),1)])],2))),128))])])]))],64)}const X=f(C,[["render",$]]);export{X as default};
