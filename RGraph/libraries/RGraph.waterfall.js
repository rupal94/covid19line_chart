
RGraph=window.RGraph||{isrgraph:true,isRGraph:true,rgraph:true};RGraph.Waterfall=function(conf)
{this.id=conf.id;this.canvas=document.getElementById(this.id);this.context=this.canvas.getContext?this.canvas.getContext("2d"):null;this.canvas.__object__=this;this.type='waterfall';this.max=0;this.data=conf.data;this.isRGraph=true;this.isrgraph=true;this.rgraph=true;this.coords=[];this.uid=RGraph.createUID();this.canvas.uid=this.canvas.uid?this.canvas.uid:RGraph.createUID();this.colorsParsed=false;this.coordsText=[];this.original_colors=[];this.firstDraw=true;this.properties={backgroundBarsCount:null,backgroundBarsColor1:'rgba(0,0,0,0)',backgroundBarsColor2:'rgba(0,0,0,0)',backgroundGrid:true,backgroundGridAutofit:true,backgroundGridAutofitAlign:true,backgroundGridColor:'#ddd',backgroundGridLinewidth:1,backgroundGridHsize:20,backgroundGridVsize:20,backgroundGridVlines:true,backgroundGridHlines:true,backgroundGridBorder:true,backgroundGridAlign:true,backgroundGridHlinesCount:5,backgroundGridVlinesCount:20,backgroundImage:null,backgroundImageStretch:true,backgroundImageX:null,backgroundImageY:null,backgroundImageW:null,backgroundImageH:null,backgroundImageAlign:null,backgroundHbars:null,linewidth:1,colorsStroke:'#666',colors:['green','red','blue'],colorsSequential:false,marginLeft:35,marginRight:35,marginTop:35,marginBottom:35,marginInner:5,xaxis:true,xaxisPosition:'bottom',xaxisLinewidth:1,xaxisColor:'black',xaxisTickmarks:true,xaxisTickmarksLength:3,xaxisTickmarksLastLeft:null,xaxisTickmarksLastRight:null,xaxisTickmarksCount:null,xaxisLabels:null,xaxisLabelsFormattedDecimals:0,xaxisLabelsFormattedUnitsPre:'',xaxisLabelsFormattedUnitsPost:'',xaxisLabelsFormattedThousand:',',xaxisLabelsFormattedPoint:'.',xaxisLabelsSize:null,xaxisLabelsFont:null,xaxisLabelsItalic:null,xaxisLabelsBold:null,xaxisLabelsColor:null,xaxisLabelsOffsetx:0,xaxisLabelsOffsety:0,xaxisLabelsHalign:null,xaxisLabelsValign:null,xaxisLabelsPosition:'section',xaxisLabelsSpecificAlign:'LEFT',xaxisPosition:'bottom',xaxisLabelsAngle:0,xaxisTitle:'',xaxisTitleBold:null,xaxisTitleSize:null,xaxisTitleFont:null,xaxisTitleColor:null,xaxisTitleItalic:null,xaxisTitlePos:null,xaxisTitleOffsetx:0,xaxisTitleOffsety:0,xaxisTitleX:null,xaxisTitleY:null,xaxisTitleHalign:'center',xaxisTitleValign:'top',yaxis:true,yaxisPosition:'left',yaxisLinewidth:1,yaxisColor:'black',yaxisTickmarks:true,yaxisTickmarksCount:null,yaxisTickmarksLastTop:null,yaxisTickmarksLastBottom:null,yaxisTickmarksLength:3,yaxisScale:true,yaxisScaleMin:0,yaxisScaleMax:null,yaxisScaleUnitsPre:'',yaxisScaleUnitsPost:'',yaxisScaleDecimals:0,yaxisScalePoint:'.',yaxisScaleThousand:',',yaxisScaleRound:false,yaxisScaleFormatter:null,yaxisLabelsSpecific:null,yaxisLabelsCount:5,yaxisLabelsOffsetx:0,yaxisLabelsOffsety:0,yaxisLabelsHalign:null,yaxisLabelsValign:null,yaxisLabelsFont:null,yaxisLabelsSize:null,yaxisLabelsColor:null,yaxisLabelsBold:null,yaxisLabelsItalic:null,yaxisLabelsPosition:'edge',yaxisTitle:'',yaxisTitleBold:null,yaxisTitleSize:null,yaxisTitleFont:null,yaxisTitleColor:null,yaxisTitleItalic:null,yaxisTitlePos:null,yaxisTitleX:null,yaxisTitleY:null,yaxisTitleOffsetx:0,yaxisTitleOffsety:0,yaxisTitleHalign:null,yaxisTitleValign:null,yaxisTitleAccessible:null,yaxisTitle:'',yaxisTitleBold:null,yaxisTitleItalic:null,yaxisTitleSize:null,yaxisTitleFont:null,yaxisTitleColor:null,yaxisTitlePos:null,yaxisTitleAlign:'left',yaxisTitleX:null,yaxisTitleY:null,yaxisLabels:true,yaxisLabelsCount:5,yaxisLabelsOffsetx:0,yaxisLabelsOffsety:0,yaxisLabelsFont:null,yaxisLabelsSize:null,yaxisLabelsColor:null,yaxisLabelsBold:null,yaxisLabelsItalic:null,yaxisScaleMax:null,yaxisScaleMin:0,yaxisScaleUnitsPre:'',yaxisScaleUnitsPost:'',yaxisScaleDecimals:0,yaxisScalePoint:'.',yaxisScaleThousand:',',yaxisScaleFormatter:null,labelsAbove:false,labelsAboveFont:null,labelsAboveSize:null,labelsAboveBold:null,labelsAboveItalic:null,labelsAboveColor:null,labelsAboveOffsetx:0,labelsAboveOffsety:0,labelsAboveSpecific:null,labelsAboveDecimals:0,labelsAboveUnitsPre:'',labelsAboveUnitsPost:'',labelsAbovePoint:'.',labelsAboveThousand:',',labelsAboveFormatter:null,labelsAboveTotalItalic:null,labelsAboveTotalBold:null,labelsAboveTotalSize:null,labelsAboveTotalFont:null,labelsAboveTotalColor:null,labelsAboveTotalDecimals:null,labelsAboveTotalUnitsPre:null,labelsAboveTotalUnitsPost:null,labelsAboveTotalPoint:null,labelsAboveTotalThousand:null,labelsAboveTotalFormatter:null,labelsAboveTotalOffsetx:0,labelsAboveTotalOffsety:0,textColor:'black',textSize:12,textFont:'Arial, Verdana, sans-serif',textBold:false,textItalic:false,textAccessible:true,textAccessibleOverflow:'visible',textAccessiblePointerevents:false,title:'',titleColor:'black',titleBackground:null,titleHpos:null,titleVpos:null,titleBold:null,titleFont:null,titleSize:null,titleItalic:null,titleColor:null,titleX:null,titleY:null,titleHalign:null,titleValign:null,titleOffsetx:0,titleOffsety:0,shadow:false,shadowColor:'#666',shadowOffsetx:3,shadowOffsety:3,shadowBlur:3,tooltips:null,tooltipsEffect:'fade',tooltipsCssClass:'RGraph_tooltip',tooltipsCss:null,tooltipsEvent:'onclick',tooltipsHighlight:true,tooltipsOverride:null,tooltipsFormattedThousand:',',tooltipsFormattedPoint:'.',tooltipsFormattedDecimals:0,tooltipsFormattedUnitsPre:'',tooltipsFormattedUnitsPost:'',tooltipsFormattedKeyColors:null,tooltipsFormattedKeyColorsShape:'square',tooltipsFormattedKeyLabels:[],tooltipsFormattedListType:'ul',tooltipsFormattedListItems:null,tooltipsFormattedTableHeaders:null,tooltipsFormattedTableData:null,tooltipsPointer:true,tooltipsPositionStatic:true,highlightStroke:'rgba(0,0,0,0)',highlightFill:'rgba(255,255,255,0.7)',contextmenu:null,crosshairs:false,crosshairsColor:'#333',crosshairsHline:true,crosshairsVline:true,annotatable:false,annotatableLinewidth:1,annotatableColor:'black',resizable:false,resizableHandleBackground:null,total:true,multiplierX:1,multiplierW:1,key:null,keyBackground:'white',keyPosition:'graph',keyHalign:'right',keyShadow:false,keyShadowColor:'#666',keyShadowBlur:3,keyShadowOffsetx:2,keyShadowOffsety:2,keyPositionGutterBoxed:false,keyPositionX:null,keyPositionY:null,keyColorShape:'square',keyRounded:true,keyLinewidth:1,keyColors:null,keyInteractive:false,keyInteractiveHighlightChartStroke:'#000',keyInteractiveHighlightChartFill:'rgba(255,255,255,0.7)',keyInteractiveHighlightLabel:'rgba(255,0,0,0.2)',keyLabelsColor:null,keyLabelsFont:null,keyLabelsSize:null,keyLabelsBold:null,keyLabelsItalic:null,keyLabelsOffsetx:0,keyLabelsOffsety:0,barOffsetx:0,barOffsety:0,clearto:'rgba(0,0,0,0)'}
if(!this.canvas){alert('[WATERFALL] No canvas support');return;}
this.data=RGraph.stringsToNumbers(this.data);for(var i=0,len=this.data.length;i<=len;++i){this['$'+i]={}}
var properties=this.properties;this.path=RGraph.pathObjectFunction;if(RGraph.Effects&&typeof RGraph.Effects.decorate==='function'){RGraph.Effects.decorate(this);}
this.responsive=RGraph.responsive;this.set=function(name)
{var value=typeof arguments[1]==='undefined'?null:arguments[1];if(arguments.length===1&&typeof arguments[0]==='object'){for(i in arguments[0]){if(typeof i==='string'){this.set(i,arguments[0][i]);}}
return this;}
properties[name]=value;return this;};this.get=function(name)
{return properties[name];};this.draw=function()
{RGraph.fireCustomEvent(this,'onbeforedraw');if(!this.canvas.__rgraph_aa_translated__){this.context.translate(0.5,0.5);this.canvas.__rgraph_aa_translated__=true;}
if(!this.colorsParsed){this.parseColors();this.colorsParsed=true;}
RGraph.drawBackgroundImage(this);if(properties.xaxisLabels&&properties.xaxisLabels.length){if(typeof properties.xaxisLabels==='string'){properties.xaxisLabels=RGraph.arrayPad({array:[],length:this.data.length+(properties.total?1:0),value:properties.xaxisLabels});}
for(var i=0;i<properties.xaxisLabels.length;++i){properties.xaxisLabels[i]=RGraph.labelSubstitution({object:this,text:properties.xaxisLabels[i],index:i,value:i===this.data.length?this.runningTotal():this.data[i],decimals:properties.xaxisLabelsFormattedDecimals||0,unitsPre:properties.xaxisLabelsFormattedUnitsPre||'',unitsPost:properties.xaxisLabelsFormattedUnitsPost||'',thousand:properties.xaxisLabelsFormattedThousand||',',point:properties.xaxisLabelsFormattedPoint||'.'});}}
this.marginLeft=properties.marginLeft;this.marginRight=properties.marginRight;this.marginTop=properties.marginTop;this.marginBottom=properties.marginBottom;this.coords=[];this.coordsText=[];this.centery=((this.canvas.height-this.marginTop-this.marginBottom)/2)+this.marginTop;this.max=0;this.grapharea=this.canvas.height-this.marginTop-this.marginBottom;this.graphwidth=this.canvas.width-this.marginLeft-this.marginRight;this.halfTextHeight=properties.textSize/2;this.max=this.getMax(this.data);var decimals=properties.yaxisScaleDecimals;this.scale2=RGraph.getScale({object:this,options:{'scale.max':typeof properties.yaxisScaleMax=='number'?properties.yaxisScaleMax:this.max,'scale.min':properties.yaxisScaleMin,'scale.strict':typeof properties.yaxisScaleMax==='number'?true:false,'scale.decimals':Number(decimals),'scale.point':properties.yaxisScalePoint,'scale.thousand':properties.yaxisScaleThousand,'scale.round':properties.yaxisScaleRound,'scale.units.pre':properties.yaxisScaleUnitsPre,'scale.units.post':properties.yaxisScaleUnitsPost,'scale.labels.count':properties.yaxisLabelsCount,'scale.formatter':properties.yaxisScaleFormatter}});this.max=this.scale2.max;this.min=this.scale2.min;RGraph.drawBars(this)
RGraph.Background.draw(this);this.drawAxes();this.drawBars();this.drawLabels();if(properties.contextmenu){RGraph.showContext(this);}
RGraph.installEventListeners(this);if(properties.key&&properties.key.length){RGraph.drawKey(this,properties.key,properties.colors);}
if(this.firstDraw){this.firstDraw=false;RGraph.fireCustomEvent(this,'onfirstdraw');this.firstDrawFunc();}
RGraph.fireCustomEvent(this,'ondraw');return this;};this.drawAxes=function()
{RGraph.drawXAxis(this);RGraph.drawYAxis(this);};this.drawLabels=function()
{if(properties.labelsAbove){this.drawLabelsAbove();}};this.drawLabelsAbove=function()
{var data=this.data,unitsPre=properties.labelsAboveUnitsPre,unitsPost=properties.labelsAboveUnitsPost,decimals=properties.labelsAboveDecimals,thousand=properties.labelsAboveThousand,point=properties.labelsAbovePoint,formatter=properties.labelsAboveFormatter;var textConf=RGraph.getTextConf({object:this,prefix:'labelsAbove'});for(var i=0;i<this.data.length+(properties.total?1:0);++i){if(properties.total&&i===this.data.length){var isTotal=true;}
var value=Number(isTotal?this.total:this.data[i]);if(typeof properties.labelsAboveColor==='object'&&properties.labelsAboveColor){if(isTotal&&typeof properties.labelsAboveColor[2]==='string'){color=properties.labelsAboveColor[2];}else if(this.data[i]<0){color=properties.labelsAboveColor[1];}else{color=properties.labelsAboveColor[0];}}
if(typeof properties.labelsAboveTotalColor==='object'&&properties.labelsAboveTotalColor){if(isTotal&&typeof properties.labelsAboveTotalColor[0]==='string'&&typeof properties.labelsAboveTotalColor[1]==='string'){if(this.total<0){color=properties.labelsAboveTotalColor[1];}else{color=properties.labelsAboveTotalColor[0];}}}
var coords=this.coords[i];var tmpScaleThousand=properties.yaxisScaleThousand,tmpScalePoint=properties.yaxisScaleDecimal;properties.yaxisScaleThousand=properties.labelsAboveThousand;properties.yaxisScalePoint=properties.labelsAbovePoint;if(formatter){var str=(formatter)({object:this,value:value,index:i});}else{var str=RGraph.numberFormat({object:this,number:String(value.toFixed(decimals)),unitspre:unitsPre,unitspost:unitsPost,point:point,thousand:thousand});}
if(isTotal||i===this.data.length){if(typeof properties.labelsAboveTotalFont==='string')textConf.font=properties.labelsAboveTotalFont;if(typeof properties.labelsAboveTotalColor==='string')textConf.color=properties.labelsAboveTotalColor;if(typeof properties.labelsAboveTotalSize==='number')textConf.size=properties.labelsAboveTotalSize;if(!RGraph.isNull(properties.labelsAboveTotalBold))textConf.bold=properties.labelsAboveTotalBold;if(!RGraph.isNull(properties.labelsAboveTotalItalic))textConf.italic=properties.labelsAboveTotalItalic;if(typeof properties.labelsAboveTotalUnitsPre==='string')unitsPre=properties.labelsAboveTotalUnitsPre;if(typeof properties.labelsAboveTotalUnitsPost==='string')unitsPost=properties.labelsAboveTotalUnitsPost;if(typeof properties.labelsAboveTotalDecimals==='number')decimals=properties.labelsAboveTotalDecimals;if(typeof properties.labelsAboveTotalFormatter==='function')formatter=properties.labelsAboveTotalFormatter;if(typeof properties.labelsAboveTotalThousand==='string')thousand=properties.labelsAboveTotalThousand;if(typeof properties.labelsAboveTotalPoint==='string')point=properties.labelsAboveTotalPoint;if(formatter){var str=(formatter)({object:this,value:value,index:i});}else{str=RGraph.numberFormat({object:this,number:String(value.toFixed(decimals)),unitspre:unitsPre,unitspost:unitsPost,point:point,thousand:thousand});}
properties.yaxisScaleThousand=tmpScaleThousand;properties.yaxisScalePoint=tmpScalePoint;}
if(typeof properties.labelsAboveSpecific==='object'&&!RGraph.isNull(properties.labelsAboveSpecific)){if(typeof properties.labelsAboveSpecific[i]==='string'||typeof properties.labelsAboveSpecific[i]==='number'){str=properties.labelsAboveSpecific[i];}else{str='';}}
RGraph.text({object:this,font:textConf.font,size:textConf.size,color:textConf.color,bold:textConf.bold,italic:textConf.italic,x:coords[0]+(coords[2]/2)+(isTotal?properties.labelsAboveTotalOffsetx:properties.labelsAboveOffsetx),y:(isTotal?this.total:this.data[i])>=0?(coords[1]-3+(isTotal?properties.labelsAboveTotalOffsety:properties.labelsAboveOffsety)):(coords[1]+coords[3]+3+(isTotal?properties.labelsAboveTotalOffsety:properties.labelsAboveOffsety)),text:str,valign:(isTotal?this.total:this.data[i])>=0?'bottom':'top',halign:'center',tag:'labels.above'});}};this.runningTotal=function()
{var runningTotal=0;for(var i=0;i<this.data.length;++i){runningTotal+=this.data[i];}
return runningTotal;};this.drawBars=function()
{var context=this.context,canvas=this.canvas,hmargin=properties.marginInner,runningTotal=0;this.context.lineWidth=properties.linewidth+0.001;for(var i=0,len=this.data.length,seq=0;i<len;++i,++seq){this.context.beginPath();this.context.strokeStyle=properties.colorsStroke;var x=Math.round(this.marginLeft+hmargin+(((this.graphwidth/(this.data.length+(properties.total?1:0)))*i)*properties.multiplierX));var h=this.getYCoord(0)-this.getYCoord(Math.abs(this.data[i]));if(i===0){y=this.getYCoord(0)-h;}else{y=this.getYCoord(runningTotal)-h;}
y=Math.round(y);var w=((this.canvas.width-this.marginLeft-this.marginRight)/(this.data.length+(properties.total?1:0)))-(2*properties.marginInner);w=w*properties.multiplierW;if(this.data[i]<0){y+=h;}
if(properties.colorsSequential){this.context.fillStyle=properties.colors[seq];}else{this.context.fillStyle=this.data[i]>=0?properties.colors[0]:properties.colors[1];}
if(properties.shadow){RGraph.setShadow({object:this,prefix:'shadow'});}else{RGraph.noShadow(this);}
if(h<0){h=Math.abs(h);y=y-h;}
this.context.rect(x+properties.barOffsetx,Math.floor(y)+properties.barOffsety,w,Math.floor(h));this.coords.push([x,y,w,h]);runningTotal+=this.data[i];this.context.stroke();this.context.fill();}
this.total=runningTotal;if(properties.total){if(properties.xaxisPosition==='top'){h=this.getYCoord(Math.abs(runningTotal))-this.getYCoord(0);}else{h=this.getYCoord(0)-this.getYCoord(Math.abs(runningTotal));}
if(properties.xaxisPosition=='center'){y=runningTotal>0?this.getYCoord(0)-h:this.getYCoord(0);}else if(properties.xaxisPosition=='top'){y=this.getYCoord(0);}else{if(runningTotal>0){y=this.getYCoord(0)-h;}else{y=this.getYCoord(0);}}
x=x+(properties.marginInner*2)+w;if(properties.colorsSequential){this.context.fillStyle=properties.colors[seq]}else{this.context.fillStyle=properties.colors[2];}
this.path('b r % % % % s % f %',x+properties.barOffsetx,y+properties.barOffsety,w,h,this.context.strokeStyle,this.context.fillStyle);var previousCoords=[x,y,w,Math.abs(h)];this.coords.push(previousCoords);}
RGraph.noShadow(this);this.context.lineWidth=1;this.context.strokeStyle='#666';this.context.beginPath();for(var i=1,len=this.coords.length;i<len;i+=1){var prev=this.coords[i-1],curr=this.coords[i],prevData=this.data[i-1];if(properties.xaxisPosition==='top'){var y=(prevData>0?prev[1]+prev[3]:prev[1]);}else{var y=(prevData>0?prev[1]:prev[1]+prev[3]);}
this.context.moveTo(prev[0]+prev[2]+properties.barOffsetx,y+properties.barOffsety);this.context.lineTo(curr[0]+properties.barOffsetx,y+properties.barOffsety);}
this.context.stroke();};this.getShape=function(e)
{for(var i=0,len=this.coords.length;i<len;i++){var mouseXY=RGraph.getMouseXY(e),mouseX=mouseXY[0],mouseY=mouseXY[1];var left=this.coords[i][0],top=this.coords[i][1],width=this.coords[i][2],height=this.coords[i][3];if(mouseX>=left&&mouseX<=(left+width)&&mouseY>=top&&mouseY<=top+height){var tooltip=RGraph.parseTooltipText?RGraph.parseTooltipText(properties.tooltips,i):null;return{object:this,x:left,y:top,width:width,height:height,index:0,dataset:i,sequentialIndex:i,label:properties.xaxisLabels&&typeof properties.xaxisLabels[i]==='string'?properties.xaxisLabels[i]:null,tooltip:typeof tooltip==='string'?tooltip:null};}}
return null;};this.getMax=function(data)
{var runningTotal=0,max=0;for(var i=0,len=data.length;i<len;i+=1){runningTotal+=data[i];max=Math.max(Math.abs(runningTotal),max);}
return Math.abs(max);};this.allowTooltips=function()
{RGraph.preLoadTooltipImages(this);RGraph.installWindowMousedownTooltipListener(this);RGraph.installCanvasMousemoveTooltipListener(this);RGraph.installCanvasMouseupTooltipListener(this);};this.highlight=function(shape)
{if(typeof properties.highlightStyle==='function'){(properties.highlightStyle)(shape);}else if(typeof properties.highlightStyle==='string'&&properties.highlightStyle==='invert'){for(var i=0;i<this.coords.length;++i){if(i!==shape.sequentialIndex){this.path('b r % % % % s % f %',this.coords[i][0],this.coords[i][1],this.coords[i][2],this.coords[i][3],properties.highlightStroke,properties.highlightFill);}}}else{RGraph.Highlight.rect(this,shape);}};this.getObjectByXY=function(e)
{var mouseXY=RGraph.getMouseXY(e);if(mouseXY[0]>this.marginLeft&&mouseXY[0]<(this.canvas.width-this.marginRight)&&mouseXY[1]>this.marginTop&&mouseXY[1]<(this.canvas.height-this.marginBottom)){return this;}};this.getYCoord=function(value)
{if(properties.xaxisPosition=='center'){if(value<(-1*this.max)){return null;}
var coord=(value/this.max)*(this.grapharea/2);return this.marginTop+(this.grapharea/2)-coord;}else if(properties.xaxisPosition=='top'){if(value<0)return null;var coord=(value/this.max)*this.grapharea;return this.marginTop+coord;}else{var coord=((value-this.scale2.min)/(this.max-this.scale2.min))*this.grapharea;coord=coord+this.marginBottom;return this.canvas.height-coord;}};this.parseColors=function()
{if(this.original_colors.length===0){this.original_colors.colors=RGraph.arrayClone(properties.colors);this.original_colors.keyColors=RGraph.arrayClone(properties.keyColors);this.original_colors.crosshairsColor=RGraph.arrayClone(properties.crosshairsColor);this.original_colors.highlightStroke=RGraph.arrayClone(properties.highlightStroke);this.original_colors.highlightFill=RGraph.arrayClone(properties.highlightFill);this.original_colors.backgroundBarsColor1=RGraph.arrayClone(properties.backgroundBarsColor1);this.original_colors.backgroundBarsColor2=RGraph.arrayClone(properties.backgroundBarsColor2);this.original_colors.backgroundGridColor=RGraph.arrayClone(properties.backgroundGridColor);this.original_colors.colorsStroke=RGraph.arrayClone(properties.colorsStroke);this.original_colors.xaxisColor=RGraph.arrayClone(properties.xaxisColor);this.original_colors.yaxisColor=RGraph.arrayClone(properties.yaxisColor);}
var colors=properties.colors;if(colors){for(var i=0,len=colors.length;i<len;++i){colors[i]=this.parseSingleColorForGradient(colors[i]);}}
var colors=properties.keyColors;if(colors){for(var i=0,len=colors.length;i<len;++i){colors[i]=this.parseSingleColorForGradient(colors[i]);}}
properties.crosshairsColor=this.parseSingleColorForGradient(properties.crosshairsColor);properties.highlightStroke=this.parseSingleColorForGradient(properties.highlightStroke);properties.highlightFill=this.parseSingleColorForGradient(properties.highlightFill);properties.backgroundBarsColor1=this.parseSingleColorForGradient(properties.backgroundBarsColor1);properties.backgroundBarsColor2=this.parseSingleColorForGradient(properties.backgroundBarsColor2);properties.backgroundGridColor=this.parseSingleColorForGradient(properties.backgroundGridColor);properties.colorsStroke=this.parseSingleColorForGradient(properties.colorsStroke);properties.xaxisColor=this.parseSingleColorForGradient(properties.xaxisColor);properties.yaxisColor=this.parseSingleColorForGradient(properties.yaxisColor);};this.reset=function()
{};this.parseSingleColorForGradient=function(color)
{if(!color||typeof color!='string'){return color;}
if(typeof color==='string'&&color.match(/^gradient\((.*)\)$/i)){if(color.match(/^gradient\(({.*})\)$/i)){return RGraph.parseJSONGradient({object:this,def:RegExp.$1});}
var parts=RegExp.$1.split(':');var grad=this.context.createLinearGradient(0,this.canvas.height-properties.marginBottom,0,properties.marginTop);var diff=1/(parts.length-1);grad.addColorStop(0,RGraph.trim(parts[0]));for(var j=1,len=parts.length;j<len;++j){grad.addColorStop(j*diff,RGraph.trim(parts[j]));}}
return grad?grad:color;};this.on=function(type,func)
{if(type.substr(0,2)!=='on'){type='on'+type;}
if(typeof this[type]!=='function'){this[type]=func;}else{RGraph.addCustomEventListener(this,type,func);}
return this;};this.exec=function(func)
{func(this);return this;};this.firstDrawFunc=function()
{};this.grow=function()
{var opt=arguments[0]||{};var callback=arguments[1]||function(){};var frames=opt.frames||30;var numFrame=0;var obj=this;var data=RGraph.arrayClone(obj.data);for(var i=0,len=obj.data.length;i<len;++i){obj.data[i]/=frames;}
if(obj.get('yaxisScaleMax')==null){var max=obj.getMax(data);var scale2=RGraph.getScale({object:obj,options:{'scale.max':max}});obj.set('yaxisScaleMax',scale2.max);}
function iterator()
{for(var i=0;i<obj.data.length;++i){obj.data[i]=data[i]*RGraph.Effects.getEasingMultiplier(frames,numFrame);}
RGraph.clear(obj.canvas);RGraph.redrawCanvas(obj.canvas);if(++numFrame<=frames){RGraph.Effects.updateCanvas(iterator);}else{callback(obj);}}
iterator();return this;};this.tooltipSubstitutions=function(opt)
{var value=this.data[opt.index];if(opt.index===this.data.length&&properties.total){value=this.total;}
return{index:opt.index,dataset:0,sequentialIndex:opt.index,value:value,values:[value]};};this.tooltipsFormattedCustom=function(specific,index)
{var colors=properties.colors;if(properties.tooltipsFormattedKeyColors){colors=properties.tooltipsFormattedKeyColors;}
var color=colors[0];if(specific.value<0){color=colors[1];}
if(specific.index==this.data.length){color=colors[2];}
if(typeof properties.tooltipsFormattedKeyLabels==='object'&&typeof properties.tooltipsFormattedKeyLabels[specific.index]==='string'){var label=properties.tooltipsFormattedKeyLabels[specific.index];}else if(properties.xaxisLabels&&typeof properties.xaxisLabels==='object'&&typeof properties.xaxisLabels[specific.index]==='string'){var label=properties.xaxisLabels[specific.index];}
return{label:label,color:color};};this.positionTooltipStatic=function(args)
{var obj=args.object,e=args.event,tooltip=args.tooltip,index=args.index,canvasXY=RGraph.getCanvasXY(obj.canvas)
coords=this.coords[args.index];args.tooltip.style.left=(canvasXY[0]
+coords[0]
+(coords[2]/2)
-(tooltip.offsetWidth/2)
+obj.properties.tooltipsOffsetx)+'px';args.tooltip.style.top=(canvasXY[1]
+coords[1]
-tooltip.offsetHeight
-10
+obj.properties.tooltipsOffsety)+'px';if(parseFloat(args.tooltip.style.top)<0){args.tooltip.style.top=parseFloat(args.tooltip.style.top)+(coords[3]/2)+5+'px';}};RGraph.register(this);RGraph.parseObjectStyleConfig(this,conf.options);return this;};