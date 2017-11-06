webpackJsonp([1],{"1Xjw":function(e,t){},"7+p6":function(e,t,s){"use strict";var n=s("fZjL"),a=s.n(n),i=s("baUs"),o=s("Aunj");t.a={name:"VueTerminalEmulator",data:function(){return{serviceName:"vTerminal",messageList:[],actionResult:"",lastLineContent:"...",inputCommand:"",supportingCommandList:""}},computed:{lastLineClass:function(){return"&nbsp"===this.lastLineContent?"cursor":"..."===this.lastLineContent?"loading":void 0}},created:function(){var e=this;this.supportingCommandList=a()(i.a).concat(a()(o.a)),this.handleRun("example").then(function(){e.messageList.push({level:"System",message:'Type "help" to get a supporting command list.'})})},methods:{handleFocus:function(){this.$refs.inputBox.focus()},handleCommand:function(){var e=this;this.messageList.push({message:"$ "+this.inputCommand});var t=this.inputCommand.split(" ");"help"===t[0]?this.printHelp(t[1]):i.a[this.inputCommand]?i.a[this.inputCommand].messages.map(function(t){return e.messageList.push(t)}):o.a[this.inputCommand.split(" ")[0]]?this.handleRun(this.inputCommand.split(" ")[0],this.inputCommand):(this.messageList.push({level:"System",message:"Unknown Command."}),this.messageList.push({level:"System",message:'type "help to get a supporting command list.'})),this.inputCommand="",this.autoScroll()},handleRun:function(e,t){var s=this;return this.lastLineContent="...",o.a[e][e](this.messageList,t).then(function(t){console.log(t),"success"===t.type?(s.messageList.push({level:"Success",message:e+": "+(t.message||"done")}),s.lastLineContent="&nbsp"):(s.messageList.push({level:"Error",message:e+": "+t.message}),s.lastLineContent="&nbsp")})},printHelp:function(e){var t=this;if(e){var s=i.a[e]||o.a[e];this.messageList.push({message:s.description})}else this.supportingCommandList.map(function(e){return t.messageList.push({message:"- "+e})}),this.messageList.push({message:"Enter help <command> to get help for a particular command."})},time:function(){return(new Date).toLocaleTimeString().split("").splice(2).join("")},autoScroll:function(){var e=this;this.$nextTick(function(){e.$refs.terminalWindow.scrollTop=e.$refs.terminalLastLine.offsetTop})}}}},Aunj:function(e,t,s){"use strict";var n=s("//Fk"),a=s.n(n),i=[{time:(new Date).toLocaleTimeString(),level:"Info",message:"Terminal Initializing ............"},{time:(new Date).toLocaleTimeString(),level:"Warning",message:"This is a Waning Message!"},{time:(new Date).toLocaleTimeString(),level:"Error",message:"Oops, Something Went Wrong!"},{time:(new Date).toLocaleTimeString(),level:"Success",message:"Take it easy! Everything OK!"}];t.a={echo:{description:"Echoes input",echo:function(e,t){return t=t.split(" "),t.splice(0,1),new a.a(function(s){e.push({time:(new Date).toLocaleTimeString().split("").splice(2).join(""),message:t.join(" ")}),s({type:"success",message:"done!"})})}},example:{description:"Run an example to show you what this project can do.",example:function(e){var t=0;return new a.a(function(s){var n=setInterval(function(){i[t].time=(new Date).toLocaleTimeString().split("").splice(2).join(""),e.push(i[t]),t++,i[t]||(clearInterval(n),s({type:"success",message:"Terminal Initialized Successfully!"}))},1e3)})}}}},JcWJ:function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},a=[],i={render:n,staticRenderFns:a};t.a=i},M93x:function(e,t,s){"use strict";function n(e){s("UYKI")}var a=s("xJD8"),i=s("JcWJ"),o=s("VU/8"),r=n,m=o(a.a,i.a,!1,r,null,null);t.a=m.exports},Msdv:function(e,t,s){"use strict";function n(e){s("1Xjw")}var a=s("7+p6"),i=s("qJ+V"),o=s("VU/8"),r=n,m=o(a.a,i.a,!1,r,"data-v-5b5d9ea7",null);t.a=m.exports},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("7+uW"),a=s("M93x"),i=s("YaEn");n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,template:"<App/>",components:{App:a.a}})},UYKI:function(e,t){},YaEn:function(e,t,s){"use strict";var n=s("7+uW"),a=s("/ocq"),i=s("Msdv");n.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"Terminal",component:i.a}]})},baUs:function(e,t,s){"use strict";var n={version:{description:"Return this project version",messages:[{message:"1.0.0"}]},contact:{description:"How to contact author",messages:[{message:"Website: http://xiaofeixu.cn"},{message:"Email: xuxiaofei915@gmail.com"},{message:"Github: https://github.com/dongsuo"},{message:"WeChat Offical Account: dongsuo"}]},about:{description:"About author",messages:[{message:"My name is xu xiaofei. I'm a programmer, You can visit my personal website at http://xiaofeixu.cn to learn more about me."}]},readme:{description:"",messages:[{message:"This is a component that emulates a command terminal in Vue"}]}};t.a=n},"qJ+V":function(e,t,s){"use strict";var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"terminal",staticStyle:{width:"60%",margin:"0 auto"},on:{click:e.handleFocus}},[s("div",{staticStyle:{position:"relative"}},[e._m(0),e._v(" "),s("div",{ref:"terminalWindow",staticStyle:{position:"absolute",top:"0",left:"0",right:"0",overflow:"auto","z-index":"1","margin-top":"30px","max-height":"650px"}},[s("div",{staticClass:"terminal-window",attrs:{id:"terminalWindow"}},[s("p",[e._v("Welcome to vTerminator.")]),e._v(" "),s("p",[s("span",{staticClass:"prompt"},[e._v("$")]),s("span",{staticClass:"cmd"},[e._v("cd "+e._s(e.serviceName))])]),e._v(" "),e._l(e.messageList,function(t,n){return s("p",{key:n},[s("span",[e._v(e._s(t.time))]),e._v(" "),t.level?s("span",{class:t.level},[e._v(e._s(t.level)+":")]):e._e(),e._v(" "),s("pre",{staticClass:"cmd"},[e._v(e._s(t.message))])])}),e._v(" "),e.actionResult?s("p",[s("span",{staticClass:"cmd"},[e._v(e._s(e.actionResult))])]):e._e(),e._v(" "),s("p",{ref:"terminalLastLine",staticClass:"terminal-last-line"},["&nbsp"===e.lastLineContent?s("span",{staticClass:"prompt"},[e._v("$ \\"+e._s(e.serviceName)+" ")]):e._e(),e._v(" "),s("span",[e._v(e._s(e.inputCommand))]),e._v(" "),s("span",{class:e.lastLineClass,domProps:{innerHTML:e._s(e.lastLineContent)}}),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputCommand,expression:"inputCommand"}],ref:"inputBox",staticClass:"input-box",attrs:{disabled:"&nbsp"!==e.lastLineContent,autofocus:"true",type:"text"},domProps:{value:e.inputCommand},on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleCommand(t)},input:function(t){t.target.composing||(e.inputCommand=t.target.value)}}})])],2)])])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("h4",[e._v("Terminal")]),e._v(" "),s("ul",{staticClass:"shell-dots"},[s("li",{staticClass:"red"}),e._v(" "),s("li",{staticClass:"yellow"}),e._v(" "),s("li",{staticClass:"green"})])])}],i={render:n,staticRenderFns:a};t.a=i},xJD8:function(e,t,s){"use strict";t.a={name:"app"}}},["NHnr"]);
//# sourceMappingURL=app.353c2fec1a5809d8fb79.js.map