(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(9169)}])},7592:function(e,t,n){"use strict";n.d(t,{f:function(){return g}});var r=n(7568),a=n(603),i=n(4051),o=n.n(i),c=n(5893),s=n(7294),l=n(6887),d=n(8396),u=n(7357),h=n(5861),f={500:["#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688"],200:["#a5d6a7","#c5e1a5","#e6ee9c","#fff59d","#ffe082","#ffcc80","#ffab91","#ef9a9a","#f48fb1","#ce93d8","#b39ddb","#9fa8da","#90caf9","#81d4fa","80deea","#80cbc4"]},x={800:["#2e7d32","#558b2f","#9e9d24","#f9a825","#ff8f00","#ef6c00","#d84315","#c62828","#ad1457","#6a1b9a","#4527a0","#283593","#1565c0","#0277bd","#00838f","#00695c"]},p=n(8100),g=function(e){var t=e.month,n=e.year,i=e.width,g=e.height,m=e.maxWidth,b=e.maxHeight,v=e.update,Z=(0,p.D3)().getAccessTokenSilently,j=((0,d.Z)("(min-width:600px)"),(0,a.Z)(s.useState([["From","To","kr",{type:"string",role:"tooltip"}],["A","B",10,"foo"]]),2)),y=j[0],w=j[1],k=(0,a.Z)(s.useState(new Date(0)),2),S=k[0],C=k[1];s.useEffect((function(){(0,r.Z)(o().mark((function e(){var r,a,i,c,s,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Date,console.log("use effect called:",t,n,r.toJSON()),e.prev=2,e.next=5,Z({audience:"https://api.malt.no/budget",scope:"read:streams"});case 5:return a=e.sent,i="".concat("https://api.malt.no","/budget/streams/").concat(n).concat(parseInt(t)<99?"/".concat(parseInt(t)+1):""),console.log("fetching url:",i),e.next=10,fetch(i,{headers:{Authorization:"Bearer ".concat(a)}});case 10:return c=e.sent,e.next=13,c.json();case 13:s=e.sent,console.log("got data:",s),C(new Date(s.timestamp)),l=[["From","To","Kr ",{type:"string",role:"tooltip"}]],s.values.forEach((function(e){l.push([e[0],e[1],e[2],'<div style="white-space: nowrap; padding: 8px;"><strong>'.concat(e[1],"</strong><br/>kr ").concat(e[2].toFixed(2),"</div>")])})),w(l),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),console.error(e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])})))()}),[t,n,v,Z]);var W=new Date(parseInt(n),parseInt(t),12);return(0,c.jsxs)(u.Z,{children:[(0,c.jsx)(h.Z,{variant:"h2",children:parseInt(t)<99?W.toLocaleDateString("en-US",{month:"long",year:"numeric"}):"All of ".concat(n)}),(0,c.jsxs)(h.Z,{variant:"caption",children:["Sist oppdatert:"," ",S.toLocaleString("no-NO",{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric"})]}),(0,c.jsx)(l.ZP,{chartType:"Sankey",style:{width:i||400,height:g||400,maxWidth:m||"100%",maxHeight:b||"calc(100vw - 128px)"},options:{sankey:{iterations:256,link:{colors:f[200],colorMode:"gradient"},node:{colors:x[800],width:40,label:{color:"#444",fontName:"Roboto",fontSize:12}}},tooltip:{isHtml:!0,textStyle:{fontSize:12}}},data:y})]})}},9169:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var r=n(7568),a=n(603),i=n(4051),o=n.n(i),c=n(5893),s=n(7294),l=n(5861),d=n(6886),u="22.7.1001",h=n(7592),f=n(3321),x=n(2293),p=n(3156),g=n(155),m=n(3946),b=n(9661),v=n(8444),Z=n(2224),j=n(7720),y=n(8885),w=n(326),k=n(9029),S=n(8100),C=n(8909),W=function(){var e=(0,S.D3)(),t=e.loginWithRedirect,n=e.logout,r=e.isAuthenticated,i=e.user,o=function(){r?n({returnTo:"https://budget.malt.no",client_id:"BoqWrpecEONM0NjjSTYjTWKcUa74kI7h"}):t({connection:"google-oauth2"})},d=(0,a.Z)(s.useState(null),2),u=d[0],h=d[1],W=function(e){return h(e.currentTarget)},I=function(){return h(null)};return(0,c.jsx)(x.Z,{elevation:1,position:"static",sx:{backgroundColor:C.r.palette.primary.main,background:"linear-gradient(90deg, ".concat(C.r.palette.primary.main," 20%, #4db6ac 100%)")},children:(0,c.jsx)(p.Z,{maxWidth:"xl",disableGutters:!0,children:(0,c.jsxs)(g.Z,{children:[(0,c.jsx)(m.Z,{edge:"start",size:"large",color:"inherit","aria-label":"menu",sx:{mr:2,paddingLeft:"16px"},children:(0,c.jsx)(w.Z,{})}),(0,c.jsx)(l.Z,{variant:"h6",component:"div",sx:{flexGrow:1},children:"budget.malt.no"}),(0,c.jsx)(f.Z,{color:"inherit",onClick:o,children:r?"Log out":"Log in"}),(0,c.jsx)(b.Z,{onClick:W,color:"inherit",src:"undefined"===typeof i?"":i.picture,alt:"undefined"===typeof i?"Unauthorized user":i.name,sx:{border:"3.5px solid white",padding:0}}),(0,c.jsxs)(v.Z,{anchorEl:u,open:Boolean(u),onClose:I,onClick:I,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[(0,c.jsxs)(Z.Z,{children:[(0,c.jsx)(b.Z,{onClick:W,color:"inherit",src:"undefined"===typeof i?"":i.picture,alt:"undefined"===typeof i?"Unauthorized user":i.name,sx:{border:"3.5px solid white"}})," ","undefined"===typeof i?"Unauthorized user":i.name]}),(0,c.jsx)(j.Z,{}),(0,c.jsxs)(Z.Z,{children:[(0,c.jsx)(y.Z,{children:(0,c.jsx)(k.Z,{fontSize:"small"})}),"Logout"]})]})]})})})},I=n(4054),P=n(3841),_=n(4917),z=function(e){var t=e.onYearChange,n=e.onMonthChange,r=e.years,i=new Date,o="January February March April May June July August September October November December".split(" ").map((function(e,t){return[e,t]})),l=function(e,t){return e.filter((function(e){return t<i.getFullYear()||e[1]<=i.getMonth()}))},u=(0,a.Z)(s.useState(i.getFullYear().toString()),2),h=u[0],f=u[1],x=(0,a.Z)(s.useState(l(o,parseInt(h,10))),2),p=x[0],g=x[1],m=(0,a.Z)(s.useState(i.getMonth().toString()),2),b=m[0],v=m[1];return(0,c.jsxs)(d.ZP,{container:!0,paddingTop:2,paddingBottom:2,spacing:3,direction:"row",justifyContent:"flex-start",children:[(0,c.jsx)(d.ZP,{item:!0,xs:6,sm:3,md:2,sx:{minWidth:"288px"},children:(0,c.jsxs)(I.Z,{variant:"filled",sx:{width:"100%"},children:[(0,c.jsx)(P.Z,{id:"budget-year-label",children:"Year"}),(0,c.jsx)(_.Z,{labelId:"budget-year-label",id:"budget-year-select",value:h,onChange:function(e){f(e.target.value),g(l(o,parseInt(e.target.value))),"function"===typeof t&&t(e.target.value)},children:r.map((function(e){return(0,c.jsx)(Z.Z,{value:e,children:e},e)}))})]})}),(0,c.jsx)(d.ZP,{item:!0,xs:6,sm:3,md:2,sx:{minWidth:"288px",maxWidth:"343px"},children:(0,c.jsxs)(I.Z,{variant:"filled",sx:{width:"100%"},children:[(0,c.jsx)(P.Z,{id:"budget-month-label",children:"Month"}),(0,c.jsxs)(_.Z,{labelId:"budget-month-label",id:"budget-month-select",value:b,onChange:function(e){console.log("month change:",e.target.value),v(e.target.value),"function"===typeof n&&n(e.target.value)},children:[(0,c.jsx)(Z.Z,{value:99,children:"All Year"},"All Year"),(0,c.jsx)(j.Z,{}),p.map((function(e){return(0,c.jsx)(Z.Z,{value:e[1],children:e[0]},e[0])}))]})]})})]})},A=n(8396),T=n(7357),D=function(){var e=new Date,t=(0,S.D3)(),n=t.isAuthenticated,i=t.loginWithRedirect,x=(0,a.Z)(s.useState(e.getFullYear().toString()),2),g=x[0],m=x[1],b=(0,a.Z)(s.useState(e.getMonth().toString()),2),v=b[0],Z=b[1],j=(0,a.Z)(s.useState([]),2),y=j[0],w=j[1],k=(0,a.Z)(s.useState(""),2),I=k[0],P=k[1],_=function(){var e=(0,r.Z)(o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("https://api.malt.no","/budget/years"),e.prev=1,e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,console.log("years data:",r),P(r.version),e.abrupt("return",r.years);case 13:return e.prev=13,e.t0=e.catch(1),console.error("Got error fetching years:",e.t0),e.abrupt("return",[]);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(){return e.apply(this,arguments)}}();s.useEffect((function(){_().then((function(e){return w(e)}))}),[]);var D=function(e){return m(e)},M=function(e){return Z(e)},N=(0,A.Z)("(min-width:600px)"),E=function(){i({connection:"google-oauth2"})};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(W,{}),n?(0,c.jsxs)(d.ZP,{container:!0,direction:"row",spacing:0,sx:{justifyContent:"flex-start",alignItems:"flex-start",height:"calc(100vh - 121px)"},children:[(0,c.jsx)(d.ZP,{item:!0,xs:12,flexGrow:20,children:(0,c.jsx)(p.Z,{maxWidth:"xl",sx:{},children:(0,c.jsx)(T.Z,{sx:{paddingTop:2,height:"100%"},children:(0,c.jsx)(h.f,{month:v,year:g,width:"calc(100vw - 48px)",height:"calc(100vh - 281px)",maxWidth:"".concat(C.r.breakpoints.values.xl-48,"px"),maxHeight:"".concat(C.r.breakpoints.values.xl*(9/16),"px")})})})}),(0,c.jsx)(d.ZP,{item:!0,xs:12,flexShrink:1,children:(0,c.jsx)(p.Z,{maxWidth:"xl",children:(0,c.jsx)(z,{years:y,onYearChange:D,onMonthChange:M})})})]}):(0,c.jsx)(d.ZP,{container:!0,sx:{justifyContent:"center",alignItems:"center",height:"calc(100vh - 121px)"},children:(0,c.jsx)(d.ZP,{item:!0,sx:{padding:2},children:(0,c.jsx)(f.Z,{sx:{backgroundColor:C.r.palette.primary.main,background:"linear-gradient(90deg, ".concat(C.r.palette.primary.main," 20%, #4db6ac 100%)")},variant:"contained",size:"large",onClick:E,children:"Sign in with Google"})})}),function(){if(N)return(0,c.jsx)("footer",{style:{backgroundColor:"#ffffff",color:"#bbbbbb"},children:(0,c.jsx)(p.Z,{maxWidth:"xl",children:(0,c.jsx)(T.Z,{sx:{padding:"16px 0px",textAlign:"right"},children:(0,c.jsxs)(l.Z,{variant:"caption",children:["budget sankey - app: v",u," - api: v",I]})})})})}()]})}}},function(e){e.O(0,[359,195,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);