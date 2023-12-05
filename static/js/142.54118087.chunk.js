"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[142,256,247,186],{687:(e,t,n)=>{n.d(t,{Hx:()=>c,Y5:()=>o,wr:()=>a,xc:()=>i,z1:()=>l});var r=n(294);r.Z.defaults.baseURL="https://api.themoviedb.org/3";const s="8e21f34d58b1a578e492fe7e575bb39e",a=async()=>{try{return(await r.Z.get("/trending/movie/day",{params:{api_key:s}})).data.results}catch(e){throw e}},l=async e=>{try{return(await r.Z.get("/search/movie",{params:{api_key:s,query:e}})).data.results}catch(t){throw t}},o=async e=>{try{return(await r.Z.get("/movie/".concat(e),{params:{api_key:s}})).data}catch(t){throw t}},c=async e=>{try{return(await r.Z.get("/movie/".concat(e,"/reviews"),{params:{api_key:s}})).data.results}catch(t){throw t}},i=async e=>{try{return(await r.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:s}})).data.cast}catch(t){throw t}}},247:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(791),s=n(689),a=n(687),l=n(881),o=n(256),c=n(184);const i=()=>{const{movieId:e}=(0,s.UO)(),[t,n]=(0,r.useState)([]),[i,d]=(0,r.useState)(!1),[u,p]=(0,r.useState)(null);(0,r.useEffect)((()=>{(async()=>{d(!0);try{const t=await(0,a.xc)(e);n(t)}catch(u){console.error("Error fetching movie credits:",u),p("Something went wrong while fetching movie credits.")}finally{d(!1)}})()}),[e]);return(0,c.jsxs)(c.Fragment,{children:[i&&(0,c.jsx)(l.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}),u&&(0,c.jsx)(o.default,{}),(0,c.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",gap:"12px",listStyle:"none",padding:"16px 0 0",margin:0},children:t.map((e=>(0,c.jsxs)("li",{style:{width:"150px",border:"1px solid #ddd",padding:"12px",borderRadius:"8px"},children:[e.profile_path?(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.profile_path),alt:e.name,width:150,style:{borderRadius:"4px"}}):(0,c.jsx)("img",{src:"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:e.name,width:150}),(0,c.jsx)("p",{style:{fontSize:"16px",fontWeight:"bold",margin:"8px 0"},children:e.name}),(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{children:"Character:"})," ",e.character]})]},e.id)))})]})}},186:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(791),s=n(689),a=n(687),l=n(881),o=n(256),c=n(184);const i=()=>{const{movieId:e}=(0,s.UO)(),[t,n]=(0,r.useState)([]),[i,d]=(0,r.useState)(!1),[u,p]=(0,r.useState)(null);return(0,r.useEffect)((()=>{(async()=>{d(!0);try{const t=await(0,a.Hx)(e);n(t)}catch(u){console.error("Error fetching movie reviews",u),p("Something went wrong while fetching movie reviews.")}finally{d(!1)}})()}),[e]),(0,c.jsxs)(c.Fragment,{children:[i&&(0,c.jsx)(l.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}),u&&(0,c.jsx)(o.default,{}),!i&&!u&&(0,c.jsx)("ul",{children:t.map((e=>(0,c.jsxs)("li",{children:[(0,c.jsx)("h3",{children:e.author}),(0,c.jsx)("p",{children:e.content})]},e.id)))})]})}},142:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var r=n(791),s=n(689);function a(e){return t=>!!t.type&&t.type.tabsRole===e}const l=a("Tab"),o=a("TabList"),c=a("TabPanel");function i(e,t){return r.Children.map(e,(e=>null===e?null:function(e){return l(e)||o(e)||c(e)}(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children?(0,r.cloneElement)(e,{...e.props,children:i(e.props.children,t)}):e))}function d(e,t){return r.Children.forEach(e,(e=>{null!==e&&(l(e)||c(e)?t(e):e.props&&e.props.children&&"object"===typeof e.props.children&&(o(e)&&t(e),d(e.props.children,t)))}))}function u(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=u(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}const p=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=u(e))&&(r&&(r+=" "),r+=t);return r};function f(e){let t=0;return d(e,(e=>{l(e)&&t++})),t}function h(e){return e&&"getAttribute"in e}function m(e){return h(e)&&e.getAttribute("data-rttab")}function x(e){return h(e)&&"true"===e.getAttribute("aria-disabled")}let b;const g={className:"react-tabs",focus:!1},y=e=>{let t=(0,r.useRef)([]),n=(0,r.useRef)([]);const s=(0,r.useRef)();function a(t,n){if(t<0||t>=h())return;const{onSelect:r,selectedIndex:s}=e;r(t,s,n)}function d(e){const t=h();for(let n=e+1;n<t;n++)if(!x(y(n)))return n;for(let n=0;n<e;n++)if(!x(y(n)))return n;return e}function u(e){let t=e;for(;t--;)if(!x(y(t)))return t;for(t=h();t-- >e;)if(!x(y(t)))return t;return e}function h(){const{children:t}=e;return f(t)}function y(e){return t.current["tabs-".concat(e)]}function w(e){let t=e.target;do{if(v(t)){if(x(t))return;return void a([].slice.call(t.parentNode.children).filter(m).indexOf(t),e)}}while(null!=(t=t.parentNode))}function v(e){if(!m(e))return!1;let t=e.parentElement;do{if(t===s.current)return!0;if(t.getAttribute("data-rttabs"))break;t=t.parentElement}while(t);return!1}const{children:j,className:C,disabledTabClassName:k,domRef:N,focus:S,forceRenderTabPanel:R,onSelect:T,selectedIndex:E,selectedTabClassName:_,selectedTabPanelClassName:I,environment:A,disableUpDownKeys:D,disableLeftRightKeys:O,...U}={...g,...e};return r.createElement("div",Object.assign({},U,{className:p(C),onClick:w,onKeyDown:function(t){const{direction:n,disableUpDownKeys:r,disableLeftRightKeys:s}=e;if(v(t.target)){let{selectedIndex:l}=e,o=!1,c=!1;"Space"!==t.code&&32!==t.keyCode&&"Enter"!==t.code&&13!==t.keyCode||(o=!0,c=!1,w(t)),(s||37!==t.keyCode&&"ArrowLeft"!==t.code)&&(r||38!==t.keyCode&&"ArrowUp"!==t.code)?(s||39!==t.keyCode&&"ArrowRight"!==t.code)&&(r||40!==t.keyCode&&"ArrowDown"!==t.code)?35===t.keyCode||"End"===t.code?(l=function(){let e=h();for(;e--;)if(!x(y(e)))return e;return null}(),o=!0,c=!0):36!==t.keyCode&&"Home"!==t.code||(l=function(){const e=h();for(let t=0;t<e;t++)if(!x(y(t)))return t;return null}(),o=!0,c=!0):(l="rtl"===n?u(l):d(l),o=!0,c=!0):(l="rtl"===n?d(l):u(l),o=!0,c=!0),o&&t.preventDefault(),c&&a(l,t)}},ref:e=>{s.current=e,N&&N(e)},"data-rttabs":!0}),function(){let s=0;const{children:a,disabledTabClassName:d,focus:u,forceRenderTabPanel:p,selectedIndex:f,selectedTabClassName:m,selectedTabPanelClassName:x,environment:g}=e;n.current=n.current||[];let w=n.current.length-h();const v=(0,r.useId)();for(;w++<0;)n.current.push("".concat(v).concat(n.current.length));return i(a,(e=>{let a=e;if(o(e)){let s=0,o=!1;null==b&&function(e){const t=e||("undefined"!==typeof window?window:void 0);try{b=!("undefined"===typeof t||!t.document||!t.document.activeElement)}catch(n){b=!1}}(g);const c=g||("undefined"!==typeof window?window:void 0);b&&c&&(o=r.Children.toArray(e.props.children).filter(l).some(((e,t)=>c.document.activeElement===y(t)))),a=(0,r.cloneElement)(e,{children:i(e.props.children,(e=>{const a="tabs-".concat(s),l=f===s,c={tabRef:e=>{t.current[a]=e},id:n.current[s],selected:l,focus:l&&(u||o)};return m&&(c.selectedClassName=m),d&&(c.disabledClassName=d),s++,(0,r.cloneElement)(e,c)}))})}else if(c(e)){const t={id:n.current[s],selected:f===s};p&&(t.forceRender=p),x&&(t.selectedClassName=x),s++,a=(0,r.cloneElement)(e,t)}return a}))}())};y.propTypes={};const w=y,v={defaultFocus:!1,focusTabOnClick:!0,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1,disableLeftRightKeys:!1},j=e=>{const{children:t,defaultFocus:n,defaultIndex:s,focusTabOnClick:a,onSelect:l,...o}={...v,...e},[c,i]=(0,r.useState)(n),[d]=(0,r.useState)((e=>null===e.selectedIndex?1:0)(o)),[u,p]=(0,r.useState)(1===d?s||0:null);if((0,r.useEffect)((()=>{i(!1)}),[]),1===d){const e=f(t);(0,r.useEffect)((()=>{if(null!=u){const t=Math.max(0,e-1);p(Math.min(u,t))}}),[e])}let h={...e,...o};return h.focus=c,h.onSelect=(e,t,n)=>{"function"===typeof l&&!1===l(e,t,n)||(a&&i(!0),1===d&&p(e))},null!=u&&(h.selectedIndex=u),delete h.defaultFocus,delete h.defaultIndex,delete h.focusTabOnClick,r.createElement(w,h,t)};j.propTypes={},j.tabsRole="Tabs";const C=j,k={className:"react-tabs__tab-list"},N=e=>{const{children:t,className:n,...s}={...k,...e};return r.createElement("ul",Object.assign({},s,{className:p(n),role:"tablist"}),t)};N.tabsRole="TabList",N.propTypes={};const S=N,R="react-tabs__tab",T={className:R,disabledClassName:"".concat(R,"--disabled"),focus:!1,id:null,selected:!1,selectedClassName:"".concat(R,"--selected")},E=e=>{let t=(0,r.useRef)();const{children:n,className:s,disabled:a,disabledClassName:l,focus:o,id:c,selected:i,selectedClassName:d,tabIndex:u,tabRef:f,...h}={...T,...e};return(0,r.useEffect)((()=>{i&&o&&t.current.focus()}),[i,o]),r.createElement("li",Object.assign({},h,{className:p(s,{[d]:i,[l]:a}),ref:e=>{t.current=e,f&&f(e)},role:"tab",id:"tab".concat(c),"aria-selected":i?"true":"false","aria-disabled":a?"true":"false","aria-controls":"panel".concat(c),tabIndex:u||(i?"0":null),"data-rttab":!0}),n)};E.propTypes={},E.tabsRole="Tab";const _=E,I="react-tabs__tab-panel",A={className:I,forceRender:!1,selectedClassName:"".concat(I,"--selected")},D=e=>{const{children:t,className:n,forceRender:s,id:a,selected:l,selectedClassName:o,...c}={...A,...e};return r.createElement("div",Object.assign({},c,{className:p(n,{[o]:l}),role:"tabpanel",id:"panel".concat(a),"aria-labelledby":"tab".concat(a)}),s||l?t:null)};D.tabsRole="TabPanel",D.propTypes={};const O=D;var U=n(247),z=n(186),F=n(687),P=n(881),W=n(256),K=n(184);const L=()=>{const{movieId:e}=(0,s.UO)(),[t,n]=(0,r.useState)(null),[a,l]=(0,r.useState)(!1),[o,c]=(0,r.useState)(null);(0,r.useEffect)((()=>{(async()=>{l(!0);try{const t=await(0,F.Y5)(e);n(t)}catch(o){console.error("Error fetching movie details:",o),c("Something went wrong while fetching movie details.")}finally{l(!1)}})()}),[e]);const i=(0,s.s0)();return(0,K.jsxs)(K.Fragment,{children:[a&&(0,K.jsx)(P.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}),o&&(0,K.jsx)(W.default,{}),t&&(0,K.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px 50px",margin:"0 auto",maxWidth:"1280px"},children:[(0,K.jsx)("button",{onClick:()=>{i(-1)},style:{width:"200px",backgroundColor:"#ffcc00",padding:"10px 20px",borderRadius:"5px",color:"#000",fontSize:"16px",cursor:"pointer",display:"flex",alignItems:"center",textDecoration:"none",border:"none"},children:"\u2190 Go Back"}),(0,K.jsxs)("div",{style:{display:"flex",gap:"16px",alignItems:"center",marginTop:"20px"},children:[(0,K.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w500/".concat(t.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,K.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[(0,K.jsx)("h1",{style:{fontSize:"24px"},children:t.title}),(0,K.jsxs)("p",{style:{fontSize:"18px",color:"#555"},children:[(0,K.jsx)("strong",{children:"Overview:"})," ",t.overview]}),(0,K.jsxs)("p",{children:[(0,K.jsx)("strong",{children:"Release Date:"})," ",t.release_date]}),(0,K.jsxs)("p",{children:[(0,K.jsx)("strong",{children:"Vote Average:"})," ",t.vote_average]}),(0,K.jsxs)("p",{children:[(0,K.jsx)("strong",{children:"Genres:"})," ",t.genres.map((e=>e.name)).join(", ")]})]})]}),(0,K.jsxs)(C,{style:{marginTop:"20px",borderBottom:"1px solid #ccc"},children:[(0,K.jsxs)(S,{style:{listStyle:"none",padding:0,margin:0,display:"flex",gap:"20px"},children:[(0,K.jsx)(_,{style:{fontSize:"18px",fontWeight:"bold",cursor:"pointer",borderBottom:"2px solid transparent",paddingBottom:"8px"},children:"Cast"}),(0,K.jsx)(_,{style:{fontSize:"18px",fontWeight:"bold",cursor:"pointer",borderBottom:"2px solid transparent",paddingBottom:"8px"},children:"Reviews"})]}),(0,K.jsx)(O,{children:(0,K.jsx)(U.default,{})}),(0,K.jsx)(O,{children:(0,K.jsx)(z.default,{})})]})]})]})}},256:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});n(791);var r=n(184);const s=()=>(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#f0f0f0"},children:(0,r.jsx)("h1",{style:{fontSize:"36px",color:"#333",textAlign:"center",padding:"20px",border:"1px solid #ccc",borderRadius:"8px",backgroundColor:"#fff",boxShadow:"0 0 10px rgba(0, 0, 0, 0.1)"},children:"Page Not Found"})})})}}]);
//# sourceMappingURL=142.54118087.chunk.js.map