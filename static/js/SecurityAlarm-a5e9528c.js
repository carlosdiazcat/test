import{b as a,j as e,l as t,w as s,b4 as l,b5 as r,q as o,bc as n,bd as i,F as d,bl as c,v as u,b7 as m,ba as v,bh as p}from"./Akubela-element-plus-Vendor-47553b40.js";import{h as b,j as w,u as y,w as f,s as g,am as h,a as j,m as k,n as A}from"./Akubela-login-home-part-Vendor-facddf88.js";import"./Akubela-devices-img-Vendor-0f46fa2c.js";import"./Akubela-scenes-security-other-img-Vendor-2a1534ad.js";const D={class:"security-dialog-alarm"},_={class:"security-dialog-content"},N={class:"dia-row-left"},V={class:"devices-content-detail"},B={class:"devices-content-name"},C={__name:"SecurityAlarm",props:{show:{type:Boolean,required:!0,default:!1}},emits:["update:show"],setup(C,{emit:I}){const S=C;let $=b();w();const{t:q}=y();let x=f();const F=a({acceptData:{},resultData:[],loading:!1});e((()=>{var a,e,t,s;return null==(s=null==(t=null==(e=null==(a=F.resultData)?void 0:a.filter)?void 0:e.call(a,(a=>9999!==a.trigger_type)))?void 0:t.slice)?void 0:s.call(t,0,$.alarmNumber)})),t((()=>{$.getAllSecurity()}));const M=e({get:()=>S.show,set:a=>{I("update:show",a)}}),O=()=>{var a,e,t;const s=null==(e=null==(a=$.alarmDary)?void 0:a.map)?void 0:e.call(a,(a=>a.id));F.acceptData[x.wId]=T;const l={type:"config/ak_security/alarm_eliminate",security_ids:Array.from(new Set(s)),id:x.wId++};null==(t=x.ws)||t.send(k(l))},T=a=>{if(!a.success)return A(q("errorMessage"),"error");$.alarmNumber=0,$.alarmDary=[],I("update:show",!1)};return s((()=>x.updataId),(a=>{g(F.acceptData,a,x)}),{immediate:!0}),(a,e)=>{const t=p;return l(),r("div",D,[o(j,{show:M.value,"onUpdate:show":e[0]||(e[0]=a=>M.value=a),title:a.$t("Arming"),"button-ok-name":a.$t("Cancel"),onButtonCancel:e[1]||(e[1]=a=>(I("update:show",!1),u($).alarmNumber=0)),onButtonConfirm:O},{content:n((()=>[i((l(),r("div",_,[(l(!0),r(d,null,c(u($).alarmDary,(e=>(l(),r("div",{key:e.record_id,class:"dia-devices-row"},[m("div",N,[o(h,{class:"devices-list-avatar","card-obj":e,online:!0},null,8,["card-obj"]),m("div",V,[m("div",B,v(u(q)("areaname devicename alarm time",{areaname:(null==e?void 0:e.location)||a.$t("OtherName"),devicename:(null==e?void 0:e.name)||"",time:null==e?void 0:e.newTime})),1)])])])))),128))])),[[t,F.loading]])])),_:1},8,["show","title","button-ok-name"])])}}};export{C as default};
