import{r as e,b as t,j as a,w as s,p as l,b4 as o,b5 as n,q as i,bc as d,b7 as r,bb as u,ba as c,bs as f,bf as m,bn as p,bA as b,bB as v}from"./Akubela-element-plus-Vendor-47553b40.js";import{u as g,w as h,P as w,a as x,n as y,Y as _,s as k,b as S}from"./Akubela-login-home-part-Vendor-facddf88.js";import{_ as j,S as T}from"./index-d8b1faeb.js";import"./Akubela-devices-img-Vendor-0f46fa2c.js";import"./Akubela-scenes-security-other-img-Vendor-2a1534ad.js";const A={class:"scenes-task-vocie-assistance"},B={class:"condition-content-box"},V={class:"common-dialog-left"},C={class:"common-dialog-right"},F={key:0,class:"setting-feedback__input_vocie"},z={class:"setting__input-title"},P={class:"setting__input-left"},U={class:"setting__input-content voice-scenes-box"},$={class:"condition-content-box"},D={class:"common-dialog-left"},E={class:"common-dialog-right"},O={key:1},R={class:"akubutton-upload"},I={class:"akubutton-upload-text"},N={__name:"DialogTaskVoiceAssistance",props:{show:{type:Boolean,required:!0,default:!1}},emits:["update:show","open-dia-show","set-add-obj","pop-closed"],setup(N,{emit:X}){const q=N,{t:L}=g();let M=h();const W=e(),Z=e(null),H=e=>{Q.defaultSelect=e},Y=()=>{Z.value.changeShow()},G=(e,t)=>{const a=e.name.endsWith(".mp3");if(!(e.name.endsWith(".wav")||a))return y(L("Please upload the correct file format"),"error"),t(!1);return 5242880<e.size?(y(L("Please upload an file smaller than size.",{size:"5MB"}),"error"),t(!1)):t(!0)},J=e=>{Q.filename=e.name,Q.fileObj=e,Z.value.changeShow()};function K(e){return/^[a-zA-Z0-9\s]+$/.test(e)}const Q=t({defaultSelect:"text",filename:L("Not selected any files"),recevieData:{},form:{sendText:""},defaultShow:!0,familyList:[],rules:{sendText:[{validator:(e,t,a)=>{if(t)if(K(t)){/(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f])|(\ud83d[\ude80-\udeff])/g.test(t)&&a(new Error(L("Please enter only numbers and letters")))}else a(new Error(L("Please enter only numbers and letters")));else a(new Error(L("Please enter content here")))},trigger:"change"}]},fileObj:{},uploading:!1}),ee=()=>{X("open-dia-show"),X("update:show",!1)},te=async()=>{if("files"===Q.defaultSelect)return await oe();const e={play_tts:{text:Q.form.sendText}};X("set-add-obj",e),X("update:show",!1),Q.form.sendText=""},ae=a({get:()=>q.show,set:e=>{X("update:show",e)}}),se=a((()=>{if("text"===Q.defaultSelect){if(!Q.form.sendText)return!1;if(!K(Q.form.sendText))return!1;return!/(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f])|(\ud83d[\ude80-\udeff])/g.test(Q.form.sendText)}return Q.fileObj.name})),le=()=>{X("update:show",!1),X("pop-closed")},oe=async(e=Q.fileObj)=>{Q.uploading=!0;let t=new FileReader,a=new T.ArrayBuffer;t.onload=async t=>{a.append(t.target.result);const s=T.ArrayBuffer.hash(t.target.result),l={configHeder:!0,headers:{"X-File-Name":encodeURIComponent(Q.filename),"X-File-MD5":s,"Content-Type":"application/octet-stream","Content-Range":"0/1","X-File-SIZE":e.size},data:e,_customSilentError:!0},o=await _.uploaTts(l);if(Q.uploading=!1,o.data.success){const e={play_tts:{file:o.data.result}};X("set-add-obj",e),X("update:show",!1)}else y(L("Failed to update scene."),"error")},await t.readAsArrayBuffer(e.slice.call(e,0,e.size))};s((()=>M.updataId),(e=>{k(Q.recevieData,e,M)}),{immediate:!0}),l((()=>{W.value=null,Q.recevieData=null}));return s((()=>ae.value),(e=>{e&&(Q.uploading=!1,Q.defaultSelect="text",Q.filename=L("Not selected any files"),Q.fileObj={})})),(e,t)=>{const a=S,s=p,l=b,g=v;return o(),n("div",A,[i(x,{show:ae.value,"onUpdate:show":t[4]||(t[4]=e=>ae.value=e),"back-show":!0,"is-ash":!se.value,title:e.$t("Voice broadcast"),allloding:Q.uploading,onButtonCancel:le,onButtonBack:ee,onButtonConfirm:te},{content:d((()=>[r("div",B,[r("div",{class:"common-humidity-row",onClick:t[0]||(t[0]=e=>H("text"))},[r("div",V,[r("div",{class:u(["common-dialog-row-left-text","text"===Q.defaultSelect?"row-left-active":""])},c(e.$t("Text")),3)]),r("div",C,[i(a,{"icon-class":"text"===Q.defaultSelect?"tick_active":""},null,8,["icon-class"])])])]),"text"===Q.defaultSelect?(o(),n("div",F,[r("div",z,[r("div",P,c(e.$t("Voice broadcast")),1)]),r("div",U,[i(g,{ref_key:"ruleFormRef",ref:W,model:Q.form,rules:Q.rules,onSubmit:t[2]||(t[2]=f((()=>{}),["prevent"]))},{default:d((()=>[i(l,{prop:"sendText"},{default:d((()=>[i(s,{modelValue:Q.form.sendText,"onUpdate:modelValue":t[1]||(t[1]=e=>Q.form.sendText=e),type:"textarea",rows:"5",maxlength:64},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])])):m("",!0),r("div",$,[r("div",{class:"common-humidity-row",onClick:t[3]||(t[3]=e=>H("files"))},[r("div",D,[r("div",{class:u(["common-dialog-row-left-text","files"===Q.defaultSelect?"row-left-active":""])},c(e.$t("Audio Files")),3)]),r("div",E,[i(a,{"icon-class":"files"===Q.defaultSelect?"tick_active":""},null,8,["icon-class"])])])]),"files"===Q.defaultSelect?(o(),n("div",O,[r("div",R,[r("div",I,c(Q.filename),1),i(w,{"class-name":"primary","button-name":e.$t("Upload"),onClick:Y},null,8,["button-name"])]),i(j,{ref_key:"fileRef",ref:Z,accept:"audio/mp3, audio/wav",loading:Q.upLoading,"is-top-set":!0,onBeforeUpdate:G,onUpload:J},null,8,["loading"])])):m("",!0)])),_:1},8,["show","is-ash","title","allloding"])])}}};export{N as default};
