import{a as ue,l as he,q as fe,o as me,s as ye,e as ke,m as l,M as ut,i as $t,F as ge,V as pe,G as be,b as Te,Z as ve,Y as xe,p as nt,S as $e,J as Bt,K as qt,$ as we,N as _e,Q as De,R as Se,T as Ce,U as Me,_ as Ye,a0 as Qt,a1 as Xt,a2 as Ut,a3 as Jt,a4 as Zt,a5 as Ee,C as Ie,u as Le,f as rt,a6 as se,g as Oe,n as Ae,a7 as Ct}from"./theme.DV_w2017.js";import"./framework.CJaX6y8V.js";var Fe=Ct((t,i)=>{(function(n,e){typeof t=="object"&&typeof i<"u"?i.exports=e():typeof define=="function"&&define.amd?define(e):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_isoWeek=e()})(t,function(){var n="day";return function(e,a,h){var b=l(function(Y){return Y.add(4-Y.isoWeekday(),n)},"a"),w=a.prototype;w.isoWeekYear=function(){return b(this).year()},w.isoWeek=function(Y){if(!this.$utils().u(Y))return this.add(7*(Y-this.isoWeek()),n);var S,P,A,N,G=b(this),z=(S=this.isoWeekYear(),P=this.$u,A=(P?h.utc:h)().year(S).startOf("year"),N=4-A.isoWeekday(),A.isoWeekday()>4&&(N+=7),A.add(N,n));return G.diff(z,"week")+1},w.isoWeekday=function(Y){return this.$utils().u(Y)?this.day()||7:this.day(this.day()%7?Y:Y-7)};var W=w.startOf;w.startOf=function(Y,S){var P=this.$utils(),A=!!P.u(S)||S;return P.p(Y)==="isoweek"?A?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):W.bind(this)(Y,S)}}})}),We=Ct((t,i)=>{(function(n,e){typeof t=="object"&&typeof i<"u"?i.exports=e():typeof define=="function"&&define.amd?define(e):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_customParseFormat=e()})(t,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d/,h=/\d\d/,b=/\d\d?/,w=/\d*[^-_:/,()\s\d]+/,W={},Y=l(function(y){return(y=+y)+(y>68?1900:2e3)},"a"),S=l(function(y){return function(_){this[y]=+_}},"f"),P=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(_){if(!_||_==="Z")return 0;var F=_.match(/([+-]|\d\d)/g),O=60*F[1]+(+F[2]||0);return O===0?0:F[0]==="+"?-O:O}(y)}],A=l(function(y){var _=W[y];return _&&(_.indexOf?_:_.s.concat(_.f))},"u"),N=l(function(y,_){var F,O=W.meridiem;if(O){for(var V=1;V<=24;V+=1)if(y.indexOf(O(V,0,_))>-1){F=V>12;break}}else F=y===(_?"pm":"PM");return F},"d"),G={A:[w,function(y){this.afternoon=N(y,!1)}],a:[w,function(y){this.afternoon=N(y,!0)}],Q:[a,function(y){this.month=3*(y-1)+1}],S:[a,function(y){this.milliseconds=100*+y}],SS:[h,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[b,S("seconds")],ss:[b,S("seconds")],m:[b,S("minutes")],mm:[b,S("minutes")],H:[b,S("hours")],h:[b,S("hours")],HH:[b,S("hours")],hh:[b,S("hours")],D:[b,S("day")],DD:[h,S("day")],Do:[w,function(y){var _=W.ordinal,F=y.match(/\d+/);if(this.day=F[0],_)for(var O=1;O<=31;O+=1)_(O).replace(/\[|\]/g,"")===y&&(this.day=O)}],w:[b,S("week")],ww:[h,S("week")],M:[b,S("month")],MM:[h,S("month")],MMM:[w,function(y){var _=A("months"),F=(A("monthsShort")||_.map(function(O){return O.slice(0,3)})).indexOf(y)+1;if(F<1)throw new Error;this.month=F%12||F}],MMMM:[w,function(y){var _=A("months").indexOf(y)+1;if(_<1)throw new Error;this.month=_%12||_}],Y:[/[+-]?\d+/,S("year")],YY:[h,function(y){this.year=Y(y)}],YYYY:[/\d{4}/,S("year")],Z:P,ZZ:P};function z(y){var _,F;_=y,F=W&&W.formats;for(var O=(y=_.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(m,p,g){var k=g&&g.toUpperCase();return p||F[g]||n[g]||F[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(r,u,d){return u||d.slice(1)})})).match(e),V=O.length,j=0;j<V;j+=1){var E=O[j],T=G[E],f=T&&T[0],C=T&&T[1];O[j]=C?{regex:f,parser:C}:E.replace(/^\[|\]$/g,"")}return function(m){for(var p={},g=0,k=0;g<V;g+=1){var r=O[g];if(typeof r=="string")k+=r.length;else{var u=r.regex,d=r.parser,v=m.slice(k),s=u.exec(v)[0];d.call(p,s),m=m.replace(s,"")}}return function(x){var c=x.afternoon;if(c!==void 0){var o=x.hours;c?o<12&&(x.hours+=12):o===12&&(x.hours=0),delete x.afternoon}}(p),p}}return l(z,"l"),function(y,_,F){F.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(Y=y.parseTwoDigitYear);var O=_.prototype,V=O.parse;O.parse=function(j){var E=j.date,T=j.utc,f=j.args;this.$u=T;var C=f[1];if(typeof C=="string"){var m=f[2]===!0,p=f[3]===!0,g=m||p,k=f[2];p&&(k=f[2]),W=this.$locale(),!m&&k&&(W=F.Ls[k]),this.$d=function(v,s,x,c){try{if(["x","X"].indexOf(s)>-1)return new Date((s==="X"?1e3:1)*v);var o=z(s)(v),$=o.year,M=o.month,L=o.day,I=o.hours,B=o.minutes,D=o.seconds,U=o.milliseconds,et=o.zone,ot=o.week,mt=new Date,yt=L||($||M?1:mt.getDate()),lt=$||mt.getFullYear(),H=0;$&&!M||(H=M>0?M-1:mt.getMonth());var st,J=I||0,q=B||0,Tt=D||0,it=U||0;return et?new Date(Date.UTC(lt,H,yt,J,q,Tt,it+60*et.offset*1e3)):x?new Date(Date.UTC(lt,H,yt,J,q,Tt,it)):(st=new Date(lt,H,yt,J,q,Tt,it),ot&&(st=c(st).week(ot).toDate()),st)}catch{return new Date("")}}(E,C,T,F),this.init(),k&&k!==!0&&(this.$L=this.locale(k).$L),g&&E!=this.format(C)&&(this.$d=new Date("")),W={}}else if(C instanceof Array)for(var r=C.length,u=1;u<=r;u+=1){f[1]=C[u-1];var d=F.apply(this,f);if(d.isValid()){this.$d=d.$d,this.$L=d.$L,this.init();break}u===r&&(this.$d=new Date(""))}else V.call(this,j)}}})}),Pe=Ct((t,i)=>{(function(n,e){typeof t=="object"&&typeof i<"u"?i.exports=e():typeof define=="function"&&define.amd?define(e):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_advancedFormat=e()})(t,function(){return function(n,e){var a=e.prototype,h=a.format;a.format=function(b){var w=this,W=this.$locale();if(!this.isValid())return h.bind(this)(b);var Y=this.$utils(),S=(b||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(P){switch(P){case"Q":return Math.ceil((w.$M+1)/3);case"Do":return W.ordinal(w.$D);case"gggg":return w.weekYear();case"GGGG":return w.isoWeekYear();case"wo":return W.ordinal(w.week(),"W");case"w":case"ww":return Y.s(w.week(),P==="w"?1:2,"0");case"W":case"WW":return Y.s(w.isoWeek(),P==="W"?1:2,"0");case"k":case"kk":return Y.s(String(w.$H===0?24:w.$H),P==="k"?1:2,"0");case"X":return Math.floor(w.$d.getTime()/1e3);case"x":return w.$d.getTime();case"z":return"["+w.offsetName()+"]";case"zzz":return"["+w.offsetName("long")+"]";default:return P}});return h.bind(this)(S)}}})}),ze=Ct((t,i)=>{(function(n,e){typeof t=="object"&&typeof i<"u"?i.exports=e():typeof define=="function"&&define.amd?define(e):(n=typeof globalThis<"u"?globalThis:n||self).dayjs_plugin_duration=e()})(t,function(){var n,e,a=1e3,h=6e4,b=36e5,w=864e5,W=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Y=31536e6,S=2628e6,P=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,A={years:Y,months:S,days:w,hours:b,minutes:h,seconds:a,milliseconds:1,weeks:6048e5},N=l(function(E){return E instanceof V},"c"),G=l(function(E,T,f){return new V(E,f,T.$l)},"f"),z=l(function(E){return e.p(E)+"s"},"m"),y=l(function(E){return E<0},"l"),_=l(function(E){return y(E)?Math.ceil(E):Math.floor(E)},"$"),F=l(function(E){return Math.abs(E)},"y"),O=l(function(E,T){return E?y(E)?{negative:!0,format:""+F(E)+T}:{negative:!1,format:""+E+T}:{negative:!1,format:""}},"v"),V=function(){function E(f,C,m){var p=this;if(this.$d={},this.$l=m,f===void 0&&(this.$ms=0,this.parseFromMilliseconds()),C)return G(f*A[z(C)],this);if(typeof f=="number")return this.$ms=f,this.parseFromMilliseconds(),this;if(typeof f=="object")return Object.keys(f).forEach(function(r){p.$d[z(r)]=f[r]}),this.calMilliseconds(),this;if(typeof f=="string"){var g=f.match(P);if(g){var k=g.slice(2).map(function(r){return r!=null?Number(r):0});return this.$d.years=k[0],this.$d.months=k[1],this.$d.weeks=k[2],this.$d.days=k[3],this.$d.hours=k[4],this.$d.minutes=k[5],this.$d.seconds=k[6],this.calMilliseconds(),this}}return this}l(E,"l");var T=E.prototype;return T.calMilliseconds=function(){var f=this;this.$ms=Object.keys(this.$d).reduce(function(C,m){return C+(f.$d[m]||0)*A[m]},0)},T.parseFromMilliseconds=function(){var f=this.$ms;this.$d.years=_(f/Y),f%=Y,this.$d.months=_(f/S),f%=S,this.$d.days=_(f/w),f%=w,this.$d.hours=_(f/b),f%=b,this.$d.minutes=_(f/h),f%=h,this.$d.seconds=_(f/a),f%=a,this.$d.milliseconds=f},T.toISOString=function(){var f=O(this.$d.years,"Y"),C=O(this.$d.months,"M"),m=+this.$d.days||0;this.$d.weeks&&(m+=7*this.$d.weeks);var p=O(m,"D"),g=O(this.$d.hours,"H"),k=O(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3,r=Math.round(1e3*r)/1e3);var u=O(r,"S"),d=f.negative||C.negative||p.negative||g.negative||k.negative||u.negative,v=g.format||k.format||u.format?"T":"",s=(d?"-":"")+"P"+f.format+C.format+p.format+v+g.format+k.format+u.format;return s==="P"||s==="-P"?"P0D":s},T.toJSON=function(){return this.toISOString()},T.format=function(f){var C=f||"YYYY-MM-DDTHH:mm:ss",m={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return C.replace(W,function(p,g){return g||String(m[p])})},T.as=function(f){return this.$ms/A[z(f)]},T.get=function(f){var C=this.$ms,m=z(f);return m==="milliseconds"?C%=1e3:C=m==="weeks"?_(C/A[m]):this.$d[m],C||0},T.add=function(f,C,m){var p;return p=C?f*A[z(C)]:N(f)?f.$ms:G(f,this).$ms,G(this.$ms+p*(m?-1:1),this)},T.subtract=function(f,C){return this.add(f,C,!0)},T.locale=function(f){var C=this.clone();return C.$l=f,C},T.clone=function(){return G(this.$ms,this)},T.humanize=function(f){return n().add(this.$ms,"ms").locale(this.$l).fromNow(!f)},T.valueOf=function(){return this.asMilliseconds()},T.milliseconds=function(){return this.get("milliseconds")},T.asMilliseconds=function(){return this.as("milliseconds")},T.seconds=function(){return this.get("seconds")},T.asSeconds=function(){return this.as("seconds")},T.minutes=function(){return this.get("minutes")},T.asMinutes=function(){return this.as("minutes")},T.hours=function(){return this.get("hours")},T.asHours=function(){return this.as("hours")},T.days=function(){return this.get("days")},T.asDays=function(){return this.as("days")},T.weeks=function(){return this.get("weeks")},T.asWeeks=function(){return this.as("weeks")},T.months=function(){return this.get("months")},T.asMonths=function(){return this.as("months")},T.years=function(){return this.get("years")},T.asYears=function(){return this.as("years")},E}(),j=l(function(E,T,f){return E.add(T.years()*f,"y").add(T.months()*f,"M").add(T.days()*f,"d").add(T.hours()*f,"h").add(T.minutes()*f,"m").add(T.seconds()*f,"s").add(T.milliseconds()*f,"ms")},"p");return function(E,T,f){n=f,e=f().$utils(),f.duration=function(p,g){var k=f.locale();return G(p,{$l:k},g)},f.isDuration=N;var C=T.prototype.add,m=T.prototype.subtract;T.prototype.add=function(p,g){return N(p)?j(this,p,1):C.bind(this)(p,g)},T.prototype.subtract=function(p,g){return N(p)?j(this,p,-1):m.bind(this)(p,g)}}})}),Et=function(){var t=l(function(k,r,u,d){for(u=u||{},d=k.length;d--;u[k[d]]=r);return u},"o"),i=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],n=[1,26],e=[1,27],a=[1,28],h=[1,29],b=[1,30],w=[1,31],W=[1,32],Y=[1,33],S=[1,34],P=[1,9],A=[1,10],N=[1,11],G=[1,12],z=[1,13],y=[1,14],_=[1,15],F=[1,16],O=[1,19],V=[1,20],j=[1,21],E=[1,22],T=[1,23],f=[1,25],C=[1,35],m={trace:l(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:l(function(k,r,u,d,v,s,x){var c=s.length-1;switch(v){case 1:return s[c-1];case 2:this.$=[];break;case 3:s[c-1].push(s[c]),this.$=s[c-1];break;case 4:case 5:this.$=s[c];break;case 6:case 7:this.$=[];break;case 8:d.setWeekday("monday");break;case 9:d.setWeekday("tuesday");break;case 10:d.setWeekday("wednesday");break;case 11:d.setWeekday("thursday");break;case 12:d.setWeekday("friday");break;case 13:d.setWeekday("saturday");break;case 14:d.setWeekday("sunday");break;case 15:d.setWeekend("friday");break;case 16:d.setWeekend("saturday");break;case 17:d.setDateFormat(s[c].substr(11)),this.$=s[c].substr(11);break;case 18:d.enableInclusiveEndDates(),this.$=s[c].substr(18);break;case 19:d.TopAxis(),this.$=s[c].substr(8);break;case 20:d.setAxisFormat(s[c].substr(11)),this.$=s[c].substr(11);break;case 21:d.setTickInterval(s[c].substr(13)),this.$=s[c].substr(13);break;case 22:d.setExcludes(s[c].substr(9)),this.$=s[c].substr(9);break;case 23:d.setIncludes(s[c].substr(9)),this.$=s[c].substr(9);break;case 24:d.setTodayMarker(s[c].substr(12)),this.$=s[c].substr(12);break;case 27:d.setDiagramTitle(s[c].substr(6)),this.$=s[c].substr(6);break;case 28:this.$=s[c].trim(),d.setAccTitle(this.$);break;case 29:case 30:this.$=s[c].trim(),d.setAccDescription(this.$);break;case 31:d.addSection(s[c].substr(8)),this.$=s[c].substr(8);break;case 33:d.addTask(s[c-1],s[c]),this.$="task";break;case 34:this.$=s[c-1],d.setClickEvent(s[c-1],s[c],null);break;case 35:this.$=s[c-2],d.setClickEvent(s[c-2],s[c-1],s[c]);break;case 36:this.$=s[c-2],d.setClickEvent(s[c-2],s[c-1],null),d.setLink(s[c-2],s[c]);break;case 37:this.$=s[c-3],d.setClickEvent(s[c-3],s[c-2],s[c-1]),d.setLink(s[c-3],s[c]);break;case 38:this.$=s[c-2],d.setClickEvent(s[c-2],s[c],null),d.setLink(s[c-2],s[c-1]);break;case 39:this.$=s[c-3],d.setClickEvent(s[c-3],s[c-1],s[c]),d.setLink(s[c-3],s[c-2]);break;case 40:this.$=s[c-1],d.setLink(s[c-1],s[c]);break;case 41:case 47:this.$=s[c-1]+" "+s[c];break;case 42:case 43:case 45:this.$=s[c-2]+" "+s[c-1]+" "+s[c];break;case 44:case 46:this.$=s[c-3]+" "+s[c-2]+" "+s[c-1]+" "+s[c];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(i,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:n,13:e,14:a,15:h,16:b,17:w,18:W,19:18,20:Y,21:S,22:P,23:A,24:N,25:G,26:z,27:y,28:_,29:F,30:O,31:V,33:j,35:E,36:T,37:24,38:f,40:C},t(i,[2,7],{1:[2,1]}),t(i,[2,3]),{9:36,11:17,12:n,13:e,14:a,15:h,16:b,17:w,18:W,19:18,20:Y,21:S,22:P,23:A,24:N,25:G,26:z,27:y,28:_,29:F,30:O,31:V,33:j,35:E,36:T,37:24,38:f,40:C},t(i,[2,5]),t(i,[2,6]),t(i,[2,17]),t(i,[2,18]),t(i,[2,19]),t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),t(i,[2,23]),t(i,[2,24]),t(i,[2,25]),t(i,[2,26]),t(i,[2,27]),{32:[1,37]},{34:[1,38]},t(i,[2,30]),t(i,[2,31]),t(i,[2,32]),{39:[1,39]},t(i,[2,8]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),t(i,[2,16]),{41:[1,40],43:[1,41]},t(i,[2,4]),t(i,[2,28]),t(i,[2,29]),t(i,[2,33]),t(i,[2,34],{42:[1,42],43:[1,43]}),t(i,[2,40],{41:[1,44]}),t(i,[2,35],{43:[1,45]}),t(i,[2,36]),t(i,[2,38],{42:[1,46]}),t(i,[2,37]),t(i,[2,39])],defaultActions:{},parseError:l(function(k,r){if(r.recoverable)this.trace(k);else{var u=new Error(k);throw u.hash=r,u}},"parseError"),parse:l(function(k){var r=this,u=[0],d=[],v=[null],s=[],x=this.table,c="",o=0,$=0,M=0,L=2,I=1,B=s.slice.call(arguments,1),D=Object.create(this.lexer),U={yy:{}};for(var et in this.yy)Object.prototype.hasOwnProperty.call(this.yy,et)&&(U.yy[et]=this.yy[et]);D.setInput(k,U.yy),U.yy.lexer=D,U.yy.parser=this,typeof D.yylloc>"u"&&(D.yylloc={});var ot=D.yylloc;s.push(ot);var mt=D.options&&D.options.ranges;typeof U.yy.parseError=="function"?this.parseError=U.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function yt(Q){u.length=u.length-2*Q,v.length=v.length-Q,s.length=s.length-Q}l(yt,"popStack");function lt(){var Q;return Q=d.pop()||D.lex()||I,typeof Q!="number"&&(Q instanceof Array&&(d=Q,Q=d.pop()),Q=r.symbols_[Q]||Q),Q}l(lt,"lex");for(var H,st,J,q,Tt,it,ct={},vt,K,Vt,xt;;){if(J=u[u.length-1],this.defaultActions[J]?q=this.defaultActions[J]:((H===null||typeof H>"u")&&(H=lt()),q=x[J]&&x[J][H]),typeof q>"u"||!q.length||!q[0]){var Mt="";xt=[];for(vt in x[J])this.terminals_[vt]&&vt>L&&xt.push("'"+this.terminals_[vt]+"'");D.showPosition?Mt="Parse error on line "+(o+1)+`:
`+D.showPosition()+`
Expecting `+xt.join(", ")+", got '"+(this.terminals_[H]||H)+"'":Mt="Parse error on line "+(o+1)+": Unexpected "+(H==I?"end of input":"'"+(this.terminals_[H]||H)+"'"),this.parseError(Mt,{text:D.match,token:this.terminals_[H]||H,line:D.yylineno,loc:ot,expected:xt})}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+J+", token: "+H);switch(q[0]){case 1:u.push(H),v.push(D.yytext),s.push(D.yylloc),u.push(q[1]),H=null,st?(H=st,st=null):($=D.yyleng,c=D.yytext,o=D.yylineno,ot=D.yylloc,M>0);break;case 2:if(K=this.productions_[q[1]][1],ct.$=v[v.length-K],ct._$={first_line:s[s.length-(K||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(K||1)].first_column,last_column:s[s.length-1].last_column},mt&&(ct._$.range=[s[s.length-(K||1)].range[0],s[s.length-1].range[1]]),it=this.performAction.apply(ct,[c,$,o,U.yy,q[1],v,s].concat(B)),typeof it<"u")return it;K&&(u=u.slice(0,-1*K*2),v=v.slice(0,-1*K),s=s.slice(0,-1*K)),u.push(this.productions_[q[1]][0]),v.push(ct.$),s.push(ct._$),Vt=x[u[u.length-2]][u[u.length-1]],u.push(Vt);break;case 3:return!0}}return!0},"parse")},p=function(){var k={EOF:1,parseError:l(function(r,u){if(this.yy.parser)this.yy.parser.parseError(r,u);else throw new Error(r)},"parseError"),setInput:l(function(r,u){return this.yy=u||this.yy||{},this._input=r,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:l(function(){var r=this._input[0];this.yytext+=r,this.yyleng++,this.offset++,this.match+=r,this.matched+=r;var u=r.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),r},"input"),unput:l(function(r){var u=r.length,d=r.split(/(?:\r\n?|\n)/g);this._input=r+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var v=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1&&(this.yylineno-=d.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===v.length?this.yylloc.first_column:0)+v[v.length-d.length].length-d[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:l(function(){return this._more=!0,this},"more"),reject:l(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:l(function(r){this.unput(this.match.slice(r))},"less"),pastInput:l(function(){var r=this.matched.substr(0,this.matched.length-this.match.length);return(r.length>20?"...":"")+r.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:l(function(){var r=this.match;return r.length<20&&(r+=this._input.substr(0,20-r.length)),(r.substr(0,20)+(r.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:l(function(){var r=this.pastInput(),u=new Array(r.length+1).join("-");return r+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:l(function(r,u){var d,v,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),v=r[0].match(/(?:\r\n?|\n).*/g),v&&(this.yylineno+=v.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:v?v[v.length-1].length-v[v.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+r[0].length},this.yytext+=r[0],this.match+=r[0],this.matches=r,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(r[0].length),this.matched+=r[0],d=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),d)return d;if(this._backtrack){for(var x in s)this[x]=s[x];return!1}return!1},"test_match"),next:l(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var r,u,d,v;this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),x=0;x<s.length;x++)if(d=this._input.match(this.rules[s[x]]),d&&(!u||d[0].length>u[0].length)){if(u=d,v=x,this.options.backtrack_lexer){if(r=this.test_match(d,s[x]),r!==!1)return r;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(r=this.test_match(u,s[v]),r!==!1?r:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:l(function(){var r=this.next();return r||this.lex()},"lex"),begin:l(function(r){this.conditionStack.push(r)},"begin"),popState:l(function(){var r=this.conditionStack.length-1;return r>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:l(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:l(function(r){return r=this.conditionStack.length-1-Math.abs(r||0),r>=0?this.conditionStack[r]:"INITIAL"},"topState"),pushState:l(function(r){this.begin(r)},"pushState"),stateStackSize:l(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:l(function(r,u,d,v){switch(d){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return k}();m.lexer=p;function g(){this.yy={}}return l(g,"Parser"),g.prototype=m,m.Parser=g,new g}();Et.parser=Et;var He=Et,Ne=rt(Oe()),X=rt(se()),je=rt(Fe()),Re=rt(We()),Ge=rt(Pe());X.default.extend(je.default);X.default.extend(Re.default);X.default.extend(Ge.default);var Kt={friday:5,saturday:6},Z="",At="",Ft,Wt="",gt=[],pt=[],Pt=new Map,zt=[],Dt=[],ft="",Ht="",ie=["active","done","crit","milestone","vert"],Nt=[],dt="",bt=!1,jt=!1,Rt="sunday",St="saturday",It=0,Ve=l(function(){zt=[],Dt=[],ft="",Nt=[],wt=0,Ot=void 0,_t=void 0,R=[],Z="",At="",Ht="",Ft=void 0,Wt="",gt=[],pt=[],bt=!1,jt=!1,It=0,Pt=new Map,dt="",Le(),Rt="sunday",St="saturday"},"clear"),Be=l(function(t){dt=t},"setDiagramId"),qe=l(function(t){At=t},"setAxisFormat"),Qe=l(function(){return At},"getAxisFormat"),Xe=l(function(t){Ft=t},"setTickInterval"),Ue=l(function(){return Ft},"getTickInterval"),Je=l(function(t){Wt=t},"setTodayMarker"),Ze=l(function(){return Wt},"getTodayMarker"),Ke=l(function(t){Z=t},"setDateFormat"),ts=l(function(){bt=!0},"enableInclusiveEndDates"),es=l(function(){return bt},"endDatesAreInclusive"),ss=l(function(){jt=!0},"enableTopAxis"),is=l(function(){return jt},"topAxisEnabled"),ns=l(function(t){Ht=t},"setDisplayMode"),rs=l(function(){return Ht},"getDisplayMode"),as=l(function(){return Z},"getDateFormat"),os=l(function(t){gt=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),ls=l(function(){return gt},"getIncludes"),cs=l(function(t){pt=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),ds=l(function(){return pt},"getExcludes"),us=l(function(){return Pt},"getLinks"),hs=l(function(t){ft=t,zt.push(t)},"addSection"),fs=l(function(){return zt},"getSections"),ms=l(function(){let t=te(),i=10,n=0;for(;!t&&n<i;)t=te(),n++;return Dt=R,Dt},"getTasks"),ne=l(function(t,i,n,e){let a=t.format(i.trim()),h=t.format("YYYY-MM-DD");return e.includes(a)||e.includes(h)?!1:n.includes("weekends")&&(t.isoWeekday()===Kt[St]||t.isoWeekday()===Kt[St]+1)||n.includes(t.format("dddd").toLowerCase())?!0:n.includes(a)||n.includes(h)},"isInvalidDate"),ys=l(function(t){Rt=t},"setWeekday"),ks=l(function(){return Rt},"getWeekday"),gs=l(function(t){St=t},"setWeekend"),re=l(function(t,i,n,e){if(!n.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=(0,X.default)(t.startTime):a=(0,X.default)(t.startTime,i,!0),a=a.add(1,"d");let h;t.endTime instanceof Date?h=(0,X.default)(t.endTime):h=(0,X.default)(t.endTime,i,!0);let[b,w]=ps(a,h,i,n,e);t.endTime=b.toDate(),t.renderEndTime=w},"checkTaskDates"),ps=l(function(t,i,n,e,a){let h=!1,b=null,w=i.add(1e4,"d");for(;t<=i;){if(h||(b=i.toDate()),h=ne(t,n,e,a),h&&(i=i.add(1,"d"),i>w))throw new Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[i,b]},"fixTaskDates"),Lt=l(function(t,i,n){if(n=n.trim(),l(h=>{let b=h.trim();return b==="x"||b==="X"},"isTimestampFormat")(i)&&/^\d+$/.test(n))return new Date(Number(n));let e=/^after\s+(?<ids>[\d\w- ]+)/.exec(n);if(e!==null){let h=null;for(let w of e.groups.ids.split(" ")){let W=at(w);W!==void 0&&(!h||W.endTime>h.endTime)&&(h=W)}if(h)return h.endTime;let b=new Date;return b.setHours(0,0,0,0),b}let a=(0,X.default)(n,i.trim(),!0);if(a.isValid())return a.toDate();{nt.debug("Invalid date:"+n),nt.debug("With date format:"+i.trim());let h=new Date(n);if(h===void 0||isNaN(h.getTime())||h.getFullYear()<-1e4||h.getFullYear()>1e4)throw new Error("Invalid date:"+n);return h}},"getStartDate"),ae=l(function(t){let i=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return i!==null?[Number.parseFloat(i[1]),i[2]]:[NaN,"ms"]},"parseDuration"),oe=l(function(t,i,n,e=!1){n=n.trim();let a=/^until\s+(?<ids>[\d\w- ]+)/.exec(n);if(a!==null){let Y=null;for(let P of a.groups.ids.split(" ")){let A=at(P);A!==void 0&&(!Y||A.startTime<Y.startTime)&&(Y=A)}if(Y)return Y.startTime;let S=new Date;return S.setHours(0,0,0,0),S}let h=(0,X.default)(n,i.trim(),!0);if(h.isValid())return e&&(h=h.add(1,"d")),h.toDate();let b=(0,X.default)(t),[w,W]=ae(n);if(!Number.isNaN(w)){let Y=b.add(w,W);Y.isValid()&&(b=Y)}return b.toDate()},"getEndDate"),wt=0,ht=l(function(t){return t===void 0?(wt=wt+1,"task"+wt):t},"parseId"),bs=l(function(t,i){let n;i.substr(0,1)===":"?n=i.substr(1,i.length):n=i;let e=n.split(","),a={};Gt(e,a,ie);for(let b=0;b<e.length;b++)e[b]=e[b].trim();let h="";switch(e.length){case 1:a.id=ht(),a.startTime=t.endTime,h=e[0];break;case 2:a.id=ht(),a.startTime=Lt(void 0,Z,e[0]),h=e[1];break;case 3:a.id=ht(e[0]),a.startTime=Lt(void 0,Z,e[1]),h=e[2];break}return h&&(a.endTime=oe(a.startTime,Z,h,bt),a.manualEndTime=(0,X.default)(h,"YYYY-MM-DD",!0).isValid(),re(a,Z,pt,gt)),a},"compileData"),Ts=l(function(t,i){let n;i.substr(0,1)===":"?n=i.substr(1,i.length):n=i;let e=n.split(","),a={};Gt(e,a,ie);for(let h=0;h<e.length;h++)e[h]=e[h].trim();switch(e.length){case 1:a.id=ht(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:e[0]};break;case 2:a.id=ht(),a.startTime={type:"getStartDate",startData:e[0]},a.endTime={data:e[1]};break;case 3:a.id=ht(e[0]),a.startTime={type:"getStartDate",startData:e[1]},a.endTime={data:e[2]};break}return a},"parseData"),Ot,_t,R=[],le={},vs=l(function(t,i){let n={section:ft,type:ft,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:i},task:t,classes:[]},e=Ts(_t,i);n.raw.startTime=e.startTime,n.raw.endTime=e.endTime,n.id=e.id,n.prevTaskId=_t,n.active=e.active,n.done=e.done,n.crit=e.crit,n.milestone=e.milestone,n.vert=e.vert,n.vert?n.order=-1:(n.order=It,It++);let a=R.push(n);_t=n.id,le[n.id]=a-1},"addTask"),at=l(function(t){let i=le[t];return R[i]},"findTaskById"),xs=l(function(t,i){let n={section:ft,type:ft,description:t,task:t,classes:[]},e=bs(Ot,i);n.startTime=e.startTime,n.endTime=e.endTime,n.id=e.id,n.active=e.active,n.done=e.done,n.crit=e.crit,n.milestone=e.milestone,n.vert=e.vert,Ot=n,Dt.push(n)},"addTaskOrg"),te=l(function(){let t=l(function(n){let e=R[n],a="";switch(R[n].raw.startTime.type){case"prevTaskEnd":{let h=at(e.prevTaskId);e.startTime=h.endTime;break}case"getStartDate":a=Lt(void 0,Z,R[n].raw.startTime.startData),a&&(R[n].startTime=a);break}return R[n].startTime&&(R[n].endTime=oe(R[n].startTime,Z,R[n].raw.endTime.data,bt),R[n].endTime&&(R[n].processed=!0,R[n].manualEndTime=(0,X.default)(R[n].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),re(R[n],Z,pt,gt))),R[n].processed},"compileTask"),i=!0;for(let[n,e]of R.entries())t(n),i=i&&e.processed;return i},"compileTasks"),$s=l(function(t,i){let n=i;ut().securityLevel!=="loose"&&(n=(0,Ne.sanitizeUrl)(i)),t.split(",").forEach(function(e){at(e)!==void 0&&(de(e,()=>{window.open(n,"_self")}),Pt.set(e,n))}),ce(t,"clickable")},"setLink"),ce=l(function(t,i){t.split(",").forEach(function(n){let e=at(n);e!==void 0&&e.classes.push(i)})},"setClass"),ws=l(function(t,i,n){if(ut().securityLevel!=="loose"||i===void 0)return;let e=[];if(typeof n=="string"){e=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let a=0;a<e.length;a++){let h=e[a].trim();h.startsWith('"')&&h.endsWith('"')&&(h=h.substr(1,h.length-2)),e[a]=h}}e.length===0&&e.push(t),at(t)!==void 0&&de(t,()=>{Ae.runFunc(i,...e)})},"setClickFun"),de=l(function(t,i){Nt.push(function(){let n=dt?`${dt}-${t}`:t,e=document.querySelector(`[id="${n}"]`);e!==null&&e.addEventListener("click",function(){i()})},function(){let n=dt?`${dt}-${t}`:t,e=document.querySelector(`[id="${n}-text"]`);e!==null&&e.addEventListener("click",function(){i()})})},"pushFun"),_s=l(function(t,i,n){t.split(",").forEach(function(e){ws(e,i,n)}),ce(t,"clickable")},"setClickEvent"),Ds=l(function(t){Nt.forEach(function(i){i(t)})},"bindFunctions"),Ss={getConfig:l(()=>ut().gantt,"getConfig"),clear:Ve,setDateFormat:Ke,getDateFormat:as,enableInclusiveEndDates:ts,endDatesAreInclusive:es,enableTopAxis:ss,topAxisEnabled:is,setAxisFormat:qe,getAxisFormat:Qe,setTickInterval:Xe,getTickInterval:Ue,setTodayMarker:Je,getTodayMarker:Ze,setAccTitle:ke,getAccTitle:ye,setDiagramTitle:me,getDiagramTitle:fe,setDiagramId:Be,setDisplayMode:ns,getDisplayMode:rs,setAccDescription:he,getAccDescription:ue,addSection:hs,getSections:fs,getTasks:ms,addTask:vs,findTaskById:at,addTaskOrg:xs,setIncludes:os,getIncludes:ls,setExcludes:cs,getExcludes:ds,setClickEvent:_s,setLink:$s,getLinks:us,bindFunctions:Ds,parseDuration:ae,isInvalidDate:ne,setWeekday:ys,getWeekday:ks,setWeekend:gs};function Gt(t,i,n){let e=!0;for(;e;)e=!1,n.forEach(function(a){let h="^\\s*"+a+"\\s*$",b=new RegExp(h);t[0].match(b)&&(i[a]=!0,t.shift(1),e=!0)})}l(Gt,"getTaskTags");var kt=rt(se()),Cs=rt(ze());kt.default.extend(Cs.default);var Ms=l(function(){nt.debug("Something is calling, setConf, remove the call")},"setConf"),ee={monday:Ye,tuesday:Me,wednesday:Ce,thursday:Se,friday:De,saturday:_e,sunday:we},Ys=l((t,i)=>{let n=[...t].map(()=>-1/0),e=[...t].sort((h,b)=>h.startTime-b.startTime||h.order-b.order),a=0;for(let h of e)for(let b=0;b<n.length;b++)if(h.startTime>=n[b]){n[b]=h.endTime,h.order=b+i,b>a&&(a=b);break}return a},"getMaxIntersections"),tt,Yt=1e4,Es=l(function(t,i,n,e){let a=ut().gantt;e.db.setDiagramId(i);let h=ut().securityLevel,b;h==="sandbox"&&(b=$t("#i"+i));let w=h==="sandbox"?$t(b.nodes()[0].contentDocument.body):$t("body"),W=h==="sandbox"?b.nodes()[0].contentDocument:document,Y=W.getElementById(i);tt=Y.parentElement.offsetWidth,tt===void 0&&(tt=1200),a.useWidth!==void 0&&(tt=a.useWidth);let S=e.db.getTasks(),P=S.filter(m=>!m.vert),A=[];for(let m of P)A.push(m.type);A=C(A);let N={},G=2*a.topPadding;if(e.db.getDisplayMode()==="compact"||a.displayMode==="compact"){let m={};for(let g of P)m[g.section]===void 0?m[g.section]=[g]:m[g.section].push(g);let p=0;for(let g of Object.keys(m)){let k=Ys(m[g],p)+1;p+=k,G+=k*(a.barHeight+a.barGap),N[g]=k}}else{G+=P.length*(a.barHeight+a.barGap);for(let m of A)N[m]=P.filter(p=>p.type===m).length}Y.setAttribute("viewBox","0 0 "+tt+" "+G);let z=w.select(`[id="${i}"]`),y=ge().domain([pe(S,function(m){return m.startTime}),be(S,function(m){return m.endTime})]).rangeRound([0,tt-a.leftPadding-a.rightPadding]);function _(m,p){let g=m.startTime,k=p.startTime,r=0;return g>k?r=1:g<k&&(r=-1),r}l(_,"taskCompare"),S.sort(_),F(S,tt,G),Te(z,G,tt,a.useMaxWidth),z.append("text").text(e.db.getDiagramTitle()).attr("x",tt/2).attr("y",a.titleTopMargin).attr("class","titleText");function F(m,p,g){let k=a.barHeight,r=k+a.barGap,u=a.topPadding,d=a.leftPadding,v=ve().domain([0,A.length]).range(["#00B9FA","#F95002"]).interpolate(xe);V(r,u,d,p,g,m,e.db.getExcludes(),e.db.getIncludes()),E(d,u,p,g),O(m,r,u,d,k,v,p),T(r,u),f(d,u,p,g)}l(F,"makeGantt");function O(m,p,g,k,r,u,d){m.sort((o,$)=>o.vert===$.vert?0:o.vert?1:-1);let v=m.filter(o=>!o.vert),s=[...new Set(v.map(o=>o.order))].map(o=>v.find($=>$.order===o));z.append("g").selectAll("rect").data(s).enter().append("rect").attr("x",0).attr("y",function(o,$){return $=o.order,$*p+g-2}).attr("width",function(){return d-a.rightPadding/2}).attr("height",p).attr("class",function(o){for(let[$,M]of A.entries())if(o.type===M)return"section section"+$%a.numberSectionStyles;return"section section0"}).enter();let x=z.append("g").selectAll("rect").data(m).enter(),c=e.db.getLinks();if(x.append("rect").attr("id",function(o){return i+"-"+o.id}).attr("rx",3).attr("ry",3).attr("x",function(o){return o.milestone?y(o.startTime)+k+.5*(y(o.endTime)-y(o.startTime))-.5*r:y(o.startTime)+k}).attr("y",function(o,$){return $=o.order,o.vert?a.gridLineStartPadding:$*p+g}).attr("width",function(o){return o.milestone?r:o.vert?.08*r:y(o.renderEndTime||o.endTime)-y(o.startTime)}).attr("height",function(o){return o.vert?v.length*(a.barHeight+a.barGap)+a.barHeight*2:r}).attr("transform-origin",function(o,$){return $=o.order,(y(o.startTime)+k+.5*(y(o.endTime)-y(o.startTime))).toString()+"px "+($*p+g+.5*r).toString()+"px"}).attr("class",function(o){let $="task",M="";o.classes.length>0&&(M=o.classes.join(" "));let L=0;for(let[B,D]of A.entries())o.type===D&&(L=B%a.numberSectionStyles);let I="";return o.active?o.crit?I+=" activeCrit":I=" active":o.done?o.crit?I=" doneCrit":I=" done":o.crit&&(I+=" crit"),I.length===0&&(I=" task"),o.milestone&&(I=" milestone "+I),o.vert&&(I=" vert "+I),I+=L,I+=" "+M,$+I}),x.append("text").attr("id",function(o){return i+"-"+o.id+"-text"}).text(function(o){return o.task}).attr("font-size",a.fontSize).attr("x",function(o){let $=y(o.startTime),M=y(o.renderEndTime||o.endTime);if(o.milestone&&($+=.5*(y(o.endTime)-y(o.startTime))-.5*r,M=$+r),o.vert)return y(o.startTime)+k;let L=this.getBBox().width;return L>M-$?M+L+1.5*a.leftPadding>d?$+k-5:M+k+5:(M-$)/2+$+k}).attr("y",function(o,$){return o.vert?a.gridLineStartPadding+v.length*(a.barHeight+a.barGap)+60:($=o.order,$*p+a.barHeight/2+(a.fontSize/2-2)+g)}).attr("text-height",r).attr("class",function(o){let $=y(o.startTime),M=y(o.endTime);o.milestone&&(M=$+r);let L=this.getBBox().width,I="";o.classes.length>0&&(I=o.classes.join(" "));let B=0;for(let[U,et]of A.entries())o.type===et&&(B=U%a.numberSectionStyles);let D="";return o.active&&(o.crit?D="activeCritText"+B:D="activeText"+B),o.done?o.crit?D=D+" doneCritText"+B:D=D+" doneText"+B:o.crit&&(D=D+" critText"+B),o.milestone&&(D+=" milestoneText"),o.vert&&(D+=" vertText"),L>M-$?M+L+1.5*a.leftPadding>d?I+" taskTextOutsideLeft taskTextOutside"+B+" "+D:I+" taskTextOutsideRight taskTextOutside"+B+" "+D+" width-"+L:I+" taskText taskText"+B+" "+D+" width-"+L}),ut().securityLevel==="sandbox"){let o;o=$t("#i"+i);let $=o.nodes()[0].contentDocument;x.filter(function(M){return c.has(M.id)}).each(function(M){var L=$.querySelector("#"+CSS.escape(i+"-"+M.id)),I=$.querySelector("#"+CSS.escape(i+"-"+M.id+"-text"));let B=L.parentNode;var D=$.createElement("a");D.setAttribute("xlink:href",c.get(M.id)),D.setAttribute("target","_top"),B.appendChild(D),D.appendChild(L),D.appendChild(I)})}}l(O,"drawRects");function V(m,p,g,k,r,u,d,v){if(d.length===0&&v.length===0)return;let s,x;for(let{startTime:L,endTime:I}of u)(s===void 0||L<s)&&(s=L),(x===void 0||I>x)&&(x=I);if(!s||!x)return;if((0,kt.default)(x).diff((0,kt.default)(s),"year")>5){nt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let c=e.db.getDateFormat(),o=[],$=null,M=(0,kt.default)(s);for(;M.valueOf()<=x;)e.db.isInvalidDate(M,c,d,v)?$?$.end=M:$={start:M,end:M}:$&&(o.push($),$=null),M=M.add(1,"d");z.append("g").selectAll("rect").data(o).enter().append("rect").attr("id",L=>i+"-exclude-"+L.start.format("YYYY-MM-DD")).attr("x",L=>y(L.start.startOf("day"))+g).attr("y",a.gridLineStartPadding).attr("width",L=>y(L.end.endOf("day"))-y(L.start.startOf("day"))).attr("height",r-p-a.gridLineStartPadding).attr("transform-origin",function(L,I){return(y(L.start)+g+.5*(y(L.end)-y(L.start))).toString()+"px "+(I*m+.5*r).toString()+"px"}).attr("class","exclude-range")}l(V,"drawExcludeDays");function j(m,p,g,k){if(g<=0||m>p)return 1/0;let r=p-m,u=kt.default.duration({[k??"day"]:g}).asMilliseconds();return u<=0?1/0:Math.ceil(r/u)}l(j,"getEstimatedTickCount");function E(m,p,g,k){let r=e.db.getDateFormat(),u=e.db.getAxisFormat(),d;u?d=u:r==="D"?d="%d":d=a.axisFormat??"%Y-%m-%d";let v=$e(y).tickSize(-k+p+a.gridLineStartPadding).tickFormat(Bt(d)),s=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(e.db.getTickInterval()||a.tickInterval);if(s!==null){let x=parseInt(s[1],10);if(isNaN(x)||x<=0)nt.warn(`Invalid tick interval value: "${s[1]}". Skipping custom tick interval.`);else{let c=s[2],o=e.db.getWeekday()||a.weekday,$=y.domain(),M=$[0],L=$[1],I=j(M,L,x,c);if(I>Yt)nt.warn(`The tick interval "${x}${c}" would generate ${I} ticks, which exceeds the maximum allowed (${Yt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(c){case"millisecond":v.ticks(Zt.every(x));break;case"second":v.ticks(Jt.every(x));break;case"minute":v.ticks(Ut.every(x));break;case"hour":v.ticks(Xt.every(x));break;case"day":v.ticks(Qt.every(x));break;case"week":v.ticks(ee[o].every(x));break;case"month":v.ticks(qt.every(x));break}}}if(z.append("g").attr("class","grid").attr("transform","translate("+m+", "+(k-50)+")").call(v).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),e.db.topAxisEnabled()||a.topAxis){let x=Ee(y).tickSize(-k+p+a.gridLineStartPadding).tickFormat(Bt(d));if(s!==null){let c=parseInt(s[1],10);if(isNaN(c)||c<=0)nt.warn(`Invalid tick interval value: "${s[1]}". Skipping custom tick interval.`);else{let o=s[2],$=e.db.getWeekday()||a.weekday,M=y.domain(),L=M[0],I=M[1];if(j(L,I,c,o)<=Yt)switch(o){case"millisecond":x.ticks(Zt.every(c));break;case"second":x.ticks(Jt.every(c));break;case"minute":x.ticks(Ut.every(c));break;case"hour":x.ticks(Xt.every(c));break;case"day":x.ticks(Qt.every(c));break;case"week":x.ticks(ee[$].every(c));break;case"month":x.ticks(qt.every(c));break}}}z.append("g").attr("class","grid").attr("transform","translate("+m+", "+p+")").call(x).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}l(E,"makeGrid");function T(m,p){let g=0,k=Object.keys(N).map(r=>[r,N[r]]);z.append("g").selectAll("text").data(k).enter().append(function(r){let u=r[0].split(Ie.lineBreakRegex),d=-(u.length-1)/2,v=W.createElementNS("http://www.w3.org/2000/svg","text");v.setAttribute("dy",d+"em");for(let[s,x]of u.entries()){let c=W.createElementNS("http://www.w3.org/2000/svg","tspan");c.setAttribute("alignment-baseline","central"),c.setAttribute("x","10"),s>0&&c.setAttribute("dy","1em"),c.textContent=x,v.appendChild(c)}return v}).attr("x",10).attr("y",function(r,u){if(u>0)for(let d=0;d<u;d++)return g+=k[u-1][1],r[1]*m/2+g*m+p;else return r[1]*m/2+p}).attr("font-size",a.sectionFontSize).attr("class",function(r){for(let[u,d]of A.entries())if(r[0]===d)return"sectionTitle sectionTitle"+u%a.numberSectionStyles;return"sectionTitle"})}l(T,"vertLabels");function f(m,p,g,k){let r=e.db.getTodayMarker();if(r==="off")return;let u=z.append("g").attr("class","today"),d=new Date,v=u.append("line");v.attr("x1",y(d)+m).attr("x2",y(d)+m).attr("y1",a.titleTopMargin).attr("y2",k-a.titleTopMargin).attr("class","today"),r!==""&&v.attr("style",r.replace(/,/g,";"))}l(f,"drawToday");function C(m){let p={},g=[];for(let k=0,r=m.length;k<r;++k)Object.prototype.hasOwnProperty.call(p,m[k])||(p[m[k]]=!0,g.push(m[k]));return g}l(C,"checkUnique")},"draw"),Is={setConf:Ms,draw:Es},Ls=l(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),Os=Ls,Ws={parser:He,db:Ss,renderer:Is,styles:Os};export{Ws as diagram};
