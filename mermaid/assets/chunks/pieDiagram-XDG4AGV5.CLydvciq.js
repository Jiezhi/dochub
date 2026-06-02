import{c as te}from"./chunk-JQRUD6KW.BUCF-Pzn.js";import{l as ae}from"./cynefin-EIGLE6ZI-MFK5LBQL.OvPL09QJ.js";import{a as re,l as ie,s as le,e as se,q as oe,o as ne,m as o,p as R,M as de,L as pe,a8 as ce,a9 as he,aa as I,ab as ge,b as ue,t as me,ac as fe,E as xe}from"./theme.DGqaOybk.js";import"./framework.CJaX6y8V.js";var we=xe.pie,z={sections:new Map,showData:!1},k=z.sections,H=z.showData,$e=structuredClone(we),ve=o(()=>structuredClone($e),"getConfig"),Se=o(()=>{k=new Map,H=z.showData,me()},"clear"),be=o(({label:e,value:a})=>{if(a<0)throw new Error(`"${e}" has invalid value: ${a}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);k.has(e)||(k.set(e,a),R.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ye=o(()=>k,"getSections"),Ce=o(e=>{H=e},"setShowData"),ke=o(()=>H,"getShowData"),V={getConfig:ve,clear:Se,setDiagramTitle:ne,getDiagramTitle:oe,setAccTitle:se,getAccTitle:le,setAccDescription:ie,getAccDescription:re,addSection:be,getSections:ye,setShowData:Ce,getShowData:ke},De=o((e,a)=>{te(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),Te={parse:o(async e=>{let a=await ae("pie",e);R.debug(a),De(a,V)},"parse")},Ae=o(e=>`
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
`+e);let g=d.db,E=de(),u=pe(g.getConfig(),E.pie),F=40,i=18,n=4,S=450,w=S,D=ce(a),b=D.append("g");b.attr("transform","translate("+w/2+","+S/2+")");let{themeVariables:l}=E,[L]=he(l.pieOuterStrokeWidth);L??(L=2);let _=u.legendPosition,P=u.textPosition,J=u.donutHole>0&&u.donutHole<=.9?u.donutHole:0,m=Math.min(w,S)/2-F,K=I().innerRadius(J*m).outerRadius(m),Q=I().innerRadius(m*P).outerRadius(m*P),$=b.append("g");$.append("circle").attr("cx",0).attr("cy",0).attr("r",m+L/2).attr("class","pieOuterCircle");let y=g.getSections(),U=Oe(y),X=[l.pie1,l.pie2,l.pie3,l.pie4,l.pie5,l.pie6,l.pie7,l.pie8,l.pie9,l.pie10,l.pie11,l.pie12],T=0;y.forEach(t=>{T+=t});let W=U.filter(t=>(t.data.value/T*100).toFixed(0)!=="0"),A=ge(X).domain([...y.keys()]);$.selectAll("mySlices").data(W).enter().append("path").attr("d",K).attr("fill",t=>A(t.data.label)).attr("class",t=>{let r="pieCircle";return u.highlightSlice==="hover"?r+=" highlightedOnHover":u.highlightSlice===t.data.label&&(r+=" highlighted"),r}),$.selectAll("mySlices").data(W).enter().append("text").text(t=>(t.data.value/T*100).toFixed(0)+"%").attr("transform",t=>"translate("+Q.centroid(t)+")").style("text-anchor","middle").attr("class","slice");let Y=b.append("text").text(g.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText"),v=[...y.entries()].map(([t,r])=>({label:t,value:r})),f=b.selectAll(".legend").data(v).enter().append("g").attr("class","legend");f.append("rect").attr("width",i).attr("height",i).style("fill",t=>A(t.label)).style("stroke",t=>A(t.label)),f.append("text").attr("x",i+n).attr("y",i-n).text(t=>g.getShowData()?`${t.label} [${t.value}]`:t.label);let x=Math.max(...f.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),C=S,M=w+F,s=i+n,O=v.length*s;switch(_){case"center":f.attr("transform",(t,r)=>{let p=s*v.length/2,c=-x/2-(i+n),h=r*s-p;return"translate("+c+","+h+")"});break;case"top":C+=O,f.attr("transform",(t,r)=>{let p=m,c=-x/2-(i+n),h=r*s-p;return`translate(${c}, ${h})`}),$.attr("transform",()=>`translate(0, ${O+s})`);break;case"bottom":C+=O,f.attr("transform",(t,r)=>{let p=-m-s,c=-x/2-(i+n),h=r*s-p;return"translate("+c+","+h+")"});break;case"left":M+=i+n+x,f.attr("transform",(t,r)=>{let p=s*v.length/2,c=-m-(i+n),h=r*s-p;return"translate("+c+","+h+")"}),$.attr("transform",()=>`translate(${x+i+n}, 0)`);break;case"right":default:M+=i+n+x,f.attr("transform",(t,r)=>{let p=s*v.length/2,c=12*i,h=r*s-p;return"translate("+c+","+h+")"});break}let N=((G=Y.node())==null?void 0:G.getBoundingClientRect().width)??0,Z=w/2-N/2,ee=w/2+N/2,j=Math.min(0,Z),q=Math.max(M,ee)-j;D.attr("viewBox",`${j} 0 ${q} ${C}`),ue(D,C,q,u.useMaxWidth)},"draw"),ze={draw:Re},Le={parser:Te,db:V,renderer:ze,styles:Me};export{Le as diagram};
