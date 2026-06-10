import{p as rt}from"./chunk-VII2H2IX.C8x5btg1.js";import{p as nt}from"./cynefin-EIGLE6ZI-KXGT24XR.CN7XXVok.js";import{R as T,J as G,bc as it,g as ot,s as st,a as lt,b as ct,o as ut,n as gt,_ as d,l as B,c as dt,C as pt,F as ht,a0 as ft,e as mt,p as vt,D as xt}from"./render-OOOTZZF4.CqM0zvJ_.js";import{d as q}from"./arc.BEGqFYih.js";import{o as St}from"./ordinal.BYWQX77i.js";import"./theme.U3tqEpDw.js";import"./framework.CJaX6y8V.js";import"./init.Gi6I4Gst.js";function yt(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function wt(t){return t}function At(){var t=wt,n=yt,y=null,b=T(0),l=T(G),p=T(0);function i(e){var r,s=(e=it(e)).length,h,w,D=0,f=new Array(s),o=new Array(s),$=+b.apply(this,arguments),E=Math.min(G,Math.max(-G,l.apply(this,arguments)-$)),k,F=Math.min(Math.abs(E)/s,p.apply(this,arguments)),u=F*(E<0?-1:1),A;for(r=0;r<s;++r)(A=o[f[r]=r]=+t(e[r],r,e))>0&&(D+=A);for(n!=null?f.sort(function(M,m){return n(o[M],o[m])}):y!=null&&f.sort(function(M,m){return y(e[M],e[m])}),r=0,w=D?(E-s*u)/D:0;r<s;++r,$=k)h=f[r],A=o[h],k=$+(A>0?A*w:0)+u,o[h]={data:e[h],index:r,value:A,startAngle:$,endAngle:k,padAngle:F};return o}return i.value=function(e){return arguments.length?(t=typeof e=="function"?e:T(+e),i):t},i.sortValues=function(e){return arguments.length?(n=e,y=null,i):n},i.sort=function(e){return arguments.length?(y=e,n=null,i):y},i.startAngle=function(e){return arguments.length?(b=typeof e=="function"?e:T(+e),i):b},i.endAngle=function(e){return arguments.length?(l=typeof e=="function"?e:T(+e),i):l},i.padAngle=function(e){return arguments.length?(p=typeof e=="function"?e:T(+e),i):p},i}var Ct=xt.pie,I={sections:new Map,showData:!1},_=I.sections,V=I.showData,Dt=structuredClone(Ct),$t=d(()=>structuredClone(Dt),"getConfig"),Tt=d(()=>{_=new Map,V=I.showData,vt()},"clear"),bt=d(({label:t,value:n})=>{if(n<0)throw new Error(`"${t}" has invalid value: ${n}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);_.has(t)||(_.set(t,n),B.debug(`added new section: ${t}, with value: ${n}`))},"addSection"),kt=d(()=>_,"getSections"),zt=d(t=>{V=t},"setShowData"),Et=d(()=>V,"getShowData"),K={getConfig:$t,clear:Tt,setDiagramTitle:gt,getDiagramTitle:ut,setAccTitle:ct,getAccTitle:lt,setAccDescription:st,getAccDescription:ot,addSection:bt,getSections:kt,setShowData:zt,getShowData:Et},Mt=d((t,n)=>{rt(t,n),n.setShowData(t.showData),t.sections.map(n.addSection)},"populateDb"),Rt={parse:d(async t=>{const n=await nt("pie",t);B.debug(n),Mt(n,K)},"parse")},Ft=d(t=>`
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
`,"getStyles"),Lt=Ft,Wt=d(t=>{const n=[...t.values()].reduce((l,p)=>l+p,0),y=[...t.entries()].map(([l,p])=>({label:l,value:p})).filter(l=>l.value/n*100>=1);return At().value(l=>l.value).sort(null)(y)},"createPieArcs"),_t=d((t,n,y,b)=>{var Z;B.debug(`rendering pie chart
`+t);const l=b.db,p=dt(),i=pt(l.getConfig(),p.pie),e=40,r=18,s=4,h=450,w=h,D=ht(n),f=D.append("g");f.attr("transform","translate("+w/2+","+h/2+")");const{themeVariables:o}=p;let[$]=ft(o.pieOuterStrokeWidth);$??($=2);const E=i.legendPosition,k=i.textPosition,F=i.donutHole>0&&i.donutHole<=.9?i.donutHole:0,u=Math.min(w,h)/2-e,A=q().innerRadius(F*u).outerRadius(u),M=q().innerRadius(u*k).outerRadius(u*k),m=f.append("g");m.append("circle").attr("cx",0).attr("cy",0).attr("r",u+$/2).attr("class","pieOuterCircle");const L=l.getSections(),Q=Wt(L),Y=[o.pie1,o.pie2,o.pie3,o.pie4,o.pie5,o.pie6,o.pie7,o.pie8,o.pie9,o.pie10,o.pie11,o.pie12];let H=0;L.forEach(a=>{H+=a});const U=Q.filter(a=>(a.data.value/H*100).toFixed(0)!=="0"),N=St(Y).domain([...L.keys()]);m.selectAll("mySlices").data(U).enter().append("path").attr("d",A).attr("fill",a=>N(a.data.label)).attr("class",a=>{let c="pieCircle";return i.highlightSlice==="hover"?c+=" highlightedOnHover":i.highlightSlice===a.data.label&&(c+=" highlighted"),c}),m.selectAll("mySlices").data(U).enter().append("text").text(a=>(a.data.value/H*100).toFixed(0)+"%").attr("transform",a=>"translate("+M.centroid(a)+")").style("text-anchor","middle").attr("class","slice");const tt=f.append("text").text(l.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),R=[...L.entries()].map(([a,c])=>({label:a,value:c})),C=f.selectAll(".legend").data(R).enter().append("g").attr("class","legend");C.append("rect").attr("width",r).attr("height",r).style("fill",a=>N(a.label)).style("stroke",a=>N(a.label)),C.append("text").attr("x",r+s).attr("y",r-s).text(a=>l.getShowData()?`${a.label} [${a.value}]`:a.label);const z=Math.max(...C.selectAll("text").nodes().map(a=>(a==null?void 0:a.getBoundingClientRect().width)??0));let W=h,O=w+e;const g=r+s,P=R.length*g;switch(E){case"center":C.attr("transform",(a,c)=>{const v=g*R.length/2,x=-z/2-(r+s),S=c*g-v;return"translate("+x+","+S+")"});break;case"top":W+=P,C.attr("transform",(a,c)=>{const v=u,x=-z/2-(r+s),S=c*g-v;return`translate(${x}, ${S})`}),m.attr("transform",()=>`translate(0, ${P+g})`);break;case"bottom":W+=P,C.attr("transform",(a,c)=>{const v=-u-g,x=-z/2-(r+s),S=c*g-v;return"translate("+x+","+S+")"});break;case"left":O+=r+s+z,C.attr("transform",(a,c)=>{const v=g*R.length/2,x=-u-(r+s),S=c*g-v;return"translate("+x+","+S+")"}),m.attr("transform",()=>`translate(${z+r+s}, 0)`);break;case"right":default:O+=r+s+z,C.attr("transform",(a,c)=>{const v=g*R.length/2,x=12*r,S=c*g-v;return"translate("+x+","+S+")"});break}const j=((Z=tt.node())==null?void 0:Z.getBoundingClientRect().width)??0,et=w/2-j/2,at=w/2+j/2,J=Math.min(0,et),X=Math.max(O,at)-J;D.attr("viewBox",`${J} 0 ${X} ${W}`),mt(D,W,X,i.useMaxWidth)},"draw"),Ht={draw:_t},Jt={parser:Rt,db:K,renderer:Ht,styles:Lt};export{Jt as diagram};
