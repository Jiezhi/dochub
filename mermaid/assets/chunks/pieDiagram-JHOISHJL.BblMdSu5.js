import{c as te}from"./chunk-JQRUD6KW.x7SUgZEG.js";import{l as ae}from"./cynefin-OW5HDTMX-6OCTWOGG.CaYRoJGX.js";import{e as le,o as re,r as ie,i as se,k as oe,s as ne,m as o,p as R,a as de,L as pe,aa as ce,ab as he,ac as I,ad as ge,J as ue,w as me,ae as fe,C as we}from"./theme.QD1JnamE.js";import"./framework.DB1tY2mn.js";var xe=we.pie,z={sections:new Map,showData:!1},k=z.sections,H=z.showData,$e=structuredClone(xe),ve=o(()=>structuredClone($e),"getConfig"),Se=o(()=>{k=new Map,H=z.showData,me()},"clear"),be=o(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);k.has(e)||(k.set(e,a),R.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ye=o(()=>k,"getSections"),Ce=o(e=>{H=e},"setShowData"),ke=o(()=>H,"getShowData"),V={getConfig:ve,clear:Se,setDiagramTitle:ne,getDiagramTitle:oe,setAccTitle:se,getAccTitle:ie,setAccDescription:re,getAccDescription:le,addSection:be,getSections:ye,setShowData:Ce,getShowData:ke},Te=o((e,a)=>{te(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),De={parse:o(async e=>{let a=await ae("pie",e);R.debug(a),Te(a,V)},"parse")},Ae=o(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
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
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),Me=Ae,Oe=o(e=>{let a=[...e.values()].reduce((d,g)=>d+g,0),B=[...e.entries()].map(([d,g])=>({label:d,value:g})).filter(d=>d.value/a*100>=1);return fe().value(d=>d.value).sort(null)(B)},"createPieArcs"),Re=o((e,a,B,d)=>{var G;R.debug(`rendering pie chart
`+e);let g=d.db,F=de(),u=pe(g.getConfig(),F.pie),L=40,r=18,n=4,S=450,x=S,T=ce(a),b=T.append("g");b.attr("transform","translate("+x/2+","+S/2+")");let{themeVariables:i}=F,[P]=he(i.pieOuterStrokeWidth);P??(P=2);let _=u.legendPosition,W=u.textPosition,q=u.donutHole>0&&u.donutHole<=.9?u.donutHole:0,m=Math.min(x,S)/2-L,K=I().innerRadius(q*m).outerRadius(m),Q=I().innerRadius(m*W).outerRadius(m*W),$=b.append("g");$.append("circle").attr("cx",0).attr("cy",0).attr("r",m+P/2).attr("class","pieOuterCircle");let y=g.getSections(),U=Oe(y),X=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],D=0;y.forEach(t=>{D+=t});let E=U.filter(t=>(t.data.value/D*100).toFixed(0)!=="0"),A=ge(X).domain([...y.keys()]);$.selectAll("mySlices").data(E).enter().append("path").attr("d",K).attr("fill",t=>A(t.data.label)).attr("class",t=>{let l="pieCircle";return u.highlightSlice==="hover"?l+=" highlightedOnHover":u.highlightSlice===t.data.label&&(l+=" highlighted"),l}),$.selectAll("mySlices").data(E).enter().append("text").text(t=>(t.data.value/D*100).toFixed(0)+"%").attr("transform",t=>"translate("+Q.centroid(t)+")").style("text-anchor","middle").attr("class","slice");let Y=b.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),v=[...y.entries()].map(([t,l])=>({label:t,value:l})),f=b.selectAll(".legend").data(v).enter().append("g").attr("class","legend");f.append("rect").attr("width",r).attr("height",r).style("fill",t=>A(t.label)).style("stroke",t=>A(t.label)),f.append("text").attr("x",r+n).attr("y",r-n).text(t=>g.getShowData()?`${t.label} [${t.value}]`:t.label);let w=Math.max(...f.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),C=S,M=x+L,s=r+n,O=v.length*s;switch(_){case"center":f.attr("transform",(t,l)=>{let p=s*v.length/2,c=-w/2-(r+n),h=l*s-p;return"translate("+c+","+h+")"});break;case"top":C+=O,f.attr("transform",(t,l)=>{let p=m,c=-w/2-(r+n),h=l*s-p;return`translate(${c}, ${h})`}),$.attr("transform",()=>`translate(0, ${O+s})`);break;case"bottom":C+=O,f.attr("transform",(t,l)=>{let p=-m-s,c=-w/2-(r+n),h=l*s-p;return"translate("+c+","+h+")"});break;case"left":M+=r+n+w,f.attr("transform",(t,l)=>{let p=s*v.length/2,c=-m-(r+n),h=l*s-p;return"translate("+c+","+h+")"}),$.attr("transform",()=>`translate(${w+r+n}, 0)`);break;case"right":default:M+=r+n+w,f.attr("transform",(t,l)=>{let p=s*v.length/2,c=12*r,h=l*s-p;return"translate("+c+","+h+")"});break}let J=((G=Y.node())==null?void 0:G.getBoundingClientRect().width)??0,Z=x/2-J/2,ee=x/2+J/2,N=Math.min(0,Z),j=Math.max(M,ee)-N;T.attr("viewBox",`${N} 0 ${j} ${C}`),ue(T,C,j,u.useMaxWidth)},"draw"),ze={draw:Re},Pe={parser:De,db:V,renderer:ze,styles:Me};export{Pe as diagram};
