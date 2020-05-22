(function(e){function t(t){for(var r,o,i=t[0],u=t[1],c=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],r=!0,i=1;i<s.length;i++){var u=s[i];0!==n[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var r={},n={app:0},a=[];function o(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=r,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(s,r,function(t){return e[t]}.bind(null,r));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var r=s("85ec"),n=s.n(r);n.a},"16b0":function(e,t,s){},"25fd":function(e,t,s){"use strict";var r=s("16b0"),n=s.n(r);n.a},5496:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("h1",[e._v("Word Search Toolset")]),s("router-view")],1)},a=[],o=(s("034f"),s("2877")),i={},u=Object(o["a"])(i,n,a,!1,null,null,null),c=u.exports,l=s("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"messages"},[s("message-container",{attrs:{messages:e.messages}})],1),s("div",{staticClass:"word-search"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.findWords(t)}}},[s("p",[s("label",[e._v("Find synonyms for "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.phrase,expression:"phrase"}],attrs:{type:"text",placeholder:"word or phrase"},domProps:{value:e.phrase},on:{input:function(t){t.target.composing||(e.phrase=t.target.value)}}}),e._v(" that:")])]),s("ul",[s("li",[s("label",[e._v("sounds like "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.soundsLike,expression:"soundsLike"}],attrs:{type:"text",placeholder:"word or phrase"},domProps:{value:e.soundsLike},on:{input:function(t){t.target.composing||(e.soundsLike=t.target.value)}}})])]),s("li",[s("label",[e._v("start with the letter "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.startLetter,expression:"startLetter"}],attrs:{type:"text",placeholder:"single letter"},domProps:{value:e.startLetter},on:{input:function(t){t.target.composing||(e.startLetter=t.target.value)}}})])]),s("li",[s("label",[e._v("end with the letter "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.endLetter,expression:"endLetter"}],attrs:{type:"text",placeholder:"single letter"},domProps:{value:e.endLetter},on:{input:function(t){t.target.composing||(e.endLetter=t.target.value)}}})])])]),e._m(0)])]),s("div",{staticClass:"word-list-container"},[s("h2",[e._v("Word List")]),s("ul",{staticClass:"word-list"},[s("transition-group",{attrs:{name:"slideRight",tag:"div",appear:""}},e._l(e.wordList,(function(t){return s("li",{key:t},[e._v(e._s(t)+" "),s("button",{staticClass:"remove-word",on:{click:function(s){return e.removeWord(t)}}},[e._v("x")])])})),0)],1)]),s("div",{staticClass:"results-container"},[e.showSpinner?s("spinner"):e._e(),e.results&&e.results.length>0?s("h2",[e._v(e._s(e.results.length)+" Words Found")]):e._e(),e.results&&e.results.length>0?s("ul",{staticClass:"results"},[s("transition-group",{attrs:{name:"fade",tag:"div",appear:""}},e._l(e.results,(function(t){return s("li",{key:t.word,staticClass:"item"},[s("p",{staticClass:"result-word"},[e._v(e._s(t.word))]),s("p",[s("button",{staticClass:"add-word",on:{click:function(s){return e.addWord(t.word)}}},[e._v("Add to WordList")])])])})),0)],1):e.results&&0===e.results.length?s("div",{staticClass:"no-results"},[s("h2",[e._v("No Words Found")]),s("p",[e._v("Please adjust your search to find more words.")])]):e._e()],1)])},p=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[s("button",{attrs:{type:"submit"}},[e._v("Search")])])}],f=(s("99af"),s("c975"),s("a434"),s("bc3a")),v=s.n(f),h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},m=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v("Loading...")]),s("div",{staticClass:"sk-folding-cube"},[s("div",{staticClass:"sk-cube1 sk-cube"}),s("div",{staticClass:"sk-cube2 sk-cube"}),s("div",{staticClass:"sk-cube4 sk-cube"}),s("div",{staticClass:"sk-cube3 sk-cube"})])])}],g={name:"CubeSpinner"},w=g,b=(s("25fd"),Object(o["a"])(w,h,m,!1,null,"7323d745",null)),_=b.exports,y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.messages.length>0?s("ul",e._l(e.messages,(function(e){return s("message-item",{key:e.text,attrs:{message:e}})})),1):e._e()])},L=[],x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("transition",{attrs:{name:"fade",appear:"",tag:"div"}},[s("li",{directives:[{name:"show",rawName:"v-show",value:e.showMessage,expression:"showMessage"}],class:[e.message.type,"message"]},[e._v(" "+e._s(e.message.text)+" "),s("button",{on:{click:e.close}},[e._v("close")])])])},k=[];s("9ddc");var C={name:"MessageContainer",props:{message:Object},data:function(){return{showMessage:!0}},methods:{close:function(){this.showMessage=!1}}},O=C,W=(s("e0f5"),Object(o["a"])(O,x,k,!1,null,"5fa9f6fa",null)),j=W.exports;s("9ddc");var S={name:"MessageContainer",props:{messages:Array},components:{"message-item":j}},P=S,M=(s("cfab"),Object(o["a"])(P,y,L,!1,null,"10a065b8",null)),$=M.exports;s("9ddc");var E={name:"WordSearch",components:{spinner:_,"message-container":$},data:function(){return{results:null,wordList:[],messages:[],phrase:"",soundsLike:"",startLetter:"",endLetter:"",showSpinner:!1}},methods:{addWord:function(e){-1===this.wordList.indexOf(e)?(this.wordList.push(e),console.log("Added ".concat(e," to wordList.")),this.messages.push({type:"success",text:"".concat(e," added to WordList.")})):(console.log("Word is already on wordlist."),this.messages.push({type:"info",text:"".concat(e," is already on the WordList.")}))},removeWord:function(e){this.wordList.splice(this.wordList.indexOf(e),1),this.messages.push({type:"success",text:"".concat(e," removed from WordList.")})},findWords:function(){var e=this;this.showSpinner=!0,this.results=null,v.a.get("https://api.datamuse.com/words",{params:{ml:this.phrase,sl:this.soundsLike,sp:"".concat(this.startLetter,"*").concat(this.endLetter)}}).then((function(t){e.showSpinner=!1,e.results=t.data})).catch((function(t){e.showSpinner=!1,e.messages.push({type:"error",text:t.message})}))}}},N=E,T=(s("dd12"),Object(o["a"])(N,d,p,!1,null,"4ec4ac51",null)),A=T.exports;r["a"].use(l["a"]);var F=[{path:"/",name:"WordSearch",component:A}],J=new l["a"]({routes:F}),D=J;r["a"].config.productionTip=!1,new r["a"]({router:D,render:function(e){return e(c)}}).$mount("#app")},"85ec":function(e,t,s){},"8cf0":function(e,t,s){},cfab:function(e,t,s){"use strict";var r=s("5496"),n=s.n(r);n.a},d710:function(e,t,s){},dd12:function(e,t,s){"use strict";var r=s("8cf0"),n=s.n(r);n.a},e0f5:function(e,t,s){"use strict";var r=s("d710"),n=s.n(r);n.a}});
//# sourceMappingURL=app.d6ffb92b.js.map