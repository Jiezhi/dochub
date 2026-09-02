import{c as te}from"./chunk-JQRUD6KW.BifA52qn.js";import{l as ae}from"./cynefin-OW5HDTMX-6OCTWOGG.DW1qYGr0.js";import{s as le,e as re,o as ie,r as se,n as ne,k as oe,m as n,p as R,i as de,L as pe,aa as ce,ab as he,ac as I,ad as ge,Q as ue,x as me,ae as fe,B as xe}from"./theme.Cs4GdVpL.js";import"./framework.DB1tY2mn.js";var we=xe.pie,z={sections:new Map,showData:!1},C=z.sections,H=z.showData,$e=structuredClone(we),ve=n(()=>structuredClone($e),"getConfig"),Se=n(()=>{C=new Map,H=z.showData,me()},"clear"),be=n(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);C.has(e)||(C.set(e,a),R.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ye=n(()=>C,"getSections"),ke=n(e=>{H=e},"setShowData"),Ce=n(()=>H,"getShowData"),V={getConfig:ve,clear:Se,setDiagramTitle:oe,getDiagramTitle:ne,setAccTitle:se,getAccTitle:ie,setAccDescription:re,getAccDescription:le,addSection:be,getSections:ye,setShowData:ke,getShowData:Ce},Te=n((e,a)=>{te(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),De={parse:n(async e=>{let a=await ae("pie",e);R.debug(a),Te(a,V)},"parse")},Ae=n(e=>`
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
`,"getStyles"),Me=Ae,Oe=n(e=>{let a=[...e.values()].reduce((d,g)=>d+g,0),B=[...e.entries()].map(([d,g])=>({label:d,value:g})).filter(d=>d.value/a*100>=1);return fe().value(d=>d.value).sort(null)(B)},"createPieArcs"),Re=n((e,a,B,d)=>{var G;R.debug(`rendering pie chart
`+e);let g=d.db,F=de(),u=pe(g.getConfig(),F.pie),L=40,r=18,o=4,S=450,w=S,T=ce(a),b=T.append("g");b.attr("transform","translate("+w/2+","+S/2+")");let{themeVariables:i}=F,[P]=he(i.pieOuterStrokeWidth);P??(P=2);let _=u.legendPosition,W=u.textPosition,q=u.donutHole>0&&u.donutHole<=.9?u.donutHole:0,m=Math.min(w,S)/2-L,J=I().innerRadius(q*m).outerRadius(m),K=I().innerRadius(m*W).outerRadius(m*W),$=b.append("g");$.append("circle").attr("cx",0).attr("cy",0).attr("r",m+P/2).attr("class","pieOuterCircle");let y=g.getSections(),U=Oe(y),X=[i.pie1,i.pie2,i.pie3,i.pie4,i.pie5,i.pie6,i.pie7,i.pie8,i.pie9,i.pie10,i.pie11,i.pie12],D=0;y.forEach(t=>{D+=t});let E=U.filter(t=>(t.data.value/D*100).toFixed(0)!=="0"),A=ge(X).domain([...y.keys()]);$.selectAll("mySlices").data(E).enter().append("path").attr("d",J).attr("fill",t=>A(t.data.label)).attr("class",t=>{let l="pieCircle";return u.highlightSlice==="hover"?l+=" highlightedOnHover":u.highlightSlice===t.data.label&&(l+=" highlighted"),l}),$.selectAll("mySlices").data(E).enter().append("text").text(t=>(t.data.value/D*100).toFixed(0)+"%").attr("transform",t=>"translate("+K.centroid(t)+")").style("text-anchor","middle").attr("class","slice");let Y=b.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),v=[...y.entries()].map(([t,l])=>({label:t,value:l})),f=b.selectAll(".legend").data(v).enter().append("g").attr("class","legend");f.append("rect").attr("width",r).attr("height",r).style("fill",t=>A(t.label)).style("stroke",t=>A(t.label)),f.append("text").attr("x",r+o).attr("y",r-o).text(t=>g.getShowData()?`${t.label} [${t.value}]`:t.label);let x=Math.max(...f.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),k=S,M=w+L,s=r+o,O=v.length*s;switch(_){case"center":f.attr("transform",(t,l)=>{let p=s*v.length/2,c=-x/2-(r+o),h=l*s-p;return"translate("+c+","+h+")"});break;case"top":k+=O,f.attr("transform",(t,l)=>{let p=m,c=-x/2-(r+o),h=l*s-p;return`translate(${c}, ${h})`}),$.attr("transform",()=>`translate(0, ${O+s})`);break;case"bottom":k+=O,f.attr("transform",(t,l)=>{let p=-m-s,c=-x/2-(r+o),h=l*s-p;return"translate("+c+","+h+")"});break;case"left":M+=r+o+x,f.attr("transform",(t,l)=>{let p=s*v.length/2,c=-m-(r+o),h=l*s-p;return"translate("+c+","+h+")"}),$.attr("transform",()=>`translate(${x+r+o}, 0)`);break;case"right":default:M+=r+o+x,f.attr("transform",(t,l)=>{let p=s*v.length/2,c=12*r,h=l*s-p;return"translate("+c+","+h+")"});break}let N=((G=Y.node())==null?void 0:G.getBoundingClientRect().width)??0,Z=w/2-N/2,ee=w/2+N/2,Q=Math.min(0,Z),j=Math.max(M,ee)-Q;T.attr("viewBox",`${Q} 0 ${j} ${k}`),ue(T,k,j,u.useMaxWidth)},"draw"),ze={draw:Re},Pe={parser:De,db:V,renderer:ze,styles:Me};export{Pe as diagram};
