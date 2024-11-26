!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7a8dc42a-20f0-47df-9d62-bb8bd438c104",e._sentryDebugIdIdentifier="sentry-dbid-7a8dc42a-20f0-47df-9d62-bb8bd438c104")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4458],{62816:function(e,t,o){var n=o(74512);t.Z=e=>{let{size:t}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"product-tile__banner product-tile__banner--".concat(t," conten-placeholder__plp-product-tile"),children:[(0,n.jsx)("div",{className:"product-tile__img-wrapper--transition conten-placeholder__plp-product-tile-img conten-placeholder__bg--product-tile"}),(0,n.jsxs)("div",{className:"product-tile__info",children:[(0,n.jsx)("h6",{className:"conten-placeholder__plp-product-tile-hd"}),(0,n.jsx)("div",{className:"conten-placeholder__bg conten-placeholder__plp-product-tile-title"}),(0,n.jsx)("div",{className:"conten-placeholder__bg conten-placeholder__plp-product-tile-price"})]})]})})}},14458:function(e,t,o){o.r(t),o.d(t,{default:function(){return A}});var n=o(74512),i=o(32735),r=o(89218),a=o.n(r),c=o(35837),s=o(84919),l=o(43195),d=o(72943),u=o(78539),p=o(69122),v=o(56859),g=o(57497),h=o(59736),f=o(93686),m=o(76598),_=o(24470),y=o(87315),E=o(46321),b=o(13158);class w{async getProductsFromToken(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,o=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,r=arguments.length>5?arguments[5]:void 0,a=arguments.length>6?arguments[6]:void 0,c=arguments.length>7?arguments[7]:void 0,s=arguments.length>8?arguments[8]:void 0,l=arguments.length>9?arguments[9]:void 0;if(0===e.length)return"";let d=this.getDefaultTokenFromLogic(e),u=b.env.ODOSCOPE_BASEURL||"https://odoscope.cloud/tomtailor/decisions",p=this.getParameterByLogic(e,o,n,i),v=this.getFilterString(r,a,c,s,l),g="osc".concat(d),h=(0,E.ej)(g),f=h?"&osc-".concat(d,"=").concat(h):"",_="".concat(u,"?isShortAnswer=true&token=").concat(d,"&limit=").concat(t).concat(p).concat(v?"&".concat(v):"").concat(f),y=[];try{var w,T;let e=await m.Z.get(_);if(null===(w=e.data)||void 0===w?void 0:w.variants)return e.data.variants.forEach(e=>{y.push(e.variantID)}),!h&&(null===(T=e.data.oscCookie)||void 0===T?void 0:T["osc-".concat(d)])&&(0,E.d8)(g,e.data.oscCookie["osc-".concat(d)],2592e3,"/"),y.join(",")}catch(e){console.error("TT-ERROR: Odoscope requests failed. ".concat(e))}return""}getDefaultTokenFromLogic(e){switch(e){case"ALSO_BOUGHT":return y.q.alsoBought;case"CART":return y.q.cart;case"CATEGORY":return y.q.category;case"PERSONAL":return y.q.personal;case"RELATED":return y.q.related;default:return e}}getParameterByLogic(e,t,o,n){let i=[];if("CATEGORY"===e&&(n||t)&&i.push("categoryID=".concat(n||t)),o){let e=o.includes(",")?"pl_prod":"prodID";i.push("".concat(e,"=").concat(o))}return(i.length?"&":"")+i.join("&")}getFilterString(e,t,o,n,i){let r=[];if(null==e?void 0:e.length){let t={};e.forEach(e=>{let{odoscopeFilterType:o,odoscopeFilterValue:n}=e,i=n.trim().replace(",","|");i&&(t[o]?t[o].push(i):t[o]=[i])});let o=Object.entries(t).map(e=>{let[t,o]=e;return"".concat(t,"=").concat(o.join("|"))});r.push(...o)}return t&&r.push("cr_is_new=true"),o&&r.push("cr_on_sale=true"),n&&r.push("cr_is_sustainable=true"),i&&r.push("cr_is_grosse_groessen=1"),r.join("&")}anonymizeIp(e){return e.replace(RegExp("((([0-9]{1,3})\\.){3})([0-9]{1,3})","gm"),"$10")}async getOdoscopeProductsByCategory(e,t){var o,n,i,r,a;let c=b.env.ODOSCOPE_BASEURL,s=b.env.ODOSCOPE_HOSTNAME,l=48,d=null!==(i=Number(null==t?void 0:t.offSet))&&void 0!==i?i:0,u=b.env.ODOSCOPE_TOKEN,p=b.env.ODOSCOPE_TOPSELLER_TOKEN;if(null==t?void 0:t.sortAttributes){if(!Object.keys(t.sortAttributes).includes(_.w.Topseller)||!p)return p||console.trace("TT-ERR: ODOSCOPE_TOPSELLER_TOKEN is not set"),{items:[],total:0,oscCookie:""};u=p}if(!u)return console.trace("TT-ERR: ODOSCOPE_TOKEN is not set"),{items:[],total:0,oscCookie:""};let v=(null==t?void 0:t.odoscopeCookie)?"&osc-".concat(u,"=").concat(t.odoscopeCookie):"",g=this.anonymizeIp(null!==(r=null==t?void 0:null===(o=t.clientIp)||void 0===o?void 0:o.toString())&&void 0!==r?r:"127.0.0.1"),h=[];if(0===d&&(null==t?void 0:t.abpid)&&"string"==typeof(null==t?void 0:t.abpid)){null==t||t.abpid.split(",").forEach(e=>{h.push(e)});let e=h.length;l=Math.abs(l-e)}let f="".concat(c,"?hostname=").concat(s,"&limit=").concat(l,"&offset=").concat(d,"&ip=").concat(g,"&token=").concat(u,"&categoryID=").concat(e,"&isShortAnswer=true").concat(v,"&cp_timestamp=").concat(Date.now());if(t){let o=Object.keys(t).filter(e=>"categoryId"===e||e.startsWith("facets")).reduce((e,o)=>(t[o]&&(e[o]=t[o]),e),{});f+=await this.getOdoscopeParams(e,o)}return(null==t?void 0:null===(n=t.referer)||void 0===n?void 0:n.includes("tom-tailor"))&&(f="".concat(f,"&ref=").concat(encodeURIComponent(null!==(a=null==t?void 0:t.referer.toString())&&void 0!==a?a:""))),(null==t?void 0:t.userAgent)&&(f="".concat(f,"&ua=").concat(encodeURIComponent(t.userAgent.toString()))),await m.Z.get(f,{headers:{"Content-Type":"application/json","Cache-Control":"no-cache"}}).then(function(e){try{var t,o;let n=e.data,i=n.oscCookie["osc-".concat(u)],r=n.additionalInfo.totalObjectsCount,a=h.concat(null===(t=n.variants)||void 0===t?void 0:t.map(e=>e.variantID)),c="odoscope";return n.goControl?c="control":(null===(o=n.variants)||void 0===o?void 0:o.length)===0&&(c="empty"),{items:a,oscCookie:i,total:r,nextCursor:"offset:".concat((d+l).toString()),odoscopeEvent:{action:c,label:n.oscTracking}}}catch(e){return console.trace("TT-ERR: OdoscopeApi: error on getting odoscope result data",e),{items:[],total:0,oscCookie:""}}}).catch(e=>(console.trace("TT-ERR: OdoscopeApi: error on sending request to odoscope",e),{items:[],total:0,oscCookie:""}))}async getOdoscopeParams(e,t){let o=!1,n=await this.getFacetsByCategoryId(e),i=[],r=[],a=!1,c=!1;return(Object.entries(t).forEach(e=>{let[l,d]=e;if(l.includes("[prices]")||l.includes("[max_savings_percentage]")){if(l.includes("[prices]")&&!a){let e=t["facets[prices][min]"].toString(),o=t["facets[prices][max]"].toString();i.push("minPrice=".concat(e,"&maxPrice=").concat(o)),a=!0}if(l.includes("[max_savings_percentage]")&&!c){let e=t["facets[max_savings_percentage][min]"].toString(),o=t["facets[max_savings_percentage][max]"].toString();i.push("min_sale_price=".concat(e,"&max_sale_price=").concat(o)),c=!0}}else if(l.includes("[boolean]"))l.includes("[isNew]")&&i.push("cr_is_new=true"),l.includes("[sale]")&&i.push("cr_on_sale=true"),l.includes("[plussizeGenericArticle]")&&i.push("cr_is_grosse_groessen=1"),l.includes("[styleSustainability]")&&i.push("cr_is_sustainable=true");else if(l.includes("[terms]")){var u;let e=Number(null===(u=/facets\[([0-9]+)\]\[terms.*/.exec(l))||void 0===u?void 0:u[1]);if(e){if(!s.NB[e])return o=!0,console.log("TT-ERR: tried to use filter with facet ID: facetId from paramKey: ".concat(l)),!1;n.forEach(t=>{if("id"in t&&e===t.id){var o;let n="";null===(o=t.values)||void 0===o||o.forEach(t=>{Number(d)===t.id&&(n=t.value,1015===e?n=(0,s.GS)(t.value):1145===e&&(n=t.value.toLocaleUpperCase()),r[e]?r[e]+="|".concat(n):r[e]="".concat(s.NB[e],"=").concat(n))})}})}}}),o)?"":(i.length?"&":"")+(i.join("&")+"&".concat(Object.values(r).join("&")))}constructor(){this.getFacetsByCategoryId=async e=>{var t,o;let n=new f.is({host:"https://tomt-live.storefront.api.scayle.cloud/v1/",shopId:null!==(t=h.M5.de_DE)&&void 0!==t?t:1501,auth:{type:"token",token:null!==(o=b.env.BAPI_AUTH_TOKEN)&&void 0!==o?o:""}});return await n.filters.get({where:{categoryId:+e,disableFuzziness:!0},with:["values"]}).catch(e=>(console.trace("TT-ERR: ProductApi:getFacetsByProductQuery failed.",e),[]))}}}var T=o(99824),O=o(62816),S=o(19296),C=o(96608),R=o(13158),I=e=>{let{headline:t,subline:o,size:r,assetTypeNumber:f=3,headlineAlign:m,headlineBold:_,headlineTypography:y,headlineColor:E,sublineAlign:b,sublineBold:I,sublineTypography:A,sublineColor:x,limit:N,logic:j,overwriteRecommendationTracking:k=!1,category:D,referenceKey:P,searchQuery:L,tasticId:B,useEmarsys:U,odoscopeLogic:Q,odoscopeCustomToken:K,pdpSku:z,plpCategoryId:G,odoscopeCategoryId:F,odoscopeFilterWithValues:H,odoscopeIsNew:q,odoscopeIsSale:M,odoscopeIsSustainable:W,odoscopeIsLargeSizes:Z}=e,Y=(0,c.useRouter)(),{locale:V}=Y,J=(0,p.y0)("product"),[X,$]=(0,i.useState)([]),[ee,et]=(0,i.useState)("e"),[eo,en]=(0,i.useState)(!0),{emarsysConsentGiven:ei}=g.T.getState(),er=(0,v.x)(e=>{var t;return null===(t=e.cart)||void 0===t?void 0:t.data}),ea=new w,ec=e=>{let t=[];if("CART"===e){var o,n;t=null!==(n=null==er?void 0:null===(o=er.lineItems)||void 0===o?void 0:o.map(e=>e.referenceKey).filter(e=>void 0!==e))&&void 0!==n?n:[]}else z&&(t=[...t,z]);return t.join(",")},es=()=>{try{var e,t;let o=JSON.parse(null!==(t=localStorage.getItem(h.uf.UC_SETTINGS))&&void 0!==t?t:"{}");if(!o.services)return;let n=R.env.EMARSYS_CONSENT_ID||"yagBUGpwQTRXWU",i=(null===(e=o.services.find(e=>e.id===n))||void 0===e?void 0:e.status)||!1;g.T.setState({emarsysConsentGiven:i})}catch(e){console.error("TT-ERR: failed to parse JSON")}},el=e=>{let t=[],o=e.page.products;o.length<=0||(o.map(e=>{e.group_id&&t.push(e.group_id)}),eu(t.join(",")))},ed=(e,t)=>{var o;let n=null!==(o=null!=G?G:sessionStorage.getItem(h.Hw.BREADCRUMB_CATEGORY_ID))&&void 0!==o?o:void 0;ea.getProductsFromToken(e,t,n,ec(e),F,H,q,M,W,Z).then(e=>{eu(e)})},eu=e=>{if(!e){en(!1);return}J.getByReferenceKeysTT(e).then(t=>{if(t.length>0){let o=t.map(e=>s.V5.transform(e,void 0,void 0,!0)),n=e.split(",");$(o.sort((e,t)=>{var o,i;return n.indexOf(null!==(o=e.referenceKey)&&void 0!==o?o:"")-n.indexOf(null!==(i=t.referenceKey)&&void 0!==i?i:"")})),en(!0)}else en(!1)}).catch(t=>{console.log("TT-ERR: Error on getting products for ".concat(e," => ").concat(t))})};(0,i.useEffect)(()=>(es(),window.addEventListener("UC_UI_VIEW_CHANGED",es),()=>{window.removeEventListener("UC_UI_VIEW_CHANGED",es)}),[]);let ep=()=>{setTimeout(()=>{if(et("e"),!U||!ei&&U){let e=(null==K?void 0:K.length)?K:Q;e&&(et("o"),ed(e,N));return}if(k){if(window.ScarabQueue=window.ScarabQueue||[],window.ScarabQueue.push(["enableCORS"]),window.ScarabQueue.push(["recommend",{logic:j,containerId:B,limit:N,success:el}]),["CATEGORY","DEPARTMENT","POPULAR"].includes(j)&&D&&window.ScarabQueue.push(["category",D]),("RELATED"===j||"ALSO_BOUGHT"===j)&&P&&window.ScarabQueue.push(["view",P.replace("_-_"," ")]),"SEARCH"===j&&L&&window.ScarabQueue.push(["searchTerm",L]),D){let e=D.split(">")[0].trim().toLowerCase();["damen","herren","kids","home"].includes(e)&&window.ScarabQueue.push(["include","category","has",e])}window.ScarabQueue.push(["language",V]),window.ScarabQueue.push(["go"])}else window.EmarsysQueue=window.EmarsysQueue||[],window.EmarsysQueue.push(["recommend",{logic:j,containerId:B,limit:N,success:el}])},100)};(0,i.useEffect)(()=>(es(),ep(),window.addEventListener("popstate",ep),()=>{window.removeEventListener("popstate",ep)}),[z,G,Y.asPath,ei]);let ev=e=>{let t=e.target;if(t.matches("use")||t.classList.contains("product-tile__icon")){e.preventDefault();return}};return(0,n.jsx)("div",{className:"product-slider my-recommendations",datatype:ee,children:eo&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(T.default,{headline:t,subline:o,headlineAlign:m,headlineBold:_,headlineTypography:y,headlineColor:E,sublineAlign:b,sublineBold:I,sublineTypography:A,sublineColor:x}),(0,n.jsxs)(C.default,{variableWidth:!0,padding:!0,className:"product-slider__slider",draggable:!1,children:[0===X.length&&Array(N).fill(1,0).map((e,t)=>(0,n.jsx)(O.Z,{size:r},t)),X.slice(0,N).map((e,t)=>{var o,i;return(0,n.jsx)(u.Z,{children:(0,n.jsx)("span",{"data-scarabitem":null===(o=e.referenceKey)||void 0===o?void 0:o.replace("_-_"," "),children:(0,n.jsx)(a(),{href:e.url,className:"product-slider__link",onClick:ev,title:e.name,children:(0,n.jsx)(S.Z,{className:"product-slider__tile",productId:e.productId,...e.sizes[0],hoverImages:(0,l.Ho)(null===(i=e.sizes[0])||void 0===i?void 0:i.hoverImages,f),image:(0,l.Ey)(e.sizes,l.kr,f),url:e.url,size:r,variants:e.variants,color:e.color,categories:e.categories,EAN:e.EAN,viewItemListPosition:t+1,referenceKey:e.referenceKey,alwaysEagerLoading:!0,type:"emarsysReco",sizes:e.sizes,attributes:e.attributes,priceRange:e.priceRange,price:(0,d.MP)(e.priceRange),flags:(0,d.UI)(e.priceRange,e.sizes),discount:e.priceRange.min.withTax/100,priceWithoutTax:e.priceRange.min.withoutTax,unclickableTitle:!0})})},e.productId)},t)})]})]})})},A=e=>{var t,o,i;let{data:r,id:a}=e;return(0,n.jsx)(I,{...r,pdpSku:null===(t=r.product)||void 0===t?void 0:t.referenceKey,plpCategoryId:null===(i=r.query)||void 0===i?void 0:null===(o=i.category)||void 0===o?void 0:o.categoryId,tasticId:a})}},43195:function(e,t,o){o.d(t,{Ey:function(){return n},Ho:function(){return r},kr:function(){return i}});let n=(e,t,o)=>{var n,i,r;let a=null!==(r=null===(i=e[0].images)||void 0===i?void 0:null===(n=i.flat())||void 0===n?void 0:n[1])&&void 0!==r?r:{};if(t.hasOwnProperty(o))return t[o].every(t=>{var o,n,i,r;return null===(n=e[0].images)||void 0===n||null===(o=n.flat())||void 0===o||!o.find(e=>e.number==t)||(a=null===(r=e[0].images)||void 0===r?void 0:null===(i=r.flat())||void 0===i?void 0:i.find(e=>e.number==t),!1)}),a},i={7:[32,31,7,3,5,1],3:[3,5,1,32,31,7],5:[5,3,1,32,31,7],60:[60],61:[61]},r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.filter(e=>e.number&&i[t].includes(e.number)).sort((e,o)=>i[t].indexOf(e.number)-i[t].indexOf(o.number))}}}]);