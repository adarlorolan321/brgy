import{A as q,r as n,c as p,B as f,O as v,J as m}from"./app-06a4dc19.js";import{l as T}from"./Validate-7fe40d45.js";import{t as d}from"./toastr-922d3148.js";function R(y={},u){const t=q(y),c=n("create"),g=p(()=>m().props.data),r=p(()=>m().props.params),s=n(!1),l=n(null),e=n({perPage:50,query:null,page:1});f(()=>{r.value&&(r.value.page&&(e.value.page=r.value.page),r.value.perPage&&(e.value.perPage=r.value.perPage),r.value.query&&(e.value.query=r.value.query),r.value.sort&&(e.value.sort=r.value.sort),r.value.order&&(e.value.order=r.value.order),r.value.role&&(e.value.role=r.value.role),r.value.type&&(e.value.type=r.value.type))}),f(()=>{var a=document.getElementById("offCanvasForm");a&&(l.value=new bootstrap.Offcanvas(a))});const i=()=>{l.value&&l.value.hide()},S=()=>{l.value&&l.value.toggle()},h=(a,o)=>{(a=="perPage"||a=="query")&&(e.value.page=1),a=="sort"?e.value.sort&&e.value.sort==o?e.value.order=="asc"?(e.value.sort=o,e.value.order="desc"):(e.value.sort=null,e.value.order=null):(e.value.sort=o,e.value.order="asc"):e.value[a]=o,b()},b=T.debounce(()=>{v.get(route(`${u}.index`,e.value),{},{preserveState:!0,preventScroll:!0,only:["data","params"]})},500),C=async()=>{t.clearErrors(),t.post(route(`${u}.store`),{preserveState:!0,preventScroll:!0,only:["data","params","errors"],onSuccess:()=>{d.success("Record saved"),t.reset(),i()}})},P=async()=>{t.clearErrors(),t.patch(route(`${u}.update`,t.id),{preserveState:!0,preventScroll:!0,only:["data","params","errors"],onSuccess:()=>{d.info("Record updated"),t.reset(),i()}})},O=async a=>{Swal.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel it!",customClass:{confirmButton:"btn btn-primary me-3",cancelButton:"btn btn-label-danger"}}).then(o=>{o.isConfirmed&&v.delete(route(`${u}.destroy`,a),{preserveState:!0,preventScroll:!0,only:["data","params"],onSuccess:()=>{d.error("Record deleted")}})})},B=()=>{w(),v.reload([]),s.value=!1,setTimeout(()=>{s.value=!0},1e3),c.value="create"},E=a=>{a=JSON.parse(JSON.stringify(a)),t.reset(),t.clearErrors();for(const o in a){const x=a[o];t[o]=x}c.value="update",S(),s.value=!1,setTimeout(()=>{s.value=!0},1e3)},w=()=>{t.reset(),t.clearErrors()};return{paginatedData:g,isLoadingComponents:s,form:t,createPromise:C,updatePromise:P,deletePromise:O,handleCreate:B,handleEdit:E,serverQuery:e,handleServerQuery:h,formState:c}}export{R as u};
