import{r as e,b as s,j as t,l as a,w as o,b4 as i,b5 as r,q as n,bc as d,b7 as c,ba as l,bf as u,bz as p}from"./Akubela-element-plus-Vendor-47553b40.js";import{u as v,w as m,m as g,n as w,a as f,s as b}from"./Akubela-login-home-part-Vendor-facddf88.js";import"./Akubela-devices-img-Vendor-0f46fa2c.js";import"./Akubela-scenes-security-other-img-Vendor-2a1534ad.js";const h={class:"update-dialog-setting"},U={class:"common-first-row"},_={class:"common-dialog-row"},k={class:"common-dialog-left"},j={class:"common-dialog-row-left-text"},A={class:"common-dialog-right"},V={class:"common-grid-text"},y={class:"update-dialog__centent-text"},D={key:0},I={key:1},O={__name:"DialogUpdate",props:{show:{type:Boolean,required:!0,default:!1}},emits:["update:show"],setup(O,{emit:$}){const T=O,{t:x}=v();let C=m();const B=e(!1),E=s({acceptData:{},versionObj:{},isUpdateVersion:!1}),P=t({get:()=>T.show,set:e=>{$("update:show",e)}});a((()=>{S(),F()}));const S=()=>{var e;E.acceptData[C.wId]=q;const s={type:"ak_config/get",id:C.wId++,item:["Settings.UPDATE.AutoUpdate"]};null==(e=C.ws)||e.send(g(s))},q=e=>{if(!e.success)return w(x("errorMessage"),"error");B.value=e.result["Settings.UPDATE.AutoUpdate"]},z=()=>{var e;E.acceptData[C.wId]=M;const s={type:"ak_config/update",id:C.wId++,item:{}};s.item["Settings.UPDATE.AutoUpdate"]=B.value,null==(e=C.ws)||e.send(g(s))},M=e=>{if(!e.success)return w(x(e.error.message),"error");w(x("success"),"success")},F=()=>{var e;E.acceptData[C.wId]=G;const s={type:"config/ak_device/version_list",id:C.wId++,self:!0};null==(e=C.ws)||e.send(g(s))},G=e=>{if(!e.success)return w(x(e.error.message),"error");E.versionObj=e.result[0],E.isUpdateVersion=E.versionObj.current_version===E.versionObj.last_version},H=()=>{var e;E.acceptData[C.wId]=J;const s={type:"config/ak_device/ctrl",id:C.wId++,device_id:E.versionObj.device_id,action:"upgrade"};null==(e=C.ws)||e.send(g(s))},J=e=>{if(!e.success)return w(x(e.error.message),"error");w(x("deviceTips"),"success")},K=()=>{$("update:show",!1)};return o((()=>C.updataId),(e=>{b(E.acceptData,e,C)}),{immediate:!0}),(e,s)=>{const t=p;return i(),r("div",h,[n(f,{show:P.value,"onUpdate:show":s[1]||(s[1]=e=>P.value=e),title:e.$t("Update"),"button-ok-name":e.$t("Upgrade"),"foot-show":!E.isUpdateVersion,onButtonCancel:K,onButtonConfirm:H},{content:d((()=>[c("div",U,[c("div",_,[c("div",k,[c("div",j,l(e.$t("Auto Update")),1)]),c("div",A,[n(t,{modelValue:B.value,"onUpdate:modelValue":s[0]||(s[0]=e=>B.value=e),"active-value":"1","inactive-value":"0",onClick:z},null,8,["modelValue"])])])]),c("div",V,l(e.$t("After opening,update automatically when idle.")),1),c("div",y,[E.isUpdateVersion?(i(),r("span",D,l(E.versionObj.current_version)+" "+l(e.$t("Currently is the latest version")),1)):u("",!0),E.isUpdateVersion?u("",!0):(i(),r("span",I,l(e.$t("The latest version is"))+" "+l(E.versionObj.last_version)+", "+l(e.$t("please upgrade the version")),1))])])),_:1},8,["show","title","button-ok-name","foot-show"])])}}};export{O as default};
