import{j as e,b4 as t,be as a,bc as o,b7 as s,v as i,ba as n,b5 as l,bf as d,b as r,w as u,p as c,q as m,bd as p,F as h,cb as v,bh as w,br as b,r as g,bl as _,bm as y,bb as f,n as V,bn as k}from"./Akubela-element-plus-Vendor-47553b40.js";import{u as D,g as S,a as I,w as C,a7 as T,s as N,P as O,m as R,n as j,ai as B}from"./Akubela-login-home-part-Vendor-facddf88.js";import{_ as L}from"./AddSettingDevcie-8f47d357.js";const $={class:"device-add-tips-content"},A={class:"device-tips-top"},x=["src"],z={class:"tips-content-title"},U={key:0,class:"tips-content-title-bottom"},W={__name:"AddTips",props:{show:{type:Boolean,required:!0,default:!1},type:{type:String,required:!1,default:"success"}},emits:["update:show","open-dia-show"],setup(r,{emit:u}){const c=r;D();const m=()=>{u("update:show",!1),u("open-dia-show")},p=()=>{if("success"===c.type)return u("update:show",!1);m()},h=e({get:()=>c.show,set:e=>{u("update:show",e)}});return(e,r)=>(t(),a(I,{show:h.value,"onUpdate:show":r[0]||(r[0]=e=>h.value=e),class:"device-add-tips-dialog","back-show":!0,title:e.$t("Add device"),"button-ok-name":"success"===c.type?e.$t("Done"):e.$t("Back"),onButtonBack:m,onButtonCancel:r[1]||(r[1]=e=>u("update:show",!0)),onButtonConfirm:p},{content:o((()=>[s("div",$,[s("div",A,[s("img",{class:"device-add__img",src:"success"===c.type?i(S)("device_Added-successfully.webp"):i(S)("device_error.webp")},null,8,x)]),s("div",z,n("success"===c.type?e.$t("addSuccess"):e.$t("Error : Connection failed")),1),"error"===c.type?(t(),l("div",U,n(e.$t("Please Adding Again")),1)):d("",!0)])])),_:1},8,["show","title","button-ok-name"]))}},E={class:"add-ac-remote-content"},q={class:"ac-remote-content-box"},K=["src"],P={class:"annular-brand"},Y={class:"annular-model"},F={class:"annular-time"},G={key:0,class:"annular-tiem__span"},M={class:"ac-remote-bot"},H={key:0,class:"ac-remote-foot"},J={__name:"AddACRemote",props:{show:{type:Boolean,required:!0,default:!1}},emits:["update:show","open-dia-show"],setup(a,{emit:b}){const g=a,{t:_}=D();let y=C();const f=T(),V=r({acceptData:{},autoTime:null,annularValue:100,timeValue:3,timeKeyObj:{3:100,2:66,1:33,0:0},settingShow:!1,loading:!1,tipsShow:!1,ridsList:[],nowRidsValue:0}),k=()=>{b("open-dia-show"),b("update:show",!1)},B=e({get:()=>g.show,set:e=>{b("update:show",e)}}),$=()=>{b("update:show",!0)},A=()=>{V.annularValue=100,V.timeValue=3},x=e=>{var t,a;V.loading=!1,(null==e?void 0:e.success)||j(_(null==(t=null==e?void 0:e.error)?void 0:t.message),"error");let o=(null==(a=null==e?void 0:e.result)?void 0:a.rids)||[100,101,102,103];V.ridsList=o,z(),U()},z=()=>{clearTimeout(V.autoTime),V.autoTime=setTimeout((()=>{0===V.timeValue?clearTimeout(V.autoTime):(V.timeValue=V.timeValue-1,V.annularValue=V.timeKeyObj[V.timeValue],z())}),1e3)},U=()=>{var e,t;V.acceptData[y.wId]=J;const a={type:"device/infrared/start_match",brand_id:null==(e=null==f?void 0:f.irRemoteObj)?void 0:e.brandId,device_type:f.zigbeeName,device_id:f.gateWayDeviceId,rid:V.ridsList[V.nowRidsValue],id:y.wId++};null==(t=y.ws)||t.send(R(a))},J=e=>{},Q=()=>{if(V.ridsList.length===V.nowRidsValue+1)return V.tipsShow=!0,b("update:show",!1);V.nowRidsValue=V.nowRidsValue+1,A(),z(),U()},X=()=>{A(),z(),U()},Z=()=>{var e,t;try{V.acceptData[y.wId]=ee;const a={type:"device/infrared/match_result",brand_id:null==(e=null==f?void 0:f.irRemoteObj)?void 0:e.brandId,device_type:f.zigbeeName,rid:V.ridsList[V.nowRidsValue],device_id:f.gateWayDeviceId,id:y.wId++,result:!0};null==(t=y.ws)||t.send(R(a))}catch(a){}},ee=e=>{var t;try{const a=e.result;if(!(null==a?void 0:a.device_id))return void j(_("networkError"),"error");f.nowDeviceObj=a,f.nowDeviceObj.activeWebp="devices_other/pop_airconditioner.webp",f.nowDeviceObj.deviceId=null==(t=f.nowDeviceObj)?void 0:t.device_id,f.nowDeviceObj.type_name="AC Remote",V.settingShow=!0,b("update:show",!1)}catch(a){}};return u((()=>y.updataId),(e=>{N(V.acceptData,e,y)}),{immediate:!0}),u((()=>g.show),(e=>{e&&(()=>{var e,t;V.nowRidsValue=0,A(),V.acceptData[y.wId]=x;const a={type:"device/infrared/remote_control_list",brand_id:null==(e=null==f?void 0:f.irRemoteObj)?void 0:e.brandId,device_type:f.zigbeeName,device_id:f.gateWayDeviceId,id:y.wId++};V.loading=!0,null==(t=y.ws)||t.send(R(a))})()}),{immediate:!0}),c((()=>{clearTimeout(V.autoTime),V.acceptData=null})),(e,a)=>{const r=v,u=w;return t(),l(h,null,[m(I,{show:B.value,"onUpdate:show":a[0]||(a[0]=e=>B.value=e),class:"setting-add-ac-remote","back-show":!0,"foot-show":!1,title:e.$t("Add device"),"button-ok-name":e.$t("Next"),onButtonBack:k,onButtonCancel:a[1]||(a[1]=e=>b("update:show",!1))},{content:o((()=>[p((t(),l("div",E,[s("div",q,[m(r,{type:"circle",class:"ac-remote-annular",percentage:V.annularValue,color:"#ff9d00","stroke-width":5,width:240,status:"success"},{default:o((()=>{var e,a,o;return[s("img",{class:"annular__img",alt:"smart home,home automation,homekit,smart security,smart home systems,google home",src:i(S)("devices/trans_device_airconditioner.webp")},null,8,K),s("div",P,n((null==(a=null==(e=i(f))?void 0:e.irRemoteObj)?void 0:a.ename)||"--"),1),s("div",Y,n(V.nowRidsValue+1)+"/"+n(null==(o=V.ridsList)?void 0:o.length),1),s("div",F,[V.timeValue?(t(),l("span",G,n(V.timeValue)+"s",1)):d("",!0),V.timeValue?d("",!0):(t(),l("div",{key:1,class:"annular-time__img",onClick:X}))])]})),_:1},8,["percentage"])]),s("div",M,n(V.timeValue?e.$t("Sending Signal to AC..."):e.$t("Is the air conditioner coolded at 24?")),1),V.timeValue?d("",!0):(t(),l("div",H,[m(O,{class:"foot-left","class-name":"primary","button-name":e.$t("NO"),onClick:Q},null,8,["button-name"]),m(O,{class:"foot-right","class-name":"primary","button-name":e.$t("YES"),onClick:Z},null,8,["button-name"])]))])),[[u,V.loading]])])),_:1},8,["show","title","button-ok-name"]),m(W,{show:V.tipsShow,"onUpdate:show":a[2]||(a[2]=e=>V.tipsShow=e),type:"error",onOpenDiaShow:$},null,8,["show"]),m(L,{show:V.settingShow,"onUpdate:show":a[3]||(a[3]=e=>V.settingShow=e),onOpenDiaShow:a[4]||(a[4]=e=>b("update:show",!0))},null,8,["show"])],64)}}},Q={class:"add-ac-remote-content"},X={class:"ac-remote-content-box"},Z=["src"],ee={class:"annular-brand"},te={class:"annular-model"},ae={key:0,class:"annular-tiem__span"},oe={class:"ac-remote-bot"},se={key:0,class:"ac-remote-foot"},ie={key:1,class:"ac-remote-foot"},ne={__name:"AddTVRemote",props:{show:{type:Boolean,required:!0,default:!1}},emits:["update:show","open-dia-show"],setup(a,{emit:g}){const _=a,{t:y}=D();let f=C();const V=T(),k=r({acceptData:{},stepName:"start",autoTime:null,annularValue:100,timeValue:3,timeKeyObj:{3:100,2:66,1:33,0:0},settingShow:!1,loading:!1,tipsShow:!1,ridsList:[],nowRidsValue:0,isBisable:!1}),B=()=>{g("open-dia-show"),g("update:show",!1)},$=e({get:()=>_.show,set:e=>{g("update:show",e)}}),A=()=>{g("update:show",!0)},x=()=>{k.annularValue=100,k.timeValue=3},z=e=>{var t,a;k.loading=!1,(null==e?void 0:e.success)||j(y(null==(t=null==e?void 0:e.error)?void 0:t.message),"error");let o=(null==(a=null==e?void 0:e.result)?void 0:a.rids)||[100,101,102,103];k.ridsList=o},U=()=>{k.stepName="volume_up",E(),q()},E=()=>{clearTimeout(k.autoTime),k.autoTime=setTimeout((()=>{0===k.timeValue?clearTimeout(k.autoTime):(k.timeValue=k.timeValue-1,k.annularValue=k.timeKeyObj[k.timeValue],E())}),1e3)},q=()=>{var e,t;k.acceptData[f.wId]=K;const a={type:"device/infrared/start_match",brand_id:null==(e=null==V?void 0:V.irRemoteObj)?void 0:e.brandId,device_type:V.zigbeeName,device_id:V.gateWayDeviceId,rid:k.ridsList[k.nowRidsValue],id:f.wId++};"TV Remote"===V.zigbeeName&&(a.fkey=k.stepName),null==(t=f.ws)||t.send(R(a))},K=e=>{},P=()=>{if(k.ridsList.length===k.nowRidsValue+1)return k.tipsShow=!0,g("update:show",!1);k.nowRidsValue=k.nowRidsValue+1,x(),E(),q()},Y=()=>{x(),E(),q()},F=()=>{var e,t;if(!k.isBisable){if("volume_up"===k.stepName)return k.stepName="power",k.nowRidsValue=0,x(),E(),void q();if("power"===k.stepName){k.acceptData[f.wId]=G;const a={type:"device/infrared/match_result",brand_id:null==(e=null==V?void 0:V.irRemoteObj)?void 0:e.brandId,device_type:V.zigbeeName,rid:k.ridsList[k.nowRidsValue],device_id:V.gateWayDeviceId,id:f.wId++,result:!0};null==(t=f.ws)||t.send(R(a)),k.loading=!0,k.isBisable=!0}}},G=e=>{k.loading=!1,k.isBisable=!1;const t=e.result;V.nowDeviceObj={area_id:"",device_id:"fed9c84f34b14e76afaf5d5f82f75510",product_attributes:"Add-on",product_type:"TV Remote",name:"Philips TV",location:"",favorite:!1,version:"",sort_id:9,bypass:!1,bypass_time:"",parent_device_id:"911e9ee54e434d1e9ff64f050236af02",is_wire:!1,mac:"",source:-1,relay_index:0},(null==t?void 0:t.device_id)&&(V.nowDeviceObj=t),V.nowDeviceObj.activeWebp="devices_other/pop_tv.webp",V.nowDeviceObj.deviceId=V.nowDeviceObj.device_id,V.nowDeviceObj.type_name=V.nowDeviceObj.product_type,k.settingShow=!0,g("update:show",!1)};return u((()=>f.updataId),(e=>{N(k.acceptData,e,f)}),{immediate:!0}),u((()=>_.show),(e=>{e&&(()=>{var e,t;k.stepName="start",k.nowRidsValue=0,x(),k.acceptData[f.wId]=z;const a={type:"device/infrared/remote_control_list",brand_id:null==(e=null==V?void 0:V.irRemoteObj)?void 0:e.brandId,device_type:V.zigbeeName,device_id:V.gateWayDeviceId,id:f.wId++};k.loading=!0,null==(t=f.ws)||t.send(R(a))})()}),{immediate:!0}),c((()=>{clearTimeout(k.autoTime),k.acceptData=null})),(e,a)=>{const r=v,u=w;return t(),l(h,null,[m(I,{show:$.value,"onUpdate:show":a[0]||(a[0]=e=>$.value=e),class:"setting-add-tv-remote","back-show":!0,"foot-show":!1,title:e.$t("Add device"),"button-ok-name":e.$t("Next"),onButtonBack:B,onButtonCancel:a[1]||(a[1]=e=>g("update:show",!1))},{content:o((()=>[p((t(),l("div",Q,[s("div",X,[m(r,{type:"circle",class:"ac-remote-annular",percentage:k.annularValue,color:"#ff9d00","stroke-width":5,width:240,status:"success"},{default:o((()=>{var e,a,o;return[s("img",{class:"annular__img",alt:"smart home,home automation,homekit,smart security,smart home systems,google home",src:i(S)("devices/trans_device_tv.webp")},null,8,Z),s("div",ee,n((null==(a=null==(e=i(V))?void 0:e.irRemoteObj)?void 0:a.ename)||"--"),1),s("div",te,n(k.nowRidsValue+1)+"/"+n(null==(o=k.ridsList)?void 0:o.length),1),s("div",{style:b("start"!==k.stepName?"":"visibility:hidden"),class:"annular-time"},[k.timeValue?(t(),l("span",ae,n(k.timeValue)+"s",1)):d("",!0),k.timeValue?d("",!0):(t(),l("div",{key:1,class:"annular-time__img",onClick:Y}))],4)]})),_:1},8,["percentage"])]),s("div",oe,n("start"===k.stepName?e.$t("Turn on Your TV Set"):k.timeValue?"volume_up"===k.stepName?e.$t("Sending Volume Signal to TVSet..."):e.$t("Sending Power Signal to TVSet..."):"volume_up"===k.stepName?e.$t("Is TV volume is changed up?"):e.$t("Is TV close now ?")),1),"start"===k.stepName?(t(),l("div",se,[m(O,{class:"foot-right-start","class-name":"primary","button-name":e.$t("Start Matching"),onClick:U},null,8,["button-name"])])):d("",!0),k.timeValue||"start"===k.stepName?d("",!0):(t(),l("div",ie,[m(O,{class:"foot-left","class-name":"primary","button-name":e.$t("NO"),onClick:P},null,8,["button-name"]),m(O,{class:"foot-right","class-name":"primary","button-name":e.$t("YES"),onClick:F},null,8,["button-name"])]))])),[[u,k.loading]])])),_:1},8,["show","title","button-ok-name"]),m(W,{show:k.tipsShow,"onUpdate:show":a[2]||(a[2]=e=>k.tipsShow=e),type:"error",onOpenDiaShow:A},null,8,["show"]),m(L,{show:k.settingShow,"onUpdate:show":a[3]||(a[3]=e=>k.settingShow=e),onOpenDiaShow:a[4]||(a[4]=e=>g("update:show",!0))},null,8,["show"])],64)}}},le={class:"add-ir-remote-content"},de={class:"add-ir-remote-left"},re={class:"ir-search-right"},ue=["src"],ce={class:"ir-brand-row ir-brand-letter"},me=["onClick"],pe=["onClick"],he=["onClick"],ve={class:"add-ir-remote-right"},we=["onClick"],be={__name:"index",props:{show:{type:Boolean,required:!0,default:!1}},emits:["update:show","open-dia-show"],setup(a,{emit:v}){const b=a,{t:O}=D();let L=C();const $=T(),A=g(null),x=g(null),z=r({acceptData:{},resultList:[],resultData:{},customData:{},letterList:["#","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],lettterActiveIndex:null,commonBrandList:["skyworth","tcl","hisense","changhong","konka","samsung","xiaomi","lg","sony","sharp","gree","midea","haier","aux","chigo","tcl","panasonic","galanz"],tvCommonList:["samsung","lg","sharp","sony","skyworth","tcl","hisense","changhong","knoka","xiaomi"],acCommonList:["pannasonic","galanz","gree","midea","haier","aux","chigo","tcl","hisense","changhong"],commonBrandObj:{},searchName:"",acShow:!1,tvShow:!1,loading:!1}),U=()=>{v("open-dia-show"),v("update:show",!1)},W=e({get:()=>b.show,set:e=>{v("update:show",e)}}),E=()=>{v("update:show",!0)},q=e=>($.irRemoteObj=e,"AC Remote"===$.zigbeeName?(z.acShow=!0,v("update:show",!1)):"TV Remote"===$.zigbeeName?(z.tvShow=!0,v("update:show",!1)):void 0),K=e=>{var t,a,o;if(z.loading=!1,!(null==e?void 0:e.success))return j(O(null==(t=null==e?void 0:e.error)?void 0:t.message),"error");let s=null==(a=null==e?void 0:e.result)?void 0:a.brands;s=null==(o=null==s?void 0:s.map)?void 0:o.call(s,(e=>({...e,letter:e.ename.toLocaleUpperCase().substring(0,1)}))),z.resultList=s;const i=[];"AC Remote"===$.zigbeeName&&z.acCommonList.forEach((e=>{z.resultList.forEach((t=>{var a;t.ename.toLowerCase()===e&&(null==(a=null==i?void 0:i.push)||a.call(i,t))}))})),"TV Remote"===$.zigbeeName&&z.tvCommonList.forEach((e=>{z.resultList.forEach((t=>{var a;t.ename.toLowerCase()===e&&(null==(a=null==i?void 0:i.push)||a.call(i,t))}))})),z.commonBrandObj["Common Brand"]=i,z.resultData=P(B(s,"letter"))},P=e=>{var t,a;let o=null==(a=null==(t=Object.keys(e))?void 0:t.sort)?void 0:a.call(t),s={};for(let i=0;i<o.length;i++)s[o[i]]=e[o[i]];return s},Y=()=>{var e,t;z.lettterActiveIndex=null;const a={};for(const o in z.resultData)a[o]=null==(t=null==(e=z.resultData[o])?void 0:e.filter)?void 0:t.call(e,(e=>{const t=e.ename.toLowerCase(),a=z.searchName.toLowerCase();return t.includes(a)}));z.customData=a};return u((()=>L.updataId),(e=>{N(z.acceptData,e,L)}),{immediate:!0}),u((()=>b.show),(e=>{e&&(()=>{var e;z.searchName="",z.acceptData[L.wId]=K;const t={type:"device/infrared/brand_list",device_type:$.zigbeeName,id:L.wId++,device_id:$.gateWayDeviceId};z.loading=!0,null==(e=L.ws)||e.send(R(t))})()}),{immediate:!0}),c((()=>{x.value=null,A.value=null})),(e,a)=>{const r=k,u=w;return t(),l(h,null,[m(I,{show:W.value,"onUpdate:show":a[1]||(a[1]=e=>W.value=e),class:"setting-add-ir-remote","back-show":!0,"foot-show":!1,title:e.$t("Add device"),"button-ok-name":e.$t("Next"),onButtonBack:U,onButtonCancel:a[2]||(a[2]=e=>v("update:show",!1))},{content:o((()=>[p((t(),l("div",le,[s("div",de,[s("div",re,[m(r,{modelValue:z.searchName,"onUpdate:modelValue":a[0]||(a[0]=e=>z.searchName=e),class:"ir-search-right__input",placeholder:e.$t("Search the brand"),onInput:Y},null,8,["modelValue","placeholder"]),s("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",src:i(S)("devices/search.webp"),onClick:Y},null,8,ue)]),s("div",{ref_key:"commonRey",ref:A,class:"ir-brand-content"},[p(s("section",null,[(t(!0),l(h,null,_(z.commonBrandObj,((e,a,o)=>(t(),l("section",{key:o},[s("div",ce,n(a),1),(t(!0),l(h,null,_(e,((e,a)=>(t(),l("div",{key:a,class:"ir-brand-row",onClick:t=>q(e)},n((null==e?void 0:e.ename)||"--"),9,me)))),128))])))),128)),(t(!0),l(h,null,_(z.resultData,((e,a,o)=>(t(),l("section",{key:o},[s("div",{ref_for:!0,ref_key:"letterKey",ref:x,class:"ir-brand-row ir-brand-letter"},n(a),513),(t(!0),l(h,null,_(e,((e,a)=>(t(),l("div",{key:a,class:"ir-brand-row",onClick:t=>q(e)},n((null==e?void 0:e.ename)||"--"),9,pe)))),128))])))),128))],512),[[y,!z.searchName]]),p(s("section",null,[(t(!0),l(h,null,_(z.customData,((e,a,o)=>(t(),l("section",{key:o},[e.length>0?(t(),l("div",{key:0,ref_for:!0,ref_key:"letterKey",ref:x,class:"ir-brand-row ir-brand-letter"},n(a),513)):d("",!0),(t(!0),l(h,null,_(e,((e,a)=>(t(),l("div",{key:a,class:"ir-brand-row",onClick:t=>q(e)},n((null==e?void 0:e.ename)||"--"),9,he)))),128))])))),128))],512),[[y,z.searchName]])],512)]),s("div",ve,[(t(!0),l(h,null,_(z.letterList,((e,a)=>(t(),l("div",{key:e,class:f(["add-ir-letter",a===z.lettterActiveIndex?"add-ir-active":""]),onClick:t=>((e,t)=>{if(z.lettterActiveIndex=t,"#"===e)return V((()=>{A.value.scrollTop=0}));V((()=>{var t,a;let o=null==(a=null==(t=x.value)?void 0:t.find)?void 0:a.call(t,(t=>t.textContent===e));null==o||o.scrollIntoView(),o=null}))})(e,a)},n(e),11,we)))),128))])])),[[u,z.loading]])])),_:1},8,["show","title","button-ok-name"]),m(J,{show:z.acShow,"onUpdate:show":a[3]||(a[3]=e=>z.acShow=e),onOpenDiaShow:E},null,8,["show"]),m(ne,{show:z.tvShow,"onUpdate:show":a[4]||(a[4]=e=>z.tvShow=e),onOpenDiaShow:E},null,8,["show"])],64)}}},ge={class:"common-tips"},_e={class:"common-tips-bottom"},ye={__name:"AddGuide",props:{show:{type:Boolean,required:!0,default:!1}},emits:["update:show","button-confirm"],setup(i,{expose:l,emit:d}){const u=i;T();const c=r({irValue:"5",irConfirmShow:!1}),m=e({get:()=>(p(),u.show),set:e=>{d("update:show",e)}}),p=()=>{try{clearTimeout(c.irAutoTime),c.irAutoTime=setTimeout((()=>{1===parseInt(c.irValue)?(c.irValue="Done",clearTimeout(c.irAutoTime)):(c.irValue=(parseInt(c.irValue)-1).toString(),p())}),1e3)}catch(e){}},h=()=>d("button-confirm");return l({init:()=>{c.irValue="5"}}),(e,i)=>(t(),a(I,{show:m.value,"onUpdate:show":i[0]||(i[0]=e=>m.value=e),"button-ok-name":c.irValue,title:e.$t("Tips"),"is-ash":"Done"!==c.irValue,class:"add-guide",onButtonCancel:i[1]||(i[1]=e=>d("update:show",!1)),onButtonConfirm:h},{content:o((()=>[s("div",ge,[s("div",null,n(e.$t("Before you add a device, you need to know:")),1),s("div",null,n(e.$t("1.Please make sure the appliance you want to add supports infrared remote control.")),1),s("div",_e,n(e.$t("2.Please ensure that the infrared controller and the home appliance are in the same space without obstruction, and the maximum distance between them does not exceed 15 meters.")),1)])])),_:1},8,["show","button-ok-name","title","is-ash"]))}};export{be as _,ye as a};
