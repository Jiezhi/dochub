import{p as rt}from"./chunk-VII2H2IX.DeytsjAd.js";import{p as nt}from"./cynefin-OW5HDTMX-GVF3BKWE.DYriiU7l.js";import{T,L as G,bc as it,g as ot,s as st,a as lt,b as ct,q as ut,p as gt,_ as d,l as B,c as dt,E as pt,H as ht,a2 as ft,d as mt,t as vt,F as xt}from"./render-EV5K7ZYE.DYtpIH0N.js";import{d as J}from"./arc.B9USdz9x.js";import{o as St}from"./ordinal.BYWQX77i.js";import"./theme.B1i6uMKH.js";import"./framework.DB1tY2mn.js";import"./init.Gi6I4Gst.js";function yt(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function wt(t){return t}function At(){var t=wt,n=yt,y=null,b=T(0),l=T(G),p=T(0);function i(e){var r,s=(e=it(e)).length,h,w,$=0,f=new Array(s),o=new Array(s),D=+b.apply(this,arguments),z=Math.min(G,Math.max(-G,l.apply(this,arguments)-D)),k,R=Math.min(Math.abs(z)/s,p.apply(this,arguments)),u=R*(z<0?-1:1),A;for(r=0;r<s;++r)(A=o[f[r]=r]=+t(e[r],r,e))>0&&($+=A);for(n!=null?f.sort(function(M,m){return n(o[M],o[m])}):y!=null&&f.sort(function(M,m){return y(e[M],e[m])}),r=0,w=$?(z-s*u)/$:0;r<s;++r,D=k)h=f[r],A=o[h],k=D+(A>0?A*w:0)+u,o[h]={data:e[h],index:r,value:A,startAngle:D,endAngle:k,padAngle:R};return o}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:T(+e),i):t},i.sortValues=function(e){return arguments.length?(n=e,y=null,i):n},i.sort=function(e){return arguments.length?(y=e,n=null,i):y},i.startAngle=function(e){return arguments.length?(b=typeof e=="function"?e:T(+e),i):b},i.endAngle=function(e){return arguments.length?(l=typeof e=="function"?e:T(+e),i):l},i.padAngle=function(e){return arguments.length?(p=typeof e=="function"?e:T(+e),i):p},i}var Ct=xt.pie,I={sections:new Map,showData:!1},W=I.sections,V=I.showData,$t=structuredClone(Ct),Dt=d(()=>structuredClone($t),"getConfig"),Tt=d(()=>{W=new Map,V=I.showData,vt()},"clear"),bt=d(({label:t,value:n})=>{if(n<0)throw new Error(`"${t}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);W.has(t)||(W.set(t,n),B.debug(`added new section: ${t}, with value: ${n}`))},"addSection"),kt=d(()=>W,"getSections"),Et=d(t=>{V=t},"setShowData"),zt=d(()=>V,"getShowData"),K={getConfig:Dt,clear:Tt,setDiagramTitle:gt,getDiagramTitle:ut,setAccTitle:ct,getAccTitle:lt,setAccDescription:st,getAccDescription:ot,addSection:bt,getSections:kt,setShowData:Et,getShowData:zt},Mt=d((t,n)=>{rt(t,n),n.setShowData(t.showData),t.sections.map(n.addSection)},"populateDb"),Lt={parse:d(async t=>{const n=await nt("pie",t);B.debug(n),Mt(n,K)},"parse")},Rt=d(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieCircle.highlighted{
    scale: 1.05;
    opacity: 1;
  }
  .pieCircle.highlightedOnHover:hover{
    transition-duration: 250ms;
    scale: 1.05;
    opacity: 1;
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),Ft=Rt,Ht=d(t=>{const n=[...t.values()].reduce((l,p)=>l+p,0),y=[...t.entries()].map(([l,p])=>({label:l,value:p})).filter(l=>l.value/n*100>=1);return At().value(l=>l.value).sort(null)(y)},"createPieArcs"),Wt=d((t,n,y,b)=>{var Z;B.debug(`rendering pie chart
`+t);const l=b.db,p=dt(),i=pt(l.getConfig(),p.pie),e=40,r=18,s=4,h=450,w=h,$=ht(n),f=$.append("g");f.attr("transform","translate("+w/2+","+h/2+")");const{themeVariables:o}=p;let[D]=ft(o.pieOuterStrokeWidth);D??(D=2);const z=i.legendPosition,k=i.textPosition,R=i.donutHole>0&&i.donutHole<=.9?i.donutHole:0,u=Math.min(w,h)/2-e,A=J().innerRadius(R*u).outerRadius(u),M=J().innerRadius(u*k).outerRadius(u*k),m=f.append("g");m.append("circle").attr("cx",0).attr("cy",0).attr("r",u+D/2).attr("class","pieOuterCircle");const F=l.getSections(),Q=Ht(F),Y=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let _=0;F.forEach(a=>{_+=a});const U=Q.filter(a=>(a.data.value/_*100).toFixed(0)!=="0"),N=St(Y).domain([...F.keys()]);m.selectAll("mySlices").data(U).enter().append("path").attr("d",A).attr("fill",a=>N(a.data.label)).attr("class",a=>{let c="pieCircle";return i.highlightSlice==="hover"?c+=" highlightedOnHover":i.highlightSlice===a.data.label&&(c+=" highlighted"),c}),m.selectAll("mySlices").data(U).enter().append("text").text(a=>(a.data.value/_*100).toFixed(0)+"%").attr("transform",a=>"translate("+M.centroid(a)+")").style("text-anchor","middle").attr("class","slice");const tt=f.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),L=[...F.entries()].map(([a,c])=>({label:a,value:c})),C=f.selectAll(".legend").data(L).enter().append("g").attr("class","legend");C.append("rect").attr("width",r).attr("height",r).style("fill",a=>N(a.label)).style("stroke",a=>N(a.label)),C.append("text").attr("x",r+s).attr("y",r-s).text(a=>l.getShowData()?`${a.label} [${a.value}]`:a.label);const E=Math.max(...C.selectAll("text").nodes().map(a=>(a==null?void 0:a.getBoundingClientRect().width)??0));let H=h,O=w+e;const g=r+s,P=L.length*g;switch(z){case"center":C.attr("transform",(a,c)=>{const v=g*L.length/2,x=-E/2-(r+s),S=c*g-v;return"translate("+x+","+S+")"});break;case"top":H+=P,C.attr("transform",(a,c)=>{const v=u,x=-E/2-(r+s),S=c*g-v;return`translate(${x}, ${S})`}),m.attr("transform",()=>`translate(0, ${P+g})`);break;case"bottom":H+=P,C.attr("transform",(a,c)=>{const v=-u-g,x=-E/2-(r+s),S=c*g-v;return"translate("+x+","+S+")"});break;case"left":O+=r+s+E,C.attr("transform",(a,c)=>{const v=g*L.length/2,x=-u-(r+s),S=c*g-v;return"translate("+x+","+S+")"}),m.attr("transform",()=>`translate(${E+r+s}, 0)`);break;case"right":default:O+=r+s+E,C.attr("transform",(a,c)=>{const v=g*L.length/2,x=12*r,S=c*g-v;return"translate("+x+","+S+")"});break}const j=((Z=tt.node())==null?void 0:Z.getBoundingClientRect().width)??0,et=w/2-j/2,at=w/2+j/2,q=Math.min(0,et),X=Math.max(O,at)-q;$.attr("viewBox",`${q} 0 ${X} ${H}`),mt($,H,X,i.useMaxWidth)},"draw"),_t={draw:Wt},qt={parser:Lt,db:K,renderer:_t,styles:Ft};export{qt as diagram};
