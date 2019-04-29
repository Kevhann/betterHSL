(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(e,t,a){e.exports={WSPORT:"ws://localhost:4000/graphql",PORT:"http://localhost:4000/graphql"}},255:function(e,t,a){e.exports=a(445)},435:function(e,t,a){},445:function(e,t,a){"use strict";a.r(t);var n=a(212),r=a(0),l=a.n(r),o=a(46),c=a.n(o),u=a(460),s=a(465),i=function(e){return{type:"SET_MAP_CLASS",value:e}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"startMap",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_MAP_CLASS":return t.value;default:return e}},p=function(e){return{type:"SET_FORM_CLASS",value:e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"startForm",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FORM_CLASS":return t.value;default:return e}},g=function(e){return{type:"SET_ROUTES",value:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ROUTES":return t.value;default:return e}},v=a(41),E={setMapClass:i,setFormClass:p,setRoutes:g},b=Object(v.b)(null,E)(function(e){var t=e.setMapClass,a=e.setFormClass,n=e.setRoutes;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{className:"menu",inverted:!0,color:"blue",borderless:!0},l.a.createElement(u.a.Item,{name:"BetterHsl",active:!1,onClick:function(){a("startForm"),t("startMap"),n([])}},l.a.createElement(s.a,null,"BetterHsl"))))}),C=a(37),h=a.n(C),y=a(49),O=a(29),S=a(455),T=function(e){var t=new Date(e),a=t.getHours(),n=t.getMinutes();return n<10?"".concat(a,":0").concat(n):"".concat(a,":").concat(n)},j=function(e){var t=e.leg,a=T(t.startTime),n=function(e){var t,a=Math.round(e);if(a>1e3){var n=Math.round(a%1e3/100),r=Math.floor(a/1e3);t="".concat(r,".").concat(n,"km")}else t="".concat(a,"m");return t}(t.distance);return l.a.createElement("div",null,l.a.createElement("p",null),l.a.createElement("div",null,l.a.createElement("b",null,t.from.name),l.a.createElement("div",null,"Mode: ",t.mode),t.trip&&l.a.createElement("div",null,t.trip.route.shortName," ",t.trip.tripHeadsign),l.a.createElement("div",null,"Distance: ",n),l.a.createElement("div",null,"Departure: ",a),l.a.createElement("div",null,"To: ",t.to.name)))},x=a(459),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_TRAIL":return t.value;default:return e}},R=a(62),F=function(e){var t=e.route;console.log("route:",t);var a=T(t.legs[t.legs.length-1].endTime),n=T(t.legs[0].startTime),r=0;t.legs.forEach(function(e){"WALK"!==e.mode&&r++});var o=41/r+"ch";return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"routePreviewContainer"},t.legs.map(function(e){return"WALK"===e.mode?l.a.createElement(l.a.Fragment,null):l.a.createElement("span",{className:"routePreview",style:{maxWidth:o},key:e.duration},e.from.stop.name)})),l.a.createElement("div",null),l.a.createElement("span",{className:"divided"},l.a.createElement("span",{className:"previewDeparture"},n),t.legs.map(function(e){var t="red",a="train";return"WALK"===e.mode?l.a.createElement(l.a.Fragment,null):("SUBWAY"===e.mode?(t="orange",a="subway"):"BUS"===e.mode&&(t="blue",a="bus"),l.a.createElement(l.a.Fragment,null,l.a.createElement("span",null,l.a.createElement(R.a,{name:a})),l.a.createElement("span",{style:{color:t},className:"divider"})))}),l.a.createElement("span",{className:"previewArrival"},a),l.a.createElement(R.a,{name:"angle down",className:"expand_route",size:"big"})),l.a.createElement("div",null,l.a.createElement("span",{className:"routePreviewContainer"},t.legs.map(function(e){return"WALK"===e.mode?l.a.createElement(l.a.Fragment,null):l.a.createElement("span",{className:"routePreview",style:{maxWidth:o}},e.trip.route.shortName)}))))},k=(a(374),{setActiveTrail:function(e){return{type:"SET_ACTIVE_TRAIL",value:e}}}),A=Object(v.b)(function(e){return{routes:e.routeReducer}},k)(function(e){var t=e.setActiveTrail,a=e.routes,n=Object(r.useState)(-1),o=Object(O.a)(n,2),c=o[0],u=o[1],s=-1,i=function(e,a){var n=a.index,r=c===n?-1:n;r>=0&&t(r),u(r)};return 0===a.length?l.a.createElement(l.a.Fragment,null):l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{fluid:!0,styled:!0},a.map(function(e){return s++,l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a.Title,{onClick:i,index:s,active:c===s},l.a.createElement("span",{key:e.distance},l.a.createElement(F,{route:e}))),l.a.createElement(x.a.Content,{active:c===s},l.a.createElement("b",null,"Route legs"),e.legs.map(function(e){return l.a.createElement("div",{key:e.distance},l.a.createElement("p",null),l.a.createElement(j,{leg:e}))})))})))}),N=a(145),M=a.n(N),_=a(461),L=a(61),B=a.n(L),D=function(){var e=Object(y.a)(h.a.mark(function e(t){var a,n,r,l,o,c,u,s,i;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=[],n=function(e){var t=e.data.features.map(function(e){return{title:e.properties.label,layer:e.properties.layer}});a=a.concat(t)},!t){e.next=24;break}return r="http://api.digitransit.fi/geocoding/v1/search",l="http://api.digitransit.fi/geocoding/v1/autocomplete",o="boundary.polygon=25.5345%2060.2592%2C25.3881%2060.1693%2C25.3559%2060.102%2C25.3293%2059.9371%2C24.2831%2059.78402%2C24.2721%2059.95501%2C24.2899%2060.00895%2C24.3087%2060.01947%2C24.1994%2060.12753%2C24.1362%2060.1114%2C24.1305%2060.12847%2C24.099%2060.1405%2C24.0179%2060.1512%2C24.0049%2060.1901%2C24.0445%2060.1918%2C24.0373%2060.2036%2C24.0796%2060.2298%2C24.1652%2060.2428%2C24.3095%2060.2965%2C24.3455%2060.2488%2C24.428%2060.3002%2C24.5015%2060.2872%2C24.4888%2060.3306%2C24.5625%2060.3142%2C24.5957%2060.3242%2C24.6264%2060.3597%2C24.666%2060.3638%2C24.7436%2060.3441%2C24.9291%2060.4523%2C24.974%2060.5253%2C24.9355%2060.5131%2C24.8971%2060.562%2C25.0388%2060.5806%2C25.1508%2060.5167%2C25.1312%2060.4938%2C25.0385%2060.512%2C25.057%2060.4897%2C25.0612%2060.4485%2C25.1221%2060.4474%2C25.1188%2060.4583%2C25.149%2060.4621%2C25.1693%2060.5062%2C25.2242%2060.5016%2C25.3661%2060.4118%2C25.3652%2060.3756%2C25.5345%2060.2592&size=4",e.next=8,B.a.get("".concat(r,"?text=").concat(t,"&focus.point.lat=60.168656&focus.point.lon=24.940899&layers=venue&").concat(o));case 8:return c=e.sent,n(c),e.next=12,B.a.get("".concat(r,"?text=").concat(t,"&focus.point.lat=60.168656&focus.point.lon=24.940899&layers=street&").concat(o));case 12:return u=e.sent,n(u),e.next=16,B.a.get("".concat(r,"?text=").concat(t,"&focus.point.lat=60.168656&focus.point.lon=24.940899&layers=address&").concat(o));case 16:return s=e.sent,n(s),e.next=20,B.a.get("".concat(l,"?text=").concat(t,"&focus.point.lat=60.168656&focus.point.lon=24.940899&layers=stop&").concat(o));case 20:return i=e.sent,console.log("stops:",i),n(i),e.abrupt("return",M.a.take(a,16));case 24:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),W=a(222),$=a.n(W),I=function(e){var t=e.fieldName,a=e.inputValue,n=e.setInputValue,o=Object(r.useState)(!1),c=Object(O.a)(o,2),u=c[0],s=c[1],i=Object(r.useState)([]),m=Object(O.a)(i,2),p=m[0],d=m[1],g=$()(function(){var e=Object(y.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length<1)){e.next=2;break}return e.abrupt("return",v());case 2:return e.next=4,D(t);case 4:a=e.sent,console.log("autocompleteResults:",a),s(!1),d(a);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),200,[]),f=Object(O.a)(g,1)[0],v=function(){s(!1),d([]),n("")};return l.a.createElement(_.a,{fluid:!0,loading:u,onSearchChange:function(e){s(!0),n(e.target.value),f(e.target.value)},onResultSelect:function(e,t){var a=t.result;return n(a.title)},results:p,value:a,placeholder:t,resultRenderer:function(e){var t,a=e.title,n=e.layer;return t="venue"===n?"building":"stop"===n?"flag":"address"===n?"point":"map signs",l.a.createElement("div",null,l.a.createElement(R.a,{name:t}),a)}})},P=a(464),V=a(457),U=a(447),z=a(458),K=a(454),q=a(456),G=function(e){return{type:"SET_BACKGROUND_MAP_LOCATION",value:e}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[60.192059,24.945831],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BACKGROUND_MAP_LOCATION":return t.value;default:return e}},Y=a(224),Z=a(146);function J(){var e=Object(Y.a)(["\n  query planRoute(\n    $latFrom: Float\n    $lonFrom: Float\n    $latTo: Float\n    $lonTo: Float\n    $time: String\n    $date: String\n    $arriveBy: Boolean\n  ) {\n    planRoute(\n      latFrom: $latFrom\n      lonFrom: $lonFrom\n      latTo: $latTo\n      lonTo: $lonTo\n      time: $time\n      date: $date\n      arriveBy: $arriveBy\n    ) {\n      walkDistance\n      duration\n      legs {\n        legGeometry {\n          points\n        }\n        mode\n        startTime\n        endTime\n        trip {\n          route {\n            shortName\n            longName\n          }\n          tripHeadsign\n          stops {\n            name\n          }\n        }\n        from {\n          lat\n          lon\n          name\n          stop {\n            code\n            name\n          }\n        }\n        to {\n          lat\n          lon\n          name\n        }\n        distance\n      }\n    }\n  }\n"]);return J=function(){return e},e}var Q=Object(Z.a)(J()),X=function(){var e=Object(y.a)(h.a.mark(function e(t){var a,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("https://api.digitransit.fi/geocoding/v1/search?text=".concat(t,"&size=1"));case 2:return a=e.sent,n=a.data.features[0].geometry.coordinates,e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),ee={setRoutes:g,setBackgroundLocation:G,setMapClass:i,setClassState:p},te=Object(v.b)(function(e){return{routes:e.routeReducer,classState:e.formClassReducer}},ee)(function(e){var t=e.setRoutes,a=e.setBackgroundLocation,n=e.setMapClass,o=e.classState,c=e.setClassState,u=Object(r.useState)(""),s=Object(O.a)(u,2),i=s[0],m=s[1],p=Object(r.useState)(""),d=Object(O.a)(p,2),g=d[0],f=d[1],v=Object(r.useState)(!1),E=Object(O.a)(v,2),b=E[0],C=E[1],j=Object(r.useState)(""),x=Object(O.a)(j,2),w=x[0],F=x[1],k=Object(r.useState)(""),N=Object(O.a)(k,2),M=N[0],_=N[1],L=Object(r.useState)(!1),B=Object(O.a)(L,2),D=B[0],W=B[1],$=Object(S.b)();Object(r.useEffect)(function(){F(T(Date.now())),_(function(){var e=new Date,t=e.getMonth()<9?"0".concat(e.getMonth()+1):"".concat(e.getMonth()+1),a=e.getFullYear(),n=e.getDate()<10?"0".concat(e.getDate()):"".concat(e.getDate());return"".concat(a,"-").concat(t,"-").concat(n)}())},[]);var G=function(){var e=Object(y.a)(h.a.mark(function e(r){var l,o,u,s;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t([]),""===i||""===g){e.next=19;break}return C(!0),c("resultsForm"),e.next=7,X(i);case 7:return l=e.sent,e.next=10,X(g);case 10:return o=e.sent,a([l[1],l[0]]),n("resultsMap"),e.next=15,$.query({query:Q,variables:{latFrom:l[1],lonFrom:l[0],latTo:o[1],lonTo:o[0],time:"".concat(w,":00"),date:M,arriveBy:D}});case 15:u=e.sent,s=u.data.planRoute,C(!1),t(s);case 19:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:o},l.a.createElement(P.a,{raised:!0,style:{marginBottom:0}},l.a.createElement(V.a,{onSubmit:G},l.a.createElement(V.a.Field,null,l.a.createElement(I,{inputValue:i,setInputValue:m,fieldName:"from"})),l.a.createElement(V.a.Field,null,l.a.createElement(I,{inputValue:g,setInputValue:f,fieldName:"to"})),l.a.createElement(V.a.Field,null,l.a.createElement("div",{className:"toggleSearchTime"},l.a.createElement(U.a,{animated:!0,type:"submit"},l.a.createElement(U.a.Content,{visible:!0},"Search"),l.a.createElement(U.a.Content,{hidden:!0},l.a.createElement(R.a,{name:"arrow right"}))),l.a.createElement("span",null,l.a.createElement(z.a,{style:{minWidth:"11ch",paddingLeft:"10px",paddingRight:"10px"},defaultValue:!1,selection:!0,fluid:!0,options:[{key:1,value:!1,text:"leave at"},{key:2,value:!0,text:"arrive by"}],onChange:function(e,t){var a=t.value;W(a)}})),l.a.createElement("span",null,l.a.createElement(K.a,{className:"timeInput",defaultValue:w,type:"time",onChange:function(e){return F(e.target.value)}})),l.a.createElement("span",null,l.a.createElement(K.a,{type:"date",style:{maxWidth:"163px"},value:M,onChange:function(e){return _(e.target.value)}})))))),l.a.createElement(A,null),l.a.createElement(q.a,{inline:"centered",active:b,style:{marginTop:"10px"}}))}),ae=(a(434),a(462)),ne=a(466),re=a(467),le=a(149),oe=a.n(le),ce={setLatlng:G},ue=Object(v.b)(function(e){return{latlng:e.backgroundMapReducer,routes:e.routeReducer,activeTrail:e.trailReducer,mapClass:e.mapClassReducer}},ce)(function(e){var t=e.latlng,a=(e.setLatlng,e.routes),n=e.activeTrail,o=e.mapClass,c=Object(r.useState)([]),u=Object(O.a)(c,2),s=u[0],i=u[1];return console.log("mapclass bgmapin alussa: ",o),Object(r.useEffect)(function(){var e=[];if(a.length>0){e=a.map(function(e){return e.legs.map(function(e){return{color:"gray",decodedTrail:oe.a.decode(e.legGeometry.points)}})}),console.log("activeTrail:",n),console.log("routes:",a);var t=a[n].legs.map(function(e){var t="red";return"WALK"===e.mode?t="green":"SUBWAY"===e.mode?t="orange":"BUS"===e.mode&&(t="blue"),{color:t,decodedTrail:oe.a.decode(e.legGeometry.points),active:!0}});e.push(t)}console.log("alltrails:",e),i(e)},[a,n,o]),l.a.createElement(l.a.Fragment,null,console.log("latlng juuri ennen mappia: ",t),console.log("className ennen mappia: ",o),l.a.createElement(ae.a,{className:o,center:t,zoom:12,maxZoom:19,attributionControl:!0,zoomControl:!0,doubleClickZoom:!0,scrollWheelZoom:!0,dragging:!0,animate:!0,easeLinearity:.35,onclick:function(e){console.log("lat, lng",[e.latlng.lat,e.latlng.lng])}},console.log("routes bgmapissa: ",a),console.log("trails ennen rendausta: ",s),s.map(function(e){return e.map(function(e){return l.a.createElement(ne.a,{color:e.color,positions:e.decodedTrail})})}),console.log("trails rendauksen j\xe4lkeen: ",s),l.a.createElement(re.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'})))}),se=(a(435),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b,null),l.a.createElement(ue,null),l.a.createElement(te,null))}),ie=a(241),me=a(75),pe=a(236),de=Object(me.c)({backgroundMapReducer:H,routeReducer:f,trailReducer:w,mapClassReducer:m,formClassReducer:d}),ge=Object(me.d)(de,Object(me.a)(pe.a)),fe=a(51),ve=a(72),Ee=a(60),be=a(238),Ce=a(19),he=a(237),ye=a(6),Oe=a(150),Se=a.n(Oe),Te=new he.a({uri:Se.a.WSPORT,options:{reconnect:!0}}),je=Object(ve.b)({uri:Se.a.PORT}),xe=Object(be.a)(function(e,t){var a=t.headers,r=localStorage.getItem("app-user-token");return{headers:Object(n.a)({},a,{authorization:r?"bearer ".concat(r):null})}}),we=Object(Ce.d)(function(e){var t=e.query,a=Object(ye.k)(t),n=a.kind,r=a.operation;return"OperationDefinition"===n&&"subscription"===r},Te,xe.concat(je)),Re=new fe.a({link:we,cache:new Ee.a});c.a.render(l.a.createElement(ie.a,{client:Re},l.a.createElement(S.a,{client:Re},l.a.createElement(v.a,{store:ge},l.a.createElement(se,null)))),document.getElementById("root"))}},[[255,1,2]]]);
//# sourceMappingURL=main.0ef7efbc.chunk.js.map