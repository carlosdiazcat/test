import{b as e,l as t,w as a,b4 as o,b5 as s,b7 as n,q as l,bc as i,v as r,bd as c,be as d,bf as m,b9 as u,ba as v,bi as p,cd as g,bn as h,ce as _,bh as f,r as w,p as b,bp as y,bm as k,F as D,bl as I,bb as x,bs as S,cl as L,bt as C,bA as $,bB as O}from"./Akubela-element-plus-Vendor-47553b40.js";import{u as M,w as j,l as T,n as A,Q as E,m as R,s as B,g as U,P as z,al as N,Y as V,as as F,a4 as K,c as H,k as P,j as W,M as q,S as X,au as Y,a as Q,aK as G,aL as J,a0 as Z,b as ee,av as te,aw as ae,a1 as oe}from"./Akubela-login-home-part-Vendor-facddf88.js";import{_ as se}from"./index-d8b1faeb.js";import"./Akubela-devices-img-Vendor-0f46fa2c.js";import"./Akubela-scenes-security-other-img-Vendor-2a1534ad.js";const ne="/static/webp/add-scenes_pic_compress_f-8a8217af.webp",le={class:"new-management-import"},ie={key:0,class:"scenes-import-download"},re={class:"first-part"},ce=["src"],de=["src"],me=["src"],ue=["src"],ve=n("div",{class:"scenes_info"},null,-1),pe=["src"],ge=["src"],he={__name:"managementView",emits:["open-import"],setup(w,{emit:b}){var y;const{t:k}=M();let D=j();const I=e({recevieData:{},exportLoading:!1,isEngrMode:null==(y=T.getItem("isEngrMode"))?void 0:y.value,loading:!1,type:"",is_showImportDia:!1,tableData:[],connectInfo:!1});t((()=>{(()=>{var e;I.recevieData[D.wId]=e=>{if(!e.success)return A(k("errorMessage"),"error");I.connectInfo=e.result.connect_status};const t={type:"config/connect_info",id:D.wId++};null==(e=D.ws)||e.send(R(t))})(),O()}));const x=()=>({color:"#5D5D5D"}),S=()=>({fontSize:"12px",color:"#000000"}),L=e=>{const t={0:"name",1:"type",2:"location"};"ascending"===e.order?I.tableData.sort(((a,o)=>a[t[e.column.no]].localeCompare(o[t[e.column.no]]))):"descending"===e.order?I.tableData.sort(((a,o)=>o[t[e.column.no]].localeCompare(a[t[e.column.no]]))):O()},C=e=>{const t=I.originData.find((t=>e.device_id===t.device_id));e.scene_dev_id=t.scene_dev_id},$=e=>{var t;I.recevieData[D.wId]=e=>{if(I.loading=!1,!e.success)return A(k("errorMessage"),"error");O()},I.loading=!0,setTimeout((()=>{I.loading=!1}),15e3);const a={type:"config/ak_device/update",id:D.wId++,device_id:e.device_id,scene_dev_id:e.scene_dev_id};null==(t=D.ws)||t.send(R(a))},O=()=>{var e;I.recevieData[D.wId]=e=>{if(I.loading=!1,!e.success)return A(k("errorMessage"),"error");I.originData=E(e.result);for(let t=0;t<e.result.length;t++){const a=e.result[t];let o=I.tableData.find((e=>e.device_id===a.device_id));o?o={...o,...a}:I.tableData.push(a)}},I.loading=!0,setTimeout((()=>{I.loading=!1}),15e3);const t={type:"ak_device/scene/device_list",id:D.wId++};null==(e=D.ws)||e.send(R(t))},K=e=>{b("open-import",e)},H=()=>{var e;I.recevieData[D.wId]=async e=>{var t,a;if(I.exportLoading=!1,!e.success)return"95003010"===e.error.code?A(k(e.error.code),"error"):void A(k(e.error.code,{num:e.error.message.length,str:e.error.message+""}),"error");const o={file:null==(t=null==e?void 0:e.result)?void 0:t.file_path,_customSilentError:!0,responseType:"arraybuffer"};await V.commonDownLoad(o).then((e=>{const t=e.data;F(t,"scene.tgz")}));const s={file:null==(a=null==e?void 0:e.result)?void 0:a.template_path,_customSilentError:!0,responseType:"arraybuffer"};await V.commonDownLoad(s).then((e=>{const t=e.data;F(t,"DeviceIDList.csv")})),A(k("success"))},I.exportLoading=!0,setTimeout((()=>{I.exportLoading=!1}),6e4);const t={type:"ak_scenes/export",id:D.wId++};null==(e=D.ws)||e.send(R(t))};return a((()=>D.updataId),(e=>{B(I.recevieData,e,D)}),{immediate:!0}),(e,t)=>{const a=p,w=g,b=h,y=_,D=f;return o(),s("div",le,[I.isEngrMode?(o(),s("div",ie,[n("div",re,[l(z,{"akubela-test":"scene-import-flag","class-name":"import","button-name":e.$t("Import"),onClick:t[0]||(t[0]=e=>K("local"))},{prefix:i((()=>[n("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",class:"prefix-img",src:r(U)("scenes/scenes_export_icon.webp")},null,8,ce)])),suffix:i((()=>[n("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",class:"suffix-img",src:r(U)("scenes/scenes_import.webp")},null,8,de)])),_:1},8,["button-name"]),c((o(),d(z,{"akubela-test":"scene-export-flag","class-name":"import","button-name":e.$t("Export"),onClick:H},{prefix:i((()=>[n("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",class:"prefix-img",src:r(U)("scenes/scenes_zip.webp")},null,8,me)])),suffix:i((()=>[n("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",class:"suffix-img",src:r(U)("scenes/scenes_export.webp")},null,8,ue)])),_:1},8,["button-name"])),[[D,I.exportLoading]]),l(a,{class:"box-item",effect:"light",content:e.$t("For device-related scene, Device’s ID must be exactly the same, and for Space-related scene, room structures and room names must be exactly the same."),placement:"top"},{default:i((()=>[ve])),_:1},8,["content"])]),c((o(),d(z,{"class-name":"import",class:"download-from-cloud-btn","button-name":e.$t("Download From Cloud"),onClick:t[1]||(t[1]=e=>K("cloud"))},{prefix:i((()=>[n("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",class:"prefix-img",src:r(U)("scenes/scenes_zip.webp")},null,8,pe)])),suffix:i((()=>[n("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",class:"suffix-img",src:r(U)("scenes/scenes_import.webp")},null,8,ge)])),_:1},8,["button-name"])),[[D,I.importCloudLoading,void 0,{fullscreen:!0,lock:!0}]])])):m("",!0),I.isEngrMode?c((o(),d(y,{key:1,ref:"multipleTableRef",size:"large","header-cell-style":x,"cell-style":S,class:"scene-table-part",height:"calc(100vh - 143px)","highlight-current-row":"","scrollbar-always-on":"",sortable:"",data:I.tableData,onSortChange:L},{default:i((()=>[l(w,{prop:"name",sortable:"",label:e.$t("Name")},null,8,["label"]),l(w,{label:e.$t("Device Type"),sortable:""},{default:i((t=>[u(v(t.row.type?e.$t(t.row.type):"--"),1)])),_:1},8,["label"]),l(w,{label:e.$t("Location"),sortable:""},{default:i((t=>[u(v(t.row.location?t.row.location:e.$t("Other")),1)])),_:1},8,["label"]),l(w,{prop:"used",label:e.$t("Used In Scene"),sortable:""},{default:i((t=>[u(v(t.row.used?e.$t("YES"):e.$t("NO")),1)])),_:1},8,["label"]),l(w,{label:e.$t("Device ID(1-500)"),width:"150"},{default:i((e=>[l(b,{modelValue:e.row.scene_dev_id,"onUpdate:modelValue":t=>e.row.scene_dev_id=t,"akubela-test":e.row.used?"devices-id-for-scene":"",class:"num-input",min:1,max:500,onBlur:t=>(e=>{const t=N.isPositiveInteger(e.scene_dev_id);if(""===e.scene_dev_id)return void $(e);if(!t||+e.scene_dev_id<1||+e.scene_dev_id>500)return C(e),A(k("Device id is format is incorrect, please re-enter it"),"error");const a=I.originData.find((t=>e.scene_dev_id+""===t.scene_dev_id));if(a&&a.device_id!==e.device_id)return C(e),A(k("The device id is duplicated, please re-enter it"),"error");$(e)})(e.row)},null,8,["modelValue","onUpdate:modelValue","akubela-test","onBlur"])])),_:1},8,["label"])])),_:1},8,["data"])),[[D,I.loading]]):m("",!0)])}}},_e={class:"devices-content new-scene-index"},fe={class:"content-left"},we={class:"left-menu"},be=["onClick"],ye={key:1,class:"left-second-rectangle"},ke=["src"],De=["area-id"],Ie=["src","icon-class"],xe=["src"],Se={class:"room-rate"},Le={key:0,class:"left-item-second"},Ce=["onClick"],$e=["area-id"],Oe={class:"room-rate"},Me={class:"content-botton__svg"},je={key:0,class:"content-right"},Te={class:"right-top"},Ae=["akubela-test","onClick"],Ee={key:0},Re={key:0,class:"new-bottom"},Be={key:0,class:"devices-card-title"},Ue={class:"devices-title-span"},ze=["onDragstart","onDrop"],Ne=["src"],Ve=["onClick"],Fe=["onClick"],Ke={key:0,class:"scence-tip"},He=["src","onMouseover"],Pe={key:1},We=["onClick"],qe=["onClick"],Xe={key:1,class:"content-right"},Ye={class:"scenes-index-top"},Qe=["src"],Ge={class:"scenes-index-top__title"},Je={class:"scenes-index-bottom"},Ze=n("img",{src:ne,class:"scenes-index-bottom__img",alt:"scenes"},null,-1),et={key:2,class:"content-right"},tt={class:"edit-name__input-content"},at={class:"import-failure"},ot={__name:"newIndex",setup(u){var p;const E=w(),N=K(),V=["Navigationbar_list","Navigationbar_card_4"];let F=j();const te=w(null),ae=H(),{t:oe}=M();let ne=P(),le=W();const ie=w(0),re=w(null),ce=w("Navigationbar_card_4");w(!1);const de=e({menuSelect:{}}),me=e({acceptData:{},rowDom:[],rowSonDom:[],startShow:!1,selectAreaId:"all",managementShow:!1,recevieData:{},dragObj:{},targetObj:{},loading:!1,scene_dev_id:"",DataList:[],originData:[],exportLoading:!1,connectInfo:!1,importCloudLoading:!1,importLocalLoading:!1,failShow:!1,deleteShow:!1,errTip:"",device:[],space:[],contact:[],security:[],scene_id:"",editShow:!1,secondShow:!1,secondOpenIndex:0,areaLoading:!1,form:{alias:""},is_showImportDia:!1,type:"",timeoutId:null,editloding:!1,tableData:[],areaData:le.newRoomList.filter((e=>"public"!==e.area_id)),isEngrMode:null==(p=T.getItem("isEngrMode"))?void 0:p.value});b((()=>{q.off("$mitt_import_state"),q.off("$mitt_update_scene_dev_id"),clearTimeout(me.timeoutId),me.timeoutId=null})),t((()=>{me.selectAreaId="all",ae.isLoading=!1,le.getDeviceAllList(),q.on("$mitt_import_state",ve)}));const ue=()=>({color:"#5D5D5D"}),ve=e=>{var t,a,o,s;me.errTip="",clearTimeout(me.timeoutId),me.timeoutId=null,me.importCloudLoading=!1,me.importLocalLoading=!1,1===(null==(a=null==(t=e.event.data)?void 0:t.payload)?void 0:a.status)?(A(oe("success")),ge()):2===(null==(s=null==(o=e.event.data)?void 0:o.payload)?void 0:s.status)&&(pe(e.event.data.payload),me.failShow=!0)},pe=e=>{e&&("95003006"!==e.error.code&&"95003007"!==e.error.code&&"95003008"!==e.error.code&&"95003009"!==e.error.code||(me.errTip=oe(e.error.code)))},ge=()=>{var e;me.recevieData[F.wId]=e=>{e.success?e.result&&(me.errTip=oe("Some scenes are mismatched."),me.failShow=!0):A(oe("errorMessage"),"error")};const t={type:"ak_scenes/import/has_unmatched",id:F.wId++};null==(e=F.ws)||e.send(R(t))},ot=e=>{let t="";return t=(null==e?void 0:e.icon)?G[null==e?void 0:e.icon]?U(G[null==e?void 0:e.icon]):U(G["value send"]):J[null==e?void 0:e.type]?U(J[null==e?void 0:e.type]):U("scenes/Scenes_icon0.webp"),t},st=()=>{me.device.length=0,me.space.length=0,me.contact.length=0,me.security.length=0},nt=e=>{var t;me.acceptData[F.wId]=t=>{if(!t.success)return A(oe("errorMessage"),"error");e.favorite=!e.favorite};const a={type:"ak_scenes/favorite/update",id:F.wId++,favorite:!e.favorite,scene_id:e.scene_id};null==(t=F.ws)||t.send(R(a))},lt=(e,t)=>{pt[null==e?void 0:e.scene_type]||(t.stopImmediatePropagation(),me.form.alias=e.name,me.scene_id=e.scene_id,me.editShow=!0)},it=e=>{var t;1===e.column.no?rt(e):(e=>{let t=[];if("ascending"===e.order)t=ne.scenesList.sort(((e,t)=>!0===e.favorite&&!1===t.favorite?-1:!1===e.favorite&&!0===t.favorite?1:0));else{if("descending"!==e.order)return void(ne.scenesList=ne.originScenesList);t=ne.scenesList.sort(((e,t)=>!0===t.favorite&&!1===e.favorite?-1:!1===t.favorite&&!0===e.favorite?1:0))}ne.scenesList=t})(e),me.acceptData[F.wId]=e=>{if(!e.success)return A(oe("errorMessage"),"error")};const a={};ne.scenesList.forEach(((e,t)=>{a[t+1]=e.scene_id}));const o={type:"ak_scenes/sort",id:F.wId++,data:a};null==(t=F.ws)||t.send(R(o))},rt=e=>{"ascending"===e.order?ne.scenesList.sort(((e,t)=>e.name.localeCompare(t.name))):"descending"===e.order?ne.scenesList.sort(((e,t)=>t.name.localeCompare(e.name))):ne.scenesList=ne.originScenesList},ct=e=>({all:oe("Whole House")}[e.area_id]||e.name),dt=()=>{var e;null==(e=null==N?void 0:N.push)||e.call(N,{name:"ModifyOrdinaryScene"})},mt=e=>{var t,a;e&&(null==(a=null==(t=me.rowDom)?void 0:t.push)||a.call(t,e))},ut=e=>{var t,a;e&&(null==(a=null==(t=me.rowSonDom)?void 0:t.push)||a.call(t,e))};a((()=>F.updataId),(e=>{B(me.acceptData,e,F)}),{immediate:!0}),a((()=>le.roomList),(()=>{de.menuSelect=le.roomList[ie.value]})),b((()=>{me.rowDom=null,me.rowSonDom=null,me.acceptData=null,q.off("$mitt_import_state"),q.off("$mitt_update_scene_dev_id"),clearTimeout(me.timeoutId),me.timeoutId=null}));const vt=e=>{me.type=e,me.is_showImportDia=!0},pt={3:"Hue Hub",4:"Fibaro Hub",5:"control4",6:"KNX",7:"KNX"},gt=e=>{var t;return(null==e?void 0:e.status)?(ae.isLoading=!0,ae.closeLoading(),null==(t=null==N?void 0:N.push)?void 0:t.call(N,{name:"ModifyOrdinaryScene",query:{id:e.scene_id}})):A(oe("The scene cannot be edited"),"error")},ht=()=>({fontSize:"12px",color:"#000000",cursor:"pointer"}),_t=()=>{me.editShow=!1,me.form.alias="",me.scene_id=""},ft=e=>{const t=e.bind_areas[0];return"all"===t?oe("Whole House"):"others"===t?oe("Other"):le.getRoomText(t,"scenes")},wt=(e,t)=>{if(!e.name.endsWith(".tgz"))return A(oe("Please select a valid file to upgrade."),"error"),t();let a=e.size/1024/1024>1;if(a)return A(oe("Please upload an file smaller than 1MB."),"error"),t(!a);t(!0)},bt=e=>{const t=new FileReader;t.onload=e=>{const t=e.target.result.split(",")[1];yt(t)},t.readAsDataURL(e)},yt=e=>{var t;me.recevieData[F.wId]=e=>{me.importLocalLoading=!1,te.value.changeShow()},me.importLocalLoading=!0,me.timeoutId=setTimeout((()=>{me.importLocalLoading=!1}),12e4);const a={type:"ak_scenes/import",content:e,id:F.wId++};null==(t=F.ws)||t.send(R(a))},kt=Z((()=>{E.value.validate((async e=>{var t;if(e){me.recevieData[F.wId]=e=>{if(me.editloding=!1,!e.success)return A(oe("errorMessage"),"error");_t()};const e={type:"ak_scenes/update",id:F.wId++,scene_id:me.scene_id,name:me.form.alias};me.editloding=!0,null==(t=F.ws)||t.send(R(e))}}))})),Dt=()=>{me.is_showImportDia=!1,"local"===me.type?te.value.changeShow():It()},It=()=>{var e;me.recevieData[F.wId]=e=>{me.importCloudLoading=!1},me.importCloudLoading=!0,me.timeoutId=setTimeout((()=>{me.importCloudLoading=!1}),12e4);const t={type:"ak_scenes/import",id:F.wId++};null==(e=F.ws)||e.send(R(t))};a((()=>F.updataId),(e=>{B(me.recevieData,e,F)}),{immediate:!0}),a((()=>le.newRoomList),(()=>{me.areaData=le.newRoomList.filter((e=>"public"!==e.area_id))}));const xt={},St=()=>{le.flatRommList.forEach((e=>{let t="Other"===e.area_id?"others":e.area_id;xt[t]=e}));const e=[];for(let a in ne.areaObjKey){let t="others"===a?"Other":a;const o=ne.areaObjKey[a],s=xt[a];me.selectAreaId!==t&&"all"!==me.selectAreaId||e.push({...s,children:o})}me.tableData=e;let t=[];me.tableData.forEach((e=>{t=t.concat(e.children)})),me.DataList=t,me.startShow=!0},Lt=e=>({all:oe("Whole House"),others:oe("Others")}[e.area_id]||le.getRoomText(e.area_id,"scenes"));a((()=>ne.scenesList),(()=>{St()}));return(e,t)=>{const a=ee,u=ee,p=ee,w=g,b=C,M=_,j=h,T=$,A=O,B=f,N=y("skeletonClose");return c((o(),s("div",_e,[c((o(),s("div",fe,[n("div",we,[(o(!0),s(D,null,I(me.areaData,((e,t)=>{var i,c,d,u,p,g,h;return o(),s("div",{key:t,class:"menu-list"},[n("div",{ref_for:!0,ref:mt,class:x(me.selectAreaId!==(null==e?void 0:e.area_id)||(null==(i=null==e?void 0:e.children)?void 0:i.length)?"left-item":"left-item-active"),onClick:a=>((e,t)=>{var a;me.managementShow=!1,e.draw=!(null==e?void 0:e.draw),(null==(a=e.children)?void 0:a.length)>0||(me.secondOpenIndex===t?(me.secondShow=!me.secondShow,me.secondOpenIndex=t):(me.secondShow=!0,me.secondOpenIndex=t),de.menuSelect=e,ie.value=t,re.value=null,me.selectAreaId=e.area_id,St())})(e,t)},[(null==(c=null==e?void 0:e.children)?void 0:c.length)?m("",!0):(o(),s("span",{key:0,class:x(["rectangle",me.selectAreaId===(null==e?void 0:e.area_id)?"rectangle-active":""])},null,2)),(null==(d=null==e?void 0:e.children)?void 0:d.length)>0?(o(),s("span",ye,[n("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",src:r(U)(((null==e?void 0:e.draw)?"more_right":"more_bottom")+".webp")},null,8,ke)])):m("",!0),n("div",{class:"name-row","area-id":e.area_id},[n("div",null,[!(null==(u=null==e?void 0:e.children)?void 0:u.length)&&e.icon?(o(),s("img",{key:0,alt:"smart home,home automation,homekit,smart security,smart home systems,google home",class:"cont-icon",src:r(U)(`devices/${e.icon}.webp`),"icon-class":e.icon},null,8,Ie)):m("",!0),(null==(p=null==e?void 0:e.children)?void 0:p.length)>0?(o(),s("img",{key:1,alt:"smart home,home automation,homekit,smart security,smart home systems,google home",class:"second-cont-icon",src:r(U)(`devices/${me.selectAreaId===(null==e?void 0:e.area_id)?"floor_sclected":"floor"}.webp`)},null,8,xe)):m("",!0),n("span",{class:x([me.selectAreaId===(null==e?void 0:e.area_id)&&(null==(g=null==e?void 0:e.children)?void 0:g.length)>0?"rectangle-text-active":"left-text"])},[l(X,{content:ct(e)},null,8,["content"])],2)])],8,De),n("div",Se,v(r(ne).roomRate(e)),1)],10,be),(null==(h=null==e?void 0:e.children)?void 0:h.length)>0&&!(null==e?void 0:e.draw)?(o(),s("div",Le,[(o(!0),s(D,null,I(e.children,((i,c)=>(o(),s("div",{key:c,ref_for:!0,ref:ut,class:x(re.value===(null==i?void 0:i.area_id)?"left-item-active":"left-item"),onClick:a=>((e,t,a,o)=>{me.managementShow=!1,de.menuSelect=e,ie.value=t,re.value=null==a?void 0:a.area_id,me.selectAreaId=a.area_id,St()})(e,t,i)},[n("span",{class:x(["rectangle",re.value===(null==i?void 0:i.area_id)?"rectangle-active":""])},null,2),n("div",{class:"name-row","area-id":i.area_id},[n("div",null,[l(a,{class:"cont-icon","icon-class":i.icon},null,8,["icon-class"]),n("span",{class:x([re.value===(null==i?void 0:i.area_id)?"left-mar__left":"left-text"])},[l(X,{content:i.name},null,8,["content"])],2)])],8,$e),n("div",Oe,v(r(ne).roomRate(i)),1)],10,Ce)))),128))])):m("",!0)])})),128))]),me.isEngrMode?(o(),s("div",{key:0,class:"content-bottom",onClick:t[0]||(t[0]=e=>(me.selectAreaId="-",re.value=null,void(me.managementShow=!0)))},[n("div",Me,[l(u,{"icon-class":"edit_name"}),n("div",null,v(e.$t("Scene Management")),1)])])):m("",!0)])),[[B,me.areaLoading,void 0,{fullscreen:!0,lock:!0}]]),!me.managementShow&&me.DataList.length?(o(),s("div",je,[n("div",Te,[n("div",{class:x(["top-item-active","Navigationbar_card_4"===ce.value?"":"top-item-list"])},null,2),(o(),s(D,null,I(V,(e=>n("div",{key:e,"akubela-test":`scene-tab-${e}`,class:"top-item",onClick:t=>{return a=e,void(ce.value=a);var a}},[l(a,{class:"topcont-icon","icon-class":ce.value===e?e+"_seclected":e},null,8,["icon-class"])],8,Ae))),64))]),me.managementShow?m("",!0):(o(),s("div",Ee,["Navigationbar_card_4"===ce.value?c((o(),s("div",Re,[l(L,{name:"akubelascenes"},{default:i((()=>[(o(!0),s(D,null,I(me.tableData,((e,a)=>(o(),s("div",{key:null==e?void 0:e.area_id},[e.children.length?(o(),s("div",Be,[l(p,{class:"devices-card-svg","icon-class":"Roomlist"}),n("span",Ue,v(Lt(e)),1)])):m("",!0),n("div",{class:x(["ordinary-scenes-list",{"ordinary-scenes-list-admin":me.isEngrMode}])},[(o(!0),s(D,null,I(e.children,((i,r)=>(o(),s("div",{key:null==i?void 0:i.scene_id},[n("div",{class:x(["ordinary-scenes-box",`scenes-list-${a}`,null==e?void 0:e.name]),draggable:"true",onDragover:t[1]||(t[1]=S((()=>{}),["prevent"])),onDragstart:e=>((e,t,a,o)=>{me.dragObj={item:t,index:a,areaIndex:o}})(0,i,r,a),onDragend:t[2]||(t[2]=e=>((e,t,a)=>{var o;if(me.dragObj.areaIndex!==me.targetObj.areaIndex)return;const s=me.tableData[me.dragObj.areaIndex];s.children=s.children.filter((e=>e.scene_id!==me.dragObj.item.scene_id));let n=0;for(let c=0;c<s.children.length;c++)s.children[c].scene_id===me.targetObj.item.scene_id&&(n=c);me.dragObj.index<me.targetObj.index&&(n+=1),s.children.splice(n,0,me.dragObj.item),ne.areaObjKey[s.area_id]=s.children;const l={};let i=1;for(let c in ne.areaObjKey)ne.areaObjKey[c].forEach((e=>{l[i]=e.scene_id,i+=1}));const r={type:"ak_scenes/sort",id:F.wId++,data:l};null==(o=F.ws)||o.send(R(r))})()),onDrop:S((e=>((e,t,a,o)=>{me.type="card",me.targetObj={item:t,index:a,areaIndex:o}})(0,i,r,a)),["stop"])},[l(Y,{favorite:i.favorite,"onUpdate:favorite":e=>i.favorite=e,"scenes-obj":i},null,8,["favorite","onUpdate:favorite","scenes-obj"])],42,ze)])))),128))],2)])))),128))])),_:1})])),[[N]]):m("",!0),"Navigationbar_list"===ce.value?(o(),d(M,{key:1,size:"large","header-cell-style":ue,"cell-style":ht,class:"bottom-scene-list","highlight-current-row":"","scrollbar-always-on":"",sortable:"",data:me.DataList,onSortChange:it,onRowClick:gt},{default:i((()=>[l(w,{label:e.$t("Scenes Icon"),width:"150"},{default:i((e=>[n("img",{class:"scene-icon",alt:"smart home,home automation,homekit,smart security,smart home systems,google home",loading:"lazy",decoding:"async",src:ot(e.row)},null,8,Ne)])),_:1},8,["label"]),l(w,{label:e.$t("Name")},{default:i((t=>[n("div",{onClick:e=>lt(t.row,e)},v(t.row.name?e.$t(t.row.name):"--"),9,Ve)])),_:1},8,["label"]),l(w,{label:e.$t("Location")},{default:i((e=>[n("div",{onClick:t=>lt(e.row,t)},v(ft(e.row)),9,Fe)])),_:1},8,["label"]),l(w,{label:e.$t("Favorite"),width:"150"},{default:i((t=>{var a;return[(null==(a=t.row)?void 0:a.status)?(o(),s("div",Pe,[t.row.favorite?(o(),s("div",{key:0,class:"scence-like",onClick:S((e=>nt(t.row)),["stop"])},null,8,We)):m("",!0),t.row.favorite?m("",!0):(o(),s("div",{key:1,class:"scence-like-dis",onClick:S((e=>nt(t.row)),["stop"])},null,8,qe))])):(o(),s("div",Ke,[l(b,{"popper-class":"scence-tip-popover",trigger:"hover","show-after":"100",placement:"top","show-arrow":!0,width:200,onHide:st},{reference:i((()=>[n("img",{class:"warning-img",src:r(U)("warning_user.webp"),onMouseover:a=>e.getImportInfo(t.row)},null,40,He)])),default:i((()=>[n("p",null,v(oe("For device-related scene, xxx(Device ID) must be exactly the same, and for Space-related scene, room structures and room names must be exactly the same.",{device:me.device+""},{space:me.space+""},{contact:me.contact+""},{security:me.security+""})),1),l(z,{"class-name":"primary","button-name":e.$t("Delete"),onClick:e=>{return a=t.row,me.deleteShow=!0,void(me.scene_id=a.scene_id);var a}},null,8,["button-name","onClick"])])),_:2},1024)]))]})),_:1},8,["label"])])),_:1},8,["data"])):m("",!0)]))])):m("",!0),me.managementShow||me.DataList.length?m("",!0):(o(),s("div",Xe,[n("div",Ye,[n("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",class:"scences-index__title-icon",src:r(U)("tab_scenes.webp")},null,8,Qe),n("span",Ge,v(e.$t("Add scene")),1)]),n("div",Je,[Ze,n("div",{class:"scenes-index-bottom__botton",onClick:dt},v(e.$t("Start")),1)])])),l(Q,{show:me.is_showImportDia,"onUpdate:show":t[3]||(t[3]=e=>me.is_showImportDia=e),title:e.$t("Title"),onButtonCancel:t[4]||(t[4]=e=>me.is_showImportDia=!1),onButtonConfirm:Dt},{content:i((()=>[n("div",null,v(e.$t("If you choose to import a scene, all existing scene will be deleted.")),1)])),_:1},8,["show","title"]),c(l(se,{ref_key:"fileRef",ref:te,class:"file-dia-scence",accept:".tgz","is-top-set":!0,onBeforeUpdate:wt,onUpload:bt},null,512),[[B,me.importLocalLoading,void 0,{fullscreen:!0,lock:!0}]]),me.managementShow?(o(),s("div",et,[l(he,{class:"right-bottom",onOpenImport:vt})])):m("",!0),l(Q,{show:me.editShow,"onUpdate:show":t[7]||(t[7]=e=>me.editShow=e),class:"edit-name-secne-table",title:e.$t("Edit Name"),"button-cancel-show":!0,"is-ash-loading":!0,"ok-loading":me.editloding,onButtonCancel:_t,onButtonConfirm:r(kt)},{content:i((()=>[n("div",tt,[l(A,{ref_key:"ruleFormRef",ref:E,model:me.form,rules:e.rules,onSubmit:t[6]||(t[6]=S((()=>{}),["prevent"]))},{default:i((()=>[l(T,{prop:"alias"},{default:i((()=>[l(j,{modelValue:me.form.alias,"onUpdate:modelValue":t[5]||(t[5]=e=>me.form.alias=e),size:"large",maxlength:"63",placeholder:e.$t("Please enter")},null,8,["modelValue","placeholder"])])),_:1})])),_:1},8,["model","rules"])])])),_:1},8,["show","title","ok-loading","onButtonConfirm"]),l(Q,{show:me.failShow,"onUpdate:show":t[8]||(t[8]=e=>me.failShow=e),title:e.$t("Import failure"),"button-ok-name":e.$t("Confirm"),onButtonCancel:t[9]||(t[9]=e=>me.failShow=!1),onButtonConfirm:t[10]||(t[10]=e=>me.failShow=!1)},{content:i((()=>[n("div",at,v(me.errTip),1)])),_:1},8,["show","title","button-ok-name"]),l(Q,{show:me.deleteShow,"onUpdate:show":t[11]||(t[11]=e=>me.deleteShow=e),title:e.$t("Remove Scenes"),onButtonCancel:t[12]||(t[12]=e=>me.deleteShow=!1),onButtonConfirm:e.deleteScenes},{content:i((()=>[n("div",null,v(e.$t("Are you sure you want to delete this scene?")),1)])),_:1},8,["show","title","onButtonConfirm"])],512)),[[k,me.startShow]])}}},st={class:"scenes-index"},nt={key:0},lt={class:"scenes-index-top"},it=["src"],rt={class:"scenes-index-top__title"},ct={class:"scenes-index-bottom"},dt=n("img",{src:ne,class:"scenes-index-bottom__img",alt:"scenes"},null,-1),mt={key:1},ut={__name:"index",setup(a){var i;let d=null;d=te();const m=w(!1);H();let u=P();j();const p=e({isEngrMode:null==(i=T.getItem("isEngrMode"))?void 0:i.value});t((()=>{u.getAllScenes(),u.timerAuto=setTimeout((()=>{u.pageLoading=!1}),1e4),setTimeout((()=>{m.value=!0}),100)}));const g=()=>{var e,t;null==(t=null==(e=oe)?void 0:e.push)||t.call(e,{name:"ModifyOrdinaryScene"})};return b((()=>{ae(d)})),(e,t)=>{var a,i;return c((o(),s("div",st,[(null==(a=r(u).scenesList)?void 0:a.length)||p.isEngrMode?(o(),s("div",mt,[l(ot)])):(o(),s("div",nt,[n("div",lt,[n("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",class:"scences-index__title-icon",src:r(U)("tab_scenes.webp")},null,8,it),n("span",rt,v(e.$t("Add scene")),1)]),n("div",ct,[dt,n("div",{class:"scenes-index-bottom__botton",onClick:g},v(e.$t("Start")),1)])]))],512)),[[k,m.value||(null==(i=r(u).scenesList)?void 0:i.length)]])}}};export{ut as default};
