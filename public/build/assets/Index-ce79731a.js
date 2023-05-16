import{q as F,s as Q,x as P,y as Z,o as h,h as f,a as m,z as V,e as y,t as v,w as T,v as U,F as A,r as B,g as w,A as ee,J as te,c as g,u as i,b as t,d as _,n as E,X as se,i as oe,j as re}from"./app-bd871c56.js";import{u as ie}from"./Crud-a9371b3a.js";import{u as ae}from"./Validate-14bdba66.js";import{A as le}from"./AdminLayout-2dd0d178.js";/*!
  * vue-color-kit v1.0.4
  * (c) 2021 
  * @license MIT
  */function H(e){let o={r:0,g:0,b:0,a:1};/#/.test(e)?o=de(e):/rgb/.test(e)?o=Y(e):typeof e=="string"?o=Y(`rgba(${e})`):Object.prototype.toString.call(e)==="[object Object]"&&(o=e);const{r,g:a,b:d,a:l}=o,{h:s,s:c,v:p}=ce(o);return{r,g:a,b:d,a:l===void 0?1:l,h:s,s:c,v:p}}function I(e){const o=document.createElement("canvas"),r=o.getContext("2d"),a=e*2;return o.width=a,o.height=a,r.fillStyle="#ffffff",r.fillRect(0,0,a,a),r.fillStyle="#ccd5db",r.fillRect(0,0,e,e),r.fillRect(e,e,e,e),o}function D(e,o,r,a,d,l){const s=e==="l",c=o.createLinearGradient(0,0,s?r:0,s?0:a);c.addColorStop(.01,d),c.addColorStop(.99,l),o.fillStyle=c,o.fillRect(0,0,r,a)}function ne({r:e,g:o,b:r},a){const d=s=>("0"+Number(s).toString(16)).slice(-2),l=`#${d(e)}${d(o)}${d(r)}`;return a?l.toUpperCase():l}function de(e){e=e.slice(1);const o=r=>parseInt(r,16)||0;return{r:o(e.slice(0,2)),g:o(e.slice(2,4)),b:o(e.slice(4,6))}}function Y(e){return typeof e=="string"?(e=(/rgba?\((.*?)\)/.exec(e)||["","0,0,0,1"])[1].split(","),{r:Number(e[0])||0,g:Number(e[1])||0,b:Number(e[2])||0,a:Number(e[3]?e[3]:1)}):e}function ce({r:e,g:o,b:r}){e=e/255,o=o/255,r=r/255;const a=Math.max(e,o,r),d=Math.min(e,o,r),l=a-d;let s=0;a===d?s=0:a===e?o>=r?s=60*(o-r)/l:s=60*(o-r)/l+360:a===o?s=60*(r-e)/l+120:a===r&&(s=60*(e-o)/l+240),s=Math.floor(s);let c=parseFloat((a===0?0:1-d/a).toFixed(2)),p=parseFloat(a.toFixed(2));return{h:s,s:c,v:p}}var O=F({props:{color:{type:String,default:"#000000"},hsv:{type:Object,default:null},size:{type:Number,default:152}},emits:["selectSaturation"],data(){return{slideSaturationStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasSaturation,o=this.size,r=e.getContext("2d");e.width=o,e.height=o,r.fillStyle=this.color,r.fillRect(0,0,o,o),D("l",r,o,o,"#FFFFFF","rgba(255,255,255,0)"),D("p",r,o,o,"rgba(0,0,0,0)","#000000")},renderSlide(){this.slideSaturationStyle={left:this.hsv.s*this.size-5+"px",top:(1-this.hsv.v)*this.size-5+"px"}},selectSaturation(e){const{top:o,left:r}=this.$el.getBoundingClientRect(),a=e.target.getContext("2d"),d=s=>{let c=s.clientX-r,p=s.clientY-o;c<0&&(c=0),p<0&&(p=0),c>this.size&&(c=this.size),p>this.size&&(p=this.size),this.slideSaturationStyle={left:c-5+"px",top:p-5+"px"};const b=a.getImageData(Math.min(c,this.size-1),Math.min(p,this.size-1),1,1),[S,k,$]=b.data;this.$emit("selectSaturation",{r:S,g:k,b:$})};d(e);const l=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",l)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",l)}}});const ue={ref:"canvasSaturation"};function he(e,o,r,a,d,l){return h(),f("div",{class:"saturation",onMousedown:o[1]||(o[1]=V((...s)=>e.selectSaturation&&e.selectSaturation(...s),["prevent","stop"]))},[m("canvas",ue,null,512),m("div",{style:e.slideSaturationStyle,class:"slide"},null,4)],32)}O.render=he;O.__file="src/color/Saturation.vue";var j=F({props:{hsv:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectHue"],data(){return{slideHueStyle:{}}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasHue,o=this.width,r=this.height,a=e.getContext("2d");e.width=o,e.height=r;const d=a.createLinearGradient(0,0,0,r);d.addColorStop(0,"#FF0000"),d.addColorStop(.17*1,"#FF00FF"),d.addColorStop(.17*2,"#0000FF"),d.addColorStop(.17*3,"#00FFFF"),d.addColorStop(.17*4,"#00FF00"),d.addColorStop(.17*5,"#FFFF00"),d.addColorStop(1,"#FF0000"),a.fillStyle=d,a.fillRect(0,0,o,r)},renderSlide(){this.slideHueStyle={top:(1-this.hsv.h/360)*this.height-2+"px"}},selectHue(e){const{top:o}=this.$el.getBoundingClientRect(),r=e.target.getContext("2d"),a=l=>{let s=l.clientY-o;s<0&&(s=0),s>this.height&&(s=this.height),this.slideHueStyle={top:s-2+"px"};const c=r.getImageData(0,Math.min(s,this.height-1),1,1),[p,b,S]=c.data;this.$emit("selectHue",{r:p,g:b,b:S})};a(e);const d=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",d)};document.addEventListener("mousemove",a),document.addEventListener("mouseup",d)}}});const me={ref:"canvasHue"};function pe(e,o,r,a,d,l){return h(),f("div",{class:"hue",onMousedown:o[1]||(o[1]=V((...s)=>e.selectHue&&e.selectHue(...s),["prevent","stop"]))},[m("canvas",me,null,512),m("div",{style:e.slideHueStyle,class:"slide"},null,4)],32)}j.render=pe;j.__file="src/color/Hue.vue";var R=F({props:{color:{type:String,default:"#000000"},rgba:{type:Object,default:null},width:{type:Number,default:15},height:{type:Number,default:152}},emits:["selectAlpha"],data(){return{slideAlphaStyle:{},alphaSize:5}},watch:{color(){this.renderColor()},"rgba.a"(){this.renderSlide()}},mounted(){this.renderColor(),this.renderSlide()},methods:{renderColor(){const e=this.$refs.canvasAlpha,o=this.width,r=this.height,a=this.alphaSize,d=I(a),l=e.getContext("2d");e.width=o,e.height=r,l.fillStyle=l.createPattern(d,"repeat"),l.fillRect(0,0,o,r),D("p",l,o,r,"rgba(255,255,255,0)",this.color)},renderSlide(){this.slideAlphaStyle={top:this.rgba.a*this.height-2+"px"}},selectAlpha(e){const{top:o}=this.$el.getBoundingClientRect(),r=d=>{let l=d.clientY-o;l<0&&(l=0),l>this.height&&(l=this.height);let s=parseFloat((l/this.height).toFixed(2));this.$emit("selectAlpha",s)};r(e);const a=()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",a)};document.addEventListener("mousemove",r),document.addEventListener("mouseup",a)}}});const ve={ref:"canvasAlpha"};function fe(e,o,r,a,d,l){return h(),f("div",{class:"color-alpha",onMousedown:o[1]||(o[1]=V((...s)=>e.selectAlpha&&e.selectAlpha(...s),["prevent","stop"]))},[m("canvas",ve,null,512),m("div",{style:e.slideAlphaStyle,class:"slide"},null,4)],32)}R.render=fe;R.__file="src/color/Alpha.vue";var M=F({props:{color:{type:String,default:"#000000"},width:{type:Number,default:100},height:{type:Number,default:30}},data(){return{alphaSize:5}},watch:{color(){this.renderColor()}},mounted(){this.renderColor()},methods:{renderColor(){const e=this.$el,o=this.width,r=this.height,a=this.alphaSize,d=I(a),l=e.getContext("2d");e.width=o,e.height=r,l.fillStyle=l.createPattern(d,"repeat"),l.fillRect(0,0,o,r),l.fillStyle=this.color,l.fillRect(0,0,o,r)}}});function ge(e,o,r,a,d,l){return h(),f("canvas")}M.render=ge;M.__file="src/color/Preview.vue";var z=F({props:{suckerCanvas:{type:Object,default:null},suckerArea:{type:Array,default:()=>[]}},data(){return{isOpenSucker:!1,suckerPreview:null,isSucking:!1}},watch:{suckerCanvas(e){this.isSucking=!1,this.suckColor(e)}},methods:{openSucker(){this.isOpenSucker?this.keydownHandler({keyCode:27}):(this.isOpenSucker=!0,this.isSucking=!0,this.$emit("openSucker",!0),document.addEventListener("keydown",this.keydownHandler))},keydownHandler(e){e.keyCode===27&&(this.isOpenSucker=!1,this.isSucking=!1,this.$emit("openSucker",!1),document.removeEventListener("keydown",this.keydownHandler),document.removeEventListener("mousemove",this.mousemoveHandler),document.removeEventListener("mouseup",this.mousemoveHandler),this.suckerPreview&&(document.body.removeChild(this.suckerPreview),this.suckerPreview=null))},mousemoveHandler(e){const{clientX:o,clientY:r}=e,{top:a,left:d,width:l,height:s}=this.suckerCanvas.getBoundingClientRect(),c=o-d,p=r-a,S=this.suckerCanvas.getContext("2d").getImageData(Math.min(c,l-1),Math.min(p,s-1),1,1);let[k,$,N,x]=S.data;x=parseFloat((x/255).toFixed(2));const C=this.suckerPreview.style;Object.assign(C,{position:"absolute",left:o+20+"px",top:r-36+"px",width:"24px",height:"24px",borderRadius:"50%",border:"2px solid #fff",boxShadow:"0 0 8px 0 rgba(0, 0, 0, 0.16)",background:`rgba(${k}, ${$}, ${N}, ${x})`,zIndex:95}),this.suckerArea.length&&o>=this.suckerArea[0]&&r>=this.suckerArea[1]&&o<=this.suckerArea[2]&&r<=this.suckerArea[3]?C.display="":C.display="none"},suckColor(e){e&&e.tagName!=="CANVAS"||(this.suckerPreview=document.createElement("div"),this.suckerPreview&&document.body.appendChild(this.suckerPreview),document.addEventListener("mousemove",this.mousemoveHandler),document.addEventListener("mouseup",this.mousemoveHandler),e.addEventListener("click",o=>{const{clientX:r,clientY:a}=o,{top:d,left:l,width:s,height:c}=e.getBoundingClientRect(),p=r-l,b=a-d,k=e.getContext("2d").getImageData(Math.min(p,s-1),Math.min(b,c-1),1,1);let[$,N,x,C]=k.data;C=parseFloat((C/255).toFixed(2)),this.$emit("selectSucker",{r:$,g:N,b:x,a:C})}))}}});const be=m("path",{d:"M13.1,8.2l5.6,5.6c0.4,0.4,0.5,1.1,0.1,1.5s-1.1,0.5-1.5,0.1c0,0-0.1,0-0.1-0.1l-1.4-1.4l-7.7,7.7C7.9,21.9,7.6,22,7.3,22H3.1C2.5,22,2,21.5,2,20.9l0,0v-4.2c0-0.3,0.1-0.6,0.3-0.8l5.8-5.8C8.5,9.7,9.2,9.6,9.7,10s0.5,1.1,0.1,1.5c0,0,0,0.1-0.1,0.1l-5.5,5.5v2.7h2.7l7.4-7.4L8.7,6.8c-0.5-0.4-0.5-1-0.1-1.5s1.1-0.5,1.5-0.1c0,0,0.1,0,0.1,0.1l1.4,1.4l3.5-3.5c1.6-1.6,4.1-1.6,5.8-0.1c1.6,1.6,1.6,4.1,0.1,5.8L20.9,9l-3.6,3.6c-0.4,0.4-1.1,0.5-1.5,0.1"},null,-1),ye={key:1,class:"sucker",viewBox:"-16 -16 68 68",xmlns:"http://www.w3.org/2000/svg",stroke:"#9099a4"},_e=m("g",{fill:"none","fill-rule":"evenodd"},[m("g",{transform:"translate(1 1)","stroke-width":"4"},[m("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),m("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[m("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})])])],-1);function Se(e,o,r,a,d,l){return h(),f("div",null,[e.isSucking?y("v-if",!0):(h(),f("svg",{key:0,class:[{active:e.isOpenSucker},"sucker"],xmlns:"http://www.w3.org/2000/svg",viewBox:"-12 -12 48 48",onClick:o[1]||(o[1]=(...s)=>e.openSucker&&e.openSucker(...s))},[be],2)),e.isSucking?(h(),f("svg",ye,[_e])):y("v-if",!0)])}z.render=Se;z.__file="src/color/Sucker.vue";var q=F({props:{name:{type:String,default:""},color:{type:String,default:""}},emits:["inputColor"],setup(e,{emit:o}){return{modelColor:Q({get(){return e.color||""},set(a){o("inputColor",a)}})}}});const ke={class:"color-type"},Ce={class:"name"};function $e(e,o,r,a,d,l){return h(),f("div",ke,[m("span",Ce,v(e.name),1),T(m("input",{"onUpdate:modelValue":o[1]||(o[1]=s=>e.modelColor=s),class:"value"},null,512),[[U,e.modelColor]])])}q.render=$e;q.__file="src/color/Box.vue";var W=F({name:"ColorPicker",props:{color:{type:String,default:"#000000"},colorsDefault:{type:Array,default:()=>[]},colorsHistoryKey:{type:String,default:""}},emits:["selectColor"],setup(e,{emit:o}){const r=P(),a=P([]),d=P();e.colorsHistoryKey&&localStorage&&(a.value=JSON.parse(localStorage.getItem(e.colorsHistoryKey))||[]),d.value=I(4).toDataURL(),Z(()=>{l(r.value)});function l(c){if(!c)return;const p=a.value||[],b=p.indexOf(c);b>=0&&p.splice(b,1),p.length>=8&&(p.length=7),p.unshift(c),a.value=p||[],localStorage&&e.colorsHistoryKey&&localStorage.setItem(e.colorsHistoryKey,JSON.stringify(p))}function s(c){o("selectColor",c)}return{setColorsHistory:l,colorsHistory:a,color:r,imgAlphaBase64:d,selectColor:s}}});const xe={class:"colors"},we={key:0,class:"colors history"};function Fe(e,o,r,a,d,l){return h(),f("div",null,[m("ul",xe,[(h(!0),f(A,null,B(e.colorsDefault,s=>(h(),f("li",{key:s,class:"item",onClick:c=>e.selectColor(s)},[m("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),m("div",{style:{background:s},class:"color"},null,4)],8,["onClick"]))),128))]),e.colorsHistory.length?(h(),f("ul",we,[(h(!0),f(A,null,B(e.colorsHistory,s=>(h(),f("li",{key:s,class:"item",onClick:c=>e.selectColor(s)},[m("div",{style:{background:`url(${e.imgAlphaBase64})`},class:"alpha"},null,4),m("div",{style:{background:s},class:"color"},null,4)],8,["onClick"]))),128))])):y("v-if",!0)])}W.render=Fe;W.__file="src/color/Colors.vue";var L=F({components:{Saturation:O,Hue:j,Alpha:R,Preview:M,Sucker:z,Box:q,Colors:W},emits:["changeColor","openSucker"],props:{color:{type:String,default:"#000000"},theme:{type:String,default:"dark"},suckerHide:{type:Boolean,default:!0},suckerCanvas:{type:null,default:null},suckerArea:{type:Array,default:()=>[]},colorsDefault:{type:Array,default:()=>["#000000","#FFFFFF","#FF1900","#F47365","#FFB243","#FFE623","#6EFF2A","#1BC7B1","#00BEFF","#2E81FF","#5D61FF","#FF89CF","#FC3CAD","#BF3DCE","#8E00A7","rgba(0,0,0,0)"]},colorsHistoryKey:{type:String,default:"vue-colorpicker-history"}},data(){return{hueWidth:15,hueHeight:152,previewHeight:30,modelRgba:"",modelHex:"",r:0,g:0,b:0,a:1,h:0,s:0,v:0}},computed:{isLightTheme(){return this.theme==="light"},totalWidth(){return this.hueHeight+(this.hueWidth+8)*2},previewWidth(){return this.totalWidth-(this.suckerHide?0:this.previewHeight)},rgba(){return{r:this.r,g:this.g,b:this.b,a:this.a}},hsv(){return{h:this.h,s:this.s,v:this.v}},rgbString(){return`rgb(${this.r}, ${this.g}, ${this.b})`},rgbaStringShort(){return`${this.r}, ${this.g}, ${this.b}, ${this.a}`},rgbaString(){return`rgba(${this.rgbaStringShort})`},hexString(){return ne(this.rgba,!0)}},created(){Object.assign(this,H(this.color)),this.setText(),this.$watch("rgba",()=>{this.$emit("changeColor",{rgba:this.rgba,hsv:this.hsv,hex:this.modelHex})})},methods:{selectSaturation(e){const{r:o,g:r,b:a,h:d,s:l,v:s}=H(e);Object.assign(this,{r:o,g:r,b:a,h:d,s:l,v:s}),this.setText()},selectHue(e){const{r:o,g:r,b:a,h:d,s:l,v:s}=H(e);Object.assign(this,{r:o,g:r,b:a,h:d,s:l,v:s}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide()})},selectAlpha(e){this.a=e,this.setText()},inputHex(e){const{r:o,g:r,b:a,a:d,h:l,s,v:c}=H(e);Object.assign(this,{r:o,g:r,b:a,a:d,h:l,s,v:c}),this.modelHex=e,this.modelRgba=this.rgbaStringShort,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},inputRgba(e){const{r:o,g:r,b:a,a:d,h:l,s,v:c}=H(e);Object.assign(this,{r:o,g:r,b:a,a:d,h:l,s,v:c}),this.modelHex=this.hexString,this.modelRgba=e,this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},setText(){this.modelHex=this.hexString,this.modelRgba=this.rgbaStringShort},openSucker(e){this.$emit("openSucker",e)},selectSucker(e){const{r:o,g:r,b:a,a:d,h:l,s,v:c}=H(e);Object.assign(this,{r:o,g:r,b:a,a:d,h:l,s,v:c}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})},selectColor(e){const{r:o,g:r,b:a,a:d,h:l,s,v:c}=H(e);Object.assign(this,{r:o,g:r,b:a,a:d,h:l,s,v:c}),this.setText(),this.$nextTick(()=>{this.$refs.saturation.renderColor(),this.$refs.saturation.renderSlide(),this.$refs.hue.renderSlide()})}}});const Ee={class:"color-set"};function He(e,o,r,a,d,l){const s=w("Saturation"),c=w("Hue"),p=w("Alpha"),b=w("Preview"),S=w("Sucker"),k=w("Box"),$=w("Colors");return h(),f("div",{class:["hu-color-picker",{light:e.isLightTheme}],style:{width:e.totalWidth+"px"}},[m("div",Ee,[m(s,{ref:"saturation",color:e.rgbString,hsv:e.hsv,size:e.hueHeight,onSelectSaturation:e.selectSaturation},null,8,["color","hsv","size","onSelectSaturation"]),m(c,{ref:"hue",hsv:e.hsv,width:e.hueWidth,height:e.hueHeight,onSelectHue:e.selectHue},null,8,["hsv","width","height","onSelectHue"]),m(p,{ref:"alpha",color:e.rgbString,rgba:e.rgba,width:e.hueWidth,height:e.hueHeight,onSelectAlpha:e.selectAlpha},null,8,["color","rgba","width","height","onSelectAlpha"])]),m("div",{style:{height:e.previewHeight+"px"},class:"color-show"},[m(b,{color:e.rgbaString,width:e.previewWidth,height:e.previewHeight},null,8,["color","width","height"]),e.suckerHide?y("v-if",!0):(h(),f(S,{key:0,"sucker-canvas":e.suckerCanvas,"sucker-area":e.suckerArea,onOpenSucker:e.openSucker,onSelectSucker:e.selectSucker},null,8,["sucker-canvas","sucker-area","onOpenSucker","onSelectSucker"]))],4),m(k,{name:"HEX",color:e.modelHex,onInputColor:e.inputHex},null,8,["color","onInputColor"]),m(k,{name:"RGBA",color:e.modelRgba,onInputColor:e.inputRgba},null,8,["color","onInputColor"]),m($,{color:e.rgbaString,"colors-default":e.colorsDefault,"colors-history-key":e.colorsHistoryKey,onSelectColor:e.selectColor},null,8,["color","colors-default","colors-history-key","onSelectColor"]),y(" custom options "),ee(e.$slots,"default")],6)}L.render=He;L.__file="src/color/ColorPicker.vue";L.install=e=>{e.component(L.name,L)};const Ae={class:"card card-action custom-container-card"},Le={class:"card-header"},Ne=t("div",{class:"card-action-title align-items-center"},[t("h4",{class:"fw-bold py-3 mb-4 card-title"},[t("span",{class:"text-muted fw-light"},"Vehicles /"),_(" Company Vehicle ")])],-1),Te={class:"card-action-element"},Ue=t("i",{class:"ti ti-plus ti-xs me-1"},null,-1),Be={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offCanvasForm","data-bs-backdrop":"static","aria-labelledby":"offCanvasFormLabel"},Pe={class:"offcanvas-header"},De={id:"offCanvasFormLabel",class:"offcanvas-title"},Ve={key:0,type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"},Ie={class:"offcanvas-body mx-0 flex-grow-0 pt-0"},Oe={class:"form-group mb-3"},je=t("label",{for:""},[_("Car Brand "),t("span",{class:"required"},"*")],-1),Re={class:"invalid-feedback"},Me={class:"form-group mb-3"},ze=t("label",{for:""},[_("Car Type "),t("span",{class:"required"},"*")],-1),qe={class:"invalid-feedback"},We={class:"form-group mb-4 dropzone-profile-photo"},Ke=t("label",{for:"name"},"Upload Photo",-1),Ye={key:1},Xe={class:"dropzone",ref:"dropzone"},Ge=t("div",{class:"dz-message needsclick"}," Please Wait ",-1),Je=[Ge],Qe={key:2,class:"v-invalid-feedback"},Ze={class:"form-group mb-3"},et=t("label",{for:""},[_("Car Model "),t("span",{class:"required"},"*")],-1),tt={class:"invalid-feedback"},st={class:"form-group mb-3"},ot=t("label",{for:""},[_("Color "),t("span",{class:"required"},"*")],-1),rt={class:"invalid-feedback"},it={class:"form-group mb-3"},at=t("label",{for:""},[_("Year Model "),t("span",{class:"required"},"*")],-1),lt={class:"invalid-feedback"},nt={class:"form-group mb-3"},dt=t("label",{for:""},[_("Plate Number "),t("span",{class:"required"},"*")],-1),ct={class:"invalid-feedback"},ut=["disabled"],ht={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},mt=["disabled"],pt={key:0,class:"spinner-border me-1",role:"status","aria-hidden":"true"},vt={class:"card-body"},ft={class:"row justify-content-between"},gt={class:"col-3 pr-0"},bt={class:"d-flex align-items-center gap-2"},yt=t("div",{class:"w-auto"},"Show",-1),_t={class:"flex-1"},St=["value"],kt=["value"],Ct=t("div",{class:"w-auto"},"entries",-1),$t={class:"col-auto"},xt={class:"d-flex gap-2 align-items-center"},wt=t("div",{class:"w-auto"},"Search:",-1),Ft={class:"flex-1"},Et=["value"],Ht={class:"row"},At={class:"card custom-card__hero"},Lt={class:"user-profile-header-banner"},Nt=["src"],Tt={class:"card-body text-left"},Ut={class:"dropdown btn-pinned"},Bt=t("button",{type:"button",class:"btn dropdown-toggle hide-arrow p-0","data-bs-toggle":"dropdown","aria-expanded":"false"},[t("i",{class:"ti ti-dots-vertical text-muted"})],-1),Pt={class:"dropdown-menu dropdown-menu-end"},Dt=["onClick"],Vt={class:"mb-1 card-title card-text"},It={class:"mb-0 card-text small-text"},Ot={class:"mb-0 card-text small-text"},jt={class:"mb-0 card-text small-text"},Rt={class:"pb-0 mb-0 card-text small-text"},Mt={class:"pb-0 mb-0 card-text small-text"},zt={class:"pb-0 mb-0 card-text small-text"},qt={class:"pb-0 mb-0 card-text small-text"},Wt={class:"pb-0 mb-0 card-text small-text"},Kt={class:"d-flex align-items-center justify-content-center mt-3"},Yt=["onClick"],Xt=t("i",{class:"ti-xs me-1 ti ti-truck me-1"},null,-1),Gt=t("a",{href:"javascript:;",class:"btn btn-label-secondary btn-icon waves-effect","data-bs-toggle":"modal","data-bs-target":"#editUser",type:"button"},[t("i",{class:"ti-xs me-1 ti ti-eye ti-sm"})],-1),Jt={class:"row d-flex justify-content-center"},Qt={key:0,class:"col-md-11 card custom-card__hero"},Zt=t("div",{class:"card-body text-left"},[t("h5",{class:"text-center mb-0"},"No item found.")],-1),es=[Zt],ts={key:0,class:"card-footer py-3"},ss={class:"row justify-content-between"},os={class:"col-auto"},rs={class:"table_info"},is={class:"col-auto"},as={class:"dataTables_paginate paging_simple_numbers","aria-label":"Page navigation example"},ls={class:"pagination mb-0"},ns=["innerHTML"],ds=t("div",{class:"modal fade",id:"editUser",tabindex:"-1","aria-hidden":"true"},[t("div",{class:"modal-dialog modal-lg modal-simple modal-edit-user"},[t("div",{class:"modal-content p-3 p-md-5"},[t("div",{class:"modal-body"},[t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"}),t("div",{class:"text-center mb-4"},[t("h3",{class:"mb-2"},"Repairs Information"),t("p",{class:"text-muted"},"This show the summary of repairs.")]),t("form",{id:"editUserForm",class:"row g-3",onsubmit:"return false"},[t("div",{class:"col-12 col-md-6"},[t("label",{class:"form-label",for:"modalEditUserFirstName"},"Driver Name"),t("input",{type:"text",id:"modalEditUserFirstName",name:"modalEditUserFirstName",class:"form-control",readonly:""})]),t("div",{class:"col-12 col-md-6"},[t("label",{class:"form-label",for:"modalEditUserLastName"},"Vehicle Model"),t("input",{type:"text",id:"modalEditUserLastName",name:"modalEditUserLastName",class:"form-control",readonly:""})]),t("div",{class:"col-12"},[t("label",{class:"form-label",for:"modalEditUserName"},"Vehicle Type"),t("input",{type:"text",id:"modalEditUserName",name:"modalEditUserName",class:"form-control",readonly:""})]),t("div",{class:"col-12 col-md-6"},[t("label",{class:"form-label",for:"modalEditUserEmail"},"Vehicle Brand"),t("input",{type:"text",id:"modalEditUserEmail",name:"modalEditUserEmail",class:"form-control",readonly:""})]),t("div",{class:"col-12 col-md-6"},[t("label",{class:"form-label",for:"modalEditUserStatus"},"Vehicle Year"),t("input",{type:"text",id:"modalEditUserEmail",name:"modalEditUserEmail",class:"form-control",readonly:""})]),t("div",{class:"col-12 col-md-6"},[t("label",{class:"form-label",for:"modalEditTaxID"},"Item/Service Name"),t("input",{type:"text",id:"modalEditTaxID",name:"modalEditTaxID",class:"form-control modal-edit-tax-id",readonly:""})]),t("div",{class:"col-12 col-md-6"},[t("label",{class:"form-label",for:"modalEditUserPhone"},"Amount"),t("div",{class:"input-group"},[t("span",{class:"input-group-text"},"PHP"),t("input",{type:"text",id:"modalEditUserPhone",name:"modalEditUserPhone",class:"form-control phone-number-mask",readonly:""})])]),t("div",{class:"col-12 col-md-12"},[t("label",{class:"form-label",for:"modalEditTaxID"},"Status"),t("input",{type:"text",id:"modalEditTaxID",name:"modalEditTaxID",class:"form-control modal-edit-tax-id",readonly:""})])])])])])],-1),cs={components:{ColorPicker:L},props:{data:Object,brands:Array,types:Object},layout:le,methods:{getBrandName(e){const o=this.brands.find(r=>r.id===e);return o?o.name:"Unknown brand"},getTypeName(e){const o=this.types.find(r=>r.id===e);return o?o.name:"Unknown brand"}}},vs=Object.assign(cs,{__name:"Index",setup(e){te();const o={vehicle_brand_id:null,model:null,vehicle_type_id:null,color:null,year:null,assigned_to:1,plate_number:null,image:null},{validateForm:r}=ae(),a="vehicles";let{isLoadingComponents:d,paginatedData:l,form:s,createPromise:c,updatePromise:p,deletePromise:b,handleCreate:S,serverQuery:k,handleServerQuery:$,handleEdit:N,formState:x}=ie(o,a);return(C,u)=>{const K=w("v-select"),X=w("dropzone");return h(),g(A,null,[m(i(se),{title:"Vehicle"}),t("div",Ae,[t("div",Le,[Ne,t("div",Te,[t("button",{class:"btn btn-primary",type:"button",onClick:u[0]||(u[0]=(...n)=>i(S)&&i(S)(...n)),"data-bs-toggle":"offcanvas","data-bs-target":"#offCanvasForm","aria-controls":"offCanvasForm"},[Ue,_(" Add Vehicle ")]),t("div",Be,[t("div",Pe,[t("h5",De,v(i(x)=="create"?"Add":"Update")+" Vehicle ",1),i(s).processing?y("",!0):(h(),g("button",Ve))]),t("div",Ie,[t("div",Oe,[je,m(K,{options:e.brands,modelValue:i(s).vehicle_brand_id,"onUpdate:modelValue":[u[1]||(u[1]=n=>i(s).vehicle_brand_id=n),u[2]||(u[2]=n=>i(s).clearErrors("vehicle_brand_id"))],reduce:n=>n.id,label:"name",placeholder:"Select Brand",class:E({"is-invalid":i(s).errors.vehicle_brand_id})},null,8,["options","modelValue","reduce","class"]),t("div",Re,v(i(s).errors.vehicle_brand_id),1)]),t("div",Me,[ze,m(K,{options:e.types,modelValue:i(s).vehicle_type_id,"onUpdate:modelValue":[u[3]||(u[3]=n=>i(s).vehicle_type_id=n),u[4]||(u[4]=n=>i(s).clearErrors("vehicle_type_id"))],reduce:n=>n.id,label:"name",placeholder:"Select Type",class:E({"is-invalid":i(s).errors.vehicle_type_id})},null,8,["options","modelValue","reduce","class"]),t("div",qe,v(i(s).errors.vehicle_type_id),1)]),t("div",We,[Ke,i(d)?(h(),f(X,{key:0,collection:"image",url:C.route("api.media.upload"),type:"profile",model:"Vehicle\\Vehicle",value:i(s).image,onInput:u[5]||(u[5]=n=>{i(s).image=n,i(s).clearErrors("image")}),message:"Drop files here or click to upload profile photo",acceptedFiles:"image/jpeg,image/png",onError:u[6]||(u[6]=n=>{n&&n[0]&&i(s).setError("image",n[0])})},null,8,["url","value"])):(h(),g("div",Ye,[t("div",Xe,Je,512)])),i(s).errors.image?(h(),g("div",Qe,v(i(s).errors.image),1)):y("",!0)]),t("div",Ze,[et,T(t("input",{type:"text",class:E(["form-control",{"is-invalid":i(s).errors.model}]),"onUpdate:modelValue":u[7]||(u[7]=n=>i(s).model=n),onInput:u[8]||(u[8]=n=>{i(s).clearErrors("model"),i(r)(["required"],i(s),n.target.value,"model")}),placeholder:"Enter Car Model"},null,34),[[U,i(s).model]]),t("div",tt,v(i(s).errors.model),1)]),t("div",st,[ot,T(t("input",{type:"text",class:E(["form-control",{"is-invalid":i(s).errors.color}]),"onUpdate:modelValue":u[9]||(u[9]=n=>i(s).color=n),onInput:u[10]||(u[10]=n=>{i(s).clearErrors("color"),i(r)(["required"],i(s),n.target.value,"color")}),placeholder:"Enter Color"},null,34),[[U,i(s).color]]),t("div",rt,v(i(s).errors.color),1)]),t("div",it,[at,T(t("input",{type:"text",class:E(["form-control",{"is-invalid":i(s).errors.year}]),"onUpdate:modelValue":u[11]||(u[11]=n=>i(s).year=n),onInput:u[12]||(u[12]=n=>{i(s).clearErrors("year"),i(r)(["required"],i(s),n.target.value,"year")}),placeholder:"Enter Year Model"},null,34),[[U,i(s).year]]),t("div",lt,v(i(s).errors.year),1)]),t("div",nt,[dt,T(t("input",{type:"text",class:E(["form-control",{"is-invalid":i(s).errors.plate_number}]),"onUpdate:modelValue":u[13]||(u[13]=n=>i(s).plate_number=n),onInput:u[14]||(u[14]=n=>{i(s).clearErrors("plate_number"),i(r)(["required"],i(s),n.target.value,"plate_number")}),placeholder:"Enter Plate Number"},null,34),[[U,i(s).plate_number]]),t("div",ct,v(i(s).errors.plate_number),1)]),i(x)=="create"?(h(),g("button",{key:0,class:"btn btn-primary",onClick:u[15]||(u[15]=(...n)=>i(c)&&i(c)(...n)),disabled:i(s).processing||i(s).hasErrors},[i(s).processing?(h(),g("span",ht)):y("",!0),_(" Save ")],8,ut)):y("",!0),i(x)=="update"?(h(),g("button",{key:1,class:"btn btn-primary",onClick:u[16]||(u[16]=(...n)=>i(p)&&i(p)(...n)),disabled:i(s).processing||i(s).hasErrors},[i(s).processing?(h(),g("span",pt)):y("",!0),_(" Save changes ")],8,mt)):y("",!0)])])])]),t("div",vt,[t("div",ft,[t("div",gt,[t("div",bt,[yt,t("div",_t,[t("select",{class:"form-select",value:i(k).perPage,onInput:u[17]||(u[17]=n=>i($)("perPage",n.target.value))},[(h(),g(A,null,B([5,10,25,50,100],n=>t("option",{value:String(n),key:n},v(n),9,kt)),64))],40,St)]),Ct])]),t("div",$t,[t("div",xt,[wt,t("div",Ft,[t("input",{type:"search",placeholder:"Search",class:"form-control",value:i(k).query,onInput:u[18]||(u[18]=n=>i($)("query",n.target.value))},null,40,Et)])])])])]),_(" "+v(e.data)+" ",1),t("div",Ht,[(h(!0),g(A,null,B(e.data.data,(n,G)=>(h(),g("div",{class:"col-xl-4 col-lg-4 col-md-4",key:G},[t("div",At,[t("div",Lt,[t("img",{class:"banner-custom-img",style:{"border-top-left-radius":"5px","border-top-right-radius":"5px"},src:n.image_url,alt:""},null,8,Nt)]),t("div",Tt,[t("div",Ut,[Bt,t("ul",Pt,[t("li",null,[t("a",{class:"dropdown-item text-danger",href:"javascript:void(0);",onClick:J=>i(b)(n.id)},"Delete",8,Dt)])])]),t("h4",Vt,v(C.getBrandName(n.vehicle_brand_id)),1),t("h6",It,v(C.getTypeName(n.vehicle_type_id)),1),t("h6",Ot,v(n.model),1),t("h6",jt,v(n.color),1),t("h6",Rt,v(n.year),1),t("h6",Mt,v(n.plate_number),1),t("h6",zt,"Last Driven By: "+v(n.is_driving),1),t("h6",qt,"Current Odometer: "+v(n.odometer),1),t("h6",Wt,"Blowbadgets: "+v(n.blowbagets_id),1),t("div",Kt,[t("a",{href:"javascript:;",class:"btn btn-primary d-flex align-items-center me-3",onClick:J=>i(N)(n)},[Xt,_(" Edit Vehicle ")],8,Yt),Gt])])])]))),128)),t("div",Jt,[e.data?y("",!0):(h(),g("div",Qt,es))])]),i(l)&&i(l).meta.links?(h(),g("div",ts,[t("div",ss,[t("div",os,[t("div",rs," Showing "+v(i(l).meta.from)+" to "+v(i(l).meta.to)+" of "+v(i(l).meta.total)+" entries ",1)]),t("div",is,[t("nav",as,[t("ul",ls,[(h(!0),g(A,null,B(i(l).meta.links,n=>(h(),g("li",{class:"page-item",key:n},[(h(),f(re(n.url?"inertia-link":"button"),{class:E(["page-link",{active:n.active}]),href:n.url,only:["data","params"]},{default:oe(()=>[t("span",{innerHTML:n.label},null,8,ns)]),_:2},1032,["class","href"]))]))),128))])])])])])):y("",!0)]),ds],64)}}});export{vs as default};
