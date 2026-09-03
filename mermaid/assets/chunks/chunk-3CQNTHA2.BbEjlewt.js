import{m as ee}from"./chunk-RCXAM2GK.D6Ec6rhP.js";import{y as se}from"./chunk-E5GKWUQA.o50LNd0a.js";import{m as p,p as b,e as R,k as ie,N as re,M as ae,C as oe,d as ne,u as le,g as ce,l as he,n as de,ax as ue,S as X,s as pe,i as $t,r as ye,v as fe,x as ge,y as me,B as Se}from"./theme.Ch6kZGlH.js";import{T as ke}from"./chunk-GNBIPJER.CDgfN75A.js";var xt=function(){var t=p(function(P,n,o,m){for(o=o||{},m=P.length;m--;o[P[m]]=n);return o},"o"),e=[1,2],s=[1,3],a=[1,4],i=[2,4],l=[1,9],c=[1,11],d=[1,16],u=[1,17],S=[1,18],f=[1,19],_=[1,33],D=[1,20],O=[1,21],N=[1,22],w=[1,23],B=[1,24],C=[1,26],y=[1,27],I=[1,28],E=[1,29],G=[1,30],F=[1,31],M=[1,32],W=[1,35],at=[1,36],ot=[1,37],nt=[1,38],V=[1,34],g=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],lt=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,39,40,41,45,48,51,52,53,54,57],Lt=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],St={trace:p(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,CLICK:38,STRING:39,HREF:40,classDef:41,CLASSDEF_ID:42,CLASSDEF_STYLEOPTS:43,DEFAULT:44,style:45,STYLE_IDS:46,STYLEDEF_STYLEOPTS:47,class:48,CLASSENTITY_IDS:49,STYLECLASS:50,direction_tb:51,direction_bt:52,direction_rl:53,direction_lr:54,eol:55,";":56,EDGE_STATE:57,STYLE_SEPARATOR:58,left_of:59,right_of:60,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"CLICK",39:"STRING",40:"HREF",41:"classDef",42:"CLASSDEF_ID",43:"CLASSDEF_STYLEOPTS",44:"DEFAULT",45:"style",46:"STYLE_IDS",47:"STYLEDEF_STYLEOPTS",48:"class",49:"CLASSENTITY_IDS",50:"STYLECLASS",51:"direction_tb",52:"direction_bt",53:"direction_rl",54:"direction_lr",56:";",57:"EDGE_STATE",58:"STYLE_SEPARATOR",59:"left_of",60:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[9,5],[9,5],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[55,1],[55,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:p(function(P,n,o,m,k,r,T){var h=r.length-1;switch(k){case 3:return m.setRootDoc(r[h]),r[h];case 4:this.$=[];break;case 5:r[h]!="nl"&&(r[h-1].push(r[h]),this.$=r[h-1]);break;case 6:case 7:this.$=r[h];break;case 8:this.$="nl";break;case 12:this.$=r[h];break;case 13:let dt=r[h-1];dt.description=m.trimColon(r[h]),this.$=dt;break;case 14:this.$={stmt:"relation",state1:r[h-2],state2:r[h]};break;case 15:let ut=m.trimColon(r[h]);this.$={stmt:"relation",state1:r[h-3],state2:r[h-1],description:ut};break;case 19:this.$={stmt:"state",id:r[h-3],type:"default",description:"",doc:r[h-1]};break;case 20:var Y=r[h],J=r[h-2].trim();if(r[h].match(":")){var ht=r[h].split(":");Y=ht[0],J=[J,ht[1]]}this.$={stmt:"state",id:Y,type:"default",description:J};break;case 21:this.$={stmt:"state",id:r[h-3],type:"default",description:r[h-5],doc:r[h-1]};break;case 22:this.$={stmt:"state",id:r[h],type:"fork"};break;case 23:this.$={stmt:"state",id:r[h],type:"join"};break;case 24:this.$={stmt:"state",id:r[h],type:"choice"};break;case 25:this.$={stmt:"state",id:m.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:r[h-1].trim(),note:{position:r[h-2].trim(),text:r[h].trim()}};break;case 29:this.$=r[h].trim(),m.setAccTitle(this.$);break;case 30:case 31:this.$=r[h].trim(),m.setAccDescription(this.$);break;case 32:this.$={stmt:"click",id:r[h-3],url:r[h-2],tooltip:r[h-1]};break;case 33:this.$={stmt:"click",id:r[h-3],url:r[h-1],tooltip:""};break;case 34:case 35:this.$={stmt:"classDef",id:r[h-1].trim(),classes:r[h].trim()};break;case 36:this.$={stmt:"style",id:r[h-1].trim(),styleClass:r[h].trim()};break;case 37:this.$={stmt:"applyClass",id:r[h-1].trim(),styleClass:r[h].trim()};break;case 38:m.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 39:m.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 40:m.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 41:m.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 44:case 45:this.$={stmt:"state",id:r[h].trim(),type:"default",description:""};break;case 46:this.$={stmt:"state",id:r[h-2].trim(),classes:[r[h].trim()],type:"default",description:""};break;case 47:this.$={stmt:"state",id:r[h-2].trim(),classes:[r[h].trim()],type:"default",description:""};break}},"anonymous"),table:[{3:1,4:e,5:s,6:a},{1:[3]},{3:5,4:e,5:s,6:a},{3:6,4:e,5:s,6:a},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,41,45,48,51,52,53,54,57],i,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:l,5:c,8:8,9:10,10:12,11:13,12:14,13:15,16:d,17:u,19:S,22:f,24:_,25:D,26:O,27:N,28:w,29:B,32:25,33:C,35:y,37:I,38:E,41:G,45:F,48:M,51:W,52:at,53:ot,54:nt,57:V},t(g,[2,5]),{9:39,10:12,11:13,12:14,13:15,16:d,17:u,19:S,22:f,24:_,25:D,26:O,27:N,28:w,29:B,32:25,33:C,35:y,37:I,38:E,41:G,45:F,48:M,51:W,52:at,53:ot,54:nt,57:V},t(g,[2,7]),t(g,[2,8]),t(g,[2,9]),t(g,[2,10]),t(g,[2,11]),t(g,[2,12],{14:[1,40],15:[1,41]}),t(g,[2,16]),{18:[1,42]},t(g,[2,18],{20:[1,43]}),{23:[1,44]},t(g,[2,22]),t(g,[2,23]),t(g,[2,24]),t(g,[2,25]),{30:45,31:[1,46],59:[1,47],60:[1,48]},t(g,[2,28]),{34:[1,49]},{36:[1,50]},t(g,[2,31]),{13:51,24:_,57:V},{42:[1,52],44:[1,53]},{46:[1,54]},{49:[1,55]},t(lt,[2,44],{58:[1,56]}),t(lt,[2,45],{58:[1,57]}),t(g,[2,38]),t(g,[2,39]),t(g,[2,40]),t(g,[2,41]),t(g,[2,6]),t(g,[2,13]),{13:58,24:_,57:V},t(g,[2,17]),t(Lt,i,{7:59}),{24:[1,60]},{24:[1,61]},{23:[1,62]},{24:[2,48]},{24:[2,49]},t(g,[2,29]),t(g,[2,30]),{39:[1,63],40:[1,64]},{43:[1,65]},{43:[1,66]},{47:[1,67]},{50:[1,68]},{24:[1,69]},{24:[1,70]},t(g,[2,14],{14:[1,71]}),{4:l,5:c,8:8,9:10,10:12,11:13,12:14,13:15,16:d,17:u,19:S,21:[1,72],22:f,24:_,25:D,26:O,27:N,28:w,29:B,32:25,33:C,35:y,37:I,38:E,41:G,45:F,48:M,51:W,52:at,53:ot,54:nt,57:V},t(g,[2,20],{20:[1,73]}),{31:[1,74]},{24:[1,75]},{39:[1,76]},{39:[1,77]},t(g,[2,34]),t(g,[2,35]),t(g,[2,36]),t(g,[2,37]),t(lt,[2,46]),t(lt,[2,47]),t(g,[2,15]),t(g,[2,19]),t(Lt,i,{7:78}),t(g,[2,26]),t(g,[2,27]),{5:[1,79]},{5:[1,80]},{4:l,5:c,8:8,9:10,10:12,11:13,12:14,13:15,16:d,17:u,19:S,21:[1,81],22:f,24:_,25:D,26:O,27:N,28:w,29:B,32:25,33:C,35:y,37:I,38:E,41:G,45:F,48:M,51:W,52:at,53:ot,54:nt,57:V},t(g,[2,32]),t(g,[2,33]),t(g,[2,21])],defaultActions:{5:[2,1],6:[2,2],47:[2,48],48:[2,49]},parseError:p(function(P,n){if(n.recoverable)this.trace(P);else{var o=new Error(P);throw o.hash=n,o}},"parseError"),parse:p(function(P){var n=this,o=[0],m=[],k=[null],r=[],T=this.table,h="",Y=0,J=0,ht=0,dt=2,ut=1,Zt=r.slice.call(arguments,1),$=Object.create(this.lexer),U={yy:{}};for(var kt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,kt)&&(U.yy[kt]=this.yy[kt]);$.setInput(P,U.yy),U.yy.lexer=$,U.yy.parser=this,typeof $.yylloc>"u"&&($.yylloc={});var bt=$.yylloc;r.push(bt);var Qt=$.options&&$.options.ranges;typeof U.yy.parseError=="function"?this.parseError=U.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function te(L){o.length=o.length-2*L,k.length=k.length-L,r.length=r.length-L}p(te,"popStack");function At(){var L;return L=m.pop()||$.lex()||ut,typeof L!="number"&&(L instanceof Array&&(m=L,L=m.pop()),L=n.symbols_[L]||L),L}p(At,"lex");for(var x,Tt,K,A,Ke,_t,q={},pt,j,Nt,yt;;){if(K=o[o.length-1],this.defaultActions[K]?A=this.defaultActions[K]:((x===null||typeof x>"u")&&(x=At()),A=T[K]&&T[K][x]),typeof A>"u"||!A.length||!A[0]){var Et="";yt=[];for(pt in T[K])this.terminals_[pt]&&pt>dt&&yt.push("'"+this.terminals_[pt]+"'");$.showPosition?Et="Parse error on line "+(Y+1)+`:
`+$.showPosition()+`
Expecting `+yt.join(", ")+", got '"+(this.terminals_[x]||x)+"'":Et="Parse error on line "+(Y+1)+": Unexpected "+(x==ut?"end of input":"'"+(this.terminals_[x]||x)+"'"),this.parseError(Et,{text:$.match,token:this.terminals_[x]||x,line:$.yylineno,loc:bt,expected:yt})}if(A[0]instanceof Array&&A.length>1)throw new Error("Parse Error: multiple actions possible at state: "+K+", token: "+x);switch(A[0]){case 1:o.push(x),k.push($.yytext),r.push($.yylloc),o.push(A[1]),x=null,Tt?(x=Tt,Tt=null):(J=$.yyleng,h=$.yytext,Y=$.yylineno,bt=$.yylloc,ht>0);break;case 2:if(j=this.productions_[A[1]][1],q.$=k[k.length-j],q._$={first_line:r[r.length-(j||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(j||1)].first_column,last_column:r[r.length-1].last_column},Qt&&(q._$.range=[r[r.length-(j||1)].range[0],r[r.length-1].range[1]]),_t=this.performAction.apply(q,[h,J,Y,U.yy,A[1],k,r].concat(Zt)),typeof _t<"u")return _t;j&&(o=o.slice(0,-1*j*2),k=k.slice(0,-1*j),r=r.slice(0,-1*j)),o.push(this.productions_[A[1]][0]),k.push(q.$),r.push(q._$),Nt=T[o[o.length-2]][o[o.length-1]],o.push(Nt);break;case 3:return!0}}return!0},"parse")},qt=function(){var P={EOF:1,parseError:p(function(n,o){if(this.yy.parser)this.yy.parser.parseError(n,o);else throw new Error(n)},"parseError"),setInput:p(function(n,o){return this.yy=o||this.yy||{},this._input=n,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:p(function(){var n=this._input[0];this.yytext+=n,this.yyleng++,this.offset++,this.match+=n,this.matched+=n;var o=n.match(/(?:\r\n?|\n).*/g);return o?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),n},"input"),unput:p(function(n){var o=n.length,m=n.split(/(?:\r\n?|\n)/g);this._input=n+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-o),this.offset-=o;var k=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),m.length-1&&(this.yylineno-=m.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:m?(m.length===k.length?this.yylloc.first_column:0)+k[k.length-m.length].length-m[0].length:this.yylloc.first_column-o},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-o]),this.yyleng=this.yytext.length,this},"unput"),more:p(function(){return this._more=!0,this},"more"),reject:p(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:p(function(n){this.unput(this.match.slice(n))},"less"),pastInput:p(function(){var n=this.matched.substr(0,this.matched.length-this.match.length);return(n.length>20?"...":"")+n.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:p(function(){var n=this.match;return n.length<20&&(n+=this._input.substr(0,20-n.length)),(n.substr(0,20)+(n.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:p(function(){var n=this.pastInput(),o=new Array(n.length+1).join("-");return n+this.upcomingInput()+`
`+o+"^"},"showPosition"),test_match:p(function(n,o){var m,k,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),k=n[0].match(/(?:\r\n?|\n).*/g),k&&(this.yylineno+=k.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:k?k[k.length-1].length-k[k.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+n[0].length},this.yytext+=n[0],this.match+=n[0],this.matches=n,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(n[0].length),this.matched+=n[0],m=this.performAction.call(this,this.yy,this,o,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),m)return m;if(this._backtrack){for(var T in r)this[T]=r[T];return!1}return!1},"test_match"),next:p(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var n,o,m,k;this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),T=0;T<r.length;T++)if(m=this._input.match(this.rules[r[T]]),m&&(!o||m[0].length>o[0].length)){if(o=m,k=T,this.options.backtrack_lexer){if(n=this.test_match(m,r[T]),n!==!1)return n;if(this._backtrack){o=!1;continue}else return!1}else if(!this.options.flex)break}return o?(n=this.test_match(o,r[k]),n!==!1?n:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:p(function(){var n=this.next();return n||this.lex()},"lex"),begin:p(function(n){this.conditionStack.push(n)},"begin"),popState:p(function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:p(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:p(function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:"INITIAL"},"topState"),pushState:p(function(n){this.begin(n)},"pushState"),stateStackSize:p(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:p(function(n,o,m,k){function r(){let T=o.yytext.indexOf("%%");if(T===0)return!1;if(T>0){let h=o.yytext.slice(0,T),Y=o.yytext.slice(T);Y&&n.lexer.unput(Y),o.yytext=h}return!0}switch(p(r,"processId"),m){case 0:return 38;case 1:return 40;case 2:return 39;case 3:return 44;case 4:return 51;case 5:return 52;case 6:return 53;case 7:return 54;case 8:return 5;case 9:break;case 10:break;case 11:break;case 12:break;case 13:return this.pushState("SCALE"),17;case 14:return 18;case 15:this.popState();break;case 16:return this.begin("acc_title"),33;case 17:return this.popState(),"acc_title_value";case 18:return this.begin("acc_descr"),35;case 19:return this.popState(),"acc_descr_value";case 20:this.begin("acc_descr_multiline");break;case 21:this.popState();break;case 22:return"acc_descr_multiline_value";case 23:return this.pushState("CLASSDEF"),41;case 24:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";case 25:return this.popState(),this.pushState("CLASSDEFID"),42;case 26:return this.popState(),43;case 27:return this.pushState("CLASS"),48;case 28:return this.popState(),this.pushState("CLASS_STYLE"),49;case 29:return this.popState(),50;case 30:return this.pushState("STYLE"),45;case 31:return this.popState(),this.pushState("STYLEDEF_STYLES"),46;case 32:return this.popState(),47;case 33:return this.pushState("SCALE"),17;case 34:return 18;case 35:this.popState();break;case 36:this.pushState("STATE");break;case 37:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),25;case 38:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),26;case 39:return this.popState(),o.yytext=o.yytext.slice(0,-10).trim(),27;case 40:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),25;case 41:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),26;case 42:return this.popState(),o.yytext=o.yytext.slice(0,-10).trim(),27;case 43:return 51;case 44:return 52;case 45:return 53;case 46:return 54;case 47:this.pushState("STATE_STRING");break;case 48:return this.pushState("STATE_ID"),"AS";case 49:return r()?(this.popState(),"ID"):void 0;case 50:this.popState();break;case 51:return"STATE_DESCR";case 52:throw new Error('Error: State name must be a single word. Found: "'+o.yytext.trim()+'"');case 53:return 19;case 54:this.popState();break;case 55:return this.popState(),this.pushState("struct"),20;case 56:return this.popState(),21;case 57:break;case 58:return this.begin("NOTE"),29;case 59:return this.popState(),this.pushState("NOTE_ID"),59;case 60:return this.popState(),this.pushState("NOTE_ID"),60;case 61:this.popState(),this.pushState("FLOATING_NOTE");break;case 62:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";case 63:break;case 64:return"NOTE_TEXT";case 65:return r()?(this.popState(),"ID"):void 0;case 66:return r()?(this.popState(),this.pushState("NOTE_TEXT"),24):void 0;case 67:return this.popState(),o.yytext=o.yytext.substr(2).trim(),31;case 68:return this.popState(),o.yytext=o.yytext.slice(0,-8).trim(),31;case 69:return 6;case 70:return 6;case 71:return 16;case 72:return 57;case 73:return r()?24:void 0;case 74:return o.yytext=o.yytext.trim(),14;case 75:return 15;case 76:return 28;case 77:return 58;case 78:return 5;case 79:return"INVALID"}},"anonymous"),rules:[/^(?:click\b)/i,/^(?:href\b)/i,/^(?:"[^"]*")/i,/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\w+\s+\w+.*?\{)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?\n\s*end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:(?:[^:\n;]|:[^:\n;])+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[10,11,12],inclusive:!1},struct:{rules:[10,11,12,23,27,30,36,43,44,45,46,56,57,58,72,73,74,75,76,77],inclusive:!1},FLOATING_NOTE_ID:{rules:[65],inclusive:!1},FLOATING_NOTE:{rules:[62,63,64],inclusive:!1},NOTE_TEXT:{rules:[67,68],inclusive:!1},NOTE_ID:{rules:[66],inclusive:!1},NOTE:{rules:[59,60,61],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[32],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[31],inclusive:!1},CLASS_STYLE:{rules:[29],inclusive:!1},CLASS:{rules:[28],inclusive:!1},CLASSDEFID:{rules:[26],inclusive:!1},CLASSDEF:{rules:[24,25],inclusive:!1},acc_descr_multiline:{rules:[21,22],inclusive:!1},acc_descr:{rules:[19],inclusive:!1},acc_title:{rules:[17],inclusive:!1},SCALE:{rules:[14,15,34,35],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[49],inclusive:!1},STATE_STRING:{rules:[50,51],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[10,11,12,37,38,39,40,41,42,47,48,52,53,54,55],inclusive:!1},ID:{rules:[10,11,12],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,11,12,13,16,18,20,23,27,30,33,36,55,58,69,70,71,72,73,74,75,77,78,79],inclusive:!0}}};return P}();St.lexer=qt;function ct(){this.yy={}}return p(ct,"Parser"),ct.prototype=St,St.Parser=ct,new ct}();xt.parser=xt;var qe=xt,Q="state",Z="root",vt="relation",be="classDef",Te="style",_e="applyClass",it="default",Yt="divider",Gt="fill:none",jt="fill: #333",Mt="markdown",Wt="normal",Dt="rect",Ct="rectWithTitle",Ee="stateStart",$e="stateEnd",wt="divider",Rt="roundedWithTitle",De="note",Ce="noteGroup",rt="statediagram",xe="state",ve=`${rt}-${xe}`,zt="transition",we="note",Ie="note-edge",Le=`${zt} ${Ie}`,Ae=`${rt}-${we}`,Ne="cluster",Re=`${rt}-${Ne}`,Oe="cluster-alt",Be=`${rt}-${Oe}`,Ut="parent",Kt="note",Fe="state",It="----",Pe=`${It}${Kt}`,Ot=`${It}${Ut}`,Xt=p((t,e="TB")=>{if(!t.doc)return e;let s=e;for(let a of t.doc)a.stmt==="dir"&&(s=a.value);return s},"getDir"),Ye=p(function(t,e){return e.db.getClasses()},"getClasses"),Ge=p(async function(t,e,s,a){b.info("REF0:"),b.info("Drawing state diagram (v2)",e);let{securityLevel:i,state:l,layout:c}=R();a.db.extract(a.db.getRootDocV2());let d=a.db.getData(),u=ee(e,i);d.type=a.type,d.layoutAlgorithm=ie(c),d.nodeSpacing=(l==null?void 0:l.nodeSpacing)||50,d.rankSpacing=(l==null?void 0:l.rankSpacing)||50,R().look==="neo"?d.markers=["barbNeo"]:d.markers=["barb"],d.diagramId=e,await re(d,u);let S=8;try{(typeof a.db.getLinks=="function"?a.db.getLinks():new Map).forEach((f,_)=>{var I;let D=typeof _=="string"?_:typeof(_==null?void 0:_.id)=="string"?_.id:"",O=d.nodes.find(E=>E.id===D);if(!D){b.warn("⚠️ Invalid or missing stateId from key:",JSON.stringify(_));return}let N=(I=u.node())==null?void 0:I.querySelectorAll("g.node, g.rough-node"),w;if(N==null||N.forEach(E=>{var F;let G=(F=E.textContent)==null?void 0:F.trim();(E.id===(O==null?void 0:O.domId)||G===D)&&(w=E)}),!w){b.warn("⚠️ Could not find node matching text:",D);return}let B=w.parentNode;if(!B){b.warn("⚠️ Node has no parent, cannot wrap:",D);return}let C=document.createElementNS("http://www.w3.org/2000/svg","a"),y=f.url.replace(/^"+|"+$/g,"");if(C.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",y),C.setAttribute("target","_blank"),f.tooltip){let E=f.tooltip.replace(/^"+|"+$/g,"");C.setAttribute("title",E),w.setAttribute("title",E)}B.replaceChild(C,w),C.appendChild(w),b.info("🔗 Wrapped node in <a> tag for:",D,f.url)})}catch(f){b.error("❌ Error injecting clickable links:",f)}ae.insertTitle(u,"statediagramTitleText",(l==null?void 0:l.titleTopMargin)??25,a.db.getDiagramTitle()),se(u,S,rt,(l==null?void 0:l.useMaxWidth)??!0)},"draw"),Ze={getClasses:Ye,draw:Ge,getDir:Xt},gt=new Map,z=0,Ht=0,tt=new Map,je=p((t,e,s,a)=>{if(t===wt&&(s==null?void 0:s.id)!==void 0&&tt.has(s.id)){let c=tt.get(s.id);return tt.set(e,c),c}let i=Ht++,l=a?void 0:i;return tt.set(e,l),l},"colorSlotFor");function mt(t="",e=0,s="",a=It){let i=s!==null&&s.length>0?`${a}${s}`:"";return`${Fe}-${t}${i}-${e}`}p(mt,"stateDomId");var Me=p((t,e,s,a,i,l,c,d)=>{b.trace("items",e),e.forEach(u=>{switch(u.stmt){case Q:st(t,u,s,a,i,l,c,d);break;case it:st(t,u,s,a,i,l,c,d);break;case vt:{st(t,u.state1,s,a,i,l,c,d),st(t,u.state2,s,a,i,l,c,d);let S=c==="neo",f={id:"edge"+z,start:u.state1.id,end:u.state2.id,arrowhead:"normal",arrowTypeEnd:S?"arrow_barb_neo":"arrow_barb",style:Gt,labelStyle:"",label:X.sanitizeText(u.description??"",R()),arrowheadStyle:jt,labelpos:"c",labelType:Mt,thickness:Wt,classes:zt,look:c};i.push(f),z++}break}})},"setupDoc"),Bt=p((t,e="TB")=>{let s=e;if(t.doc)for(let a of t.doc)a.stmt==="dir"&&(s=a.value);return s},"getDir");function et(t,e,s){if(!e.id||e.id==="</join></fork>"||e.id==="</choice>")return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(i=>{let l=s.get(i);l&&(e.cssCompiledStyles=[...e.cssCompiledStyles??[],...l.styles])}));let a=t.find(i=>i.id===e.id);a?Object.assign(a,e):t.push(e)}p(et,"insertOrUpdateNode");function Vt(t){var e;return((e=t==null?void 0:t.classes)==null?void 0:e.join(" "))??""}p(Vt,"getClassesFromDbInfo");function Jt(t){return(t==null?void 0:t.styles)??[]}p(Jt,"getStylesFromDbInfo");var st=p((t,e,s,a,i,l,c,d)=>{var N,w,B;let u=e.id,S=s.get(u),f=Vt(S),_=Jt(S),D=R(),O=f.trim()!==""||_.length>0;if(b.info("dataFetcher parsedItem",e,S,_),u!=="root"){let C=Dt;e.start===!0?C=Ee:e.start===!1&&(C=$e),e.type!==it&&(C=e.type),gt.get(u)||gt.set(u,{id:u,shape:C,description:X.sanitizeText(u,D),cssClasses:`${f} ${ve}`,cssStyles:_});let y=gt.get(u);e.description&&(Array.isArray(y.description)?(y.shape=Ct,y.description.push(e.description)):(N=y.description)!=null&&N.length&&y.description.length>0?(y.shape=Ct,y.description===u?y.description=[e.description]:y.description=[y.description,e.description]):(y.shape=Dt,y.description=e.description),y.description=X.sanitizeTextOrArray(y.description,D)),((w=y.description)==null?void 0:w.length)===1&&y.shape===Ct&&(y.type==="group"?y.shape=Rt:y.shape=Dt),!y.type&&e.doc&&(b.info("Setting cluster for XCX",u,Bt(e)),y.type="group",y.isGroup=!0,y.dir=Bt(e),y.shape=e.type===Yt?wt:Rt,y.colorIndex=je(y.shape,u,t,O),y.cssClasses=`${y.cssClasses} ${Re} ${l?Be:""}`);let I={labelStyle:"",shape:y.shape,label:y.description,cssClasses:y.cssClasses,cssCompiledStyles:[],cssStyles:y.cssStyles,id:u,dir:y.dir,domId:mt(u,z),type:y.type,isGroup:y.type==="group",colorIndex:y.colorIndex,padding:8,rx:10,ry:10,look:c,labelType:"markdown"};if(I.shape===wt&&(I.label=""),t&&t.id!=="root"&&(b.trace("Setting node ",u," to be child of its parent ",t.id),I.parentId=t.id),I.centerLabel=!0,e.note){let E={labelStyle:"",shape:De,label:e.note.text,labelType:"markdown",cssClasses:Ae,cssStyles:[],cssCompiledStyles:[],id:u+Pe+"-"+z,domId:mt(u,z,Kt),type:y.type,isGroup:y.type==="group",padding:(B=D.flowchart)==null?void 0:B.padding,look:c,position:e.note.position},G=u+Ot,F={labelStyle:"",shape:Ce,label:e.note.text,cssClasses:y.cssClasses,cssStyles:[],id:u+Ot,domId:mt(u,z,Ut),type:"group",isGroup:!0,padding:16,look:c,position:e.note.position};z++,F.id=G,E.parentId=G,et(a,F,d),et(a,E,d),et(a,I,d);let M=u,W=E.id;e.note.position==="left of"&&(M=E.id,W=u),i.push({id:M+"-"+W,start:M,end:W,arrowhead:"none",arrowTypeEnd:"",style:Gt,labelStyle:"",classes:Le,pattern:"dashed",arrowheadStyle:jt,labelpos:"c",labelType:Mt,thickness:Wt,look:c})}else et(a,I,d)}e.doc&&(b.trace("Adding nodes children "),Me(e,e.doc,s,a,i,!l,c,d))},"dataFetcher"),We=p(()=>{gt.clear(),z=0,Ht=0,tt.clear()},"reset"),v={START_NODE:"[*]",START_TYPE:"start",END_NODE:"[*]",END_TYPE:"end",COLOR_KEYWORD:"color",FILL_KEYWORD:"fill",BG_FILL:"bgFill",STYLECLASS_SEP:","},Ft=p(()=>new Map,"newClassesList"),Pt=p(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),ft=p(t=>JSON.parse(JSON.stringify(t)),"clone"),H,Qe=(H=class{constructor(e){this.version=e,this.nodes=[],this.edges=[],this.rootDoc=[],this.classes=Ft(),this.documents={root:Pt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.dividerCnt=0,this.links=new Map,this.funs=[],this.getAccTitle=oe,this.setAccTitle=ne,this.getAccDescription=le,this.setAccDescription=ce,this.setDiagramTitle=he,this.getDiagramTitle=de,this.clear(),this.setRootDoc=this.setRootDoc.bind(this),this.getDividerId=this.getDividerId.bind(this),this.setDirection=this.setDirection.bind(this),this.trimColon=this.trimColon.bind(this),this.bindFunctions=this.bindFunctions.bind(this)}extract(e){this.clear(!0);for(let i of Array.isArray(e)?e:e.doc)switch(i.stmt){case Q:this.addState(i.id.trim(),i.type,i.doc,i.description,i.note);break;case vt:this.addRelation(i.state1,i.state2,i.description);break;case be:this.addStyleClass(i.id.trim(),i.classes);break;case Te:this.handleStyleDef(i);break;case _e:this.setCssClass(i.id.trim(),i.styleClass);break;case"click":this.addLink(i.id,i.url,i.tooltip);break}let s=this.getStates(),a=R();We(),st(void 0,this.getRootDocV2(),s,this.nodes,this.edges,!0,a.look,this.classes);for(let i of this.nodes)if(Array.isArray(i.label)){if(i.description=i.label.slice(1),i.isGroup&&i.description.length>0)throw new Error(`Group nodes can only have label. Remove the additional description for node [${i.id}]`);i.label=i.label[0]}}handleStyleDef(e){let s=e.id.trim().split(","),a=e.styleClass.split(",");for(let i of s){let l=this.getState(i);if(!l){let c=i.trim();this.addState(c),l=this.getState(c)}l&&(l.styles=a.map(c=>{var d;return(d=c.replace(/;/g,""))==null?void 0:d.trim()}))}}setRootDoc(e){b.info("Setting root doc",e),this.rootDoc=e,this.version===1?this.extract(e):this.extract(this.getRootDocV2())}docTranslator(e,s,a){if(s.stmt===vt){this.docTranslator(e,s.state1,!0),this.docTranslator(e,s.state2,!1);return}if(s.stmt===Q&&(s.id===v.START_NODE?(s.id=e.id+(a?"_start":"_end"),s.start=a):s.id=s.id.trim()),s.stmt!==Z&&s.stmt!==Q||!s.doc)return;let i=[],l=[];for(let c of s.doc)if(c.type===Yt){let d=ft(c);d.doc=ft(l),i.push(d),l=[]}else l.push(c);if(i.length>0&&l.length>0){let c={stmt:Q,id:ue(),type:"divider",doc:ft(l)};i.push(ft(c)),s.doc=i}s.doc.forEach(c=>this.docTranslator(s,c,!0))}getRootDocV2(){return this.docTranslator({id:Z,stmt:Z},{id:Z,stmt:Z,doc:this.rootDoc},!0),{id:Z,doc:this.rootDoc}}addState(e,s=it,a=void 0,i=void 0,l=void 0,c=void 0,d=void 0,u=void 0){let S=e==null?void 0:e.trim();if(!this.currentDocument.states.has(S))b.info("Adding state ",S,i),this.currentDocument.states.set(S,{stmt:Q,id:S,descriptions:[],type:s,doc:a,note:l,classes:[],styles:[],textStyles:[]});else{let f=this.currentDocument.states.get(S);if(!f)throw new Error(`State not found: ${S}`);f.doc||(f.doc=a),f.type||(f.type=s)}if(i&&(b.info("Setting state description",S,i),(Array.isArray(i)?i:[i]).forEach(f=>this.addDescription(S,f.trim()))),l){let f=this.currentDocument.states.get(S);if(!f)throw new Error(`State not found: ${S}`);f.note=l,f.note.text=X.sanitizeText(f.note.text,R())}c&&(b.info("Setting state classes",S,c),(Array.isArray(c)?c:[c]).forEach(f=>this.setCssClass(S,f.trim()))),d&&(b.info("Setting state styles",S,d),(Array.isArray(d)?d:[d]).forEach(f=>this.setStyle(S,f.trim()))),u&&(b.info("Setting state styles",S,d),(Array.isArray(u)?u:[u]).forEach(f=>this.setTextStyle(S,f.trim())))}clear(e){this.nodes=[],this.edges=[],this.funs=[this.setupToolTips.bind(this)],this.documents={root:Pt()},this.currentDocument=this.documents.root,this.startEndCount=0,this.classes=Ft(),e||(this.links=new Map,pe())}getState(e){return this.currentDocument.states.get(e)}getStates(){return this.currentDocument.states}logDocuments(){b.info("Documents = ",this.documents)}getRelations(){return this.currentDocument.relations}addLink(e,s,a){this.links.set(e,{url:s,tooltip:a}),b.warn("Adding link",e,s,a)}getLinks(){return this.links}startIdIfNeeded(e=""){return e===v.START_NODE?(this.startEndCount++,`${v.START_TYPE}${this.startEndCount}`):e}startTypeIfNeeded(e="",s=it){return e===v.START_NODE?v.START_TYPE:s}endIdIfNeeded(e=""){return e===v.END_NODE?(this.startEndCount++,`${v.END_TYPE}${this.startEndCount}`):e}endTypeIfNeeded(e="",s=it){return e===v.END_NODE?v.END_TYPE:s}addRelationObjs(e,s,a=""){let i=this.startIdIfNeeded(e.id.trim()),l=this.startTypeIfNeeded(e.id.trim(),e.type),c=this.startIdIfNeeded(s.id.trim()),d=this.startTypeIfNeeded(s.id.trim(),s.type);this.addState(i,l,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),this.addState(c,d,s.doc,s.description,s.note,s.classes,s.styles,s.textStyles),this.currentDocument.relations.push({id1:i,id2:c,relationTitle:X.sanitizeText(a,R())})}addRelation(e,s,a){if(typeof e=="object"&&typeof s=="object")this.addRelationObjs(e,s,a);else if(typeof e=="string"&&typeof s=="string"){let i=this.startIdIfNeeded(e.trim()),l=this.startTypeIfNeeded(e),c=this.endIdIfNeeded(s.trim()),d=this.endTypeIfNeeded(s);this.addState(i,l),this.addState(c,d),this.currentDocument.relations.push({id1:i,id2:c,relationTitle:a?X.sanitizeText(a,R()):void 0})}}addDescription(e,s){var l;let a=this.currentDocument.states.get(e),i=s.startsWith(":")?s.replace(":","").trim():s;(l=a==null?void 0:a.descriptions)==null||l.push(X.sanitizeText(i,R()))}cleanupLabel(e){return e.startsWith(":")?e.slice(2).trim():e.trim()}getDividerId(){return this.dividerCnt++,`divider-id-${this.dividerCnt}`}addStyleClass(e,s=""){this.classes.has(e)||this.classes.set(e,{id:e,styles:[],textStyles:[]});let a=this.classes.get(e);s&&a&&s.split(v.STYLECLASS_SEP).forEach(i=>{let l=i.replace(/([^;]*);/,"$1").trim();if(RegExp(v.COLOR_KEYWORD).exec(i)){let c=l.replace(v.FILL_KEYWORD,v.BG_FILL).replace(v.COLOR_KEYWORD,v.FILL_KEYWORD);a.textStyles.push(c)}a.styles.push(l)})}getClasses(){return this.classes}setupToolTips(e){let s=ke();$t(e).select("svg").selectAll("g.node, g.rough-node").on("mouseover",a=>{var d;let i=$t(a.currentTarget),l=i.attr("title");if(l===null)return;let c=(d=a.currentTarget)==null?void 0:d.getBoundingClientRect();s.transition().duration(200).style("opacity",".9"),s.style("left",window.scrollX+c.left+(c.right-c.left)/2+"px").style("top",window.scrollY+c.bottom+"px"),s.html(ye.sanitize(l)),i.classed("hover",!0)}).on("mouseout",a=>{s.transition().duration(500).style("opacity",0),$t(a.currentTarget).classed("hover",!1)})}setCssClass(e,s){e.split(",").forEach(a=>{var l;let i=this.getState(a);if(!i){let c=a.trim();this.addState(c),i=this.getState(c)}(l=i==null?void 0:i.classes)==null||l.push(s)})}setStyle(e,s){var a,i;(i=(a=this.getState(e))==null?void 0:a.styles)==null||i.push(s)}setTextStyle(e,s){var a,i;(i=(a=this.getState(e))==null?void 0:a.textStyles)==null||i.push(s)}bindFunctions(e){this.funs.forEach(s=>{s(e)})}getDirectionStatement(){return this.rootDoc.find(e=>e.stmt==="dir")}getDirection(){var e;return((e=this.getDirectionStatement())==null?void 0:e.value)??"TB"}setDirection(e){let s=this.getDirectionStatement();s?s.value=e:this.rootDoc.unshift({stmt:"dir",value:e})}trimColon(e){return e.startsWith(":")?e.slice(1).trim():e.trim()}getData(){let e=R();return{nodes:this.nodes,edges:this.edges,other:{},config:e,direction:Xt(this.getRootDocV2())}}getConfig(){return R().state}},p(H,"StateDB"),H.relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},H),ze=p(t=>{let{theme:e,bkgColorArray:s,borderColorArray:a}=t;if(!fe(e,a))return"";let i=ge(t.look),l=me(s),c="";for(let d=0;d<Se(a);d++){let u=a[d],S=l?`fill: ${s[d%s.length]};`:"",f=`[data-look="${i}"][data-color-id="color-${d}"]`;c+=`

    /* The title strip: \`rect.outer\` spans the whole composite and \`rect.inner\` covers
       the body, so what stays visible of \`outer\` is the band behind the label. */
    ${f}.statediagram-cluster rect.outer {
      stroke: ${u};
      ${S}
    }

    ${f}.statediagram-cluster rect.inner {
      stroke: ${u};
    }

    /* Concurrency regions. Siblings of one composite share a slot, so a divided composite
       reads as one thing split into parts rather than as several composites. */
    ${f}.statediagram-cluster rect.divider {
      stroke: ${u};
      ${S}
    }

    /* handDrawn draws the same container as roughjs shapes rather than plain rects, so it
       needs its own rules. \`roundedWithTitle\` and \`divider\` name those groups \`outer\`,
       \`inner\` and \`divider\` to match the classic branch, which is what lets these
       discriminate -- a bare \`.statediagram-cluster path\` rule reached the body as well and
       tinted the whole composite, losing \`compositeBackground\` and diverging from what
       classic and neo do.

       roughjs emits two paths per shape and marks them: the filled shape carries
       \`stroke="none"\` and the sketched outline carries \`fill="none"\`. Splitting on that is
       what keeps \`fill\` off the outline -- a rough outline is open squiggles, not a closed
       region, so filling it produces smears -- and keeps \`stroke\` off the fill shape, which
       would otherwise gain an edge it was drawn without. */
    ${f}.statediagram-cluster .outer path[stroke='none'] {
      ${S}
    }

    ${f}.statediagram-cluster .outer path[fill='none'] {
      stroke: ${u};
    }

    /* No \`.inner\` rule on purpose. The body shape is left entirely alone under handDrawn,
       where a rect's \`inner\` counterpart cannot be recoloured safely: roughjs draws a
       hachure fill as *stroked* lines, so its fill paths carry \`fill="none"\` exactly like
       the outline and no selector separates them. An \`.inner\` stroke rule therefore
       repainted the hatching of every alt composite in the palette colour instead of
       leaving it on \`altBackground\`. The container still reads as palette-coloured: the
       \`outer\` shape spans the whole composite, so its outline already frames the body. */

    /* Regions split the same way, which is why \`divider\` fills solid rather than taking
       roughjs's default hachure -- see the note on that call. Hatched, both of its paths
       carried \`fill="none"\` and these two rules degenerated: the tint matched nothing and
       the border rule repainted the hatching. */
    ${f}.statediagram-cluster .divider path[stroke='none'] {
      ${S}
    }

    ${f}.statediagram-cluster .divider path[fill='none'] {
      stroke: ${u};
    }
    `}return c},"genColor"),Ue=p(t=>`
${ze(t)}
defs [id$="-barbEnd"] {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: ${t.strokeWidth||1};
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: ${t.strokeWidth||1};
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: ${t.strokeWidth||1}px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: ${t.strokeWidth||1}px;
}
[id$="-barbEnd"] {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: ${t.strokeWidth||1}px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

[id$="-dependencyStart"], [id$="-dependencyEnd"] {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: ${t.strokeWidth||1};
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}

[data-look="neo"].statediagram-cluster rect {
  fill: ${t.mainBkg};
  stroke: ${t.useGradient?"url("+t.svgId+"-gradient)":t.stateBorder||t.nodeBorder};
  stroke-width: ${t.strokeWidth??1};
}
[data-look="neo"].statediagram-cluster rect.outer {
  rx: ${t.radius}px;
  ry: ${t.radius}px;
  filter: ${t.dropShadow?t.dropShadow.replace("url(#drop-shadow)",`url(${t.svgId}-drop-shadow)`):"none"}
}
`,"getStyles"),ts=Ue;export{ts as N,qe as Q,Qe as R,Ze as c};
