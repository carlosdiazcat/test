import{c as e,h as t,w as i,a4 as s,u as r,aN as a,m as n,g as c,s as l,b as o}from"./Akubela-login-home-part-Vendor-facddf88.js";import{b as u,l as y,w as d,p as m,b4 as g,b5 as v,v as h,b7 as _,q as b,ba as p,bb as k,F as S,bl as w,bf as f,bs as L}from"./Akubela-element-plus-Vendor-47553b40.js";import"./Akubela-devices-img-Vendor-0f46fa2c.js";import"./Akubela-scenes-security-other-img-Vendor-2a1534ad.js";const A={key:0,class:"scenes-security-index"},D={class:"scenes-security__title"},$={class:"scenes-security__title-left"},C={class:"scenes-security__title-font"},O={class:"scenes-security__title-right"},x={class:"security-right__font"},j={key:0,class:"security-content-box"},I={class:"security-content-box__title"},M={class:"scenes-security__title-font"},E={class:"security-content-basic"},T=["akubela-test","onClick"],V={class:"security-content-right"},N=["akubela-test","onClick"],q={class:"security-contenty__img"},U=["akubela-test","src"],F={class:"security__font"},H={class:"security-setting"},z=["src","akubela-test","onClick"],B={key:1,class:"security-content-area-card"},G={class:"security-content-box__title"},J={class:"scenes-security__title-font"},K={class:"security-area-font"},P=["akubela-test","onDragstart","onDrop","onClick"],Q={class:"security-content-right"},R=["akubela-test","onClick"],W={class:"security-contenty__img"},X=["src"],Y={class:"security__font"},Z={class:"security-setting"},ee=["src","akubela-test","onClick"],te={key:1,class:"security_no_page"},ie=["src"],se={__name:"index",setup(se){e();let re=t(),ae=i();const ne=s(),{t:ce}=r(),le=u({recevieData:{},ignoreType:0,ignoreShow:!1,ignoreDeviceList:[],ignoreArm:"",ignoreSecurityId:"",dragObj:{}});y((()=>{re.getAllSecurity()}));const oe=e=>{var t;le.recevieData[ae.wId]=e=>{var t,i,s;le.ignoreDeviceList=[],(null==(i=null==(t=null==e?void 0:e.result)?void 0:t.ignore_list)?void 0:i.length)&&(le.ignoreDeviceList=null==(s=null==e?void 0:e.result)?void 0:s.ignore_list,le.ignoreType=0,le.ignoreShow=!0)},le.ignoreArm=!e.isArm,le.ignoreSecurityId=e.id;const i={type:"config/ak_security/arm",id:ae.wId++,arm:!e.isArm,security_id:e.id};null==(t=ae.ws)||t.send(n(i))},ue=e=>{var t;let i=[];re.areaSecurityList.forEach((e=>{var t;null==(t=null==i?void 0:i.push)||t.call(i,e.id)})),le.recevieData[ae.wId]=e=>{var t,i,s;le.ignoreDeviceList=[],(null==(i=null==(t=null==e?void 0:e.result)?void 0:t.ignore_lists)?void 0:i.length)&&(null==(s=null==e?void 0:e.result)||s.ignore_lists.forEach((e=>{(null==e?void 0:e.ignore_list.length)&&(le.ignoreDeviceList=[...le.ignoreDeviceList,...e.ignore_list])})),le.ignoreDeviceList.length&&(le.ignoreType=1,le.ignoreShow=!0))};const s={type:"config/ak_security/batch_arm",id:ae.wId++,security_ids:i,arm:re.allArmShow};null==(t=ae.ws)||t.send(n(s))},ye=e=>{var t;e.isSirenOn=!e.isSirenOn;const i={type:"config/ak_security/update",id:ae.wId++,securities:[e],silent:!0};null==(t=ae.ws)||t.send(n(i))},de=()=>{var e;re.securityList.forEach((e=>{re.armingAllShow?e.isSirenOn=!0:e.isSirenOn=!1})),re.armingAllShow=!re.armingAllShow;const t={type:"config/ak_security/update",id:ae.wId++,securities:re.securityList,silent:!0};null==(e=ae.ws)||e.send(n(t))},me=e=>{const t={home:ce("In Home"),night:ce("Night"),away:ce("Away")};return t[e]?t[e]:ce(e[0].toUpperCase()+e.substr(1)+" Mode")},ge=e=>{var t;const i=e.id;null==(t=null==ne?void 0:ne.push)||t.call(ne,{name:"ModifySecurity",query:{id:i}})};return d((()=>ae.updataId),(e=>{l(le.recevieData,e,ae)}),{immediate:!0}),m((()=>{})),(e,t)=>{var i,s,r;const l=o;return g(),v(S,null,[(null==(i=h(re).securityList)?void 0:i.length)>0?(g(),v("div",A,[_("div",D,[_("div",$,[b(l,{class:"scenes-security__title-icon","icon-class":"home_Security"}),_("span",C,p(e.$t("Security")),1)]),_("div",O,[_("div",{class:k(["akubela-hover-scale",h(re).securityList.every((e=>!e.isSirenOn))?"security-right__armoff":"security-right__arming"]),"akubela-test":"security-right-all-silent-or-not",onClick:de},[_("span",x,p(e.$t("Silence Arming Mode")),1)],2)])]),_("div",{class:k(["scenes-security-content",h(re).securityList.every((e=>!e.isSirenOn))?"scenes-security-mute":""])},[(null==(s=h(re).baseSecurityList)?void 0:s.length)>0?(g(),v("div",j,[_("div",I,[b(l,{class:"scenes-security__title-icon","icon-class":"home_Security"}),_("span",M,p(e.$t("Security")),1)]),_("div",E,[(g(!0),v(S,null,w(h(re).baseSecurityList,((e,t)=>(g(),v("div",{key:t,class:"security-content-card akubela-hover-scale akubela-animation-ease-in-out","akubela-test":`security-part-div-${e.type}`,onClick:t=>oe(e)},[_("div",V,[_("div",{class:k(e.isSirenOn?"security-content-right-ring":"security-content-right-mute"),"akubela-test":`security-part-right-ring-${e.type}`,onClick:L((t=>ye(e)),["stop"])},null,10,N)]),_("div",q,[_("img",{"akubela-test":`security-part-${null==e?void 0:e.type}-${null==e?void 0:e.isArm}`,alt:"smart home,home automation,homekit,smart security,smart home systems,google home",src:e.isArm?h(c)(`security/Security_${e.type.toLowerCase()}_Mode_selected.webp`):h(c)(`security/Security_${e.type.toLowerCase()}_Mode.webp`)},null,8,U)]),_("div",F,p(me(e.type)),1),_("div",H,[_("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",class:"security-setting__svg",src:h(c)("security/security_card_setting.webp"),"akubela-test":`security-part-img-${e.type}`,onClick:L((t=>ge(e)),["stop"])},null,8,z)])],8,T)))),128))])])):f("",!0),(null==(r=h(re).areaSecurityList)?void 0:r.length)>0?(g(),v("div",B,[_("div",G,[b(l,{class:"scenes-security__title-icon","icon-class":"home_Security"}),_("span",J,p(e.$t("Area")),1)]),_("div",{class:k(["akubela-hover-scale",h(re).allArmShow?"security-content-disarea__img":"security-content-area__img"]),"akubela-test":"security-arming-disarm-all",onClick:ue},[_("div",K,p(h(re).allArmShow?e.$t("Arming All"):e.$t("Disarm All")),1)],2),_("div",{class:"security-content-basic",onDragover:t[2]||(t[2]=L((()=>{}),["prevent"])),onDrop:t[3]||(t[3]=t=>(()=>{const e=re.areaSecurityList[re.areaSecurityList.length-1];le.targetObj={item:e,index:re.areaSecurityList.length-1}})(e.key))},[(g(!0),v(S,null,w(h(re).areaSecurityList,((i,s)=>(g(),v("div",{key:s,class:"security-content-card akubela-hover-scale akubela-animation-ease-in-out",draggable:"true","akubela-test":`security-part-mini-div-${s}`,onDragover:t[0]||(t[0]=L((()=>{}),["prevent"])),onDragstart:e=>((e,t,i)=>{le.dragObj={item:t,index:i}})(0,i,s),onDragend:t[1]||(t[1]=e=>(()=>{var e,t,i,s,r;if(!(null==(e=le.dragObj)?void 0:e.item)||!(null==(t=le.targetObj)?void 0:t.item))return;const a={...le.dragObj},c={...le.targetObj};re.areaSecurityList[a.index]=c.item,re.areaSecurityList[c.index]=a.item,le.recevieData[ae.wId]=e=>{e.success};const l={type:"ak_scenes/sort",id:ae.wId++,data:{}};null==(s=null==(i=re.baseSecurityList)?void 0:i.concat)||s.call(i,re.areaSecurityList).forEach(((e,t)=>{l.data[t+1]=e.id})),null==(r=ae.ws)||r.send(n(l)),le.targetObj={}})()),onDrop:L((e=>((e,t,i)=>{le.targetObj={item:t,index:i}})(0,i,s)),["stop"]),onClick:e=>oe(i)},[_("div",Q,[_("div",{class:k(i.isSirenOn?"security-content-right-ring":"security-content-right-mute"),"akubela-test":`security-part-right-ring-mini-${s}`,onClick:L((e=>ye(i)),["stop"])},null,10,R)]),_("div",W,[_("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",src:i.isArm?h(c)("security/home_Security_area_selected.webp"):h(c)("security/Security_area.webp")},null,8,X)]),_("div",Y,p(e.$t("xxx mode",{name:i.name})),1),_("div",Z,[_("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",class:"security-setting__svg",src:h(c)("security/security_card_setting.webp"),"akubela-test":`security-part-mini-img-${s}`,onClick:L((e=>ge(i)),["stop"])},null,8,ee)])],40,P)))),128))],32)])):f("",!0)],2)])):(g(),v("div",te,[_("div",null,[_("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",src:h(c)("no_Security_compress_f.webp")},null,8,ie)]),_("div",null,p(e.$t("No security")),1)])),b(a,{show:le.ignoreShow,"onUpdate:show":t[4]||(t[4]=e=>le.ignoreShow=e),"ignore-device-list":le.ignoreDeviceList,"ignore-type":le.ignoreType,"ignore-arm":le.ignoreArm,"ignore-security-id":le.ignoreSecurityId},null,8,["show","ignore-device-list","ignore-type","ignore-arm","ignore-security-id"])],64)}}};export{se as default};
