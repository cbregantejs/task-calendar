scheduler._temp_matrix_scope=function(){function e(){for(var e=scheduler.get_visible_events(),t=[],r=0;r<this.y_unit.length;r++)t[r]=[];t[s]||(t[s]=[]);for(var r=0;r<e.length;r++){for(var s=this.order[e[r][this.y_property]],a=0;this._trace_x[a+1]&&e[r].start_date>=this._trace_x[a+1];)a++;for(;this._trace_x[a]&&e[r].end_date>this._trace_x[a];)t[s][a]||(t[s][a]=[]),t[s][a].push(e[r]),a++}return t}function t(e,t,r){var s=0,a=r._step,n=r.round_position,i=0,d=t?e.end_date:e.start_date;d.valueOf()>scheduler._max_date.valueOf()&&(d=scheduler._max_date);
var l=d-scheduler._min_date_timeline;if(l>0){var _=scheduler._get_date_index(r,d);scheduler._ignores[_]&&(n=!0);for(var o=0;_>o;o++)s+=scheduler._cols[o];var c=scheduler.date.add(scheduler._min_date_timeline,scheduler.matrix[scheduler._mode].x_step*_,scheduler.matrix[scheduler._mode].x_unit);n?+d>+c&&t&&(i=scheduler._cols[_]):(l=d-c,r.first_hour||r.last_hour?(l-=r._start_correction,0>l&&(l=0),i=Math.round(l/a),i>scheduler._cols[_]&&(i=scheduler._cols[_])):i=Math.round(l/a))}return s+=t?0===l||n?i-14:i-12:i+1
}function r(e,t){var r=scheduler._get_date_index(this,e),s=this._trace_x[r];return t&&+e!=+this._trace_x[r]&&(s=this._trace_x[r+1]?this._trace_x[r+1]:scheduler.date.add(this._trace_x[r],this.x_step,this.x_unit)),new Date(s)}function s(e){var t="";if(e&&"cell"!=this.render){e.sort(this.sort||function(e,t){return e.start_date.valueOf()==t.start_date.valueOf()?e.id>t.id?1:-1:e.start_date>t.start_date?1:-1});for(var s=[],a=e.length,n=0;a>n;n++){var i=e[n];i._inner=!1;var d=this.round_position?r.apply(this,[i.start_date,!1]):i.start_date;
for(this.round_position?r.apply(this,[i.end_date,!0]):i.end_date;s.length;){var l=s[s.length-1];if(!(l.end_date.valueOf()<=d.valueOf()))break;s.splice(s.length-1,1)}for(var _=!1,o=0;o<s.length;o++){var c=s[o];if(c.end_date.valueOf()<=d.valueOf()){_=!0,i._sorder=c._sorder,s.splice(o,1),i._inner=!0;break}}if(s.length&&(s[s.length-1]._inner=!0),!_)if(s.length)if(s.length<=s[s.length-1]._sorder){if(s[s.length-1]._sorder)for(var h=0;h<s.length;h++){for(var u=!1,v=0;v<s.length;v++)if(s[v]._sorder==h){u=!0;
break}if(!u){i._sorder=h;break}}else i._sorder=0;i._inner=!0}else{for(var f=s[0]._sorder,g=1;g<s.length;g++)s[g]._sorder>f&&(f=s[g]._sorder);i._sorder=f+1,i._inner=!1}else i._sorder=0;s.push(i),s.length>(s.max_count||0)?(s.max_count=s.length,i._count=s.length):i._count=i._count?i._count:1}for(var p=0;p<e.length;p++)e[p]._count=s.max_count;for(var m=0;a>m;m++)t+=scheduler.render_timeline_event.call(this,e[m],!1)}return t}function a(t){var r="<table style='table-layout:fixed;' cellspacing='0' cellpadding='0'>",a=[];
if(scheduler._load_mode&&scheduler._load(),"cell"==this.render)a=e.call(this);else for(var n=scheduler.get_visible_events(),i=this.order,d=0;d<n.length;d++){var l=n[d],_=l[this.y_property],o=this.order[_];if(this.show_unassigned&&!_){for(var c in i)if(i.hasOwnProperty(c)){o=i[c],a[o]||(a[o]=[]);var h=scheduler._lame_copy({},l);h[this.y_property]=c,a[o].push(h)}}else a[o]||(a[o]=[]),a[o].push(l)}for(var u=0,v=0;v<scheduler._cols.length;v++)u+=scheduler._cols[v];var f=new Date,g=scheduler._cols.length-scheduler._ignores_detected;
f=(scheduler.date.add(f,this.x_step*g,this.x_unit)-f-(this._start_correction+this._end_correction)*g)/u,this._step=f,this._summ=u;var p=scheduler._colsS.heights=[];this._events_height={},this._section_height={};for(var v=0;v<this.y_unit.length;v++){var m=this._logic(this.render,this.y_unit[v],this);scheduler._merge(m,{height:this.dy}),this.section_autoheight&&(this.y_unit.length*m.height<t.offsetHeight&&(m.height=Math.max(m.height,Math.floor((t.offsetHeight-1)/this.y_unit.length))),this._section_height[this.y_unit[v].key]=m.height),scheduler._merge(m,{tr_className:"",style_height:"height:"+m.height+"px;",style_width:"width:"+(this.dx-1)+"px;",td_className:"dhx_matrix_scell"+(scheduler.templates[this.name+"_scaley_class"](this.y_unit[v].key,this.y_unit[v].label,this.y_unit[v])?" "+scheduler.templates[this.name+"_scaley_class"](this.y_unit[v].key,this.y_unit[v].label,this.y_unit[v]):""),td_content:scheduler.templates[this.name+"_scale_label"](this.y_unit[v].key,this.y_unit[v].label,this.y_unit[v]),summ_width:"width:"+u+"px;",table_className:""});
var y=s.call(this,a[v]);if(this.fit_events){var x=this._events_height[this.y_unit[v].key]||0;m.height=x>m.height?x:m.height,m.style_height="height:"+m.height+"px;",this._section_height[this.y_unit[v].key]=m.height}if(r+="<tr class='"+m.tr_className+"' style='"+m.style_height+"'><td class='"+m.td_className+"' style='"+m.style_width+" height:"+(m.height-1)+"px;'>"+m.td_content+"</td>","cell"==this.render)for(var d=0;d<scheduler._cols.length;d++)r+=scheduler._ignores[d]?"<td></td>":"<td class='dhx_matrix_cell "+scheduler.templates[this.name+"_cell_class"](a[v][d],this._trace_x[d],this.y_unit[v])+"' style='width:"+(scheduler._cols[d]-1)+"px'><div style='width:"+(scheduler._cols[d]-1)+"px'>"+scheduler.templates[this.name+"_cell_value"](a[v][d],this._trace_x[d],this.y_unit[v])+"</div></td>";
else{r+="<td><div style='"+m.summ_width+" "+m.style_height+" position:relative;' class='dhx_matrix_line'>",r+=y,r+="<table class='"+m.table_className+"' cellpadding='0' cellspacing='0' style='"+m.summ_width+" "+m.style_height+"' >";for(var d=0;d<scheduler._cols.length;d++)r+=scheduler._ignores[d]?"<td></td>":"<td class='dhx_matrix_cell "+scheduler.templates[this.name+"_cell_class"](a[v],this._trace_x[d],this.y_unit[v])+"' style='width:"+(scheduler._cols[d]-1)+"px'><div style='width:"+(scheduler._cols[d]-1)+"px'></div></td>";
r+="</table>",r+="</div></td>"}r+="</tr>"}r+="</table>",this._matrix=a,t.innerHTML=r,scheduler._rendered=[];for(var b=scheduler._obj.getElementsByTagName("DIV"),v=0;v<b.length;v++)b[v].getAttribute("event_id")&&scheduler._rendered.push(b[v]);this._scales={};for(var v=0;v<t.firstChild.rows.length;v++){p.push(t.firstChild.rows[v].offsetHeight);var w=this.y_unit[v].key,k=this._scales[w]=scheduler._isRender("cell")?t.firstChild.rows[v]:t.firstChild.rows[v].childNodes[1].getElementsByTagName("div")[0];
scheduler.callEvent("onScaleAdd",[k,w])}}function n(e){var t=scheduler.xy.scale_height,r=this._header_resized||scheduler.xy.scale_height;scheduler._cols=[],scheduler._colsS={height:0},this._trace_x=[];var s=scheduler._x-this.dx-scheduler.xy.scroll_width,a=[this.dx],n=scheduler._els.dhx_cal_header[0];n.style.width=a[0]+s+"px",scheduler._min_date_timeline=scheduler._min_date;var d=scheduler.config.preserve_scale_length,l=scheduler._min_date;scheduler._process_ignores(l,this.x_size,this.x_unit,this.x_step,d);
var _=this.x_size+(d?scheduler._ignores_detected:0);_!=this.x_size&&(scheduler._max_date=scheduler.date.add(scheduler._min_date,_*this.x_step,this.x_unit));for(var o=_-scheduler._ignores_detected,h=0;_>h;h++)this._trace_x[h]=new Date(l),l=scheduler.date.add(l,this.x_step,this.x_unit),scheduler._ignores[h]?(scheduler._cols[h]=0,o++):scheduler._cols[h]=Math.floor(s/(o-h)),s-=scheduler._cols[h],a[h+1]=a[h]+scheduler._cols[h];if(e.innerHTML="<div></div>",this.second_scale){for(var u=this.second_scale.x_unit,v=[this._trace_x[0]],f=[],g=[this.dx,this.dx],p=0,m=0;m<this._trace_x.length;m++){var y=this._trace_x[m],x=i(u,y,v[p]);
x&&(++p,v[p]=y,g[p+1]=g[p]);var b=p+1;f[p]=scheduler._cols[m]+(f[p]||0),g[b]+=scheduler._cols[m]}e.innerHTML="<div></div><div></div>";var w=e.firstChild;w.style.height=r+"px";var k=e.lastChild;k.style.position="relative";for(var E=0;E<v.length;E++){var D=v[E],N=scheduler.templates[this.name+"_second_scalex_class"](D),M=document.createElement("DIV");M.className="dhx_scale_bar dhx_second_scale_bar"+(N?" "+N:""),scheduler.set_xy(M,f[E]-1,r-3,g[E],0),M.innerHTML=scheduler.templates[this.name+"_second_scale_date"](D),w.appendChild(M)
}}scheduler.xy.scale_height=r,e=e.lastChild;for(var C=0;C<this._trace_x.length;C++)if(!scheduler._ignores[C]){l=this._trace_x[C],scheduler._render_x_header(C,a[C],l,e);var O=scheduler.templates[this.name+"_scalex_class"](l);O&&(e.lastChild.className+=" "+O)}scheduler.xy.scale_height=t;var L=this._trace_x;e.onclick=function(e){var t=c(e);t&&scheduler.callEvent("onXScaleClick",[t.x,L[t.x],e||event])},e.ondblclick=function(e){var t=c(e);t&&scheduler.callEvent("onXScaleDblClick",[t.x,L[t.x],e||event])
}}function i(e,t,r){switch(e){case"hour":return t.getHours()!=r.getHours()||i("day",t,r);case"day":return!(t.getDate()==r.getDate()&&t.getMonth()==r.getMonth()&&t.getFullYear()==r.getFullYear());case"week":return!(scheduler.date.getISOWeek(t)==scheduler.date.getISOWeek(r)&&t.getFullYear()==r.getFullYear());case"month":return!(t.getMonth()==r.getMonth()&&t.getFullYear()==r.getFullYear());case"year":return!(t.getFullYear()==r.getFullYear());default:return!1}}function d(e){if(e){scheduler.set_sizes(),scheduler._init_matrix_tooltip();
var t=scheduler._min_date;n.call(this,scheduler._els.dhx_cal_header[0]),a.call(this,scheduler._els.dhx_cal_data[0]),scheduler._min_date=t,scheduler._els.dhx_cal_date[0].innerHTML=scheduler.templates[this.name+"_date"](scheduler._min_date,scheduler._max_date),scheduler._mark_now&&scheduler._mark_now()}l()}function l(){scheduler._tooltip&&(scheduler._tooltip.style.display="none",scheduler._tooltip.date="")}function _(e,t,r){if("cell"==e.render){var s=t.x+"_"+t.y,a=e._matrix[t.y][t.x];if(!a)return l();
if(a.sort(function(e,t){return e.start_date>t.start_date?1:-1}),scheduler._tooltip){if(scheduler._tooltip.date==s)return;scheduler._tooltip.innerHTML=""}else{var n=scheduler._tooltip=document.createElement("DIV");n.className="dhx_year_tooltip",document.body.appendChild(n),n.onclick=scheduler._click.dhx_cal_data}for(var i="",d=0;d<a.length;d++){var _=a[d].color?"background-color:"+a[d].color+";":"",o=a[d].textColor?"color:"+a[d].textColor+";":"";i+="<div class='dhx_tooltip_line' event_id='"+a[d].id+"' style='"+_+o+"'>",i+="<div class='dhx_tooltip_date'>"+(a[d]._timed?scheduler.templates.event_date(a[d].start_date):"")+"</div>",i+="<div class='dhx_event_icon icon_details'>&nbsp;</div>",i+=scheduler.templates[e.name+"_tooltip"](a[d].start_date,a[d].end_date,a[d])+"</div>"
}scheduler._tooltip.style.display="",scheduler._tooltip.style.top="0px",scheduler._tooltip.style.left=document.body.offsetWidth-r.left-scheduler._tooltip.offsetWidth<0?r.left-scheduler._tooltip.offsetWidth+"px":r.left+t.src.offsetWidth+"px",scheduler._tooltip.date=s,scheduler._tooltip.innerHTML=i,scheduler._tooltip.style.top=document.body.offsetHeight-r.top-scheduler._tooltip.offsetHeight<0?r.top-scheduler._tooltip.offsetHeight+t.src.offsetHeight+"px":r.top+"px"}}function o(e){for(var t=e.parentNode.childNodes,r=0;r<t.length;r++)if(t[r]==e)return r;
return-1}function c(e){e=e||event;for(var t=e.target?e.target:e.srcElement;t&&"DIV"!=t.tagName;)t=t.parentNode;if(t&&"DIV"==t.tagName){var r=t.className.split(" ")[0];if("dhx_scale_bar"==r)return{x:o(t),y:-1,src:t,scale:!0}}}scheduler.matrix={},scheduler._merge=function(e,t){for(var r in t)"undefined"==typeof e[r]&&(e[r]=t[r])},scheduler.createTimelineView=function(e){scheduler._skin_init(),scheduler._merge(e,{section_autoheight:!0,name:"matrix",x:"time",y:"time",x_step:1,x_unit:"hour",y_unit:"day",y_step:1,x_start:0,x_size:24,y_start:0,y_size:7,render:"cell",dx:200,dy:50,event_dy:scheduler.xy.bar_height-5,event_min_dy:scheduler.xy.bar_height-5,resize_events:!0,fit_events:!0,show_unassigned:!1,second_scale:!1,round_position:!1,_logic:function(e,t,r){var s={};
return scheduler.checkEvent("onBeforeSectionRender")&&(s=scheduler.callEvent("onBeforeSectionRender",[e,t,r])),s}}),e._original_x_start=e.x_start,"day"!=e.x_unit&&(e.first_hour=e.last_hour=0),e._start_correction=e.first_hour?60*e.first_hour*60*1e3:0,e._end_correction=e.last_hour?60*(24-e.last_hour)*60*1e3:0,scheduler.checkEvent("onTimelineCreated")&&scheduler.callEvent("onTimelineCreated",[e]);var t=scheduler.render_data;scheduler.render_data=function(r,s){if(this._mode!=e.name)return t.apply(this,arguments);
if(s&&!e.show_unassigned&&"cell"!=e.render)for(var a=0;a<r.length;a++)this.clear_event(r[a]),this.render_timeline_event.call(this.matrix[this._mode],r[a],!0);else scheduler._renderMatrix.call(e,!0,!0)},scheduler.matrix[e.name]=e,scheduler.templates[e.name+"_cell_value"]=function(e){return e?e.length:""},scheduler.templates[e.name+"_cell_class"]=function(){return""},scheduler.templates[e.name+"_scalex_class"]=function(){return""},scheduler.templates[e.name+"_second_scalex_class"]=function(){return""
},scheduler.templates[e.name+"_scaley_class"]=function(){return""},scheduler.templates[e.name+"_scale_label"]=function(e,t){return t},scheduler.templates[e.name+"_tooltip"]=function(e,t,r){return r.text},scheduler.templates[e.name+"_date"]=function(e,t){return e.getDay()==t.getDay()&&864e5>t-e||+e==+scheduler.date.date_part(new Date(t))||+scheduler.date.add(e,1,"day")==+t&&0===t.getHours()&&0===t.getMinutes()?scheduler.templates.day_date(e):e.getDay()!=t.getDay()&&864e5>t-e?scheduler.templates.day_date(e)+" &ndash; "+scheduler.templates.day_date(t):scheduler.templates.week_date(e,t)
},scheduler.templates[e.name+"_scale_date"]=scheduler.date.date_to_str(e.x_date||scheduler.config.hour_date),scheduler.templates[e.name+"_second_scale_date"]=scheduler.date.date_to_str(e.second_scale&&e.second_scale.x_date?e.second_scale.x_date:scheduler.config.hour_date),scheduler.date["add_"+e.name]=function(t,r){var s=scheduler.date.add(t,(e.x_length||e.x_size)*r*e.x_step,e.x_unit);if("minute"==e.x_unit||"hour"==e.x_unit){var a=e.x_length||e.x_size,n="hour"==e.x_unit?60*e.x_step:e.x_step;if(n*a%1440)if(+scheduler.date.date_part(new Date(t))==+scheduler.date.date_part(new Date(s)))e.x_start+=r*a;
else{var i=1440/(a*n)-1,d=Math.round(i*a);e.x_start=r>0?e.x_start-d:d+e.x_start}}return s},scheduler.date[e.name+"_start"]=function(t){var r=scheduler.date[e.x_unit+"_start"]||scheduler.date.day_start,s=r.call(scheduler.date,t);return s=scheduler.date.add(s,e.x_step*e.x_start,e.x_unit)},scheduler.callEvent("onOptionsLoad",[e]),scheduler[e.name+"_view"]=function(){scheduler._renderMatrix.apply(e,arguments)};{var s=new Date;scheduler.date.add(s,e.x_step,e.x_unit).valueOf()-s.valueOf()}scheduler["mouse_"+e.name]=function(t){var s=this._drag_event;
this._drag_id&&(s=this.getEvent(this._drag_id),this._drag_event._dhx_changed=!0),t.x-=e.dx;var a,n,i=0,d=0;for(d;d<=this._cols.length-1;d++)if(n=this._cols[d],i+=n,i>t.x){a=(t.x-(i-n))/n,a=0>a?0:a;break}if(e.round_position){var l=1;scheduler.getState().drag_mode&&"move"!=scheduler.getState().drag_mode&&(l=.5),a>=l&&d++,a=0}if(0===d&&this._ignores[0])for(d=1,a=0;this._ignores[d];)d++;else if(d==this._cols.length&&this._ignores[d-1]){for(d=this._cols.length-1,a=0;this._ignores[d];)d--;d++}t.x=0,t.force_redraw=!0,t.custom=!0;
var _;if(d>=e._trace_x.length)_=scheduler.date.add(e._trace_x[e._trace_x.length-1],e.x_step,e.x_unit),e._end_correction&&(_=new Date(_-e._end_correction));else{var o=a*n*e._step+e._start_correction;_=new Date(+e._trace_x[d]+o)}if("move"==this._drag_mode&&this._drag_id&&this._drag_event){var s=this.getEvent(this._drag_id),c=this._drag_event;if(t._ignores=this._ignores_detected||e._start_correction||e._end_correction,c._move_delta||(c._move_delta=(s.start_date-_)/6e4,this.config.preserve_length&&t._ignores&&(c._move_delta=this._get_real_event_length(s.start_date,_,e),c._event_length=this._get_real_event_length(s.start_date,s.end_date,e))),this.config.preserve_length&&t._ignores){var h=(c._event_length,this._get_fictional_event_length(_,c._move_delta,e,!0));
_=new Date(_-h)}else _=scheduler.date.add(_,c._move_delta,"minute")}if("resize"==this._drag_mode&&s&&(this._drag_from_start&&+_>+s.end_date?this._drag_from_start=!1:!this._drag_from_start&&+_<+s.start_date&&(this._drag_from_start=!0),t.resize_from_start=this._drag_from_start),e.round_position)switch(this._drag_mode){case"move":this.config.preserve_length||(_=r.call(e,_,!1),"day"==e.x_unit&&(t.custom=!1));break;case"resize":this._drag_event&&((null===this._drag_event._resize_from_start||void 0===this._drag_event._resize_from_start)&&(this._drag_event._resize_from_start=t.resize_from_start),t.resize_from_start=this._drag_event._resize_from_start,_=r.call(e,_,!this._drag_event._resize_from_start))
}return this._resolve_timeline_section(e,t),t.section&&this._update_timeline_section({pos:t,event:this.getEvent(this._drag_id),view:e}),t.y=Math.round((_-this._min_date)/(6e4*this.config.time_step)),t.shift=this.config.time_step,t}},scheduler._get_timeline_event_height=function(e,t){var r=e[t.y_property],s=t.event_dy;return"full"==t.event_dy&&(s=t.section_autoheight?t._section_height[r]-6:t.dy-3),t.resize_events&&(s=Math.max(Math.floor(s/e._count),t.event_min_dy)),s},scheduler._get_timeline_event_y=function(e,t){var r=e,s=2+r*t+(r?2*r:0);
return scheduler.config.cascade_event_display&&(s=2+r*scheduler.config.cascade_event_margin+(r?2*r:0)),s},scheduler.render_timeline_event=function(e,r){var s=e[this.y_property];if(!s)return"";var a=e._sorder,n=t(e,!1,this),i=t(e,!0,this),d=scheduler._get_timeline_event_height(e,this),l=d-2;e._inner||"full"!=this.event_dy||(l=(l+2)*(e._count-a)-2);var _=scheduler._get_timeline_event_y(e._sorder,d),o=d+_+2;(!this._events_height[s]||this._events_height[s]<o)&&(this._events_height[s]=o);var c=scheduler.templates.event_class(e.start_date,e.end_date,e);
c="dhx_cal_event_line "+(c||"");var h=e.color?"background:"+e.color+";":"",u=e.textColor?"color:"+e.textColor+";":"",v=scheduler.templates.event_bar_text(e.start_date,e.end_date,e),f='<div event_id="'+e.id+'" class="'+c+'" style="'+h+u+"position:absolute; top:"+_+"px; height: "+l+"px; left:"+n+"px; width:"+Math.max(0,i-n)+"px;"+(e._text_style||"")+'">';if(scheduler.config.drag_resize&&!scheduler.config.readonly){var g="dhx_event_resize";f+="<div class='"+g+" "+g+"_start' style='height: "+l+"px;'></div><div class='"+g+" "+g+"_end' style='height: "+l+"px;'></div>"
}if(f+=v+"</div>",!r)return f;var p=document.createElement("DIV");p.innerHTML=f;var m=this.order[s],y=scheduler._els.dhx_cal_data[0].firstChild.rows[m].cells[1].firstChild;scheduler._rendered.push(p.firstChild),y.appendChild(p.firstChild)},scheduler._matrix_tooltip_handler=function(e){var t=scheduler.matrix[scheduler._mode];if(t&&"cell"==t.render){if(t){{var r=scheduler._locate_cell_timeline(e),e=e||event;e.target||e.srcElement}if(r)return _(t,r,getOffset(r.src))}l()}},scheduler._init_matrix_tooltip=function(){scheduler._detachDomEvent(scheduler._els.dhx_cal_data[0],"mouseover",scheduler._matrix_tooltip_handler),dhtmlxEvent(scheduler._els.dhx_cal_data[0],"mouseover",scheduler._matrix_tooltip_handler)
},scheduler._renderMatrix=function(e,t){if(t||(scheduler._els.dhx_cal_data[0].scrollTop=0),scheduler._min_date=scheduler.date[this.name+"_start"](scheduler._date),scheduler._max_date=scheduler.date.add(scheduler._min_date,this.x_size*this.x_step,this.x_unit),scheduler._table_view=!0,this.second_scale&&(e&&!this._header_resized&&(this._header_resized=scheduler.xy.scale_height,scheduler.xy.scale_height*=2,scheduler._els.dhx_cal_header[0].className+=" dhx_second_cal_header"),!e&&this._header_resized)){scheduler.xy.scale_height/=2,this._header_resized=!1;
var r=scheduler._els.dhx_cal_header[0];r.className=r.className.replace(/ dhx_second_cal_header/gi,"")}d.call(this,e)},scheduler._locate_cell_timeline=function(e){e=e||event;for(var t=e.target?e.target:e.srcElement,r={},s=scheduler.matrix[scheduler._mode],a=scheduler.getActionData(e),n=0;n<s._trace_x.length-1&&!(+a.date<s._trace_x[n+1]);n++);r.x=n,r.y=s.order[a.section];var i=scheduler._isRender("cell")?1:0;r.src=s._scales[a.section]?s._scales[a.section].getElementsByTagName("td")[n+i]:null;for(var d=!1;0===r.x&&"dhx_cal_data"!=t.className&&t.parentNode;){if("dhx_matrix_scell"==t.className.split(" ")[0]){d=!0;
break}t=t.parentNode}return d&&(r.x=-1,r.src=t,r.scale=!0),r};var h=scheduler._click.dhx_cal_data;scheduler._click.dhx_marked_timespan=scheduler._click.dhx_cal_data=function(e){var t=h.apply(this,arguments),r=scheduler.matrix[scheduler._mode];if(r){var s=scheduler._locate_cell_timeline(e);s&&(s.scale?scheduler.callEvent("onYScaleClick",[s.y,r.y_unit[s.y],e||event]):scheduler.callEvent("onCellClick",[s.x,s.y,r._trace_x[s.x],(r._matrix[s.y]||{})[s.x]||[],e||event]))}return t},scheduler.dblclick_dhx_matrix_cell=function(e){var t=scheduler.matrix[scheduler._mode];
if(t){var r=scheduler._locate_cell_timeline(e);r&&(r.scale?scheduler.callEvent("onYScaleDblClick",[r.y,t.y_unit[r.y],e||event]):scheduler.callEvent("onCellDblClick",[r.x,r.y,t._trace_x[r.x],(t._matrix[r.y]||{})[r.x]||[],e||event]))}};var u=scheduler.dblclick_dhx_marked_timespan||function(){};scheduler.dblclick_dhx_marked_timespan=function(e){var t=scheduler.matrix[scheduler._mode];return t?scheduler.dblclick_dhx_matrix_cell(e):u.apply(this,arguments)},scheduler.dblclick_dhx_matrix_scell=function(e){return scheduler.dblclick_dhx_matrix_cell(e)
},scheduler._isRender=function(e){return scheduler.matrix[scheduler._mode]&&scheduler.matrix[scheduler._mode].render==e},scheduler.attachEvent("onCellDblClick",function(e,t,r,s,a){if(!this.config.readonly&&("dblclick"!=a.type||this.config.dblclick_create)){var n=scheduler.matrix[scheduler._mode],i={};i.start_date=n._trace_x[e],i.end_date=n._trace_x[e+1]?n._trace_x[e+1]:scheduler.date.add(n._trace_x[e],n.x_step,n.x_unit),n._start_correction&&(i.start_date=new Date(1*i.start_date+n._start_correction)),n._end_correction&&(i.end_date=new Date(i.end_date-n._end_correction)),i[n.y_property]=n.y_unit[t].key,scheduler.addEventNow(i,null,a)
}}),scheduler.attachEvent("onBeforeDrag",function(){return!scheduler._isRender("cell")}),scheduler.attachEvent("onEventChanged",function(e,t){t._timed=this.isOneDayEvent(t)});var v=scheduler._render_marked_timespan;scheduler._render_marked_timespan=function(e,r,s,a,n){if(!scheduler.config.display_marked_timespans)return[];if(scheduler.matrix&&scheduler.matrix[scheduler._mode]){if(scheduler._isRender("cell"))return;var i=scheduler._lame_copy({},scheduler.matrix[scheduler._mode]);i.round_position=!1;
var d=[],l=[],_=[],o=e.sections?e.sections.units||e.sections.timeline:null;if(s)_=[r],l=[s];else{var c=i.order;if(o)c.hasOwnProperty(o)&&(l.push(o),_.push(i._scales[o]));else for(var h in c)c.hasOwnProperty(h)&&(l.push(h),_.push(i._scales[h]))}var a=a?new Date(a):scheduler._min_date,n=n?new Date(n):scheduler._max_date,u=[];if(e.days>6){var f=new Date(e.days);scheduler.date.date_part(new Date(a))<=+f&&+n>=+f&&u.push(f)}else u.push.apply(u,scheduler._get_dates_by_index(e.days));for(var g=e.zones,p=scheduler._get_css_classes_by_config(e),m=0;m<l.length;m++){r=_[m],s=l[m];
for(var y=0;y<u.length;y++)for(var x=u[y],b=0;b<g.length;b+=2){var w=g[b],k=g[b+1],E=new Date(+x+60*w*1e3),D=new Date(+x+60*k*1e3);if(D>a&&n>E){var N=scheduler._get_block_by_config(e);N.className=p;var M=t({start_date:E},!1,i)-1,C=t({start_date:D},!1,i)-1,O=Math.max(1,C-M-1),L=i._section_height[s]-1;N.style.cssText="height: "+L+"px; left: "+M+"px; width: "+O+"px; top: 0;",r.insertBefore(N,r.firstChild),d.push(N)}}}return d}return v.apply(scheduler,[e,r,s])};var f=scheduler._append_mark_now;scheduler._append_mark_now=function(e,t){if(scheduler.matrix&&scheduler.matrix[scheduler._mode]){var r=scheduler._currentDate(),s=scheduler._get_zone_minutes(r),a={days:+scheduler.date.date_part(r),zones:[s,s+1],css:"dhx_matrix_now_time",type:"dhx_now_time"};
return scheduler._render_marked_timespan(a)}return f.apply(scheduler,[e,t])},scheduler.attachEvent("onScaleAdd",function(e,t){var r=scheduler._marked_timespans;if(r&&scheduler.matrix&&scheduler.matrix[scheduler._mode])for(var s=scheduler._mode,a=scheduler._min_date,n=scheduler._max_date,i=r.global,d=scheduler.date.date_part(new Date(a));n>d;d=scheduler.date.add(d,1,"day")){var l=+d,_=d.getDay(),o=[],c=i[l]||i[_];if(o.push.apply(o,scheduler._get_configs_to_render(c)),r[s]&&r[s][t]){var h=[],u=scheduler._get_types_to_render(r[s][t][_],r[s][t][l]);
h.push.apply(h,scheduler._get_configs_to_render(u)),h.length&&(o=h)}for(var v=0;v<o.length;v++){var f=o[v],g=f.days;7>g?(g=l,scheduler._render_marked_timespan(f,e,t,d,scheduler.date.add(d,1,"day")),g=_):scheduler._render_marked_timespan(f,e,t,d,scheduler.date.add(d,1,"day"))}}}),scheduler._resolve_timeline_section=function(e,t){var r=0,s=0;for(r;r<this._colsS.heights.length&&(s+=this._colsS.heights[r],!(s>t.y));r++);e.y_unit[r]||(r=e.y_unit.length-1),this._drag_event&&!this._drag_event._orig_section&&(this._drag_event._orig_section=e.y_unit[r].key),t.fields={},r>=0&&e.y_unit[r]&&(t.section=t.fields[e.y_property]=e.y_unit[r].key)
},scheduler._update_timeline_section=function(e){var t=e.view,r=e.event,s=e.pos;if(r){if(r[t.y_property]!=s.section){var a=this._get_timeline_event_height(r,t);r._sorder=this._get_dnd_order(r._sorder,a,t._section_height[s.section])}r[t.y_property]=s.section}},scheduler._get_date_index=function(e,t){for(var r=0,s=e._trace_x;r<s.length-1&&+t>=+s[r+1];)r++;return r},scheduler.attachEvent("onBeforeTodayDisplayed",function(){for(var e in scheduler.matrix){var t=scheduler.matrix[e];t.x_start=t._original_x_start
}return!0}),scheduler.attachEvent("onOptionsLoad",function(){for(var e in scheduler.matrix){var t=scheduler.matrix[e];t.order={},scheduler.callEvent("onOptionsLoadStart",[]);for(var e=0;e<t.y_unit.length;e++)t.order[t.y_unit[e].key]=e;scheduler.callEvent("onOptionsLoadFinal",[]),scheduler._date&&t.name==scheduler._mode&&scheduler.setCurrentView(scheduler._date,scheduler._mode)}}),scheduler.attachEvent("onSchedulerResize",function(){if(scheduler.matrix[this._mode]){var e=scheduler.matrix[this._mode];
return scheduler._renderMatrix.call(e,!0,!0),!1}return!0}),scheduler.attachEvent("onBeforeDrag",function(e,t,r){if("resize"==t){var s=r.target||r.srcElement;scheduler._drag_from_start=(s.className||"").indexOf("dhx_event_resize_end")<0?!0:!1}return!0})},scheduler._temp_matrix_scope();