if(!document.createElement("canvas").getContext){(function(){var z=Math;var K=z.round;var J=z.sin;var U=z.cos;var b=z.abs;var k=z.sqrt;var D=10;var F=D/2;function T(){return this.context_||(this.context_=new W(this))}var O=Array.prototype.slice;function G(i,j,m){var Z=O.call(arguments,2);return function(){return i.apply(j,Z.concat(O.call(arguments)))}}function AD(Z){return String(Z).replace(/&/g,"&amp;").replace(/"/g,"&quot;")}function r(i){if(!i.namespaces.g_vml_){i.namespaces.add("g_vml_","urn:schemas-microsoft-com:vml","#default#VML")}if(!i.namespaces.g_o_){i.namespaces.add("g_o_","urn:schemas-microsoft-com:office:office","#default#VML")}if(!i.styleSheets.ex_canvas_){var Z=i.createStyleSheet();Z.owningElement.id="ex_canvas_";Z.cssText="canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"}}r(document);var E={init:function(Z){if(/MSIE/.test(navigator.userAgent)&&!window.opera){var i=Z||document;i.createElement("canvas");i.attachEvent("onreadystatechange",G(this.init_,this,i))}},init_:function(m){var j=m.getElementsByTagName("canvas");for(var Z=0;Z<j.length;Z++){this.initElement(j[Z])}},initElement:function(i){if(!i.getContext){i.getContext=T;r(i.ownerDocument);i.innerHTML="";i.attachEvent("onpropertychange",S);i.attachEvent("onresize",w);var Z=i.attributes;if(Z.width&&Z.width.specified){i.style.width=Z.width.nodeValue+"px"}else{i.width=i.clientWidth}if(Z.height&&Z.height.specified){i.style.height=Z.height.nodeValue+"px"}else{i.height=i.clientHeight}}return i}};function S(i){var Z=i.srcElement;switch(i.propertyName){case"width":Z.getContext().clearRect();Z.style.width=Z.attributes.width.nodeValue+"px";Z.firstChild.style.width=Z.clientWidth+"px";break;case"height":Z.getContext().clearRect();Z.style.height=Z.attributes.height.nodeValue+"px";Z.firstChild.style.height=Z.clientHeight+"px";break}}function w(i){var Z=i.srcElement;if(Z.firstChild){Z.firstChild.style.width=Z.clientWidth+"px";Z.firstChild.style.height=Z.clientHeight+"px"}}E.init();var I=[];for(var AC=0;AC<16;AC++){for(var AB=0;AB<16;AB++){I[AC*16+AB]=AC.toString(16)+AB.toString(16)}}function V(){return[[1,0,0],[0,1,0],[0,0,1]]}function d(m,j){var i=V();for(var Z=0;Z<3;Z++){for(var AF=0;AF<3;AF++){var p=0;for(var AE=0;AE<3;AE++){p+=m[Z][AE]*j[AE][AF]}i[Z][AF]=p}}return i}function Q(i,Z){Z.fillStyle=i.fillStyle;Z.lineCap=i.lineCap;Z.lineJoin=i.lineJoin;Z.lineWidth=i.lineWidth;Z.miterLimit=i.miterLimit;Z.shadowBlur=i.shadowBlur;Z.shadowColor=i.shadowColor;Z.shadowOffsetX=i.shadowOffsetX;Z.shadowOffsetY=i.shadowOffsetY;Z.strokeStyle=i.strokeStyle;Z.globalAlpha=i.globalAlpha;Z.font=i.font;Z.textAlign=i.textAlign;Z.textBaseline=i.textBaseline;Z.arcScaleX_=i.arcScaleX_;Z.arcScaleY_=i.arcScaleY_;Z.lineScale_=i.lineScale_}var B={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",grey:"#808080",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",oldlace:"#FDF5E6",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",whitesmoke:"#F5F5F5",yellowgreen:"#9ACD32"};function g(i){var m=i.indexOf("(",3);var Z=i.indexOf(")",m+1);var j=i.substring(m+1,Z).split(",");if(j.length==4&&i.substr(3,1)=="a"){alpha=Number(j[3])}else{j[3]=1}return j}function C(Z){return parseFloat(Z)/100}function N(i,j,Z){return Math.min(Z,Math.max(j,i))}function c(AF){var j,i,Z;h=parseFloat(AF[0])/360%360;if(h<0){h++}s=N(C(AF[1]),0,1);l=N(C(AF[2]),0,1);if(s==0){j=i=Z=l}else{var m=l<0.5?l*(1+s):l+s-l*s;var AE=2*l-m;j=A(AE,m,h+1/3);i=A(AE,m,h);Z=A(AE,m,h-1/3)}return"#"+I[Math.floor(j*255)]+I[Math.floor(i*255)]+I[Math.floor(Z*255)]}function A(i,Z,j){if(j<0){j++}if(j>1){j--}if(6*j<1){return i+(Z-i)*6*j}else{if(2*j<1){return Z}else{if(3*j<2){return i+(Z-i)*(2/3-j)*6}else{return i}}}}function Y(Z){var AE,p=1;Z=String(Z);if(Z.charAt(0)=="#"){AE=Z}else{if(/^rgb/.test(Z)){var m=g(Z);var AE="#",AF;for(var j=0;j<3;j++){if(m[j].indexOf("%")!=-1){AF=Math.floor(C(m[j])*255)}else{AF=Number(m[j])}AE+=I[N(AF,0,255)]}p=m[3]}else{if(/^hsl/.test(Z)){var m=g(Z);AE=c(m);p=m[3]}else{AE=B[Z]||Z}}}return{color:AE,alpha:p}}var L={style:"normal",variant:"normal",weight:"normal",size:10,family:"sans-serif"};var f={};function X(Z){if(f[Z]){return f[Z]}var m=document.createElement("div");var j=m.style;try{j.font=Z}catch(i){}return f[Z]={style:j.fontStyle||L.style,variant:j.fontVariant||L.variant,weight:j.fontWeight||L.weight,size:j.fontSize||L.size,family:j.fontFamily||L.family}}function P(j,i){var Z={};for(var AF in j){Z[AF]=j[AF]}var AE=parseFloat(i.currentStyle.fontSize),m=parseFloat(j.size);if(typeof j.size=="number"){Z.size=j.size}else{if(j.size.indexOf("px")!=-1){Z.size=m}else{if(j.size.indexOf("em")!=-1){Z.size=AE*m}else{if(j.size.indexOf("%")!=-1){Z.size=(AE/100)*m}else{if(j.size.indexOf("pt")!=-1){Z.size=m/0.75}else{Z.size=AE}}}}}Z.size*=0.981;return Z}function AA(Z){return Z.style+" "+Z.variant+" "+Z.weight+" "+Z.size+"px "+Z.family}function t(Z){switch(Z){case"butt":return"flat";case"round":return"round";case"square":default:return"square"}}function W(i){this.m_=V();this.mStack_=[];this.aStack_=[];this.currentPath_=[];this.strokeStyle="#000";this.fillStyle="#000";this.lineWidth=1;this.lineJoin="miter";this.lineCap="butt";this.miterLimit=D*1;this.globalAlpha=1;this.font="10px sans-serif";this.textAlign="left";this.textBaseline="alphabetic";this.canvas=i;var Z=i.ownerDocument.createElement("div");Z.style.width=i.clientWidth+"px";Z.style.height=i.clientHeight+"px";Z.style.overflow="hidden";Z.style.position="absolute";i.appendChild(Z);this.element_=Z;this.arcScaleX_=1;this.arcScaleY_=1;this.lineScale_=1}var M=W.prototype;M.clearRect=function(){if(this.textMeasureEl_){this.textMeasureEl_.removeNode(true);this.textMeasureEl_=null}this.element_.innerHTML=""};M.beginPath=function(){this.currentPath_=[]};M.moveTo=function(i,Z){var j=this.getCoords_(i,Z);this.currentPath_.push({type:"moveTo",x:j.x,y:j.y});this.currentX_=j.x;this.currentY_=j.y};M.lineTo=function(i,Z){var j=this.getCoords_(i,Z);this.currentPath_.push({type:"lineTo",x:j.x,y:j.y});this.currentX_=j.x;this.currentY_=j.y};M.bezierCurveTo=function(j,i,AI,AH,AG,AE){var Z=this.getCoords_(AG,AE);var AF=this.getCoords_(j,i);var m=this.getCoords_(AI,AH);e(this,AF,m,Z)};function e(Z,m,j,i){Z.currentPath_.push({type:"bezierCurveTo",cp1x:m.x,cp1y:m.y,cp2x:j.x,cp2y:j.y,x:i.x,y:i.y});Z.currentX_=i.x;Z.currentY_=i.y}M.quadraticCurveTo=function(AG,j,i,Z){var AF=this.getCoords_(AG,j);var AE=this.getCoords_(i,Z);var AH={x:this.currentX_+2/3*(AF.x-this.currentX_),y:this.currentY_+2/3*(AF.y-this.currentY_)};var m={x:AH.x+(AE.x-this.currentX_)/3,y:AH.y+(AE.y-this.currentY_)/3};e(this,AH,m,AE)};M.arc=function(AJ,AH,AI,AE,i,j){AI*=D;var AN=j?"at":"wa";var AK=AJ+U(AE)*AI-F;var AM=AH+J(AE)*AI-F;var Z=AJ+U(i)*AI-F;var AL=AH+J(i)*AI-F;if(AK==Z&&!j){AK+=0.125}var m=this.getCoords_(AJ,AH);var AG=this.getCoords_(AK,AM);var AF=this.getCoords_(Z,AL);this.currentPath_.push({type:AN,x:m.x,y:m.y,radius:AI,xStart:AG.x,yStart:AG.y,xEnd:AF.x,yEnd:AF.y})};M.rect=function(j,i,Z,m){this.moveTo(j,i);this.lineTo(j+Z,i);this.lineTo(j+Z,i+m);this.lineTo(j,i+m);this.closePath()};M.strokeRect=function(j,i,Z,m){var p=this.currentPath_;this.beginPath();this.moveTo(j,i);this.lineTo(j+Z,i);this.lineTo(j+Z,i+m);this.lineTo(j,i+m);this.closePath();this.stroke();this.currentPath_=p};M.fillRect=function(j,i,Z,m){var p=this.currentPath_;this.beginPath();this.moveTo(j,i);this.lineTo(j+Z,i);this.lineTo(j+Z,i+m);this.lineTo(j,i+m);this.closePath();this.fill();this.currentPath_=p};M.createLinearGradient=function(i,m,Z,j){var p=new v("gradient");p.x0_=i;p.y0_=m;p.x1_=Z;p.y1_=j;return p};M.createRadialGradient=function(m,AE,j,i,p,Z){var AF=new v("gradientradial");AF.x0_=m;AF.y0_=AE;AF.r0_=j;AF.x1_=i;AF.y1_=p;AF.r1_=Z;return AF};M.drawImage=function(AO,j){var AH,AF,AJ,AV,AM,AK,AQ,AX;var AI=AO.runtimeStyle.width;var AN=AO.runtimeStyle.height;AO.runtimeStyle.width="auto";AO.runtimeStyle.height="auto";var AG=AO.width;var AT=AO.height;AO.runtimeStyle.width=AI;AO.runtimeStyle.height=AN;if(arguments.length==3){AH=arguments[1];AF=arguments[2];AM=AK=0;AQ=AJ=AG;AX=AV=AT}else{if(arguments.length==5){AH=arguments[1];AF=arguments[2];AJ=arguments[3];AV=arguments[4];AM=AK=0;AQ=AG;AX=AT}else{if(arguments.length==9){AM=arguments[1];AK=arguments[2];AQ=arguments[3];AX=arguments[4];AH=arguments[5];AF=arguments[6];AJ=arguments[7];AV=arguments[8]}else{throw Error("Invalid number of arguments")}}}var AW=this.getCoords_(AH,AF);var m=AQ/2;var i=AX/2;var AU=[];var Z=10;var AE=10;AU.push(" <g_vml_:group",' coordsize="',D*Z,",",D*AE,'"',' coordorigin="0,0"',' style="width:',Z,"px;height:",AE,"px;position:absolute;");if(this.m_[0][0]!=1||this.m_[0][1]||this.m_[1][1]!=1||this.m_[1][0]){var p=[];p.push("M11=",this.m_[0][0],",","M12=",this.m_[1][0],",","M21=",this.m_[0][1],",","M22=",this.m_[1][1],",","Dx=",K(AW.x/D),",","Dy=",K(AW.y/D),"");var AS=AW;var AR=this.getCoords_(AH+AJ,AF);var AP=this.getCoords_(AH,AF+AV);var AL=this.getCoords_(AH+AJ,AF+AV);AS.x=z.max(AS.x,AR.x,AP.x,AL.x);AS.y=z.max(AS.y,AR.y,AP.y,AL.y);AU.push("padding:0 ",K(AS.x/D),"px ",K(AS.y/D),"px 0;filter:progid:DXImageTransform.Microsoft.Matrix(",p.join(""),", sizingmethod='clip');")}else{AU.push("top:",K(AW.y/D),"px;left:",K(AW.x/D),"px;")}AU.push(' ">','<g_vml_:image src="',AO.src,'"',' style="width:',D*AJ,"px;"," height:",D*AV,'px"',' cropleft="',AM/AG,'"',' croptop="',AK/AT,'"',' cropright="',(AG-AM-AQ)/AG,'"',' cropbottom="',(AT-AK-AX)/AT,'"'," />","</g_vml_:group>");this.element_.insertAdjacentHTML("BeforeEnd",AU.join(""))};M.stroke=function(AM){var m=10;var AN=10;var AE=5000;var AG={x:null,y:null};var AL={x:null,y:null};for(var AH=0;AH<this.currentPath_.length;AH+=AE){var AK=[];var AF=false;AK.push("<g_vml_:shape",' filled="',!!AM,'"',' style="position:absolute;width:',m,"px;height:",AN,'px;"',' coordorigin="0,0"',' coordsize="',D*m,",",D*AN,'"',' stroked="',!AM,'"',' path="');var AO=false;for(var AI=AH;AI<Math.min(AH+AE,this.currentPath_.length);AI++){if(AI%AE==0&&AI>0){AK.push(" m ",K(this.currentPath_[AI-1].x),",",K(this.currentPath_[AI-1].y))}var Z=this.currentPath_[AI];var AJ;switch(Z.type){case"moveTo":AJ=Z;AK.push(" m ",K(Z.x),",",K(Z.y));break;case"lineTo":AK.push(" l ",K(Z.x),",",K(Z.y));break;case"close":AK.push(" x ");Z=null;break;case"bezierCurveTo":AK.push(" c ",K(Z.cp1x),",",K(Z.cp1y),",",K(Z.cp2x),",",K(Z.cp2y),",",K(Z.x),",",K(Z.y));break;case"at":case"wa":AK.push(" ",Z.type," ",K(Z.x-this.arcScaleX_*Z.radius),",",K(Z.y-this.arcScaleY_*Z.radius)," ",K(Z.x+this.arcScaleX_*Z.radius),",",K(Z.y+this.arcScaleY_*Z.radius)," ",K(Z.xStart),",",K(Z.yStart)," ",K(Z.xEnd),",",K(Z.yEnd));break}if(Z){if(AG.x==null||Z.x<AG.x){AG.x=Z.x}if(AL.x==null||Z.x>AL.x){AL.x=Z.x}if(AG.y==null||Z.y<AG.y){AG.y=Z.y}if(AL.y==null||Z.y>AL.y){AL.y=Z.y}}}AK.push(' ">');if(!AM){R(this,AK)}else{a(this,AK,AG,AL)}AK.push("</g_vml_:shape>");this.element_.insertAdjacentHTML("beforeEnd",AK.join(""))}};function R(j,AE){var i=Y(j.strokeStyle);var m=i.color;var p=i.alpha*j.globalAlpha;var Z=j.lineScale_*j.lineWidth;if(Z<1){p*=Z}AE.push("<g_vml_:stroke",' opacity="',p,'"',' joinstyle="',j.lineJoin,'"',' miterlimit="',j.miterLimit,'"',' endcap="',t(j.lineCap),'"',' weight="',Z,'px"',' color="',m,'" />')}function a(AO,AG,Ah,AP){var AH=AO.fillStyle;var AY=AO.arcScaleX_;var AX=AO.arcScaleY_;var Z=AP.x-Ah.x;var m=AP.y-Ah.y;if(AH instanceof v){var AL=0;var Ac={x:0,y:0};var AU=0;var AK=1;if(AH.type_=="gradient"){var AJ=AH.x0_/AY;var j=AH.y0_/AX;var AI=AH.x1_/AY;var Aj=AH.y1_/AX;var Ag=AO.getCoords_(AJ,j);var Af=AO.getCoords_(AI,Aj);var AE=Af.x-Ag.x;var p=Af.y-Ag.y;AL=Math.atan2(AE,p)*180/Math.PI;if(AL<0){AL+=360}if(AL<0.000001){AL=0}}else{var Ag=AO.getCoords_(AH.x0_,AH.y0_);Ac={x:(Ag.x-Ah.x)/Z,y:(Ag.y-Ah.y)/m};Z/=AY*D;m/=AX*D;var Aa=z.max(Z,m);AU=2*AH.r0_/Aa;AK=2*AH.r1_/Aa-AU}var AS=AH.colors_;AS.sort(function(Ak,i){return Ak.offset-i.offset});var AN=AS.length;var AR=AS[0].color;var AQ=AS[AN-1].color;var AW=AS[0].alpha*AO.globalAlpha;var AV=AS[AN-1].alpha*AO.globalAlpha;var Ab=[];for(var Ae=0;Ae<AN;Ae++){var AM=AS[Ae];Ab.push(AM.offset*AK+AU+" "+AM.color)}AG.push('<g_vml_:fill type="',AH.type_,'"',' method="none" focus="100%"',' color="',AR,'"',' color2="',AQ,'"',' colors="',Ab.join(","),'"',' opacity="',AV,'"',' g_o_:opacity2="',AW,'"',' angle="',AL,'"',' focusposition="',Ac.x,",",Ac.y,'" />')}else{if(AH instanceof u){if(Z&&m){var AF=-Ah.x;var AZ=-Ah.y;AG.push("<g_vml_:fill",' position="',AF/Z*AY*AY,",",AZ/m*AX*AX,'"',' type="tile"',' src="',AH.src_,'" />')}}else{var Ai=Y(AO.fillStyle);var AT=Ai.color;var Ad=Ai.alpha*AO.globalAlpha;AG.push('<g_vml_:fill color="',AT,'" opacity="',Ad,'" />')}}}M.fill=function(){this.stroke(true)};M.closePath=function(){this.currentPath_.push({type:"close"})};M.getCoords_=function(j,i){var Z=this.m_;return{x:D*(j*Z[0][0]+i*Z[1][0]+Z[2][0])-F,y:D*(j*Z[0][1]+i*Z[1][1]+Z[2][1])-F}};M.save=function(){var Z={};Q(this,Z);this.aStack_.push(Z);this.mStack_.push(this.m_);this.m_=d(V(),this.m_)};M.restore=function(){if(this.aStack_.length){Q(this.aStack_.pop(),this);this.m_=this.mStack_.pop()}};function H(Z){return isFinite(Z[0][0])&&isFinite(Z[0][1])&&isFinite(Z[1][0])&&isFinite(Z[1][1])&&isFinite(Z[2][0])&&isFinite(Z[2][1])}function y(i,Z,j){if(!H(Z)){return }i.m_=Z;if(j){var p=Z[0][0]*Z[1][1]-Z[0][1]*Z[1][0];i.lineScale_=k(b(p))}}M.translate=function(j,i){var Z=[[1,0,0],[0,1,0],[j,i,1]];y(this,d(Z,this.m_),false)};M.rotate=function(i){var m=U(i);var j=J(i);var Z=[[m,j,0],[-j,m,0],[0,0,1]];y(this,d(Z,this.m_),false)};M.scale=function(j,i){this.arcScaleX_*=j;this.arcScaleY_*=i;var Z=[[j,0,0],[0,i,0],[0,0,1]];y(this,d(Z,this.m_),true)};M.transform=function(p,m,AF,AE,i,Z){var j=[[p,m,0],[AF,AE,0],[i,Z,1]];y(this,d(j,this.m_),true)};M.setTransform=function(AE,p,AG,AF,j,i){var Z=[[AE,p,0],[AG,AF,0],[j,i,1]];y(this,Z,true)};M.drawText_=function(AK,AI,AH,AN,AG){var AM=this.m_,AQ=1000,i=0,AP=AQ,AF={x:0,y:0},AE=[];var Z=P(X(this.font),this.element_);var j=AA(Z);var AR=this.element_.currentStyle;var p=this.textAlign.toLowerCase();switch(p){case"left":case"center":case"right":break;case"end":p=AR.direction=="ltr"?"right":"left";break;case"start":p=AR.direction=="rtl"?"right":"left";break;default:p="left"}switch(this.textBaseline){case"hanging":case"top":AF.y=Z.size/1.75;break;case"middle":break;default:case null:case"alphabetic":case"ideographic":case"bottom":AF.y=-Z.size/2.25;break}switch(p){case"right":i=AQ;AP=0.05;break;case"center":i=AP=AQ/2;break}var AO=this.getCoords_(AI+AF.x,AH+AF.y);AE.push('<g_vml_:line from="',-i,' 0" to="',AP,' 0.05" ',' coordsize="100 100" coordorigin="0 0"',' filled="',!AG,'" stroked="',!!AG,'" style="position:absolute;width:1px;height:1px;">');if(AG){R(this,AE)}else{a(this,AE,{x:-i,y:0},{x:AP,y:Z.size})}var AL=AM[0][0].toFixed(3)+","+AM[1][0].toFixed(3)+","+AM[0][1].toFixed(3)+","+AM[1][1].toFixed(3)+",0,0";var AJ=K(AO.x/D)+","+K(AO.y/D);AE.push('<g_vml_:skew on="t" matrix="',AL,'" ',' offset="',AJ,'" origin="',i,' 0" />','<g_vml_:path textpathok="true" />','<g_vml_:textpath on="true" string="',AD(AK),'" style="v-text-align:',p,";font:",AD(j),'" /></g_vml_:line>');this.element_.insertAdjacentHTML("beforeEnd",AE.join(""))};M.fillText=function(j,Z,m,i){this.drawText_(j,Z,m,i,false)};M.strokeText=function(j,Z,m,i){this.drawText_(j,Z,m,i,true)};M.measureText=function(j){if(!this.textMeasureEl_){var Z='<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';this.element_.insertAdjacentHTML("beforeEnd",Z);this.textMeasureEl_=this.element_.lastChild}var i=this.element_.ownerDocument;this.textMeasureEl_.innerHTML="";this.textMeasureEl_.style.font=this.font;this.textMeasureEl_.appendChild(i.createTextNode(j));return{width:this.textMeasureEl_.offsetWidth}};M.clip=function(){};M.arcTo=function(){};M.createPattern=function(i,Z){return new u(i,Z)};function v(Z){this.type_=Z;this.x0_=0;this.y0_=0;this.r0_=0;this.x1_=0;this.y1_=0;this.r1_=0;this.colors_=[]}v.prototype.addColorStop=function(i,Z){Z=Y(Z);this.colors_.push({offset:i,color:Z.color,alpha:Z.alpha})};function u(i,Z){q(i);switch(Z){case"repeat":case null:case"":this.repetition_="repeat";break;case"repeat-x":case"repeat-y":case"no-repeat":this.repetition_=Z;break;default:n("SYNTAX_ERR")}this.src_=i.src;this.width_=i.width;this.height_=i.height}function n(Z){throw new o(Z)}function q(Z){if(!Z||Z.nodeType!=1||Z.tagName!="IMG"){n("TYPE_MISMATCH_ERR")}if(Z.readyState!="complete"){n("INVALID_STATE_ERR")}}function o(Z){this.code=this[Z];this.message=Z+": DOM Exception "+this.code}var x=o.prototype=new Error;x.INDEX_SIZE_ERR=1;x.DOMSTRING_SIZE_ERR=2;x.HIERARCHY_REQUEST_ERR=3;x.WRONG_DOCUMENT_ERR=4;x.INVALID_CHARACTER_ERR=5;x.NO_DATA_ALLOWED_ERR=6;x.NO_MODIFICATION_ALLOWED_ERR=7;x.NOT_FOUND_ERR=8;x.NOT_SUPPORTED_ERR=9;x.INUSE_ATTRIBUTE_ERR=10;x.INVALID_STATE_ERR=11;x.SYNTAX_ERR=12;x.INVALID_MODIFICATION_ERR=13;x.NAMESPACE_ERR=14;x.INVALID_ACCESS_ERR=15;x.VALIDATION_ERR=16;x.TYPE_MISMATCH_ERR=17;G_vmlCanvasManager=E;CanvasRenderingContext2D=W;CanvasGradient=v;CanvasPattern=u;DOMException=o})()};
/*
* jRespond.js (a simple way to globally manage javascript on responsive websites)
* version 0.8.3
* (c) 2012 Jeremy Fields [jeremy.fields@viget.com]
* released under the MIT license
*/
(function(b,a,c){b.jRespond=function(l){var e=[];var g=[];var o=l;var s="";var n;var d=0;var m=100;var p=500;var j=p;var i=function(){var t=0;if(!window.innerWidth){if(!(document.documentElement.clientWidth===0)){t=document.documentElement.clientWidth}else{t=document.body.clientWidth}}else{t=window.innerWidth}return t};var h=function(v){var u=v.breakpoint;var t=v.enter||c;e.push(v);g.push(false);if(k(u)){if(t!==c){t.call()}g[(e.length-1)]=true}};var q=function(){var A=[];var z=[];for(var y=0;y<e.length;y++){var v=e[y]["breakpoint"];var t=e[y]["enter"]||c;var x=e[y]["exit"]||c;if(v==="*"){if(t!==c){A.push(t)}if(x!==c){z.push(x)}}else{if(k(v)){if(t!==c&&!g[y]){A.push(t)}g[y]=true}else{if(x!==c&&g[y]){z.push(x)}g[y]=false}}}for(var w=0;w<z.length;w++){z[w].call()}for(var u=0;u<A.length;u++){A[u].call()}};var r=function(u){var v=false;for(var t=0;t<o.length;t++){if(u>=o[t]["enter"]&&u<=o[t]["exit"]){v=true;break}}if(v&&s!==o[t]["label"]){s=o[t]["label"];q()}else{if(!v&&s!==""){s="";q()}}};var k=function(t){if(typeof t==="object"){if(t.join().indexOf(s)>=0){return true}}else{if(t==="*"){return true}else{if(typeof t==="string"){if(s===t){return true}}}}};var f=function(){var t=i();if(t!==d){j=m;r(t)}else{j=p}d=t;setTimeout(f,j)};f();return{addFunc:function(t){h(t)},getBreakpoint:function(){return s}}}}(this,this.document));
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
/*! NOTE: If you're already including a window.matchMedia polyfill via Modernizr or otherwise, you don't need this part */
window.matchMedia=window.matchMedia||function(a){"use strict";var c,d=a.documentElement,e=d.firstElementChild||d.firstChild,f=a.createElement("body"),g=a.createElement("div");return g.id="mq-test-1",g.style.cssText="position:absolute;top:-100em",f.style.background="none",f.appendChild(g),function(a){return g.innerHTML='&shy;<style media="'+a+'"> #mq-test-1 { width: 42px; }</style>',d.insertBefore(f,e),c=42===g.offsetWidth,d.removeChild(f),{matches:c,media:a}}}(document);

/*! Respond.js v1.1.0: min/max-width media query polyfill. (c) Scott Jehl. MIT/GPLv2 Lic. j.mp/respondjs  */
(function(a){"use strict";function x(){u(!0)}var b={};if(a.respond=b,b.update=function(){},b.mediaQueriesSupported=a.matchMedia&&a.matchMedia("only all").matches,!b.mediaQueriesSupported){var q,r,t,c=a.document,d=c.documentElement,e=[],f=[],g=[],h={},i=30,j=c.getElementsByTagName("head")[0]||d,k=c.getElementsByTagName("base")[0],l=j.getElementsByTagName("link"),m=[],n=function(){for(var b=0;l.length>b;b++){var c=l[b],d=c.href,e=c.media,f=c.rel&&"stylesheet"===c.rel.toLowerCase();d&&f&&!h[d]&&(c.styleSheet&&c.styleSheet.rawCssText?(p(c.styleSheet.rawCssText,d,e),h[d]=!0):(!/^([a-zA-Z:]*\/\/)/.test(d)&&!k||d.replace(RegExp.$1,"").split("/")[0]===a.location.host)&&m.push({href:d,media:e}))}o()},o=function(){if(m.length){var b=m.shift();v(b.href,function(c){p(c,b.href,b.media),h[b.href]=!0,a.setTimeout(function(){o()},0)})}},p=function(a,b,c){var d=a.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),g=d&&d.length||0;b=b.substring(0,b.lastIndexOf("/"));var h=function(a){return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+b+"$2$3")},i=!g&&c;b.length&&(b+="/"),i&&(g=1);for(var j=0;g>j;j++){var k,l,m,n;i?(k=c,f.push(h(a))):(k=d[j].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1,f.push(RegExp.$2&&h(RegExp.$2))),m=k.split(","),n=m.length;for(var o=0;n>o;o++)l=m[o],e.push({media:l.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:f.length-1,hasquery:l.indexOf("(")>-1,minw:l.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:l.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}u()},s=function(){var a,b=c.createElement("div"),e=c.body,f=!1;return b.style.cssText="position:absolute;font-size:1em;width:1em",e||(e=f=c.createElement("body"),e.style.background="none"),e.appendChild(b),d.insertBefore(e,d.firstChild),a=b.offsetWidth,f?d.removeChild(e):e.removeChild(b),a=t=parseFloat(a)},u=function(b){var h="clientWidth",k=d[h],m="CSS1Compat"===c.compatMode&&k||c.body[h]||k,n={},o=l[l.length-1],p=(new Date).getTime();if(b&&q&&i>p-q)return a.clearTimeout(r),r=a.setTimeout(u,i),void 0;q=p;for(var v in e)if(e.hasOwnProperty(v)){var w=e[v],x=w.minw,y=w.maxw,z=null===x,A=null===y,B="em";x&&(x=parseFloat(x)*(x.indexOf(B)>-1?t||s():1)),y&&(y=parseFloat(y)*(y.indexOf(B)>-1?t||s():1)),w.hasquery&&(z&&A||!(z||m>=x)||!(A||y>=m))||(n[w.media]||(n[w.media]=[]),n[w.media].push(f[w.rules]))}for(var C in g)g.hasOwnProperty(C)&&g[C]&&g[C].parentNode===j&&j.removeChild(g[C]);for(var D in n)if(n.hasOwnProperty(D)){var E=c.createElement("style"),F=n[D].join("\n");E.type="text/css",E.media=D,j.insertBefore(E,o.nextSibling),E.styleSheet?E.styleSheet.cssText=F:E.appendChild(c.createTextNode(F)),g.push(E)}},v=function(a,b){var c=w();c&&(c.open("GET",a,!0),c.onreadystatechange=function(){4!==c.readyState||200!==c.status&&304!==c.status||b(c.responseText)},4!==c.readyState&&c.send(null))},w=function(){var b=!1;try{b=new a.XMLHttpRequest}catch(c){b=new a.ActiveXObject("Microsoft.XMLHTTP")}return function(){return b}}();n(),b.update=n,a.addEventListener?a.addEventListener("resize",x,!1):a.attachEvent&&a.attachEvent("onresize",x)}})(this);

/*
 * jQuery UI Slider Access
 * By: Trent Richardson [http://trentrichardson.com]
 * Version 0.2
 * Last Modified: 12/02/2011
 * 
 * Copyright 2011 Trent Richardson
 * Dual licensed under the MIT and GPL licenses.
 * http://trentrichardson.com/Impromptu/GPL-LICENSE.txt
 * http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
 * 
 */
 (function($){

	$.fn.extend({
		sliderAccess: function(options){
			options = options || {};
			options.touchonly = options.touchonly !== undefined? options.touchonly : true; // by default only show it if touch device

			if(options.touchonly === true && !("ontouchend" in document))
				return $(this);
				
			return $(this).each(function(i,obj){
						var $t = $(this),
							o = $.extend({},{ 
											where: 'after',
											step: $t.slider('option','step'), 
											upIcon: 'ui-icon-plus', 
											downIcon: 'ui-icon-minus',
											text: false,
											upText: '+',
											downText: '-',
											buttonset: true,
											buttonsetTag: 'span'
										}, options),
							$buttons = $('<'+ o.buttonsetTag +' class="ui-slider-access">'+
											'<button data-icon="'+ o.downIcon +'" data-step="-'+ o.step +'">'+ o.downText +'</button>'+
											'<button data-icon="'+ o.upIcon +'" data-step="'+ o.step +'">'+ o.upText +'</button>'+
										'</'+ o.buttonsetTag +'>');

						$buttons.children('button').each(function(j, jobj){
							var $jt = $(this);
							$jt.button({ 
											text: o.text, 
											icons: { primary: $jt.data('icon') }
										})
								.click(function(e){
											var step = $jt.data('step'),
												curr = $t.slider('value'),
												newval = curr += step*1,
												minval = $t.slider('option','min'),
												maxval = $t.slider('option','max');

											e.preventDefault();
											
											if(newval < minval || newval > maxval)
												return;
											
											$t.slider('value', newval);

											$t.slider("option", "slide").call($t, null, { value: newval });
										});
						});
						
						// before or after					
						$t[o.where]($buttons);

						if(o.buttonset){
							$buttons.removeClass('ui-corner-right').removeClass('ui-corner-left').buttonset();
							$buttons.eq(0).addClass('ui-corner-left');
							$buttons.eq(1).addClass('ui-corner-right');
						}

						// adjust the width so we don't break the original layout
						var bOuterWidth = $buttons.css({
									marginLeft: (o.where == 'after'? 10:0), 
									marginRight: (o.where == 'before'? 10:0)
								}).outerWidth(true) + 5;
						var tOuterWidth = $t.outerWidth(true);
						$t.css('display','inline-block').width(tOuterWidth-bOuterWidth);
					});		
		}
	});

})(jQuery);
/*
* jQuery timepicker addon
* By: Trent Richardson [http://trentrichardson.com]
* Version 1.0.2
* Last Modified: 07/01/2012
*
* Copyright 2012 Trent Richardson
* You may use this project under MIT or GPL licenses.
* http://trentrichardson.com/Impromptu/GPL-LICENSE.txt
* http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
*
* HERES THE CSS:
* .ui-timepicker-div .ui-widget-header { margin-bottom: 8px; }
* .ui-timepicker-div dl { text-align: left; }
* .ui-timepicker-div dl dt { height: 25px; margin-bottom: -25px; }
* .ui-timepicker-div dl dd { margin: 0 10px 10px 65px; }
* .ui-timepicker-div td { font-size: 90%; }
* .ui-tpicker-grid-label { background: none; border: none; margin: 0; padding: 0; }
*/

/*jslint evil: true, maxlen: 300, white: false, undef: false, nomen: false, onevar: false */

(function($) {

// Prevent "Uncaught RangeError: Maximum call stack size exceeded"
$.ui.timepicker = $.ui.timepicker || {};
if ($.ui.timepicker.version) {
	return;
}

$.extend($.ui, { timepicker: { version: "1.0.2" } });

/* Time picker manager.
   Use the singleton instance of this class, $.timepicker, to interact with the time picker.
   Settings for (groups of) time pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Timepicker() {
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[''] = { // Default regional settings
		currentText: 'Now',
		closeText: 'Done',
		ampm: false,
		amNames: ['AM', 'A'],
		pmNames: ['PM', 'P'],
		timeFormat: 'hh:mm tt',
		timeSuffix: '',
		timeOnlyTitle: 'Choose Time',
		timeText: 'Time',
		hourText: 'Hour',
		minuteText: 'Minute',
		secondText: 'Second',
		millisecText: 'Millisecond',
		timezoneText: 'Time Zone'
	};
	this._defaults = { // Global defaults for all the datetime picker instances
		showButtonPanel: true,
		timeOnly: false,
		showHour: true,
		showMinute: true,
		showSecond: false,
		showMillisec: false,
		showTimezone: false,
		showTime: true,
		stepHour: 1,
		stepMinute: 1,
		stepSecond: 1,
		stepMillisec: 1,
		hour: 0,
		minute: 0,
		second: 0,
		millisec: 0,
		timezone: null,
		useLocalTimezone: false,
		defaultTimezone: "+0000",
		hourMin: 0,
		minuteMin: 0,
		secondMin: 0,
		millisecMin: 0,
		hourMax: 23,
		minuteMax: 59,
		secondMax: 59,
		millisecMax: 999,
		minDateTime: null,
		maxDateTime: null,
		onSelect: null,
		hourGrid: 0,
		minuteGrid: 0,
		secondGrid: 0,
		millisecGrid: 0,
		alwaysSetTime: true,
		separator: ' ',
		altFieldTimeOnly: true,
		altSeparator: null,
		altTimeSuffix: null,
		showTimepicker: true,
		timezoneIso8601: false,
		timezoneList: null,
		addSliderAccess: false,
		sliderAccessArgs: null,
		defaultValue: null
	};
	$.extend(this._defaults, this.regional['']);
}

$.extend(Timepicker.prototype, {
	$input: null,
	$altInput: null,
	$timeObj: null,
	inst: null,
	hour_slider: null,
	minute_slider: null,
	second_slider: null,
	millisec_slider: null,
	timezone_select: null,
	hour: 0,
	minute: 0,
	second: 0,
	millisec: 0,
	timezone: null,
	defaultTimezone: "+0000",
	hourMinOriginal: null,
	minuteMinOriginal: null,
	secondMinOriginal: null,
	millisecMinOriginal: null,
	hourMaxOriginal: null,
	minuteMaxOriginal: null,
	secondMaxOriginal: null,
	millisecMaxOriginal: null,
	ampm: '',
	formattedDate: '',
	formattedTime: '',
	formattedDateTime: '',
	timezoneList: null,

	/* Override the default settings for all instances of the time picker.
	   @param  settings  object - the new settings to use as defaults (anonymous object)
	   @return the manager object */
	setDefaults: function(settings) {
		extendRemove(this._defaults, settings || {});
		return this;
	},

	//########################################################################
	// Create a new Timepicker instance
	//########################################################################
	_newInst: function($input, o) {
		var tp_inst = new Timepicker(),
			inlineSettings = {};

		for (var attrName in this._defaults) {
			var attrValue = $input.attr('time:' + attrName);
			if (attrValue) {
				try {
					inlineSettings[attrName] = eval(attrValue);
				} catch (err) {
					inlineSettings[attrName] = attrValue;
				}
			}
		}
		tp_inst._defaults = $.extend({}, this._defaults, inlineSettings, o, {
			beforeShow: function(input, dp_inst) {
				if ($.isFunction(o.beforeShow)) {
					return o.beforeShow(input, dp_inst, tp_inst);
                }
			},
			onChangeMonthYear: function(year, month, dp_inst) {
				// Update the time as well : this prevents the time from disappearing from the $input field.
				tp_inst._updateDateTime(dp_inst);
				if ($.isFunction(o.onChangeMonthYear)) {
					o.onChangeMonthYear.call($input[0], year, month, dp_inst, tp_inst);
                }
			},
			onClose: function(dateText, dp_inst) {
				if (tp_inst.timeDefined === true && $input.val() !== '') {
					tp_inst._updateDateTime(dp_inst);
                }
				if ($.isFunction(o.onClose)) {
					o.onClose.call($input[0], dateText, dp_inst, tp_inst);
                }
			},
			timepicker: tp_inst // add timepicker as a property of datepicker: $.datepicker._get(dp_inst, 'timepicker');
		});
		tp_inst.amNames = $.map(tp_inst._defaults.amNames, function(val) { return val.toUpperCase(); });
		tp_inst.pmNames = $.map(tp_inst._defaults.pmNames, function(val) { return val.toUpperCase(); });

		if (tp_inst._defaults.timezoneList === null) {
			var timezoneList = ['-1200','-1100','-1000','-0930','-0900','-0800','-0700','-0600','-0500','-0430','-0400','-0330','-0300','-0200','-0100','+0000','+0100','+0200','+0300',
					'+0330','+0400','+0430','+0500','+0530','+0545','+0600','+0630','+0700','+0800','+0845','+0900','+0930','+1000','+1030','+1100','+1130','+1200','+1245','+1300','+1400'];
			
			if (tp_inst._defaults.timezoneIso8601) {
				timezoneList = $.map(timezoneList, function(val) {
					return val == '+0000' ? 'Z' : (val.substring(0, 3) + ':' + val.substring(3));
				});
			}
			tp_inst._defaults.timezoneList = timezoneList;
		}

		tp_inst.timezone = tp_inst._defaults.timezone;
		tp_inst.hour = tp_inst._defaults.hour;
		tp_inst.minute = tp_inst._defaults.minute;
		tp_inst.second = tp_inst._defaults.second;
		tp_inst.millisec = tp_inst._defaults.millisec;
		tp_inst.ampm = '';
		tp_inst.$input = $input;

		if (o.altField) {
			tp_inst.$altInput = $(o.altField)
				.css({ cursor: 'pointer' })
				.focus(function(){ $input.trigger("focus"); });
        }

		if(tp_inst._defaults.minDate===0 || tp_inst._defaults.minDateTime===0)
		{
			tp_inst._defaults.minDate=new Date();
		}
		if(tp_inst._defaults.maxDate===0 || tp_inst._defaults.maxDateTime===0)
		{
			tp_inst._defaults.maxDate=new Date();
		}

		// datepicker needs minDate/maxDate, timepicker needs minDateTime/maxDateTime..
		if(tp_inst._defaults.minDate !== undefined && tp_inst._defaults.minDate instanceof Date) {
			tp_inst._defaults.minDateTime = new Date(tp_inst._defaults.minDate.getTime());
        }
		if(tp_inst._defaults.minDateTime !== undefined && tp_inst._defaults.minDateTime instanceof Date) {
			tp_inst._defaults.minDate = new Date(tp_inst._defaults.minDateTime.getTime());
        }
		if(tp_inst._defaults.maxDate !== undefined && tp_inst._defaults.maxDate instanceof Date) {
			tp_inst._defaults.maxDateTime = new Date(tp_inst._defaults.maxDate.getTime());
        }
		if(tp_inst._defaults.maxDateTime !== undefined && tp_inst._defaults.maxDateTime instanceof Date) {
			tp_inst._defaults.maxDate = new Date(tp_inst._defaults.maxDateTime.getTime());
        }
        tp_inst.$input.bind('focus', function() {
			tp_inst._onFocus();
        });

		return tp_inst;
	},

	//########################################################################
	// add our sliders to the calendar
	//########################################################################
	_addTimePicker: function(dp_inst) {
		var currDT = (this.$altInput && this._defaults.altFieldTimeOnly) ?
				this.$input.val() + ' ' + this.$altInput.val() :
				this.$input.val();

		this.timeDefined = this._parseTime(currDT);
		this._limitMinMaxDateTime(dp_inst, false);
		this._injectTimePicker();
	},

	//########################################################################
	// parse the time string from input value or _setTime
	//########################################################################
	_parseTime: function(timeString, withDate) {
		if (!this.inst) {
			this.inst = $.datepicker._getInst(this.$input[0]);
		}
		
		if (withDate || !this._defaults.timeOnly) 
		{
			var dp_dateFormat = $.datepicker._get(this.inst, 'dateFormat');
			try {
				var parseRes = parseDateTimeInternal(dp_dateFormat, this._defaults.timeFormat, timeString, $.datepicker._getFormatConfig(this.inst), this._defaults);
				if (!parseRes.timeObj) { return false; }
				$.extend(this, parseRes.timeObj);
			} catch (err)
			{
				return false;
			}
			return true;
		}
		else
		{
			var timeObj = $.datepicker.parseTime(this._defaults.timeFormat, timeString, this._defaults);
			if(!timeObj) { return false; }
			$.extend(this, timeObj);
			return true;
		}
	},
	
	//########################################################################
	// generate and inject html for timepicker into ui datepicker
	//########################################################################
	_injectTimePicker: function() {
		var $dp = this.inst.dpDiv,
			o = this.inst.settings,
			tp_inst = this,
			// Added by Peter Medeiros:
			// - Figure out what the hour/minute/second max should be based on the step values.
			// - Example: if stepMinute is 15, then minMax is 45.
			hourMax = parseInt((o.hourMax - ((o.hourMax - o.hourMin) % o.stepHour)) ,10),
			minMax  = parseInt((o.minuteMax - ((o.minuteMax - o.minuteMin) % o.stepMinute)) ,10),
			secMax  = parseInt((o.secondMax - ((o.secondMax - o.secondMin) % o.stepSecond)) ,10),
			millisecMax  = parseInt((o.millisecMax - ((o.millisecMax - o.millisecMin) % o.stepMillisec)) ,10);

		// Prevent displaying twice
		if ($dp.find("div.ui-timepicker-div").length === 0 && o.showTimepicker) {
			var noDisplay = ' style="display:none;"',
				html =	'<div class="ui-timepicker-div"><dl>' +
						'<dt class="ui_tpicker_time_label"' +
						((o.showTime) ? '' : noDisplay) + '>' + o.timeText + '</dt>' +
						'<dd class="ui_tpicker_time"' +
						((o.showTime) ? '' : noDisplay) + '></dd>' +
						'<dt class="ui_tpicker_hour_label"' +
						((o.showHour) ? '' : noDisplay) + '>' + o.hourText + '</dt>',
				hourGridSize = 0,
				minuteGridSize = 0,
				secondGridSize = 0,
				millisecGridSize = 0,
				size = null;

			// Hours
			html += '<dd class="ui_tpicker_hour"><div class="ui_tpicker_hour_slider"' +
						((o.showHour) ? '' : noDisplay) + '></div>';
			if (o.showHour && o.hourGrid > 0) {
				html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

				for (var h = o.hourMin; h <= hourMax; h += parseInt(o.hourGrid,10)) {
					hourGridSize++;
					var tmph = (o.ampm && h > 12) ? h-12 : h;
					if (tmph < 10) { tmph = '0' + tmph; }
					if (o.ampm) {
						if (h === 0) {
                            tmph = 12 +'a';
                        } else {
                            if (h < 12) { tmph += 'a'; }
						    else { tmph += 'p'; }
                        }
					}
					html += '<td>' + tmph + '</td>';
				}

				html += '</tr></table></div>';
			}
			html += '</dd>';

			// Minutes
			html += '<dt class="ui_tpicker_minute_label"' +
					((o.showMinute) ? '' : noDisplay) + '>' + o.minuteText + '</dt>'+
					'<dd class="ui_tpicker_minute"><div class="ui_tpicker_minute_slider"' +
							((o.showMinute) ? '' : noDisplay) + '></div>';

			if (o.showMinute && o.minuteGrid > 0) {
				html += '<div style="padding-left: 1px"><table class="ui-tpicker-grid-label"><tr>';

				for (var m = o.minuteMin; m <= minMax; m += parseInt(o.minuteGrid,10)) {
					minuteGridSize++;
					html += '<td>' + ((m < 10) ? '0' : '') + m + '</td>';
				}

				html += '</tr></table></div>';
			}
			html += '</dd>';

			// Seconds
			html += '<dt class="ui_tpicker_second_label"' +
					((o.showSecond) ? '' : noDisplay) + '>' + o.secondText + '</dt>'+
					'<dd class="ui_tpicker_second"><div class="ui_tpicker_second_slider"'+
							((o.showSecond) ? '' : noDisplay) + '></div>';

			if (o.showSecond && o.secondGrid > 0) {
				html += '<div style="padding-left: 1px"><table><tr>';

				for (var s = o.secondMin; s <= secMax; s += parseInt(o.secondGrid,10)) {
					secondGridSize++;
					html += '<td>' + ((s < 10) ? '0' : '') + s + '</td>';
				}

				html += '</tr></table></div>';
			}
			html += '</dd>';

			// Milliseconds
			html += '<dt class="ui_tpicker_millisec_label"' +
					((o.showMillisec) ? '' : noDisplay) + '>' + o.millisecText + '</dt>'+
					'<dd class="ui_tpicker_millisec"><div class="ui_tpicker_millisec_slider"'+
							((o.showMillisec) ? '' : noDisplay) + '></div>';

			if (o.showMillisec && o.millisecGrid > 0) {
				html += '<div style="padding-left: 1px"><table><tr>';

				for (var l = o.millisecMin; l <= millisecMax; l += parseInt(o.millisecGrid,10)) {
					millisecGridSize++;
					html += '<td>' + ((l < 10) ? '0' : '') + l + '</td>';
				}

				html += '</tr></table></div>';
			}
			html += '</dd>';

			// Timezone
			html += '<dt class="ui_tpicker_timezone_label"' +
					((o.showTimezone) ? '' : noDisplay) + '>' + o.timezoneText + '</dt>';
			html += '<dd class="ui_tpicker_timezone" '	+
							((o.showTimezone) ? '' : noDisplay) + '></dd>';

			html += '</dl></div>';
			var $tp = $(html);

				// if we only want time picker...
			if (o.timeOnly === true) {
				$tp.prepend(
					'<div class="ui-widget-header ui-helper-clearfix ui-corner-all">' +
						'<div class="ui-datepicker-title">' + o.timeOnlyTitle + '</div>' +
					'</div>');
				$dp.find('.ui-datepicker-header, .ui-datepicker-calendar').hide();
			}

			this.hour_slider = $tp.find('.ui_tpicker_hour_slider').slider({
				orientation: "horizontal",
				value: this.hour,
				min: o.hourMin,
				max: hourMax,
				step: o.stepHour,
				slide: function(event, ui) {
					tp_inst.hour_slider.slider( "option", "value", ui.value);
					tp_inst._onTimeChange();
				}
			});


			// Updated by Peter Medeiros:
			// - Pass in Event and UI instance into slide function
			this.minute_slider = $tp.find('.ui_tpicker_minute_slider').slider({
				orientation: "horizontal",
				value: this.minute,
				min: o.minuteMin,
				max: minMax,
				step: o.stepMinute,
				slide: function(event, ui) {
					tp_inst.minute_slider.slider( "option", "value", ui.value);
					tp_inst._onTimeChange();
				}
			});

			this.second_slider = $tp.find('.ui_tpicker_second_slider').slider({
				orientation: "horizontal",
				value: this.second,
				min: o.secondMin,
				max: secMax,
				step: o.stepSecond,
				slide: function(event, ui) {
					tp_inst.second_slider.slider( "option", "value", ui.value);
					tp_inst._onTimeChange();
				}
			});

			this.millisec_slider = $tp.find('.ui_tpicker_millisec_slider').slider({
				orientation: "horizontal",
				value: this.millisec,
				min: o.millisecMin,
				max: millisecMax,
				step: o.stepMillisec,
				slide: function(event, ui) {
					tp_inst.millisec_slider.slider( "option", "value", ui.value);
					tp_inst._onTimeChange();
				}
			});

			this.timezone_select = $tp.find('.ui_tpicker_timezone').append('<select></select>').find("select");
			$.fn.append.apply(this.timezone_select,
				$.map(o.timezoneList, function(val, idx) {
					return $("<option />")
						.val(typeof val == "object" ? val.value : val)
						.text(typeof val == "object" ? val.label : val);
				})
			);
			if (typeof(this.timezone) != "undefined" && this.timezone !== null && this.timezone !== "") {
				var local_date = new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12);
				var local_timezone = $.timepicker.timeZoneOffsetString(local_date);
				if (local_timezone == this.timezone) {
					selectLocalTimeZone(tp_inst);
				} else {
					this.timezone_select.val(this.timezone);
				}
			} else {
				if (typeof(this.hour) != "undefined" && this.hour !== null && this.hour !== "") {
					this.timezone_select.val(o.defaultTimezone);
				} else {
					selectLocalTimeZone(tp_inst);
				}
			}
			this.timezone_select.change(function() {
				tp_inst._defaults.useLocalTimezone = false;
				tp_inst._onTimeChange();
			});

			// Add grid functionality
			if (o.showHour && o.hourGrid > 0) {
				size = 100 * hourGridSize * o.hourGrid / (hourMax - o.hourMin);

				$tp.find(".ui_tpicker_hour table").css({
					width: size + "%",
					marginLeft: (size / (-2 * hourGridSize)) + "%",
					borderCollapse: 'collapse'
				}).find("td").each( function(index) {
					$(this).click(function() {
						var h = $(this).html();
						if(o.ampm)	{
							var ap = h.substring(2).toLowerCase(),
								aph = parseInt(h.substring(0,2), 10);
							if (ap == 'a') {
								if (aph == 12) { h = 0; }
								else { h = aph; }
							} else if (aph == 12) { h = 12; }
							else { h = aph + 12; }
						}
						tp_inst.hour_slider.slider("option", "value", h);
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					}).css({
						cursor: 'pointer',
						width: (100 / hourGridSize) + '%',
						textAlign: 'center',
						overflow: 'hidden'
					});
				});
			}

			if (o.showMinute && o.minuteGrid > 0) {
				size = 100 * minuteGridSize * o.minuteGrid / (minMax - o.minuteMin);
				$tp.find(".ui_tpicker_minute table").css({
					width: size + "%",
					marginLeft: (size / (-2 * minuteGridSize)) + "%",
					borderCollapse: 'collapse'
				}).find("td").each(function(index) {
					$(this).click(function() {
						tp_inst.minute_slider.slider("option", "value", $(this).html());
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					}).css({
						cursor: 'pointer',
						width: (100 / minuteGridSize) + '%',
						textAlign: 'center',
						overflow: 'hidden'
					});
				});
			}

			if (o.showSecond && o.secondGrid > 0) {
				$tp.find(".ui_tpicker_second table").css({
					width: size + "%",
					marginLeft: (size / (-2 * secondGridSize)) + "%",
					borderCollapse: 'collapse'
				}).find("td").each(function(index) {
					$(this).click(function() {
						tp_inst.second_slider.slider("option", "value", $(this).html());
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					}).css({
						cursor: 'pointer',
						width: (100 / secondGridSize) + '%',
						textAlign: 'center',
						overflow: 'hidden'
					});
				});
			}

			if (o.showMillisec && o.millisecGrid > 0) {
				$tp.find(".ui_tpicker_millisec table").css({
					width: size + "%",
					marginLeft: (size / (-2 * millisecGridSize)) + "%",
					borderCollapse: 'collapse'
				}).find("td").each(function(index) {
					$(this).click(function() {
						tp_inst.millisec_slider.slider("option", "value", $(this).html());
						tp_inst._onTimeChange();
						tp_inst._onSelectHandler();
					}).css({
						cursor: 'pointer',
						width: (100 / millisecGridSize) + '%',
						textAlign: 'center',
						overflow: 'hidden'
					});
				});
			}

			var $buttonPanel = $dp.find('.ui-datepicker-buttonpane');
			if ($buttonPanel.length) { $buttonPanel.before($tp); }
			else { $dp.append($tp); }

			this.$timeObj = $tp.find('.ui_tpicker_time');

			if (this.inst !== null) {
				var timeDefined = this.timeDefined;
				this._onTimeChange();
				this.timeDefined = timeDefined;
			}

			//Emulate datepicker onSelect behavior. Call on slidestop.
			var onSelectDelegate = function() {
				tp_inst._onSelectHandler();
			};
			this.hour_slider.bind('slidestop',onSelectDelegate);
			this.minute_slider.bind('slidestop',onSelectDelegate);
			this.second_slider.bind('slidestop',onSelectDelegate);
			this.millisec_slider.bind('slidestop',onSelectDelegate);

			// slideAccess integration: http://trentrichardson.com/2011/11/11/jquery-ui-sliders-and-touch-accessibility/
			if (this._defaults.addSliderAccess){
				var sliderAccessArgs = this._defaults.sliderAccessArgs;
				setTimeout(function(){ // fix for inline mode
					if($tp.find('.ui-slider-access').length === 0){
						$tp.find('.ui-slider:visible').sliderAccess(sliderAccessArgs);

						// fix any grids since sliders are shorter
						var sliderAccessWidth = $tp.find('.ui-slider-access:eq(0)').outerWidth(true);
						if(sliderAccessWidth){
							$tp.find('table:visible').each(function(){
								var $g = $(this),
									oldWidth = $g.outerWidth(),
									oldMarginLeft = $g.css('marginLeft').toString().replace('%',''),
									newWidth = oldWidth - sliderAccessWidth,
									newMarginLeft = ((oldMarginLeft * newWidth)/oldWidth) + '%';

								$g.css({ width: newWidth, marginLeft: newMarginLeft });
							});
						}
					}
				},0);
			}
			// end slideAccess integration

		}
	},

	//########################################################################
	// This function tries to limit the ability to go outside the
	// min/max date range
	//########################################################################
	_limitMinMaxDateTime: function(dp_inst, adjustSliders){
		var o = this._defaults,
			dp_date = new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay);

		if(!this._defaults.showTimepicker) { return; } // No time so nothing to check here

		if($.datepicker._get(dp_inst, 'minDateTime') !== null && $.datepicker._get(dp_inst, 'minDateTime') !== undefined && dp_date){
			var minDateTime = $.datepicker._get(dp_inst, 'minDateTime'),
				minDateTimeDate = new Date(minDateTime.getFullYear(), minDateTime.getMonth(), minDateTime.getDate(), 0, 0, 0, 0);

			if(this.hourMinOriginal === null || this.minuteMinOriginal === null || this.secondMinOriginal === null || this.millisecMinOriginal === null){
				this.hourMinOriginal = o.hourMin;
				this.minuteMinOriginal = o.minuteMin;
				this.secondMinOriginal = o.secondMin;
				this.millisecMinOriginal = o.millisecMin;
			}

			if(dp_inst.settings.timeOnly || minDateTimeDate.getTime() == dp_date.getTime()) {
				this._defaults.hourMin = minDateTime.getHours();
				if (this.hour <= this._defaults.hourMin) {
					this.hour = this._defaults.hourMin;
					this._defaults.minuteMin = minDateTime.getMinutes();
					if (this.minute <= this._defaults.minuteMin) {
						this.minute = this._defaults.minuteMin;
						this._defaults.secondMin = minDateTime.getSeconds();
						if (this.second <= this._defaults.secondMin){
							this.second = this._defaults.secondMin;
							this._defaults.millisecMin = minDateTime.getMilliseconds();
						}
						else {
							if(this.millisec < this._defaults.millisecMin) {
								this.millisec = this._defaults.millisecMin;
							}
							this._defaults.millisecMin = this.millisecMinOriginal;
						}
					}
					else {
						this._defaults.secondMin = this.secondMinOriginal;
						this._defaults.millisecMin = this.millisecMinOriginal;
					}
				}
				else {
					this._defaults.minuteMin = this.minuteMinOriginal;
					this._defaults.secondMin = this.secondMinOriginal;
					this._defaults.millisecMin = this.millisecMinOriginal;
				}
			}
			else {
				this._defaults.hourMin = this.hourMinOriginal;
				this._defaults.minuteMin = this.minuteMinOriginal;
				this._defaults.secondMin = this.secondMinOriginal;
				this._defaults.millisecMin = this.millisecMinOriginal;
			}
		}

		if($.datepicker._get(dp_inst, 'maxDateTime') !== null && $.datepicker._get(dp_inst, 'maxDateTime') !== undefined && dp_date){
			var maxDateTime = $.datepicker._get(dp_inst, 'maxDateTime'),
				maxDateTimeDate = new Date(maxDateTime.getFullYear(), maxDateTime.getMonth(), maxDateTime.getDate(), 0, 0, 0, 0);

			if(this.hourMaxOriginal === null || this.minuteMaxOriginal === null || this.secondMaxOriginal === null){
				this.hourMaxOriginal = o.hourMax;
				this.minuteMaxOriginal = o.minuteMax;
				this.secondMaxOriginal = o.secondMax;
				this.millisecMaxOriginal = o.millisecMax;
			}

			if(dp_inst.settings.timeOnly || maxDateTimeDate.getTime() == dp_date.getTime()){
				this._defaults.hourMax = maxDateTime.getHours();
				if (this.hour >= this._defaults.hourMax) {
					this.hour = this._defaults.hourMax;
					this._defaults.minuteMax = maxDateTime.getMinutes();
					if (this.minute >= this._defaults.minuteMax) {
						this.minute = this._defaults.minuteMax;
						this._defaults.secondMax = maxDateTime.getSeconds();
					} else if (this.second >= this._defaults.secondMax) {
						this.second = this._defaults.secondMax;
						this._defaults.millisecMax = maxDateTime.getMilliseconds();
					} else {
						if(this.millisec > this._defaults.millisecMax) { this.millisec = this._defaults.millisecMax; }
						this._defaults.millisecMax = this.millisecMaxOriginal;
					}
				} else {
					this._defaults.minuteMax = this.minuteMaxOriginal;
					this._defaults.secondMax = this.secondMaxOriginal;
					this._defaults.millisecMax = this.millisecMaxOriginal;
				}
			}else{
				this._defaults.hourMax = this.hourMaxOriginal;
				this._defaults.minuteMax = this.minuteMaxOriginal;
				this._defaults.secondMax = this.secondMaxOriginal;
				this._defaults.millisecMax = this.millisecMaxOriginal;
			}
		}

		if(adjustSliders !== undefined && adjustSliders === true){
			var hourMax = parseInt((this._defaults.hourMax - ((this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour)) ,10),
                minMax  = parseInt((this._defaults.minuteMax - ((this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute)) ,10),
                secMax  = parseInt((this._defaults.secondMax - ((this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond)) ,10),
				millisecMax  = parseInt((this._defaults.millisecMax - ((this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec)) ,10);

			if(this.hour_slider) {
				this.hour_slider.slider("option", { min: this._defaults.hourMin, max: hourMax }).slider('value', this.hour);
            }
			if(this.minute_slider) {
				this.minute_slider.slider("option", { min: this._defaults.minuteMin, max: minMax }).slider('value', this.minute);
            }
			if(this.second_slider){
				this.second_slider.slider("option", { min: this._defaults.secondMin, max: secMax }).slider('value', this.second);
            }
			if(this.millisec_slider) {
				this.millisec_slider.slider("option", { min: this._defaults.millisecMin, max: millisecMax }).slider('value', this.millisec);
            }
		}

	},


	//########################################################################
	// when a slider moves, set the internal time...
	// on time change is also called when the time is updated in the text field
	//########################################################################
	_onTimeChange: function() {
		var hour   = (this.hour_slider) ? this.hour_slider.slider('value') : false,
			minute = (this.minute_slider) ? this.minute_slider.slider('value') : false,
			second = (this.second_slider) ? this.second_slider.slider('value') : false,
			millisec = (this.millisec_slider) ? this.millisec_slider.slider('value') : false,
			timezone = (this.timezone_select) ? this.timezone_select.val() : false,
			o = this._defaults;

		if (typeof(hour) == 'object') { hour = false; }
		if (typeof(minute) == 'object') { minute = false; }
		if (typeof(second) == 'object') { second = false; }
		if (typeof(millisec) == 'object') { millisec = false; }
		if (typeof(timezone) == 'object') { timezone = false; }

		if (hour !== false) { hour = parseInt(hour,10); }
		if (minute !== false) { minute = parseInt(minute,10); }
		if (second !== false) { second = parseInt(second,10); }
		if (millisec !== false) { millisec = parseInt(millisec,10); }

		var ampm = o[hour < 12 ? 'amNames' : 'pmNames'][0];

		// If the update was done in the input field, the input field should not be updated.
		// If the update was done using the sliders, update the input field.
		var hasChanged = (hour != this.hour || minute != this.minute ||
				second != this.second || millisec != this.millisec ||
				(this.ampm.length > 0 &&
				    (hour < 12) != ($.inArray(this.ampm.toUpperCase(), this.amNames) !== -1)) ||
				((this.timezone == null && timezone != this.defaultTimezone) || (this.timezone != null && timezone != this.timezone)));

		if (hasChanged) {

			if (hour !== false) { this.hour = hour; }
			if (minute !== false) { this.minute = minute; }
			if (second !== false) { this.second = second; }
			if (millisec !== false) { this.millisec = millisec; }
			if (timezone !== false) { this.timezone = timezone; }

			if (!this.inst) { this.inst = $.datepicker._getInst(this.$input[0]); }

			this._limitMinMaxDateTime(this.inst, true);
		}
		if (o.ampm) { this.ampm = ampm; }

		//this._formatTime();
		this.formattedTime = $.datepicker.formatTime(this._defaults.timeFormat, this, this._defaults);
		if (this.$timeObj) { this.$timeObj.text(this.formattedTime + o.timeSuffix); }
		this.timeDefined = true;
		if (hasChanged) { this._updateDateTime(); }
	},

	//########################################################################
	// call custom onSelect.
	// bind to sliders slidestop, and grid click.
	//########################################################################
	_onSelectHandler: function() {
		var onSelect = this._defaults.onSelect;
		var inputEl = this.$input ? this.$input[0] : null;
		if (onSelect && inputEl) {
			onSelect.apply(inputEl, [this.formattedDateTime, this]);
		}
	},

	//########################################################################
	// left for any backwards compatibility
	//########################################################################
	_formatTime: function(time, format) {
		time = time || { hour: this.hour, minute: this.minute, second: this.second, millisec: this.millisec, ampm: this.ampm, timezone: this.timezone };
		var tmptime = (format || this._defaults.timeFormat).toString();

		tmptime = $.datepicker.formatTime(tmptime, time, this._defaults);

		if (arguments.length) { return tmptime; }
		else { this.formattedTime = tmptime; }
	},

	//########################################################################
	// update our input with the new date time..
	//########################################################################
	_updateDateTime: function(dp_inst) {
		dp_inst = this.inst || dp_inst;
		var dt = $.datepicker._daylightSavingAdjust(new Date(dp_inst.selectedYear, dp_inst.selectedMonth, dp_inst.selectedDay)),
			dateFmt = $.datepicker._get(dp_inst, 'dateFormat'),
			formatCfg = $.datepicker._getFormatConfig(dp_inst),
			timeAvailable = dt !== null && this.timeDefined;
		this.formattedDate = $.datepicker.formatDate(dateFmt, (dt === null ? new Date() : dt), formatCfg);
		var formattedDateTime = this.formattedDate;
		
		// remove following lines to force every changes in date picker to change the input value
		// Bug descriptions: when an input field has a default value, and click on the field to pop up the date picker. 
		// If the user manually empty the value in the input field, the date picker will never change selected value.
		//if (dp_inst.lastVal !== undefined && (dp_inst.lastVal.length > 0 && this.$input.val().length === 0)) {
		//	return;
		//}

		if (this._defaults.timeOnly === true) {
			formattedDateTime = this.formattedTime;
		} else if (this._defaults.timeOnly !== true && (this._defaults.alwaysSetTime || timeAvailable)) {
			formattedDateTime += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix;
		}

		this.formattedDateTime = formattedDateTime;

		if(!this._defaults.showTimepicker) {
			this.$input.val(this.formattedDate);
		} else if (this.$altInput && this._defaults.altFieldTimeOnly === true) {
			this.$altInput.val(this.formattedTime);
			this.$input.val(this.formattedDate);
		} else if(this.$altInput) {
			this.$input.val(formattedDateTime);
			var altFormattedDateTime = '',
				altSeparator = this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
				altTimeSuffix = this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
			if (this._defaults.altFormat)
				altFormattedDateTime = $.datepicker.formatDate(this._defaults.altFormat, (dt === null ? new Date() : dt), formatCfg);
			else
				altFormattedDateTime = this.formattedDate;
			if (altFormattedDateTime)
				altFormattedDateTime += altSeparator;
			if (this._defaults.altTimeFormat)
				altFormattedDateTime += $.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + altTimeSuffix;
			else
				altFormattedDateTime += this.formattedTime + altTimeSuffix;
			this.$altInput.val(altFormattedDateTime);
		} else {
			this.$input.val(formattedDateTime);
		}

		this.$input.trigger("change");
	},

	_onFocus: function() {
		if( !this.$input.val() && this._defaults.defaultValue ) {
			this.$input.val(this._defaults.defaultValue);
			var inst = $.datepicker._getInst(this.$input.get(0)),
			tp_inst = $.datepicker._get(inst, 'timepicker');
			if (tp_inst) {
				if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
					try {
						$.datepicker._updateDatepicker(inst);
					}
					catch (err) {
						$.datepicker.log(err);
					}
				}
			}
		}
	}

});

$.fn.extend({
	//########################################################################
	// shorthand just to use timepicker..
	//########################################################################
	timepicker: function(o) {
		o = o || {};
		var tmp_args = arguments;

		if (typeof o == 'object') { tmp_args[0] = $.extend(o, { timeOnly: true }); }

		return $(this).each(function() {
			$.fn.datetimepicker.apply($(this), tmp_args);
		});
	},

	//########################################################################
	// extend timepicker to datepicker
	//########################################################################
	datetimepicker: function(o) {
		o = o || {};
		var tmp_args = arguments;

		if (typeof(o) == 'string'){
			if(o == 'getDate') {
				return $.fn.datepicker.apply($(this[0]), tmp_args);
            }
			else {
				return this.each(function() {
					var $t = $(this);
					$t.datepicker.apply($t, tmp_args);
				});
            }
		}
		else {
			return this.each(function() {
				var $t = $(this);
				$t.datepicker($.timepicker._newInst($t, o)._defaults);
			});
        }
	}
});

$.datepicker.parseDateTime = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings) {
	var parseRes = parseDateTimeInternal(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings);
	if (parseRes.timeObj)
	{
		var t = parseRes.timeObj;
		parseRes.date.setHours(t.hour, t.minute, t.second, t.millisec);
	}

	return parseRes.date;
};

$.datepicker.parseTime = function(timeFormat, timeString, options) {
	
	//########################################################################
	// pattern for standard and localized AM/PM markers
	//########################################################################
	var getPatternAmpm = function(amNames, pmNames) {
		var markers = [];
		if (amNames) {
			$.merge(markers, amNames);
        }
		if (pmNames) {
			$.merge(markers, pmNames);
        }
		markers = $.map(markers, function(val) { return val.replace(/[.*+?|()\[\]{}\\]/g, '\\$&'); });
		return '(' + markers.join('|') + ')?';
	};
   
	//########################################################################
	// figure out position of time elements.. cause js cant do named captures
	//########################################################################
	var getFormatPositions = function( timeFormat ) {
		var finds = timeFormat.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|t{1,2}|z)/g),
			orders = { h: -1, m: -1, s: -1, l: -1, t: -1, z: -1 };

		if (finds) {
			for (var i = 0; i < finds.length; i++) {
				if (orders[finds[i].toString().charAt(0)] == -1) {
					orders[finds[i].toString().charAt(0)] = i + 1;
                }
            }
        }
		return orders;
	};
    
	var o = extendRemove(extendRemove({}, $.timepicker._defaults), options || {});
    
	var regstr = '^' + timeFormat.toString()
			.replace(/h{1,2}/ig, '(\\d?\\d)')
			.replace(/m{1,2}/ig, '(\\d?\\d)')
			.replace(/s{1,2}/ig, '(\\d?\\d)')
			.replace(/l{1}/ig, '(\\d?\\d?\\d)')
			.replace(/t{1,2}/ig, getPatternAmpm(o.amNames, o.pmNames))
			.replace(/z{1}/ig, '(z|[-+]\\d\\d:?\\d\\d|\\S+)?')
			.replace(/\s/g, '\\s?') + o.timeSuffix + '$',
		order = getFormatPositions(timeFormat),
		ampm = '',
		treg;

	treg = timeString.match(new RegExp(regstr, 'i'));

	var resTime = {hour: 0, minute: 0, second: 0, millisec: 0};
    
	if (treg) {
		if (order.t !== -1) {
			if (treg[order.t] === undefined || treg[order.t].length === 0) {
				ampm = '';
				resTime.ampm = '';
			} else {
				ampm = $.inArray(treg[order.t].toUpperCase(), o.amNames) !== -1 ? 'AM' : 'PM';
				resTime.ampm = o[ampm == 'AM' ? 'amNames' : 'pmNames'][0];
			}
		}

		if (order.h !== -1) {
			if (ampm == 'AM' && treg[order.h] == '12') {
				resTime.hour = 0; // 12am = 0 hour
			} else {
                if (ampm == 'PM' && treg[order.h] != '12') {
                    resTime.hour = parseInt(treg[order.h],10) + 12; // 12pm = 12 hour, any other pm = hour + 12
                }
                else { resTime.hour = Number(treg[order.h]); }
            }
		}

		if (order.m !== -1) { resTime.minute = Number(treg[order.m]); }
		if (order.s !== -1) { resTime.second = Number(treg[order.s]); }
		if (order.l !== -1) { resTime.millisec = Number(treg[order.l]); }
		if (order.z !== -1 && treg[order.z] !== undefined) {
			var tz = treg[order.z].toUpperCase();
			switch (tz.length) {
				case 1:	// Z
					tz = o.timezoneIso8601 ? 'Z' : '+0000';
					break;
				case 5:	// +hhmm
					if (o.timezoneIso8601) {
						tz = tz.substring(1) == '0000' ?
							'Z' :
							tz.substring(0, 3) + ':' + tz.substring(3);
                    }
					break;
				case 6:	// +hh:mm
					if (!o.timezoneIso8601) {
						tz = tz == 'Z' || tz.substring(1) == '00:00' ?
							'+0000' :
							tz.replace(/:/, '');
					} else {
                        if (tz.substring(1) == '00:00') {
                            tz = 'Z';
                        }
                    }
					break;
			}
			resTime.timezone = tz;
		}


		return resTime;
	}

	return false;
};

//########################################################################
// format the time all pretty...
// format = string format of the time
// time = a {}, not a Date() for timezones
// options = essentially the regional[].. amNames, pmNames, ampm
//########################################################################
$.datepicker.formatTime = function(format, time, options) {
	options = options || {};
	options = $.extend({}, $.timepicker._defaults, options);
	time = $.extend({hour:0, minute:0, second:0, millisec:0, timezone:'+0000'}, time);

	var tmptime = format;
	var ampmName = options.amNames[0];

	var hour = parseInt(time.hour, 10);
	if (options.ampm) {
		if (hour > 11){
			ampmName = options.pmNames[0];
			if(hour > 12) {
				hour = hour % 12;
            }
		}
		if (hour === 0) {
			hour = 12;
        }
	}
	tmptime = tmptime.replace(/(?:hh?|mm?|ss?|[tT]{1,2}|[lz]|('.*?'|".*?"))/g, function(match) {
		switch (match.toLowerCase()) {
			case 'hh': return ('0' + hour).slice(-2);
			case 'h':  return hour;
			case 'mm': return ('0' + time.minute).slice(-2);
			case 'm':  return time.minute;
			case 'ss': return ('0' + time.second).slice(-2);
			case 's':  return time.second;
			case 'l':  return ('00' + time.millisec).slice(-3);
			case 'z':  return time.timezone;
			case 't': case 'tt':
				if (options.ampm) {
					if (match.length == 1) {
						ampmName = ampmName.charAt(0);
                    }
					return match.charAt(0) === 'T' ? ampmName.toUpperCase() : ampmName.toLowerCase();
				}
				return '';
			default:
				return match.replace(/\'/g, "") || "'";
		}
	});

	tmptime = $.trim(tmptime);
	return tmptime;
};

//########################################################################
// the bad hack :/ override datepicker so it doesnt close on select
// inspired: http://stackoverflow.com/questions/1252512/jquery-datepicker-prevent-closing-picker-when-clicking-a-date/1762378#1762378
//########################################################################
$.datepicker._base_selectDate = $.datepicker._selectDate;
$.datepicker._selectDate = function (id, dateStr) {
	var inst = this._getInst($(id)[0]),
		tp_inst = this._get(inst, 'timepicker');

	if (tp_inst) {
		tp_inst._limitMinMaxDateTime(inst, true);
		inst.inline = inst.stay_open = true;
		//This way the onSelect handler called from calendarpicker get the full dateTime
		this._base_selectDate(id, dateStr);
		inst.inline = inst.stay_open = false;
		this._notifyChange(inst);
		this._updateDatepicker(inst);
	}
	else { this._base_selectDate(id, dateStr); }
};

//#############################################################################################
// second bad hack :/ override datepicker so it triggers an event when changing the input field
// and does not redraw the datepicker on every selectDate event
//#############################################################################################
$.datepicker._base_updateDatepicker = $.datepicker._updateDatepicker;
$.datepicker._updateDatepicker = function(inst) {

	// don't popup the datepicker if there is another instance already opened
	var input = inst.input[0];
	if($.datepicker._curInst &&
	   $.datepicker._curInst != inst &&
	   $.datepicker._datepickerShowing &&
	   $.datepicker._lastInput != input) {
		return;
	}

	if (typeof(inst.stay_open) !== 'boolean' || inst.stay_open === false) {

		this._base_updateDatepicker(inst);

		// Reload the time control when changing something in the input text field.
		var tp_inst = this._get(inst, 'timepicker');
		if(tp_inst) {
			tp_inst._addTimePicker(inst);

			if (tp_inst._defaults.useLocalTimezone) { //checks daylight saving with the new date.
				var date = new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay, 12);
				selectLocalTimeZone(tp_inst, date);
				tp_inst._onTimeChange();
			}
		}
	}
};

//#######################################################################################
// third bad hack :/ override datepicker so it allows spaces and colon in the input field
//#######################################################################################
$.datepicker._base_doKeyPress = $.datepicker._doKeyPress;
$.datepicker._doKeyPress = function(event) {
	var inst = $.datepicker._getInst(event.target),
		tp_inst = $.datepicker._get(inst, 'timepicker');

	if (tp_inst) {
		if ($.datepicker._get(inst, 'constrainInput')) {
			var ampm = tp_inst._defaults.ampm,
				dateChars = $.datepicker._possibleChars($.datepicker._get(inst, 'dateFormat')),
				datetimeChars = tp_inst._defaults.timeFormat.toString()
								.replace(/[hms]/g, '')
								.replace(/TT/g, ampm ? 'APM' : '')
								.replace(/Tt/g, ampm ? 'AaPpMm' : '')
								.replace(/tT/g, ampm ? 'AaPpMm' : '')
								.replace(/T/g, ampm ? 'AP' : '')
								.replace(/tt/g, ampm ? 'apm' : '')
								.replace(/t/g, ampm ? 'ap' : '') +
								" " +
								tp_inst._defaults.separator +
								tp_inst._defaults.timeSuffix +
								(tp_inst._defaults.showTimezone ? tp_inst._defaults.timezoneList.join('') : '') +
								(tp_inst._defaults.amNames.join('')) +
								(tp_inst._defaults.pmNames.join('')) +
								dateChars,
				chr = String.fromCharCode(event.charCode === undefined ? event.keyCode : event.charCode);
			return event.ctrlKey || (chr < ' ' || !dateChars || datetimeChars.indexOf(chr) > -1);
		}
	}

	return $.datepicker._base_doKeyPress(event);
};

//#######################################################################################
// Override key up event to sync manual input changes.
//#######################################################################################
$.datepicker._base_doKeyUp = $.datepicker._doKeyUp;
$.datepicker._doKeyUp = function (event) {
	var inst = $.datepicker._getInst(event.target),
		tp_inst = $.datepicker._get(inst, 'timepicker');

	if (tp_inst) {
		if (tp_inst._defaults.timeOnly && (inst.input.val() != inst.lastVal)) {
			try {
				$.datepicker._updateDatepicker(inst);
			}
			catch (err) {
				$.datepicker.log(err);
			}
		}
	}

	return $.datepicker._base_doKeyUp(event);
};

//#######################################################################################
// override "Today" button to also grab the time.
//#######################################################################################
$.datepicker._base_gotoToday = $.datepicker._gotoToday;
$.datepicker._gotoToday = function(id) {
	var inst = this._getInst($(id)[0]),
		$dp = inst.dpDiv;
	this._base_gotoToday(id);
	var tp_inst = this._get(inst, 'timepicker');
	selectLocalTimeZone(tp_inst);
	var now = new Date();
	this._setTime(inst, now);
	$( '.ui-datepicker-today', $dp).click();
};

//#######################################################################################
// Disable & enable the Time in the datetimepicker
//#######################################################################################
$.datepicker._disableTimepickerDatepicker = function(target) {
	var inst = this._getInst(target);
    if (!inst) { return; }
    
	var tp_inst = this._get(inst, 'timepicker');
	$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
	if (tp_inst) {
		tp_inst._defaults.showTimepicker = false;
		tp_inst._updateDateTime(inst);
	}
};

$.datepicker._enableTimepickerDatepicker = function(target) {
	var inst = this._getInst(target);
    if (!inst) { return; }
    
	var tp_inst = this._get(inst, 'timepicker');
	$(target).datepicker('getDate'); // Init selected[Year|Month|Day]
	if (tp_inst) {
		tp_inst._defaults.showTimepicker = true;
		tp_inst._addTimePicker(inst); // Could be disabled on page load
		tp_inst._updateDateTime(inst);
	}
};

//#######################################################################################
// Create our own set time function
//#######################################################################################
$.datepicker._setTime = function(inst, date) {
	var tp_inst = this._get(inst, 'timepicker');
	if (tp_inst) {
		var defaults = tp_inst._defaults,
			// calling _setTime with no date sets time to defaults
			hour = date ? date.getHours() : defaults.hour,
			minute = date ? date.getMinutes() : defaults.minute,
			second = date ? date.getSeconds() : defaults.second,
			millisec = date ? date.getMilliseconds() : defaults.millisec;
		//check if within min/max times..
		// correct check if within min/max times. 	
		// Rewritten by Scott A. Woodward
		var hourEq = hour === defaults.hourMin,
			minuteEq = minute === defaults.minuteMin,
			secondEq = second === defaults.secondMin;
		var reset = false;
		if(hour < defaults.hourMin || hour > defaults.hourMax)  
			reset = true;
		else if( (minute < defaults.minuteMin || minute > defaults.minuteMax) && hourEq)
			reset = true;
		else if( (second < defaults.secondMin || second > defaults.secondMax ) && hourEq && minuteEq)
			reset = true;
		else if( (millisec < defaults.millisecMin || millisec > defaults.millisecMax) && hourEq && minuteEq && secondEq)
			reset = true;
		if(reset) {
			hour = defaults.hourMin;
			minute = defaults.minuteMin;
			second = defaults.secondMin;
			millisec = defaults.millisecMin;
		}
		tp_inst.hour = hour;
		tp_inst.minute = minute;
		tp_inst.second = second;
		tp_inst.millisec = millisec;
		if (tp_inst.hour_slider) tp_inst.hour_slider.slider('value', hour);
		if (tp_inst.minute_slider) tp_inst.minute_slider.slider('value', minute);
		if (tp_inst.second_slider) tp_inst.second_slider.slider('value', second);
		if (tp_inst.millisec_slider) tp_inst.millisec_slider.slider('value', millisec);

		tp_inst._onTimeChange();
		tp_inst._updateDateTime(inst);
	}
};

//#######################################################################################
// Create new public method to set only time, callable as $().datepicker('setTime', date)
//#######################################################################################
$.datepicker._setTimeDatepicker = function(target, date, withDate) {
	var inst = this._getInst(target);
    if (!inst) { return; }
    
	var tp_inst = this._get(inst, 'timepicker');
    
	if (tp_inst) {
		this._setDateFromField(inst);
		var tp_date;
		if (date) {
			if (typeof date == "string") {
				tp_inst._parseTime(date, withDate);
				tp_date = new Date();
				tp_date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec);
			}
			else { tp_date = new Date(date.getTime()); }
			if (tp_date.toString() == 'Invalid Date') { tp_date = undefined; }
			this._setTime(inst, tp_date);
		}
	}

};

//#######################################################################################
// override setDate() to allow setting time too within Date object
//#######################################################################################
$.datepicker._base_setDateDatepicker = $.datepicker._setDateDatepicker;
$.datepicker._setDateDatepicker = function(target, date) {
	var inst = this._getInst(target);
    if (!inst) { return; }
    
	var tp_date = (date instanceof Date) ? new Date(date.getTime()) : date;

	this._updateDatepicker(inst);
	this._base_setDateDatepicker.apply(this, arguments);
	this._setTimeDatepicker(target, tp_date, true);
};

//#######################################################################################
// override getDate() to allow getting time too within Date object
//#######################################################################################
$.datepicker._base_getDateDatepicker = $.datepicker._getDateDatepicker;
$.datepicker._getDateDatepicker = function(target, noDefault) {
	var inst = this._getInst(target);
    if (!inst) { return; }
    
    var tp_inst = this._get(inst, 'timepicker');

	if (tp_inst) {
		this._setDateFromField(inst, noDefault);
		var date = this._getDate(inst);
		if (date && tp_inst._parseTime($(target).val(), tp_inst.timeOnly)) { date.setHours(tp_inst.hour, tp_inst.minute, tp_inst.second, tp_inst.millisec); }
		return date;
	}
	return this._base_getDateDatepicker(target, noDefault);
};

//#######################################################################################
// override parseDate() because UI 1.8.14 throws an error about "Extra characters"
// An option in datapicker to ignore extra format characters would be nicer.
//#######################################################################################
$.datepicker._base_parseDate = $.datepicker.parseDate;
$.datepicker.parseDate = function(format, value, settings) {
    var splitRes = splitDateTime(format, value, settings);
	return $.datepicker._base_parseDate(format, splitRes[0], settings);
};

//#######################################################################################
// override formatDate to set date with time to the input
//#######################################################################################
$.datepicker._base_formatDate = $.datepicker._formatDate;
$.datepicker._formatDate = function(inst, day, month, year){
	var tp_inst = this._get(inst, 'timepicker');
	if(tp_inst) {
		tp_inst._updateDateTime(inst);
		return tp_inst.$input.val();
	}
	return this._base_formatDate(inst);
};

//#######################################################################################
// override options setter to add time to maxDate(Time) and minDate(Time). MaxDate
//#######################################################################################
$.datepicker._base_optionDatepicker = $.datepicker._optionDatepicker;
$.datepicker._optionDatepicker = function(target, name, value) {
	var inst = this._getInst(target);
    if (!inst) { return null; }
    
	var tp_inst = this._get(inst, 'timepicker');
	if (tp_inst) {
		var min = null, max = null, onselect = null;
		if (typeof name == 'string') { // if min/max was set with the string
			if (name === 'minDate' || name === 'minDateTime' ) {
				min = value;
            }
			else {
                if (name === 'maxDate' || name === 'maxDateTime') {
                    max = value;
                }
                else {
                    if (name === 'onSelect') {
                        onselect = value;
                    }
                }
            }
		} else {
            if (typeof name == 'object') { //if min/max was set with the JSON
                if (name.minDate) {
                    min = name.minDate;
                } else {
                    if (name.minDateTime) {
                        min = name.minDateTime;
                    } else {
                        if (name.maxDate) {
                            max = name.maxDate;
                        } else {
                            if (name.maxDateTime) {
                                max = name.maxDateTime;
                            }
                        }
                    }
                }
            }
        }
		if(min) { //if min was set
			if (min === 0) {
				min = new Date();
            } else {
				min = new Date(min);
            }

			tp_inst._defaults.minDate = min;
			tp_inst._defaults.minDateTime = min;
		} else if (max) { //if max was set
			if(max===0) {
				max=new Date();
            } else {
				max= new Date(max);
            }
			tp_inst._defaults.maxDate = max;
			tp_inst._defaults.maxDateTime = max;
		} else if (onselect) {
			tp_inst._defaults.onSelect = onselect;
        }
	}
	if (value === undefined) {
		return this._base_optionDatepicker(target, name);
    }
	return this._base_optionDatepicker(target, name, value);
};

//#######################################################################################
// jQuery extend now ignores nulls!
//#######################################################################################
function extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props) {
		if (props[name] === null || props[name] === undefined) {
			target[name] = props[name];
        }
    }
	return target;
}

//#######################################################################################
// Splits datetime string into date ans time substrings.
// Throws exception when date can't be parsed
// If only date is present, time substring eill be '' 
//#######################################################################################
var splitDateTime = function(dateFormat, dateTimeString, dateSettings)
{
	try {
		var date = $.datepicker._base_parseDate(dateFormat, dateTimeString, dateSettings);
	} catch (err) {
		if (err.indexOf(":") >= 0) {
			// Hack!  The error message ends with a colon, a space, and
			// the "extra" characters.  We rely on that instead of
			// attempting to perfectly reproduce the parsing algorithm.
            var dateStringLength = dateTimeString.length-(err.length-err.indexOf(':')-2);
            var timeString = dateTimeString.substring(dateStringLength);

            return [dateTimeString.substring(0, dateStringLength), dateTimeString.substring(dateStringLength)];
            
		} else {
			throw err;
		}
	}
	return [dateTimeString, ''];
};

//#######################################################################################
// Internal function to parse datetime interval
// Returns: {date: Date, timeObj: Object}, where
//   date - parsed date without time (type Date)
//   timeObj = {hour: , minute: , second: , millisec: } - parsed time. Optional
//#######################################################################################
var parseDateTimeInternal = function(dateFormat, timeFormat, dateTimeString, dateSettings, timeSettings)
{
    var date;
    var splitRes = splitDateTime(dateFormat, dateTimeString, dateSettings);
	date = $.datepicker._base_parseDate(dateFormat, splitRes[0], dateSettings);
    if (splitRes[1] !== '')
    {
        var timeString = splitRes[1];
        var separator = timeSettings && timeSettings.separator ? timeSettings.separator : $.timepicker._defaults.separator;            
        if ( timeString.indexOf(separator) !== 0) {
            throw 'Missing time separator';
        }
        timeString = timeString.substring(separator.length);
        var parsedTime = $.datepicker.parseTime(timeFormat, timeString, timeSettings);
        if (parsedTime === null) {
            throw 'Wrong time format';
        }
        return {date: date, timeObj: parsedTime};
    } else {
        return {date: date};
    }
};

//#######################################################################################
// Internal function to set timezone_select to the local timezone
//#######################################################################################
var selectLocalTimeZone = function(tp_inst, date)
{
	if (tp_inst && tp_inst.timezone_select) {
		tp_inst._defaults.useLocalTimezone = true;
		var now = typeof date !== 'undefined' ? date : new Date();
		var tzoffset = $.timepicker.timeZoneOffsetString(now);
		if (tp_inst._defaults.timezoneIso8601) {
			tzoffset = tzoffset.substring(0, 3) + ':' + tzoffset.substring(3);
        }
		tp_inst.timezone_select.val(tzoffset);
	}
};

$.timepicker = new Timepicker(); // singleton instance

/**
 * Get the timezone offset as string from a date object (eg '+0530' for UTC+5.5)
 * @param  date
 * @return string
 */
$.timepicker.timeZoneOffsetString = function(date) {
	var off = date.getTimezoneOffset() * -1,
		minutes = off % 60,
		hours = (off-minutes) / 60;
	return (off >= 0 ? '+' : '-') + ('0'+(hours*101).toString()).substr(-2) + ('0'+(minutes*101).toString()).substr(-2);
};

//#######################################################################################
// Changes by simonvwade to better handle time range limits
//#######################################################################################
/**
 * Calls `timepicker()` on the `startTime` and `endTime` elements, and configures them to
 * enforce date range limits.
 * n.b. The input value must be correctly formatted (reformatting is not supported)
 * @param  Element startTime
 * @param  Element endTime
 * @param  obj options Options for the timepicker() call
 * @return jQuery
 */
$.timepicker.timeRange = function( startTime, endTime, options ) {
	return $.timepicker.handleRange('timepicker', startTime, endTime, options);
}

/**
 * Calls `datetimepicker` on the `startTime` and `endTime` elements, and configures them to
 * enforce date range limits.
 * @param  Element startTime
 * @param  Element endTime
 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
 * @param  string method Can be used to specify the type of picker to be added
 * @return jQuery
 */
$.timepicker.dateTimeRange = function( startTime, endTime, options ) {
	$.timepicker.dateRange(startTime, endTime, options, 'datetimepicker');
}

/**
 * Calls `method` on the `startTime` and `endTime` elements, and configures them to
 * enforce date range limits.
 * @param  Element startTime
 * @param  Element endTime
 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
 * @param  string method Can be used to specify the type of picker to be added
 * @return jQuery
 */
$.timepicker.dateRange = function( startTime, endTime, options, method ) {
	method = method || 'datepicker';
	$.timepicker.handleRange(method, startTime, endTime, options);
}

/**
 * Calls `method` on the `startTime` and `endTime` elements, and configures them to
 * enforce date range limits.
 * @param  string method Can be used to specify the type of picker to be added
 * @param  Element startTime
 * @param  Element endTime
 * @param  obj options Options for the `timepicker()` call. Also supports `reformat`,
 *   a boolean value that can be used to reformat the input values to the `dateFormat`.
 * @return jQuery
 */
$.timepicker.handleRange = function( method, startTime, endTime, options ) {
	$.fn[method].call(startTime, $.extend({
			onClose: function(dateText, inst) {
				checkDates(this, endTime, dateText);
			},
			onSelect: function (selectedDateTime) {
				selected(this, endTime, 'minDate');
			}
		}, options, options.start)
	);
	$.fn[method].call(endTime, $.extend({
			onClose: function(dateText, inst) {
				checkDates(this, startTime, dateText);
			},
			onSelect: function (selectedDateTime) {
				selected(this, startTime, 'maxDate');
			}
		}, options, options.end)
	);
	// timepicker doesn't provide access to its 'timeFormat' option, 
	// nor could I get datepicker.formatTime() to behave with times, so I
	// have disabled reformatting for timepicker
	if( method != 'timepicker' && options.reformat ) {
		$([startTime, endTime]).each(function() {
			var format = $(this)[method].call($(this), 'option', 'dateFormat'),
				date = new Date($(this).val());
			if( $(this).val() && date ) {
				$(this).val($.datepicker.formatDate(format, date));
			}
		});
	}
	checkDates(startTime, endTime, startTime.val());
	function checkDates(changed, other, dateText) {
		if( other.val() && (new Date(startTime.val()) > new Date(endTime.val())) ) {
			other.val(dateText);
		}
	}
	selected(startTime, endTime, 'minDate');
	selected(endTime, startTime, 'maxDate');
	function selected(changed, other, option) {
		if( !$(changed).val() ) {
			return;
		}
		var date = $(changed)[method].call($(changed), 'getDate');
		// timepicker doesn't implement 'getDate' and returns a jQuery
		if( date.getTime ) {
			$(other)[method].call($(other), 'option', option, date);
		}
	}
	return $([startTime.get(0), endTime.get(0)]);
};

$.timepicker.version = "1.0.2";

})(jQuery);

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-inlinesvg-svg-svgclippaths-touch-shiv-mq-cssclasses-teststyles-prefixes-ie8compat-load
 */
;window.Modernizr=function(a,b,c){function y(a){j.cssText=a}function z(a,b){return y(m.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={svg:"http://www.w3.org/2000/svg"},o={},p={},q={},r=[],s=r.slice,t,u=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},v=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return u("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:u(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},o.svg=function(){return!!b.createElementNS&&!!b.createElementNS(n.svg,"svg").createSVGRect},o.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==n.svg},o.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(n.svg,"clipPath")))};for(var D in o)x(o,D)&&(t=D.toLowerCase(),e[t]=o[D](),r.push((e[t]?"":"no-")+t));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.mq=v,e.testStyles=u,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+r.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&document.documentMode===7});
/*!
 * jQuery blockUI plugin
 * Version 2.66.0-2013.10.09
 * Requires jQuery v1.7 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2013 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function() {
/*jshint eqeqeq:false curly:false latedef:false */
"use strict";

	function setup($) {
		$.fn._fadeIn = $.fn.fadeIn;

		var noOp = $.noop || function() {};

		// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
		// confusing userAgent strings on Vista)
		var msie = /MSIE/.test(navigator.userAgent);
		var ie6  = /MSIE 6.0/.test(navigator.userAgent) && ! /MSIE 8.0/.test(navigator.userAgent);
		var mode = document.documentMode || 0;
		var setExpr = $.isFunction( document.createElement('div').style.setExpression );

		// global $ methods for blocking/unblocking the entire page
		$.blockUI   = function(opts) { install(window, opts); };
		$.unblockUI = function(opts) { remove(window, opts); };

		// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
		$.growlUI = function(title, message, timeout, onClose) {
			var $m = $('<div class="growlUI"></div>');
			if (title) $m.append('<h1>'+title+'</h1>');
			if (message) $m.append('<h2>'+message+'</h2>');
			if (timeout === undefined) timeout = 3000;

			// Added by konapun: Set timeout to 30 seconds if this growl is moused over, like normal toast notifications
			var callBlock = function(opts) {
				opts = opts || {};

				$.blockUI({
					message: $m,
					fadeIn : typeof opts.fadeIn  !== 'undefined' ? opts.fadeIn  : 700,
					fadeOut: typeof opts.fadeOut !== 'undefined' ? opts.fadeOut : 1000,
					timeout: typeof opts.timeout !== 'undefined' ? opts.timeout : timeout,
					centerY: false,
					showOverlay: false,
					onUnblock: onClose,
					css: $.blockUI.defaults.growlCSS
				});
			};

			callBlock();
			var nonmousedOpacity = $m.css('opacity');
			$m.mouseover(function() {
				callBlock({
					fadeIn: 0,
					timeout: 30000
				});

				var displayBlock = $('.blockMsg');
				displayBlock.stop(); // cancel fadeout if it has started
				displayBlock.fadeTo(300, 1); // make it easier to read the message by removing transparency
			}).mouseout(function() {
				$('.blockMsg').fadeOut(1000);
			});
			// End konapun additions
		};

		// plugin method for blocking element content
		$.fn.block = function(opts) {
			if ( this[0] === window ) {
				$.blockUI( opts );
				return this;
			}
			var fullOpts = $.extend({}, $.blockUI.defaults, opts || {});
			this.each(function() {
				var $el = $(this);
				if (fullOpts.ignoreIfBlocked && $el.data('blockUI.isBlocked'))
					return;
				$el.unblock({ fadeOut: 0 });
			});

			return this.each(function() {
				if ($.css(this,'position') == 'static') {
					this.style.position = 'relative';
					$(this).data('blockUI.static', true);
				}
				this.style.zoom = 1; // force 'hasLayout' in ie
				install(this, opts);
			});
		};

		// plugin method for unblocking element content
		$.fn.unblock = function(opts) {
			if ( this[0] === window ) {
				$.unblockUI( opts );
				return this;
			}
			return this.each(function() {
				remove(this, opts);
			});
		};

		$.blockUI.version = 2.66; // 2nd generation blocking at no extra cost!

		// override these in your code to change the default behavior and style
		$.blockUI.defaults = {
			// message displayed when blocking (use null for no message)
			message:  '<h1>Please wait...</h1>',

			title: null,		// title string; only used when theme == true
			draggable: true,	// only used when theme == true (requires jquery-ui.js to be loaded)

			theme: false, // set to true to use with jQuery UI themes

			// styles for the message when blocking; if you wish to disable
			// these and use an external stylesheet then do this in your code:
			// $.blockUI.defaults.css = {};
			css: {
				padding:	0,
				margin:		0,
				width:		'30%',
				top:		'40%',
				left:		'35%',
				textAlign:	'center',
				color:		'#000',
				border:		'3px solid #aaa',
				backgroundColor:'#fff',
				cursor:		'wait'
			},

			// minimal style set used when themes are used
			themedCSS: {
				width:	'30%',
				top:	'40%',
				left:	'35%'
			},

			// styles for the overlay
			overlayCSS:  {
				backgroundColor:	'#000',
				opacity:			0.6,
				cursor:				'wait'
			},

			// style to replace wait cursor before unblocking to correct issue
			// of lingering wait cursor
			cursorReset: 'default',

			// styles applied when using $.growlUI
			growlCSS: {
				width:		'350px',
				top:		'10px',
				left:		'',
				right:		'10px',
				border:		'none',
				padding:	'5px',
				opacity:	0.6,
				cursor:		'default',
				color:		'#fff',
				backgroundColor: '#000',
				'-webkit-border-radius':'10px',
				'-moz-border-radius':	'10px',
				'border-radius':		'10px'
			},

			// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
			// (hat tip to Jorge H. N. de Vasconcelos)
			/*jshint scripturl:true */
			iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

			// force usage of iframe in non-IE browsers (handy for blocking applets)
			forceIframe: false,

			// z-index for the blocking overlay
			baseZ: 1000,

			// set these to true to have the message automatically centered
			centerX: true, // <-- only effects element blocking (page block controlled via css above)
			centerY: true,

			// allow body element to be stetched in ie6; this makes blocking look better
			// on "short" pages.  disable if you wish to prevent changes to the body height
			allowBodyStretch: true,

			// enable if you want key and mouse events to be disabled for content that is blocked
			bindEvents: true,

			// be default blockUI will supress tab navigation from leaving blocking content
			// (if bindEvents is true)
			constrainTabKey: true,

			// fadeIn time in millis; set to 0 to disable fadeIn on block
			fadeIn:  200,

			// fadeOut time in millis; set to 0 to disable fadeOut on unblock
			fadeOut:  400,

			// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
			timeout: 0,

			// disable if you don't want to show the overlay
			showOverlay: true,

			// if true, focus will be placed in the first available input field when
			// page blocking
			focusInput: true,

            // elements that can receive focus
            focusableElements: ':input:enabled:visible',

			// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
			// no longer needed in 2012
			// applyPlatformOpacityRules: true,

			// callback method invoked when fadeIn has completed and blocking message is visible
			onBlock: null,

			// callback method invoked when unblocking has completed; the callback is
			// passed the element that has been unblocked (which is the window object for page
			// blocks) and the options that were passed to the unblock call:
			//	onUnblock(element, options)
			onUnblock: null,

			// callback method invoked when the overlay area is clicked.
			// setting this will turn the cursor to a pointer, otherwise cursor defined in overlayCss will be used.
			onOverlayClick: null,

			// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
			quirksmodeOffsetHack: 4,

			// class name of the message block
			blockMsgClass: 'blockMsg',

			// if it is already blocked, then ignore it (don't unblock and reblock)
			ignoreIfBlocked: false
		};

		// private data and functions follow...

		var pageBlock = null;
		var pageBlockEls = [];

		function install(el, opts) {
			var css, themedCSS;
			var full = (el == window);
			var msg = (opts && opts.message !== undefined ? opts.message : undefined);
			opts = $.extend({}, $.blockUI.defaults, opts || {});

			if (opts.ignoreIfBlocked && $(el).data('blockUI.isBlocked'))
				return;

			opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
			css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
			if (opts.onOverlayClick)
				opts.overlayCSS.cursor = 'pointer';

			themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
			msg = msg === undefined ? opts.message : msg;

			// remove the current block (if there is one)
			if (full && pageBlock)
				remove(window, {fadeOut:0});

			// if an existing element is being used as the blocking content then we capture
			// its current place in the DOM (and current display style) so we can restore
			// it when we unblock
			if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
				var node = msg.jquery ? msg[0] : msg;
				var data = {};
				$(el).data('blockUI.history', data);
				data.el = node;
				data.parent = node.parentNode;
				data.display = node.style.display;
				data.position = node.style.position;
				if (data.parent)
					data.parent.removeChild(node);
			}

			$(el).data('blockUI.onUnblock', opts.onUnblock);
			var z = opts.baseZ;

			// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
			// layer1 is the iframe layer which is used to supress bleed through of underlying content
			// layer2 is the overlay layer which has opacity and a wait cursor (by default)
			// layer3 is the message content that is displayed while blocking
			var lyr1, lyr2, lyr3, s;
			if (msie || opts.forceIframe)
				lyr1 = $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>');
			else
				lyr1 = $('<div class="blockUI" style="display:none"></div>');

			if (opts.theme)
				lyr2 = $('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+ (z++) +';display:none"></div>');
			else
				lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

			if (opts.theme && full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:fixed">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (opts.theme) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(z+10)+';display:none;position:absolute">';
				if ( opts.title ) {
					s += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(opts.title || '&nbsp;')+'</div>';
				}
				s += '<div class="ui-widget-content ui-dialog-content"></div>';
				s += '</div>';
			}
			else if (full) {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockPage" style="z-index:'+(z+10)+';display:none;position:fixed"></div>';
			}
			else {
				s = '<div class="blockUI ' + opts.blockMsgClass + ' blockElement" style="z-index:'+(z+10)+';display:none;position:absolute"></div>';
			}
			lyr3 = $(s);

			// if we have a message, style it
			if (msg) {
				if (opts.theme) {
					lyr3.css(themedCSS);
					lyr3.addClass('ui-widget-content');
				}
				else
					lyr3.css(css);
			}

			// style the overlay
			if (!opts.theme /*&& (!opts.applyPlatformOpacityRules)*/)
				lyr2.css(opts.overlayCSS);
			lyr2.css('position', full ? 'fixed' : 'absolute');

			// make iframe layer transparent in IE
			if (msie || opts.forceIframe)
				lyr1.css('opacity',0.0);

			//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
			var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
			$.each(layers, function() {
				this.appendTo($par);
			});

			if (opts.theme && opts.draggable && $.fn.draggable) {
				lyr3.draggable({
					handle: '.ui-dialog-titlebar',
					cancel: 'li'
				});
			}

			// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
			var expr = setExpr && (!$.support.boxModel || $('object,embed', full ? null : el).length > 0);
			if (ie6 || expr) {
				// give body 100% height
				if (full && opts.allowBodyStretch && $.support.boxModel)
					$('html,body').css('height','100%');

				// fix ie6 issue when blocked element has a border width
				if ((ie6 || !$.support.boxModel) && !full) {
					var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
					var fixT = t ? '(0 - '+t+')' : 0;
					var fixL = l ? '(0 - '+l+')' : 0;
				}

				// simulate fixed position
				$.each(layers, function(i,o) {
					var s = o[0].style;
					s.position = 'absolute';
					if (i < 2) {
						if (full)
							s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"');
						else
							s.setExpression('height','this.parentNode.offsetHeight + "px"');
						if (full)
							s.setExpression('width','jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"');
						else
							s.setExpression('width','this.parentNode.offsetWidth + "px"');
						if (fixL) s.setExpression('left', fixL);
						if (fixT) s.setExpression('top', fixT);
					}
					else if (opts.centerY) {
						if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
						s.marginTop = 0;
					}
					else if (!opts.centerY && full) {
						var top = (opts.css && opts.css.top) ? parseInt(opts.css.top, 10) : 0;
						var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
						s.setExpression('top',expression);
					}
				});
			}

			// show the message
			if (msg) {
				if (opts.theme)
					lyr3.find('.ui-widget-content').append(msg);
				else
					lyr3.append(msg);
				if (msg.jquery || msg.nodeType)
					$(msg).show();
			}

			if ((msie || opts.forceIframe) && opts.showOverlay)
				lyr1.show(); // opacity is zero
			if (opts.fadeIn) {
				var cb = opts.onBlock ? opts.onBlock : noOp;
				var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
				var cb2 = msg ? cb : noOp;
				if (opts.showOverlay)
					lyr2._fadeIn(opts.fadeIn, cb1);
				if (msg)
					lyr3._fadeIn(opts.fadeIn, cb2);
			}
			else {
				if (opts.showOverlay)
					lyr2.show();
				if (msg)
					lyr3.show();
				if (opts.onBlock)
					opts.onBlock();
			}

			// bind key and mouse events
			bind(1, el, opts);

			if (full) {
				pageBlock = lyr3[0];
				pageBlockEls = $(opts.focusableElements,pageBlock);
				if (opts.focusInput)
					setTimeout(focus, 20);
			}
			else
				center(lyr3[0], opts.centerX, opts.centerY);

			if (opts.timeout) {
				// auto-unblock
				var to = setTimeout(function() {
					if (full)
						$.unblockUI(opts);
					else
						$(el).unblock(opts);
				}, opts.timeout);
				$(el).data('blockUI.timeout', to);
			}
		}

		// remove the block
		function remove(el, opts) {
			var count;
			var full = (el == window);
			var $el = $(el);
			var data = $el.data('blockUI.history');
			var to = $el.data('blockUI.timeout');
			if (to) {
				clearTimeout(to);
				$el.removeData('blockUI.timeout');
			}
			opts = $.extend({}, $.blockUI.defaults, opts || {});
			bind(0, el, opts); // unbind events

			if (opts.onUnblock === null) {
				opts.onUnblock = $el.data('blockUI.onUnblock');
				$el.removeData('blockUI.onUnblock');
			}

			var els;
			if (full) // crazy selector to handle odd field errors in ie6/7
				els = $('body').children().filter('.blockUI').add('body > .blockUI');
			else
				els = $el.find('>.blockUI');

			// fix cursor issue
			if ( opts.cursorReset ) {
				if ( els.length > 1 )
					els[1].style.cursor = opts.cursorReset;
				if ( els.length > 2 )
					els[2].style.cursor = opts.cursorReset;
			}

			if (full)
				pageBlock = pageBlockEls = null;

			if (opts.fadeOut) {
				count = els.length;
				els.stop().fadeOut(opts.fadeOut, function() {
					if ( --count === 0)
						reset(els,data,opts,el);
				});
			}
			else
				reset(els, data, opts, el);
		}

		// move blocking element back into the DOM where it started
		function reset(els,data,opts,el) {
			var $el = $(el);
			if ( $el.data('blockUI.isBlocked') )
				return;

			els.each(function(i,o) {
				// remove via DOM calls so we don't lose event handlers
				if (this.parentNode)
					this.parentNode.removeChild(this);
			});

			if (data && data.el) {
				data.el.style.display = data.display;
				data.el.style.position = data.position;
				if (data.parent)
					data.parent.appendChild(data.el);
				$el.removeData('blockUI.history');
			}

			if ($el.data('blockUI.static')) {
				$el.css('position', 'static'); // #22
			}

			if (typeof opts.onUnblock == 'function')
				opts.onUnblock(el,opts);

			// fix issue in Safari 6 where block artifacts remain until reflow
			var body = $(document.body), w = body.width(), cssW = body[0].style.width;
			body.width(w-1).width(w);
			body[0].style.width = cssW;
		}

		// bind/unbind the handler
		function bind(b, el, opts) {
			var full = el == window, $el = $(el);

			// don't bother unbinding if there is nothing to unbind
			if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
				return;

			$el.data('blockUI.isBlocked', b);

			// don't bind events when overlay is not in use or if bindEvents is false
			if (!full || !opts.bindEvents || (b && !opts.showOverlay))
				return;

			// bind anchors and inputs for mouse and key events
			var events = 'mousedown mouseup keydown keypress keyup touchstart touchend touchmove';
			if (b)
				$(document).bind(events, opts, handler);
			else
				$(document).unbind(events, handler);

		// former impl...
		//		var $e = $('a,:input');
		//		b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
		}

		// event handler to suppress keyboard/mouse events when blocking
		function handler(e) {
			// allow tab navigation (conditionally)
			if (e.type === 'keydown' && e.keyCode && e.keyCode == 9) {
				if (pageBlock && e.data.constrainTabKey) {
					var els = pageBlockEls;
					var fwd = !e.shiftKey && e.target === els[els.length-1];
					var back = e.shiftKey && e.target === els[0];
					if (fwd || back) {
						setTimeout(function(){focus(back);},10);
						return false;
					}
				}
			}
			var opts = e.data;
			var target = $(e.target);
			if (target.hasClass('blockOverlay') && opts.onOverlayClick)
				opts.onOverlayClick(e);

			// allow events within the message content
			if (target.parents('div.' + opts.blockMsgClass).length > 0)
				return true;

			// allow events for content that is not being blocked
			return target.parents().children().filter('div.blockUI').length === 0;
		}

		function focus(back) {
			if (!pageBlockEls)
				return;
			var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
			if (e)
				e.focus();
		}

		function center(el, x, y) {
			var p = el.parentNode, s = el.style;
			var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
			var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
			if (x) s.left = l > 0 ? (l+'px') : '0';
			if (y) s.top  = t > 0 ? (t+'px') : '0';
		}

		function sz(el, p) {
			return parseInt($.css(el,p),10)||0;
		}

	}


	/*global define:true */
	if (typeof define === 'function' && define.amd && define.amd.jQuery) {
		define(['jquery'], setup);
	} else {
		setup(jQuery);
	}

})();

/* jquery.sparkline 2.1.1 - http://omnipotent.net/jquery.sparkline/ 
** Licensed under the New BSD License - see above site for details */

(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):a(jQuery)})(function(a){"use strict";var b={},c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I=0;c=function(){return{common:{type:"line",lineColor:"#00f",fillColor:"#cdf",defaultPixelsPerValue:3,width:"auto",height:"auto",composite:!1,tagValuesAttribute:"values",tagOptionsPrefix:"spark",enableTagOptions:!1,enableHighlight:!0,highlightLighten:1.4,tooltipSkipNull:!0,tooltipPrefix:"",tooltipSuffix:"",disableHiddenCheck:!1,numberFormatter:!1,numberDigitGroupCount:3,numberDigitGroupSep:",",numberDecimalMark:".",disableTooltips:!1,disableInteraction:!1},line:{spotColor:"#f80",highlightSpotColor:"#5f5",highlightLineColor:"#f22",spotRadius:1.5,minSpotColor:"#f80",maxSpotColor:"#f80",lineWidth:1,normalRangeMin:undefined,normalRangeMax:undefined,normalRangeColor:"#ccc",drawNormalOnTop:!1,chartRangeMin:undefined,chartRangeMax:undefined,chartRangeMinX:undefined,chartRangeMaxX:undefined,tooltipFormat:new e('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:"#3366cc",negBarColor:"#f44",stackedBarColor:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],zeroColor:undefined,nullColor:undefined,zeroAxis:!0,barWidth:4,barSpacing:1,chartRangeMax:undefined,chartRangeMin:undefined,chartRangeClip:!1,colorMap:undefined,tooltipFormat:new e('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:"#6f6",negBarColor:"#f44",zeroBarColor:"#999",colorMap:{},tooltipFormat:new e('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{"-1":"Loss",0:"Draw",1:"Win"}}},discrete:{lineHeight:"auto",thresholdColor:undefined,thresholdValue:0,chartRangeMax:undefined,chartRangeMin:undefined,chartRangeClip:!1,tooltipFormat:new e("{{prefix}}{{value}}{{suffix}}")},bullet:{targetColor:"#f33",targetWidth:3,performanceColor:"#33f",rangeColors:["#d3dafe","#a8b6ff","#7f94ff"],base:undefined,tooltipFormat:new e("{{fieldkey:fields}} - {{value}}"),tooltipValueLookups:{fields:{r:"Range",p:"Performance",t:"Target"}}},pie:{offset:0,sliceColors:["#3366cc","#dc3912","#ff9900","#109618","#66aa00","#dd4477","#0099c6","#990099"],borderWidth:0,borderColor:"#000",tooltipFormat:new e('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:!1,boxLineColor:"#000",boxFillColor:"#cdf",whiskerColor:"#000",outlierLineColor:"#333",outlierFillColor:"#fff",medianColor:"#f00",showOutliers:!0,outlierIQR:1.5,spotRadius:1.5,target:undefined,targetColor:"#4a2",chartRangeMax:undefined,chartRangeMin:undefined,tooltipFormat:new e("{{field:fields}}: {{value}}"),tooltipFormatFieldlistKey:"field",tooltipValueLookups:{fields:{lq:"Lower Quartile",med:"Median",uq:"Upper Quartile",lo:"Left Outlier",ro:"Right Outlier",lw:"Left Whisker",rw:"Right Whisker"}}}}},B='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',d=function(){var b,c;return b=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(b.prototype=a.extend(new arguments[0],arguments[arguments.length-1]),b._super=arguments[0].prototype):b.prototype=arguments[arguments.length-1],arguments.length>2&&(c=Array.prototype.slice.call(arguments,1,-1),c.unshift(b.prototype),a.extend.apply(a,c))):b.prototype=arguments[0],b.prototype.cls=b,b},a.SPFormatClass=e=d({fre:/\{\{([\w.]+?)(:(.+?))?\}\}/g,precre:/(\w+)\.(\d+)/,init:function(a,b){this.format=a,this.fclass=b},render:function(a,b,c){var d=this,e=a,f,g,h,i,j;return this.format.replace(this.fre,function(){var a;return g=arguments[1],h=arguments[3],f=d.precre.exec(g),f?(j=f[2],g=f[1]):j=!1,i=e[g],i===undefined?"":h&&b&&b[h]?(a=b[h],a.get?b[h].get(i)||i:b[h][i]||i):(k(i)&&(c.get("numberFormatter")?i=c.get("numberFormatter")(i):i=p(i,j,c.get("numberDigitGroupCount"),c.get("numberDigitGroupSep"),c.get("numberDecimalMark"))),i)})}}),a.spformat=function(a,b){return new e(a,b)},f=function(a,b,c){return a<b?b:a>c?c:a},g=function(a,b){var c;return b===2?(c=Math.floor(a.length/2),a.length%2?a[c]:(a[c-1]+a[c])/2):a.length%2?(c=(a.length*b+b)/4,c%1?(a[Math.floor(c)]+a[Math.floor(c)-1])/2:a[c-1]):(c=(a.length*b+2)/4,c%1?(a[Math.floor(c)]+a[Math.floor(c)-1])/2:a[c-1])},h=function(a){var b;switch(a){case"undefined":a=undefined;break;case"null":a=null;break;case"true":a=!0;break;case"false":a=!1;break;default:b=parseFloat(a),a==b&&(a=b)}return a},i=function(a){var b,c=[];for(b=a.length;b--;)c[b]=h(a[b]);return c},j=function(a,b){var c,d,e=[];for(c=0,d=a.length;c<d;c++)a[c]!==b&&e.push(a[c]);return e},k=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},p=function(b,c,d,e,f){var g,h;b=(c===!1?parseFloat(b).toString():b.toFixed(c)).split(""),g=(g=a.inArray(".",b))<0?b.length:g,g<b.length&&(b[g]=f);for(h=g-d;h>0;h-=d)b.splice(h,0,e);return b.join("")},l=function(a,b,c){var d;for(d=b.length;d--;){if(c&&b[d]===null)continue;if(b[d]!==a)return!1}return!0},m=function(a){var b=0,c;for(c=a.length;c--;)b+=typeof a[c]=="number"?a[c]:0;return b},o=function(b){return a.isArray(b)?b:[b]},n=function(a){var b;document.createStyleSheet?document.createStyleSheet().cssText=a:(b=document.createElement("style"),b.type="text/css",document.getElementsByTagName("head")[0].appendChild(b),b[typeof document.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=a)},a.fn.simpledraw=function(b,c,d,e){var f,g;if(d&&(f=this.data("_jqs_vcanvas")))return f;b===undefined&&(b=a(this).innerWidth()),c===undefined&&(c=a(this).innerHeight());if(a.fn.sparkline.hasCanvas)f=new F(b,c,this,e);else{if(!a.fn.sparkline.hasVML)return!1;f=new G(b,c,this)}return g=a(this).data("_jqs_mhandler"),g&&g.registerCanvas(f),f},a.fn.cleardraw=function(){var a=this.data("_jqs_vcanvas");a&&a.reset()},a.RangeMapClass=q=d({init:function(a){var b,c,d=[];for(b in a)a.hasOwnProperty(b)&&typeof b=="string"&&b.indexOf(":")>-1&&(c=b.split(":"),c[0]=c[0].length===0?-Infinity:parseFloat(c[0]),c[1]=c[1].length===0?Infinity:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1},get:function(a){var b=this.rangelist,c,d,e;if((e=this.map[a])!==undefined)return e;if(b)for(c=b.length;c--;){d=b[c];if(d[0]<=a&&d[1]>=a)return d[2]}return undefined}}),a.range_map=function(a){return new q(a)},r=d({init:function(b,c){var d=a(b);this.$el=d,this.options=c,this.currentPageX=0,this.currentPageY=0,this.el=b,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!c.get("disableTooltips"),this.highlightEnabled=!c.get("disableHighlight")},registerSparkline:function(a){this.splist.push(a),this.over&&this.updateDisplay()},registerCanvas:function(b){var c=a(b.canvas);this.canvas=b,this.$canvas=c,c.mouseenter(a.proxy(this.mouseenter,this)),c.mouseleave(a.proxy(this.mouseleave,this)),c.click(a.proxy(this.mouseclick,this))},reset:function(a){this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=undefined)},mouseclick:function(b){var c=a.Event("sparklineClick");c.originalEvent=b,c.sparklines=this.splist,this.$el.trigger(c)},mouseenter:function(b){a(document.body).unbind("mousemove.jqs"),a(document.body).bind("mousemove.jqs",a.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new s(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()},mouseleave:function(){a(document.body).unbind("mousemove.jqs");var b=this.splist,c=b.length,d=!1,e,f;this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null);for(f=0;f<c;f++)e=b[f],e.clearRegionHighlight()&&(d=!0);d&&this.canvas.render()},mousemove:function(a){this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()},updateDisplay:function(){var b=this.splist,c=b.length,d=!1,e=this.$canvas.offset(),f=this.currentPageX-e.left,g=this.currentPageY-e.top,h,i,j,k,l;if(!this.over)return;for(j=0;j<c;j++)i=b[j],k=i.setRegionHighlight(this.currentEl,f,g),k&&(d=!0);if(d){l=a.Event("sparklineRegionChange"),l.sparklines=this.splist,this.$el.trigger(l);if(this.tooltip){h="";for(j=0;j<c;j++)i=b[j],h+=i.getCurrentRegionTooltip();this.tooltip.setContent(h)}this.disableHighlight||this.canvas.render()}k===null&&this.mouseleave()}}),s=d({sizeStyle:"position: static !important;display: block !important;visibility: hidden !important;float: left !important;",init:function(b){var c=b.get("tooltipClassname","jqstooltip"),d=this.sizeStyle,e;this.container=b.get("tooltipContainer")||document.body,this.tooltipOffsetX=b.get("tooltipOffsetX",10),this.tooltipOffsetY=b.get("tooltipOffsetY",12),a("#jqssizetip").remove(),a("#jqstooltip").remove(),this.sizetip=a("<div/>",{id:"jqssizetip",style:d,"class":c}),this.tooltip=a("<div/>",{id:"jqstooltip","class":c}).appendTo(this.container),e=this.tooltip.offset(),this.offsetLeft=e.left,this.offsetTop=e.top,this.hidden=!0,a(window).unbind("resize.jqs scroll.jqs"),a(window).bind("resize.jqs scroll.jqs",a.proxy(this.updateWindowDims,this)),this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=a(window).scrollTop(),this.scrollLeft=a(window).scrollLeft(),this.scrollRight=this.scrollLeft+a(window).width(),this.updatePosition()},getSize:function(a){this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()},setContent:function(a){if(!a){this.tooltip.css("visibility","hidden"),this.hidden=!0;return}this.getSize(a),this.tooltip.html(a).css({width:this.width,height:this.height,visibility:"visible"}),this.hidden&&(this.hidden=!1,this.updatePosition())},updatePosition:function(a,b){if(a===undefined){if(this.mousex===undefined)return;a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop}else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;if(!this.height||!this.width||this.hidden)return;b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({left:a,top:b})},remove:function(){this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=undefined,a(window).unbind("resize.jqs scroll.jqs")}}),C=function(){n(B)},a(C),H=[],a.fn.sparkline=function(b,c){return this.each(function(){var d=new a.fn.sparkline.options(this,c),e=a(this),f,g;f=function(){var c,f,g,h,i,j,k;if(b==="html"||b===undefined){k=this.getAttribute(d.get("tagValuesAttribute"));if(k===undefined||k===null)k=e.html();c=k.replace(/(^\s*<!--)|(-->\s*$)|\s+/g,"").split(",")}else c=b;f=d.get("width")==="auto"?c.length*d.get("defaultPixelsPerValue"):d.get("width");if(d.get("height")==="auto"){if(!d.get("composite")||!a.data(this,"_jqs_vcanvas"))h=document.createElement("span"),h.innerHTML="a",e.html(h),g=a(h).innerHeight()||a(h).height(),a(h).remove(),h=null}else g=d.get("height");d.get("disableInteraction")?i=!1:(i=a.data(this,"_jqs_mhandler"),i?d.get("composite")||i.reset():(i=new r(this,d),a.data(this,"_jqs_mhandler",i)));if(d.get("composite")&&!a.data(this,"_jqs_vcanvas")){a.data(this,"_jqs_errnotify")||(alert("Attempted to attach a composite sparkline to an element with no existing sparkline"),a.data(this,"_jqs_errnotify",!0));return}j=new(a.fn.sparkline[d.get("type")])(this,c,d,f,g),j.render(),i&&i.registerSparkline(j)};if(a(this).html()&&!d.get("disableHiddenCheck")&&a(this).is(":hidden")||a.fn.jquery<"1.3.0"&&a(this).parents().is(":hidden")||!a(this).parents("body").length){if(!d.get("composite")&&a.data(this,"_jqs_pending"))for(g=H.length;g;g--)H[g-1][0]==this&&H.splice(g-1,1);H.push([this,f]),a.data(this,"_jqs_pending",!0)}else f.call(this)})},a.fn.sparkline.defaults=c(),a.sparkline_display_visible=function(){var b,c,d,e=[];for(c=0,d=H.length;c<d;c++)b=H[c][0],a(b).is(":visible")&&!a(b).parents().is(":hidden")?(H[c][1].call(b),a.data(H[c][0],"_jqs_pending",!1),e.push(c)):!a(b).closest("html").length&&!a.data(b,"_jqs_pending")&&(a.data(H[c][0],"_jqs_pending",!1),e.push(c));for(c=e.length;c;c--)H.splice(e[c-1],1)},a.fn.sparkline.options=d({init:function(c,d){var e,f,g,h;this.userOptions=d=d||{},this.tag=c,this.tagValCache={},f=a.fn.sparkline.defaults,g=f.common,this.tagOptionsPrefix=d.enableTagOptions&&(d.tagOptionsPrefix||g.tagOptionsPrefix),h=this.getTagSetting("type"),h===b?e=f[d.type||g.type]:e=f[h],this.mergedOptions=a.extend({},g,e,d)},getTagSetting:function(a){var c=this.tagOptionsPrefix,d,e,f,g;if(c===!1||c===undefined)return b;if(this.tagValCache.hasOwnProperty(a))d=this.tagValCache.key;else{d=this.tag.getAttribute(c+a);if(d===undefined||d===null)d=b;else if(d.substr(0,1)==="["){d=d.substr(1,d.length-2).split(",");for(e=d.length;e--;)d[e]=h(d[e].replace(/(^\s*)|(\s*$)/g,""))}else if(d.substr(0,1)==="{"){f=d.substr(1,d.length-2).split(","),d={};for(e=f.length;e--;)g=f[e].split(":",2),d[g[0].replace(/(^\s*)|(\s*$)/g,"")]=h(g[1].replace(/(^\s*)|(\s*$)/g,""))}else d=h(d);this.tagValCache.key=d}return d},get:function(a,c){var d=this.getTagSetting(a),e;return d!==b?d:(e=this.mergedOptions[a])===undefined?c:e}}),a.fn.sparkline._base=d({disabled:!1,init:function(b,c,d,e,f){this.el=b,this.$el=a(b),this.values=c,this.options=d,this.width=e,this.height=f,this.currentRegion=undefined},initTarget:function(){var a=!this.options.get("disableInteraction");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get("composite"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0},render:function(){return this.disabled?(this.el.innerHTML="",!1):!0},getRegion:function(a,b){},setRegionHighlight:function(a,b,c){var d=this.currentRegion,e=!this.options.get("disableHighlight"),f;return b>this.canvasWidth||c>this.canvasHeight||b<0||c<0?null:(f=this.getRegion(a,b,c),d!==f?(d!==undefined&&e&&this.removeHighlight(),this.currentRegion=f,f!==undefined&&e&&this.renderHighlight(),!0):!1)},clearRegionHighlight:function(){return this.currentRegion!==undefined?(this.removeHighlight(),this.currentRegion=undefined,!0):!1},renderHighlight:function(){this.changeHighlight(!0)},removeHighlight:function(){this.changeHighlight(!1)},changeHighlight:function(a){},getCurrentRegionTooltip:function(){var b=this.options,c="",d=[],f,g,h,i,j,k,l,m,n,o,p,q,r,s;if(this.currentRegion===undefined)return"";f=this.getCurrentRegionFields(),p=b.get("tooltipFormatter");if(p)return p(this,b,f);b.get("tooltipChartTitle")&&(c+='<div class="jqs jqstitle">'+b.get("tooltipChartTitle")+"</div>\n"),g=this.options.get("tooltipFormat");if(!g)return"";a.isArray(g)||(g=[g]),a.isArray(f)||(f=[f]),l=this.options.get("tooltipFormatFieldlist"),m=this.options.get("tooltipFormatFieldlistKey");if(l&&m){n=[];for(k=f.length;k--;)o=f[k][m],(s=a.inArray(o,l))!=-1&&(n[s]=f[k]);f=n}h=g.length,r=f.length;for(k=0;k<h;k++){q=g[k],typeof q=="string"&&(q=new e(q)),i=q.fclass||"jqsfield";for(s=0;s<r;s++)if(!f[s].isNull||!b.get("tooltipSkipNull"))a.extend(f[s],{prefix:b.get("tooltipPrefix"),suffix:b.get("tooltipSuffix")}),j=q.render(f[s],b.get("tooltipValueLookups"),b),d.push('<div class="'+i+'">'+j+"</div>")}return d.length?c+d.join("\n"):""},getCurrentRegionFields:function(){},calcHighlightColor:function(a,b){var c=b.get("highlightColor"),d=b.get("highlightLighten"),e,g,h,i;if(c)return c;if(d){e=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a);if(e){h=[],g=a.length===4?16:1;for(i=0;i<3;i++)h[i]=f(Math.round(parseInt(e[i+1],16)*g*d),0,255);return"rgb("+h.join(",")+")"}}return a}}),t={changeHighlight:function(b){var c=this.currentRegion,d=this.target,e=this.regionShapes[c],f;e&&(f=this.renderRegion(c,b),a.isArray(f)||a.isArray(e)?(d.replaceWithShapes(e,f),this.regionShapes[c]=a.map(f,function(a){return a.id})):(d.replaceWithShape(e,f),this.regionShapes[c]=f.id))},render:function(){var b=this.values,c=this.target,d=this.regionShapes,e,f,g,h;if(!this.cls._super.render.call(this))return;for(g=b.length;g--;){e=this.renderRegion(g);if(e)if(a.isArray(e)){f=[];for(h=e.length;h--;)e[h].append(),f.push(e[h].id);d[g]=f}else e.append(),d[g]=e.id;else d[g]=null}c.render()}},a.fn.sparkline.line=u=d(a.fn.sparkline._base,{type:"line",init:function(a,b,c,d,e){u._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()},getRegion:function(a,b,c){var d,e=this.regionMap;for(d=e.length;d--;)if(e[d]!==null&&b>=e[d][0]&&b<=e[d][1])return e[d][2];return undefined},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.yvalues[a]===null,x:this.xvalues[a],y:this.yvalues[a],color:this.options.get("lineColor"),fillColor:this.options.get("fillColor"),offset:a}},renderHighlight:function(){var a=this.currentRegion,b=this.target,c=this.vertices[a],d=this.options,e=d.get("spotRadius"),f=d.get("highlightSpotColor"),g=d.get("highlightLineColor"),h,i;if(!c)return;e&&f&&(h=b.drawCircle(c[0],c[1],e,undefined,f),this.highlightSpotId=h.id,b.insertAfterShape(this.lastShapeId,h)),g&&(i=b.drawLine(c[0],this.canvasTop,c[0],this.canvasTop+this.canvasHeight,g),this.highlightLineId=i.id,b.insertAfterShape(this.lastShapeId,i))},removeHighlight:function(){var a=this.target;this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)},scanValues:function(){var a=this.values,b=a.length,c=this.xvalues,d=this.yvalues,e=this.yminmax,f,g,h,i,j;for(f=0;f<b;f++)g=a[f],h=typeof a[f]=="string",i=typeof a[f]=="object"&&a[f]instanceof Array,j=h&&a[f].split(":"),h&&j.length===2?(c.push(Number(j[0])),d.push(Number(j[1])),e.push(Number(j[1]))):i?(c.push(g[0]),d.push(g[1]),e.push(g[1])):(c.push(f),a[f]===null||a[f]==="null"?d.push(null):(d.push(Number(g)),e.push(Number(g))));this.options.get("xvalues")&&(c=this.options.get("xvalues")),this.maxy=this.maxyorg=Math.max.apply(Math,e),this.miny=this.minyorg=Math.min.apply(Math,e),this.maxx=Math.max.apply(Math,c),this.minx=Math.min.apply(Math,c),this.xvalues=c,this.yvalues=d,this.yminmax=e},processRangeOptions:function(){var a=this.options,b=a.get("normalRangeMin"),c=a.get("normalRangeMax");b!==undefined&&(b<this.miny&&(this.miny=b),c>this.maxy&&(this.maxy=c)),a.get("chartRangeMin")!==undefined&&(a.get("chartRangeClip")||a.get("chartRangeMin")<this.miny)&&(this.miny=a.get("chartRangeMin")),a.get("chartRangeMax")!==undefined&&(a.get("chartRangeClip")||a.get("chartRangeMax")>this.maxy)&&(this.maxy=a.get("chartRangeMax")),a.get("chartRangeMinX")!==undefined&&(a.get("chartRangeClipX")||a.get("chartRangeMinX")<this.minx)&&(this.minx=a.get("chartRangeMinX")),a.get("chartRangeMaxX")!==undefined&&(a.get("chartRangeClipX")||a.get("chartRangeMaxX")>this.maxx)&&(this.maxx=a.get("chartRangeMaxX"))},drawNormalRange:function(a,b,c,d,e){var f=this.options.get("normalRangeMin"),g=this.options.get("normalRangeMax"),h=b+Math.round(c-c*((g-this.miny)/e)),i=Math.round(c*(g-f)/e);this.target.drawRect(a,h,d,i,undefined,this.options.get("normalRangeColor")).append()},render:function(){var b=this.options,c=this.target,d=this.canvasWidth,e=this.canvasHeight,f=this.vertices,g=b.get("spotRadius"),h=this.regionMap,i,j,k,l,m,n,o,p,r,s,t,v,w,x,y,z,A,B,C,D,E,F,G,H,I;if(!u._super.render.call(this))return;this.scanValues(),this.processRangeOptions(),G=this.xvalues,H=this.yvalues;if(!this.yminmax.length||this.yvalues.length<2)return;l=m=0,i=this.maxx-this.minx===0?1:this.maxx-this.minx,j=this.maxy-this.miny===0?1:this.maxy-this.miny,k=this.yvalues.length-1,g&&(d<g*4||e<g*4)&&(g=0);if(g){E=b.get("highlightSpotColor")&&!b.get("disableInteraction");if(E||b.get("minSpotColor")||b.get("spotColor")&&H[k]===this.miny)e-=Math.ceil(g);if(E||b.get("maxSpotColor")||b.get("spotColor")&&H[k]===this.maxy)e-=Math.ceil(g),l+=Math.ceil(g);if(E||(b.get("minSpotColor")||b.get("maxSpotColor"))&&(H[0]===this.miny||H[0]===this.maxy))m+=Math.ceil(g),d-=Math.ceil(g);if(E||b.get("spotColor")||b.get("minSpotColor")||b.get("maxSpotColor")&&(H[k]===this.miny||H[k]===this.maxy))d-=Math.ceil(g)}e--,b.get("normalRangeMin")!==undefined&&!b.get("drawNormalOnTop")&&this.drawNormalRange(m,l,e,d,j),o=[],p=[o],x=y=null,z=H.length;for(I=0;I<z;I++)r=G[I],t=G[I+1],s=H[I],v=m+Math.round((r-this.minx)*(d/i)),w=I<z-1?m+Math.round((t-this.minx)*(d/i)):d,y=v+(w-v)/2,h[I]=[x||0,y,I],x=y,s===null?I&&(H[I-1]!==null&&(o=[],p.push(o)),f.push(null)):(s<this.miny&&(s=this.miny),s>this.maxy&&(s=this.maxy),o.length||o.push([v,l+e]),n=[v,l+Math.round(e-e*((s-this.miny)/j))],o.push(n),f.push(n));A=[],B=[],C=p.length;for(I=0;I<C;I++)o=p[I],o.length&&(b.get("fillColor")&&(o.push([o[o.length-1][0],l+e]),B.push(o.slice(0)),o.pop()),o.length>2&&(o[0]=[o[0][0],o[1][1]]),A.push(o));C=B.length;for(I=0;I<C;I++)c.drawShape(B[I],b.get("fillColor"),b.get("fillColor")).append();b.get("normalRangeMin")!==undefined&&b.get("drawNormalOnTop")&&this.drawNormalRange(m,l,e,d,j),C=A.length;for(I=0;I<C;I++)c.drawShape(A[I],b.get("lineColor"),undefined,b.get("lineWidth")).append();if(g&&b.get("valueSpots")){D=b.get("valueSpots"),D.get===undefined&&(D=new q(D));for(I=0;I<z;I++)F=D.get(H[I]),F&&c.drawCircle(m+Math.round((G[I]-this.minx)*(d/i)),l+Math.round(e-e*((H[I]-this.miny)/j)),g,undefined,F).append()}g&&b.get("spotColor")&&H[k]!==null&&c.drawCircle(m+Math.round((G[G.length-1]-this.minx)*(d/i)),l+Math.round(e-e*((H[k]-this.miny)/j)),g,undefined,b.get("spotColor")).append(),this.maxy!==this.minyorg&&(g&&b.get("minSpotColor")&&(r=G[a.inArray(this.minyorg,H)],c.drawCircle(m+Math.round((r-this.minx)*(d/i)),l+Math.round(e-e*((this.minyorg-this.miny)/j)),g,undefined,b.get("minSpotColor")).append()),g&&b.get("maxSpotColor")&&(r=G[a.inArray(this.maxyorg,H)],c.drawCircle(m+Math.round((r-this.minx)*(d/i)),l+Math.round(e-e*((this.maxyorg-this.miny)/j)),g,undefined,b.get("maxSpotColor")).append())),this.lastShapeId=c.getLastShapeId(),this.canvasTop=l,c.render()}}),a.fn.sparkline.bar=v=d(a.fn.sparkline._base,t,{type:"bar",init:function(b,c,d,e,g){var k=parseInt(d.get("barWidth"),10),l=parseInt(d.get("barSpacing"),10),m=d.get("chartRangeMin"),n=d.get("chartRangeMax"),o=d.get("chartRangeClip"),p=Infinity,r=-Infinity,s,t,u,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P;v._super.init.call(this,b,c,d,e,g);for(y=0,z=c.length;y<z;y++){M=c[y],s=typeof M=="string"&&M.indexOf(":")>-1;if(s||a.isArray(M))H=!0,s&&(M=c[y]=i(M.split(":"))),M=j(M,null),t=Math.min.apply(Math,M),u=Math.max.apply(Math,M),t<p&&(p=t),u>r&&(r=u)}this.stacked=H,this.regionShapes={},this.barWidth=k,this.barSpacing=l,this.totalBarWidth=k+l,this.width=e=c.length*k+(c.length-1)*l,this.initTarget(),o&&(F=m===undefined?-Infinity:m,G=n===undefined?Infinity:n),x=[],w=H?[]:x;var Q=[],R=[];for(y=0,z=c.length;y<z;y++)if(H){I=c[y],c[y]=L=[],Q[y]=0,w[y]=R[y]=0;for(J=0,K=I.length;J<K;J++)M=L[J]=o?f(I[J],F,G):I[J],M!==null&&(M>0&&(Q[y]+=M),p<0&&r>0?M<0?R[y]+=Math.abs(M):w[y]+=M:w[y]+=Math.abs(M-(M<0?r:p)),x.push(M))}else M=o?f(c[y],F,G):c[y],M=c[y]=h(M),M!==null&&x.push(M);this.max=E=Math.max.apply(Math,x),this.min=D=Math.min.apply(Math,x),this.stackMax=r=H?Math.max.apply(Math,Q):E,this.stackMin=p=H?Math.min.apply(Math,x):D,d.get("chartRangeMin")!==undefined&&(d.get("chartRangeClip")||d.get("chartRangeMin")<D)&&(D=d.get("chartRangeMin")),d.get("chartRangeMax")!==undefined&&(d.get("chartRangeClip")||d.get("chartRangeMax")>E)&&(E=d.get("chartRangeMax")),this.zeroAxis=B=d.get("zeroAxis",!0),D<=0&&E>=0&&B?C=0:B==0?C=D:D>0?C=D:C=E,this.xaxisOffset=C,A=H?Math.max.apply(Math,w)+Math.max.apply(Math,R):E-D,this.canvasHeightEf=B&&D<0?this.canvasHeight-2:this.canvasHeight-1,D<C?(O=H&&E>=0?r:E,N=(O-C)/A*this.canvasHeight,N!==Math.ceil(N)&&(this.canvasHeightEf-=2,N=Math.ceil(N))):N=this.canvasHeight,this.yoffset=N,a.isArray(d.get("colorMap"))?(this.colorMapByIndex=d.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=d.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===undefined&&(this.colorMapByValue=new q(this.colorMapByValue))),this.range=A},getRegion:function(a,b,c){var d=Math.floor(b/this.totalBarWidth);return d<0||d>=this.values.length?undefined:d},getCurrentRegionFields:function(){var a=this.currentRegion,b=o(this.values[a]),c=[],d,e;for(e=b.length;e--;)d=b[e],c.push({isNull:d===null,value:d,color:this.calcColor(e,d,a),offset:a});return c},calcColor:function(b,c,d){var e=this.colorMapByIndex,f=this.colorMapByValue,g=this.options,h,i;return this.stacked?h=g.get("stackedBarColor"):h=c<0?g.get("negBarColor"):g.get("barColor"),c===0&&g.get("zeroColor")!==undefined&&(h=g.get("zeroColor")),f&&(i=f.get(c))?h=i:e&&e.length>d&&(h=e[d]),a.isArray(h)?h[b%h.length]:h},renderRegion:function(b,c){var d=this.values[b],e=this.options,f=this.xaxisOffset,g=[],h=this.range,i=this.stacked,j=this.target,k=b*this.totalBarWidth,m=this.canvasHeightEf,n=this.yoffset,o,p,q,r,s,t,u,v,w,x;d=a.isArray(d)?d:[d],u=d.length,v=d[0],r=l(null,d),x=l(f,d,!0);if(r)return e.get("nullColor")?(q=c?e.get("nullColor"):this.calcHighlightColor(e.get("nullColor"),e),o=n>0?n-1:n,j.drawRect(k,o,this.barWidth-1,0,q,q)):undefined;s=n;for(t=0;t<u;t++){v=d[t];if(i&&v===f){if(!x||w)continue;w=!0}h>0?p=Math.floor(m*(Math.abs(v-f)/h))+1:p=1,v<f||v===f&&n===0?(o=s,s+=p):(o=n-p,n-=p),q=this.calcColor(t,v,b),c&&(q=this.calcHighlightColor(q,e)),g.push(j.drawRect(k,o,this.barWidth-1,p-1,q,q))}return g.length===1?g[0]:g}}),a.fn.sparkline.tristate=w=d(a.fn.sparkline._base,t,{type:"tristate",init:function(b,c,d,e,f){var g=parseInt(d.get("barWidth"),10),h=parseInt(d.get("barSpacing"),10);w._super.init.call(this,b,c,d,e,f),this.regionShapes={},this.barWidth=g,this.barSpacing=h,this.totalBarWidth=g+h,this.values=a.map(c,Number),this.width=e=c.length*g+(c.length-1)*h,a.isArray(d.get("colorMap"))?(this.colorMapByIndex=d.get("colorMap"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=d.get("colorMap"),this.colorMapByValue&&this.colorMapByValue.get===undefined&&(this.colorMapByValue=new q(this.colorMapByValue))),this.initTarget()},getRegion:function(a,b,c){return Math.floor(b/this.totalBarWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===undefined,value:this.values[a],color:this.calcColor(this.values[a],a),offset:a}},calcColor:function(a,b){var c=this.values,d=this.options,e=this.colorMapByIndex,f=this.colorMapByValue,g,h;return f&&(h=f.get(a))?g=h:e&&e.length>b?g=e[b]:c[b]<0?g=d.get("negBarColor"):c[b]>0?g=d.get("posBarColor"):g=d.get("zeroBarColor"),g},renderRegion:function(a,b){var c=this.values,d=this.options,e=this.target,f,g,h,i,j,k;f=e.pixelHeight,h=Math.round(f/2),i=a*this.totalBarWidth,c[a]<0?(j=h,g=h-1):c[a]>0?(j=0,g=h-1):(j=h-1,g=2),k=this.calcColor(c[a],a);if(k===null)return;return b&&(k=this.calcHighlightColor(k,d)),e.drawRect(i,j,this.barWidth-1,g-1,k,k)}}),a.fn.sparkline.discrete=x=d(a.fn.sparkline._base,t,{type:"discrete",init:function(b,c,d,e,f){x._super.init.call(this,b,c,d,e,f),this.regionShapes={},this.values=c=a.map(c,Number),this.min=Math.min.apply(Math,c),this.max=Math.max.apply(Math,c),this.range=this.max-this.min,this.width=e=d.get("width")==="auto"?c.length*2:this.width,this.interval=Math.floor(e/c.length),this.itemWidth=e/c.length,d.get("chartRangeMin")!==undefined&&(d.get("chartRangeClip")||d.get("chartRangeMin")<this.min)&&(this.min=d.get("chartRangeMin")),d.get("chartRangeMax")!==undefined&&(d.get("chartRangeClip")||d.get("chartRangeMax")>this.max)&&(this.max=d.get("chartRangeMax")),this.initTarget(),this.target&&(this.lineHeight=d.get("lineHeight")==="auto"?Math.round(this.canvasHeight*.3):d.get("lineHeight"))},getRegion:function(a,b,c){return Math.floor(b/this.itemWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===undefined,value:this.values[a],offset:a}},renderRegion:function(a,b){var c=this.values,d=this.options,e=this.min,g=this.max,h=this.range,i=this.interval,j=this.target,k=this.canvasHeight,l=this.lineHeight,m=k-l,n,o,p,q;return o=f(c[a],e,g),q=a*i,n=Math.round(m-m*((o-e)/h)),p=d.get("thresholdColor")&&o<d.get("thresholdValue")?d.get("thresholdColor"):d.get("lineColor"),b&&(p=this.calcHighlightColor(p,d)),j.drawLine(q,n,q,n+l,p)}}),a.fn.sparkline.bullet=y=d(a.fn.sparkline._base,{type:"bullet",init:function(a,b,c,d,e){var f,g,h;y._super.init.call(this,a,b,c,d,e),this.values=b=i(b),h=b.slice(),h[0]=h[0]===null?h[2]:h[0],h[1]=b[1]===null?h[2]:h[1],f=Math.min.apply(Math,b),g=Math.max.apply(Math,b),c.get("base")===undefined?f=f<0?f:0:f=c.get("base"),this.min=f,this.max=g,this.range=g-f,this.shapes={},this.valueShapes={},this.regiondata={},this.width=d=c.get("width")==="auto"?"4.0em":d,this.target=this.$el.simpledraw(d,e,c.get("composite")),b.length||(this.disabled=!0),this.initTarget()},getRegion:function(a,b,c){var d=this.target.getShapeAt(a,b,c);return d!==undefined&&this.shapes[d]!==undefined?this.shapes[d]:undefined},getCurrentRegionFields:function(){var a=this.currentRegion;return{fieldkey:a.substr(0,1),value:this.values[a.substr(1)],region:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.valueShapes[b],d;delete this.shapes[c];switch(b.substr(0,1)){case"r":d=this.renderRange(b.substr(1),a);break;case"p":d=this.renderPerformance(a);break;case"t":d=this.renderTarget(a)}this.valueShapes[b]=d.id,this.shapes[d.id]=b,this.target.replaceWithShape(c,d)},renderRange:function(a,b){var c=this.values[a],d=Math.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get("rangeColors")[a-2];return b&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,0,d-1,this.canvasHeight-1,e,e)},renderPerformance:function(a){var b=this.values[1],c=Math.round(this.canvasWidth*((b-this.min)/this.range)),d=this.options.get("performanceColor");return a&&(d=this.calcHighlightColor(d,this.options)),this.target.drawRect(0,Math.round(this.canvasHeight*.3),c-1,Math.round(this.canvasHeight*.4)-1,d,d)},renderTarget:function(a){var b=this.values[0],c=Math.round(this.canvasWidth*((b-this.min)/this.range)-this.options.get("targetWidth")/2),d=Math.round(this.canvasHeight*.1),e=this.canvasHeight-d*2,f=this.options.get("targetColor");return a&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(c,d,this.options.get("targetWidth")-1,e-1,f,f)},render:function(){var a=this.values.length,b=this.target,c,d;if(!y._super.render.call(this))return;for(c=2;c<a;c++)d=this.renderRange(c).append(),this.shapes[d.id]="r"+c,this.valueShapes["r"+c]=d.id;this.values[1]!==null&&(d=this.renderPerformance().append(),this.shapes[d.id]="p1",this.valueShapes.p1=d.id),this.values[0]!==null&&(d=this.renderTarget().append(),this.shapes[d.id]="t0",this.valueShapes.t0=d.id),b.render()}}),a.fn.sparkline.pie=z=d(a.fn.sparkline._base,{type:"pie",init:function(b,c,d,e,f){var g=0,h;z._super.init.call(this,b,c,d,e,f),this.shapes={},this.valueShapes={},this.values=c=a.map(c,Number),d.get("width")==="auto"&&(this.width=this.height);if(c.length>0)for(h=c.length;h--;)g+=c[h];this.total=g,this.initTarget(),this.radius=Math.floor(Math.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(a,b,c){var d=this.target.getShapeAt(a,b,c);return d!==undefined&&this.shapes[d]!==undefined?this.shapes[d]:undefined},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===undefined,value:this.values[a],percent:this.values[a]/this.total*100,color:this.options.get("sliceColors")[a%this.options.get("sliceColors").length],offset:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b},renderSlice:function(a,b){var c=this.target,d=this.options,e=this.radius,f=d.get("borderWidth"),g=d.get("offset"),h=2*Math.PI,i=this.values,j=this.total,k=g?2*Math.PI*(g/360):0,l,m,n,o,p;o=i.length;for(n=0;n<o;n++){l=k,m=k,j>0&&(m=k+h*(i[n]/j));if(a===n)return p=d.get("sliceColors")[n%d.get("sliceColors").length],b&&(p=this.calcHighlightColor(p,d)),c.drawPieSlice(e,e,e-f,l,m,undefined,p);k=m}},render:function(){var a=this.target,b=this.values,c=this.options,d=this.radius,e=c.get("borderWidth"),f,g;if(!z._super.
render.call(this))return;e&&a.drawCircle(d,d,Math.floor(d-e/2),c.get("borderColor"),undefined,e).append();for(g=b.length;g--;)b[g]&&(f=this.renderSlice(g).append(),this.valueShapes[g]=f.id,this.shapes[f.id]=g);a.render()}}),a.fn.sparkline.box=A=d(a.fn.sparkline._base,{type:"box",init:function(b,c,d,e,f){A._super.init.call(this,b,c,d,e,f),this.values=a.map(c,Number),this.width=d.get("width")==="auto"?"4.0em":e,this.initTarget(),this.values.length||(this.disabled=1)},getRegion:function(){return 1},getCurrentRegionFields:function(){var a=[{field:"lq",value:this.quartiles[0]},{field:"med",value:this.quartiles[1]},{field:"uq",value:this.quartiles[2]}];return this.loutlier!==undefined&&a.push({field:"lo",value:this.loutlier}),this.routlier!==undefined&&a.push({field:"ro",value:this.routlier}),this.lwhisker!==undefined&&a.push({field:"lw",value:this.lwhisker}),this.rwhisker!==undefined&&a.push({field:"rw",value:this.rwhisker}),a},render:function(){var a=this.target,b=this.values,c=b.length,d=this.options,e=this.canvasWidth,f=this.canvasHeight,h=d.get("chartRangeMin")===undefined?Math.min.apply(Math,b):d.get("chartRangeMin"),i=d.get("chartRangeMax")===undefined?Math.max.apply(Math,b):d.get("chartRangeMax"),j=0,k,l,m,n,o,p,q,r,s,t,u;if(!A._super.render.call(this))return;if(d.get("raw"))d.get("showOutliers")&&b.length>5?(l=b[0],k=b[1],n=b[2],o=b[3],p=b[4],q=b[5],r=b[6]):(k=b[0],n=b[1],o=b[2],p=b[3],q=b[4]);else{b.sort(function(a,b){return a-b}),n=g(b,1),o=g(b,2),p=g(b,3),m=p-n;if(d.get("showOutliers")){k=q=undefined;for(s=0;s<c;s++)k===undefined&&b[s]>n-m*d.get("outlierIQR")&&(k=b[s]),b[s]<p+m*d.get("outlierIQR")&&(q=b[s]);l=b[0],r=b[c-1]}else k=b[0],q=b[c-1]}this.quartiles=[n,o,p],this.lwhisker=k,this.rwhisker=q,this.loutlier=l,this.routlier=r,u=e/(i-h+1),d.get("showOutliers")&&(j=Math.ceil(d.get("spotRadius")),e-=2*Math.ceil(d.get("spotRadius")),u=e/(i-h+1),l<k&&a.drawCircle((l-h)*u+j,f/2,d.get("spotRadius"),d.get("outlierLineColor"),d.get("outlierFillColor")).append(),r>q&&a.drawCircle((r-h)*u+j,f/2,d.get("spotRadius"),d.get("outlierLineColor"),d.get("outlierFillColor")).append()),a.drawRect(Math.round((n-h)*u+j),Math.round(f*.1),Math.round((p-n)*u),Math.round(f*.8),d.get("boxLineColor"),d.get("boxFillColor")).append(),a.drawLine(Math.round((k-h)*u+j),Math.round(f/2),Math.round((n-h)*u+j),Math.round(f/2),d.get("lineColor")).append(),a.drawLine(Math.round((k-h)*u+j),Math.round(f/4),Math.round((k-h)*u+j),Math.round(f-f/4),d.get("whiskerColor")).append(),a.drawLine(Math.round((q-h)*u+j),Math.round(f/2),Math.round((p-h)*u+j),Math.round(f/2),d.get("lineColor")).append(),a.drawLine(Math.round((q-h)*u+j),Math.round(f/4),Math.round((q-h)*u+j),Math.round(f-f/4),d.get("whiskerColor")).append(),a.drawLine(Math.round((o-h)*u+j),Math.round(f*.1),Math.round((o-h)*u+j),Math.round(f*.9),d.get("medianColor")).append(),d.get("target")&&(t=Math.ceil(d.get("spotRadius")),a.drawLine(Math.round((d.get("target")-h)*u+j),Math.round(f/2-t),Math.round((d.get("target")-h)*u+j),Math.round(f/2+t),d.get("targetColor")).append(),a.drawLine(Math.round((d.get("target")-h)*u+j-t),Math.round(f/2),Math.round((d.get("target")-h)*u+j+t),Math.round(f/2),d.get("targetColor")).append()),a.render()}}),function(){document.namespaces&&!document.namespaces.v?(a.fn.sparkline.hasVML=!0,document.namespaces.add("v","urn:schemas-microsoft-com:vml","#default#VML")):a.fn.sparkline.hasVML=!1;var b=document.createElement("canvas");a.fn.sparkline.hasCanvas=!!b.getContext&&!!b.getContext("2d")}(),D=d({init:function(a,b,c,d){this.target=a,this.id=b,this.type=c,this.args=d},append:function(){return this.target.appendShape(this),this}}),E=d({_pxregex:/(\d+)(px)?\s*$/i,init:function(b,c,d){if(!b)return;this.width=b,this.height=c,this.target=d,this.lastShapeId=null,d[0]&&(d=d[0]),a.data(d,"_jqs_vcanvas",this)},drawLine:function(a,b,c,d,e,f){return this.drawShape([[a,b],[c,d]],e,f)},drawShape:function(a,b,c,d){return this._genShape("Shape",[a,b,c,d])},drawCircle:function(a,b,c,d,e,f){return this._genShape("Circle",[a,b,c,d,e,f])},drawPieSlice:function(a,b,c,d,e,f,g){return this._genShape("PieSlice",[a,b,c,d,e,f,g])},drawRect:function(a,b,c,d,e,f){return this._genShape("Rect",[a,b,c,d,e,f])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert("reset not implemented")},_insert:function(b,c){a(c).html(b)},_calculatePixelDims:function(b,c,d){var e;e=this._pxregex.exec(c),e?this.pixelHeight=e[1]:this.pixelHeight=a(d).height(),e=this._pxregex.exec(b),e?this.pixelWidth=e[1]:this.pixelWidth=a(d).width()},_genShape:function(a,b){var c=I++;return b.unshift(c),new D(this,c,a,b)},appendShape:function(a){alert("appendShape not implemented")},replaceWithShape:function(a,b){alert("replaceWithShape not implemented")},insertAfterShape:function(a,b){alert("insertAfterShape not implemented")},removeShapeId:function(a){alert("removeShapeId not implemented")},getShapeAt:function(a,b,c){alert("getShapeAt not implemented")},render:function(){alert("render not implemented")}}),F=d(E,{init:function(b,c,d,e){F._super.init.call(this,b,c,d),this.canvas=document.createElement("canvas"),d[0]&&(d=d[0]),a.data(d,"_jqs_vcanvas",this),a(this.canvas).css({display:"inline-block",width:b,height:c,verticalAlign:"top"}),this._insert(this.canvas,d),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=e,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=undefined,a(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(a,b,c){var d=this.canvas.getContext("2d");return a!==undefined&&(d.strokeStyle=a),d.lineWidth=c===undefined?1:c,b!==undefined&&(d.fillStyle=b),d},reset:function(){var a=this._getContext();a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=undefined},_drawShape:function(a,b,c,d,e){var f=this._getContext(c,d,e),g,h;f.beginPath(),f.moveTo(b[0][0]+.5,b[0][1]+.5);for(g=1,h=b.length;g<h;g++)f.lineTo(b[g][0]+.5,b[g][1]+.5);c!==undefined&&f.stroke(),d!==undefined&&f.fill(),this.targetX!==undefined&&this.targetY!==undefined&&f.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawCircle:function(a,b,c,d,e,f,g){var h=this._getContext(e,f,g);h.beginPath(),h.arc(b,c,d,0,2*Math.PI,!1),this.targetX!==undefined&&this.targetY!==undefined&&h.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),e!==undefined&&h.stroke(),f!==undefined&&h.fill()},_drawPieSlice:function(a,b,c,d,e,f,g,h){var i=this._getContext(g,h);i.beginPath(),i.moveTo(b,c),i.arc(b,c,d,e,f,!1),i.lineTo(b,c),i.closePath(),g!==undefined&&i.stroke(),h&&i.fill(),this.targetX!==undefined&&this.targetY!==undefined&&i.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)},appendShape:function(a){return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=this.shapeseq,d;this.shapes[b.id]=b;for(d=c.length;d--;)c[d]==a&&(c[d]=b.id);delete this.shapes[a]},replaceWithShapes:function(a,b){var c=this.shapeseq,d={},e,f,g;for(f=a.length;f--;)d[a[f]]=!0;for(f=c.length;f--;)e=c[f],d[e]&&(c.splice(f,1),delete this.shapes[e],g=f);for(f=b.length;f--;)c.splice(g,0,b[f].id),this.shapes[b[f].id]=b[f]},insertAfterShape:function(a,b){var c=this.shapeseq,d;for(d=c.length;d--;)if(c[d]===a){c.splice(d+1,0,b.id),this.shapes[b.id]=b;return}},removeShapeId:function(a){var b=this.shapeseq,c;for(c=b.length;c--;)if(b[c]===a){b.splice(c,1);break}delete this.shapes[a]},getShapeAt:function(a,b,c){return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId},render:function(){var a=this.shapeseq,b=this.shapes,c=a.length,d=this._getContext(),e,f,g;d.clearRect(0,0,this.pixelWidth,this.pixelHeight);for(g=0;g<c;g++)e=a[g],f=b[e],this["_draw"+f.type].apply(this,f.args);this.interact||(this.shapes={},this.shapeseq=[])}}),G=d(E,{init:function(b,c,d){var e;G._super.init.call(this,b,c,d),d[0]&&(d=d[0]),a.data(d,"_jqs_vcanvas",this),this.canvas=document.createElement("span"),a(this.canvas).css({display:"inline-block",position:"relative",overflow:"hidden",width:b,height:c,margin:"0px",padding:"0px",verticalAlign:"top"}),this._insert(this.canvas,d),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,e='<v:group coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'"'+' style="position:absolute;top:0;left:0;width:'+this.pixelWidth+"px;height="+this.pixelHeight+'px;"></v:group>',this.canvas.insertAdjacentHTML("beforeEnd",e),this.group=a(this.canvas).children()[0],this.rendered=!1,this.prerender=""},_drawShape:function(a,b,c,d,e){var f=[],g,h,i,j,k,l,m;for(m=0,l=b.length;m<l;m++)f[m]=""+b[m][0]+","+b[m][1];return g=f.splice(0,1),e=e===undefined?1:e,h=c===undefined?' stroked="false" ':' strokeWeight="'+e+'px" strokeColor="'+c+'" ',i=d===undefined?' filled="false"':' fillColor="'+d+'" filled="true" ',j=f[0]===f[f.length-1]?"x ":"",k='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+h+i+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+g+" l "+f.join(", ")+" "+j+'e">'+" </v:shape>",k},_drawCircle:function(a,b,c,d,e,f,g){var h,i,j;return b-=d,c-=d,h=e===undefined?' stroked="false" ':' strokeWeight="'+g+'px" strokeColor="'+e+'" ',i=f===undefined?' filled="false"':' fillColor="'+f+'" filled="true" ',j='<v:oval  id="jqsshape'+a+'" '+h+i+' style="position:absolute;top:'+c+"px; left:"+b+"px; width:"+d*2+"px; height:"+d*2+'px"></v:oval>',j},_drawPieSlice:function(a,b,c,d,e,f,g,h){var i,j,k,l,m,n,o,p;if(e===f)return"";f-e===2*Math.PI&&(e=0,f=2*Math.PI),j=b+Math.round(Math.cos(e)*d),k=c+Math.round(Math.sin(e)*d),l=b+Math.round(Math.cos(f)*d),m=c+Math.round(Math.sin(f)*d);if(j===l&&k===m){if(f-e<Math.PI)return"";j=l=b+d,k=m=c}return j===l&&k===m&&f-e<Math.PI?"":(i=[b-d,c-d,b+d,c+d,j,k,l,m],n=g===undefined?' stroked="false" ':' strokeWeight="1px" strokeColor="'+g+'" ',o=h===undefined?' filled="false"':' fillColor="'+h+'" filled="true" ',p='<v:shape coordorigin="0 0" coordsize="'+this.pixelWidth+" "+this.pixelHeight+'" '+' id="jqsshape'+a+'" '+n+o+' style="position:absolute;left:0px;top:0px;height:'+this.pixelHeight+"px;width:"+this.pixelWidth+'px;padding:0px;margin:0px;" '+' path="m '+b+","+c+" wa "+i.join(", ")+' x e">'+" </v:shape>",p)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)},reset:function(){this.group.innerHTML=""},appendShape:function(a){var b=this["_draw"+a.type].apply(this,a.args);return this.rendered?this.group.insertAdjacentHTML("beforeEnd",b):this.prerender+=b,this.lastShapeId=a.id,a.id},replaceWithShape:function(b,c){var d=a("#jqsshape"+b),e=this["_draw"+c.type].apply(this,c.args);d[0].outerHTML=e},replaceWithShapes:function(b,c){var d=a("#jqsshape"+b[0]),e="",f=c.length,g;for(g=0;g<f;g++)e+=this["_draw"+c[g].type].apply(this,c[g].args);d[0].outerHTML=e;for(g=1;g<b.length;g++)a("#jqsshape"+b[g]).remove()},insertAfterShape:function(b,c){var d=a("#jqsshape"+b),e=this["_draw"+c.type].apply(this,c.args);d[0].insertAdjacentHTML("afterEnd",e)},removeShapeId:function(b){var c=a("#jqsshape"+b);this.group.removeChild(c[0])},getShapeAt:function(a,b,c){var d=a.id.substr(8);return d},render:function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)}})});
/*!jQuery Knob*/
/**
 * Downward compatible, touchable dial
 *
 * Version: 1.2.0 (15/07/2012)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2012 Anthony Terrien
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to vor, eskimoblood, spiffistan, FabrizioC
 */
(function($) {

    /**
     * Kontrol library
     */
    "use strict";

    /**
     * Definition of globals and core
     */
    var k = {}, // kontrol
        max = Math.max,
        min = Math.min;

    k.c = {};
    k.c.d = $(document);
    k.c.t = function (e) {
        return e.originalEvent.touches.length - 1;
    };

    /**
     * Kontrol Object
     *
     * Definition of an abstract UI control
     *
     * Each concrete component must call this one.
     * <code>
     * k.o.call(this);
     * </code>
     */
    k.o = function () {
        var s = this;

        this.o = null; // array of options
        this.$ = null; // jQuery wrapped element
        this.i = null; // mixed HTMLInputElement or array of HTMLInputElement
        this.g = null; // 2D graphics context for 'pre-rendering'
        this.v = null; // value ; mixed array or integer
        this.cv = null; // change value ; not commited value
        this.x = 0; // canvas x position
        this.y = 0; // canvas y position
        this.$c = null; // jQuery canvas element
        this.c = null; // rendered canvas context
        this.t = 0; // touches index
        this.isInit = false;
        this.fgColor = null; // main color
        this.pColor = null; // previous color
        this.dH = null; // draw hook
        this.cH = null; // change hook
        this.eH = null; // cancel hook
        this.rH = null; // release hook

        this.run = function () {
            var cf = function (e, conf) {
                var k;
                for (k in conf) {
                    s.o[k] = conf[k];
                }
                s.init();
                s._configure()
                 ._draw();
            };

            if(this.$.data('kontroled')) return;
            this.$.data('kontroled', true);

            this.extend();
            this.o = $.extend(
                {
                    // Config
                    min : this.$.data('min') || 0,
                    max : this.$.data('max') || 100,
                    stopper : true,
                    readOnly : this.$.data('readonly'),

                    // UI
                    cursor : (this.$.data('cursor') === true && 30)
                                || this.$.data('cursor')
                                || 0,
                    thickness : this.$.data('thickness') || 0.35,
                    width : this.$.data('width') || 200,
                    height : this.$.data('height') || 200,
                    displayInput : this.$.data('displayinput') == null || this.$.data('displayinput'),
                    displayPrevious : this.$.data('displayprevious'),
                    fgColor : this.$.data('fgcolor') || '#87CEEB',
                    inline : false,

                    // Hooks
                    draw : null, // function () {}
                    change : null, // function (value) {}
                    cancel : null, // function () {}
                    release : null // function (value) {}
                }, this.o
            );

            // routing value
            if(this.$.is('fieldset')) {

                // fieldset = array of integer
                this.v = {};
                this.i = this.$.find('input')
                this.i.each(function(k) {
                    var $this = $(this);
                    s.i[k] = $this;
                    s.v[k] = $this.val();

                    $this.bind(
                        'change'
                        , function () {
                            var val = {};
                            val[k] = $this.val();
                            s.val(val);
                        }
                    );
                });
                this.$.find('legend').remove();

            } else {
                // input = integer
                this.i = this.$;
                this.v = this.$.val();
                (this.v == '') && (this.v = this.o.min);

                this.$.bind(
                    'change'
                    , function () {
                        s.val(s.$.val());
                    }
                );
            }

            (!this.o.displayInput) && this.$.hide();

            this.$c = $(document.createElement('canvas')).attr({
                width: this.o.width,
                height: this.o.height
            });

            this.$
                .wrap($('<div style="' + (this.o.inline ? 'display:inline;' : '') +
                        'width:' + this.o.width + 'px;height:' +
                        this.o.height + 'px;"></div>'))
                .before(this.$c);

            if (typeof G_vmlCanvasManager !== 'undefined') {
                G_vmlCanvasManager.initElement(this.$c[0]);
            }

            this.c = this.$c[0].getContext("2d");

            if (this.v instanceof Object) {
                this.cv = {};
                this.copy(this.v, this.cv);
            } else {
                this.cv = this.v;
            }

            this.$
                .bind("configure", cf)
                .parent()
                .bind("configure", cf);

            this._listen()
                ._configure()
                ._xy()
                .init();

            this.isInit = true;

            this._draw();

            return this;
        };

        this._draw = function () {

            var d = true;

            s.g = s.c;

            s.clear();

            s.dH
            && (d = s.dH());

            (d !== false) && s.draw();
        };

        this._touch = function (e) {

            var touchMove = function (e) {

                var v = s.xy2val(
                            e.originalEvent.touches[s.t].pageX,
                            e.originalEvent.touches[s.t].pageY
                            );

                if (v == s.cv) return;

                if (
                    s.cH
                    && (s.cH(v) === false)
                ) return;


                s.change(v);
                s._draw();
            };

            // get touches index
            this.t = k.c.t(e);

            // First touch
            touchMove(e);

            // Touch events listeners
            k.c.d
                .bind("touchmove.k", touchMove)
                .bind(
                    "touchend.k"
                    , function () {
                        k.c.d.unbind('touchmove.k touchend.k');

                        if (
                            s.rH
                            && (s.rH(s.cv) === false)
                        ) return;

                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._mouse = function (e) {

            var mouseMove = function (e) {
                var v = s.xy2val(e.pageX, e.pageY);
                if (v == s.cv) return;

                if (
                    s.cH
                    && (s.cH(v) === false)
                ) return;

                s.change(v);
                s._draw();
            };

            // First click
            mouseMove(e);

            // Mouse events listeners
            k.c.d
                .bind("mousemove.k", mouseMove)
                .bind(
                    // Escape key cancel current change
                    "keyup.k"
                    , function (e) {
                        if (e.keyCode === 27) {
                            k.c.d.unbind("mouseup.k mousemove.k keyup.k");

                            if (
                                s.eH
                                && (s.eH() === false)
                            ) return;

                            s.cancel();
                        }
                    }
                )
                .bind(
                    "mouseup.k"
                    , function (e) {
                        k.c.d.unbind('mousemove.k mouseup.k keyup.k');

                        if (
                            s.rH
                            && (s.rH(s.cv) === false)
                        ) return;

                        s.val(s.cv);
                    }
                );

            return this;
        };

        this._xy = function () {
            var o = this.$c.offset();
            this.x = o.left;
            this.y = o.top;
            return this;
        };

        this._listen = function () {

            if (!this.o.readOnly) {
                this.$c
                    .bind(
                        "mousedown"
                        , function (e) {
                            e.preventDefault();
                            s._xy()._mouse(e);
                         }
                    )
                    .bind(
                        "touchstart"
                        , function (e) {
                            e.preventDefault();
                            s._xy()._touch(e);
                         }
                    );
                this.listen();
            } else {
                this.$.attr('readonly', 'readonly');
            }

            return this;
        };

        this._configure = function () {

            // Hooks
            if (this.o.draw) this.dH = this.o.draw;
            if (this.o.change) this.cH = this.o.change;
            if (this.o.cancel) this.eH = this.o.cancel;
            if (this.o.release) this.rH = this.o.release;

            if (this.o.displayPrevious) {
                this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                this.fgColor = this.h2rgba(this.o.fgColor, "0.6");
            } else {
                this.fgColor = this.o.fgColor;
            }

            return this;
        };

        this._clear = function () {
            this.$c[0].width = this.$c[0].width;
        };

        // Abstract methods
        this.listen = function () {}; // on start, one time
        this.extend = function () {}; // each time configure triggered
        this.init = function () {}; // each time configure triggered
        this.change = function (v) {}; // on change
        this.val = function (v) {}; // on release
        this.xy2val = function (x, y) {}; //
        this.draw = function () {}; // on change / on release
        this.clear = function () { this._clear(); };

        // Utils
        this.h2rgba = function (h, a) {
            var rgb;
            h = h.substring(1,7)
            rgb = [parseInt(h.substring(0,2),16)
                   ,parseInt(h.substring(2,4),16)
                   ,parseInt(h.substring(4,6),16)];
            return "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + a + ")";
        };

        this.copy = function (f, t) {
            for (var i in f) { t[i] = f[i]; }
        };
    };


    /**
     * k.Dial
     */
    k.Dial = function () {
        k.o.call(this);

        this.startAngle = null;
        this.xy = null;
        this.radius = null;
        this.lineWidth = null;
        this.cursorExt = null;
        this.w2 = null;
        this.PI2 = 2*Math.PI;

        this.extend = function () {
            this.o = $.extend(
                {
                    bgColor : this.$.data('bgcolor') || '#EEEEEE',
                    angleOffset : this.$.data('angleoffset') || 0,
                    angleArc : this.$.data('anglearc') || 360,
                    inline : true
                }, this.o
            );
        };

        this.val = function (v) {
            if (null != v) {
                this.cv = this.o.stopper ? max(min(v, this.o.max), this.o.min) : v;
                this.v = this.cv;
                this.$.val(this.v);
                this._draw();
            } else {
                return this.v;
            }
        };

        this.xy2val = function (x, y) {
            var a, ret;

            a = Math.atan2(
                        x - (this.x + this.w2)
                        , - (y - this.y - this.w2)
                    ) - this.angleOffset;

            if(this.angleArc != this.PI2 && (a < 0) && (a > -0.5)) {
                // if isset angleArc option, set to min if .5 under min
                a = 0;
            } else if (a < 0) {
                a += this.PI2;
            }

            ret = ~~ (0.5 + (a * (this.o.max - this.o.min) / this.angleArc))
                    + this.o.min;

            this.o.stopper
            && (ret = max(min(ret, this.o.max), this.o.min));

            return ret;
        };

        this.listen = function () {
            // bind MouseWheel
            var s = this,
                mw = function (e) {
                            e.preventDefault();

                            var ori = e.originalEvent
                                ,deltaX = ori.detail || ori.wheelDeltaX
                                ,deltaY = ori.detail || ori.wheelDeltaY
                                ,v = parseInt(s.$.val() || s.o.min) + (deltaX>0 || deltaY>0 ? 1 : deltaX<0 || deltaY<0 ? -1 : 0);

                            if (
                                s.cH
                                && (s.cH(v) === false)
                            ) return;

                            s.val(v);
                        }
                , kval, to, m = 1, kv = {37:-1, 38:1, 39:1, 40:-1};

            this.$
                .bind(
                    "keydown"
                    ,function (e) {
                        var kc = e.keyCode;

                        // numpad support
                        if(kc >= 96 && kc <= 105) {
                            kc = e.keyCode = kc - 48;
                        }

                        kval = parseInt(String.fromCharCode(kc));

                        if (isNaN(kval)) {

                            (kc !== 13)         // enter
                            && (kc !== 8)       // bs
                            && (kc !== 9)       // tab
                            && (kc !== 189)     // -
                            && e.preventDefault();

                            // arrows
                            if ($.inArray(kc,[37,38,39,40]) > -1) {
                                e.preventDefault();

                                var v = parseInt(s.$.val()) + kv[kc] * m;

                                s.o.stopper
                                && (v = max(min(v, s.o.max), s.o.min));

                                s.change(v);
                                s._draw();

                                // long time keydown speed-up
                                to = window.setTimeout(
                                    function () { m*=2; }
                                    ,30
                                );
                            }
                        }
                    }
                )
                .bind(
                    "keyup"
                    ,function (e) {
                        if (isNaN(kval)) {
                            if (to) {
                                window.clearTimeout(to);
                                to = null;
                                m = 1;
                                s.val(s.$.val());
                            }
                        } else {
                            // kval postcond
                            (s.$.val() > s.o.max && s.$.val(s.o.max))
                            || (s.$.val() < s.o.min && s.$.val(s.o.min));
                        }

                    }
                );

            this.$c.bind("mousewheel DOMMouseScroll", mw);
            this.$.bind("mousewheel DOMMouseScroll", mw)
        };

        this.init = function () {

            if (
                this.v < this.o.min
                || this.v > this.o.max
            ) this.v = this.o.min;

            this.$.val(this.v);
            this.w2 = this.o.width / 2;
            this.cursorExt = this.o.cursor / 100;
            this.xy = this.w2;
            this.lineWidth = this.xy * this.o.thickness;
            this.radius = this.xy - this.lineWidth / 2;

            this.o.angleOffset
            && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);

            this.o.angleArc
            && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);

            // deg to rad
            this.angleOffset = this.o.angleOffset * Math.PI / 180;
            this.angleArc = this.o.angleArc * Math.PI / 180;

            // compute start and end angles
            this.startAngle = 1.5 * Math.PI + this.angleOffset;
            this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;

            var s = max(
                            String(Math.abs(this.o.max)).length
                            , String(Math.abs(this.o.min)).length
                            , 2
                            ) + 2;

            this.o.displayInput
                && this.i.css({
                        'width' : ((this.o.width / 2 + 4) >> 0) + 'px'
                        ,'height' : ((this.o.width / 3) >> 0) + 'px'
                        ,'position' : 'absolute'
                        ,'vertical-align' : 'middle'
                        ,'margin-top' : ((this.o.width / 3) >> 0) + 'px'
                        ,'margin-left' : '-' + ((this.o.width * 3 / 4 + 2) >> 0) + 'px'
                        ,'border' : 0
                        ,'background' : 'none'
                        ,'font' : 'bold ' + ((this.o.width / s) >> 0) + 'px Arial'
                        ,'text-align' : 'center'
                        ,'color' : this.o.fgColor
                        ,'padding' : '0px'
                        ,'-webkit-appearance': 'none'
                        })
                || this.i.css({
                        'width' : '0px'
                        ,'visibility' : 'hidden'
                        });
        };

        this.change = function (v) {
            this.cv = v;
            this.$.val(v);
        };

        this.angle = function (v) {
            return (v - this.o.min) * this.angleArc / (this.o.max - this.o.min);
        };

        this.draw = function () {

            var c = this.g,                 // context
                a = this.angle(this.cv)    // Angle
                , sat = this.startAngle     // Start angle
                , eat = sat + a             // End angle
                , sa, ea                    // Previous angles
                , r = 1;

            c.lineWidth = this.lineWidth;

            this.o.cursor
                && (sat = eat - this.cursorExt)
                && (eat = eat + this.cursorExt);

            c.beginPath();
                c.strokeStyle = this.o.bgColor;
                c.arc(this.xy, this.xy, this.radius, this.endAngle, this.startAngle, true);
            c.stroke();

            if (this.o.displayPrevious) {
                ea = this.startAngle + this.angle(this.v);
                sa = this.startAngle;
                this.o.cursor
                    && (sa = ea - this.cursorExt)
                    && (ea = ea + this.cursorExt);

                c.beginPath();
                    c.strokeStyle = this.pColor;
                    c.arc(this.xy, this.xy, this.radius, sa, ea, false);
                c.stroke();
                r = (this.cv == this.v);
            }

            c.beginPath();
                c.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                c.arc(this.xy, this.xy, this.radius, sat, eat, false);
            c.stroke();
        };

        this.cancel = function () {
            this.val(this.v);
        };
    };

    $.fn.dial = $.fn.knob = function (o) {
        return this.each(
            function () {
                var d = new k.Dial();
                d.o = o;
                d.$ = $(this);
                d.run();
            }
        ).parent();
    };

})(jQuery);

/*!
 * FullCalendar v1.6.1
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
(function(t,e){function n(e){t.extend(!0,ye,e)}function r(n,r,l){function u(t){G?(S(),C(),R(),b(t)):f()}function f(){K=r.theme?"ui":"fc",n.addClass("fc"),r.isRTL?n.addClass("fc-rtl"):n.addClass("fc-ltr"),r.theme&&n.addClass("ui-widget"),G=t("<div class='fc-content' style='position:relative'/>").prependTo(n),$=new a(Z,r),Q=$.render(),Q&&n.prepend(Q),y(r.defaultView),t(window).resize(x),m()||v()}function v(){setTimeout(function(){!te.start&&m()&&b()},0)}function h(){t(window).unbind("resize",x),$.destroy(),G.remove(),n.removeClass("fc fc-rtl ui-widget")}function g(){return 0!==se.offsetWidth}function m(){return 0!==t("body")[0].offsetWidth}function y(e){if(!te||e!=te.name){ue++,W();var n,r=te;r?((r.beforeHide||I)(),q(G,G.height()),r.element.hide()):q(G,1),G.css("overflow","hidden"),te=ce[e],te?te.element.show():te=ce[e]=new De[e](n=re=t("<div class='fc-view fc-view-"+e+"' style='position:absolute'/>").appendTo(G),Z),r&&$.deactivateButton(r.name),$.activateButton(e),b(),G.css("overflow",""),r&&q(G,1),n||(te.afterShow||I)(),ue--}}function b(t){if(g()){ue++,W(),ne===e&&S();var r=!1;!te.start||t||te.start>fe||fe>=te.end?(te.render(fe,t||0),E(!0),r=!0):te.sizeDirty?(te.clearEvents(),E(),r=!0):te.eventsDirty&&(te.clearEvents(),r=!0),te.sizeDirty=!1,te.eventsDirty=!1,T(r),ee=n.outerWidth(),$.updateTitle(te.title);var a=new Date;a>=te.start&&te.end>a?$.disableButton("today"):$.enableButton("today"),ue--,te.trigger("viewDisplay",se)}}function M(){C(),g()&&(S(),E(),W(),te.clearEvents(),te.renderEvents(de),te.sizeDirty=!1)}function C(){t.each(ce,function(t,e){e.sizeDirty=!0})}function S(){ne=r.contentHeight?r.contentHeight:r.height?r.height-(Q?Q.height():0)-L(G):Math.round(G.width()/Math.max(r.aspectRatio,.5))}function E(t){ue++,te.setHeight(ne,t),re&&(re.css("position","relative"),re=null),te.setWidth(G.width(),t),ue--}function x(){if(!ue)if(te.start){var t=++le;setTimeout(function(){t==le&&!ue&&g()&&ee!=(ee=n.outerWidth())&&(ue++,M(),te.trigger("windowResize",se),ue--)},200)}else v()}function T(t){!r.lazyFetching||oe(te.visStart,te.visEnd)?k():t&&F()}function k(){ie(te.visStart,te.visEnd)}function H(t){de=t,F()}function z(t){F(t)}function F(t){R(),g()&&(te.clearEvents(),te.renderEvents(de,t),te.eventsDirty=!1)}function R(){t.each(ce,function(t,e){e.eventsDirty=!0})}function N(t,n,r){te.select(t,n,r===e?!0:r)}function W(){te&&te.unselect()}function A(){b(-1)}function _(){b(1)}function O(){i(fe,-1),b()}function B(){i(fe,1),b()}function Y(){fe=new Date,b()}function j(t,e,n){t instanceof Date?fe=d(t):p(fe,t,e,n),b()}function P(t,n,r){t!==e&&i(fe,t),n!==e&&s(fe,n),r!==e&&c(fe,r),b()}function J(){return d(fe)}function V(){return te}function X(t,n){return n===e?r[t]:(("height"==t||"contentHeight"==t||"aspectRatio"==t)&&(r[t]=n,M()),e)}function U(t,n){return r[t]?r[t].apply(n||se,Array.prototype.slice.call(arguments,2)):e}var Z=this;Z.options=r,Z.render=u,Z.destroy=h,Z.refetchEvents=k,Z.reportEvents=H,Z.reportEventChange=z,Z.rerenderEvents=F,Z.changeView=y,Z.select=N,Z.unselect=W,Z.prev=A,Z.next=_,Z.prevYear=O,Z.nextYear=B,Z.today=Y,Z.gotoDate=j,Z.incrementDate=P,Z.formatDate=function(t,e){return w(t,e,r)},Z.formatDates=function(t,e,n){return D(t,e,n,r)},Z.getDate=J,Z.getView=V,Z.option=X,Z.trigger=U,o.call(Z,r,l);var $,Q,G,K,te,ee,ne,re,ae,oe=Z.isFetchNeeded,ie=Z.fetchEvents,se=n[0],ce={},le=0,ue=0,fe=new Date,de=[];p(fe,r.year,r.month,r.date),r.droppable&&t(document).bind("dragstart",function(e,n){var a=e.target,o=t(a);if(!o.parents(".fc").length){var i=r.dropAccept;(t.isFunction(i)?i.call(a,o):o.is(i))&&(ae=a,te.dragStart(ae,e,n))}}).bind("dragstop",function(t,e){ae&&(te.dragStop(ae,t,e),ae=null)})}function a(n,r){function a(){v=r.theme?"ui":"fc";var n=r.header;return n?h=t("<table class='fc-header' style='width:100%'/>").append(t("<tr/>").append(i("left")).append(i("center")).append(i("right"))):e}function o(){h.remove()}function i(e){var a=t("<td class='fc-header-"+e+"'/>"),o=r.header[e];return o&&t.each(o.split(" "),function(e){e>0&&a.append("<span class='fc-header-space'/>");var o;t.each(this.split(","),function(e,i){if("title"==i)a.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>"),o&&o.addClass(v+"-corner-right"),o=null;else{var s;if(n[i]?s=n[i]:De[i]&&(s=function(){u.removeClass(v+"-state-hover"),n.changeView(i)}),s){var c=r.theme?J(r.buttonIcons,i):null,l=J(r.buttonText,i),u=t("<span class='fc-button fc-button-"+i+" "+v+"-state-default'>"+(c?"<span class='fc-icon-wrap'><span class='ui-icon ui-icon-"+c+"'/>"+"</span>":l)+"</span>").click(function(){u.hasClass(v+"-state-disabled")||s()}).mousedown(function(){u.not("."+v+"-state-active").not("."+v+"-state-disabled").addClass(v+"-state-down")}).mouseup(function(){u.removeClass(v+"-state-down")}).hover(function(){u.not("."+v+"-state-active").not("."+v+"-state-disabled").addClass(v+"-state-hover")},function(){u.removeClass(v+"-state-hover").removeClass(v+"-state-down")}).appendTo(a);U(u),o||u.addClass(v+"-corner-left"),o=u}}}),o&&o.addClass(v+"-corner-right")}),a}function s(t){h.find("h2").html(t)}function c(t){h.find("span.fc-button-"+t).addClass(v+"-state-active")}function l(t){h.find("span.fc-button-"+t).removeClass(v+"-state-active")}function u(t){h.find("span.fc-button-"+t).addClass(v+"-state-disabled")}function f(t){h.find("span.fc-button-"+t).removeClass(v+"-state-disabled")}var d=this;d.render=a,d.destroy=o,d.updateTitle=s,d.activateButton=c,d.deactivateButton=l,d.disableButton=u,d.enableButton=f;var v,h=t([])}function o(n,r){function a(t,e){return!S||S>t||e>E}function o(t,e){S=t,E=e,W=[];var n=++F,r=z.length;R=r;for(var a=0;r>a;a++)i(z[a],n)}function i(e,r){s(e,function(a){if(r==F){if(a){n.eventDataTransform&&(a=t.map(a,n.eventDataTransform)),e.eventDataTransform&&(a=t.map(a,e.eventDataTransform));for(var o=0;a.length>o;o++)a[o].source=e,b(a[o]);W=W.concat(a)}R--,R||k(W)}})}function s(r,a){var o,i,c=we.sourceFetchers;for(o=0;c.length>o;o++){if(i=c[o](r,S,E,a),i===!0)return;if("object"==typeof i)return s(i,a),e}var l=r.events;if(l)t.isFunction(l)?(p(),l(d(S),d(E),function(t){a(t),y()})):t.isArray(l)?a(l):a();else{var u=r.url;if(u){var f=r.success,v=r.error,h=r.complete,g=t.extend({},r.data||{}),m=K(r.startParam,n.startParam),b=K(r.endParam,n.endParam);m&&(g[m]=Math.round(+S/1e3)),b&&(g[b]=Math.round(+E/1e3)),p(),t.ajax(t.extend({},Me,r,{data:g,success:function(e){e=e||[];var n=G(f,this,arguments);t.isArray(n)&&(e=n),a(e)},error:function(){G(v,this,arguments),a()},complete:function(){G(h,this,arguments),y()}}))}else a()}}function c(t){t=l(t),t&&(R++,i(t,F))}function l(n){return t.isFunction(n)||t.isArray(n)?n={events:n}:"string"==typeof n&&(n={url:n}),"object"==typeof n?(w(n),z.push(n),n):e}function u(e){z=t.grep(z,function(t){return!D(t,e)}),W=t.grep(W,function(t){return!D(t.source,e)}),k(W)}function f(t){var e,n,r=W.length,a=T().defaultEventEnd,o=t.start-t._start,i=t.end?t.end-(t._end||a(t)):0;for(e=0;r>e;e++)n=W[e],n._id==t._id&&n!=t&&(n.start=new Date(+n.start+o),n.end=t.end?n.end?new Date(+n.end+i):new Date(+a(n)+i):null,n.title=t.title,n.url=t.url,n.allDay=t.allDay,n.className=t.className,n.editable=t.editable,n.color=t.color,n.backgroudColor=t.backgroudColor,n.borderColor=t.borderColor,n.textColor=t.textColor,b(n));b(t),k(W)}function v(t,e){b(t),t.source||(e&&(H.events.push(t),t.source=H),W.push(t)),k(W)}function h(e){if(e){if(!t.isFunction(e)){var n=e+"";e=function(t){return t._id==n}}W=t.grep(W,e,!0);for(var r=0;z.length>r;r++)t.isArray(z[r].events)&&(z[r].events=t.grep(z[r].events,e,!0))}else{W=[];for(var r=0;z.length>r;r++)t.isArray(z[r].events)&&(z[r].events=[])}k(W)}function g(e){return t.isFunction(e)?t.grep(W,e):e?(e+="",t.grep(W,function(t){return t._id==e})):W}function p(){N++||x("loading",null,!0)}function y(){--N||x("loading",null,!1)}function b(t){var r=t.source||{},a=K(r.ignoreTimezone,n.ignoreTimezone);t._id=t._id||(t.id===e?"_fc"+Ce++:t.id+""),t.date&&(t.start||(t.start=t.date),delete t.date),t._start=d(t.start=m(t.start,a)),t.end=m(t.end,a),t.end&&t.end<=t.start&&(t.end=null),t._end=t.end?d(t.end):null,t.allDay===e&&(t.allDay=K(r.allDayDefault,n.allDayDefault)),t.className?"string"==typeof t.className&&(t.className=t.className.split(/\s+/)):t.className=[]}function w(t){t.className?"string"==typeof t.className&&(t.className=t.className.split(/\s+/)):t.className=[];for(var e=we.sourceNormalizers,n=0;e.length>n;n++)e[n](t)}function D(t,e){return t&&e&&M(t)==M(e)}function M(t){return("object"==typeof t?t.events||t.url:"")||t}var C=this;C.isFetchNeeded=a,C.fetchEvents=o,C.addEventSource=c,C.removeEventSource=u,C.updateEvent=f,C.renderEvent=v,C.removeEvents=h,C.clientEvents=g,C.normalizeEvent=b;for(var S,E,x=C.trigger,T=C.getView,k=C.reportEvents,H={events:[]},z=[H],F=0,R=0,N=0,W=[],A=0;r.length>A;A++)l(r[A])}function i(t,e,n){return t.setFullYear(t.getFullYear()+e),n||f(t),t}function s(t,e,n){if(+t){var r=t.getMonth()+e,a=d(t);for(a.setDate(1),a.setMonth(r),t.setMonth(r),n||f(t);t.getMonth()!=a.getMonth();)t.setDate(t.getDate()+(a>t?1:-1))}return t}function c(t,e,n){if(+t){var r=t.getDate()+e,a=d(t);a.setHours(9),a.setDate(r),t.setDate(r),n||f(t),l(t,a)}return t}function l(t,e){if(+t)for(;t.getDate()!=e.getDate();)t.setTime(+t+(e>t?1:-1)*xe)}function u(t,e){return t.setMinutes(t.getMinutes()+e),t}function f(t){return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t}function d(t,e){return e?f(new Date(+t)):new Date(+t)}function v(){var t,e=0;do t=new Date(1970,e++,1);while(t.getHours());return t}function h(t,e,n){for(e=e||1;!t.getDay()||n&&1==t.getDay()||!n&&6==t.getDay();)c(t,e);return t}function g(t,e){return Math.round((d(t,!0)-d(e,!0))/Ee)}function p(t,n,r,a){n!==e&&n!=t.getFullYear()&&(t.setDate(1),t.setMonth(0),t.setFullYear(n)),r!==e&&r!=t.getMonth()&&(t.setDate(1),t.setMonth(r)),a!==e&&t.setDate(a)}function m(t,n){return"object"==typeof t?t:"number"==typeof t?new Date(1e3*t):"string"==typeof t?t.match(/^\d+(\.\d+)?$/)?new Date(1e3*parseFloat(t)):(n===e&&(n=!0),y(t,n)||(t?new Date(t):null)):null}function y(t,e){var n=t.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);if(!n)return null;var r=new Date(n[1],0,1);if(e||!n[13]){var a=new Date(n[1],0,1,9,0);n[3]&&(r.setMonth(n[3]-1),a.setMonth(n[3]-1)),n[5]&&(r.setDate(n[5]),a.setDate(n[5])),l(r,a),n[7]&&r.setHours(n[7]),n[8]&&r.setMinutes(n[8]),n[10]&&r.setSeconds(n[10]),n[12]&&r.setMilliseconds(1e3*Number("0."+n[12])),l(r,a)}else if(r.setUTCFullYear(n[1],n[3]?n[3]-1:0,n[5]||1),r.setUTCHours(n[7]||0,n[8]||0,n[10]||0,n[12]?1e3*Number("0."+n[12]):0),n[14]){var o=60*Number(n[16])+(n[18]?Number(n[18]):0);o*="-"==n[15]?1:-1,r=new Date(+r+1e3*60*o)}return r}function b(t){if("number"==typeof t)return 60*t;if("object"==typeof t)return 60*t.getHours()+t.getMinutes();var e=t.match(/(\d+)(?::(\d+))?\s*(\w+)?/);if(e){var n=parseInt(e[1],10);return e[3]&&(n%=12,"p"==e[3].toLowerCase().charAt(0)&&(n+=12)),60*n+(e[2]?parseInt(e[2],10):0)}}function w(t,e,n){return D(t,null,e,n)}function D(t,e,n,r){r=r||ye;var a,o,i,s,c=t,l=e,u=n.length,f="";for(a=0;u>a;a++)if(o=n.charAt(a),"'"==o){for(i=a+1;u>i;i++)if("'"==n.charAt(i)){c&&(f+=i==a+1?"'":n.substring(a+1,i),a=i);break}}else if("("==o){for(i=a+1;u>i;i++)if(")"==n.charAt(i)){var d=w(c,n.substring(a+1,i),r);parseInt(d.replace(/\D/,""),10)&&(f+=d),a=i;break}}else if("["==o){for(i=a+1;u>i;i++)if("]"==n.charAt(i)){var v=n.substring(a+1,i),d=w(c,v,r);d!=w(l,v,r)&&(f+=d),a=i;break}}else if("{"==o)c=e,l=t;else if("}"==o)c=t,l=e;else{for(i=u;i>a;i--)if(s=ke[n.substring(a,i)]){c&&(f+=s(c,r)),a=i-1;break}i==a&&c&&(f+=o)}return f}function M(t){var e,n=new Date(t.getTime());return n.setDate(n.getDate()+4-(n.getDay()||7)),e=n.getTime(),n.setMonth(0),n.setDate(1),Math.floor(Math.round((e-n)/864e5)/7)+1}function C(t){return t.end?S(t.end,t.allDay):c(d(t.start),1)}function S(t,e){return t=d(t),e||t.getHours()||t.getMinutes()?c(t,1):f(t)}function E(t,e){return 100*(e.msLength-t.msLength)+(t.event.start-e.event.start)}function x(t,e){return t.end>e.start&&t.start<e.end}function T(t,e,n,r){var a,o,i,s,c,l,u,f,v=[],h=t.length;for(a=0;h>a;a++)o=t[a],i=o.start,s=e[a],s>n&&r>i&&(n>i?(c=d(n),u=!1):(c=i,u=!0),s>r?(l=d(r),f=!1):(l=s,f=!0),v.push({event:o,start:c,end:l,isStart:u,isEnd:f,msLength:l-c}));return v.sort(E)}function k(t){var e,n,r,a,o,i=[],s=t.length;for(e=0;s>e;e++){for(n=t[e],r=0;;){if(a=!1,i[r])for(o=0;i[r].length>o;o++)if(x(i[r][o],n)){a=!0;break}if(!a)break;r++}i[r]?i[r].push(n):i[r]=[n]}return i}function H(n,r,a){n.unbind("mouseover").mouseover(function(n){for(var o,i,s,c=n.target;c!=this;)o=c,c=c.parentNode;(i=o._fci)!==e&&(o._fci=e,s=r[i],a(s.event,s.element,s),t(n.target).trigger(n)),n.stopPropagation()})}function z(e,n,r){for(var a,o=0;e.length>o;o++)a=t(e[o]),a.width(Math.max(0,n-R(a,r)))}function F(e,n,r){for(var a,o=0;e.length>o;o++)a=t(e[o]),a.height(Math.max(0,n-L(a,r)))}function R(t,e){return N(t)+A(t)+(e?W(t):0)}function N(e){return(parseFloat(t.css(e[0],"paddingLeft",!0))||0)+(parseFloat(t.css(e[0],"paddingRight",!0))||0)}function W(e){return(parseFloat(t.css(e[0],"marginLeft",!0))||0)+(parseFloat(t.css(e[0],"marginRight",!0))||0)}function A(e){return(parseFloat(t.css(e[0],"borderLeftWidth",!0))||0)+(parseFloat(t.css(e[0],"borderRightWidth",!0))||0)}function L(t,e){return _(t)+B(t)+(e?O(t):0)}function _(e){return(parseFloat(t.css(e[0],"paddingTop",!0))||0)+(parseFloat(t.css(e[0],"paddingBottom",!0))||0)}function O(e){return(parseFloat(t.css(e[0],"marginTop",!0))||0)+(parseFloat(t.css(e[0],"marginBottom",!0))||0)}function B(e){return(parseFloat(t.css(e[0],"borderTopWidth",!0))||0)+(parseFloat(t.css(e[0],"borderBottomWidth",!0))||0)}function q(t,e){e="number"==typeof e?e+"px":e,t.each(function(t,n){n.style.cssText+=";min-height:"+e+";_height:"+e})}function I(){}function Y(t,e){return t-e}function j(t){return Math.max.apply(Math,t)}function P(t){return(10>t?"0":"")+t}function J(t,n){if(t[n]!==e)return t[n];for(var r,a=n.split(/(?=[A-Z])/),o=a.length-1;o>=0;o--)if(r=t[a[o].toLowerCase()],r!==e)return r;return t[""]}function V(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function X(t){return t.id+"/"+t.className+"/"+t.style.cssText.replace(/(^|;)\s*(top|left|width|height)\s*:[^;]*/gi,"")}function U(t){t.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return!1})}function Z(t){t.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")}function $(t,e){t.each(function(t,n){n.className=n.className.replace(/^fc-\w*/,"fc-"+Se[e.getDay()])})}function Q(t,e){var n=t.source||{},r=t.color,a=n.color,o=e("eventColor"),i=t.backgroundColor||r||n.backgroundColor||a||e("eventBackgroundColor")||o,s=t.borderColor||r||n.borderColor||a||e("eventBorderColor")||o,c=t.textColor||n.textColor||e("eventTextColor"),l=[];return i&&l.push("background-color:"+i),s&&l.push("border-color:"+s),c&&l.push("color:"+c),l.join(";")}function G(e,n,r){if(t.isFunction(e)&&(e=[e]),e){var a,o;for(a=0;e.length>a;a++)o=e[a].apply(n,r)||o;return o}}function K(){for(var t=0;arguments.length>t;t++)if(arguments[t]!==e)return arguments[t]}function te(t,e){function n(t,e){e&&(s(t,e),t.setDate(1));var n=d(t,!0);n.setDate(1);var l=s(d(n),1),u=d(n),f=d(l),v=a("firstDay"),g=a("weekends")?0:1;g&&(h(u),h(f,-1,!0)),c(u,-((u.getDay()-Math.max(v,g)+7)%7)),c(f,(7-f.getDay()+Math.max(v,g))%7);var p=Math.round((f-u)/(7*Ee));"fixed"==a("weekMode")&&(c(f,7*(6-p)),p=6),r.title=i(n,a("titleFormat")),r.start=n,r.end=l,r.visStart=u,r.visEnd=f,o(p,g?5:7,!0)}var r=this;r.render=n,re.call(r,t,e,"month");var a=r.opt,o=r.renderBasic,i=e.formatDate}function ee(t,e){function n(t,e){e&&c(t,7*e);var n=c(d(t),-((t.getDay()-a("firstDay")+7)%7)),s=c(d(n),7),l=d(n),u=d(s),f=a("weekends");f||(h(l),h(u,-1,!0)),r.title=i(l,c(d(u),-1),a("titleFormat")),r.start=n,r.end=s,r.visStart=l,r.visEnd=u,o(1,f?7:5,!1)}var r=this;r.render=n,re.call(r,t,e,"basicWeek");var a=r.opt,o=r.renderBasic,i=e.formatDates}function ne(t,e){function n(t,e){e&&(c(t,e),a("weekends")||h(t,0>e?-1:1)),r.title=i(t,a("titleFormat")),r.start=r.visStart=d(t,!0),r.end=r.visEnd=c(d(r.start),1),o(1,1,!1)}var r=this;r.render=n,re.call(r,t,e,"basicDay");var a=r.opt,o=r.renderBasic,i=e.formatDate}function re(e,n,r){function a(t,e,n){ne=t,re=e,o();var r=!P;r?i():Te(),s(n)}function o(){ce=Ee("isRTL"),ce?(le=-1,fe=re-1):(le=1,fe=0),pe=Ee("firstDay"),ye=Ee("weekends")?0:1,be=Ee("theme")?"ui":"fc",we=Ee("columnFormat"),De=Ee("weekNumbers"),Me=Ee("weekNumberTitle"),Ce="iso"!=Ee("weekNumberCalculation")?"w":"W"}function i(){Q=t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(e)}function s(n){var r,a,o,i,s="",c=be+"-widget-header",l=be+"-widget-content",u=B.start.getMonth(),d=f(new Date);for(s+="<table class='fc-border-separate' style='width:100%' cellspacing='0'><thead><tr>",De&&(s+="<th class='fc-week-number "+c+"'/>"),r=0;re>r;r++)o=F(0,r),s+="<th class='fc-day-header fc-"+Se[o.getDay()]+" "+c+"'/>";for(s+="</tr></thead><tbody>",r=0;ne>r;r++){for(s+="<tr class='fc-week'>",De&&(s+="<td class='fc-week-number "+l+"'>"+"<div/>"+"</td>"),a=0;re>a;a++)o=F(r,a),i=["fc-day","fc-"+Se[o.getDay()],l],o.getMonth()!=u&&i.push("fc-other-month"),+o==+d&&(i.push("fc-today"),i.push(be+"-state-highlight")),s+="<td class='"+i.join(" ")+"'"+" data-date='"+Fe(o,"yyyy-MM-dd")+"'"+">"+"<div>",n&&(s+="<div class='fc-day-number'>"+o.getDate()+"</div>"),s+="<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>";s+="</tr>"}s+="</tbody></table>",_(),I&&I.remove(),I=t(s).appendTo(e),Y=I.find("thead"),j=Y.find(".fc-day-header"),P=I.find("tbody"),J=P.find("tr"),V=P.find(".fc-day"),X=J.find("td:first-child"),$=J.eq(0).find(".fc-day-content > div"),Z(Y.add(Y.find("tr"))),Z(J),J.eq(0).addClass("fc-first"),J.filter(":last").addClass("fc-last"),De&&Y.find(".fc-week-number").text(Me),j.each(function(e,n){var r=R(e);t(n).text(Fe(r,we))}),De&&P.find(".fc-week-number > div").each(function(e,n){var r=F(e,0);t(n).text(Fe(r,Ce))}),V.each(function(e,n){var r=R(e);xe("dayRender",B,r,t(n))}),v(V)}function l(e){K=e;var n,r,a,o=K-Y.height();"variable"==Ee("weekMode")?n=r=Math.floor(o/(1==ne?2:6)):(n=Math.floor(o/ne),r=o-n*(ne-1)),X.each(function(e,o){ne>e&&(a=t(o),q(a.find("> div"),(e==ne-1?r:n)-L(a)))}),O()}function u(t){G=t,se.clear(),ee=0,De&&(ee=Y.find("th.fc-week-number").outerWidth()),te=Math.floor((G-ee)/re),z(j.slice(0,-1),te)}function v(t){t.click(h).mousedown(ze)}function h(e){if(!Ee("selectable")){var n=y(t(this).data("date"));xe("dayClick",this,n,!0,e)}}function p(t,e,n){n&&oe.build();for(var r=d(B.visStart),a=c(d(r),re),o=0;ne>o;o++){var i=new Date(Math.max(r,t)),s=new Date(Math.min(a,e));if(s>i){var l,u;ce?(l=g(s,r)*le+fe+1,u=g(i,r)*le+fe+1):(l=g(i,r),u=g(s,r)),v(m(o,l,o,u-1))}c(r,7),c(a,7)}}function m(t,n,r,a){var o=oe.rect(t,n,r,a,e);return ke(o,e)}function b(t){return d(t)}function w(t,e){p(t,c(d(e),1),!0)}function D(){He()}function M(t,e,n){var r=k(t),a=V[r.row*re+r.col];xe("dayClick",a,t,e,n)}function C(t,e){ie.start(function(t){He(),t&&m(t.row,t.col,t.row,t.col)},e)}function S(t,e,n){var r=ie.stop();if(He(),r){var a=H(r);xe("drop",t,a,!0,e,n)}}function E(t){return d(t.start)}function x(t){return se.left(t)}function T(t){return se.right(t)}function k(t){return{row:Math.floor(g(t,B.visStart)/7),col:N(t.getDay())}}function H(t){return F(t.row,t.col)}function F(t,e){return c(d(B.visStart),7*t+e*le+fe)}function R(t){return F(Math.floor(t/re),t%re)}function N(t){return(t-Math.max(pe,ye)+re)%re*le+fe}function W(t){return J.eq(t)}function A(){var t=0;return De&&(t+=ee),{left:t,right:G}}function _(){q(e,e.height())}function O(){q(e,1)}var B=this;B.renderBasic=a,B.setHeight=l,B.setWidth=u,B.renderDayOverlay=p,B.defaultSelectionEnd=b,B.renderSelection=w,B.clearSelection=D,B.reportDayClick=M,B.dragStart=C,B.dragStop=S,B.defaultEventEnd=E,B.getHoverListener=function(){return ie},B.colContentLeft=x,B.colContentRight=T,B.dayOfWeekCol=N,B.dateCell=k,B.cellDate=H,B.cellIsAllDay=function(){return!0},B.allDayRow=W,B.allDayBounds=A,B.getRowCnt=function(){return ne},B.getColCnt=function(){return re},B.getColWidth=function(){return te},B.getDaySegmentContainer=function(){return Q},ue.call(B,e,n,r),ve.call(B),de.call(B),ae.call(B);var I,Y,j,P,J,V,X,$,Q,G,K,te,ee,ne,re,oe,ie,se,ce,le,fe,pe,ye,be,we,De,Me,Ce,Ee=B.opt,xe=B.trigger,Te=B.clearEvents,ke=B.renderOverlay,He=B.clearOverlays,ze=B.daySelectionMousedown,Fe=n.formatDate;U(e.addClass("fc-grid")),oe=new he(function(e,n){var r,a,o;j.each(function(e,i){r=t(i),a=r.offset().left,e&&(o[1]=a),o=[a],n[e]=o}),o[1]=a+r.outerWidth(),J.each(function(n,i){ne>n&&(r=t(i),a=r.offset().top,n&&(o[1]=a),o=[a],e[n]=o)}),o[1]=a+r.outerHeight()}),ie=new ge(oe),se=new me(function(t){return $.eq(t)})}function ae(){function e(t,e){v(t),x(r(t),e),l("eventAfterAllRender")}function n(){h(),b().empty()}function r(e){var n,r,a,o,s,l,u=S(),f=E(),v=d(i.visStart),h=c(d(v),f),g=t.map(e,C),p=[];for(n=0;u>n;n++){for(r=k(T(e,g,v,h)),a=0;r.length>a;a++)for(o=r[a],s=0;o.length>s;s++)l=o[s],l.row=n,l.level=a,p.push(l);c(v,7),c(h,7)}return p}function a(t,e,n){u(t)&&o(t,e),n.isEnd&&f(t)&&H(t,e,n),g(t,e)}function o(t,e){var n,r=w();e.draggable({zIndex:9,delay:50,opacity:s("dragOpacity"),revertDuration:s("dragRevertDuration"),start:function(a,o){l("eventDragStart",e,t,a,o),m(t,e),r.start(function(r,a,o,i){e.draggable("option","revert",!r||!o&&!i),M(),r?(n=7*o+i*(s("isRTL")?-1:1),D(c(d(t.start),n),c(C(t),n))):n=0},a,"drag")},stop:function(a,o){r.stop(),M(),l("eventDragStop",e,t,a,o),n?y(this,t,n,0,t.allDay,a,o):(e.css("filter",""),p(t,e))}})}var i=this;i.renderEvents=e,i.compileDaySegs=r,i.clearEvents=n,i.bindDaySeg=a,fe.call(i);var s=i.opt,l=i.trigger,u=i.isEventDraggable,f=i.isEventResizable,v=i.reportEvents,h=i.reportEventClear,g=i.eventElementHandlers,p=i.showEvents,m=i.hideEvents,y=i.eventDrop,b=i.getDaySegmentContainer,w=i.getHoverListener,D=i.renderDayOverlay,M=i.clearOverlays,S=i.getRowCnt,E=i.getColCnt,x=i.renderDaySegs,H=i.resizableDayEvent}function oe(t,e){function n(t,e){e&&c(t,7*e);var n=c(d(t),-((t.getDay()-a("firstDay")+7)%7)),s=c(d(n),7),l=d(n),u=d(s),f=a("weekends");f||(h(l),h(u,-1,!0)),r.title=i(l,c(d(u),-1),a("titleFormat")),r.start=n,r.end=s,r.visStart=l,r.visEnd=u,o(f?7:5)}var r=this;r.render=n,se.call(r,t,e,"agendaWeek");var a=r.opt,o=r.renderAgenda,i=e.formatDates}function ie(t,e){function n(t,e){e&&(c(t,e),a("weekends")||h(t,0>e?-1:1));var n=d(t,!0),s=c(d(n),1);r.title=i(t,a("titleFormat")),r.start=r.visStart=n,r.end=r.visEnd=s,o(1)}var r=this;r.render=n,se.call(r,t,e,"agendaDay");var a=r.opt,o=r.renderAgenda,i=e.formatDate}function se(n,r,a){function o(t){Le=t,i(),te?nn():s(),l()}function i(){Ye=tn("theme")?"ui":"fc",Pe=tn("weekends")?0:1,je=tn("firstDay"),(Je=tn("isRTL"))?(Ve=-1,Xe=Le-1):(Ve=1,Xe=0),Ue=b(tn("minTime")),Ze=b(tn("maxTime")),$e=tn("columnFormat"),Qe=tn("weekNumbers"),Ge=tn("weekNumberTitle"),Ke="iso"!=tn("weekNumberCalculation")?"w":"W",Ne=tn("snapMinutes")||tn("slotMinutes")}function s(){var e,r,a,o,i,s=Ye+"-widget-header",c=Ye+"-widget-content",l=0==tn("slotMinutes")%15;for(e="<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'><thead><tr>",e+=Qe?"<th class='fc-agenda-axis fc-week-number "+s+"'/>":"<th class='fc-agenda-axis "+s+"'>&nbsp;</th>",r=0;Le>r;r++)e+="<th class='fc- fc-col"+r+" "+s+"'/>";for(e+="<th class='fc-agenda-gutter "+s+"'>&nbsp;</th>"+"</tr>"+"</thead>"+"<tbody>"+"<tr>"+"<th class='fc-agenda-axis "+s+"'>&nbsp;</th>",r=0;Le>r;r++)e+="<td class='fc- fc-col"+r+" "+c+"'>"+"<div>"+"<div class='fc-day-content'>"+"<div style='position:relative'>&nbsp;</div>"+"</div>"+"</div>"+"</td>";for(e+="<td class='fc-agenda-gutter "+c+"'>&nbsp;</td>"+"</tr>"+"</tbody>"+"</table>",te=t(e).appendTo(n),ee=te.find("thead"),ne=ee.find("th").slice(1,-1),re=te.find("tbody"),ae=re.find("td").slice(0,-1),oe=ae.find("div.fc-day-content div"),ie=ae.eq(0),se=ie.find("> div"),Z(ee.add(ee.find("tr"))),Z(re.add(re.find("tr"))),Se=ee.find("th:first"),Ee=te.find(".fc-agenda-gutter"),le=t("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(n),tn("allDaySlot")?(fe=t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(le),e="<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='"+s+" fc-agenda-axis'>"+tn("allDayText")+"</th>"+"<td>"+"<div class='fc-day-content'><div style='position:relative'/></div>"+"</td>"+"<th class='"+s+" fc-agenda-gutter'>&nbsp;</th>"+"</tr>"+"</table>",pe=t(e).appendTo(le),ye=pe.find("tr"),D(ye.find("td")),Se=Se.add(pe.find("th:first")),Ee=Ee.add(pe.find("th.fc-agenda-gutter")),le.append("<div class='fc-agenda-divider "+s+"'>"+"<div class='fc-agenda-divider-inner'/>"+"</div>")):fe=t([]),be=t("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(le),we=t("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(be),De=t("<div style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(we),e="<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>",a=v(),o=u(d(a),Ze),u(a,Ue),_e=0,r=0;o>a;r++)i=a.getMinutes(),e+="<tr class='fc-slot"+r+" "+(i?"fc-minor":"")+"'>"+"<th class='fc-agenda-axis "+s+"'>"+(l&&i?"&nbsp;":un(a,tn("axisFormat")))+"</th>"+"<td class='"+c+"'>"+"<div style='position:relative'>&nbsp;</div>"+"</td>"+"</tr>",u(a,tn("slotMinutes")),_e++;e+="</tbody></table>",Me=t(e).appendTo(we),Ce=Me.find("div:first"),M(Me.find("td")),Se=Se.add(Me.find("th:first"))}function l(){var t,e,n,r,a=f(new Date);if(Qe){var o=un(N(0),Ke);Je?o+=Ge:o=Ge+o,ee.find(".fc-week-number").text(o)}for(t=0;Le>t;t++)r=N(t),e=ne.eq(t),e.html(un(r,$e)),n=ae.eq(t),+r==+a?n.addClass(Ye+"-state-highlight fc-today"):n.removeClass(Ye+"-state-highlight fc-today"),$(e.add(n),r)}function h(t,n){t===e&&(t=ke),ke=t,fn={};var r=re.position().top,a=be.position().top,o=Math.min(t-r,Me.height()+a+1);se.height(o-L(ie)),le.css("top",r),be.height(o-a-1),Re=Ce.height()+1,We=tn("slotMinutes")/Ne,Ae=Re/We,n&&m()}function p(e){Te=e,qe.clear(),He=0,z(Se.width("").each(function(e,n){He=Math.max(He,t(n).outerWidth())}),He);var n=be[0].clientWidth;Fe=be.width()-n,Fe?(z(Ee,Fe),Ee.show().prev().removeClass("fc-last")):Ee.hide().prev().addClass("fc-last"),ze=Math.floor((n-He)/Le),z(ne.slice(0,-1),ze)}function m(){function t(){be.scrollTop(r)}var e=v(),n=d(e);n.setHours(tn("firstHour"));var r=_(e,n)+1;t(),setTimeout(t,0)}function y(){Ie=be.scrollTop()}function w(){be.scrollTop(Ie)}function D(t){t.click(C).mousedown(cn)}function M(t){t.click(C).mousedown(V)}function C(t){if(!tn("selectable")){var e=Math.min(Le-1,Math.floor((t.pageX-te.offset().left-He)/ze)),n=N(e),r=this.parentNode.className.match(/fc-slot(\d+)/);if(r){var a=parseInt(r[1])*tn("slotMinutes"),o=Math.floor(a/60);n.setHours(o),n.setMinutes(a%60+Ue),en("dayClick",ae[e],n,!1,t)}else en("dayClick",ae[e],n,!0,t)}}function S(t,e,n){n&&Oe.build();var r,a,o=d(K.visStart);Je?(r=g(e,o)*Ve+Xe+1,a=g(t,o)*Ve+Xe+1):(r=g(t,o),a=g(e,o)),r=Math.max(0,r),a=Math.min(Le,a),a>r&&D(E(0,r,0,a-1))}function E(t,e,n,r){var a=Oe.rect(t,e,n,r,le);return rn(a,le)}function x(t,e){for(var n=d(K.visStart),r=c(d(n),1),a=0;Le>a;a++){var o=new Date(Math.max(n,t)),i=new Date(Math.min(r,e));if(i>o){var s=a*Ve+Xe,l=Oe.rect(0,s,0,s,we),u=_(n,o),f=_(n,i);l.top=u,l.height=f-u,M(rn(l,we))}c(n,1),c(r,1)}}function T(t){return qe.left(t)}function k(t){return qe.right(t)}function H(t){return{row:Math.floor(g(t,K.visStart)/7),col:A(t.getDay())}}function R(t){var e=N(t.col),n=t.row;return tn("allDaySlot")&&n--,n>=0&&u(e,Ue+n*Ne),e}function N(t){return c(d(K.visStart),t*Ve+Xe)}function W(t){return tn("allDaySlot")&&!t.row}function A(t){return(t-Math.max(je,Pe)+Le)%Le*Ve+Xe}function _(t,n){if(t=d(t,!0),u(d(t),Ue)>n)return 0;if(n>=u(d(t),Ze))return Me.height();var r=tn("slotMinutes"),a=60*n.getHours()+n.getMinutes()-Ue,o=Math.floor(a/r),i=fn[o];return i===e&&(i=fn[o]=Me.find("tr:eq("+o+") td div")[0].offsetTop),Math.max(0,Math.round(i-1+Re*(a%r/r)))}function O(){return{left:He,right:Te-Fe}}function B(){return ye}function q(t){var e=d(t.start);return t.allDay?e:u(e,tn("defaultEventMinutes"))}function I(t,e){return e?d(t):u(d(t),tn("slotMinutes"))}function j(t,e,n){n?tn("allDaySlot")&&S(t,c(d(e),1),!0):P(t,e)}function P(e,n){var r=tn("selectHelper");if(Oe.build(),r){var a=g(e,K.visStart)*Ve+Xe;if(a>=0&&Le>a){var o=Oe.rect(0,a,0,a,we),i=_(e,e),s=_(e,n);if(s>i){if(o.top=i,o.height=s-i,o.left+=2,o.width-=5,t.isFunction(r)){var c=r(e,n);c&&(o.position="absolute",o.zIndex=8,xe=t(c).css(o).appendTo(we))}else o.isStart=!0,o.isEnd=!0,xe=t(ln({title:"",start:e,end:n,className:["fc-select-helper"],editable:!1},o)),xe.css("opacity",tn("dragOpacity"));xe&&(M(xe),we.append(xe),z(xe,o.width,!0),F(xe,o.height,!0))}}}else x(e,n)}function J(){an(),xe&&(xe.remove(),xe=null)}function V(e){if(1==e.which&&tn("selectable")){sn(e);var n;Be.start(function(t,e){if(J(),t&&t.col==e.col&&!W(t)){var r=R(e),a=R(t);n=[r,u(d(r),Ne),a,u(d(a),Ne)].sort(Y),P(n[0],n[3])}else n=null},e),t(document).one("mouseup",function(t){Be.stop(),n&&(+n[0]==+n[1]&&X(n[0],!1,t),on(n[0],n[3],!1,t))})}}function X(t,e,n){en("dayClick",ae[A(t.getDay())],t,e,n)}function Q(t,e){Be.start(function(t){if(an(),t)if(W(t))E(t.row,t.col,t.row,t.col);else{var e=R(t),n=u(d(e),tn("defaultEventMinutes"));x(e,n)}},e)}function G(t,e,n){var r=Be.stop();an(),r&&en("drop",t,R(r),W(r),e,n)}var K=this;K.renderAgenda=o,K.setWidth=p,K.setHeight=h,K.beforeHide=y,K.afterShow=w,K.defaultEventEnd=q,K.timePosition=_,K.dayOfWeekCol=A,K.dateCell=H,K.cellDate=R,K.cellIsAllDay=W,K.allDayRow=B,K.allDayBounds=O,K.getHoverListener=function(){return Be},K.colContentLeft=T,K.colContentRight=k,K.getDaySegmentContainer=function(){return fe},K.getSlotSegmentContainer=function(){return De},K.getMinMinute=function(){return Ue},K.getMaxMinute=function(){return Ze},K.getBodyContent=function(){return we},K.getRowCnt=function(){return 1},K.getColCnt=function(){return Le},K.getColWidth=function(){return ze},K.getSnapHeight=function(){return Ae},K.getSnapMinutes=function(){return Ne},K.defaultSelectionEnd=I,K.renderDayOverlay=S,K.renderSelection=j,K.clearSelection=J,K.reportDayClick=X,K.dragStart=Q,K.dragStop=G,ue.call(K,n,r,a),ve.call(K),de.call(K),ce.call(K);var te,ee,ne,re,ae,oe,ie,se,le,fe,pe,ye,be,we,De,Me,Ce,Se,Ee,xe,Te,ke,He,ze,Fe,Re,Ne,We,Ae,Le,_e,Oe,Be,qe,Ie,Ye,je,Pe,Je,Ve,Xe,Ue,Ze,$e,Qe,Ge,Ke,tn=K.opt,en=K.trigger,nn=K.clearEvents,rn=K.renderOverlay,an=K.clearOverlays,on=K.reportSelection,sn=K.unselect,cn=K.daySelectionMousedown,ln=K.slotSegHtml,un=r.formatDate,fn={};U(n.addClass("fc-agenda")),Oe=new he(function(e,n){function r(t){return Math.max(c,Math.min(l,t))}var a,o,i;ne.each(function(e,r){a=t(r),o=a.offset().left,e&&(i[1]=o),i=[o],n[e]=i}),i[1]=o+a.outerWidth(),tn("allDaySlot")&&(a=ye,o=a.offset().top,e[0]=[o,o+a.outerHeight()]);for(var s=we.offset().top,c=be.offset().top,l=c+be.outerHeight(),u=0;_e*We>u;u++)e.push([r(s+Ae*u),r(s+Ae*(u+1))])}),Be=new ge(Oe),qe=new me(function(t){return oe.eq(t)})}function ce(){function n(t,e){S(t);var n,r=t.length,i=[],c=[];for(n=0;r>n;n++)t[n].allDay?i.push(t[n]):c.push(t[n]);y("allDaySlot")&&(Y(a(i),e),z()),s(o(c),e),b("eventAfterAllRender")}function r(){E(),N().empty(),W().empty()}function a(e){var n,r,a,o,i=k(T(e,t.map(e,C),m.visStart,m.visEnd)),s=i.length,c=[];for(n=0;s>n;n++)for(r=i[n],a=0;r.length>a;a++)o=r[a],o.row=0,o.level=n,c.push(o);return c}function o(e){var n,r,a,o,s,l,f=P(),v=O(),h=_(),g=u(d(m.visStart),v),p=t.map(e,i),y=[];for(n=0;f>n;n++){for(r=k(T(e,p,g,u(d(g),h-v))),le(r),a=0;r.length>a;a++)for(o=r[a],s=0;o.length>s;s++)l=o[s],l.col=n,l.level=a,y.push(l);c(g,1,!0)}return y}function i(t){return t.end?d(t.end):u(d(t.start),y("defaultEventMinutes"))}function s(n,r){var a,o,i,s,c,u,f,d,h,g,p,m,w,D,M,C,S,E,x,T,k,z,F=n.length,N="",A={},_={},O=W(),Y=P();for((T=y("isRTL"))?(k=-1,z=Y-1):(k=1,z=0),a=0;F>a;a++)o=n[a],i=o.event,s=B(o.start,o.start),c=B(o.start,o.end),u=o.col,f=o.level,d=o.forward||0,h=q(u*k+z),g=I(u*k+z)-h,g=Math.min(g-6,.95*g),p=f?g/(f+d+1):d?2*(g/(d+1)-6):g,m=h+g/(f+d+1)*f*k+(T?g-p:0),o.top=s,o.left=m,o.outerWidth=p,o.outerHeight=c-s,N+=l(i,o);
for(O[0].innerHTML=N,w=O.children(),a=0;F>a;a++)o=n[a],i=o.event,D=t(w[a]),M=b("eventRender",i,i,D),M===!1?D.remove():(M&&M!==!0&&(D.remove(),D=t(M).css({position:"absolute",top:o.top,left:o.left}).appendTo(O)),o.element=D,i._id===r?v(i,D,o):D[0]._fci=a,G(i,D));for(H(O,n,v),a=0;F>a;a++)o=n[a],(D=o.element)&&(S=A[C=o.key=X(D[0])],o.vsides=S===e?A[C]=L(D,!0):S,S=_[C],o.hsides=S===e?_[C]=R(D,!0):S,E=D.find(".fc-event-title"),E.length&&(o.contentTop=E[0].offsetTop));for(a=0;F>a;a++)o=n[a],(D=o.element)&&(D[0].style.width=Math.max(0,o.outerWidth-o.hsides)+"px",x=Math.max(0,o.outerHeight-o.vsides),D[0].style.height=x+"px",i=o.event,o.contentTop!==e&&10>x-o.contentTop&&(D.find("div.fc-event-time").text(ie(i.start,y("timeFormat"))+" - "+i.title),D.find("div.fc-event-title").remove()),b("eventAfterRender",i,i,D))}function l(t,e){var n="<",r=t.url,a=Q(t,y),o=["fc-event","fc-event-vert"];return w(t)&&o.push("fc-event-draggable"),e.isStart&&o.push("fc-event-start"),e.isEnd&&o.push("fc-event-end"),o=o.concat(t.className),t.source&&(o=o.concat(t.source.className||[])),n+=r?"a href='"+V(t.url)+"'":"div",n+=" class='"+o.join(" ")+"'"+" style='position:absolute;z-index:8;top:"+e.top+"px;left:"+e.left+"px;"+a+"'"+">"+"<div class='fc-event-inner'>"+"<div class='fc-event-time'>"+V(se(t.start,t.end,y("timeFormat")))+"</div>"+"<div class='fc-event-title'>"+V(t.title)+"</div>"+"</div>"+"<div class='fc-event-bg'></div>",e.isEnd&&D(t)&&(n+="<div class='ui-resizable-handle ui-resizable-s'>=</div>"),n+="</"+(r?"a":"div")+">"}function f(t,e,n){w(t)&&h(t,e,n.isStart),n.isEnd&&D(t)&&j(t,e,n),x(t,e)}function v(t,e,n){var r=e.find("div.fc-event-time");w(t)&&g(t,e,r),n.isEnd&&D(t)&&p(t,e,r),x(t,e)}function h(t,e,n){function r(){s||(e.width(a).height("").draggable("option","grid",null),s=!0)}var a,o,i,s=!0,l=y("isRTL")?-1:1,u=A(),f=J(),v=U(),h=Z(),g=O();e.draggable({zIndex:9,opacity:y("dragOpacity","month"),revertDuration:y("dragRevertDuration"),start:function(g,p){b("eventDragStart",e,t,g,p),te(t,e),a=e.width(),u.start(function(a,u,g,p){ae(),a?(o=!1,i=p*l,a.row?n?s&&(e.width(f-10),F(e,v*Math.round((t.end?(t.end-t.start)/Te:y("defaultEventMinutes"))/h)),e.draggable("option","grid",[f,1]),s=!1):o=!0:(re(c(d(t.start),i),c(C(t),i)),r()),o=o||s&&!i):(r(),o=!0),e.draggable("option","revert",o)},g,"drag")},stop:function(n,a){if(u.stop(),ae(),b("eventDragStop",e,t,n,a),o)r(),e.css("filter",""),K(t,e);else{var c=0;s||(c=Math.round((e.offset().top-$().offset().top)/v)*h+g-(60*t.start.getHours()+t.start.getMinutes())),ee(this,t,i,c,s,n,a)}}})}function g(t,e,n){function r(e){var r,a=u(d(t.start),e);t.end&&(r=u(d(t.end),e)),n.text(se(a,r,y("timeFormat")))}function a(){f&&(n.css("display",""),e.draggable("option","grid",[p,m]),f=!1)}var o,i,s,l,f=!1,v=y("isRTL")?-1:1,h=A(),g=P(),p=J(),m=U(),w=Z();e.draggable({zIndex:9,scroll:!1,grid:[p,m],axis:1==g?"y":!1,opacity:y("dragOpacity"),revertDuration:y("dragRevertDuration"),start:function(r,u){b("eventDragStart",e,t,r,u),te(t,e),o=e.position(),s=l=0,h.start(function(r,o,s,l){e.draggable("option","revert",!r),ae(),r&&(i=l*v,y("allDaySlot")&&!r.row?(f||(f=!0,n.hide(),e.draggable("option","grid",null)),re(c(d(t.start),i),c(C(t),i))):a())},r,"drag")},drag:function(t,e){s=Math.round((e.position.top-o.top)/m)*w,s!=l&&(f||r(s),l=s)},stop:function(n,c){var l=h.stop();ae(),b("eventDragStop",e,t,n,c),l&&(i||s||f)?ee(this,t,i,f?0:s,f,n,c):(a(),e.css("filter",""),e.css(o),r(0),K(t,e))}})}function p(t,e,n){var r,a,o=U(),i=Z();e.resizable({handles:{s:".ui-resizable-handle"},grid:o,start:function(n,o){r=a=0,te(t,e),e.css("z-index",9),b("eventResizeStart",this,t,n,o)},resize:function(s,c){r=Math.round((Math.max(o,e.height())-c.originalSize.height)/o),r!=a&&(n.text(se(t.start,r||t.end?u(M(t),i*r):null,y("timeFormat"))),a=r)},stop:function(n,a){b("eventResizeStop",this,t,n,a),r?ne(this,t,0,i*r,n,a):(e.css("z-index",8),K(t,e))}})}var m=this;m.renderEvents=n,m.compileDaySegs=a,m.clearEvents=r,m.slotSegHtml=l,m.bindDaySeg=f,fe.call(m);var y=m.opt,b=m.trigger,w=m.isEventDraggable,D=m.isEventResizable,M=m.eventEnd,S=m.reportEvents,E=m.reportEventClear,x=m.eventElementHandlers,z=m.setHeight,N=m.getDaySegmentContainer,W=m.getSlotSegmentContainer,A=m.getHoverListener,_=m.getMaxMinute,O=m.getMinMinute,B=m.timePosition,q=m.colContentLeft,I=m.colContentRight,Y=m.renderDaySegs,j=m.resizableDayEvent,P=m.getColCnt,J=m.getColWidth,U=m.getSnapHeight,Z=m.getSnapMinutes,$=m.getBodyContent,G=m.reportEventElement,K=m.showEvents,te=m.hideEvents,ee=m.eventDrop,ne=m.eventResize,re=m.renderDayOverlay,ae=m.clearOverlays,oe=m.calendar,ie=oe.formatDate,se=oe.formatDates}function le(t){var e,n,r,a,o,i;for(e=t.length-1;e>0;e--)for(a=t[e],n=0;a.length>n;n++)for(o=a[n],r=0;t[e-1].length>r;r++)i=t[e-1][r],x(o,i)&&(i.forward=Math.max(i.forward||0,(o.forward||0)+1))}function ue(t,n,r){function a(t,e){var n=F[t];return"object"==typeof n?J(n,e||r):n}function o(t,e){return n.trigger.apply(n,[t,e||S].concat(Array.prototype.slice.call(arguments,2),[S]))}function i(t){return l(t)&&!a("disableDragging")}function s(t){return l(t)&&!a("disableResizing")}function l(t){return K(t.editable,(t.source||{}).editable,a("editable"))}function f(t){k={};var e,n,r=t.length;for(e=0;r>e;e++)n=t[e],k[n._id]?k[n._id].push(n):k[n._id]=[n]}function v(t){return t.end?d(t.end):E(t)}function h(t,e){H.push(e),z[t._id]?z[t._id].push(e):z[t._id]=[e]}function g(){H=[],z={}}function p(t,n){n.click(function(r){return n.hasClass("ui-draggable-dragging")||n.hasClass("ui-resizable-resizing")?e:o("eventClick",this,t,r)}).hover(function(e){o("eventMouseover",this,t,e)},function(e){o("eventMouseout",this,t,e)})}function m(t,e){b(t,e,"show")}function y(t,e){b(t,e,"hide")}function b(t,e,n){var r,a=z[t._id],o=a.length;for(r=0;o>r;r++)e&&a[r][0]==e[0]||a[r][n]()}function w(t,e,n,r,a,i,s){var c=e.allDay,l=e._id;M(k[l],n,r,a),o("eventDrop",t,e,n,r,a,function(){M(k[l],-n,-r,c),T(l)},i,s),T(l)}function D(t,e,n,r,a,i){var s=e._id;C(k[s],n,r),o("eventResize",t,e,n,r,function(){C(k[s],-n,-r),T(s)},a,i),T(s)}function M(t,n,r,a){r=r||0;for(var o,i=t.length,s=0;i>s;s++)o=t[s],a!==e&&(o.allDay=a),u(c(o.start,n,!0),r),o.end&&(o.end=u(c(o.end,n,!0),r)),x(o,F)}function C(t,e,n){n=n||0;for(var r,a=t.length,o=0;a>o;o++)r=t[o],r.end=u(c(v(r),e,!0),n),x(r,F)}var S=this;S.element=t,S.calendar=n,S.name=r,S.opt=a,S.trigger=o,S.isEventDraggable=i,S.isEventResizable=s,S.reportEvents=f,S.eventEnd=v,S.reportEventElement=h,S.reportEventClear=g,S.eventElementHandlers=p,S.showEvents=m,S.hideEvents=y,S.eventDrop=w,S.eventResize=D;var E=S.defaultEventEnd,x=n.normalizeEvent,T=n.reportEventChange,k={},H=[],z={},F=n.options}function fe(){function n(t,e){var n,r,c,d,p,m,y,b,w=B(),D=T(),M=k(),C=0,S=t.length;for(w[0].innerHTML=a(t),o(t,w.children()),i(t),s(t,w,e),l(t),u(t),f(t),n=v(),r=0;D>r;r++){for(c=0,d=[],p=0;M>p;p++)d[p]=0;for(;S>C&&(m=t[C]).row==r;){for(y=j(d.slice(m.startCol,m.endCol)),m.top=y,y+=m.outerHeight,b=m.startCol;m.endCol>b;b++)d[b]=y;C++}n[r].height(j(d))}g(t,h(n))}function r(e,n,r){var i,s,c,d=t("<div/>"),p=B(),m=e.length;for(d[0].innerHTML=a(e),i=d.children(),p.append(i),o(e,i),l(e),u(e),f(e),g(e,h(v())),i=[],s=0;m>s;s++)c=e[s].element,c&&(e[s].row===n&&c.css("top",r),i.push(c[0]));return t(i)}function a(t){var e,n,r,a,o,i,s,c,l,u,f=y("isRTL"),d=t.length,v=F(),h=v.left,g=v.right,p="";for(e=0;d>e;e++)n=t[e],r=n.event,o=["fc-event","fc-event-hori"],w(r)&&o.push("fc-event-draggable"),n.isStart&&o.push("fc-event-start"),n.isEnd&&o.push("fc-event-end"),f?(i=A(n.end.getDay()-1),s=A(n.start.getDay()),c=n.isEnd?N(i):h,l=n.isStart?W(s):g):(i=A(n.start.getDay()),s=A(n.end.getDay()-1),c=n.isStart?N(i):h,l=n.isEnd?W(s):g),o=o.concat(r.className),r.source&&(o=o.concat(r.source.className||[])),a=r.url,u=Q(r,y),p+=a?"<a href='"+V(a)+"'":"<div",p+=" class='"+o.join(" ")+"'"+" style='position:absolute;z-index:8;left:"+c+"px;"+u+"'"+">"+"<div class='fc-event-inner'>",!r.allDay&&n.isStart&&(p+="<span class='fc-event-time'>"+V(I(r.start,r.end,y("timeFormat")))+"</span>"),p+="<span class='fc-event-title'>"+V(r.title)+"</span>"+"</div>",n.isEnd&&D(r)&&(p+="<div class='ui-resizable-handle ui-resizable-"+(f?"w":"e")+"'>"+"&nbsp;&nbsp;&nbsp;"+"</div>"),p+="</"+(a?"a":"div")+">",n.left=c,n.outerWidth=l-c,n.startCol=i,n.endCol=s+1;return p}function o(e,n){var r,a,o,i,s,c=e.length;for(r=0;c>r;r++)a=e[r],o=a.event,i=t(n[r]),s=b("eventRender",o,o,i),s===!1?i.remove():(s&&s!==!0&&(s=t(s).css({position:"absolute",left:a.left}),i.replaceWith(s),i=s),a.element=i)}function i(t){var e,n,r,a=t.length;for(e=0;a>e;e++)n=t[e],r=n.element,r&&C(n.event,r)}function s(t,e,n){var r,a,o,i,s=t.length;for(r=0;s>r;r++)a=t[r],o=a.element,o&&(i=a.event,i._id===n?q(i,o,a):o[0]._fci=r);H(e,t,q)}function l(t){var n,r,a,o,i,s=t.length,c={};for(n=0;s>n;n++)r=t[n],a=r.element,a&&(o=r.key=X(a[0]),i=c[o],i===e&&(i=c[o]=R(a,!0)),r.hsides=i)}function u(t){var e,n,r,a=t.length;for(e=0;a>e;e++)n=t[e],r=n.element,r&&(r[0].style.width=Math.max(0,n.outerWidth-n.hsides)+"px")}function f(t){var n,r,a,o,i,s=t.length,c={};for(n=0;s>n;n++)r=t[n],a=r.element,a&&(o=r.key,i=c[o],i===e&&(i=c[o]=O(a)),r.outerHeight=a[0].offsetHeight+i)}function v(){var t,e=T(),n=[];for(t=0;e>t;t++)n[t]=z(t).find("div.fc-day-content > div");return n}function h(t){var e,n=t.length,r=[];for(e=0;n>e;e++)r[e]=t[e][0].offsetTop;return r}function g(t,e){var n,r,a,o,i=t.length;for(n=0;i>n;n++)r=t[n],a=r.element,a&&(a[0].style.top=e[r.row]+(r.top||0)+"px",o=r.event,b("eventAfterRender",o,o,a))}function p(e,n,a){var o=y("isRTL"),i=o?"w":"e",s=n.find(".ui-resizable-"+i),l=!1;U(n),n.mousedown(function(t){t.preventDefault()}).click(function(t){l&&(t.preventDefault(),t.stopImmediatePropagation())}),s.mousedown(function(s){function u(n){b("eventResizeStop",this,e,n),t("body").css("cursor",""),h.stop(),P(),f&&x(this,e,f,0,n),setTimeout(function(){l=!1},0)}if(1==s.which){l=!0;var f,v,h=m.getHoverListener(),g=T(),p=k(),y=o?-1:1,w=o?p-1:0,D=n.css("top"),C=t.extend({},e),H=L(e.start);J(),t("body").css("cursor",i+"-resize").one("mouseup",u),b("eventResizeStart",this,e,s),h.start(function(t,n){if(t){var s=Math.max(H.row,t.row),l=t.col;1==g&&(s=0),s==H.row&&(l=o?Math.min(H.col,l):Math.max(H.col,l)),f=7*s+l*y+w-(7*n.row+n.col*y+w);var u=c(M(e),f,!0);if(f){C.end=u;var h=v;v=r(_([C]),a.row,D),v.find("*").css("cursor",i+"-resize"),h&&h.remove(),E(e)}else v&&(S(e),v.remove(),v=null);P(),Y(e.start,c(d(u),1))}},s)}})}var m=this;m.renderDaySegs=n,m.resizableDayEvent=p;var y=m.opt,b=m.trigger,w=m.isEventDraggable,D=m.isEventResizable,M=m.eventEnd,C=m.reportEventElement,S=m.showEvents,E=m.hideEvents,x=m.eventResize,T=m.getRowCnt,k=m.getColCnt;m.getColWidth;var z=m.allDayRow,F=m.allDayBounds,N=m.colContentLeft,W=m.colContentRight,A=m.dayOfWeekCol,L=m.dateCell,_=m.compileDaySegs,B=m.getDaySegmentContainer,q=m.bindDaySeg,I=m.calendar.formatDates,Y=m.renderDayOverlay,P=m.clearOverlays,J=m.clearSelection}function de(){function e(t,e,a){n(),e||(e=c(t,a)),l(t,e,a),r(t,e,a)}function n(t){f&&(f=!1,u(),s("unselect",null,t))}function r(t,e,n,r){f=!0,s("select",null,t,e,n,r)}function a(e){var a=o.cellDate,s=o.cellIsAllDay,c=o.getHoverListener(),f=o.reportDayClick;if(1==e.which&&i("selectable")){n(e);var d;c.start(function(t,e){u(),t&&s(t)?(d=[a(e),a(t)].sort(Y),l(d[0],d[1],!0)):d=null},e),t(document).one("mouseup",function(t){c.stop(),d&&(+d[0]==+d[1]&&f(d[0],!0,t),r(d[0],d[1],!0,t))})}}var o=this;o.select=e,o.unselect=n,o.reportSelection=r,o.daySelectionMousedown=a;var i=o.opt,s=o.trigger,c=o.defaultSelectionEnd,l=o.renderSelection,u=o.clearSelection,f=!1;i("selectable")&&i("unselectAuto")&&t(document).mousedown(function(e){var r=i("unselectCancel");r&&t(e.target).parents(r).length||n(e)})}function ve(){function e(e,n){var r=o.shift();return r||(r=t("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")),r[0].parentNode!=n[0]&&r.appendTo(n),a.push(r.css(e).show()),r}function n(){for(var t;t=a.shift();)o.push(t.hide().unbind())}var r=this;r.renderOverlay=e,r.clearOverlays=n;var a=[],o=[]}function he(t){var e,n,r=this;r.build=function(){e=[],n=[],t(e,n)},r.cell=function(t,r){var a,o=e.length,i=n.length,s=-1,c=-1;for(a=0;o>a;a++)if(r>=e[a][0]&&e[a][1]>r){s=a;break}for(a=0;i>a;a++)if(t>=n[a][0]&&n[a][1]>t){c=a;break}return s>=0&&c>=0?{row:s,col:c}:null},r.rect=function(t,r,a,o,i){var s=i.offset();return{top:e[t][0]-s.top,left:n[r][0]-s.left,width:n[o][1]-n[r][0],height:e[a][1]-e[t][0]}}}function ge(e){function n(t){pe(t);var n=e.cell(t.pageX,t.pageY);(!n!=!i||n&&(n.row!=i.row||n.col!=i.col))&&(n?(o||(o=n),a(n,o,n.row-o.row,n.col-o.col)):a(n,o),i=n)}var r,a,o,i,s=this;s.start=function(s,c,l){a=s,o=i=null,e.build(),n(c),r=l||"mousemove",t(document).bind(r,n)},s.stop=function(){return t(document).unbind(r,n),i}}function pe(t){t.pageX===e&&(t.pageX=t.originalEvent.pageX,t.pageY=t.originalEvent.pageY)}function me(t){function n(e){return a[e]=a[e]||t(e)}var r=this,a={},o={},i={};r.left=function(t){return o[t]=o[t]===e?n(t).position().left:o[t]},r.right=function(t){return i[t]=i[t]===e?r.left(t)+n(t).width():i[t]},r.clear=function(){a={},o={},i={}}}var ye={defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberCalculation:"iso",weekNumberTitle:"W",allDayDefault:!0,ignoreTimezone:!0,lazyFetching:!0,startParam:"start",endParam:"end",titleFormat:{month:"MMMM yyyy",week:"MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",day:"dddd, MMM d, yyyy"},columnFormat:{month:"ddd",week:"ddd M/d",day:"dddd M/d"},timeFormat:{"":"h(:mm)t"},isRTL:!1,firstDay:0,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],buttonText:{prev:"<span class='fc-text-arrow'>&lsaquo;</span>",next:"<span class='fc-text-arrow'>&rsaquo;</span>",prevYear:"<span class='fc-text-arrow'>&laquo;</span>",nextYear:"<span class='fc-text-arrow'>&raquo;</span>",today:"today",month:"month",week:"week",day:"day"},theme:!1,buttonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e"},unselectAuto:!0,dropAccept:"*"},be={header:{left:"next,prev today",center:"",right:"title"},buttonText:{prev:"<span class='fc-text-arrow'>&rsaquo;</span>",next:"<span class='fc-text-arrow'>&lsaquo;</span>",prevYear:"<span class='fc-text-arrow'>&raquo;</span>",nextYear:"<span class='fc-text-arrow'>&laquo;</span>"},buttonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w"}},we=t.fullCalendar={version:"1.6.1"},De=we.views={};t.fn.fullCalendar=function(n){if("string"==typeof n){var a,o=Array.prototype.slice.call(arguments,1);return this.each(function(){var r=t.data(this,"fullCalendar");if(r&&t.isFunction(r[n])){var i=r[n].apply(r,o);a===e&&(a=i),"destroy"==n&&t.removeData(this,"fullCalendar")}}),a!==e?a:this}var i=n.eventSources||[];return delete n.eventSources,n.events&&(i.push(n.events),delete n.events),n=t.extend(!0,{},ye,n.isRTL||n.isRTL===e&&ye.isRTL?be:{},n),this.each(function(e,a){var o=t(a),s=new r(o,n,i);o.data("fullCalendar",s),s.render()}),this},we.sourceNormalizers=[],we.sourceFetchers=[];var Me={dataType:"json",cache:!1},Ce=1;we.addDays=c,we.cloneDate=d,we.parseDate=m,we.parseISO8601=y,we.parseTime=b,we.formatDate=w,we.formatDates=D;var Se=["sun","mon","tue","wed","thu","fri","sat"],Ee=864e5,xe=36e5,Te=6e4,ke={s:function(t){return t.getSeconds()},ss:function(t){return P(t.getSeconds())},m:function(t){return t.getMinutes()},mm:function(t){return P(t.getMinutes())},h:function(t){return t.getHours()%12||12},hh:function(t){return P(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return P(t.getHours())},d:function(t){return t.getDate()},dd:function(t){return P(t.getDate())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return P(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},yy:function(t){return(t.getFullYear()+"").substring(2)},yyyy:function(t){return t.getFullYear()},t:function(t){return 12>t.getHours()?"a":"p"},tt:function(t){return 12>t.getHours()?"am":"pm"},T:function(t){return 12>t.getHours()?"A":"P"},TT:function(t){return 12>t.getHours()?"AM":"PM"},u:function(t){return w(t,"yyyy-MM-dd'T'HH:mm:ss'Z'")},S:function(t){var e=t.getDate();return e>10&&20>e?"th":["st","nd","rd"][e%10-1]||"th"},w:function(t,e){return e.weekNumberCalculation(t)},W:function(t){return M(t)}};we.dateFormatters=ke,we.applyAll=G,De.month=te,De.basicWeek=ee,De.basicDay=ne,n({weekMode:"fixed"}),De.agendaWeek=oe,De.agendaDay=ie,n({allDaySlot:!0,allDayText:"all-day",firstHour:6,slotMinutes:30,defaultEventMinutes:120,axisFormat:"h(:mm)tt",timeFormat:{agenda:"h:mm{ - h:mm}"},dragOpacity:{agenda:.5},minTime:0,maxTime:24})})(jQuery);
/*! qTip2  (includes: svg ajax tips modal viewport imagemap ie6 / basic css3) | qtip2.com | Licensed MIT, GPL | Tue Jun 11 2013 06:46:33 */
(function(a,b,c){(function(a){"use strict",typeof define=="function"&&define.amd?define(["jquery"],a):jQuery&&!jQuery.fn.qtip&&a(jQuery)})(function(d){function G(c){v={pageX:c.pageX,pageY:c.pageY,type:"mousemove",scrollX:a.pageXOffset||b.body.scrollLeft||b.documentElement.scrollLeft,scrollY:a.pageYOffset||b.body.scrollTop||b.documentElement.scrollTop}}function H(a){var b=function(a){return a===g||"object"!=typeof a},c=function(a){return!d.isFunction(a)&&(!a&&!a.attr||a.length<1||"object"==typeof a&&!a.jquery&&!a.then)};if(!a||"object"!=typeof a)return f;b(a.metadata)&&(a.metadata={type:a.metadata});if("content"in a){if(b(a.content)||a.content.jquery)a.content={text:a.content};c(a.content.text||f)&&(a.content.text=f),"title"in a.content&&(b(a.content.title)&&(a.content.title={text:a.content.title}),c(a.content.title.text||f)&&(a.content.title.text=f))}return"position"in a&&b(a.position)&&(a.position={my:a.position,at:a.position}),"show"in a&&b(a.show)&&(a.show=a.show.jquery?{target:a.show}:{event:a.show}),"hide"in a&&b(a.hide)&&(a.hide=a.hide.jquery?{target:a.hide}:{event:a.hide}),"style"in a&&b(a.style)&&(a.style={classes:a.style}),d.each(u,function(){this.sanitize&&this.sanitize(a)}),a}function I(h,i,j,k){function O(a){var b=0,c,d=i,e=a.split(".");while(d=d[e[b++]])b<e.length&&(c=d);return[c||i,e.pop()]}function P(a){return y.concat("").join(a?"-"+a+" ":" ")}function Q(){var a=i.style.widget,b=J.hasClass(L);J.removeClass(L),L=a?"ui-state-disabled":"qtip-disabled",J.toggleClass(L,b),J.toggleClass("ui-helper-reset "+P(),a).toggleClass(A,i.style.def&&!a),M.content&&M.content.toggleClass(P("content"),a),M.titlebar&&M.titlebar.toggleClass(P("header"),a),M.button&&M.button.toggleClass(w+"-icon",!a)}function R(a){M.title&&(M.titlebar.remove(),M.titlebar=M.title=M.button=g,a!==f&&q.reposition())}function S(){var a=i.content.title.button,b=typeof a=="string",c=b?a:"Close tooltip";M.button&&M.button.remove(),a.jquery?M.button=a:M.button=d("<a />",{"class":"qtip-close "+(i.style.widget?"":w+"-icon"),title:c,"aria-label":c}).prepend(d("<span />",{"class":"ui-icon ui-icon-close",html:"&times;"})),M.button.appendTo(M.titlebar||J).attr("role","button").click(function(a){return J.hasClass(L)||q.hide(a),f})}function T(){var a=s+"-title";M.titlebar&&R(),M.titlebar=d("<div />",{"class":w+"-titlebar "+(i.style.widget?P("header"):"")}).append(M.title=d("<div />",{id:a,"class":w+"-title","aria-atomic":e})).insertBefore(M.content).delegate(".qtip-close","mousedown keydown mouseup keyup mouseout",function(a){d(this).toggleClass("ui-state-active ui-state-focus",a.type.substr(-4)==="down")}).delegate(".qtip-close","mouseover mouseout",function(a){d(this).toggleClass("ui-state-hover",a.type==="mouseover")}),i.content.title.button&&S()}function U(a){var b=M.button;if(!q.rendered)return f;a?S():b.remove()}function V(a,b){var c=M.title;if(!q.rendered||!a)return f;d.isFunction(a)&&(a=a.call(h,N.event,q));if(a===f||!a&&a!=="")return R(f);a.jquery&&a.length>0?c.empty().append(a.css({display:"block"})):c.html(a),b!==f&&q.rendered&&J[0].offsetWidth>0&&q.reposition(N.event)}function W(a){a&&d.isFunction(a.done)&&a.done(function(a){X(a,null,f)})}function X(a,b,e){function j(a){function i(c){c&&(delete h[c.src],clearTimeout(q.timers.img[c.src]),d(c).unbind(K)),d.isEmptyObject(h)&&(b!==f&&q.reposition(N.event),a())}var e,h={};if((e=g.find("img[src]:not([height]):not([width])")).length===0)return i();e.each(function(a,b){if(h[b.src]!==c)return;var e=0,f=3;(function g(){if(b.height||b.width||e>f)return i(b);e+=1,q.timers.img[b.src]=setTimeout(g,700)})(),d(b).bind("error"+K+" load"+K,function(){i(this)}),h[b.src]=b})}var g=M.content;return!q.rendered||!a?f:(d.isFunction(a)&&(a=a.call(h,N.event,q)||""),e!==f&&W(i.content.deferred),a.jquery&&a.length>0?g.empty().append(a.css({display:"block"})):g.html(a),q.rendered<0?J.queue("fx",j):(I=0,j(d.noop)),q)}function Y(){function m(a){if(J.hasClass(L))return f;clearTimeout(q.timers.show),clearTimeout(q.timers.hide);var b=function(){q.toggle(e,a)};i.show.delay>0?q.timers.show=setTimeout(b,i.show.delay):b()}function n(a){if(J.hasClass(L)||D||I)return f;var b=d(a.relatedTarget||a.target),e=b.closest(z)[0]===J[0],h=b[0]===g.show[0];clearTimeout(q.timers.show),clearTimeout(q.timers.hide);if(c.target==="mouse"&&e||i.hide.fixed&&/mouse(out|leave|move)/.test(a.type)&&(e||h)){try{a.preventDefault(),a.stopImmediatePropagation()}catch(j){}return}i.hide.delay>0?q.timers.hide=setTimeout(function(){q.hide(a)},i.hide.delay):q.hide(a)}function o(a){if(J.hasClass(L))return f;clearTimeout(q.timers.inactive),q.timers.inactive=setTimeout(function(){q.hide(a)},i.hide.inactive)}function p(a){q.rendered&&J[0].offsetWidth>0&&q.reposition(a)}var c=i.position,g={show:i.show.target,hide:i.hide.target,viewport:d(c.viewport),document:d(b),body:d(b.body),window:d(a)},k={show:d.trim(""+i.show.event).split(" "),hide:d.trim(""+i.hide.event).split(" ")},l=d.browser.msie&&parseInt(d.browser.version,10)===6;J.bind("mouseenter"+K+" mouseleave"+K,function(a){var b=a.type==="mouseenter";b&&q.focus(a),J.toggleClass(C,b)}),/mouse(out|leave)/i.test(i.hide.event)&&i.hide.leave==="window"&&g.window.bind("mouseout"+K+" blur"+K,function(a){!/select|option/.test(a.target.nodeName)&&!a.relatedTarget&&q.hide(a)}),i.hide.fixed?(g.hide=g.hide.add(J),J.bind("mouseover"+K,function(){J.hasClass(L)||clearTimeout(q.timers.hide)})):/mouse(over|enter)/i.test(i.show.event)&&g.hide.bind("mouseleave"+K,function(a){clearTimeout(q.timers.show)}),(""+i.hide.event).indexOf("unfocus")>-1&&c.container.closest("html").bind("mousedown"+K+" touchstart"+K,function(a){var b=d(a.target),c=q.rendered&&!J.hasClass(L)&&J[0].offsetWidth>0,e=b.parents(z).filter(J[0]).length>0;b[0]!==h[0]&&b[0]!==J[0]&&!e&&!h.has(b[0]).length&&!b.attr("disabled")&&q.hide(a)}),"number"==typeof i.hide.inactive&&(g.show.bind("qtip-"+j+"-inactive",o),d.each(t.inactiveEvents,function(a,b){g.hide.add(M.tooltip).bind(b+K+"-inactive",o)})),d.each(k.hide,function(a,b){var c=d.inArray(b,k.show),e=d(g.hide);c>-1&&e.add(g.show).length===e.length||b==="unfocus"?(g.show.bind(b+K,function(a){J[0].offsetWidth>0?n(a):m(a)}),delete k.show[c]):g.hide.bind(b+K,n)}),d.each(k.show,function(a,b){g.show.bind(b+K,m)}),"number"==typeof i.hide.distance&&g.show.add(J).bind("mousemove"+K,function(a){var b=N.origin||{},c=i.hide.distance,d=Math.abs;(d(a.pageX-b.pageX)>=c||d(a.pageY-b.pageY)>=c)&&q.hide(a)}),c.target==="mouse"&&(g.show.bind("mousemove"+K,G),c.adjust.mouse&&(i.hide.event&&(J.bind("mouseleave"+K,function(a){(a.relatedTarget||a.target)!==g.show[0]&&q.hide(a)}),M.target.bind("mouseenter"+K+" mouseleave"+K,function(a){N.onTarget=a.type==="mouseenter"})),g.document.bind("mousemove"+K,function(a){q.rendered&&N.onTarget&&!J.hasClass(L)&&J[0].offsetWidth>0&&q.reposition(a||v)}))),(c.adjust.resize||g.viewport.length)&&(d.event.special.resize?g.viewport:g.window).bind("resize"+K,p),g.window.bind("scroll"+K,p)}function Z(){var c=[i.show.target[0],i.hide.target[0],q.rendered&&M.tooltip[0],i.position.container[0],i.position.viewport[0],i.position.container.closest("html")[0],a,b];q.rendered?d([]).pushStack(d.grep(c,function(a){return typeof a=="object"})).unbind(K):i.show.target.unbind(K+"-create")}var q=this,r=b.body,s=w+"-"+j,D=0,I=0,J=d(),K=".qtip-"+j,L="qtip-disabled",M,N;q.id=j,q.rendered=f,q.destroyed=f,q.elements=M={target:h},q.timers={img:{}},q.options=i,q.checks={},q.plugins={},q.cache=N={event:{},target:d(),disabled:f,attr:k,onTarget:f,lastClass:""},q.checks.builtin={"^id$":function(a,b,c){var g=c===e?t.nextid:c,h=w+"-"+g;g!==f&&g.length>0&&!d("#"+h).length&&(J[0].id=h,M.content[0].id=h+"-content",M.title[0].id=h+"-title")},"^content.text$":function(a,b,c){X(i.content.text)},"^content.deferred$":function(a,b,c){W(i.content.deferred)},"^content.title.text$":function(a,b,c){if(!c)return R();!M.title&&c&&T(),V(c)},"^content.title.button$":function(a,b,c){U(c)},"^position.(my|at)$":function(a,b,c){"string"==typeof c&&(a[b]=new u.Corner(c))},"^position.container$":function(a,b,c){q.rendered&&J.appendTo(c)},"^show.ready$":function(){q.rendered?q.toggle(e):q.render(1)},"^style.classes$":function(a,b,c){J.attr("class",w+" qtip "+c)},"^style.width|height":function(a,b,c){J.css(b,c)},"^style.widget|content.title":Q,"^events.(render|show|move|hide|focus|blur)$":function(a,b,c){J[(d.isFunction(c)?"":"un")+"bind"]("tooltip"+b,c)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var a=i.position;J.attr("tracking",a.target==="mouse"&&a.adjust.mouse),Z(),Y()}},d.extend(q,{_triggerEvent:function(a,b,c){var e=d.Event("tooltip"+a);return e.originalEvent=(c?d.extend({},c):g)||N.event||g,J.trigger(e,[q].concat(b||[])),!e.isDefaultPrevented()},render:function(a){if(q.rendered)return q;var b=i.content.text,c=i.content.title,g=i.position;return d.attr(h[0],"aria-describedby",s),J=M.tooltip=d("<div/>",{id:s,"class":[w,A,i.style.classes,w+"-pos-"+i.position.my.abbrev()].join(" "),width:i.style.width||"",height:i.style.height||"",tracking:g.target==="mouse"&&g.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":f,"aria-describedby":s+"-content","aria-hidden":e}).toggleClass(L,N.disabled).data("qtip",q).appendTo(i.position.container).append(M.content=d("<div />",{"class":w+"-content",id:s+"-content","aria-atomic":e})),q.rendered=-1,D=1,c.text?(T(),d.isFunction(c.text)||V(c.text,f)):c.button&&S(),(!d.isFunction(b)||b.then)&&X(b,f),q.rendered=e,Q(),d.each(i.events,function(a,b){d.isFunction(b)&&J.bind(a==="toggle"?"tooltipshow tooltiphide":"tooltip"+a,b)}),d.each(u,function(){this.initialize==="render"&&this(q)}),Y(),J.queue("fx",function(b){q._triggerEvent("render"),D=0,(i.show.ready||a)&&q.toggle(e,N.event,f),b()}),q},get:function(a){var b,c;switch(a.toLowerCase()){case"dimensions":b={height:J.outerHeight(f),width:J.outerWidth(f)};break;case"offset":b=u.offset(J,i.position.container);break;default:c=O(a.toLowerCase()),b=c[0][c[1]],b=b.precedance?b.string():b}return b},set:function(a,b){function m(a,b){var c,d,e;for(c in k)for(d in k[c])if(e=(new RegExp(d,"i")).exec(a))b.push(e),k[c][d].apply(q,b)}var c=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,h=/^content\.(title|attr)|style/i,j=f,k=q.checks,l;return"string"==typeof a?(l=a,a={},a[l]=b):a=d.extend(e,{},a),d.each(a,function(b,e){var f=O(b.toLowerCase()),g;g=f[0][f[1]],f[0][f[1]]="object"==typeof e&&e.nodeType?d(e):e,a[b]=[f[0],f[1],e,g],j=c.test(b)||j}),H(i),D=1,d.each(a,m),D=0,q.rendered&&J[0].offsetWidth>0&&j&&q.reposition(i.position.target==="mouse"?g:N.event),q},toggle:function(a,c){function t(){a?(d.browser.msie&&J[0].style.removeAttribute("filter"),J.css("overflow",""),"string"==typeof h.autofocus&&d(h.autofocus,J).focus(),h.target.trigger("qtip-"+j+"-inactive")):J.css({display:"",visibility:"",opacity:"",left:"",top:""}),q._triggerEvent(a?"visible":"hidden")}if(c){if(/over|enter/.test(c.type)&&/out|leave/.test(N.event.type)&&i.show.target.add(c.target).length===i.show.target.length&&J.has(c.relatedTarget).length)return q;N.event=d.extend({},c)}if(!q.rendered)return a?q.render(1):q;var g=a?"show":"hide",h=i[g],k=i[a?"hide":"show"],l=i.position,m=i.content,n=J[0].offsetWidth>0,o=a||h.target.length===1,p=!c||h.target.length<2||N.target[0]===c.target,r,s;return(typeof a).search("boolean|number")&&(a=!n),!J.is(":animated")&&n===a&&p?q:q._triggerEvent(g,[90])?(d.attr(J[0],"aria-hidden",!a),a?(N.origin=d.extend({},v),q.focus(c),d.isFunction(m.text)&&X(m.text,f),d.isFunction(m.title.text)&&V(m.title.text,f),!F&&l.target==="mouse"&&l.adjust.mouse&&(d(b).bind("mousemove.qtip",G),F=e),q.reposition(c,arguments[2]),!h.solo||d(z,h.solo).not(J).qtip("hide",d.Event("tooltipsolo"))):(clearTimeout(q.timers.show),delete N.origin,F&&!d(z+'[tracking="true"]:visible',h.solo).not(J).length&&(d(b).unbind("mousemove.qtip"),F=f),q.blur(c)),h.effect===f||o===f?(J[g](),t.call(J)):d.isFunction(h.effect)?(J.stop(1,1),h.effect.call(J,q),J.queue("fx",function(a){t(),a()})):J.fadeTo(90,a?1:0,t),a&&h.target.trigger("qtip-"+j+"-inactive"),q):q},show:function(a){return q.toggle(e,a)},hide:function(a){return q.toggle(f,a)},focus:function(a){if(!q.rendered)return q;var b=d(z),c=parseInt(J[0].style.zIndex,10),e=t.zindex+b.length,f=d.extend({},a),g;return J.hasClass(B)||q._triggerEvent("focus",[e],f)&&(c!==e&&(b.each(function(){this.style.zIndex>c&&(this.style.zIndex=this.style.zIndex-1)}),b.filter("."+B).qtip("blur",f)),J.addClass(B)[0].style.zIndex=e),q},blur:function(a){return J.removeClass(B),q._triggerEvent("blur",[J.css("zIndex")],a),q},reposition:function(c,e){if(!q.rendered||D)return q;D=1;var g=i.position.target,h=i.position,j=h.my,k=h.at,r=h.adjust,s=r.method.split(" "),t=J.outerWidth(f),w=J.outerHeight(f),x=0,y=0,z=J.css("position"),A=h.viewport,B={left:0,top:0},C=h.container,E=J[0].offsetWidth>0,F=c&&c.type==="scroll",G=d(a),H,I;if(d.isArray(g)&&g.length===2)k={x:m,y:l},B={left:g[0],top:g[1]};else if(g==="mouse"&&(c&&c.pageX||N.event.pageX))k={x:m,y:l},c=v&&v.pageX&&(r.mouse||!c||!c.pageX)?{pageX:v.pageX,pageY:v.pageY}:(c&&(c.type==="resize"||c.type==="scroll")?N.event:c&&c.pageX&&c.type==="mousemove"?c:!r.mouse&&N.origin&&N.origin.pageX&&i.show.distance?N.origin:c)||c||N.event||v||{},z!=="static"&&(B=C.offset()),B={left:c.pageX-B.left,top:c.pageY-B.top},r.mouse&&F&&(B.left-=v.scrollX-G.scrollLeft(),B.top-=v.scrollY-G.scrollTop());else{g==="event"&&c&&c.target&&c.type!=="scroll"&&c.type!=="resize"?N.target=d(c.target):g!=="event"&&(N.target=d(g.jquery?g:M.target)),g=N.target,g=d(g).eq(0);if(g.length===0)return q;g[0]===b||g[0]===a?(x=u.iOS?a.innerWidth:g.width(),y=u.iOS?a.innerHeight:g.height(),g[0]===a&&(B={top:(A||g).scrollTop(),left:(A||g).scrollLeft()})):u.imagemap&&g.is("area")?H=u.imagemap(q,g,k,u.viewport?s:f):u.svg&&g[0].ownerSVGElement?H=u.svg(q,g,k,u.viewport?s:f):(x=g.outerWidth(f),y=g.outerHeight(f),B=u.offset(g,C)),H&&(x=H.width,y=H.height,I=H.offset,B=H.position);if(u.iOS>3.1&&u.iOS<4.1||u.iOS>=4.3&&u.iOS<4.33||!u.iOS&&z==="fixed")B.left-=G.scrollLeft(),B.top-=G.scrollTop();B.left+=k.x===o?x:k.x===p?x/2:0,B.top+=k.y===n?y:k.y===p?y/2:0}return B.left+=r.x+(j.x===o?-t:j.x===p?-t/2:0),B.top+=r.y+(j.y===n?-w:j.y===p?-w/2:0),u.viewport?(B.adjusted=u.viewport(q,B,h,x,y,t,w),I&&B.adjusted.left&&(B.left+=I.left),I&&B.adjusted.top&&(B.top+=I.top)):B.adjusted={left:0,top:0},q._triggerEvent("move",[B,A.elem||A],c)?(delete B.adjusted,e===f||!E||isNaN(B.left)||isNaN(B.top)||g==="mouse"||!d.isFunction(h.effect)?J.css(B):d.isFunction(h.effect)&&(h.effect.call(J,q,d.extend({},B)),J.queue(function(a){d(this).css({opacity:"",height:""}),d.browser.msie&&this.style.removeAttribute("filter"),a()})),D=0,q):q},disable:function(a){return"boolean"!=typeof a&&(a=!J.hasClass(L)&&!N.disabled),q.rendered?(J.toggleClass(L,a),d.attr(J[0],"aria-disabled",a)):N.disabled=!!a,q},enable:function(){return q.disable(f)},destroy:function(){var a=h[0],b=d.attr(a,E),c=h.data("qtip");q.destroyed=e,q.rendered&&(J.stop(1,0).remove(),d.each(q.plugins,function(){this.destroy&&this.destroy()})),clearTimeout(q.timers.show),clearTimeout(q.timers.hide),Z();if(!c||q===c)d.removeData(a,"qtip"),i.suppress&&b&&(d.attr(a,"title",b),h.removeAttr(E)),h.removeAttr("aria-describedby");return h.unbind(".qtip-"+j),delete x[q.id],h}})}function J(a,c){var h,i,j,k,l,m=d(this),n=d(b.body),o=this===b?n:m,p=m.metadata?m.metadata(c.metadata):g,q=c.metadata.type==="html5"&&p?p[c.metadata.name]:g,r=m.data(c.metadata.name||"qtipopts");try{r=typeof r=="string"?d.parseJSON(r):r}catch(s){}k=d.extend(e,{},t.defaults,c,typeof r=="object"?H(r):g,H(q||p)),i=k.position,k.id=a;if("boolean"==typeof k.content.text){j=m.attr(k.content.attr);if(k.content.attr!==f&&j)k.content.text=j;else return f}i.container.length||(i.container=n),i.target===f&&(i.target=o),k.show.target===f&&(k.show.target=o),k.show.solo===e&&(k.show.solo=i.container.closest("body")),k.hide.target===f&&(k.hide.target=o),k.position.viewport===e&&(k.position.viewport=i.container),i.container=i.container.eq(0),i.at=new u.Corner(i.at),i.my=new u.Corner(i.my);if(d.data(this,"qtip"))if(k.overwrite)m.qtip("destroy");else if(k.overwrite===f)return f;return k.suppress&&(l=d.attr(this,"title"))&&d(this).removeAttr("title").attr(E,l).attr("title",""),h=new I(m,k,a,!!j),d.data(this,"qtip",h),m.bind("remove.qtip-"+a+" removeqtip.qtip-"+a,function(){h.destroy()}),h}function K(a){var b=this,c=a.elements.tooltip,g=a.options.content.ajax,h=t.defaults.content.ajax,i=".qtip-ajax",j=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,k=e,l=f,m;a.checks.ajax={"^content.ajax":function(a,d,e){d==="ajax"&&(g=e),d==="once"?b.init():g&&g.url?b.load():c.unbind(i)}},d.extend(b,{init:function(){return g&&g.url&&c.unbind(i)[g.once?"one":"bind"]("tooltipshow"+i,b.load),b},load:function(c){function r(){var b;if(a.destroyed)return;k=f,p&&(l=e,a.show(c.originalEvent)),(b=h.complete||g.complete)&&d.isFunction(b)&&b.apply(g.context||a,arguments)}function s(b,c,e){var f;if(a.destroyed)return;o&&"string"==typeof b&&(b=d("<div/>").append(b.replace(j,"")).find(o)),(f=h.success||g.success)&&d.isFunction(f)?f.call(g.context||a,b,c,e):a.set("content.text",b)}function t(b,c,d){if(a.destroyed||b.status===0)return;a.set("content.text",c+": "+d)}if(l){l=f;return}var i=g.url.lastIndexOf(" "),n=g.url,o,p=!g.loading&&k;if(p)try{c.preventDefault()}catch(q){}else if(c&&c.isDefaultPrevented())return b;m&&m.abort&&m.abort(),i>-1&&(o=n.substr(i),n=n.substr(0,i)),m=d.ajax(d.extend({error:h.error||t,context:a},g,{url:n,success:s,complete:r}))},destroy:function(){m&&m.abort&&m.abort(),a.destroyed=e}}),b.init()}function L(a,b,c){var d=Math.ceil(b/2),e=Math.ceil(c/2),f={bottomright:[[0,0],[b,c],[b,0]],bottomleft:[[0,0],[b,0],[0,c]],topright:[[0,c],[b,0],[b,c]],topleft:[[0,0],[0,c],[b,c]],topcenter:[[0,c],[d,0],[b,c]],bottomcenter:[[0,0],[b,0],[d,c]],rightcenter:[[0,0],[b,e],[0,c]],leftcenter:[[b,0],[b,c],[0,e]]};return f.lefttop=f.bottomright,f.righttop=f.bottomleft,f.leftbottom=f.topright,f.rightbottom=f.topleft,f[a.string()]}function M(a,b){function D(a){var b=v.is(":visible");v.show(),a(),v.toggle(b)}function E(){x.width=r.height,x.height=r.width}function F(){x.width=r.width,x.height=r.height}function G(b,d,g,j){if(!t.tip)return;var k=q.corner.clone(),u=g.adjusted,v=a.options.position.adjust.method.split(" "),x=v[0],y=v[1]||v[0],z={left:f,top:f,x:0,y:0},A,B={},C;q.corner.fixed!==e&&(x===s&&k.precedance===h&&u.left&&k.y!==p?k.precedance=k.precedance===h?i:h:x!==s&&u.left&&(k.x=k.x===p?u.left>0?m:o:k.x===m?o:m),y===s&&k.precedance===i&&u.top&&k.x!==p?k.precedance=k.precedance===i?h:i:y!==s&&u.top&&(k.y=k.y===p?u.top>0?l:n:k.y===l?n:l),k.string()!==w.corner.string()&&(w.top!==u.top||w.left!==u.left)&&q.update(k,f)),A=q.position(k,u),A[k.x]+=I(k,k.x),A[k.y]+=I(k,k.y),A.right!==c&&(A.left=-A.right),A.bottom!==c&&(A.top=-A.bottom),A.user=Math.max(0,r.offset);if(z.left=x===s&&!!u.left)k.x===p?B["margin-left"]=z.x=A["margin-left"]:(C=A.right!==c?[u.left,-A.left]:[-u.left,A.left],(z.x=Math.max(C[0],C[1]))>C[0]&&(g.left-=u.left,z.left=f),B[A.right!==c?o:m]=z.x);if(z.top=y===s&&!!u.top)k.y===p?B["margin-top"]=z.y=A["margin-top"]:(C=A.bottom!==c?[u.top,-A.top]:[-u.top,A.top],(z.y=Math.max(C[0],C[1]))>C[0]&&(g.top-=u.top,z.top=f),B[A.bottom!==c?n:l]=z.y);t.tip.css(B).toggle(!(z.x&&z.y||k.x===p&&z.y||k.y===p&&z.x)),g.left-=A.left.charAt?A.user:x!==s||z.top||!z.left&&!z.top?A.left:0,g.top-=A.top.charAt?A.user:y!==s||z.left||!z.left&&!z.top?A.top:0,w.left=u.left,w.top=u.top,w.corner=k.clone()}function H(){var b=r.corner,c=a.options.position,d=c.at,g=c.my.string?c.my.string():c.my;return b===f||g===f&&d===f?f:(b===e?q.corner=new u.Corner(g):b.string||(q.corner=new u.Corner(b),q.corner.fixed=e),w.corner=new u.Corner(q.corner.string()),q.corner.string()!=="centercenter")}function I(a,b,c){b=b?b:a[a.precedance];var d=t.titlebar&&a.y===l,e=d?t.titlebar:v,f="border-"+b+"-width",g=function(a){return parseInt(a.css(f),10)},h;return D(function(){h=(c?g(c):g(t.content)||g(e)||g(v))||0}),h}function J(a){var b=t.titlebar&&a.y===l,c=b?t.titlebar:t.content,e=d.browser.mozilla,f=e?"-moz-":d.browser.webkit?"-webkit-":"",g="border-radius-"+a.y+a.x,h="border-"+a.y+"-"+a.x+"-radius",i=function(a){return parseInt(c.css(a),10)||parseInt(v.css(a),10)},j;return D(function(){j=i(h)||i(f+h)||i(f+g)||i(g)||0}),j}function K(a){function z(a,b,c){var d=a.css(b)||n;return c&&d===a.css(c)?f:j.test(d)?f:d}var b,c,g,h=t.tip.css("cssText",""),i=a||q.corner,j=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,k="border-"+i[i.precedance]+"-color",m="background-color",n="transparent",o=" !important",s=t.titlebar,u=s&&(i.y===l||i.y===p&&h.position().top+x.height/2+r.offset<s.outerHeight(e)),w=u?s:t.content;D(function(){y.fill=z(h,m)||z(w,m)||z(t.content,m)||z(v,m)||h.css(m),y.border=z(h,k,"color")||z(w,k,"color")||z(t.content,k,"color")||z(v,k,"color")||v.css(k),d("*",h).add(h).css("cssText",m+":"+n+o+";border:0"+o+";")})}function M(a){var b=a.precedance===i,c=x[b?j:k],d=x[b?k:j],e=a.string().indexOf(p)>-1,f=c*(e?.5:1),g=Math.pow,h=Math.round,l,m,n,o=Math.sqrt(g(f,2)+g(d,2)),q=[z/f*o,z/d*o];return q[2]=Math.sqrt(g(q[0],2)-g(z,2)),q[3]=Math.sqrt(g(q[1],2)-g(z,2)),l=o+q[2]+q[3]+(e?0:q[0]),m=l/o,n=[h(m*d),h(m*c)],{height:n[b?0:1],width:n[b?1:0]}}function N(a,b,c){return"<qvml:"+a+' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" '+(b||"")+' style="behavior: url(#default#VML); '+(c||"")+'" />'}var q=this,r=a.options.style.tip,t=a.elements,v=t.tooltip,w={top:0,left:0},x={width:r.width,height:r.height},y={},z=r.border||0,A=".qtip-tip",B=!!(d("<canvas />")[0]||{}).getContext,C;q.corner=g,q.mimic=g,q.border=z,q.offset=r.offset,q.size=x,a.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){q.init()||q.destroy(),a.reposition()},"^style.tip.(height|width)$":function(){x={width:r.width,height:r.height},q.create(),q.update(),a.reposition()},"^content.title.text|style.(classes|widget)$":function(){t.tip&&t.tip.length&&q.update()}},d.extend(q,{init:function(){var a=H()&&(B||d.browser.msie);return a&&(q.create(),q.update(),v.unbind(A).bind("tooltipmove"+A,G)),a},create:function(){var a=x.width,b=x.height,c;t.tip&&t.tip.remove(),t.tip=d("<div />",{"class":"qtip-tip"}).css({width:a,height:b}).prependTo(v),B?d("<canvas />").appendTo(t.tip)[0].getContext("2d").save():(c=N("shape",'coordorigin="0,0"',"position:absolute;"),t.tip.html(c+c),d("*",t.tip).bind("click mousedown",function(a){a.stopPropagation()}))},update:function(a,b){var c=t.tip,j=c.children(),k=x.width,s=x.height,A=r.mimic,C=Math.round,D,G,H,J,O;a||(a=w.corner||q.corner),A===f?A=a:(A=new u.Corner(A),A.precedance=a.precedance,A.x==="inherit"?A.x=a.x:A.y==="inherit"?A.y=a.y:A.x===A.y&&(A[a.precedance]=a[a.precedance])),D=A.precedance,a.precedance===h?E():F(),t.tip.css({width:k=x.width,height:s=x.height}),K(a),y.border!=="transparent"?(z=I(a,g),r.border===0&&z>0&&(y.fill=y.border),q.border=z=r.border!==e?r.border:z):q.border=z=0,H=L(A,k,s),q.size=O=M(a),c.css(O).css("line-height",O.height+"px"),a.precedance===i?J=[C(A.x===m?z:A.x===o?O.width-k-z:(O.width-k)/2),C(A.y===l?O.height-s:0)]:J=[C(A.x===m?O.width-k:0),C(A.y===l?z:A.y===n?O.height-s-z:(O.height-s)/2)],B?(j.attr(O),G=j[0].getContext("2d"),G.restore(),G.save(),G.clearRect(0,0,3e3,3e3),G.fillStyle=y.fill,G.strokeStyle=y.border,G.lineWidth=z*2,G.lineJoin="miter",G.miterLimit=100,G.translate(J[0],J[1]),G.beginPath(),G.moveTo(H[0][0],H[0][1]),G.lineTo(H[1][0],H[1][1]),G.lineTo(H[2][0],H[2][1]),G.closePath(),z&&(v.css("background-clip")==="border-box"&&(G.strokeStyle=y.fill,G.stroke()),G.strokeStyle=y.border,G.stroke()),G.fill()):(H="m"+H[0][0]+","+H[0][1]+" l"+H[1][0]+","+H[1][1]+" "+H[2][0]+","+H[2][1]+" xe",J[2]=z&&/^(r|b)/i.test(a.string())?parseFloat(d.browser.version,10)===8?2:1:0,j.css({coordsize:k+z+" "+(s+z),antialias:""+(A.string().indexOf(p)>-1),left:J[0],top:J[1],width:k+z,height:s+z}).each(function(a){var b=d(this);b[b.prop?"prop":"attr"]({coordsize:k+z+" "+(s+z),path:H,fillcolor:y.fill,filled:!!a,stroked:!a}).toggle(!!z||!!a),!a&&b.html()===""&&b.html(N("stroke",'weight="'+z*2+'px" color="'+y.border+'" miterlimit="1000" joinstyle="miter"'))})),b!==f&&q.position(a)},position:function(a){var b=t.tip,c={},e=Math.max(0,r.offset),g,n,o;return r.corner===f||!b?f:(a=a||q.corner,g=a.precedance,n=M(a),o=[a.x,a.y],g===h&&o.reverse(),d.each(o,function(b,d){var f,h,o;d===p?(f=g===i?m:l,c[f]="50%",c["margin-"+f]=-Math.round(n[g===i?j:k]/2)+e):(f=I(a,d),h=I(a,d,t.content),o=J(a),c[d]=b?h:e+(o>f?o:-f))}),c[a[g]]-=n[g===h?j:k],b.css({top:"",bottom:"",left:"",right:"",margin:""}).css(c),c)},destroy:function(){t.tip&&t.tip.remove(),t.tip=!1,v.unbind(A)}}),q.init()}function N(c){function s(){q=d(p,j).not("[disabled]").map(function(){return typeof this.focus=="function"?this:null})}function t(a){q.length<1&&a.length?a.not("body").blur():q.first().focus()}function v(a){var b=d(a.target),c=b.closest(".qtip"),e;e=c.length<1?f:parseInt(c[0].style.zIndex,10)>parseInt(j[0].style.zIndex,10),!e&&d(a.target).closest(z)[0]!==j[0]&&t(b)}var g=this,h=c.options.show.modal,i=c.elements,j=i.tooltip,k="#qtip-overlay",l=".qtipmodal",m=l+c.id,n="is-modal-qtip",o=d(b.body),p=u.modal.focusable.join(","),q={},r;c.checks.modal={"^show.modal.(on|blur)$":function(){g.init(),i.overlay.toggle(j.is(":visible"))},"^content.text$":function(){s()}},d.extend(g,{init:function(){return h.on?(r=g.create(),j.attr(n,e).css("z-index",u.modal.zindex+d(z+"["+n+"]").length).unbind(l).unbind(m).bind("tooltipshow"+l+" tooltiphide"+l,function(a,b,c){var e=a.originalEvent;if(a.target===j[0])if(e&&a.type==="tooltiphide"&&/mouse(leave|enter)/.test(e.type)&&d(e.relatedTarget).closest(r[0]).length)try{a.preventDefault()}catch(f){}else(!e||e&&!e.solo)&&g[a.type.replace("tooltip","")](a,c)}).bind("tooltipfocus"+l,function(a){if(a.isDefaultPrevented()||a.target!==j[0])return;var b=d(z).filter("["+n+"]"),c=u.modal.zindex+b.length,e=parseInt(j[0].style.zIndex,10);r[0].style.zIndex=c-2,b.each(function(){this.style.zIndex>e&&(this.style.zIndex-=1)}),b.end().filter("."+B).qtip("blur",a.originalEvent),j.addClass(B)[0].style.zIndex=c;try{a.preventDefault()}catch(f){}}).bind("tooltiphide"+l,function(a){a.target===j[0]&&d("["+n+"]").filter(":visible").not(j).last().qtip("focus",a)}),h.escape&&d(b).unbind(m).bind("keydown"+m,function(a){a.keyCode===27&&j.hasClass(B)&&c.hide(a)}),h.blur&&i.overlay.unbind(m).bind("click"+m,function(a){j.hasClass(B)&&c.hide(a)}),s(),g):g},create:function(){function e(){r.css({height:c.height(),width:c.width()})}var b=d(k),c=d(a);return b.length?i.overlay=b.insertAfter(d(z).last()):(r=i.overlay=d("<div />",{id:k.substr(1),html:"<div></div>",mousedown:function(){return f}}).hide().insertAfter(d(z).last()),c.unbind(l).bind("resize"+l,e),e(),r)},toggle:function(a,b,c){if(a&&a.isDefaultPrevented())return g;var i=h.effect,k=b?"show":"hide",l=r.is(":visible"),p=d("["+n+"]").filter(":visible").not(j),q;return r||(r=g.create()),r.is(":animated")&&l===b&&r.data("toggleState")!==f||!b&&p.length?g:(b?(r.css({left:0,top:0}),r.toggleClass("blurs",h.blur),h.stealfocus!==f&&(o.bind("focusin"+m,v),t(d("body :focus")))):o.unbind("focusin"+m),r.stop(e,f).data("toggleState",b),d.isFunction(i)?i.call(r,b):i===f?r[k]():r.fadeTo(parseInt(c,10)||90,b?1:0,function(){b||d(this).hide()}),b||r.queue(function(a){r.css({left:"",top:""}).removeData("toggleState"),a()}),g)},show:function(a,b){return g.toggle(a,e,b)},hide:function(a,b){return g.toggle(a,f,b)},destroy:function(){var a=r;return a&&(a=d("["+n+"]").not(j).length<1,a?(i.overlay.remove(),d(b).unbind(l)):i.overlay.unbind(l+c.id),o.unbind("focusin"+m)),j.removeAttr(n).unbind(l)}}),g.init()}function O(c){var g=this,h=c.elements,i=c.options,l=h.tooltip,m=".ie6-"+c.id,n=d("select, object").length<1,o=0,p=f,q;c.checks.ie6={"^content|style$":function(a,b,c){redraw()}},d.extend(g,{init:function(){var c=d(a),f;n&&(h.bgiframe=d('<iframe class="qtip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';"  style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>'),h.bgiframe.appendTo(l),l.bind("tooltipmove"+m,g.adjustBGIFrame)),q=d("<div/>",{id:"qtip-rcontainer"}).appendTo(b.body),g.redraw(),h.overlay&&!p&&(f=function(){h.overlay[0].style.top=c.scrollTop()+"px"},c.bind("scroll.qtip-ie6, resize.qtip-ie6",f),f(),h.overlay.addClass("qtipmodal-ie6fix"),p=e)},adjustBGIFrame:function(){var a=c.get("dimensions"),b=c.plugins.tip,d=h.tip,e,f;f=parseInt(l.css("border-left-width"),10)||0,f={left:-f,top:-f},b&&d&&(e=b.corner.precedance==="x"?["width","left"]:["height","top"],f[e[1]]-=d[e[0]]()),h.bgiframe.css(f).css(a)},redraw:function(){if(c.rendered<1||o)return g;var a=i.style,b=i.position.container,d,e,f,h;return o=1,a.height&&l.css(k,a.height),a.width?l.css(j,a.width):(l.css(j,"").appendTo(q),e=l.width(),e%2<1&&(e+=1),f=l.css("max-width")||"",h=l.css("min-width")||"",d=(f+h).indexOf("%")>-1?b.width()/100:0,f=(f.indexOf("%")>-1?d:1)*parseInt(f,10)||e,h=(h.indexOf("%")>-1?d:1)*parseInt(h,10)||0,e=f+h?Math.min(Math.max(e,h),f):e,l.css(j,Math.round(e)).appendTo(b)),o=0,g},destroy:function(){n&&h.bgiframe.remove(),l.unbind(m)}}),g.init()}var e=!0,f=!1,g=null,h="x",i="y",j="width",k="height",l="top",m="left",n="bottom",o="right",p="center",q="flip",r="flipinvert",s="shift",t,u,v,w="qtip",x={},y=["ui-widget","ui-tooltip"],z="div.qtip."+w,A=w+"-default",B=w+"-focus",C=w+"-hover",D="_replacedByqTip",E="oldtitle",F;t=d.fn.qtip=function(a,b,h){var i=(""+a).toLowerCase(),j=g,k=d.makeArray(arguments).slice(1),l=k[k.length-1],m=this[0]?d.data(this[0],"qtip"):g;if(!arguments.length&&m||i==="api")return m;if("string"==typeof a)return this.each(function(){var a=d.data(this,"qtip");if(!a)return e;l&&l.timeStamp&&(a.cache.event=l);if(i!=="option"&&i!=="options"||!b)a[i]&&a[i].apply(a[i],k);else if(d.isPlainObject(b)||h!==c)a.set(b,h);else return j=a.get(b),f}),j!==g?j:this;if("object"==typeof a||!arguments.length)return m=H(d.extend(e,{},a)),t.bind.call(this,m,l)},t.bind=function(a,b){return this.each(function(g){function n(a){function b(){l.render(typeof a=="object"||h.show.ready),i.show.add(i.hide).unbind(k)}if(l.cache.disabled)return f;l.cache.event=d.extend({},a),l.cache.target=a?d(a.target):[c],h.show.delay>0?(clearTimeout(l.timers.show),l.timers.show=setTimeout(b,h.show.delay),j.show!==j.hide&&i.hide.bind(j.hide,function(){clearTimeout(l.timers.show)})):b()}var h,i,j,k,l,m;m=d.isArray(a.id)?a.id[g]:a.id,m=!m||m===f||m.length<1||x[m]?t.nextid++:x[m]=m,k=".qtip-"+m+"-create",l=J.call(this,m,a);if(l===f)return e;h=l.options,d.each(u,function(){this.initialize==="initialize"&&this(l)}),i={show:h.show.target,hide:h.hide.target},j={show:d.trim(""+h.show.event).replace(/ /g,k+" ")+k,hide:d.trim(""+h.hide.event).replace(/ /g,k+" ")+k},/mouse(over|enter)/i.test(j.show)&&!/mouse(out|leave)/i.test(j.hide)&&(j.hide+=" mouseleave"+k),i.show.bind("mousemove"+k,function(a){G(a),l.cache.onTarget=e}),i.show.bind(j.show,n),(h.show.ready||h.prerender)&&n(b)}).attr("data-hasqtip",e)},u=t.plugins={Corner:function(a){a=(""+a).replace(/([A-Z])/," $1").replace(/middle/gi,p).toLowerCase(),this.x=(a.match(/left|right/i)||a.match(/center/)||["inherit"])[0].toLowerCase(),this.y=(a.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var b=a.charAt(0);this.precedance=b==="t"||b==="b"?i:h,this.string=function(){return this.precedance===i?this.y+this.x:this.x+this.y},this.abbrev=function(){var a=this.x.substr(0,1),b=this.y.substr(0,1);return a===b?a:this.precedance===i?b+a:a+b},this.invertx=function(a){this.x=this.x===m?o:this.x===o?m:a||this.x},this.inverty=function(a){this.y=this.y===l?n:this.y===n?l:a||this.y},this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone,invertx:this.invertx,inverty:this.inverty}}},offset:function(a,c){function l(a,b){e.left+=b*a.scrollLeft(),e.top+=b*a.scrollTop()}var e=a.offset(),f=a.closest("body"),g=d.browser.msie&&b.compatMode!=="CSS1Compat",h=c,i,j,k;if(h){do h.css("position")!=="static"&&(j=h.position(),e.left-=j.left+(parseInt(h.css("borderLeftWidth"),10)||0)+(parseInt(h.css("marginLeft"),10)||0),e.top-=j.top+(parseInt(h.css("borderTopWidth"),10)||0)+(parseInt(h.css("marginTop"),10)||0),!i&&(k=h.css("overflow"))!=="hidden"&&k!=="visible"&&(i=h));while((h=d(h[0].offsetParent)).length);(i&&i[0]!==f[0]||g)&&l(i||f,1)}return e},iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_",".").replace("_",""))||f,fn:{attr:function(a,b){if(this.length){var c=this[0],e="title",f=d.data(c,"qtip");if(a===e&&f&&"object"==typeof f&&f.options.suppress)return arguments.length<2?d.attr(c,E):(f&&f.options.content.attr===e&&f.cache.attr&&f.set("content.text",b),this.attr(E,b))}return d.fn["attr"+D].apply(this,arguments)},clone:function(a){var b=d([]),c="title",e=d.fn["clone"+D].apply(this,arguments);return a||e.filter("["+E+"]").attr("title",function(){return d.attr(this,E)}).removeAttr(E),e}}},d.each(u.fn,function(a,b){if(!b||d.fn[a+D])return e;var c=d.fn[a+D]=d.fn[a];d.fn[a]=function(){return b.apply(this,arguments)||c.apply(this,arguments)}}),d.ui||(d["cleanData"+D]=d.cleanData,d.cleanData=function(a){for(var b=0,e;(e=a[b])!==c;b++)try{d(e).triggerHandler("removeqtip")}catch(f){}d["cleanData"+D](a)}),t.version="",t.nextid=0,t.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),t.zindex=15e3,t.defaults={prerender:f,id:f,overwrite:e,suppress:e,content:{text:e,attr:"title",deferred:f,title:{text:f,button:f}},position:{my:"top left",at:"bottom right",target:f,container:f,viewport:f,adjust:{x:0,y:0,mouse:e,resize:e,method:"flipinvert flipinvert"},effect:function(a,b,c){d(this).animate(b,{duration:200,queue:f})}},show:{target:f,event:"mouseenter",effect:e,delay:90,solo:f,ready:f,autofocus:f},hide:{target:f,event:"mouseleave",effect:e,delay:0,fixed:f,inactive:f,leave:"window",distance:f},style:{classes:"",widget:f,width:f,height:f,def:e},events:{render:g,move:g,show:g,hide:g,toggle:g,visible:g,hidden:g,focus:g,blur:g}},u.svg=function(a,c,e,f){var g=d(b),h=c[0],i={width:0,height:0,position:{top:1e10,left:1e10}},j,k,l,m,n;while(!h.getBBox)h=h.parentNode;if(h.getBBox&&h.parentNode){j=h.getBBox(),k=h.getScreenCTM(),l=h.farthestViewportElement||h;if(!l.createSVGPoint)return i;m=l.createSVGPoint(),m.x=j.x,m.y=j.y,n=m.matrixTransform(k),i.position.left=n.x,i.position.top=n.y,m.x+=j.width,m.y+=j.height,n=m.matrixTransform(k),i.width=n.x-i.position.left,i.height=n.y-i.position.top,i.position.left+=g.scrollLeft(),i.position.top+=g.scrollTop()}return i},u.ajax=function(a){var b=a.plugins.ajax;return"object"==typeof b?b:a.plugins.ajax=new K(a)},u.ajax.initialize="render",u.ajax.sanitize=function(a){var b=a.content,c;b&&"ajax"in b&&(c=b.ajax,typeof c!="object"&&(c=a.content.ajax={url:c}),"boolean"!=typeof c.once&&c.once&&(c.once=!!c.once))},d.extend(e,t.defaults,{content:{ajax:{loading:e,once:e}}}),u.tip=function(a){var b=a.plugins.tip;return"object"==typeof b?b:a.plugins.tip=new M(a)},u.tip.initialize="render",u.tip.sanitize=function(a){var b=a.style,c;b&&"tip"in b&&(c=a.style.tip,typeof c!="object"&&(a.style.tip={corner:c}),/string|boolean/i.test(typeof c.corner)||(c.corner=e),typeof c.width!="number"&&delete c.width,typeof c.height!="number"&&delete c.height,typeof c.border!="number"&&c.border!==e&&delete c.border,typeof c.offset!="number"&&delete c.offset)},d.extend(e,t.defaults,{style:{tip:{corner:e,mimic:f,width:6,height:6,border:e,offset:0}}}),u.modal=function(a){var b=a.plugins.modal;return"object"==typeof b?b:a.plugins.modal=new N(a)},u.modal.initialize="render",u.modal.sanitize=function(a){a.show&&(typeof a.show.modal!="object"?a.show.modal={on:!!a.show.modal}:typeof a.show.modal.on=="undefined"&&(a.show.modal.on=e))},u.modal.zindex=t.zindex-200,u.modal.focusable=["a[href]","area[href]","input","select","textarea","button","iframe","object","embed","[tabindex]","[contenteditable]"],d.extend(e,t.defaults,{show:{modal:{on:f,effect:e,blur:e,stealfocus:e,escape:e}}}),u.viewport=function(c,d,e,f,g,q,t){function L(a,b,c,e,f,g,h,i,j){var k=d[f],l=x[a],m=y[a],n=c===s,o=-E.offset[f]+D.offset[f]+D["scroll"+f],q=l===f?j:l===g?-j:-j/2,t=m===f?i:m===g?-i:-i/2,u=G&&G.size?G.size[h]||0:0,v=G&&G.corner&&G.corner.precedance===a&&!n?u:0,w=o-k+v,z=k+j-D[h]-o+v,A=q-(x.precedance===a||l===x[b]?t:0)-(m===p?i/2:0);return n?(v=G&&G.corner&&G.corner.precedance===b?u:0,A=(l===f?1:-1)*q-v,d[f]+=w>0?w:z>0?-z:0,d[f]=Math.max(-E.offset[f]+D.offset[f]+(v&&G.corner[a]===p?G.offset:0),k-A,Math.min(Math.max(-E.offset[f]+D.offset[f]+D[h],k+A),d[f]))):(e*=c===r?2:0,w>0&&(l!==f||z>0)?(d[f]-=A+e,J["invert"+a](f)):z>0&&(l!==g||w>0)&&(d[f]-=(l===p?-A:A)+e,J["invert"+a](g)),d[f]<o&&-d[f]>z&&(d[f]=k,J=x.clone())),d[f]-k}var u=e.target,v=c.elements.tooltip,x=e.my,y=e.at,z=e.adjust,A=z.method.split(" "),B=A[0],C=A[1]||A[0],D=e.viewport,E=e.container,F=c.cache,G=c.plugins.tip,H={left:0,top:0},I,J,K;if(!D.jquery||u[0]===a||u[0]===b.body||z.method==="none")return H;I=v.css("position")==="fixed",D={elem:D,height:D[(D[0]===a?"h":"outerH")+"eight"](),width:D[(D[0]===a?"w":"outerW")+"idth"](),scrollleft:I?0:D.scrollLeft(),scrolltop:I?0:D.scrollTop(),offset:D.offset()||{left:0,top:0}},E={elem:E,scrollLeft:E.scrollLeft(),scrollTop:E.scrollTop(),offset:E.offset()||{left:0,top:0}};if(B!=="shift"||C!=="shift")J=x.clone();return H={left:B!=="none"?L(h,i,B,z.x,m,o,j,f,q):0,top:C!=="none"?L(i,h,C,z.y,l,n,k,g,t):0},J&&F.lastClass!==(K=w+"-pos-"+J.abbrev())&&v.removeClass(c.cache.lastClass).addClass(c.cache.lastClass=K),H},u.imagemap=function(a,b,c,e){function v(a,b,c){var d=0,e=1,f=1,g=0,h=0,i=a.width,j=a.height;while(i>0&&j>0&&e>0&&f>0){i=Math.floor(i/2),j=Math.floor(j/2),c.x===m?e=i:c.x===o?e=a.width-i:e+=Math.floor(i/2),c.y===l?f=j:c.y===n?f=a.height-j:f+=Math.floor(j/2),d=b.length;while(d--){if(b.length<2)break;g=b[d][0]-a.position.left,h=b[d][1]-a.position.top,(c.x===m&&g>=e||c.x===o&&g<=e||c.x===p&&(g<e||g>a.width-e)||c.y===l&&h>=f||c.y===n&&h<=f||c.y===p&&(h<f||h>a.height-f))&&b.splice(d,1)}}return{left:b[0][0],top:b[0][1]}}b.jquery||(b=d(b));var f=a.cache.areas={},g=(b[0].shape||b.attr("shape")).toLowerCase(),h=b[0].coords||b.attr("coords"),i=h.split(","),j=[],k=d('img[usemap="#'+b.parent("map").attr("name")+'"]'),q=k.offset(),r={width:0,height:0,position:{top:1e10,right:0,bottom:0,left:1e10}},s=0,t=0,u;q.left+=Math.ceil((k.outerWidth()-k.width())/2),q.top+=Math.ceil((k.outerHeight()-k.height())/2);if(g==="poly"){s=i.length;while(s--)t=[parseInt(i[--s],10),parseInt(i[s+1],10)],t[0]>r.position.right&&(r.position.right=t[0]),t[0]<r.position.left&&(r.position.left=t[0]),t[1]>r.position.bottom&&(r.position.bottom=t[1]),t[1]<r.position.top&&(r.position.top=t[1]),j.push(t)}else{s=-1;while(s++<i.length)j.push(parseInt(i[s],10))}switch(g){case"rect":r={width:Math.abs(j[2]-j[0]),height:Math.abs(j[3]-j[1]),position:{left:Math.min(j[0],j[2]),top:Math.min(j[1],j[3])}};break;case"circle":r={width:j[2]+2,height:j[2]+2,position:{left:j[0],top:j[1]}};break;case"poly":r.width=Math.abs(r.position.right-r.position.left),r.height=Math.abs(r.position.bottom-r.position.top),c.abbrev()==="c"?r.position={left:r.position.left+r.width/2,top:r.position.top+r.height/2}:(f[c+h]||(r.position=v(r,j.slice(),c),e&&(e[0]==="flip"||e[1]==="flip")&&(r.offset=v(r,j.slice(),{x:c.x===m?o:c.x===o?m:p,y:c.y===l?n:c.y===n?l:p}),r.offset.left-=r.position.left,r.offset.top-=r.position.top),f[c+h]=r),r=f[c+h]),r.width=r.height=0}return r.position.left+=q.left,r.position.top+=q.top,r},u.ie6=function(a){var b=d.browser,c=a.plugins.ie6;return!b.msie||(""+b.version).charAt(0)!=="6"?f:"object"==typeof c?c:a.plugins.ie6=new O(a)},u.ie6.initialize="render"})})(window,document);
/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);
(function(e,t){"use strict";function n(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function s(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function a(e,t,n){s(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function r(e,t,n){n?e.addClass(t):e.removeClass(t)}function l(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),r(e,n.checkedClass,a)}function u(e,t,n){r(e,n.disabledClass,t.is(":disabled"))}function o(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function c(t,s,a){var i,r,l;return a||(a={}),a=e.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),i=e("<div />"),r=e("<span />"),s.autoHide&&t.is(":hidden")&&"none"===t.css("display")&&i.hide(),a.divClass&&i.addClass(a.divClass),s.wrapperClass&&i.addClass(s.wrapperClass),a.spanClass&&r.addClass(a.spanClass),l=n(t,"id"),s.useID&&l&&n(i,"id",s.idPrefix+"-"+l),a.spanHtml&&r.html(a.spanHtml),i=o(t,i,a.divWrap),r=o(t,r,a.spanWrap),u(i,t,s),{div:i,span:r}}function d(t,n){var s;return n.wrapperClass?(s=e("<span />").addClass(n.wrapperClass),s=o(t,s,"wrap")):null}function f(){var t,n,s,a;return a="rgb(120,2,153)",n=e('<div style="width:0;height:0;color:'+a+'">'),e("body").append(n),s=n.get(0),t=window.getComputedStyle?window.getComputedStyle(s,"").color:(s.currentStyle||s.style||{}).color,n.remove(),t.replace(/ /g,"")!==a}function p(t){return t?e("<span />").text(t).html():""}function m(){return navigator.cpuClass&&!navigator.product}function v(){return window.XMLHttpRequest!==void 0?!0:!1}function h(e){var t;return e[0].multiple?!0:(t=n(e,"size"),!t||1>=t?!1:!0)}function C(){return!1}function w(e,t){var n="none";s(e,t,{"selectstart dragstart mousedown":C}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function b(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function y(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function g(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),y(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function k(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var H=!0,x=!1,A=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(e,t){var r,l,o,d,f;return l=t.submitDefaultHtml,e.is(":reset")&&(l=t.resetDefaultHtml),d=e.is("a, button")?function(){return e.html()||l}:function(){return p(n(e,"value"))||l},o=c(e,t,{divClass:t.buttonClass,spanHtml:d()}),r=o.div,a(e,r,t),f=!1,s(r,t,{"click touchend":function(){var t,s,a,i;f||e.is(":disabled")||(f=!0,e[0].dispatchEvent?(t=document.createEvent("MouseEvents"),t.initEvent("click",!0,!0),s=e[0].dispatchEvent(t),e.is("a")&&s&&(a=n(e,"target"),i=n(e,"href"),a&&"_self"!==a?window.open(i,a):document.location.href=i)):e.click(),f=!1)}}),w(r,t),{remove:function(){return r.after(e),r.remove(),e.unbind(t.eventNamespace),e},update:function(){i(r,t),u(r,e,t),e.detach(),o.span.html(d()).append(e)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,r,o;return n=c(e,t,{divClass:t.checkboxClass}),r=n.div,o=n.span,a(e,r,t),s(e,t,{"click touchend":function(){l(o,e,t)}}),l(o,e,t),{remove:k(e,t),update:function(){i(r,t),o.removeClass(t.checkedClass),l(o,e,t),u(r,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(t,r){function l(){b(t,p,r)}var d,f,p,v;return d=c(t,r,{divClass:r.fileClass,spanClass:r.fileButtonClass,spanHtml:r.fileButtonHtml,spanWrap:"after"}),f=d.div,v=d.span,p=e("<span />").html(r.fileDefaultHtml),p.addClass(r.filenameClass),p=o(t,p,"after"),n(t,"size")||n(t,"size",f.width()/10),a(t,f,r),l(),m()?s(t,r,{click:function(){t.trigger("change"),setTimeout(l,0)}}):s(t,r,{change:l}),w(p,r),w(v,r),{remove:function(){return p.remove(),v.remove(),t.unwrap().unbind(r.eventNamespace)},update:function(){i(f,r),b(t,p,r),u(f,t,r)}}}},{match:function(e){if(e.is("input")){var t=(" "+n(e,"type")+" ").toLowerCase(),s=" color date datetime datetime-local email month number password search tel text time url week ";return s.indexOf(t)>=0}return!1},apply:function(e,t){var s,i;return s=n(e,"type"),e.addClass(t.inputClass),i=d(e,t),a(e,e,t),t.inputAddTypeAsClass&&e.addClass(s),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(s),i&&e.unwrap()},update:C}}},{match:function(e){return e.is(":radio")},apply:function(t,r){var o,d,f;return o=c(t,r,{divClass:r.radioClass}),d=o.div,f=o.span,a(t,d,r),s(t,r,{"click touchend":function(){e.uniform.update(e(':radio[name="'+n(t,"name")+'"]'))}}),l(f,t,r),{remove:k(t,r),update:function(){i(d,r),l(f,t,r),u(d,t,r)}}}},{match:function(e){return e.is("select")&&!h(e)?!0:!1},apply:function(t,n){var r,l,o,d;return n.selectAutoWidth&&g(t,function(){d=t.width()}),r=c(t,n,{divClass:n.selectClass,spanHtml:(t.find(":selected:first")||t.find("option:first")).html(),spanWrap:"before"}),l=r.div,o=r.span,n.selectAutoWidth?g(t,function(){y(e([o[0],l[0]]),{display:"block"},function(){var e;e=o.outerWidth()-o.width(),l.width(d+e),o.width(d)})}):l.addClass("fixedWidth"),a(t,l,n),s(t,n,{change:function(){o.html(t.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var e=t.find(":selected").html();o.html()!==e&&t.trigger("change")},keyup:function(){o.html(t.find(":selected").html())}}),w(o,n),{remove:function(){return o.remove(),t.unwrap().unbind(n.eventNamespace),t},update:function(){n.selectAutoWidth?(e.uniform.restore(t),t.uniform(n)):(i(l,n),o.html(t.find(":selected").html()),u(l,t,n))}}}},{match:function(e){return e.is("select")&&h(e)?!0:!1},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:C}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:C}}}];m()&&!v()&&(H=!1),e.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},e.fn.uniform=function(t){var n=this;return t=e.extend({},e.uniform.defaults,t),x||(x=!0,f()&&(H=!1)),H?(t.resetSelector&&e(t.resetSelector).mouseup(function(){window.setTimeout(function(){e.uniform.update(n)},10)}),this.each(function(){var n,s,a,i=e(this);if(i.data("uniformed"))return e.uniform.update(i),void 0;for(n=0;A.length>n;n+=1)if(s=A[n],s.match(i,t))return a=s.apply(i,t),i.data("uniformed",a),e.uniform.elements.push(i.get(0)),void 0})):this},e.uniform.restore=e.fn.uniform.restore=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n,s=e(this);n=s.data("uniformed"),n&&(n.remove(),t=e.inArray(this,e.uniform.elements),t>=0&&e.uniform.elements.splice(t,1),s.removeData("uniformed"))})},e.uniform.update=e.fn.uniform.update=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n=e(this);t=n.data("uniformed"),t&&t.update(n,t.options)})}})(jQuery);
// make console.log safe to use
window.console||(console={log:function(){}});

//------------- Options for Supr - admin tempalte -------------//
var supr_Options = {
	fixedWidth: false, //activate fixed version with true
	rtl:false, //activate rtl version with true
	showSwitcher: false //show switcher with true
}

//------------- Modernizr -------------//
//load some plugins only if is needed
Modernizr.load({
  test: Modernizr.placeholder,
  nope: 'plugins/forms/placeholder/jquery.placeholder.min.js',
  complete: function () {
	//------------- placeholder fallback  -------------//
	$('input[placeholder], textarea[placeholder]').placeholder();
  }
});
Modernizr.load({
  test: Modernizr.touch,
  yep: ['plugins/fix/ios-fix/ios-orientationchange-fix.js', 'plugins/fix/touch-punch/jquery.ui.touch-punch.min.js']
});

//window resize events
$(window).resize(function(){
	//get the window size
	var wsize =  $(window).width();
	if (wsize > 980 ) {
		$('.shortcuts.hided').removeClass('hided').attr("style","");
		$('.sidenav.hided').removeClass('hided').attr("style","");
	}

	var size ="Window size is:" + $(window).width();
	//console.log(size);
});

$(window).load(function(){
	var wheight = $(window).height();
	$('#sidebar.scrolled').css('height', wheight-63+'px');
});

// document ready function
$(document).ready(function(){ 	

	//------------- Switcher code ( Remove it in production site ) -------------//
	(function(){
		supr_switcher = {
			create : function () {
				//create switcher and inject into html
				$('body').append('<a href="#" id="switchBtn"><span class="icon24 icomoon-icon-cogs"></span></a>');
				$('body').append('<div id="switcher"><h4>Header patterns</h4><div class="header-patterns"><ul><li><a href="#" class="hpat1"><img src="images/patterns/header/1.png"></a></li><li><a href="#" class="hpat2"><img src="images/patterns/header/2.png"></a></li><li><a href="#" class="hpat3"><img src="images/patterns/header/3.png"></a></li><li><a href="#" class="hpat4"><img src="images/patterns/header/4.png"></a></li></ul></div><h4>Sidebar patterns</h4><div class="sidebar-patterns"><ul><li><a href="#" class="spat1"><img src="images/patterns/sidebar/1.png"></a></li><li><a href="#" class="spat2"><img src="images/patterns/sidebar/2.png"></a></li><li><a href="#" class="spat3"><img src="images/patterns/sidebar/3.png"></a></li><li><a href="#" class="spat4"><img src="images/patterns/sidebar/4.png"></a></li></ul></div><h4>Body patterns</h4><div class="body-patterns"><ul><li><a href="#" class="bpat1"><img src="images/patterns/body/1.png"></a></li><li><a href="#" class="bpat2"><img src="images/patterns/body/2.png"></a></li><li><a href="#" class="bpat3"><img src="images/patterns/body/3.png"></a></li><li><a href="#" class="bpat4"><img src="images/patterns/body/4.png"></a></li></ul></div></div>');
			},
			init: function() {
				supr_switcher.create();
				$('#switcher a').click(function() {
					if($(this).hasClass('hpat1')) {$('#header').css('background', 'url(images/patterns/header/bedge_grunge.png)');}
					if($(this).hasClass('hpat2')) {$('#header').css('background', 'url(images/patterns/header/grid.png)');}
					if($(this).hasClass('hpat3')) {$('#header').css('background', 'url(images/patterns/header/nasty_fabric.png)');}
					if($(this).hasClass('hpat4')) {$('#header').css('background', 'url(images/patterns/header/natural_paper.png)');}
					if($(this).hasClass('spat1')) {$('#sidebarbg').css('background', 'url(images/patterns/sidebar/az_subtle.png)');}
					if($(this).hasClass('spat2')) {$('#sidebarbg').css('background', 'url(images/patterns/sidebar/billie_holiday.png)');}
					if($(this).hasClass('spat3')) {$('#sidebarbg').css('background', 'url(images/patterns/sidebar/grey.png)');}
					if($(this).hasClass('spat4')) {$('#sidebarbg').css('background', 'url(images/patterns/sidebar/noise_lines.png)');}
					if($(this).hasClass('bpat1')) {$('#content').css('background', 'url(images/patterns/body/cream_dust.png)');}
					if($(this).hasClass('bpat2')) {$('#content').css('background', 'url(images/patterns/body/dust.png)');}
					if($(this).hasClass('bpat3')) {$('#content').css('background', 'url(images/patterns/body/grey.png)');}
					if($(this).hasClass('bpat4')) {$('#content').css('background', 'url(images/patterns/body/subtle_dots.png)');}					
				});

				$('#switchBtn').click(function() {
					if($(this).hasClass('toggle')) {
						//hide switcher
						$(this).removeClass('toggle').css('right', '-1px');
						$('#switcher').css('display', 'none');

					} else {
						//expand switcher
						$(this).animate({
						    right: '135'
						  }, 200, function() {
						    // Animation complete.
						    $('#switcher').css('display', 'block');
						    $(this).addClass('toggle');
						  });
					}
				});
			}
		}
	})();

	//show switcher
	if(supr_Options.showSwitcher) {
		supr_switcher.init();
	}

	//make template fixed width
	if(supr_Options.fixedWidth) {
		$('body').addClass('fixedWidth');
		$('#header .container-fluid').addClass('container').removeClass('container-fluid');
		$('#wrapper').addClass('container');
	}

	//rtl version
	if(supr_Options.rtl) {
		localStorage.setItem('rtl', 1);
		$('#bootstrap').attr('href', 'css/bootstrap/bootstrap.rtl.min.css');
		$('#bootstrap-responsive').attr('href', 'css/bootstrap/bootstrap-responsive.rtl.min.css');
		$('body').addClass('rtl');
		if(!$('#content-two').length){
			$('#sidebar').attr('id', 'sidebar-right');
			$('#sidebarbg').attr('id', 'sidebarbg-right');
			$('.collapseBtn').addClass('rightbar').removeClass('leftbar');
			$('#content').attr('id', 'content-one');
		}
	} else {localStorage.setItem('rtl', 0);}
	
  	//Disable certain links
    $('a[href^=#]').click(function (e) {
      e.preventDefault()
    })

    $('.search-btn').addClass('nostyle');//tell uniform to not style this element
 
	//------------- Navigation -------------//

	mainNav = $('.mainnav>ul>li');
	mainNav.find('ul').siblings().addClass('hasUl').append('<span class="hasDrop icon16 icomoon-icon-arrow-down-2"></span>');
	mainNavLink = mainNav.find('a').not('.sub a');
	mainNavLinkAll = mainNav.find('a');
	mainNavSubLink = mainNav.find('.sub a').not('.sub li .sub a');
	mainNavCurrent = mainNav.find('a.current');

	/*Auto current system in main navigation */
	var domain = document.domain;
	var folder ='/supr';//if you put site in folder not in main domain you need to specify it. example http://www.host.com/folder/site
	var absoluteUrl = 0; //put value of 1 if use absolute path links. example http://www.host.com/dashboard instead of /dashboard

	function setCurrentClass(mainNavLinkAll, url) {
		mainNavLinkAll.each(function(index) {
			//convert href to array and get last element
			var href= $(this).attr('href');

			if(href == url) {
				//set new current class
				$(this).addClass('current');

				ulElem = $(this).closest('ul');
				if(ulElem.hasClass('sub')) {
					//its a part of sub menu need to expand this menu
					aElem = ulElem.prev('a.hasUl').addClass('drop');
					ulElem.addClass('expand');
				} 
			}
		});
	}


	if(domain === '') {
		//domain not found looks like is in testing phase
		var pageUrl = window.location.pathname.split( '/' );
		console.log(pageUrl);
		var winLoc = pageUrl.pop(); // get last item
		setCurrentClass(mainNavLinkAll, winLoc);

	} else {
		if(absoluteUrl === 0) {
			//absolute url is disabled
			var afterDomain = window.location.pathname;
			if(folder !='') {
				afterDomain = afterDomain.replace(folder + '/','');
			} else {
				afterDomain = afterDomain.replace('/','');
			}
			setCurrentClass(mainNavLinkAll, afterDomain);
		} else {
			//absolute url is enabled
			var newDomain = 'http://' + domain + window.location.pathname;
			setCurrentClass(mainNavLinkAll, newDomain);
		}
	}

	//hover magic add blue color to icons when hover - remove or change the class if not you like.
	mainNavLinkAll.hover(
	  function () {
	    $(this).find('span.icon16').addClass('blue');
	  }, 
	  function () {
	    $(this).find('span.icon16').removeClass('blue');
	  }
	);

	//click magic
	mainNavLink.click(function(event) {
		$this = $(this);
		if($this.hasClass('hasUl')) {
			event.preventDefault();
			if($this.hasClass('drop')) {
				$(this).siblings('ul.sub').slideUp(250).siblings().toggleClass('drop');
			} else {
				$(this).siblings('ul.sub').slideDown(250).siblings().toggleClass('drop');
			}			
		} 
	});
	mainNavSubLink.click(function(event) {
		$this = $(this);
		if($this.hasClass('hasUl')) {
			event.preventDefault();
			if($this.hasClass('drop')) {
				$(this).siblings('ul.sub').slideUp(250).siblings().toggleClass('drop');
			} else {
				$(this).siblings('ul.sub').slideDown(250).siblings().toggleClass('drop');
			}			
		} 
	});

	//responsive buttons
	$('.resBtn>a').click(function(event) {
		$this = $(this);
		if($this.hasClass('drop')) {
			$this.removeClass('drop');
		} else {
			$this.addClass('drop');
		}
		if($('#sidebar').length) {
			$('#sidebar').toggleClass('offCanvas');
			$('#sidebarbg').toggleClass('offCanvas');
			if($('#sidebar-right').length) {
				$('#sidebar-right').toggleClass('offCanvas');
			}
		}
		if($('#sidebar-right').length) {
			$('#sidebar-right').toggleClass('offCanvas');
			$('#sidebarbg-right').toggleClass('offCanvas');
		}
		$('#content').toggleClass('offCanvas');
		if($('#content-one').length) {
			$('#content-one').toggleClass('offCanvas');
		}
	});

	$('.resBtnSearch>a').click(function(event) {
		$this = $(this);
		if($this.hasClass('drop')) {
			$('.search').slideUp(250);
		} else {
			$('.search').slideDown(250);
		}
		$this.toggleClass('drop');
	});
	
	//Hide and show sidebar btn

	$(function () {
		//var pages = ['grid.html','charts.html'];
		var pages = [];
	
		for ( var i = 0, j = pages.length; i < j; i++ ) {

		    if($.cookie("currentPage") == pages[i]) {
				var cBtn = $('.collapseBtn.leftbar');
				cBtn.children('a').attr('title','Show Left Sidebar');
				cBtn.addClass('shadow hide');
				cBtn.css({'top': '20px', 'left':'200px'});
				$('#sidebarbg').css('margin-left','-299'+'px');
				$('#sidebar').css('margin-left','-299'+'px');
				if($('#content').length) {
					$('#content').css('margin-left', '0');
				}
				if($('#content-two').length) {
					$('#content-two').css('margin-left', '0');
				}
		    }

		}
		
	});

	$( '.collapseBtn' ).bind( 'click', function(){
		$this = $(this);

		//left sidbar clicked
		if ($this.hasClass('leftbar')) {
			
			if($(this).hasClass('hide')) {
				//show sidebar
				$this.removeClass('hide');
				$this.children('a').attr('title','Hide Left Sidebar');

			} else {
				//hide sidebar
				$this.addClass('hide');
				$this.children('a').attr('title','Show Left Sidebar');		
			}
			$('#sidebarbg').toggleClass('hided');
			$('#sidebar').toggleClass('hided')
			$('.collapseBtn.leftbar').toggleClass('top shadow');
			//expand content
			
			if($('#content').length) {
				$('#content').toggleClass('hided');
			}
			if($('#content-two').length) {
				$('#content-two').toggleClass('hided');
			}	

		}

		//right sidebar clicked
		if ($this.hasClass('rightbar')) {
			
			if($(this).hasClass('hide')) {
				//show sidebar
				$this.removeClass('hide');
				$this.children('a').attr('title','Hide Right Sidebar');
				
			} else {
				//hide sidebar
				$this.addClass('hide');
				$this.children('a').attr('title','Show Right Sidebar')
			}
			$('#sidebarbg-right').toggleClass('hided');
			$('#sidebar-right').toggleClass('hided');
			if($('#content').length) {
				$('#content').toggleClass('hided-right');
			}
			if($('#content-one').length) {
				$('#content-one').toggleClass('hided');
			}
			if($('#content-two').length) {
				$('#content-two').toggleClass('hided-right');
			}	
			$('.collapseBtn.rightbar').toggleClass('top shadow')
		}
	});


	//------------- widget box magic -------------//

	var widget = $('div.box');
	var widgetOpen = $('div.box').not('div.box.closed');
	var widgetClose = $('div.box.closed');
	//close all widgets with class "closed"
	widgetClose.find('div.content').hide();
	widgetClose.find('.title>.minimize').removeClass('minimize').addClass('maximize');

	widget.find('.title>a').click(function (event) {
		event.preventDefault();
		var $this = $(this);
		if($this .hasClass('minimize')) {
			//minimize content
			$this.removeClass('minimize').addClass('maximize');
			$this.parent('div').addClass('min');
			cont = $this.parent('div').next('div.content')
			cont.slideUp(500, 'easeOutExpo'); //change effect if you want :)
			
		} else  
		if($this .hasClass('maximize')) {
			//minimize content
			$this.removeClass('maximize').addClass('minimize');
			$this.parent('div').removeClass('min');
			cont = $this.parent('div').next('div.content');
			cont.slideDown(500, 'easeInExpo'); //change effect if you want :)
		} 
		
	})

	//show minimize and maximize icons
	widget.hover(function() {
		    $(this).find('.title>a').show(50);	
		}
		, function(){
			$(this).find('.title>a').hide();	
	});

	//add shadow if hover box
	widget.not('.drag').hover(function() {
		    $(this).addClass('hover');	
		}
		, function(){
			$(this).removeClass('hover');	
	});

	//------------- Search forms  submit handler  -------------//
	if($('#tipue_search_input').length) {
		$('#tipue_search_input').tipuesearch({
          'show': 5
	     });
		$('#search-form').submit(function() {
		  return false;
		});

		//make custom redirect for search form in .heading
		$('#searchform').submit(function() {
			var sText = $('.top-search').val();
			var sAction = $(this).attr('action');
			var sUrl = sAction + '?q=' + sText;
			$(location).attr('href',sUrl);
			return false;
		});
	}
	//------------- To top plugin  -------------//
	$().UItoTop({ easingType: 'easeOutQuart' });

	//------------- Tooltips -------------//

	//top tooltip
	$('.tip').qtip({
		content: false,
		position: {
			my: 'bottom center',
			at: 'top center',
			viewport: $(window)
		},
		style: {
			classes: 'qtip-tipsy'
		}
	});

	//tooltip in right
	$('.tipR').qtip({
		content: false,
		position: {
			my: 'left center',
			at: 'right center',
			viewport: $(window)
		},
		style: {
			classes: 'qtip-tipsy'
		}
	});

	//tooltip in bottom
	$('.tipB').qtip({
		content: false,
		position: {
			my: 'top center',
			at: 'bottom center',
			viewport: $(window)
		},
		style: {
			classes: 'qtip-tipsy'
		}
	});

	//tooltip in left
	$('.tipL').qtip({
		content: false,
		position: {
			my: 'right center',
			at: 'left center',
			viewport: $(window)
		},
		style: {
			classes: 'qtip-tipsy'
		}
	});

	//------------- Jrespond -------------//
	var jRes = jRespond([
        {
            label: 'small',
            enter: 0,
            exit: 1000
        },{
            label: 'desktop',
            enter: 1001,
            exit: 10000
        }
    ]);

    jRes.addFunc({
        breakpoint: 'small',
        enter: function() {
           $('#sidebarbg,#sidebar,#content').removeClass('hided');
        },
        exit: function() {
           $('.collapseBtn.top.hide').removeClass('top hide');
        }
    });
	
	//------------- Uniform  -------------//
	//add class .nostyle if not want uniform to style field
	$("input, textarea, select").not('.nostyle').uniform();

	//remove overlay and show page
	$("#qLoverlay").fadeOut(250);
	$("#qLbar").fadeOut(250);

});
// document ready function
$(document).ready(function() { 	

	//------------- Full calendar  -------------//
	$(function () {
		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();
		
		//front page calendar
		$('#calendar').fullCalendar({
			//isRTL: true,
			//theme: true,
			header: {
				left: 'title,today',
				center: 'prev,next',
				right: 'month,agendaWeek,agendaDay'
			},
			buttonText: {
	        	prev: '<span class="icon24 icomoon-icon-arrow-left-2"></span>',
	        	next: '<span class="icon24 icomoon-icon-arrow-right-3"></span>'
	    	},
			editable: true,
			events: [
				{
					title: 'All Day Event',
					start: new Date(y, m, 1)
				},
				{
					title: 'Long Event',
					start: new Date(y, m, d-5),
					end: new Date(y, m, d-2)
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: new Date(y, m, d-3, 16, 0),
					allDay: false
				},
				{
					id: 999,
					title: 'Repeating Event',
					start: new Date(y, m, d+4, 16, 0),
					allDay: false
				},
				{
					title: 'Meeting',
					start: new Date(y, m, d, 10, 30),
					allDay: false
				},
				{
					title: 'Lunch',
					start: new Date(y, m, d, 12, 0),
					end: new Date(y, m, d, 14, 0),
					allDay: false,
					color: '#9FC569'
				},
				{
					title: 'Birthday Party',
					start: new Date(y, m, d+1, 19, 0),
					end: new Date(y, m, d+1, 22, 30),
					allDay: false,
					color: '#ED7A53'
				},
				{
					title: 'Click for Google',
					start: new Date(y, m, 28),
					end: new Date(y, m, 29),
					url: 'http://google.com/'
				}
			]
		});
		if(localStorage.getItem == 1 ) {
			$('#calendar').fullCalendar({isRTL: true});
		}
	});

	//Boostrap modal
	$('#myModal').modal({ show: false});
	
	//add event to modal after closed
	$('#myModal').on('hidden', function () {
	  	console.log('modal is closed');
	})


	//circular progrress bar
	$(function () {

		$(".greenCircle").knob({
            'min':0,
            'max':100,
            'readOnly': true,
            'width': 80,
            'height': 80,
            'fgColor': '#9FC569',
            'dynamicDraw': true,
            'thickness': 0.2,
            'tickColorizeValues': true
        })
        $(".redCircle").knob({
            'min':0,
            'max':100,
            'readOnly': true,
            'width': 80,
            'height': 80,
            'fgColor': '#ED7A53',
            'dynamicDraw': true,
            'thickness': 0.2,
            'tickColorizeValues': true
        })
        $(".blueCircle").knob({
            'min':0,
            'max':100,
            'readOnly': true,
            'width': 80,
            'height': 80,
            'fgColor': '#88BBC8',
            'dynamicDraw': true,
            'thickness': 0.2,
            'tickColorizeValues': true
        })

	});

	var divElement = $('div'); //log all div elements

	//------------- Visitor chart -------------//

	if (divElement.hasClass('visitors-chart')) {
	$(function () {
		//some data
		var d1 = [[1, 3+randNum()], [2, 6+randNum()], [3, 9+randNum()], [4, 12+randNum()],[5, 15+randNum()],[6, 18+randNum()],[7, 21+randNum()],[8, 15+randNum()],[9, 18+randNum()],[10, 21+randNum()],[11, 24+randNum()],[12, 27+randNum()],[13, 30+randNum()],[14, 33+randNum()],[15, 24+randNum()],[16, 27+randNum()],[17, 30+randNum()],[18, 33+randNum()],[19, 36+randNum()],[20, 39+randNum()],[21, 42+randNum()],[22, 45+randNum()],[23, 36+randNum()],[24, 39+randNum()],[25, 42+randNum()],[26, 45+randNum()],[27,38+randNum()],[28, 51+randNum()],[29, 55+randNum()], [30, 60+randNum()]];
		var d2 = [[1, randNum()-5], [2, randNum()-4], [3, randNum()-4], [4, randNum()],[5, 4+randNum()],[6, 4+randNum()],[7, 5+randNum()],[8, 5+randNum()],[9, 6+randNum()],[10, 6+randNum()],[11, 6+randNum()],[12, 2+randNum()],[13, 3+randNum()],[14, 4+randNum()],[15, 4+randNum()],[16, 4+randNum()],[17, 5+randNum()],[18, 5+randNum()],[19, 2+randNum()],[20, 2+randNum()],[21, 3+randNum()],[22, 3+randNum()],[23, 3+randNum()],[24, 2+randNum()],[25, 4+randNum()],[26, 4+randNum()],[27,5+randNum()],[28, 2+randNum()],[29, 2+randNum()], [30, 3+randNum()]];
		//define placeholder class
		var placeholder = $(".visitors-chart");
		//graph options
		var options = {
				grid: {
					show: true,
				    aboveData: true,
				    color: "#3f3f3f" ,
				    labelMargin: 5,
				    axisMargin: 0, 
				    borderWidth: 0,
				    borderColor:null,
				    minBorderMargin: 5 ,
				    clickable: true, 
				    hoverable: true,
				    autoHighlight: true,
				    mouseActiveRadius: 20
				},
		        series: {
		        	grow: {
		        		active: false,
		        		stepMode: "linear",
		        		steps: 50,
		        		stepDelay: true
		        	},
		            lines: {
	            		show: true,
	            		fill: true,
	            		lineWidth: 4,
	            		steps: false
		            	},
		            points: {
		            	show:true,
		            	radius: 5,
		            	symbol: "circle",
		            	fill: true,
		            	borderColor: "#fff"
		            }
		        },
		        legend: { 
		        	position: "ne", 
		        	margin: [0,-25], 
		        	noColumns: 0,
		        	labelBoxBorderColor: null,
		        	labelFormatter: function(label, series) {
					    // just add some space to labes
					    return label+'&nbsp;&nbsp;';
					 }
		    	},
		        yaxis: { min: 0 },
		        xaxis: {ticks:11, tickDecimals: 0},
		        colors: chartColours,
		        shadowSize:1,
		        tooltip: true, //activate tooltip
				tooltipOpts: {
					content: "%s : %y.0",
					shifts: {
						x: -30,
						y: -50
					}
				}
		    };   
	
        	$.plot(placeholder, [ 

        		{
        			label: "Visits", 
        			data: d1,
        			lines: {fillColor: "#f2f7f9"},
        			points: {fillColor: "#88bbc8"}
        		}, 
        		{	
        			label: "Unique Visits", 
        			data: d2,
        			lines: {fillColor: "#fff8f2"},
        			points: {fillColor: "#ed7a53"}
        		} 

        	], options);
	        
    });
    }//end if

    //pie visits graph
	if (divElement.hasClass('pieStats')) {
	$(function () {
	   var data = [
		    { label: "%78.75 New Visitor",  data: 78.75, color: "#88bbc8"},
		    { label: "%21.25 Returning Visitor",  data: 21.25, color: "#ed7a53"}
		];
		
		$.plot($(".pieStats"), data, 
		{
			series: {
				pie: { 
					show: true,
					highlight: {
						opacity: 0.1
					},
					stroke: {
						color: '#fff',
						width: 3
					},
					startAngle: 2,
					label: {
						radius:1
					}
				},
				grow: {	active: false}
			},
			legend: { 
	        	position: "ne", 
	        	labelBoxBorderColor: null
	    	},
			grid: {
	            hoverable: true,
	            clickable: true
	        },
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "%s : %y.1",
				shifts: {
					x: -30,
					y: -50
				}
			}
		});
	});
	}//end if


});//End document ready functions

//generate random number for charts
randNum = function(){
	//return Math.floor(Math.random()*101);
	return (Math.floor( Math.random()* (1+40-20) ) ) + 20;
}

var chartColours = ['#88bbc8', '#ed7a53', '#9FC569', '#bbdce3', '#9a3b1b', '#5a8022', '#2c7282'];

//sparklines (making loop with random data for all 7 sparkline)
i=1;
for (i=1; i<8; i++) {
 	var data = [[1, 3+randNum()], [2, 5+randNum()], [3, 8+randNum()], [4, 11+randNum()],[5, 14+randNum()],[6, 17+randNum()],[7, 20+randNum()], [8, 15+randNum()], [9, 18+randNum()], [10, 22+randNum()]];
 	placeholder = '.sparkLine' + i;
	$(placeholder).sparkline(data, { 
		width: 100,//Width of the chart - Defaults to 'auto' - May be any valid css width - 1.5em, 20px, etc (using a number without a unit specifier won't do what you want) - This option does nothing for bar and tristate chars (see barWidth)
		height: 30,//Height of the chart - Defaults to 'auto' (line height of the containing tag)
		lineColor: '#88bbc8',//Used by line and discrete charts to specify the colour of the line drawn as a CSS values string
		fillColor: '#f2f7f9',//Specify the colour used to fill the area under the graph as a CSS value. Set to false to disable fill
		spotColor: '#467e8c',//The CSS colour of the final value marker. Set to false or an empty string to hide it
		maxSpotColor: '#9FC569',//The CSS colour of the marker displayed for the maximum value. Set to false or an empty string to hide it
		minSpotColor: '#ED7A53',//The CSS colour of the marker displayed for the mimum value. Set to false or an empty string to hide it
		spotRadius: 3,//Radius of all spot markers, In pixels (default: 1.5) - Integer
		lineWidth: 2//In pixels (default: 1) - Integer
	});
}

//sparkline in sidebar area
var positive = [1,5,3,7,8,6,10];
var negative = [10,6,8,7,3,5,1]
var negative1 = [7,6,8,7,6,5,4]

$('#stat1').sparkline(positive,{
	height:15,
	spotRadius: 0,
	barColor: '#9FC569',
	type: 'bar'
});
$('#stat2').sparkline(negative,{
	height:15,
	spotRadius: 0,
	barColor: '#ED7A53',
	type: 'bar'
});
$('#stat3').sparkline(negative1,{
	height:15,
	spotRadius: 0,
	barColor: '#ED7A53',
	type: 'bar'
});
$('#stat4').sparkline(positive,{
	height:15,
	spotRadius: 0,
	barColor: '#9FC569',
	type: 'bar'
});
//sparkline in widget
$('#stat5').sparkline(positive,{
	height:15,
	spotRadius: 0,
	barColor: '#9FC569',
	type: 'bar'
});

$('#stat6').sparkline(positive, { 
	width: 70,//Width of the chart - Defaults to 'auto' - May be any valid css width - 1.5em, 20px, etc (using a number without a unit specifier won't do what you want) - This option does nothing for bar and tristate chars (see barWidth)
	height: 20,//Height of the chart - Defaults to 'auto' (line height of the containing tag)
	lineColor: '#88bbc8',//Used by line and discrete charts to specify the colour of the line drawn as a CSS values string
	fillColor: '#f2f7f9',//Specify the colour used to fill the area under the graph as a CSS value. Set to false to disable fill
	spotColor: '#e72828',//The CSS colour of the final value marker. Set to false or an empty string to hide it
	maxSpotColor: '#005e20',//The CSS colour of the marker displayed for the maximum value. Set to false or an empty string to hide it
	minSpotColor: '#f7941d',//The CSS colour of the marker displayed for the mimum value. Set to false or an empty string to hide it
	spotRadius: 3,//Radius of all spot markers, In pixels (default: 1.5) - Integer
	lineWidth: 2//In pixels (default: 1) - Integer
});