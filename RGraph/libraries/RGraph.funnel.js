
RGraph=window.RGraph||{isrgraph:true,isRGraph:true,rgraph:true};RGraph.Funnel=function(conf)
{var id=conf.id;var canvas=document.getElementById(id);var data=conf.data;this.id=id;this.canvas=canvas;this.context=this.canvas.getContext?this.canvas.getContext("2d",{alpha:(typeof id==='object'&&id.alpha===false)?false:true}):null;this.canvas.__object__=this;this.type='funnel';this.coords=[];this.isRGraph=true;this.isrgraph=true;this.rgraph=true;this.uid=RGraph.createUID();this.canvas.uid=this.canvas.uid?this.canvas.uid:RGraph.createUID();this.coordsText=[];this.original_colors=[];this.firstDraw=true;if(!this.canvas){alert('[FUNNEL] No canvas support');return;}
this.properties={colorsStroke:'rgba(0,0,0,0)',colors:['red','green','gray','black','pink','orange','blue','yellow','green','red'],marginLeft:35,marginRight:35,marginTop:35,marginBottom:35,labels:null,labelsFont:null,labelsSize:null,labelsColor:null,labelsBold:null,labelsItalic:null,labelsSticks:false,labelsX:null,labelsPosition:'edge',labelsOffsetx:0,labelsOffsety:0,labelsFormattedDecimals:0,labelsFormattedPoint:'.',labelsFormattedThousand:',',labelsFormattedUnitsPre:'',labelsFormattedUnitsPost:'',title:'',titleBackground:null,titleHpos:null,titleVpos:null,titleItalic:null,titleBold:null,titleFont:null,titleSize:null,titleColor:null,titleX:null,titleY:null,titleHalign:null,titleValign:null,titleOffsetx:0,titleOffsety:0,textSize:12,textColor:'black',textFont:'Arial, Verdana, sans-serif',textBold:false,textItalic:false,textHalign:'left',textAccessible:true,textAccessibleOverflow:'visible',textAccessiblePointerevents:false,contextmenu:null,shadow:false,shadowColor:'#666',shadowBlur:3,shadowOffsetx:3,shadowOffsety:3,key:null,keyBackground:'white',keyPosition:'graph',keyHalign:'right',keyShadow:false,keyShadowColor:'#666',keyShadowBlur:3,keyShadowOffsetx:2,keyShadowOffsety:2,keyPositionMarginBoxed:false,keyPositionX:null,keyPositionY:null,keyColorShape:'square',keyRounded:true,keyLinewidth:1,keyColors:null,keyInteractive:false,keyInteractiveHighlightChartStroke:'black',keyInteractiveHighlightChartFill:'rgba(255,255,255,0.7)',keyInteractiveHighlightLabel:'rgba(255,0,0,0.2)',keyLabelsFont:null,keyLabelsSize:null,keyLabelsColor:null,keyLabelsBold:null,keyLabelsItalic:null,keyLabelsOffsetx:0,keyLabelsOffsety:0,tooltipsHighlight:true,tooltips:null,tooltipsEffect:'fade',tooltipsCssClass:'RGraph_tooltip',tooltipsCss:null,tooltipsEvent:'onclick',tooltipsFormattedThousand:',',tooltipsFormattedPoint:'.',tooltipsFormattedDecimals:0,tooltipsFormattedUnitsPre:'',tooltipsFormattedUnitsPost:'',tooltipsFormattedKeyColors:null,tooltipsFormattedKeyColorsShape:'square',tooltipsFormattedKeyLabels:[],tooltipsFormattedListType:'ul',tooltipsFormattedListItems:null,tooltipsFormattedTableHeaders:null,tooltipsFormattedTableData:null,tooltipsPointer:true,tooltipsPositionStatic:true,highlightStroke:'rgba(0,0,0,0)',highlightFill:'rgba(255,255,255,0.7)',annotatable:false,annotatableColor:'black',resizable:false,resizableHandleBackground:null,clearto:'rgba(0,0,0,0)'}
data=RGraph.stringsToNumbers(data);this.data=data;for(var i=0;i<data.length;++i){this['$'+i]={};}
var properties=this.properties;this.path=RGraph.pathObjectFunction;if(RGraph.Effects&&typeof RGraph.Effects.decorate==='function'){RGraph.Effects.decorate(this);}
this.responsive=RGraph.responsive;this.set=function(name)
{var value=typeof arguments[1]==='undefined'?null:arguments[1];if(arguments.length===1&&typeof arguments[0]==='object'){for(i in arguments[0]){if(typeof i==='string'){this.set(i,arguments[0][i]);}}
return this;}
properties[name]=value;return this;};this.get=function(name)
{return properties[name];};this.draw=function()
{RGraph.fireCustomEvent(this,'onbeforedraw');if(!this.canvas.__rgraph_aa_translated__){this.context.translate(0.5,0.5);this.canvas.__rgraph_aa_translated__=true;}
if(!this.colorsParsed){this.parseColors();this.colorsParsed=true;}
this.marginLeft=properties.marginLeft;this.marginRight=properties.marginRight;this.marginTop=properties.marginTop;this.marginBottom=properties.marginBottom;this.coords=[];this.coordsText=[];RGraph.drawTitle(this,properties.title,this.marginTop,null,typeof properties.titleSize==='number'?properties.titleSize:properties.textSize);this.drawFunnel();if(properties.contextmenu){RGraph.showContext(this);}
this.drawLabels();if(properties.resizable){RGraph.allowResizing(this);}
RGraph.installEventListeners(this);if(this.firstDraw){this.firstDraw=false;RGraph.fireCustomEvent(this,'onfirstdraw');this.firstDrawFunc();}
RGraph.fireCustomEvent(this,'ondraw');return this;};this.exec=function(func)
{func(this);return this;};this.drawFunnel=function()
{var width=this.canvas.width-this.marginLeft-this.marginRight;var height=this.canvas.height-this.marginTop-this.marginBottom;var max=RGraph.arrayMax(this.data);var accheight=this.marginTop;if(properties.shadow){this.context.shadowColor=properties.shadowColor;this.context.shadowBlur=properties.shadowBlur;this.context.shadowOffsetX=properties.shadowOffsetx;this.context.shadowOffsetY=properties.shadowOffsety;}
for(i=0,len=this.data.length;i<len;++i){var firstvalue=this.data[0];var firstwidth=(firstvalue/max)*width;var curvalue=this.data[i];var curwidth=(curvalue/max)*width;var curheight=height/(this.data.length-1);var halfCurWidth=(curwidth/2);var nextvalue=this.data[i+1];var nextwidth=this.data[i+1]?(nextvalue/max)*width:null;var halfNextWidth=(nextwidth/2);var center=this.marginLeft+(firstwidth/2);var x1=center-halfCurWidth;var y1=accheight;var x2=center+halfCurWidth;var y2=accheight;var x3=center+halfNextWidth;var y3=accheight+curheight;var x4=center-halfNextWidth;var y4=accheight+curheight;if(nextwidth&&i<this.data.length-1){this.context.beginPath();this.context.strokeStyle=properties.colorsStroke;this.context.fillStyle=properties.colors[i];this.context.moveTo(x1,y1);this.context.lineTo(x2,y2);this.context.lineTo(x3,y3);this.context.lineTo(x4,y4);this.context.closePath();this.coords.push([x1,y1,x2,y2,x3,y3,x4,y4]);}
if(!properties.shadow){this.context.stroke();}
this.context.fill();accheight+=curheight;}
if(properties.shadow){RGraph.noShadow(this);for(i=0;i<this.coords.length;++i){this.context.strokeStyle=properties.colorsStroke;this.context.fillStyle=properties.colors[i];this.context.beginPath();this.context.moveTo(this.coords[i][0],this.coords[i][1]);this.context.lineTo(this.coords[i][2],this.coords[i][3]);this.context.lineTo(this.coords[i][4],this.coords[i][5]);this.context.lineTo(this.coords[i][6],this.coords[i][7]);this.context.closePath();this.context.stroke();this.context.fill();}}
if(properties.key&&properties.key.length){RGraph.drawKey(this,properties.key,properties.colors);}};this.drawLabels=function()
{if(properties.labels&&properties.labels.length){if(typeof properties.labels==='string'){properties.labels=RGraph.arrayPad({array:[],length:this.coords.length+1,value:properties.labels});}
for(var i=0;i<properties.labels.length;++i){properties.labels[i]=RGraph.labelSubstitution({object:this,text:properties.labels[i],index:i,value:this.data[i],decimals:properties.labelsFormattedDecimals||0,unitsPre:properties.labelsFormattedUnitsPre||'',unitsPost:properties.labelsFormattedUnitsPost||'',thousand:properties.labelsFormattedThousand||',',point:properties.labelsFormattedPoint||'.'});}}
if(!RGraph.isNull(properties.labels)&&typeof properties.labels==='object'&&properties.labels.length>0){var font=properties.textFont,size=properties.textSize,color=properties.textColor,labels=properties.labels,halign=properties.textHalign=='left'?'left':'center';var textConf=RGraph.getTextConf({object:this,prefix:'labels'});if(typeof properties.labelsX=='number'){var x=properties.labelsX;}else{var x=halign=='left'?(this.marginLeft-15):((this.canvas.width-this.marginLeft-this.marginRight)/2)+this.marginLeft;}
for(var j=0;j<this.coords.length;++j){this.context.beginPath();this.path('ss black fs %',color);RGraph.noShadow(this);if(properties.labelsPosition==='section'){var y=this.coords[j][1]+((this.coords[j][5]-this.coords[j][3])/2);}else{var y=this.coords[j][1];}
var ret=RGraph.text({object:this,font:textConf.font,size:textConf.size,color:textConf.color,bold:textConf.bold,italic:textConf.italic,x:x+properties.labelsOffsetx,y:y+properties.labelsOffsety,text:labels[j]||'',valign:'center',halign:halign,bounding:true,boundingFill:'rgba(255,255,255,0.7)',boundingStroke:'rgba(0,0,0,0)',tag:'labels',cssClass:RGraph.getLabelsCSSClassName({object:this,name:'labelsClass',index:j})});if(properties.labelsSticks&&labels[j]){this.context.font=textConf.size+'pt '+font;var labelWidth=this.context.measureText(labels[j]).width;this.path('b m % % l % % s gray',x+labelWidth+10,y,(properties.labelsPosition==='section'?this.coords[j][0]+((this.coords[j][6]-this.coords[j][0])/2):this.coords[j][0])-10,y);}}
var lastLabel=labels[j];if(lastLabel&&properties.labelsPosition==='edge'){RGraph.text({object:this,font:textConf.font,size:textConf.size,color:textConf.color,bold:textConf.bold,italic:textConf.italic,x:x+properties.labelsOffsetx,y:this.coords[j-1][5]+properties.labelsOffsety,text:lastLabel,valign:'center',halign:halign,bounding:true,boundingFill:'rgba(255,255,255,0.7)',boundingStroke:'rgba(0,0,0,0)',tag:'labels',cssClass:RGraph.getLabelsCSSClassName({object:this,name:'labelsClass',index:j})});if(properties.labelsSticks){this.context.font=textConf.size+'pt '+font;var labelWidth=this.context.measureText(lastLabel).width;this.path('b m % % l % % s gray',x+labelWidth+10,Math.round(this.coords[j-1][7]),this.coords[j-1][6]-10,Math.round(this.coords[j-1][7]));}}}};this.getShape=function(e)
{var coords=this.coords;var mouseCoords=RGraph.getMouseXY(e);var x=mouseCoords[0];var y=mouseCoords[1];for(i=0,len=coords.length;i<len;++i){var segment=coords[i]
this.context.beginPath();this.context.moveTo(segment[0],segment[1]);this.context.lineTo(segment[2],segment[3]);this.context.lineTo(segment[4],segment[5]);this.context.lineTo(segment[6],segment[7]);this.context.lineTo(segment[8],segment[9]);if(this.context.isPointInPath(x,y)){if(RGraph.parseTooltipText&&properties.tooltips){var tooltip=RGraph.parseTooltipText(properties.tooltips,i);}
return{object:this,coords:segment,dataset:0,index:i,sequentialIndex:i,label:properties.labels&&typeof properties.labels[i]==='string'?properties.labels[i]:null,tooltip:typeof tooltip==='string'?tooltip:null};}}
return null;};this.highlight=function(shape)
{if(properties.tooltipsHighlight){if(typeof properties.highlightStyle==='function'){(properties.highlightStyle)(shape);return;}
if(typeof properties.highlightStyle==='string'&&properties.highlightStyle==='invert'){for(var i=0;i<this.coords.length;++i){if(i!==shape.sequentialIndex){var coords=this.coords[i];this.path('b m % % l % % l % % l % % c s % f %',coords[0],coords[1],coords[2],coords[3],coords[4],coords[5],coords[6],coords[7],properties.highlightStroke,properties.highlightFill);}}
return;}
var coords=shape.coords;this.path('b m % % l % % l % % l % % c s % f %',coords[0],coords[1],coords[2],coords[3],coords[4],coords[5],coords[6],coords[7],properties.highlightStroke,properties.highlightFill);}};this.getObjectByXY=function(e)
{var mouseXY=RGraph.getMouseXY(e);if(mouseXY[0]>properties.marginLeft&&mouseXY[0]<(this.canvas.width-properties.marginRight)&&mouseXY[1]>properties.marginTop&&mouseXY[1]<(this.canvas.height-properties.marginBottom)){return this;}};this.parseColors=function()
{if(this.original_colors.length===0){this.original_colors.colors=RGraph.arrayClone(properties.colors);this.original_colors.keyColors=RGraph.arrayClone(properties.keyColors);this.original_colors.highlightFill=RGraph.arrayClone(properties.highlightFill);this.original_colors.highlightStroke=RGraph.arrayClone(properties.highlightStroke);this.original_colors.colorsStroke=RGraph.arrayClone(properties.colorsStroke);}
var colors=properties.colors;for(var i=0;i<colors.length;++i){colors[i]=this.parseSingleColorForHorizontalGradient(colors[i]);}
var keyColors=properties.keyColors;if(keyColors){for(var i=0;i<keyColors.length;++i){keyColors[i]=this.parseSingleColorForHorizontalGradient(keyColors[i]);}}
properties.colorsStroke=this.parseSingleColorForVerticalGradient(properties.colorsStroke);properties.highlightStroke=this.parseSingleColorForHorizontalGradient(properties.highlightStroke);properties.highlightFill=this.parseSingleColorForHorizontalGradient(properties.highlightFill);};this.reset=function()
{};this.parseSingleColorForHorizontalGradient=function(color)
{if(!color||typeof color!='string'){return color;}
if(color.match(/^gradient\((.*)\)$/i)){if(color.match(/^gradient\(({.*})\)$/i)){return RGraph.parseJSONGradient({object:this,def:RegExp.$1});}
var parts=RegExp.$1.split(':');var grad=this.context.createLinearGradient(properties.marginLeft,0,this.canvas.width-properties.marginRight,0);var diff=1/(parts.length-1);grad.addColorStop(0,RGraph.trim(parts[0]));for(var j=1;j<parts.length;++j){grad.addColorStop(j*diff,RGraph.trim(parts[j]));}}
return grad?grad:color;};this.parseSingleColorForVerticalGradient=function(color)
{if(!color||typeof color!='string'){return color;}
if(color.match(/^gradient\((.*)\)$/i)){var parts=RegExp.$1.split(':');var grad=this.context.createLinearGradient(0,properties.marginTop,0,this.canvas.height-properties.marginBottom);var diff=1/(parts.length-1);grad.addColorStop(0,RGraph.trim(parts[0]));for(var j=1;j<parts.length;++j){grad.addColorStop(j*diff,RGraph.trim(parts[j]));}}
return grad?grad:color;};this.interactiveKeyHighlight=function(index)
{var coords=this.coords[index];if(coords&&coords.length==8){var pre_linewidth=this.context.lineWidth;this.context.lineWidth=2;this.context.strokeStyle=properties.keyInteractiveHighlightChartStroke;this.context.fillStyle=properties.keyInteractiveHighlightChartFill;this.context.beginPath();this.context.moveTo(coords[0],coords[1]);this.context.lineTo(coords[2],coords[3]);this.context.lineTo(coords[4],coords[5]);this.context.lineTo(coords[6],coords[7]);this.context.closePath();this.context.fill();this.context.stroke();this.context.lineWidth=pre_linewidth;}};this.on=function(type,func)
{if(type.substr(0,2)!=='on'){type='on'+type;}
if(typeof this[type]!=='function'){this[type]=func;}else{RGraph.addCustomEventListener(this,type,func);}
return this;};this.firstDrawFunc=function()
{};this.tooltipSubstitutions=function(opt)
{return{index:opt.index,dataset:0,sequentialIndex:opt.index,value:this.data[opt.index],values:[this.data[opt.index]]};};this.tooltipsFormattedCustom=function(specific,index)
{var color=properties.colors[specific.index];var label=RGraph.isString(properties.tooltipsFormattedKeyLabels[specific.index])?properties.tooltipsFormattedKeyLabels[specific.index]:'';if(!RGraph.isNull(properties.tooltipsFormattedKeyColors)&&typeof properties.tooltipsFormattedKeyColors==='object'&&typeof properties.tooltipsFormattedKeyColors[specific.index]==='string')
{color=properties.tooltipsFormattedKeyColors[specific.index];}
return{label:label,color:color};};this.positionTooltipStatic=function(args)
{var obj=args.object,e=args.event,tooltip=args.tooltip,index=args.index,canvasXY=RGraph.getCanvasXY(obj.canvas)
coords=this.coords[args.index];args.tooltip.style.left=(canvasXY[0]
+(((coords[2]-coords[0])/2)+coords[0])
-(tooltip.offsetWidth/2)
+obj.properties.tooltipsOffsetx)+'px';args.tooltip.style.top=(canvasXY[1]
+coords[1]
-tooltip.offsetHeight
+obj.properties.tooltipsOffsety
-10)+'px';if(parseFloat(args.tooltip.style.top)<0){args.tooltip.style.top=parseFloat(args.tooltip.style.top)+20+'px';}};RGraph.register(this);RGraph.parseObjectStyleConfig(this,conf.options);};