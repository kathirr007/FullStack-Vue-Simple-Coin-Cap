(function(t){function e(e){for(var n,o,c=e[0],r=e[1],u=e[2],d=0,m=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&m.push(s[o][0]),s[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);l&&l(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,c=1;c<a.length;c++){var r=a[c];0!==s[r]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=r;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"063c":function(t,e,a){"use strict";a("ae1c")},"0fd1":function(t,e,a){},"40cf":function(t,e,a){"use strict";a("51c3")},4976:function(t,e,a){},"4e31":function(t,e,a){"use strict";a("6825")},"51c3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("AppHeader")],1),a("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[a("router-view")],1)],1)},i=[],o=(a("ac1f"),a("1276"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui top attached menu"},[a("div",{staticClass:"item name"},[t._v("SimpleCoinCap")]),a("router-link",{staticClass:"ui icon item",class:{item__active:"/"===t.$route.path},attrs:{to:"/"}},[a("i",{staticClass:"home icon"})]),a("router-link",{staticClass:"ui icon item",class:{item__active:"/about"===t.$route.path},attrs:{to:"/about"}},[a("i",{staticClass:"question icon"})]),a("div",{staticClass:"right menu"},[a("div",{staticClass:"ui right aligned category search item"},[a("div",{staticClass:"ui transparent icon input"},[a("v-select",{attrs:{id:"v-select",placeholder:"Search...",options:t.coins,label:"name"},on:{input:t.selectCoin},scopedSlots:t._u([{key:"option",fn:function(e){return[a("img",{staticClass:"select__logo",attrs:{src:"https://raw.githubusercontent.com/jsupa/crypto-icons/main/icons/"+e.symbol.toLowerCase()+".png"}}),a("span",{staticClass:"select__name"},[t._v(t._s(e.name))])]}}])}),a("i",{staticClass:"search link icon"})],1)])])],1)}),c=[],r=a("5530"),u=a("2f62"),l={name:"AppHeader",computed:Object(r["a"])({},Object(u["b"])(["coins"])),methods:{selectCoin:function(t){t&&this.$router.push("/currency/".concat(t.slug))}}},d=l,m=(a("063c"),a("2877")),_=Object(m["a"])(d,o,c,!1,null,"2e3801c6",null),v=_.exports,p={name:"App",components:{AppHeader:v},data:function(){return{transitionName:"slide-right"}},created:function(){this.$store.dispatch("getCoins"),this.$store.dispatch("getMarketData")},watch:{$route:function(t,e){var a=t.path.split("/").length,n=e.path.split("/").length;this.transitionName=a<n?"slide-left":"slide-right"}}},f=p,h=(a("4e31"),a("5c64"),Object(m["a"])(f,s,i,!1,null,null,null)),g=h.exports,C=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t.loading?a("div",{staticClass:"ui active large loader"}):a("div",{staticClass:"ui grid"},[a("div",{staticClass:"sixteen wide column coin-market"},[a("div",{staticClass:"ui four column grid"},[a("div",{staticClass:"column"},[a("div",{staticClass:"ui segment blue inverted"},[t._v(" Market Cap: "+t._s(t.formatCurrency(t.totalMarketCap))+" ")])]),a("div",{staticClass:"column"},[a("div",{staticClass:"ui segment blue inverted"},[t._v(" Volume (24Hr): "+t._s(t.formatCurrency(t.total24HrVolume))+" ")])]),a("div",{staticClass:"column"},[a("div",{staticClass:"ui segment blue inverted"},[t._v(" BTC Dominance: "+t._s(t.totalBTCPercentage.toFixed(4))+"% ")])]),a("div",{staticClass:"column"},[a("div",{staticClass:"ui segment blue inverted"},[t._v(" ETH Dominance: "+t._s(t.totalETHPercentage.toFixed(4))+"% ")])])])]),a("div",{staticClass:"sixteen wide column"},[t._m(0),t._l(t.coins,(function(t){return a("HomeCoinItem",{key:t.id,attrs:{coin:t,coinQuotes:t.quote.USD}})}))],2)])])},y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui segment header desktop"},[a("div",{staticClass:"ui grid"},[a("div",{staticClass:"one wide column"},[t._v("#")]),a("div",{staticClass:"two wide column"},[t._v("Name")]),a("div",{staticClass:"one wide column"},[t._v("Symbol")]),a("div",{staticClass:"three wide column"},[t._v("Market Cap")]),a("div",{staticClass:"two wide column"},[t._v("Price")]),a("div",{staticClass:"three wide column"},[t._v("Circulating Supply")]),a("div",{staticClass:"two wide column"},[t._v("% 1h")]),a("div",{staticClass:"two wide column"},[t._v("% 24h")])])])}],w=function(t){var e=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigis:0}),a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigis:4});return"$0"===e.format(t)?a.format(t):e.format(t)},k=function(t){return(new Intl.NumberFormat).format(t)},P=function(t){return t>0},S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui segment coin desktop"},[a("router-link",{staticClass:"ui grid",attrs:{to:"/currency/"+t.coin.slug}},[a("div",{staticClass:"one wide column segment__bold"},[t._v(t._s(t.coin.cmc_rank))]),a("div",{staticClass:"two wide column segment__primary"},[a("div",{staticClass:"coin-name"},[a("img",{staticClass:"segment__crypto-logo",attrs:{src:"https://raw.githubusercontent.com/jsupa/crypto-icons/main/icons/"+t.coin.symbol.toLowerCase()+".png"}}),t._v(" "+t._s(t.coin.name)+" ")])]),a("div",{staticClass:"one wide column segment__bold"},[t._v(t._s(t.coin.symbol))]),a("div",{staticClass:"three wide column segment__bold"},[t._v(" "+t._s(t.formatCurrency(t.coinQuotes.market_cap))+" ")]),a("div",{staticClass:"two wide column segment__primary"},[t._v(" "+t._s(t.formatCurrency(t.coinQuotes.price))+" ")]),a("div",{staticClass:"three wide column segment__primary"},[t._v(" "+t._s(t.formatNumber(t.coin.circulating_supply))+" "+t._s(t.coin.symbol)+" ")]),a("div",{staticClass:"two wide column",class:[t.isValuePositive(t.coinQuotes.percent_change_1h)?"segment__positive":"segment__negative"]},[t._v(" "+t._s(t.coinQuotes.percent_change_1h)+" % ")]),a("div",{staticClass:"two wide column",class:[t.isValuePositive(t.coinQuotes.percent_change_24h)?"segment__positive":"segment__negative"]},[t._v(" "+t._s(t.coinQuotes.percent_change_24h)+" % ")])])],1)},T=[],O={name:"HomeCoinItem",props:{coin:{type:Object},coinQuotes:{type:Object}},created:function(){this.formatCurrency=w,this.formatNumber=k,this.isValuePositive=P}},j=O,D=(a("7442"),a("b522"),Object(m["a"])(j,S,T,!1,null,"4f05f9cc",null)),E=D.exports,H={name:"HomePage",components:{HomeCoinItem:E},created:function(){this.formatCurrency=w},computed:Object(r["a"])({},Object(u["b"])(["loading","coins","totalMarketCap","total24HrVolume","totalBTCPercentage","totalETHPercentage"]))},A=H,$=(a("40cf"),Object(m["a"])(A,b,y,!1,null,"7c1723e4",null)),x=$.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ui grid about"},[a("h1",{staticClass:"ui header"},[t._v("SimpleCoinCap")]),a("div",{staticClass:"content"},[t._m(0),a("img",{staticClass:"content__book-img",attrs:{src:t.bookCover}}),t._m(1)])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" SimpleCoinCap displays market cap rankings, price, details and more for the top 100 largest cryptocurrencies based on overall market cap. Built with "),a("a",{attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v("Vue")]),t._v(", "),a("a",{attrs:{href:"https://router.vuejs.org/en/",target:"_blank"}},[t._v("Vue Router")]),t._v(", "),a("a",{attrs:{href:"https://vuex.vuejs.org/en/",target:"_blank"}},[t._v("Vuex")]),t._v(", and deployed on "),a("a",{attrs:{href:"https://www.heroku.com/",target:"_blank"}},[t._v("Heroku")]),t._v("; this app was built as a "),a("strong",[t._v("Screencast Tutorial")]),t._v(" as part of the enhanced package of "),a("a",{attrs:{href:"https://www.fullstack.io/vue/",target:"_blank"}},[t._v("Fullstack Vue: The Complete Guide to Vue.js")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" Cryptocurrency data obtained from the "),a("a",{attrs:{href:"https://coinmarketcap.com/api/",target:"_blank"}},[t._v("Coinmarketcap API")]),t._v(". Cryptocurrency logo images obtained from the "),a("a",{attrs:{href:"https://chasing-coins.com/api",target:"_blank"}},[t._v("Chasing Coins API")]),t._v(". Design loosely inspired by "),a("a",{attrs:{href:"https://dribbble.com/shots/4375541-Crypto-Market",target:"_blank"}},[t._v("Mark Henry")]),t._v(". Favicon created by "),a("a",{attrs:{href:"https://thenounproject.com/habanerodesigns/",target:"_blank"}},[t._v("Grant Taylor")]),t._v(". ")])}],N=a("9da1"),Q=a.n(N),F={name:"AboutPage",data:function(){return{bookCover:Q.a}}},I=F,U=(a("7422"),Object(m["a"])(I,V,M,!1,null,null,null)),B=U.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"not-found"}},[t._m(0),a("h2",{staticClass:"ui center icon"},[t._v(" Navigate to Home "),a("router-link",{attrs:{to:"/"}},[a("i",{staticClass:"home circle icon"})])],1)])},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",{staticClass:"ui center icon header"},[a("i",{staticClass:"question circle icon"}),t._v(" Sorry! This page can't be found ")])}],q={name:"NotFoundPage"},R=q,J=(a("8684"),Object(m["a"])(R,L,G,!1,null,null,null)),K=J.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.coin?a("div",{staticClass:"ui grid dashboard"},[a("div",{staticClass:"sixteen wide column"},[a("img",{attrs:{src:"https://raw.githubusercontent.com/jsupa/crypto-icons/main/icons/"+t.coin.symbol.toLowerCase()+".png"}}),a("h1",{staticClass:"ui header"},[t._v(" "+t._s(t.coin.name)+" "),a("span",[t._v(t._s(t.coin.symbol))])]),a("a",{staticClass:"ui orange label"},[t._v("Rank "+t._s(t.coin.cmc_rank))]),a("p",{staticClass:"dashboard__trading"},[t._v(" Currently trading at "),a("span",{staticClass:"segment__primary"},[t._v(" $"+t._s(t.coinQuotes.price))])]),a("p",{staticClass:"dashboard__market-cap"},[t._v(" with a Market Cap of "),a("span",{staticClass:"segment__primary"},[t._v(t._s(t.formatCurrency(t.coinQuotes.market_cap)))])]),a("div",{staticClass:"ui cards"},[a("div",{staticClass:"card"},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v("Volume (24hr)")]),a("div",{staticClass:"meta"},[t._v(" Volume that has been traded in the last 24hrs ")]),a("div",{staticClass:"description"},[t._v(" "+t._s(t.formatCurrency(t.coinQuotes.volume_24h))+" ")])])]),a("div",{staticClass:"card"},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v("1hr Change")]),a("div",{staticClass:"meta"},[t._v("Price change in the last hour")]),a("div",{staticClass:"description",class:[t.isValuePositive(t.coinQuotes.percent_change_1h)?"segment__positive":"segment__negative"]},[t._v(" "+t._s(t.coinQuotes.percent_change_1h)+" % ")])])]),a("div",{staticClass:"card"},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v("24hr Change")]),a("div",{staticClass:"meta"},[t._v("Price change in the last 24 hrs")]),a("div",{staticClass:"description",class:[t.isValuePositive(t.coinQuotes.percent_change_24h)?"segment__positive":"segment__negative"]},[t._v(" "+t._s(t.coinQuotes.percent_change_24h)+" % ")])])]),a("div",{staticClass:"card"},[a("div",{staticClass:"content"},[a("div",{staticClass:"header"},[t._v("7 day Change")]),a("div",{staticClass:"meta"},[t._v("Price change in the last 7 days")]),a("div",{staticClass:"description",class:[t.isValuePositive(t.coinQuotes.percent_change_7d)?"segment__positive":"segment__negative"]},[t._v(" "+t._s(t.coinQuotes.percent_change_7d)+" % ")])])])])])]):t._e()},W=[],X={name:"CoinDetailsPage",props:{slug:{type:String}},created:function(){this.formatCurrency=w,this.isValuePositive=P},computed:{coin:function(){return this.$store.getters.coinDataFromSlug(this.slug)},coinQuotes:function(){return this.$store.getters.coinDataFromSlug(this.slug).quote.USD}}},Y=X,Z=(a("b29b"),a("66de"),Object(m["a"])(Y,z,W,!1,null,"2393fb24",null)),tt=Z.exports,et=(a("d81d"),a("b64b"),a("7db0"),a("bc3a")),at=a.n(et);n["a"].use(u["a"]);var nt=new u["a"].Store({state:{coins:[],totalMarketCap:0,total24HrVolume:0,totalBTCPercentage:0,totalETHPercentage:0,loading:!1},mutations:{UPDATE_COINS:function(t,e){var a=e.data,n=Object.keys(a).map((function(t){return a[t]}));t.coins=n.sort((function(t,e){return t.cmc_rank-e.cmc_rank}))},UPDATE_MARKET_DATA:function(t,e){var a=e.data,n=a.quote;t.totalMarketCap=n.USD.total_market_cap,t.total24HrVolume=n.USD.total_volume_24h,t.totalBTCPercentage=a.btc_dominance,t.totalETHPercentage=a.eth_dominance},SET_LOADING:function(t,e){t.loading=e}},actions:{getCoins:function(t){var e=t.commit;e("SET_LOADING",!0),at.a.get("/api/coins").then((function(t){e("UPDATE_COINS",t.data),e("SET_LOADING",!1)}))},getMarketData:function(t){var e=t.commit;e("SET_LOADING",!0),at.a.get("/api/market_data").then((function(t){e("UPDATE_MARKET_DATA",t.data),e("SET_LOADING",!1)}))}},getters:{coins:function(t){return t.coins},totalMarketCap:function(t){return t.totalMarketCap},total24HrVolume:function(t){return t.total24HrVolume},totalBTCPercentage:function(t){return t.totalBTCPercentage},totalETHPercentage:function(t){return t.totalETHPercentage},loading:function(t){return t.loading},coinDataFromSlug:function(t){return function(e){return t.coins.find((function(t){return t.slug===e}))}}},modules:{}});n["a"].use(C["a"]);var st=function(t,e,a){var n=t.params.slug,s=nt.getters.coins;s.length?nt.getters.coinDataFromSlug(n)?a():a("/not-found"):nt.watch((function(t){return t.coins}),(function(){nt.getters.coinDataFromSlug(n)?a():a("/not-found")}))},it=[{path:"*",name:"NotFoundPage",component:K},{path:"/",name:"HomePage",component:x},{path:"/about",name:"AboutPage",component:B},{path:"/currency/:slug",name:"CoinDetailsPage",component:tt,props:!0,beforeEnter:st}],ot=new C["a"]({mode:"history",routes:it}),ct=ot,rt=(a("87ee"),a("16cc")),ut=a.n(rt),lt=a("0ecd"),dt=a("4a7a"),mt=a.n(dt);a("6dfc");ut.a.add(lt["a"]),n["a"].use(ut.a),n["a"].component("v-select",mt.a),n["a"].config.productionTip=!1,new n["a"]({router:ct,store:nt,render:function(t){return t(g)}}).$mount("#app")},"5c64":function(t,e,a){"use strict";a("d32a")},"66de":function(t,e,a){"use strict";a("afa2")},6825:function(t,e,a){},7422:function(t,e,a){"use strict";a("cf81")},7442:function(t,e,a){"use strict";a("fd93")},8684:function(t,e,a){"use strict";a("0fd1")},"9da1":function(t,e,a){t.exports=a.p+"img/book-cover.4457e48a.png"},ae1c:function(t,e,a){},afa2:function(t,e,a){},b29b:function(t,e,a){"use strict";a("4976")},b522:function(t,e,a){"use strict";a("bc35")},bc35:function(t,e,a){},cf81:function(t,e,a){},d32a:function(t,e,a){},fd93:function(t,e,a){}});
//# sourceMappingURL=app.e2028c5a.js.map