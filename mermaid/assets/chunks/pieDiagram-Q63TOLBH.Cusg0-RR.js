import{c as te}from"./chunk-JQRUD6KW.Babgxi90.js";import{l as ae}from"./cynefin-X2GWOJJD-L7T5NGF2.rxA2opKQ.js";import{o as le,r as re,i as ie,t as se,s as oe,d as ne,m as o,p as R,a as de,L as pe,a2 as ce,a3 as he,a4 as I,a5 as ge,Z as ue,g as me,a6 as fe,u as xe}from"./theme.Bn0ehjIb.js";import"./framework.rPTiEnN9.js";var we=xe.pie,z={sections:new Map,showData:!1},T=z.sections,H=z.showData,$e=structuredClone(we),ve=o(()=>structuredClone($e),"getConfig"),Se=o(()=>{T=new Map,H=z.showData,me()},"clear"),be=o(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(e)||(T.set(e,a),R.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ye=o(()=>T,"getSections"),Ce=o(e=>{H=e},"setShowData"),Te=o(()=>H,"getShowData"),Q={getConfig:ve,clear:Se,setDiagramTitle:ne,getDiagramTitle:oe,setAccTitle:se,getAccTitle:ie,setAccDescription:re,getAccDescription:le,addSection:be,getSections:ye,setShowData:Ce,getShowData:Te},ke=o((e,a)=>{te(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),De={parse:o(async e=>{let a=await ae("pie",e);R.debug(a),ke(a,Q)},"parse")},Ae=o(e=>`
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
`+e);let g=d.db,F=de(),u=pe(g.getConfig(),F.pie),L=40,r=18,n=4,S=450,w=S,k=ce(a),b=k.append("g");b.attr("transform","translate("+w/2+","+S/2+")");let{themeVariables:i}=F,[P]=he(i.pieOuterStrokeWidth);P??(P=2);let V=u.legendPosition,W=u.textPosition,_=u.donutHole>0&&u.donutHole<=.9?u.donutHole:0,m=Math.min(w,S)/2-L,q=I().innerRadius(_*m).outerRadius(m),J=I().innerRadius(m*W).outerRadius(m*W),$=b.append("g");$.append("circle").attr("cx",0).attr("cy",0).attr("r",m+P/2).attr("class","pieOuterCircle");let y=g.getSections(),K=Oe(y),U=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],D=0;y.forEach(t=>{D+=t});let E=K.filter(t=>(t.data.value/D*100).toFixed(0)!=="0"),A=ge(U).domain([...y.keys()]);$.selectAll("mySlices").data(E).enter().append("path").attr("d",q).attr("fill",t=>A(t.data.label)).attr("class",t=>{let l="pieCircle";return u.highlightSlice==="hover"?l+=" highlightedOnHover":u.highlightSlice===t.data.label&&(l+=" highlighted"),l}),$.selectAll("mySlices").data(E).enter().append("text").text(t=>(t.data.value/D*100).toFixed(0)+"%").attr("transform",t=>"translate("+J.centroid(t)+")").style("text-anchor","middle").attr("class","slice");let X=b.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),v=[...y.entries()].map(([t,l])=>({label:t,value:l})),f=b.selectAll(".legend").data(v).enter().append("g").attr("class","legend");f.append("rect").attr("width",r).attr("height",r).style("fill",t=>A(t.label)).style("stroke",t=>A(t.label)),f.append("text").attr("x",r+n).attr("y",r-n).text(t=>g.getShowData()?`${t.label} [${t.value}]`:t.label);let x=Math.max(...f.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),C=S,M=w+L,s=r+n,O=v.length*s;switch(V){case"center":f.attr("transform",(t,l)=>{let p=s*v.length/2,c=-x/2-(r+n),h=l*s-p;return"translate("+c+","+h+")"});break;case"top":C+=O,f.attr("transform",(t,l)=>{let p=m,c=-x/2-(r+n),h=l*s-p;return`translate(${c}, ${h})`}),$.attr("transform",()=>`translate(0, ${O+s})`);break;case"bottom":C+=O,f.attr("transform",(t,l)=>{let p=-m-s,c=-x/2-(r+n),h=l*s-p;return"translate("+c+","+h+")"});break;case"left":M+=r+n+x,f.attr("transform",(t,l)=>{let p=s*v.length/2,c=-m-(r+n),h=l*s-p;return"translate("+c+","+h+")"}),$.attr("transform",()=>`translate(${x+r+n}, 0)`);break;case"right":default:M+=r+n+x,f.attr("transform",(t,l)=>{let p=s*v.length/2,c=12*r,h=l*s-p;return"translate("+c+","+h+")"});break}let N=((G=X.node())==null?void 0:G.getBoundingClientRect().width)??0,Y=w/2-N/2,ee=w/2+N/2,Z=Math.min(0,Y),j=Math.max(M,ee)-Z;k.attr("viewBox",`${Z} 0 ${j} ${C}`),ue(k,C,j,u.useMaxWidth)},"draw"),ze={draw:Re},Pe={parser:De,db:Q,renderer:ze,styles:Me};export{Pe as diagram};
