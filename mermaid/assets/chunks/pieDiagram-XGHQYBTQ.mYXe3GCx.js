import{c as te}from"./chunk-JQRUD6KW.DPqsFGJr.js";import{l as ae}from"./cynefin-PEJ4AFAU-FYLSHQGL.CvY_0ggx.js";import{n as re,h as ie,a as le,l as se,j as ne,g as oe,m as n,p as R,M as de,L as pe,a2 as ce,a3 as he,a4 as V,a5 as ge,o as ue,s as me,a6 as fe,x as xe}from"./theme.hjScv47W.js";import"./framework.rPTiEnN9.js";var we=xe.pie,z={sections:new Map,showData:!1},k=z.sections,H=z.showData,$e=structuredClone(we),ve=n(()=>structuredClone($e),"getConfig"),Se=n(()=>{k=new Map,H=z.showData,me()},"clear"),be=n(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);k.has(e)||(k.set(e,a),R.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ye=n(()=>k,"getSections"),Ce=n(e=>{H=e},"setShowData"),ke=n(()=>H,"getShowData"),_={getConfig:ve,clear:Se,setDiagramTitle:oe,getDiagramTitle:ne,setAccTitle:se,getAccTitle:le,setAccDescription:ie,getAccDescription:re,addSection:be,getSections:ye,setShowData:Ce,getShowData:ke},De=n((e,a)=>{te(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),Te={parse:n(async e=>{let a=await ae("pie",e);R.debug(a),De(a,_)},"parse")},Ae=n(e=>`
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
`,"getStyles"),Me=Ae,Oe=n(e=>{let a=[...e.values()].reduce((d,g)=>d+g,0),B=[...e.entries()].map(([d,g])=>({label:d,value:g})).filter(d=>d.value/a*100>=1);return fe().value(d=>d.value).sort(null)(B)},"createPieArcs"),Re=n((e,a,B,d)=>{var I;R.debug(`rendering pie chart
`+e);let g=d.db,F=de(),u=pe(g.getConfig(),F.pie),L=40,i=18,o=4,S=450,w=S,D=ce(a),b=D.append("g");b.attr("transform","translate("+w/2+","+S/2+")");let{themeVariables:l}=F,[P]=he(l.pieOuterStrokeWidth);P??(P=2);let q=u.legendPosition,W=u.textPosition,J=u.donutHole>0&&u.donutHole<=.9?u.donutHole:0,m=Math.min(w,S)/2-L,K=V().innerRadius(J*m).outerRadius(m),Q=V().innerRadius(m*W).outerRadius(m*W),$=b.append("g");$.append("circle").attr("cx",0).attr("cy",0).attr("r",m+P/2).attr("class","pieOuterCircle");let y=g.getSections(),U=Oe(y),X=[l.pie1,l.pie2,l.pie3,l.pie4,l.pie5,l.pie6,l.pie7,l.pie8,l.pie9,l.pie10,l.pie11,l.pie12],T=0;y.forEach(t=>{T+=t});let E=U.filter(t=>(t.data.value/T*100).toFixed(0)!=="0"),A=ge(X).domain([...y.keys()]);$.selectAll("mySlices").data(E).enter().append("path").attr("d",K).attr("fill",t=>A(t.data.label)).attr("class",t=>{let r="pieCircle";return u.highlightSlice==="hover"?r+=" highlightedOnHover":u.highlightSlice===t.data.label&&(r+=" highlighted"),r}),$.selectAll("mySlices").data(E).enter().append("text").text(t=>(t.data.value/T*100).toFixed(0)+"%").attr("transform",t=>"translate("+Q.centroid(t)+")").style("text-anchor","middle").attr("class","slice");let Y=b.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),v=[...y.entries()].map(([t,r])=>({label:t,value:r})),f=b.selectAll(".legend").data(v).enter().append("g").attr("class","legend");f.append("rect").attr("width",i).attr("height",i).style("fill",t=>A(t.label)).style("stroke",t=>A(t.label)),f.append("text").attr("x",i+o).attr("y",i-o).text(t=>g.getShowData()?`${t.label} [${t.value}]`:t.label);let x=Math.max(...f.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),C=S,M=w+L,s=i+o,O=v.length*s;switch(q){case"center":f.attr("transform",(t,r)=>{let p=s*v.length/2,c=-x/2-(i+o),h=r*s-p;return"translate("+c+","+h+")"});break;case"top":C+=O,f.attr("transform",(t,r)=>{let p=m,c=-x/2-(i+o),h=r*s-p;return`translate(${c}, ${h})`}),$.attr("transform",()=>`translate(0, ${O+s})`);break;case"bottom":C+=O,f.attr("transform",(t,r)=>{let p=-m-s,c=-x/2-(i+o),h=r*s-p;return"translate("+c+","+h+")"});break;case"left":M+=i+o+x,f.attr("transform",(t,r)=>{let p=s*v.length/2,c=-m-(i+o),h=r*s-p;return"translate("+c+","+h+")"}),$.attr("transform",()=>`translate(${x+i+o}, 0)`);break;case"right":default:M+=i+o+x,f.attr("transform",(t,r)=>{let p=s*v.length/2,c=12*i,h=r*s-p;return"translate("+c+","+h+")"});break}let j=((I=Y.node())==null?void 0:I.getBoundingClientRect().width)??0,Z=w/2-j/2,ee=w/2+j/2,N=Math.min(0,Z),G=Math.max(M,ee)-N;D.attr("viewBox",`${N} 0 ${G} ${C}`),ue(D,C,G,u.useMaxWidth)},"draw"),ze={draw:Re},Pe={parser:Te,db:_,renderer:ze,styles:Me};export{Pe as diagram};
