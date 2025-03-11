(function(){"use strict";var t={3112:function(t,e,n){var o=n(5130),i=n(6768),l=n(4232);const s={class:"app-container"},u={class:"content"},r={class:"control-panel"},a={class:"mode-switch"},c={key:0,class:"input-group"},d={key:1,class:"batch-input-group"},h={class:"controls"},p={class:"control-item"},k={class:"control-item"},f={class:"control-item"},m={class:"control-item"},b={class:"control-item"},w={class:"control-item"},v={class:"action-buttons"},x={class:"action-btn import-btn"},y={key:0,class:"cloud-text-wrapper"},g={key:1,class:"batch-preview"};function L(t,e,n,L,T,C){const R=(0,i.g2)("CloudText");return(0,i.uX)(),(0,i.CE)("div",s,[(0,i.Lk)("div",u,[e[15]||(e[15]=(0,i.Lk)("h1",{class:"title"},"云朵字生成器",-1)),(0,i.Lk)("div",r,[(0,i.Lk)("div",a,[(0,i.Lk)("button",{class:(0,l.C4)(["mode-btn",{active:!T.isBatchMode}]),onClick:e[0]||(e[0]=t=>T.isBatchMode=!1)}," 单个文字 ",2),(0,i.Lk)("button",{class:(0,l.C4)(["mode-btn",{active:T.isBatchMode}]),onClick:e[1]||(e[1]=t=>T.isBatchMode=!0)}," 批量处理 ",2)]),T.isBatchMode?((0,i.uX)(),(0,i.CE)("div",d,[(0,i.bo)((0,i.Lk)("textarea",{"onUpdate:modelValue":e[3]||(e[3]=t=>T.batchText=t),placeholder:"请输入要批量生成的文字，每行一个",class:"batch-input"},null,512),[[o.Jo,T.batchText]])])):((0,i.uX)(),(0,i.CE)("div",c,[(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>T.text=t),placeholder:"请输入要生成的文字",class:"text-input"},null,512),[[o.Jo,T.text]])])),(0,i.Lk)("div",h,[(0,i.Lk)("div",p,[e[13]||(e[13]=(0,i.Lk)("label",null,"外轮廓颜色",-1)),(0,i.bo)((0,i.Lk)("input",{type:"color","onUpdate:modelValue":e[4]||(e[4]=t=>T.outlineColor=t)},null,512),[[o.Jo,T.outlineColor]])]),(0,i.Lk)("div",k,[(0,i.Lk)("label",null,"外轮廓厚度 ("+(0,l.v_)(T.outlineThickness)+")",1),(0,i.bo)((0,i.Lk)("input",{type:"range","onUpdate:modelValue":e[5]||(e[5]=t=>T.outlineThickness=t),min:"1",max:"40"},null,512),[[o.Jo,T.outlineThickness,void 0,{number:!0}]])]),(0,i.Lk)("div",f,[(0,i.Lk)("label",null,"外轮廓圆角 ("+(0,l.v_)(T.outlineRound)+")",1),(0,i.bo)((0,i.Lk)("input",{type:"range","onUpdate:modelValue":e[6]||(e[6]=t=>T.outlineRound=t),min:"0",max:"30"},null,512),[[o.Jo,T.outlineRound,void 0,{number:!0}]])]),(0,i.Lk)("div",m,[(0,i.Lk)("label",null,"白色过渡层厚度 ("+(0,l.v_)(T.whiteThickness)+")",1),(0,i.bo)((0,i.Lk)("input",{type:"range","onUpdate:modelValue":e[7]||(e[7]=t=>T.whiteThickness=t),min:"1",max:"30"},null,512),[[o.Jo,T.whiteThickness,void 0,{number:!0}]])]),(0,i.Lk)("div",b,[(0,i.Lk)("label",null,"白色过渡层圆角 ("+(0,l.v_)(T.whiteRound)+")",1),(0,i.bo)((0,i.Lk)("input",{type:"range","onUpdate:modelValue":e[8]||(e[8]=t=>T.whiteRound=t),min:"0",max:"20"},null,512),[[o.Jo,T.whiteRound,void 0,{number:!0}]])]),(0,i.Lk)("div",w,[(0,i.Lk)("label",null,"字体大小 ("+(0,l.v_)(T.fontSize)+")",1),(0,i.bo)((0,i.Lk)("input",{type:"range","onUpdate:modelValue":e[9]||(e[9]=t=>T.fontSize=t),min:"50",max:"200"},null,512),[[o.Jo,T.fontSize,void 0,{number:!0}]])])]),(0,i.Lk)("div",v,[(0,i.Lk)("button",{class:"action-btn",onClick:e[10]||(e[10]=(...t)=>C.exportSettings&&C.exportSettings(...t))},"导出配置"),(0,i.Lk)("label",x,[e[14]||(e[14]=(0,i.eW)(" 导入配置 ")),(0,i.Lk)("input",{type:"file",accept:".json",onChange:e[11]||(e[11]=(...t)=>C.importSettings&&C.importSettings(...t)),style:{display:"none"}},null,32)]),(0,i.Lk)("button",{class:"action-btn",onClick:e[12]||(e[12]=(...t)=>C.exportImages&&C.exportImages(...t))},"导出图片")])]),T.isBatchMode?((0,i.uX)(),(0,i.CE)("div",g,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(C.batchLines,((t,e)=>((0,i.uX)(),(0,i.CE)("div",{key:e,class:"cloud-text-wrapper"},[(0,i.bF)(R,{text:t,outlineColor:T.outlineColor,outlineThickness:T.outlineThickness,outlineRound:T.outlineRound,whiteThickness:T.whiteThickness,whiteRound:T.whiteRound,fontSize:T.fontSize},null,8,["text","outlineColor","outlineThickness","outlineRound","whiteThickness","whiteRound","fontSize"])])))),128))])):((0,i.uX)(),(0,i.CE)("div",y,[(0,i.bF)(R,{text:T.text||"云朵字",outlineColor:T.outlineColor,outlineThickness:T.outlineThickness,outlineRound:T.outlineRound,whiteThickness:T.whiteThickness,whiteRound:T.whiteRound,fontSize:T.fontSize},null,8,["text","outlineColor","outlineThickness","outlineRound","whiteThickness","whiteRound","fontSize"])]))])])}n(8111),n(2489),n(7588),n(4603),n(7566),n(8721);const T={class:"cloud-text-container"},C=["width","height","viewBox"],R=["x","y","font-size","stroke","stroke-width","stroke-miterlimit"],S=["x","y","font-size","stroke-width","stroke-miterlimit"],z=["x","y","font-size"];function O(t,e,n,o,s,u){return(0,i.uX)(),(0,i.CE)("div",T,[((0,i.uX)(),(0,i.CE)("svg",{width:n.width,height:n.height,viewBox:`0 0 ${n.width} ${n.height}`},[(0,i.Lk)("text",{x:n.width/2,y:n.height/2,"dominant-baseline":"middle","text-anchor":"middle","font-size":n.fontSize,fill:"none",stroke:n.outlineColor,"stroke-width":n.outlineThickness,"stroke-linejoin":"round","stroke-miterlimit":n.outlineRound},(0,l.v_)(n.text),9,R),(0,i.Lk)("text",{x:n.width/2,y:n.height/2,"dominant-baseline":"middle","text-anchor":"middle","font-size":n.fontSize,fill:"none",stroke:"white","stroke-width":n.whiteThickness,"stroke-linejoin":"round","stroke-miterlimit":n.whiteRound},(0,l.v_)(n.text),9,S),(0,i.Lk)("text",{x:n.width/2,y:n.height/2,"dominant-baseline":"middle","text-anchor":"middle","font-size":n.fontSize,fill:"black"},(0,l.v_)(n.text),9,z)],8,C))])}var E={name:"CloudText",props:{text:{type:String,required:!0},width:{type:Number,default:500},height:{type:Number,default:150},fontSize:{type:Number,default:100},outlineColor:{type:String,default:"#ff6b6b"},outlineThickness:{type:Number,default:20},outlineRound:{type:Number,default:10},whiteThickness:{type:Number,default:12},whiteRound:{type:Number,default:8}}},j=n(1241);const B=(0,j.A)(E,[["render",O],["__scopeId","data-v-2a1eaac5"]]);var U=B,_=n(2125),M=n.n(_),J=n(4813),N=n.n(J),X={name:"App",components:{CloudText:U},data(){return{text:"",batchText:"",isBatchMode:!1,outlineColor:"#ff6b6b",outlineThickness:20,outlineRound:10,whiteThickness:12,whiteRound:8,fontSize:120}},computed:{batchLines(){return this.batchText.split("\n").filter((t=>t.trim()))},currentSettings(){return{outlineColor:this.outlineColor,outlineThickness:this.outlineThickness,outlineRound:this.outlineRound,whiteThickness:this.whiteThickness,whiteRound:this.whiteRound,fontSize:this.fontSize}}},methods:{async exportImages(){const t=new(N()),e=this.isBatchMode?this.batchLines:[this.text||"云朵字"],n=document.createElement("div");n.className="loading-overlay",n.innerHTML="正在导出图片...",document.body.appendChild(n);try{for(let l=0;l<e.length;l++){const o=e[l],i=document.querySelector(`.cloud-text-wrapper:nth-child(${l+1})`);n.innerHTML=`正在处理: ${o} (${l+1}/${e.length})`;const s=await M()(i,{backgroundColor:null,scale:2}),u=await new Promise((t=>s.toBlob(t,"image/png")));t.file(`${o}.png`,u)}const o=await t.generateAsync({type:"blob"}),i=document.createElement("a");i.href=URL.createObjectURL(o),i.download="云朵字.zip",i.click()}catch(o){alert("导出失败: "+o.message)}finally{document.body.removeChild(n)}},exportSettings(){const t={...this.currentSettings,batchText:this.batchText,text:this.text},e=new Blob([JSON.stringify(t,null,2)],{type:"application/json"}),n=document.createElement("a");n.href=URL.createObjectURL(e),n.download="云朵字配置.json",n.click()},importSettings(t){const e=t.target.files[0];if(!e)return;const n=new FileReader;n.onload=t=>{try{const e=JSON.parse(t.target.result);Object.keys(e).forEach((t=>{t in this&&(this[t]=e[t])}))}catch(e){alert("导入失败: "+e.message)}},n.readAsText(e)}}};const V=(0,j.A)(X,[["render",L]]);var $=V;(0,o.Ef)($).mount("#app")}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var l=e[o]={exports:{}};return t[o].call(l.exports,l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,l){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],i=t[c][1],l=t[c][2];for(var u=!0,r=0;r<o.length;r++)(!1&l||s>=l)&&Object.keys(n.O).every((function(t){return n.O[t](o[r])}))?o.splice(r--,1):(u=!1,l<s&&(s=l));if(u){t.splice(c--,1);var a=i();void 0!==a&&(e=a)}}return e}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[o,i,l]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={524:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,l,s=o[0],u=o[1],r=o[2],a=0;if(s.some((function(e){return 0!==t[e]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(r)var c=r(n)}for(e&&e(o);a<s.length;a++)l=s[a],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(c)},o=self["webpackChunkyunduofont"]=self["webpackChunkyunduofont"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3112)}));o=n.O(o)})();
//# sourceMappingURL=app.cbe33cdb.js.map