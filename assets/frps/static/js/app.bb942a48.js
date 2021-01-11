(function(t){function e(e){for(var a,s,i=e[0],l=e[1],c=e[2],u=0,f=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],a=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var a={},o={app:0},n=[];function s(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=a,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(r,a,function(e){return t[e]}.bind(null,a));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=l;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"0d60":function(t,e,r){"use strict";r("a5c3")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),o=r("5c96"),n=r("b2d6"),s=r.n(n),i=r("4897"),l=r.n(i),c=(r("0fae"),r("8577"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("header",{staticClass:"grid-content header-color"},[r("el-row",[r("a",{staticClass:"brand",attrs:{href:"#"}},[t._v("frp")])])],1),r("section",[r("el-row",[r("el-col",{attrs:{id:"side-nav",xs:24,md:4}},[r("el-menu",{attrs:{"default-active":"1",mode:"vertical",theme:"light",router:""},on:{select:t.handleSelect}},[r("el-menu-item",{attrs:{index:"/"}},[t._v("Overview")]),r("el-submenu",{attrs:{index:"/proxies"}},[r("template",{slot:"title"},[t._v("Proxies")]),r("el-menu-item",{attrs:{index:"/proxies/tcp"}},[t._v("TCP")]),r("el-menu-item",{attrs:{index:"/proxies/udp"}},[t._v("UDP")]),r("el-menu-item",{attrs:{index:"/proxies/http"}},[t._v("HTTP")]),r("el-menu-item",{attrs:{index:"/proxies/https"}},[t._v("HTTPS")]),r("el-menu-item",{attrs:{index:"/proxies/stcp"}},[t._v("STCP")])],2),r("el-menu-item",{attrs:{index:""}},[t._v("Help")])],1)],1),r("el-col",{attrs:{xs:24,md:20}},[r("div",{attrs:{id:"content"}},[t.serverInfo?r("router-view"):t._e()],1)])],1)],1)])}),p=[],u=(r("96cf"),r("1da1")),f={computed:{serverInfo:function(){return this.$store.state.serverInfo}},created:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$store.dispatch("fetchServerInfo");case 1:case"end":return e.stop()}}),e)})))()},methods:{handleSelect:function(t,e){""===t&&window.open("https://github.com/fatedier/frp")}}},m=f,_=(r("034f"),r("2877")),d=Object(_["a"])(m,c,p,!1,null,null,null),h=d.exports,b=r("8c4f"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-row",[r("el-col",{attrs:{md:12}},[r("div",{staticClass:"source"},[r("el-form",{staticClass:"server_info",attrs:{"label-position":"left"}},[r("el-form-item",{attrs:{label:"Version"}},[r("span",[t._v(t._s(t.version))])]),r("el-form-item",{attrs:{label:"BindPort"}},[r("span",[t._v(t._s(t.bind_port))])]),r("el-form-item",{attrs:{label:"BindUdpPort"}},[r("span",[t._v(t._s(t.bind_udp_port))])]),r("el-form-item",{attrs:{label:"Http Port"}},[r("span",[t._v(t._s(t.vhost_http_port))])]),r("el-form-item",{attrs:{label:"Https Port"}},[r("span",[t._v(t._s(t.vhost_https_port))])]),r("el-form-item",{attrs:{label:"Subdomain Host"}},[r("span",[t._v(t._s(t.subdomain_host))])]),r("el-form-item",{attrs:{label:"Max PoolCount"}},[r("span",[t._v(t._s(t.max_pool_count))])]),r("el-form-item",{attrs:{label:"Max Ports Per Client"}},[r("span",[t._v(t._s(t.max_ports_per_client))])]),r("el-form-item",{attrs:{label:"HeartBeat Timeout"}},[r("span",[t._v(t._s(t.heart_beat_timeout))])]),r("el-form-item",{attrs:{label:"Client Counts"}},[r("span",[t._v(t._s(t.client_counts))])]),r("el-form-item",{attrs:{label:"Current Connections"}},[r("span",[t._v(t._s(t.cur_conns))])]),r("el-form-item",{attrs:{label:"Proxy Counts"}},[r("span",[t._v(t._s(t.proxy_counts))])])],1)],1)]),r("el-col",{attrs:{md:12}},[r("div",{staticStyle:{width:"400px",height:"250px","margin-bottom":"30px"},attrs:{id:"traffic"}}),r("div",{staticStyle:{width:"400px",height:"250px"},attrs:{id:"proxies"}})])],1)],1)},y=[],x=(r("b0c0"),r("b85c")),w=r("3cd3"),g=r.n(w),O=r("3eba"),S=r.n(O);r("817d"),r("94b1"),r("c037"),r("007d"),r("627c");function I(t,e,r){var a=S.a.init(document.getElementById(t),"macarons");a.showLoading();var o={title:{text:"Network Traffic",subtext:"today",x:"center"},tooltip:{trigger:"item",formatter:function(t){return g.a.fileSize(t.data.value)+" ("+t.percent+"%)"}},series:[{type:"pie",radius:"55%",center:["50%","60%"],data:[{value:e,name:"Traffic In"},{value:r,name:"Traffic Out"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};a.setOption(o),a.hideLoading()}function T(t,e){null==e.proxy_type_count.tcp&&(e.proxy_type_count.tcp=0),null==e.proxy_type_count.udp&&(e.proxy_type_count.udp=0),null==e.proxy_type_count.http&&(e.proxy_type_count.http=0),null==e.proxy_type_count.https&&(e.proxy_type_count.https=0),null==e.proxy_type_count.stcp&&(e.proxy_type_count.stcp=0),null==e.proxy_type_count.xtcp&&(e.proxy_type_count.xtcp=0);var r=S.a.init(document.getElementById(t),"macarons");r.showLoading();var a={title:{text:"Proxies",subtext:"now",x:"center"},tooltip:{trigger:"item",formatter:function(t){return t.data.value}},series:[{type:"pie",radius:"55%",center:["50%","60%"],data:[{value:e.proxy_type_count.tcp,name:"TCP"},{value:e.proxy_type_count.udp,name:"UDP"},{value:e.proxy_type_count.http,name:"HTTP"},{value:e.proxy_type_count.https,name:"HTTPS"},{value:e.proxy_type_count.stcp,name:"STCP"},{value:e.proxy_type_count.xtcp,name:"XTCP"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};r.setOption(a),r.hideLoading()}function j(t,e,r){var a={width:"600px",height:"400px"},o=S.a.init(document.getElementById(t),"macarons",a);o.showLoading(),e=e.reverse(),r=r.reverse();var n=new Date;n=new Date(n.getFullYear(),n.getMonth(),n.getDate()-6);for(var s=[],i=0;i<7;i++)s.push(n.getFullYear()+"-"+(n.getMonth()+1)+"-"+n.getDate()),n=new Date(n.getFullYear(),n.getMonth(),n.getDate()+1);var l={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(t){var e="";t.length>0&&(e+=t[0].name+"<br/>");var r,a=Object(x["a"])(t);try{for(a.s();!(r=a.n()).done;){var o=r.value,n='<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:'+o.color+'"></span>';e+=n+o.seriesName+": "+g.a.fileSize(o.value)+"<br/>"}}catch(s){a.e(s)}finally{a.f()}return e}},legend:{data:["Traffic In","Traffic Out"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:s}],yAxis:[{type:"value",axisLabel:{formatter:function(t){return g.a.fileSize(t)}}}],series:[{name:"Traffic In",type:"bar",data:e},{name:"Traffic Out",type:"bar",data:r}]};o.setOption(l),o.hideLoading()}var k={data:function(){return{version:"",bind_port:"",bind_udp_port:"",vhost_http_port:"",vhost_https_port:"",subdomain_host:"",max_pool_count:"",max_ports_per_client:"",heart_beat_timeout:"",client_counts:"",cur_conns:"",proxy_counts:""}},computed:{serverInfo:function(){return this.$store.state.serverInfo}},mounted:function(){this.initData()},methods:{initData:function(){console.log(!!this.serverInfo,this.serverInfo),this.serverInfo&&(this.version=this.serverInfo.version,this.bind_port=this.serverInfo.bind_port,this.bind_udp_port=this.serverInfo.bind_udp_port,0===this.bind_udp_port&&(this.bind_udp_port="disable"),this.vhost_http_port=this.serverInfo.vhost_http_port,0===this.vhost_http_port&&(this.vhost_http_port="disable"),this.vhost_https_port=this.serverInfo.vhost_https_port,0===this.vhost_https_port&&(this.vhost_https_port="disable"),this.subdomain_host=this.serverInfo.subdomain_host,this.max_pool_count=this.serverInfo.max_pool_count,this.max_ports_per_client=this.serverInfo.max_ports_per_client,0===this.max_ports_per_client&&(this.max_ports_per_client="no limit"),this.heart_beat_timeout=this.serverInfo.heart_beat_timeout,this.client_counts=this.serverInfo.client_counts,this.cur_conns=this.serverInfo.cur_conns,this.proxy_counts=0,null!=this.serverInfo.proxy_type_count&&(null!=this.serverInfo.proxy_type_count.tcp&&(this.proxy_counts+=this.serverInfo.proxy_type_count.tcp),null!=this.serverInfo.proxy_type_count.udp&&(this.proxy_counts+=this.serverInfo.proxy_type_count.udp),null!=this.serverInfo.proxy_type_count.http&&(this.proxy_counts+=this.serverInfo.proxy_type_count.http),null!=this.serverInfo.proxy_type_count.https&&(this.proxy_counts+=this.serverInfo.proxy_type_count.https),null!=this.serverInfo.proxy_type_count.stcp&&(this.proxy_counts+=this.serverInfo.proxy_type_count.stcp),null!=this.serverInfo.proxy_type_count.xtcp&&(this.proxy_counts+=this.serverInfo.proxy_type_count.xtcp)),I("traffic",this.serverInfo.total_traffic_in,this.serverInfo.total_traffic_out),T("proxies",this.serverInfo))}}},C=k,P=(r("0d60"),Object(_["a"])(C,v,y,!1,null,null,null)),D=P.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.proxies,"default-sort":{prop:"name",order:"ascending"}}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-popover",{staticStyle:{"margin-left":"0px"},attrs:{placement:"right",width:"600",trigger:"click"}},[r("my-traffic-chart",{attrs:{"proxy-name":e.row.name}}),r("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{slot:"reference",type:"primary",size:"small",icon:"view",name:e.row.name},slot:"reference"},[t._v(" Traffic Statistics ")])],1),r("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[r("el-form-item",{attrs:{label:"Name"}},[r("span",[t._v(t._s(e.row.name))])]),r("el-form-item",{attrs:{label:"Type"}},[r("span",[t._v(t._s(e.row.type))])]),r("el-form-item",{attrs:{label:"Addr"}},[r("span",[t._v(t._s(e.row.addr))])]),r("el-form-item",{attrs:{label:"Encryption"}},[r("span",[t._v(t._s(e.row.encryption))])]),r("el-form-item",{attrs:{label:"Compression"}},[r("span",[t._v(t._s(e.row.compression))])]),r("el-form-item",{attrs:{label:"Last Start"}},[r("span",[t._v(t._s(e.row.last_start_time))])]),r("el-form-item",{attrs:{label:"Last Close"}},[r("span",[t._v(t._s(e.row.last_close_time))])])],1)]}}])}),r("el-table-column",{attrs:{label:"Name",prop:"name",sortable:""}}),r("el-table-column",{attrs:{label:"Port",prop:"port",sortable:""}}),r("el-table-column",{attrs:{label:"Connections",prop:"conns",sortable:""}}),r("el-table-column",{attrs:{label:"Traffic In",prop:"traffic_in",formatter:t.formatTrafficIn,sortable:""}}),r("el-table-column",{attrs:{label:"Traffic Out",prop:"traffic_out",formatter:t.formatTrafficOut,sortable:""}}),r("el-table-column",{attrs:{label:"status",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return["online"===e.row.status?r("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.status))]):r("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.row.status))])]}}])})],1)],1)},E=[],N=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{width:"600px",height:"400px"},attrs:{id:t.proxyName}})},R=[],z={props:{proxyName:{type:String,required:!0}},mounted:function(){this.initData()},methods:{initData:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$fetch("traffic/".concat(t.proxyName));case 2:if(r=e.sent,r){e.next=5;break}return e.abrupt("return");case 5:j(t.proxyName,r.traffic_in,r.traffic_out);case 6:case"end":return e.stop()}}),e)})))()}}},L=z,M=Object(_["a"])(L,N,R,!1,null,null,null),H=M.exports,B=r("262e"),F=r("2caf"),A=r("d4ec"),U=function t(e){Object(A["a"])(this,t),this.name=e.name,null!=e.conf?(this.encryption=e.conf.use_encryption,this.compression=e.conf.use_compression):(this.encryption="",this.compression=""),this.conns=e.cur_conns,this.traffic_in=e.today_traffic_in,this.traffic_out=e.today_traffic_out,this.last_start_time=e.last_start_time,this.last_close_time=e.last_close_time,this.status=e.status},V=function(t){Object(B["a"])(r,t);var e=Object(F["a"])(r);function r(t){var a;return Object(A["a"])(this,r),a=e.call(this,t),a.type="tcp",null!=t.conf?(a.addr=":"+t.conf.remote_port,a.port=t.conf.remote_port):(a.addr="",a.port=""),a}return r}(U),X=function(t){Object(B["a"])(r,t);var e=Object(F["a"])(r);function r(t){var a;return Object(A["a"])(this,r),a=e.call(this,t),a.type="udp",null!=t.conf?(a.addr=":"+t.conf.remote_port,a.port=t.conf.remote_port):(a.addr="",a.port=""),a}return r}(U),Y=function(t){Object(B["a"])(r,t);var e=Object(F["a"])(r);function r(t,a,o){var n;return Object(A["a"])(this,r),n=e.call(this,t),n.type="http",n.port=a,null!=t.conf?(n.custom_domains=t.conf.custom_domains,n.host_header_rewrite=t.conf.host_header_rewrite,n.locations=t.conf.locations,""!==t.conf.sub_domain?n.subdomain=t.conf.sub_domain+"."+o:n.subdomain=""):(n.custom_domains="",n.host_header_rewrite="",n.subdomain="",n.locations=""),n}return r}(U),J=function(t){Object(B["a"])(r,t);var e=Object(F["a"])(r);function r(t,a,o){var n;return Object(A["a"])(this,r),n=e.call(this,t),n.type="https",n.port=a,null!=t.conf?(n.custom_domains=t.conf.custom_domains,""!==t.conf.sub_domain?n.subdomain=t.conf.sub_domain+"."+o:n.subdomain=""):(n.custom_domains="",n.subdomain=""),n}return r}(U),q=function(t){Object(B["a"])(r,t);var e=Object(F["a"])(r);function r(t){var a;return Object(A["a"])(this,r),a=e.call(this,t),a.type="stcp",a}return r}(U),G={components:{"my-traffic-chart":H},data:function(){return{proxies:[]}},mounted:function(){this.initData()},methods:{formatTrafficIn:function(t,e){return g.a.fileSize(t.traffic_in)},formatTrafficOut:function(t,e){return g.a.fileSize(t.traffic_out)},initData:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r,a,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$fetch("proxy/tcp");case 2:if(r=e.sent,r){e.next=5;break}return e.abrupt("return");case 5:t.proxies=[],a=Object(x["a"])(r.proxies);try{for(a.s();!(o=a.n()).done;)n=o.value,t.proxies.push(new V(n))}catch(s){a.e(s)}finally{a.f()}case 8:case"end":return e.stop()}}),e)})))()}}},K=G,Q=Object(_["a"])(K,$,E,!1,null,null,null),W=Q.exports,Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.proxies,"default-sort":{prop:"name",order:"ascending"}}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-popover",{ref:"popover4",staticStyle:{"margin-left":"0px"},attrs:{placement:"right",width:"600",trigger:"click"}},[r("my-traffic-chart",{attrs:{"proxy-name":e.row.name}})],1),r("el-button",{directives:[{name:"popover",rawName:"v-popover:popover4",arg:"popover4"}],staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",size:"small",icon:"view"}},[t._v("Traffic Statistics")]),r("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[r("el-form-item",{attrs:{label:"Name"}},[r("span",[t._v(t._s(e.row.name))])]),r("el-form-item",{attrs:{label:"Type"}},[r("span",[t._v(t._s(e.row.type))])]),r("el-form-item",{attrs:{label:"Addr"}},[r("span",[t._v(t._s(e.row.addr))])]),r("el-form-item",{attrs:{label:"Encryption"}},[r("span",[t._v(t._s(e.row.encryption))])]),r("el-form-item",{attrs:{label:"Compression"}},[r("span",[t._v(t._s(e.row.compression))])]),r("el-form-item",{attrs:{label:"Last Start"}},[r("span",[t._v(t._s(e.row.last_start_time))])]),r("el-form-item",{attrs:{label:"Last Close"}},[r("span",[t._v(t._s(e.row.last_close_time))])])],1)]}}])}),r("el-table-column",{attrs:{label:"Name",prop:"name",sortable:""}}),r("el-table-column",{attrs:{label:"Port",prop:"port",sortable:""}}),r("el-table-column",{attrs:{label:"Connections",prop:"conns",sortable:""}}),r("el-table-column",{attrs:{label:"Traffic In",prop:"traffic_in",formatter:t.formatTrafficIn,sortable:""}}),r("el-table-column",{attrs:{label:"Traffic Out",prop:"traffic_out",formatter:t.formatTrafficOut,sortable:""}}),r("el-table-column",{attrs:{label:"status",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return["online"===e.row.status?r("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.status))]):r("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.row.status))])]}}])})],1)],1)},tt=[],et={components:{"my-traffic-chart":H},data:function(){return{proxies:[]}},mounted:function(){this.initData()},methods:{formatTrafficIn:function(t,e){return g.a.fileSize(t.traffic_in)},formatTrafficOut:function(t,e){return g.a.fileSize(t.traffic_out)},initData:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r,a,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$fetch("proxy/udp");case 2:if(r=e.sent,r){e.next=5;break}return e.abrupt("return");case 5:t.proxies=[],a=Object(x["a"])(r.proxies);try{for(a.s();!(o=a.n()).done;)n=o.value,t.proxies.push(new X(n))}catch(s){a.e(s)}finally{a.f()}case 8:case"end":return e.stop()}}),e)})))()}}},rt=et,at=Object(_["a"])(rt,Z,tt,!1,null,null,null),ot=at.exports,nt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.proxies,"default-sort":{prop:"name",order:"ascending"}}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-popover",{ref:"popover4",staticStyle:{"margin-left":"0px"},attrs:{placement:"right",width:"600",trigger:"click"}},[r("my-traffic-chart",{attrs:{"proxy-name":e.row.name}})],1),r("el-button",{directives:[{name:"popover",rawName:"v-popover:popover4",arg:"popover4"}],staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",size:"small",icon:"view"}},[t._v("Traffic Statistics")]),r("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[r("el-form-item",{attrs:{label:"Name"}},[r("span",[t._v(t._s(e.row.name))])]),r("el-form-item",{attrs:{label:"Type"}},[r("span",[t._v(t._s(e.row.type))])]),r("el-form-item",{attrs:{label:"Domains"}},[r("span",[t._v(t._s(e.row.custom_domains))])]),r("el-form-item",{attrs:{label:"SubDomain"}},[r("span",[t._v(t._s(e.row.subdomain))])]),r("el-form-item",{attrs:{label:"locations"}},[r("span",[t._v(t._s(e.row.locations))])]),r("el-form-item",{attrs:{label:"HostRewrite"}},[r("span",[t._v(t._s(e.row.host_header_rewrite))])]),r("el-form-item",{attrs:{label:"Encryption"}},[r("span",[t._v(t._s(e.row.encryption))])]),r("el-form-item",{attrs:{label:"Compression"}},[r("span",[t._v(t._s(e.row.compression))])]),r("el-form-item",{attrs:{label:"Last Start"}},[r("span",[t._v(t._s(e.row.last_start_time))])]),r("el-form-item",{attrs:{label:"Last Close"}},[r("span",[t._v(t._s(e.row.last_close_time))])])],1)]}}])}),r("el-table-column",{attrs:{label:"Name",prop:"name",sortable:""}}),r("el-table-column",{attrs:{label:"Port",prop:"port",sortable:""}}),r("el-table-column",{attrs:{label:"Connections",prop:"conns",sortable:""}}),r("el-table-column",{attrs:{label:"Traffic In",prop:"traffic_in",formatter:t.formatTrafficIn,sortable:""}}),r("el-table-column",{attrs:{label:"Traffic Out",prop:"traffic_out",formatter:t.formatTrafficOut,sortable:""}}),r("el-table-column",{attrs:{label:"status",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return["online"===e.row.status?r("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.status))]):r("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.row.status))])]}}])})],1)],1)},st=[],it={components:{"my-traffic-chart":H},data:function(){return{proxies:[],vhost_http_port:"",subdomain_host:""}},computed:{serverInfo:function(){return this.$store.state.serverInfo}},mounted:function(){this.initData()},methods:{formatTrafficIn:function(t,e){return g.a.fileSize(t.traffic_in)},formatTrafficOut:function(t,e){return g.a.fileSize(t.traffic_out)},initData:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r,a,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.serverInfo){e.next=2;break}return e.abrupt("return");case 2:if(t.vhost_http_port=t.serverInfo.vhost_http_port,t.subdomain_host=t.serverInfo.subdomain_host,null!=t.vhost_http_port&&0!==t.vhost_http_port){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,t.$fetch("proxy/http");case 8:if(r=e.sent,r){e.next=11;break}return e.abrupt("return");case 11:t.proxies=[],a=Object(x["a"])(r.proxies);try{for(a.s();!(o=a.n()).done;)n=o.value,t.proxies.push(new Y(n,t.vhost_http_port,t.subdomain_host))}catch(s){a.e(s)}finally{a.f()}case 14:case"end":return e.stop()}}),e)})))()}}},lt=it,ct=Object(_["a"])(lt,nt,st,!1,null,null,null),pt=ct.exports,ut=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.proxies,"default-sort":{prop:"name",order:"ascending"}}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-popover",{ref:"popover4",staticStyle:{"margin-left":"0px"},attrs:{placement:"right",width:"600",trigger:"click"}},[r("my-traffic-chart",{attrs:{"proxy-name":e.row.name}})],1),r("el-button",{directives:[{name:"popover",rawName:"v-popover:popover4",arg:"popover4"}],staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",size:"small",icon:"view"}},[t._v("Traffic Statistics")]),r("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[r("el-form-item",{attrs:{label:"Name"}},[r("span",[t._v(t._s(e.row.name))])]),r("el-form-item",{attrs:{label:"Type"}},[r("span",[t._v(t._s(e.row.type))])]),r("el-form-item",{attrs:{label:"Domains"}},[r("span",[t._v(t._s(e.row.custom_domains))])]),r("el-form-item",{attrs:{label:"SubDomain"}},[r("span",[t._v(t._s(e.row.subdomain))])]),r("el-form-item",{attrs:{label:"Encryption"}},[r("span",[t._v(t._s(e.row.encryption))])]),r("el-form-item",{attrs:{label:"Compression"}},[r("span",[t._v(t._s(e.row.compression))])]),r("el-form-item",{attrs:{label:"Last Start"}},[r("span",[t._v(t._s(e.row.last_start_time))])]),r("el-form-item",{attrs:{label:"Last Close"}},[r("span",[t._v(t._s(e.row.last_close_time))])])],1)]}}])}),r("el-table-column",{attrs:{label:"Name",prop:"name",sortable:""}}),r("el-table-column",{attrs:{label:"Port",prop:"port",sortable:""}}),r("el-table-column",{attrs:{label:"Connections",prop:"conns",sortable:""}}),r("el-table-column",{attrs:{label:"Traffic In",prop:"traffic_in",formatter:t.formatTrafficIn,sortable:""}}),r("el-table-column",{attrs:{label:"Traffic Out",prop:"traffic_out",formatter:t.formatTrafficOut,sortable:""}}),r("el-table-column",{attrs:{label:"status",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return["online"===e.row.status?r("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.status))]):r("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.row.status))])]}}])})],1)],1)},ft=[],mt={components:{"my-traffic-chart":H},data:function(){return{proxies:[],vhost_https_port:"",subdomain_host:""}},computed:{serverInfo:function(){return this.$store.state.serverInfo}},mounted:function(){this.initData()},methods:{formatTrafficIn:function(t,e){return g.a.fileSize(t.traffic_in)},formatTrafficOut:function(t,e){return g.a.fileSize(t.traffic_out)},initData:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r,a,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.serverInfo){e.next=2;break}return e.abrupt("return");case 2:if(t.vhost_https_port=t.serverInfo.vhost_https_port,t.subdomain_host=t.serverInfo.subdomain_host,null!=t.vhost_https_port&&0!==t.vhost_https_port){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,t.$fetch("proxy/https");case 8:if(r=e.sent,r){e.next=11;break}return e.abrupt("return");case 11:t.proxies=[],a=Object(x["a"])(r.proxies);try{for(a.s();!(o=a.n()).done;)n=o.value,t.proxies.push(new J(n,t.vhost_https_port,t.subdomain_host))}catch(s){a.e(s)}finally{a.f()}case 14:case"end":return e.stop()}}),e)})))()}}},_t=mt,dt=Object(_["a"])(_t,ut,ft,!1,null,null,null),ht=dt.exports,bt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-table",{staticStyle:{width:"100%"},attrs:{data:t.proxies,"default-sort":{prop:"name",order:"ascending"}}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-popover",{ref:"popover4",staticStyle:{"margin-left":"0px"},attrs:{placement:"right",width:"600",trigger:"click"}},[r("my-traffic-chart",{attrs:{"proxy-name":e.row.name}})],1),r("el-button",{directives:[{name:"popover",rawName:"v-popover:popover4",arg:"popover4"}],staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary",size:"small",icon:"view",name:e.row.name},on:{click:t.fetchData2}},[t._v(" Traffic Statistics ")]),r("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[r("el-form-item",{attrs:{label:"Name"}},[r("span",[t._v(t._s(e.row.name))])]),r("el-form-item",{attrs:{label:"Type"}},[r("span",[t._v(t._s(e.row.type))])]),r("el-form-item",{attrs:{label:"Encryption"}},[r("span",[t._v(t._s(e.row.encryption))])]),r("el-form-item",{attrs:{label:"Compression"}},[r("span",[t._v(t._s(e.row.compression))])]),r("el-form-item",{attrs:{label:"Last Start"}},[r("span",[t._v(t._s(e.row.last_start_time))])]),r("el-form-item",{attrs:{label:"Last Close"}},[r("span",[t._v(t._s(e.row.last_close_time))])])],1)]}}])}),r("el-table-column",{attrs:{label:"Name",prop:"name",sortable:""}}),r("el-table-column",{attrs:{label:"Connections",prop:"conns",sortable:""}}),r("el-table-column",{attrs:{label:"Traffic In",prop:"traffic_in",formatter:t.formatTrafficIn,sortable:""}}),r("el-table-column",{attrs:{label:"Traffic Out",prop:"traffic_out",formatter:t.formatTrafficOut,sortable:""}}),r("el-table-column",{attrs:{label:"status",prop:"status",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return["online"===e.row.status?r("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.status))]):r("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.row.status))])]}}])})],1)],1)},vt=[],yt={components:{"my-traffic-chart":H},data:function(){return{proxies:[]}},mounted:function(){this.initData()},methods:{formatTrafficIn:function(t,e){return g.a.fileSize(t.traffic_in)},formatTrafficOut:function(t,e){return g.a.fileSize(t.traffic_out)},initData:function(){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function e(){var r,a,o,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$fetch("proxy/stcp");case 2:if(r=e.sent,r){e.next=5;break}return e.abrupt("return");case 5:t.proxies=[],a=Object(x["a"])(r.proxies);try{for(a.s();!(o=a.n()).done;)n=o.value,t.proxies.push(new q(n))}catch(s){a.e(s)}finally{a.f()}case 8:case"end":return e.stop()}}),e)})))()}}},xt=yt,wt=Object(_["a"])(xt,bt,vt,!1,null,null,null),gt=wt.exports;a["default"].use(b["a"]);var Ot=new b["a"]({routes:[{path:"/",name:"Overview",component:D},{path:"/proxies/tcp",name:"ProxiesTcp",component:W},{path:"/proxies/udp",name:"ProxiesUdp",component:ot},{path:"/proxies/http",name:"ProxiesHttp",component:pt},{path:"/proxies/https",name:"ProxiesHttps",component:ht},{path:"/proxies/stcp",name:"ProxiesStcp",component:gt}]}),St=r("2f62"),It=(r("d3b7"),function(t){var e=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(a){fetch("/api/".concat(t),Object.assign({credentials:"include"},r)).then((function(t){if(t.status<200||t.status>=300)return o["Message"].warning("Get server info from frps failed!"),void a();a(t?t.json():void 0)})).catch((function(t){e.$message.error(t.message),a()}))}))});a["default"].use(St["a"]);var Tt=new St["a"].Store({state:{serverInfo:null},mutations:{SET_SERVER_INFO:function(t,e){t.serverInfo=e}},actions:{fetchServerInfo:function(t){return Object(u["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,It("serverinfo");case 3:return a=e.sent,r("SET_SERVER_INFO",a||null),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})))()}}}),jt=Tt;r("6d93");l.a.use(s.a),a["default"].use(o["Button"]),a["default"].use(o["Form"]),a["default"].use(o["FormItem"]),a["default"].use(o["Row"]),a["default"].use(o["Col"]),a["default"].use(o["Table"]),a["default"].use(o["TableColumn"]),a["default"].use(o["Popover"]),a["default"].use(o["Menu"]),a["default"].use(o["Submenu"]),a["default"].use(o["MenuItem"]),a["default"].use(o["Tag"]),a["default"].prototype.$message=o["Message"],a["default"].prototype.$fetch=It,a["default"].config.productionTip=!1,new a["default"]({router:Ot,store:jt,render:function(t){return t(h)}}).$mount("#app")},8577:function(t,e,r){},"85ec":function(t,e,r){},a5c3:function(t,e,r){}});
//# sourceMappingURL=app.bb942a48.js.map