(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4594)}])},4594:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(7568),a=n(603),o=n(4051),i=n.n(o),s=n(5893),c=n(7294),l=n(5861),d=n(6886),u="22.7.405",h=n(6887),x=n(7357),f={500:["#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688"],200:["#a5d6a7","#c5e1a5","#e6ee9c","#fff59d","#ffe082","#ffcc80","#ffab91","#ef9a9a","#f48fb1","#ce93d8","#b39ddb","#9fa8da","#90caf9","#81d4fa","80deea","#80cbc4"]},p={800:["#2e7d32","#558b2f","#9e9d24","#f9a825","#ff8f00","#ef6c00","#d84315","#c62828","#ad1457","#6a1b9a","#4527a0","#283593","#1565c0","#0277bd","#00838f","#00695c"]},g=n(8100),m=n(8909),b=function(e){var t=e.month,n=e.year,o=(0,g.D3)().getAccessTokenSilently,d=(0,a.Z)(c.useState([["From","To","kr",{type:"string",role:"tooltip"}],["A","B",10,"foo"]]),2),u=d[0],b=d[1];c.useEffect((function(){(0,r.Z)(i().mark((function e(){var r,a,s,c,l;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("use effect called:",t,n),e.prev=1,e.next=4,o({audience:"https://api.malt.no/budget",scope:"read:streams"});case 4:return r=e.sent,a="".concat("https://api.malt.no","/budget/streams/").concat(n,"/").concat(parseInt(t)+1),e.next=8,fetch(a,{headers:{Authorization:"Bearer ".concat(r)}});case 8:return s=e.sent,e.next=11,s.json();case 11:c=e.sent,l=[["From","To","Kr ",{type:"string",role:"tooltip"}]],c.values.forEach((function(e){l.push([e[0],e[1],e[2],'<div style="white-space: nowrap; padding: 8px;"><strong>'.concat(e[1],"</strong><br/>kr ").concat(e[2].toFixed(2),"</div>")])})),b(l),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[1,17]])})))()}),[t,n,o]),console.log("theme",m.r);var j=new Date(parseInt(n),parseInt(t),12);return(0,s.jsxs)(x.Z,{children:[(0,s.jsx)(l.Z,{variant:"h5",children:j.toLocaleDateString("en-US",{month:"long",year:"numeric"})}),(0,s.jsx)(h.ZP,{chartType:"Sankey",width:"calc(100vw - 48px)",height:"calc(100vh - 266px)",style:{minHeight:"288px",maxWidth:"".concat(m.r.breakpoints.values.xl-48,"px")},options:{sankey:{iterations:256,link:{colors:f[200],colorMode:"gradient"},node:{colors:p[800],width:40,label:{color:"#444",fontName:"Roboto",fontSize:12}}},tooltip:{isHtml:!0,textStyle:{fontSize:12}}},data:u})]})},j=n(3321),Z=n(2293),v=n(3156),y=n(155),w=n(3946),k=n(9661),S=n(8444),C=n(2224),T=n(7720),_=n(8885),P=n(326),W=n(9029),z=function(){var e=(0,g.D3)(),t=e.loginWithRedirect,n=e.logout,r=e.isAuthenticated,o=e.user,i=function(){r?n({returnTo:"https://budget.malt.no",client_id:"BoqWrpecEONM0NjjSTYjTWKcUa74kI7h"}):t({connection:"google-oauth2"})},d=(0,a.Z)(c.useState(null),2),u=d[0],h=d[1],x=function(e){return h(e.currentTarget)},f=function(){return h(null)};return(0,s.jsx)(Z.Z,{elevation:1,position:"static",children:(0,s.jsx)(v.Z,{maxWidth:"xl",disableGutters:!0,children:(0,s.jsxs)(y.Z,{children:[(0,s.jsx)(w.Z,{edge:"start",size:"large",color:"inherit","aria-label":"menu",sx:{mr:2,paddingLeft:"16px"},children:(0,s.jsx)(P.Z,{})}),(0,s.jsx)(l.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:"budget.malt.no"}),(0,s.jsx)(j.Z,{color:"inherit",onClick:i,children:r?"Logout":"Login"}),(0,s.jsx)(k.Z,{onClick:x,color:"inherit",src:"undefined"===typeof o?"":o.picture,alt:"undefined"===typeof o?"Unauthorized user":o.name,sx:{border:"3.5px solid white",padding:0}}),(0,s.jsxs)(S.Z,{anchorEl:u,open:Boolean(u),onClose:f,onClick:f,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[(0,s.jsxs)(C.Z,{children:[(0,s.jsx)(k.Z,{onClick:x,color:"inherit",src:"undefined"===typeof o?"":o.picture,alt:"undefined"===typeof o?"Unauthorized user":o.name,sx:{border:"3.5px solid white"}})," ","undefined"===typeof o?"Unauthorized user":o.name]}),(0,s.jsx)(T.Z,{}),(0,s.jsxs)(C.Z,{children:[(0,s.jsx)(_.Z,{children:(0,s.jsx)(W.Z,{fontSize:"small"})}),"Logout"]})]})]})})})},M=n(4054),E=n(3841),I=n(4917),N=function(e){var t=e.onYearChange,n=e.onMonthChange,r=e.years,o=new Date,i="January February March April May June July August September October November December".split(" ").map((function(e,t){return[e,t]})),l=function(e,t){return e.filter((function(e){return t<o.getFullYear()||e[1]<=o.getMonth()}))},u=(0,a.Z)(c.useState(o.getFullYear().toString()),2),h=u[0],x=u[1],f=(0,a.Z)(c.useState(l(i,parseInt(h,10))),2),p=f[0],g=f[1],m=(0,a.Z)(c.useState(o.getMonth().toString()),2),b=m[0],j=m[1];return(0,s.jsxs)(d.ZP,{container:!0,paddingTop:3,paddingBottom:3,spacing:3,direction:"row",justifyContent:"flex-start",children:[(0,s.jsx)(d.ZP,{item:!0,xs:6,sm:3,md:2,sx:{minWidth:"288px",maxWidth:"343px"},children:(0,s.jsxs)(M.Z,{variant:"standard",sx:{width:"100%"},children:[(0,s.jsx)(E.Z,{id:"budget-year-label",children:"Year"}),(0,s.jsx)(I.Z,{labelId:"budget-year-label",id:"budget-year-select",value:h,onChange:function(e){x(e.target.value),g(l(i,parseInt(e.target.value))),"function"===typeof t&&t(e.target.value)},children:r.map((function(e){return(0,s.jsx)(C.Z,{value:e,children:e},e)}))})]})}),(0,s.jsx)(d.ZP,{item:!0,xs:6,sm:3,md:2,sx:{minWidth:"288px",maxWidth:"343px"},children:(0,s.jsxs)(M.Z,{variant:"standard",sx:{width:"100%"},children:[(0,s.jsx)(E.Z,{id:"budget-month-label",children:"Month"}),(0,s.jsx)(I.Z,{labelId:"budget-month-label",id:"budget-month-select",value:b,onChange:function(e){j(e.target.value),"function"===typeof n&&n(e.target.value)},children:p.map((function(e){return(0,s.jsx)(C.Z,{value:e[1],children:e[0]},e[0])}))})]})})]})},A=function(){var e=new Date,t=(0,g.D3)().isAuthenticated,n=(0,a.Z)(c.useState(e.getFullYear().toString()),2),o=n[0],h=n[1],f=(0,a.Z)(c.useState(e.getMonth().toString()),2),p=f[0],j=f[1],Z=(0,a.Z)(c.useState([]),2),y=Z[0],w=Z[1],k=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("https://api.malt.no","/budget/years"),e.prev=1,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,console.log("years data:",r),e.abrupt("return",r.years);case 12:return e.prev=12,e.t0=e.catch(1),console.error("Got error fetching years:",e.t0),e.abrupt("return",[]);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();c.useEffect((function(){k().then((function(e){return w(e)}))}),[]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(z,{}),(0,s.jsxs)(d.ZP,{container:!0,direction:"row",position:"absolute",height:"calc(100vh - 64px)",maxHeight:"865px",children:[(0,s.jsx)(d.ZP,{item:!0,xs:12,flexGrow:20,flexBasis:"90%",children:(0,s.jsx)(v.Z,{maxWidth:"xl",children:(0,s.jsx)(x.Z,{sx:{paddingTop:2,minHeight:"320px"},children:t&&(0,s.jsx)(b,{month:p,year:o})})})}),(0,s.jsx)(d.ZP,{item:!0,xs:12,flexShrink:2,sx:{maxHeight:"96px"},children:(0,s.jsx)(v.Z,{maxWidth:"xl",children:(0,s.jsx)(N,{years:y,onYearChange:function(e){return h(e)},onMonthChange:function(e){return j(e)}})})}),(0,s.jsx)(d.ZP,{item:!0,xs:12,flexShrink:3,sx:{maxHeight:"56px",backgroundColor:m.r.palette.grey[200]},children:(0,s.jsx)(v.Z,{maxWidth:"xl",sx:{borderTop:"1px solid ".concat(m.r.palette.grey[300])},children:(0,s.jsx)(x.Z,{sx:{padding:"16px 0px"},children:(0,s.jsxs)(l.Z,{variant:"caption",children:["budget sankey - v",u]})})})})]})]})}}},function(e){e.O(0,[479,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);