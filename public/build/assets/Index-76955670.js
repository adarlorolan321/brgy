import{s as N,c as ee,r as D,x as te,o as h,g as f,b as m,y as R,f as b,t as v,w as x,v as E,F as L,h as I,i as H,z as se,J as oe,a as g,u as o,d as t,e as _,n as C,X as re,j as ie,k as le}from"./app-f5d037ee.js";import{u as ne}from"./Crud-bd35971e.js";import{u as ae}from"./Validate-06bde85a.js";import{A as de}from"./AdminLayout-db6fe4be.js";import"./toastr-982921b9.js";/*!
  * vue-color-kit v1.0.4
  * (c) 2021 
  * @license MIT
  */function A(e){let r={r:0,g:0,b:0,a:1};/#/.test(e)?r=ue(e):/rgb/.test(e)?r=J(e):typeof e=="string"?r=J(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(r=e);const{r:i,g:n,b:d,a}=r,{h:s,s:u,v:p}=he(r);return{r:i,g:n,b:d,a:a===void 0?1:a,h:s,s:u,v:p}}function O(e){const r=document.createElement("canvas"),i=r.getContext("2d"),n=e*2;return r.width=n,r.height=n,i.fillStyle="#ffffff",i.fillRect(0,0,n,n),i.fillStyle="#ccd5db",i.fillRect(0,0,e,e),i.fillRect(e,e,e,e),r}function P(e,r,i,n,d,a){const s=e==="l",u=r.createLinearGradient(0,0,s?i:0,s?0:n);u.addColorStop(.01,d),u.addColorStop(.99,a),r.fillStyle=u,r.fillRect(0,0,i,n)}function ce({r:e,g:r,b:i},n){const d=s=>("0"+Number(s).toString(16)).slice(-2),a=`#${d(e)}${d(r)}${d(i)}`;return n?a.toUpperCase():a}function ue(e){e=e.slice(1);const r=i=>parseInt(i,16)||0;return{r:r(e.slice(0,2)),g:r(e.slice(2,4)),b:r(e.slice(4,6))}}function J(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function he({r:e,g:r,b:i}){e=e/255,r=r/255,i=i/255;const n=Math.max(e,r,i),d=Math.min(e,r,i),a=n-d;let s=0;n===d?s=0:n===e?r>=i?s=60*(r-i)/a:s=60*(r-i)/a+360:n===r?s=60*(i-e)/a+120:n===i&&(s=60*(e-r)/a+240),s=Math.floor(s);let u=parseFloat((n===0?0:1-d/n).toFixed(2)),p=parseFloat(n.toFixed(2));return{h:s,s:u,v:p}}var B=N({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},emits:["selectSaturation"],data(){return{slideSaturationStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasSaturation,r=this.size,i=e.getContext("2d");e.width=r,e.height=r,i.fillStyle=this.color,i.fillRect(0,0,r,r),P("l",i,r,r,"#FFFFFF","rgba(255,255,255,0)"),P("p",i,r,r,"rgba(0,0,0,0)","#000000")},renderSlide(){this.slideSaturationStyle={left:this.hsv.s*this.size-5+"px",top:(1-this.hsv.v)*this.size-5+"px"}},selectSaturation(e){const{top:r,left:i}=this.$el.getBoundingClientRect(),n=e.target.getContext("2d"),d=s=>{let u=s.clientX-i,p=s.clientY-r;u<0&&(u=0),p<0&&(p=0),u>this.size&&(u=this.size),p>this.size&&(p=this.size),this.slideSaturationStyle={left:u-5+"px",top:p-5+"px"};const S=n.getImageData(Math.min(u,this.size-1),Math.min(p,this.size-1),1,1),[$,k,w]=S.data;this.$emit("selectSaturation",{r:$,g:k,b:w})};d(e);const a=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",a)}}});const me={ref:"canvasSaturation"};function pe(e,r,i,n,d,a){return h(),f("div",{class:"saturation",onMousedown:r[1]||(r[1]=R((...s)=>e.selectSaturation&&e.selectSaturation(...s),["prevent","stop"]))},[m("canvas",me,null,512),m("div",{style:e.slideSaturationStyle,class:"slide"},null,4)],32)}B.render=pe;B.__file="src/color/Saturation.vue";var j=N({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectHue"],data(){return{slideHueStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasHue,r=this.width,i=this.height,n=e.getContext("2d");e.width=r,e.height=i;const d=n.createLinearGradient(0,0,0,i);d.addColorStop(0,"#FF0000"),d.addColorStop(.17*1,"#FF00FF"),d.addColorStop(.17*2,"#0000FF"),d.addColorStop(.17*3,"#00FFFF"),d.addColorStop(.17*4,"#00FF00"),d.addColorStop(.17*5,"#FFFF00"),d.addColorStop(1,"#FF0000"),n.fillStyle=d,n.fillRect(0,0,r,i)},renderSlide(){this.slideHueStyle={top:(1-this.hsv.h/360)*this.height-2+"px"}},selectHue(e){const{top:r}=this.$el.getBoundingClientRect(),i=e.target.getContext("2d"),n=a=>{let s=a.clientY-r;s<0&&(s=0),s>this.height&&(s=this.height),this.slideHueStyle={top:s-2+"px"};const u=i.getImageData(0,Math.min(s,this.height-1),1,1),[p,S,$]=u.data;this.$emit("selectHue",{r:p,g:S,b:$})};n(e);const d=()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",n),document.addEventListener("mouseup",d)}}});const ve={ref:"canvasHue"};function fe(e,r,i,n,d,a){return h(),f("div",{class:"hue",onMousedown:r[1]||(r[1]=R((...s)=>e.selectHue&&e.selectHue(...s),["prevent","stop"]))},[m("canvas",ve,null,512),m("div",{style:e.slideHueStyle,class:"slide"},null,4)],32)}j.render=fe;j.__file="src/color/Hue.vue";var M=N({props:{color:{type:String,default:"#000000"},rgba:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectAlpha"],data(){return{slideAlphaStyle:{},alphaSize:5}},watch:{color(){this.renderColor()},"rgba.a"(){this.renderSlide()}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasAlpha,r=this.width,i=this.height,n=this.alphaSize,d=O(n),a=e.getContext("2d");e.width=r,e.height=i,a.fillStyle=a.createPattern(d,"repeat"),a.fillRect(0,0,r,i),P("p",a,r,i,"rgba(255,255,255,0)",this.color)},renderSlide(){this.slideAlphaStyle={top:this.rgba.a*this.height-2+"px"}},selectAlpha(e){const{top:r}=this.$el.getBoundingClientRect(),i=d=>{let a=d.clientY-r;a<0&&(a=0),a>this.height&&(a=this.height);let s=parseFloat((a/this.height).toFixed(2));this.$emit("selectAlpha",s)};i(e);const n=()=>{document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",n)};document.addEventListener("mousemove",i),document.addEventListener("mouseup",n)}}});const ge={ref:"canvasAlpha"};function be(e,r,i,n,d,a){return h(),f("div",{class:"color-alpha",onMousedown:r[1]||(r[1]=R((...s)=>e.selectAlpha&&e.selectAlpha(...s),["prevent","stop"]))},[m("canvas",ge,null,512),m("div",{style:e.slideAlphaStyle,class:"slide"},null,4)],32)}M.render=be;M.__file="src/color/Alpha.vue";var q=N({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},data(){return{alphaSize:5}},watch:{color(){this.renderColor()}},mounted(){this.renderColor()},methods:{renderColor(){const e=this.$el,r=this.width,i=this.height,n=this.alphaSize,d=O(n),a=e.getContext("2d");e.width=r,e.height=i,a.fillStyle=a.createPattern(d,"repeat"),a.fillRect(0,0,r,i),a.fillStyle=this.color,a.fillRect(0,0,r,i)}}});function _e(e,r,i,n,d,a){return h(),f("canvas")}q.render=_e;q.__file="src/color/Preview.vue";var z=N({props:{suckerCanvas:{type:Object,default:null},suckerArea:{type:Array,default:()=>[]}},data(){return{isOpenSucker:!1,suckerPreview:null,isSucking:!1}},watch:{suckerCanvas(e){this.isSucking=!1,this.suckColor(e)}},methods:{openSucker(){this.isOpenSucker?this.keydownHandler({keyCode:27}):(this.isOpenSucker=!0,this.isSucking=!0,this.$emit("openSucker",!0),document.addEventListener("keydown",this.keydownHandler))},keydownHandler(e){e.keyCode===27&&(this.isOpenSucker=!1,this.isSucking=!1,this.$emit("openSucker",!1),document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("mousemove",this.mousemoveHandler),document.removeEventListener("mouseup",this.mousemoveHandler),this.suckerPreview&&(document.body.removeChild(this.suckerPreview),this.suckerPreview=null))},mousemoveHandler(e){const{clientX:r,clientY:i}=e,{top:n,left:d,width:a,height:s}=this.suckerCanvas.getBoundingClientRect(),u=r-d,p=i-n,$=this.suckerCanvas.getContext("2d").getImageData(Math.min(u,a-1),Math.min(p,s-1),1,1);let[k,w,V,F]=$.data;F=parseFloat((F/255).toFixed(2));const y=this.suckerPreview.style;Object.assign(y,{position:"absolute",left:r+20+"px",top:i-36+"px",width:"24px",height:"24px",borderRadius:"50%",border:"2px solid #fff",boxShadow:"0 0 8px 0 rgba(0, 0, 0, 0.16)",background:`rgba(${k}, ${w}, ${V}, ${F})`,zIndex:95}),this.suckerArea.length&&r>=this.suckerArea[0]&&i>=this.suckerArea[1]&&r<=this.suckerArea[2]&&i<=this.suckerArea[3]?y.display="":y.display="none"},suckColor(e){e&&e.tagName!=="CANVAS"||(this.suckerPreview=document.createElement("div"),this.suckerPreview&&document.body.appendChild(this.suckerPreview),document.addEventListener("mousemove",this.mousemoveHandler),document.addEventListener("mouseup",this.mousemoveHandler),e.addEventListener("click",r=>{const{clientX:i,clientY:n}=r,{top:d,left:a,width:s,height:u}=e.getBoundingClientRect(),p=i-a,S=n-d,k=e.getContext("2d").getImageData(Math.min(p,s-1),Math.min(S,u-1),1,1);let[w,V,F,y]=k.data;y=parseFloat((y/255).toFixed(2)),this.$emit("selectSucker",{r:w,g:V,b:F,a:y})}))}}});const ye=m("path",{d:"M13.1,8.2l5.6,5.6c0.4,0.4,0.5,1.1,0.1,1.5s-1.1,0.5-1.5,0.1c0,0-0.1,0-0.1-0.1l-1.4-1.4l-7.7,7.7C7.9,21.9,7.6,22,7.3,22H3.1C2.5,22,2,21.5,2,20.9l0,0v-4.2c0-0.3,0.1-0.6,0.3-0.8l5.8-5.8C8.5,9.7,9.2,9.6,9.7,10s0.5,1.1,0.1,1.5c0,0,0,0.1-0.1,0.1l-5.5,5.5v2.7h2.7l7.4-7.4L8.7,6.8c-0.5-0.4-0.5-1-0.1-1.5s1.1-0.5,1.5-0.1c0,0,0.1,0,0.1,0.1l1.4,1.4l3.5-3.5c1.6-1.6,4.1-1.6,5.8-0.1c1.6,1.6,1.6,4.1,0.1,5.8L20.9,9l-3.6,3.6c-0.4,0.4-1.1,0.5-1.5,0.1"},null,-1),Se={key:1,class:"sucker",viewBox:"-16 -16 68 68",xmlns:"http://www.w3.org/2000/svg",stroke:"#9099a4"},ke=m("g",{fill:"none","fill-rule":"evenodd"},[m("g",{transform:"translate(1 1)","stroke-width":"4"},[m("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),m("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[m("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})])])],-1);function Ce(e,r,i,n,d,a){return h(),f("div",null,[e.isSucking?b("v-if",!0):(h(),f("svg",{key:0,class:[{active:e.isOpenSucker},"sucker"],xmlns:"http://www.w3.org/2000/svg",viewBox:"-12 -12 48 48",onClick:r[1]||(r[1]=(...s)=>e.openSucker&&e.openSucker(...s))},[ye],2)),e.isSucking?(h(),f("svg",Se,[ke])):b("v-if",!0)])}z.render=Ce;z.__file="src/color/Sucker.vue";var Y=N({props:{name:{type:String,default:""},color:{type:String,default:""}},emits:["inputColor"],setup(e,{emit:r}){return{modelColor:ee({get(){return e.color||""},set(n){r("inputColor",n)}})}}});const $e={class:"color-type"},we={class:"name"};function xe(e,r,i,n,d,a){return h(),f("div",$e,[m("span",we,v(e.name),1),x(m("input",{"onUpdate:modelValue":r[1]||(r[1]=s=>e.modelColor=s),class:"value"},null,512),[[E,e.modelColor]])])}Y.render=xe;Y.__file="src/color/Box.vue";var W=N({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,default:()=>[]},colorsHistoryKey:{type:String,default:""}},emits:["selectColor"],setup(e,{emit:r}){const i=D(),n=D([]),d=D();e.colorsHistoryKey&&localStorage&&(n.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),d.value=O(4).toDataURL(),te(()=>{a(i.value)});function a(u){if(!u)return;const p=n.value||[],S=p.indexOf(u);S>=0&&p.splice(S,1),p.length>=8&&(p.length=7),p.unshift(u),n.value=p||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(p))}function s(u){r("selectColor",u)}return{setColorsHistory:a,colorsHistory:n,color:i,imgAlphaBase64:d,selectColor:s}}});const Ee={class:"colors"},Fe={key:0,class:"colors history"};function He(e,r,i,n,d,a){return h(),f("div",null,[m("ul",Ee,[(h(!0),f(L,null,I(e.colorsDefault,s=>(h(),f("li",{key:s,class:"item",onClick:u=>e.selectColor(s)},[m("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),m("div",{style:{background:s},class:"color"},null,4)],8,["onClick"]))),128))]),e.colorsHistory.length?(h(),f("ul",Fe,[(h(!0),f(L,null,I(e.colorsHistory,s=>(h(),f("li",{key:s,class:"item",onClick:u=>e.selectColor(s)},[m("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),m("div",{style:{background:s},class:"color"},null,4)],8,["onClick"]))),128))])):b("v-if",!0)])}W.render=He;W.__file="src/color/Colors.vue";var U=N({components:{Saturation:B,Hue:j,Alpha:M,Preview:q,Sucker:z,Box:Y,Colors:W},emits:["changeColor","openSucker"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},suckerHide:{type:Boolean,default:!0},suckerCanvas:{type:null,default:null},suckerArea:{type:Array,default:()=>[]},colorsDefault:{type:Array,default:()=>["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7","rgba(0,0,0,0)"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},data(){return{hueWidth:15,hueHeight:152,previewHeight:30,modelRgba:"",modelHex:"",r:0,g:0,b:0,a:1,h:0,s:0,v:0}},computed:{isLightTheme(){return this.theme==="light"},totalWidth(){return this.hueHeight+(this.hueWidth+8)*2},previewWidth(){return this.totalWidth-(this.suckerHide?0:this.previewHeight)},rgba(){return{r:this.r,g:this.g,b:this.b,a:this.a}},hsv(){return{h:this.h,s:this.s,v:this.v}},rgbString(){return`rgb(${this.r}, ${this.g}, ${this.b})`},rgbaStringShort(){return`${this.r}, ${this.g}, ${this.b}, ${this.a}`},rgbaString(){return`rgba(${this.rgbaStringShort})`},hexString(){return ce(this.rgba,!0)}},created(){Object.assign(this,A(this.color)),this.setText(),this.$watch("rgba",()=>{this.$emit("changeColor",{rgba:this.rgba,hsv:this.hsv,hex:this.modelHex})})},methods:{selectSaturation(e){const{r,g:i,b:n,h:d,s:a,v:s}=A(e);Object.assign(this,{r,g:i,b:n,h:d,s:a,v:s}),this.setText()},selectHue(e){const{r,g:i,b:n,h:d,s:a,v:s}=A(e);Object.assign(this,{r,g:i,b:n,h:d,s:a,v:s}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide()})},selectAlpha(e){this.a=e,this.setText()},inputHex(e){const{r,g:i,b:n,a:d,h:a,s,v:u}=A(e);Object.assign(this,{r,g:i,b:n,a:d,h:a,s,v:u}),this.modelHex=e,this.modelRgba=this.rgbaStringShort,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},inputRgba(e){const{r,g:i,b:n,a:d,h:a,s,v:u}=A(e);Object.assign(this,{r,g:i,b:n,a:d,h:a,s,v:u}),this.modelHex=this.hexString,this.modelRgba=e,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},setText(){this.modelHex=this.hexString,this.modelRgba=this.rgbaStringShort},openSucker(e){this.$emit("openSucker",e)},selectSucker(e){const{r,g:i,b:n,a:d,h:a,s,v:u}=A(e);Object.assign(this,{r,g:i,b:n,a:d,h:a,s,v:u}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},selectColor(e){const{r,g:i,b:n,a:d,h:a,s,v:u}=A(e);Object.assign(this,{r,g:i,b:n,a:d,h:a,s,v:u}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})}}});const Ne={class:"color-set"};function Ae(e,r,i,n,d,a){const s=H("Saturation"),u=H("Hue"),p=H("Alpha"),S=H("Preview"),$=H("Sucker"),k=H("Box"),w=H("Colors");return h(),f("div",{class:["hu-color-picker",{light:e.isLightTheme}],style:{width:e.totalWidth+"px"}},[m("div",Ne,[m(s,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),m(u,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"]),m(p,{ref:"alpha",color:e.rgbString,rgba:e.rgba,width:e.hueWidth,height:e.hueHeight,onSelectAlpha:e.selectAlpha},null,8,["color","rgba","width","height","onSelectAlpha"])]),m("div",{style:{height:e.previewHeight+"px"},class:"color-show"},[m(S,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"]),e.suckerHide?b("v-if",!0):(h(),f($,{key:0,"sucker-canvas":e.suckerCanvas,"sucker-area":e.suckerArea,onOpenSucker:e.openSucker,onSelectSucker:e.selectSucker},null,8,["sucker-canvas","sucker-area","onOpenSucker","onSelectSucker"]))],4),m(k,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),m(k,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),m(w,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"]),b(" custom options "),se(e.$slots,"default")],6)}U.render=Ae;U.__file="src/color/ColorPicker.vue";U.install=e=>{e.component(U.name,U)};const Le={class:"card card-action custom-container-card"},Ue={class:"card-header"},Ve=t("div",{class:"card-action-title align-items-center"},[t("h4",{class:"fw-bold mb-4 card-title pt-0"},[t("span",{class:"text-muted fw-light"},"Vehicles/ "),_(" Company Vehicle ")])],-1),Ie={class:"card-action-element"},Te=t("i",{class:"ti ti-plus ti-xs me-1"},null,-1),De={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},Pe={class:"offcanvas-header"},Re={id:"offCanvasFormLabel",class:"offcanvas-title"},Oe={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},Be={class:"offcanvas-body mx-0 flex-grow-0 pt-0"},je={class:"form-group mb-3"},Me=t("label",{for:""},[_("Car Brand "),t("span",{class:"required"},"*")],-1),qe={class:"invalid-feedback"},ze={class:"form-group mb-3"},Ye=t("label",{for:""},[_("Car Type "),t("span",{class:"required"},"*")],-1),We={class:"invalid-feedback"},Ke={class:"form-group mb-4 dropzone-profile-photo"},Xe=t("label",{for:"name"},"Upload Photo",-1),Ge={key:1},Je={class:"dropzone",ref:"dropzone"},Qe=t("div",{class:"dz-message needsclick"}," Please Wait ",-1),Ze=[Qe],et={key:2,class:"v-invalid-feedback"},tt={class:"form-group mb-3"},st=t("label",{for:""},[_("Car Model "),t("span",{class:"required"},"*")],-1),ot={class:"invalid-feedback"},rt={class:"form-group mb-3"},it=t("label",{for:""},[_("Color "),t("span",{class:"required"},"*")],-1),lt={class:"invalid-feedback"},nt={class:"form-group mb-3"},at=t("label",{for:""},[_("Year Model "),t("span",{class:"required"},"*")],-1),dt={class:"invalid-feedback"},ct={class:"form-group mb-3"},ut=t("label",{for:""},[_("Plate Number "),t("span",{class:"required"},"*")],-1),ht={class:"invalid-feedback"},mt={class:"form-group mb-3"},pt=t("label",{for:""},[_("Chassis Number "),t("span",{class:"required"},"*")],-1),vt={class:"invalid-feedback"},ft={class:"form-group mb-3"},gt=t("label",{for:""},[_("Engine Number "),t("span",{class:"required"},"*")],-1),bt={class:"invalid-feedback"},_t={class:"form-group mb-3"},yt=t("label",{for:""},[_("ORCR Number "),t("span",{class:"required"},"*")],-1),St={class:"invalid-feedback"},kt={class:"form-group mb-3"},Ct=t("label",{for:""},[_("Expiration Date "),t("span",{class:"required"},"*")],-1),$t={class:"invalid-feedback"},wt={class:"form-group mb-3"},xt=t("label",{for:""},"Insurance Company",-1),Et={class:"invalid-feedback"},Ft={class:"form-group mb-3"},Ht=t("label",{for:""},"Insurance Policy Number",-1),Nt={class:"invalid-feedback"},At={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Lt={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},Ut={class:"card-body"},Vt={class:"row justify-content-between"},It={class:"col-3 pr-0"},Tt={class:"d-flex align-items-center gap-2"},Dt=t("div",{class:"w-auto"},"Show",-1),Pt={class:"flex-1"},Rt=["value"],Ot=["value"],Bt=t("div",{class:"w-auto"},"entries",-1),jt={class:"col-5"},Mt={class:"d-flex gap-2 align-items-center"},qt=t("div",{class:"w-auto"},"Filter by Type:",-1),zt={class:"form-group",style:{width:"70%"}},Yt=["value"],Wt=t("option",{value:""},"All",-1),Kt=t("option",{value:"Private Vehicle"},"Private Vehicle",-1),Xt=t("option",{value:"Company Vehicle"},"Company Vehicle",-1),Gt=[Wt,Kt,Xt],Jt={class:"col-auto"},Qt={class:"d-flex gap-2 align-items-center"},Zt=t("div",{class:"w-auto"},"Search:",-1),es={class:"flex-1"},ts=["value"],ss={class:"row"},os={class:"card custom-card__hero"},rs={class:"user-profile-header-banner"},is=["src"],ls={class:"card-body text-left"},ns={class:"dropdown btn-pinned"},as=t("button",{type:"button",class:"btn dropdown-toggle hide-arrow p-0","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("i",{class:"ti ti-dots-vertical text-muted"})],-1),ds={class:"dropdown-menu dropdown-menu-end"},cs=["onClick"],us=["onClick"],hs=["onClick"],ms=t("li",null,[t("hr",{class:"dropdown-divider"})],-1),ps=["onClick"],vs={class:"mb-1 card-title card-text"},fs={class:"mb-0 card-text small-text"},gs={class:"mb-0 card-text small-text"},bs={class:"mb-0 card-text small-text"},_s={class:"pb-0 mb-0 card-text small-text"},ys={class:"pb-0 mb-0 card-text small-text"},Ss={key:0,class:"pb-0 mb-0 card-text small-text"},ks={key:1,class:"pb-0 mb-0 card-text small-text"},Cs={class:"d-flex align-items-center justify-content-center mt-3"},$s=["onClick"],ws=t("i",{class:"ti-xs me-1 ti ti-truck me-1"},null,-1),xs=t("a",{href:"javascript:;",class:"btn btn-label-secondary btn-icon waves-effect","data-bs-toggle":"modal","data-bs-target":"#editUser",type:"button"},[t("i",{class:"ti-xs me-1 ti ti-eye ti-sm"})],-1),Es={class:"row d-flex justify-content-center"},Fs={key:0,class:"col-md-11 card custom-card__hero"},Hs=t("div",{class:"card-body text-left"},[t("h5",{class:"text-center mb-0"},"No item found.")],-1),Ns=[Hs],As={key:0,class:"card-footer py-3"},Ls={class:"row justify-content-between"},Us={class:"col-auto"},Vs={class:"table_info"},Is={class:"col-auto"},Ts={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},Ds={class:"pagination mb-0"},Ps=["innerHTML"],Rs=t("div",{class:"modal fade",id:"editUser",tabindex:"-1","aria-hidden":"true"},[t("div",{class:"modal-dialog modal-lg modal-simple modal-edit-user"},[t("div",{class:"modal-content p-3 p-md-5"},[t("div",{class:"modal-body"},[t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"}),t("div",{class:"text-center mb-4"},[t("h3",{class:"mb-2"},"Repairs Information"),t("p",{class:"text-muted"},"This show the summary of repairs.")]),t("form",{id:"editUserForm",class:"row g-3",onsubmit:"return false"},[t("div",{class:"col-12 col-md-6"},[t("label",{class:"form-label",for:"modalEditUserFirstName"},"Driver Name"),t("input",{type:"text",id:"modalEditUserFirstName",name:"modalEditUserFirstName",class:"form-control",readonly:""})]),t("div",{class:"col-12 col-md-6"},[t("label",{class:"form-label",for:"modalEditUserLastName"},"Vehicle Model"),t("input",{type:"text",id:"modalEditUserLastName",name:"modalEditUserLastName",class:"form-control",readonly:""})]),t("div",{class:"col-12"},[t("label",{class:"form-label",for:"modalEditUserName"},"Vehicle Type"),t("input",{type:"text",id:"modalEditUserName",name:"modalEditUserName",class:"form-control",readonly:""})]),t("div",{class:"col-12 col-md-6"},[t("label",{class:"form-label",for:"modalEditUserEmail"},"Vehicle Brand"),t("input",{type:"text",id:"modalEditUserEmail",name:"modalEditUserEmail",class:"form-control",readonly:""})]),t("div",{class:"col-12 col-md-6"},[t("label",{class:"form-label",for:"modalEditUserStatus"},"Vehicle Year"),t("input",{type:"text",id:"modalEditUserEmail",name:"modalEditUserEmail",class:"form-control",readonly:""})]),t("div",{class:"col-12 col-md-6"},[t("label",{class:"form-label",for:"modalEditTaxID"},"Item/Service Name"),t("input",{type:"text",id:"modalEditTaxID",name:"modalEditTaxID",class:"form-control modal-edit-tax-id",readonly:""})]),t("div",{class:"col-12 col-md-6"},[t("label",{class:"form-label",for:"modalEditUserPhone"},"Amount"),t("div",{class:"input-group"},[t("span",{class:"input-group-text"},"PHP"),t("input",{type:"text",id:"modalEditUserPhone",name:"modalEditUserPhone",class:"form-control phone-number-mask",readonly:""})])]),t("div",{class:"col-12 col-md-12"},[t("label",{class:"form-label",for:"modalEditTaxID"},"Status"),t("input",{type:"text",id:"modalEditTaxID",name:"modalEditTaxID",class:"form-control modal-edit-tax-id",readonly:""})])])])])])],-1),Os={components:{ColorPicker:U},props:{data:Object,brands:Array,types:Object,vehicle_model:Object},layout:de,methods:{getBrandName(e){const r=this.brands.find(i=>i.id===e);return r?r.name:"Unknown brand"},getTypeName(e){const r=this.types.find(i=>i.id===e);return r?r.name:"Unknown brand"},openDrive(e){window.location.href=`/vehicles/${e}`},openRepair(e){window.location.href=`/vehicle-repair-logs/${e}`},openRescue(e){window.location.href=`/vehicle-rescue-logs/${e}`}}},Ys=Object.assign(Os,{__name:"Index",setup(e){oe();const r={vehicle_brand_id:null,model:null,vehicle_type_id:null,color:null,year:null,assigned_to:1,plate_number:null,image:null,chassis_number:null,engine_number:null,orcr_number:null,expiration_date:null,insurance_company:null,insurance_policy_number:null},{validateForm:i}=ae(),n="vehicles";let{isLoadingComponents:d,paginatedData:a,form:s,createPromise:u,updatePromise:p,deletePromise:S,handleCreate:$,serverQuery:k,handleServerQuery:w,handleEdit:V,formState:F}=ne(r,n);return(y,c)=>{const K=H("v-select"),Q=H("dropzone");return h(),g(L,null,[m(o(re),{title:"Vehicle"}),t("div",Le,[t("div",Ue,[Ve,t("div",Ie,[t("button",{class:"btn btn-primary",type:"button",onClick:c[0]||(c[0]=(...l)=>o($)&&o($)(...l)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"},[Te,_(" Add Vehicle ")]),t("div",De,[t("div",Pe,[t("h5",Re,v(o(F)=="create"?"Add":"Update")+" Vehicle ",1),o(s).processing?b("",!0):(h(),g("button",Oe))]),t("div",Be,[t("div",je,[Me,m(K,{options:e.brands,modelValue:o(s).vehicle_brand_id,"onUpdate:modelValue":[c[1]||(c[1]=l=>o(s).vehicle_brand_id=l),c[2]||(c[2]=l=>o(s).clearErrors("vehicle_brand_id"))],reduce:l=>l.id,label:"name",placeholder:"Select Brand",class:C({"is-invalid":o(s).errors.vehicle_brand_id})},null,8,["options","modelValue","reduce","class"]),t("div",qe,v(o(s).errors.vehicle_brand_id),1)]),t("div",ze,[Ye,m(K,{options:e.types,modelValue:o(s).vehicle_type_id,"onUpdate:modelValue":[c[3]||(c[3]=l=>o(s).vehicle_type_id=l),c[4]||(c[4]=l=>o(s).clearErrors("vehicle_type_id"))],reduce:l=>l.id,label:"name",placeholder:"Select Type",class:C({"is-invalid":o(s).errors.vehicle_type_id})},null,8,["options","modelValue","reduce","class"]),t("div",We,v(o(s).errors.vehicle_type_id),1)]),t("div",Ke,[Xe,o(d)?(h(),f(Q,{key:0,collection:"image",url:y.route("api.media.upload"),type:"profile",model:"Vehicle\\Vehicle",value:o(s).image,onInput:c[5]||(c[5]=l=>{o(s).image=l,o(s).clearErrors("image")}),message:"Drop files here or click to upload profile photo",acceptedFiles:"image/jpeg,image/png",onError:c[6]||(c[6]=l=>{l&&l[0]&&o(s).setError("image",l[0])})},null,8,["url","value"])):(h(),g("div",Ge,[t("div",Je,Ze,512)])),o(s).errors.image?(h(),g("div",et,v(o(s).errors.image),1)):b("",!0)]),t("div",tt,[st,x(t("input",{type:"text",class:C(["form-control",{"is-invalid":o(s).errors.model}]),"onUpdate:modelValue":c[7]||(c[7]=l=>o(s).model=l),onInput:c[8]||(c[8]=l=>{o(s).clearErrors("model"),o(i)(["required"],o(s),l.target.value,"model")}),placeholder:"Enter Car Model"},null,34),[[E,o(s).model]]),t("div",ot,v(o(s).errors.model),1)]),t("div",rt,[it,x(t("input",{type:"text",class:C(["form-control",{"is-invalid":o(s).errors.color}]),"onUpdate:modelValue":c[9]||(c[9]=l=>o(s).color=l),onInput:c[10]||(c[10]=l=>{o(s).clearErrors("color"),o(i)(["required"],o(s),l.target.value,"color")}),placeholder:"Enter Color"},null,34),[[E,o(s).color]]),t("div",lt,v(o(s).errors.color),1)]),t("div",nt,[at,x(t("input",{type:"text",class:C(["form-control",{"is-invalid":o(s).errors.year}]),"onUpdate:modelValue":c[11]||(c[11]=l=>o(s).year=l),onInput:c[12]||(c[12]=l=>{o(s).clearErrors("year"),o(i)(["required"],o(s),l.target.value,"year")}),placeholder:"Enter Year Model"},null,34),[[E,o(s).year]]),t("div",dt,v(o(s).errors.year),1)]),t("div",ct,[ut,x(t("input",{type:"text",class:C(["form-control",{"is-invalid":o(s).errors.plate_number}]),"onUpdate:modelValue":c[13]||(c[13]=l=>o(s).plate_number=l),onInput:c[14]||(c[14]=l=>{o(s).clearErrors("plate_number"),o(i)(["required"],o(s),l.target.value,"plate_number")}),placeholder:"Enter Plate Number"},null,34),[[E,o(s).plate_number]]),t("div",ht,v(o(s).errors.plate_number),1)]),t("div",mt,[pt,x(t("input",{type:"text",class:C(["form-control",{"is-invalid":o(s).errors.chassis_number}]),"onUpdate:modelValue":c[15]||(c[15]=l=>o(s).chassis_number=l),onInput:c[16]||(c[16]=l=>{o(s).clearErrors("chassis_number"),o(i)(["required"],o(s),l.target.value,"chassis_number")}),placeholder:"Enter Chassis Number"},null,34),[[E,o(s).chassis_number]]),t("div",vt,v(o(s).errors.chassis_number),1)]),t("div",ft,[gt,x(t("input",{type:"text",class:C(["form-control",{"is-invalid":o(s).errors.engine_number}]),"onUpdate:modelValue":c[17]||(c[17]=l=>o(s).engine_number=l),onInput:c[18]||(c[18]=l=>{o(s).clearErrors("engine_number"),o(i)(["required"],o(s),l.target.value,"engine_number")}),placeholder:"Enter Engine Number"},null,34),[[E,o(s).engine_number]]),t("div",bt,v(o(s).errors.engine_number),1)]),t("div",_t,[yt,x(t("input",{type:"text",class:C(["form-control",{"is-invalid":o(s).errors.orcr_number}]),"onUpdate:modelValue":c[19]||(c[19]=l=>o(s).orcr_number=l),onInput:c[20]||(c[20]=l=>{o(s).clearErrors("orcr_number"),o(i)(["required"],o(s),l.target.value,"orcr_number")}),placeholder:"Enter ORCR Number"},null,34),[[E,o(s).orcr_number]]),t("div",St,v(o(s).errors.orcr_number),1)]),t("div",kt,[Ct,x(t("input",{type:"date",class:"form-control dob-picker",placeholder:"YYYY-MM-DD","onUpdate:modelValue":c[21]||(c[21]=l=>o(s).expiration_date=l)},null,512),[[E,o(s).expiration_date]]),t("div",$t,v(o(s).errors.expiration_date),1)]),t("div",wt,[xt,x(t("input",{type:"text",class:C(["form-control",{"is-invalid":o(s).errors.insurance_company}]),"onUpdate:modelValue":c[22]||(c[22]=l=>o(s).insurance_company=l),onInput:c[23]||(c[23]=l=>{o(s).clearErrors("insurance_company"),o(i)(["required"],o(s),l.target.value,"insurance_company")}),placeholder:"Enter Insurance Company"},null,34),[[E,o(s).insurance_company]]),t("div",Et,v(o(s).errors.insurance_company),1)]),t("div",Ft,[Ht,x(t("input",{type:"text",class:C(["form-control",{"is-invalid":o(s).errors.insurance_policy_number}]),"onUpdate:modelValue":c[24]||(c[24]=l=>o(s).insurance_policy_number=l),onInput:c[25]||(c[25]=l=>{o(s).clearErrors("insurance_policy_number"),o(i)(["required"],o(s),l.target.value,"insurance_policy_number")}),placeholder:"Enter Insurance Policy Number"},null,34),[[E,o(s).insurance_policy_number]]),t("div",Nt,v(o(s).errors.insurance_policy_number),1)]),o(F)=="create"?(h(),g("button",{key:0,class:"btn btn-primary",onClick:c[26]||(c[26]=(...l)=>o(u)&&o(u)(...l))},[o(s).processing?(h(),g("span",At)):b("",!0),_(" Save ")])):b("",!0),o(F)=="update"?(h(),g("button",{key:1,class:"btn btn-primary",onClick:c[27]||(c[27]=(...l)=>o(p)&&o(p)(...l))},[o(s).processing?(h(),g("span",Lt)):b("",!0),_(" Save changes ")])):b("",!0)])])])]),t("div",Ut,[t("div",Vt,[t("div",It,[t("div",Tt,[Dt,t("div",Pt,[t("select",{class:"form-select",value:o(k).perPage,onInput:c[28]||(c[28]=l=>o(w)("perPage",l.target.value))},[(h(),g(L,null,I([5,10,25,50,100],l=>t("option",{value:String(l),key:l},v(l),9,Ot)),64))],40,Rt)]),Bt])]),t("div",jt,[t("div",Mt,[qt,t("div",zt,[t("select",{class:"form-select",id:"basic-default-country",value:o(k).type,onInput:c[29]||(c[29]=l=>o(w)("type",l.target.value))},Gt,40,Yt)])])]),t("div",Jt,[t("div",Qt,[Zt,t("div",es,[t("input",{type:"search",placeholder:"Search",class:"form-control",value:o(k).query,onInput:c[30]||(c[30]=l=>o(w)("query",l.target.value))},null,40,ts)])])])])]),t("div",ss,[(h(!0),g(L,null,I(e.data.data,(l,Z)=>{var X,G;return h(),g("div",{class:"col-xl-4 col-lg-4 col-md-4",key:Z},[t("div",os,[t("div",rs,[t("img",{class:"banner-custom-img",style:{"border-top-left-radius":"5px","border-top-right-radius":"5px"},src:l.image_url,alt:""},null,8,is)]),t("div",ls,[t("div",ns,[as,t("ul",ds,[t("li",null,[t("a",{class:"dropdown-item",onClick:T=>y.openDrive(l.id)},"Drive Logs",8,cs)]),t("li",null,[t("a",{class:"dropdown-item",onClick:T=>y.openRepair(l.id)},"Repair Logs",8,us)]),t("li",null,[t("a",{class:"dropdown-item",onClick:T=>y.openRescue(l.id)},"Rescue Logs",8,hs)]),ms,t("li",null,[t("a",{class:"dropdown-item text-danger",href:"javascript:void(0);",onClick:T=>o(S)(l.id)},"Delete",8,ps)])])]),t("h4",vs,v(y.getBrandName(l.vehicle_brand_id)),1),t("h6",fs,v(y.getTypeName(l.vehicle_type_id)),1),t("h6",gs,v(l.model),1),t("h6",bs,v(l.color),1),t("h6",_s,v(l.year),1),t("h6",ys,v(l.plate_number),1),(X=l.last_driver)!=null&&X.name?(h(),g("h6",Ss,"Last Driven By: "+v((G=l.last_driver)==null?void 0:G.name),1)):b("",!0),l.odometer?(h(),g("h6",ks,"Current Odometer: "+v(l.odometer),1)):b("",!0),t("div",Cs,[t("a",{href:"javascript:;",class:"btn btn-primary d-flex align-items-center me-3",onClick:T=>o(V)(l)},[ws,_(" Edit Vehicle ")],8,$s),xs])])])])}),128)),t("div",Es,[e.data?b("",!0):(h(),g("div",Fs,Ns))])]),o(a)&&o(a).meta.links?(h(),g("div",As,[t("div",Ls,[t("div",Us,[t("div",Vs," Showing "+v(o(a).meta.from)+" to "+v(o(a).meta.to)+" of "+v(o(a).meta.total)+" entries ",1)]),t("div",Is,[t("nav",Ts,[t("ul",Ds,[(h(!0),g(L,null,I(o(a).meta.links,l=>(h(),g("li",{class:"page-item",key:l},[(h(),f(le(l.url?"inertia-link":"button"),{class:C(["page-link",{active:l.active}]),href:l.url,only:["data","params"]},{default:ie(()=>[t("span",{innerHTML:l.label},null,8,Ps)]),_:2},1032,["class","href"]))]))),128))])])])])])):b("",!0)]),Rs],64)}}});export{Ys as default};