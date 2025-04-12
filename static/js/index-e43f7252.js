import{r as e,b as t,l,n as a,w as i,p as n,b4 as o,b5 as r,j as s,u as d,bT as u,b7 as c,v as m,ba as g,bb as h,F as p,bl as v,q as y,bd as b,bm as f,k as w}from"./Akubela-element-plus-Vendor-47553b40.js";import{e as _}from"./echarts-0ae524a5.js";import{u as x,w as L,g as S,m as I,s as k,c as D,j as O,n as E,ax as T,aP as A,am as j}from"./Akubela-login-home-part-Vendor-facddf88.js";import"./Akubela-devices-img-Vendor-0f46fa2c.js";import"./Akubela-scenes-security-other-img-Vendor-2a1534ad.js";const N={__name:"RisingSunChart",props:{timeValue:{type:String,default:"Today"},innerData:{type:Array,default:()=>[]},outerData:{type:Array,default:()=>[]},totalEnergy:{type:Number,default:0}},emits:["update:allRoomShow","open-device-list"],setup(s,{expose:d,emit:u}){const c=s,{t:m}=x();let g=L();const h=e(),p=e(),v=t({acceptData:{},chartOption:{},name:"",energy:"",energyPrice:"--"});l((()=>{y(),j()}));const y=()=>{let e=null;window.onresize=()=>{e&&(clearTimeout(e),e=null),e=setTimeout((()=>{f()}),200)}},b=e=>{const t=(e=>{let t=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;if(t)return e*(t/1920*100)})(e),l=(e=>{let t=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;if(t)return e*(t/1080*100)})(e);return t<=l?t:l},f=()=>{var e,t,l;p.value&&(null==(e=p.value)||e.dispose(),p.value=null);const i=["#caf7ed","#fff2b3","#ffe1ba","#e8d4fc","#c9d7ff","#c3ebff"],n=["#4EE6C4","#FFD400","#FF9D1A","#B570F7","#4D7CFF","#36BFFF"],o=c.innerData;null==(t=null==o?void 0:o.map)||t.call(o,((e,t)=>{e.emphasis={scale:!1,itemStyle:{color:n[t]}}}));const r=c.outerData;null==(l=null==r?void 0:r.map)||l.call(r,((e,t)=>{e.itemStyle={color:i[e.chartType-1]},e.emphasis={scale:!1,itemStyle:{color:n[e.chartType-1]}}}));let s={color:i,title:{text:`{Img|  }{b|${c.totalEnergy}kwh}`,textStyle:{fontSize:b(.2),rich:{a:{padding:[0,b(.1),0,0],color:"#4B5055"},b:{padding:[5,b(.1),0,b(.1)],fontSize:b(.4),color:"#FF8000"},Img:{fontSize:20,backgroundColor:{image:S("energy/energy_power.webp")}}}},subtext:`{a|${m("All Energy total consumption")}}`,subtextStyle:{fontSize:b(.16),color:"#4B5055",rich:{a:{fontSize:b(.16),color:"#4B5055"},b:{fontSize:b(.16),color:"#4B5055",padding:[5,b(.1),0,b(.1)]}}},textAlign:"center",x:"50%",y:"45%"},legend:{show:!1},series:[{type:"pie",data:o,label:{show:!0,position:"inner",fontSize:12,color:"#000",formatter:"{b}"},itemStyle:{borderWidth:5,borderColor:"#fff"},labelLine:{show:!1},emphasis:{scale:!1,scaleSize:20},radius:["30%","70%"]},{type:"pie",radius:["71%","90%"],itemStyle:{opacity:1,borderWidth:5,borderColor:"#fff"},label:{show:!0,position:"inner",fontSize:12,color:"#000"},labelLine:{show:!1},emphasis:{scale:!1,scaleSize:20},data:r}]};a((()=>{v.chartOption=s,w(s)}))},w=e=>{p.value=_.init(h.value),p.value.setOption(e),O(),p.value.on("click",(e=>{E(),D(e),A(e)})),p.value.getZr().on("click",(e=>{e.target||(O(),T(),u("update:allRoomShow",!0))}))},D=e=>{if(1===e.seriesIndex){p.value.dispatchAction({type:"highlight",seriesIndex:e.seriesIndex,dataIndex:e.dataIndex}),p.value.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:e.data.chartType-1});let t=c.innerData[e.data.chartType-1];u("open-device-list",t.name)}else p.value.dispatchAction({type:"highlight",seriesIndex:e.seriesIndex,dataIndex:e.dataIndex}),u("open-device-list",e.name)},O=()=>{p.value.dispatchAction({type:"highlight",seriesIndex:1}),p.value.dispatchAction({type:"highlight",seriesIndex:0})},E=()=>{p.value.dispatchAction({type:"downplay",seriesIndex:[0,1]})},T=()=>{v.chartOption.title.text=`{Img|  }{b|${c.totalEnergy}kwh}`,v.chartOption.title.subtext=`{a|${m("All Energy total consumption")}}`,p.value.setOption(v.chartOption,!1)},A=e=>{v.chartOption.title.text=`{Img|  }{b|${e.value}kwh}`,v.chartOption.title.subtext=`{a|${e.name} total consumption}`,p.value.setOption(v.chartOption,!1)},j=()=>{var e;v.acceptData[g.wId]=e=>{e.success&&(v.energyPrice=null==e?void 0:e.result)};const t={type:"config/ak_energy/price",id:g.wId++};null==(e=g.ws)||e.send(I(t))};return i((()=>g.updataId),(e=>{k(v.acceptData,e,g)}),{immediate:!0}),n((()=>{var e;null==(e=p.value)||e.dispose(),p.value=null,v.acceptData=null,v.chartOption=null,h.value=null,window.onresize=null})),d({init:f,downHightLight:E,setHightLight:D,setAllHightLight:O,setTitle:A,setDefaulTitle:T}),(e,t)=>(o(),r("div",{ref_key:"pieChart",ref:h,class:"energy-rising-sun"},null,512))}},C={class:"energy-box"},F={class:"energy-box-middle"},$={class:"energy-index__title"},z=["src"],R={class:"energy-index__title-font"},V={class:"energy-middle-box"},W={class:"energy-middle--top-box"},H={class:"energy-middle-top"},M={class:"energy-middle-list-left"},B=["akubela-test","onClick"],Y={class:"top-cont__span"},K={class:"energy-middle-top-left-time","akubela-test":"energy-time-picker"},P={class:"energy-middle--content"},U={class:"energy-box-right"},q={class:"energy-index__title"},Z=["src"],G={class:"energy-index__title-font"},J={class:"energy-right-box"},Q={class:"energy-right-list"},X={key:0},ee={class:"energy__row-left"},te=["src"],le={class:"energy__row-left__span"},ae={class:"energy__row-right"},ie={key:1},ne={class:"energy-right-list__row"},oe={class:"energy__row-left"},re=["src"],se={class:"energy__row-left__span"},de=c("div",{class:"energy__row-right"},"0 KWH",-1),ue={class:"energy__row-left"},ce={class:"energy__row-left__span"},me={class:"energy__row-right"},ge={__name:"index",setup(_){let ge=L();const{t:he}=x(),pe=D(),ve=e();let ye=O();const be=t({acceptData:{},timeList:[{label:he("Today"),value:"day",midLabel:""},{label:he("Week"),value:"week",midLabel:""},{label:he("Month"),value:"month",midLabel:""},{label:he("Year"),value:"year",midLabel:""},{label:he("Custom"),value:"custom",midLabel:""}],timeSelecedIndex:0,timeValue:"",timeObj:{},allRoomShow:!1,energyList:[],rightList:[],outerList:[],totalEnergy:0,nowDeviceList:[],oldIndex:0}),fe=e=>e.getTime()>be.nowTimeStap?e.getTime()>=be.nowTimeStap:e.getTime()<be.nowTimeStap-31536e6,we=e=>{var t,l,a,i,n,o,r,s,d,u,c;if(!e.success)return E(he("errorMessage"),"error");const m=(null==(i=null==(a=null==(l=null==(t=null==e?void 0:e.result)?void 0:t.datetime)?void 0:l.trim())?void 0:a.split)?void 0:i.call(a," "))||["--","--"];pe.allTime=m,be.nowTimeStap=Le(null==(n=null==e?void 0:e.result)?void 0:n.datetime);const g=Le(null==(o=null==e?void 0:e.result)?void 0:o.datetime)-6048e5;be.timeObj={...null==e?void 0:e.result,dateNumber:"--"===m[0]?"--":m[0].replace(/-/g,"."),lastWeekTimeNumber:null==(s=null==(r=T("",g).trim())?void 0:r.split)?void 0:s.call(r," ")[0]};const h=null==(c=null==(u=null==(d=be.timeObj)?void 0:d.dateNumber)?void 0:u.split)?void 0:c.call(u,".");be.timeList[0].midLabel=be.timeObj.dateNumber,be.timeList[1].midLabel=be.timeObj.lastWeekTimeNumber.replace(/-/g,".")+"-"+be.timeObj.dateNumber,be.timeList[2].midLabel=(1===Number(h[1])?h[0]-1+".12":h[0]+"."+(h[1]-1)+"-")+h[0]+"."+h[1],be.timeList[3].midLabel=h[0]-1+"-"+h[0],Ie()},_e=s((()=>be.energyList[be.timeList[be.timeSelecedIndex].value])),xe=s((()=>be.timeList[be.timeSelecedIndex].midLabel)),Le=e=>Date.parse(new Date(e).toString());s((()=>{var e,t;return be.rightList.forEach((e=>{e.name=e.name?e.name:"Other"})),null==(t=null==(e=[{name:"Energy",icon:"energy_icon",id:"all",area_id:"all"}])?void 0:e.concat)?void 0:t.call(e,be.rightList)}));const Se=e=>{var t,l;return null==(l=null==(t=ye.devicesList)?void 0:t.find)?void 0:l.call(t,(t=>(null==t?void 0:t.name)===e))};l((()=>{pe.isLoading=!0,pe.closeLoading(),(()=>{var e;be.acceptData[ge.wId]=we;const t={type:"config/datetime/get",id:ge.wId++};null==(e=ge.ws)||e.send(I(t))})()}));const Ie=()=>{var e;pe.isLoading=!0,pe.closeLoading(),be.acceptData[ge.wId]=ke;const t={type:"config/ak_energy/info",id:ge.wId++,mode:be.timeSelecedIndex+1};null==(e=ge.ws)||e.send(I(t))},ke=e=>{if(pe.isLoading=!1,!e.success)return Ne(),E(he("errorMessage"),"error");be.energyList={},Oe(e),be.energyList=e.result,Ne()},De=e=>{be.timeValue="",be.timeSelecedIndex=e,be.oldIndex=e,Ie()},Oe=e=>{var t,l,a,i,n;for(let o in e.result){let r=e.result[o];for(let a in r){r[a]=null==(l=null==(t=r[a])?void 0:t.filter)?void 0:l.call(t,(e=>null==e?void 0:e.energy));r[a].every((e=>!(null==e?void 0:e.energy)))&&delete e.result[o][a]}for(let t in e.result[o])if(""===t){const l=Ee(e.result[o][t]);e.result[o][t]=l,e.result[o].Other=e.result[o][t],delete e.result[o][t]}if((null==(a=Object.keys(e.result[o]))?void 0:a.length)>=4){let t=[];for(let e in r){let l=0;r[e].forEach(((e,t)=>{l=l+e.energy||0})),null==(i=null==t?void 0:t.push)||i.call(t,{energy:l,name:e}),r[e]=A(r[e],"energy",!1);const a=Ee(r[e]);r[e]=a}t=A(t,"energy",!1);const l={};let a=[];if(t.forEach(((e,t)=>{[0,1,2].includes(t)?l[e.name]=r[e.name]:a=[...a,...r[e.name]]})),(null==(n=l.Other)?void 0:n.length)>0){l.Other=[...l.Other,...a];const e=Ee(l.Other);l.Other=e}else l.Other=a;e.result[o]=l}}},Ee=e=>{var t;if((null==e?void 0:e.length)>=4){const l=[];let a=0;return e.forEach(((e,t)=>{var i;[0,1,2].includes(t)?null==(i=null==l?void 0:l.push)||i.call(l,e):a+=null==e?void 0:e.energy})),null==(t=null==l?void 0:l.push)||t.call(l,{name:"Other",energy:a}),l}return e},Te=d({render:()=>w("img",{src:S("calendar.webp"),alt:"smart home,home automation,homekit,smart security,smart home systems,google home",style:{height:"24px",width:"24px"}})}),Ae=e=>{var t,l;let a=Math.round(1e3*parseFloat(e))/1e3,i=null==(l=null==(t=a.toString())?void 0:t.split)?void 0:l.call(t,".");return 1==i.length?a.toString()+".000":i.length>1?2===i[1].length?a.toString()+"0":1===i[1].length?a.toString()+"00":a:void 0},je=(e,t)=>Math.round(e*Math.pow(100,t))/Math.pow(100,t),Ne=()=>{(()=>{var e,t,l,a;be.rightList=[];for(let i in _e.value)if(_e.value[i].length){let l=0;_e.value[i].forEach((e=>{e.energy=Ae(Number(e.energy)),l=Ae(je(Number(l)+Number(e.energy),3))})),null==(t=null==(e=be.rightList)?void 0:e.push)||t.call(e,{name:i,value:l})}else null==(a=null==(l=be.rightList)?void 0:l.push)||a.call(l,{name:i,value:0});be.totalEnergy=0,be.rightList.forEach((e=>{e.value=Ae(Number(e.value)),be.totalEnergy=Ae(je(Number(be.totalEnergy)+Number(e.value),3))}))})(),(()=>{be.outerList=[];let e=0;for(let t in _e.value)e+=1,_e.value[t].length&&_e.value[t].forEach((t=>{var l,a;null==(a=null==(l=be.outerList)?void 0:l.push)||a.call(l,{name:t.name||"--",value:t.energy,chartType:e,productType:t.product_type})}))})(),a((()=>{ve.value.init()})),be.allRoomShow=!0},Ce=e=>{be.nowDeviceList=_e.value[e],be.allRoomShow=!1},Fe=e=>{var t;if(!e)return be.timeSelecedIndex=be.oldIndex,void De(be.oldIndex);pe.isLoading=!0,pe.closeLoading(),be.timeSelecedIndex=4,be.timeList[4].midLabel=e[0]+"-"+e[1],be.acceptData[ge.wId]=ke;const l={type:"config/ak_energy/info",id:ge.wId++,start_date:e[0],end_date:e[1],mode:be.timeSelecedIndex+1};null==(t=ge.ws)||t.send(I(l))};return i((()=>ge.updataId),(e=>{k(be.acceptData,e,ge)}),{immediate:!0}),n((()=>{be.acceptData=null,be.timeObj=null,be.energyList=null,be.rightList=null,be.outerList=null,be.nowDeviceList=null,pe.isLoading=!1,ve.value=null})),(e,t)=>{var l,a;const i=u;return o(),r("div",C,[c("div",F,[c("div",$,[c("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",class:"energy-index__title-icon",src:m(S)("energy/tab_total_consumption.webp")},null,8,z),c("span",R,g(e.$t("Total Energy Consumption")),1)]),c("div",V,[c("div",W,[c("div",H,[c("div",M,[c("div",{class:h(["bg-active",0===be.timeSelecedIndex?"":1===be.timeSelecedIndex?"top-item-one":2===be.timeSelecedIndex?"top-item-two":3===be.timeSelecedIndex?"top-item-three":"top-item-four"])},null,2),(o(!0),r(p,null,v(null==(a=null==(l=be.timeList)?void 0:l.filter)?void 0:a.call(l,(e=>"custom"!==e.value)),((e,t)=>(o(),r("div",{key:e.value,"akubela-test":`energy-${t}`,class:h(["top-item",be.timeSelecedIndex===t?"top-item-active":""]),onClick:e=>De(t)},[c("span",Y,g(e.label),1)],10,B)))),128))]),c("div",K,[y(i,{modelValue:be.timeValue,"onUpdate:modelValue":t[0]||(t[0]=e=>be.timeValue=e),type:"daterange","range-separator":"一","popper-class":"energy-time-picker-popper akubela-test-energy-time-picker-popper","start-placeholder":e.$t("Start date"),"end-placeholder":e.$t("End date"),"prefix-icon":Te.value,"value-format":"YYYY-MM-DD","disabled-date":fe,placeholder:e.$t("pickADay"),size:"large",onChange:Fe},null,8,["modelValue","start-placeholder","end-placeholder","prefix-icon","placeholder"])])])]),c("div",P,[y(N,{ref_key:"sunChart",ref:ve,allRoomShow:be.allRoomShow,"onUpdate:allRoomShow":t[1]||(t[1]=e=>be.allRoomShow=e),"time-value":xe.value,"inner-data":be.rightList,"outer-data":be.outerList,"total-energy":be.totalEnergy,onOpenDeviceList:Ce},null,8,["allRoomShow","time-value","inner-data","outer-data","total-energy"])])])]),c("div",U,[c("div",q,[c("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",class:"energy-index__title-icon",src:m(S)("energy/tab_total_consumption.webp")},null,8,Z),c("span",G,g(e.$t("Device Energy Consumption")),1)]),c("div",J,[c("div",Q,[b(c("div",null,[be.rightList.length>0?(o(),r("div",X,[(o(!0),r(p,null,v(be.rightList,((e,t)=>(o(),r("div",{key:t,class:"energy-right-list__row"},[c("div",ee,[c("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",src:m(S)(`energy/management${(t+1)%6||6}.webp`)},null,8,te),c("span",le,g(e.name),1)]),c("div",ae,g(e.value)+"KWH",1)])))),128))])):(o(),r("div",ie,[c("div",ne,[c("div",oe,[c("img",{alt:"smart home,home automation,homekit,smart security,smart home systems,google home",src:m(S)("energy/management1.webp")},null,8,re),c("span",se,g(e.$t("No Data")),1)]),de])]))],512),[[f,be.allRoomShow]]),b(c("div",null,[(o(!0),r(p,null,v(be.nowDeviceList,((e,t)=>(o(),r("div",{key:t,class:"energy-right-device-list__row"},[c("div",ue,[y(j,{online:!0,"card-obj":Se(e.name)},null,8,["card-obj"]),c("span",ce,g((null==e?void 0:e.name)||"--"),1)]),c("div",me,g((null==e?void 0:e.energy)||"0 ")+"KWH",1)])))),128))],512),[[f,!be.allRoomShow]])])])])])}}};export{ge as default};
