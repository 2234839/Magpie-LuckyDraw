(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{36:function(e,t,n){e.exports=n.p+"static/media/bg.622bb7a1.jpeg"},37:function(e,t,n){e.exports=n.p+"static/media/albird.aab060a4.svg"},42:function(e,t,n){e.exports=n(69)},47:function(e,t,n){},48:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(21),c=n.n(i),o=(n(47),n(2)),l=n(3),s=n(6),u=n(5),m=n(7),d=n(8),h=n(35),p=n.n(h),f=n(36),v=n.n(f),g=(n(48),{number:{value:100,density:{enable:!1,value_area:3200}},color:{value:"#0FF"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:1,speed:10,opacity_min:.5,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:20,size_min:1,sync:!0}},line_linked:{enable:!0,distance:120,color:"#FF0",opacity:.6,width:1}}),b=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"particles"},this.props.showBackground&&r.a.createElement(p.a,{params:{particles:g},style:{position:"fixed",width:"100%",height:"100%",background:"#1a1a1a",backgroundImage:"url(".concat(v.a,")"),backgroundSize:"cover",pointerEvents:"none"}}),this.props.children)}}]),t}(a.Component),y=n(37),E=n.n(y),O=n(12),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:this.props.className},r.a.createElement("img",{width:24,height:24,src:E.a}),r.a.createElement("span",null,this.props.activityName))}}]),t}(a.Component),w=Object(O.a)(function(e){return{activityName:e.dataReducer.activitySetting.name}})(k),C=function(e){return r.a.createElement("footer",{className:e.className},"\xa9",(new Date).getFullYear(),r.a.createElement("span",null," ",r.a.createElement("a",{target:"_blank",href:"http://wangbaiyuan.cn"},"Baiyuan Wang")," "),"All Rights Reversed.",r.a.createElement("span",null,"  ",r.a.createElement("a",{target:"_blank",href:"https://github.com/geekeren/Magpie-LuckyDraw"},"Github")," "))},P=(n(53),n(27)),j=(n(54),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(P.b,{to:"/activity-setting",className:"creat_new_activity"},"\u521b\u5efa\u4e00\u4e2a\u62bd\u5956\u6d3b\u52a8"))}}]),t}(a.Component)),N=n(19),S="SET_LOTTERY_POOL",z="ADD_WINNER",I="SET_ACTIVITY_NAME",R="SET_LOTTERY_SETTING",x=function(){function e(t,n){Object(o.a)(this,e),this.name=t,this.phone=n}return Object(l.a)(e,[{key:"toString",value:function(){return"".concat(this.name,"\t").concat(this.phone)}}],[{key:"fromString",value:function(t){var n=t.split(/\t+|\s+/,2);if(n[0]&&n[1]){if(!/^[1][3-9][0-9]{9}$/.test(n[1]))throw new Error("'".concat(n[0],"'\u7684\u624b\u673a\u53f7\u6709\u8bef: \u8bf7\u8f93\u516511\u4f4d\u6570\u5b57"));return new e(n[0],n[1])}throw new Error("'".concat(t,"' \u65e0\u6548: \u59d3\u540d\u548c\u624b\u673a\u53f7\u90fd\u9700\u8981"))}},{key:"participantToString",value:function(e){return"".concat(e.name,"\t").concat(e.phone)}}]),e}(),D="\u6768\u5e42\t13110000000\n\u674e\u6613\u5cf0\t13110000001\n\u674e\u5b87\u6625\t13110000002\n\u5f20\u9753\u9896\t13110000003\n\u5468\u7b14\u7545\t13110000004\n\u97e9\u96ea\t13110000005\n\u8303\u51b0\u51b0\t13110000006\n\u8d75\u8587\t13110000007\n\u9a6c\u82cf\t13110000008\n\u674e\u5c0f\u7490\t13110000009\n\u5218\u6d9b\t13110000010\n\u6797\u4f9d\u6668\t13110000011\n\u9648\u4e54\u6069\t13110000012\n\u5bb9\u7956\u513f\t13110000013\n\u6797\u5fc3\u5982\t13110000014\n",T=(n(59),n(20)),_=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).next=function(){n.props.history.push("/lottery-setting")},n.verifyParticipantsInput=function(e){return new Promise(function(t,n){try{t(e.split("\n").filter(function(e){return!!e||0!==e.replace(/(^s*)|(s*$)/g,"").length}).map(function(e){return x.fromString(e)}))}catch(a){n(a)}})},n.onTextChange=function(e){n.setState({allParticipantsInput:e},function(){n.verifyParticipants()})},n.saveNameList=function(){n.verifyParticipantsInput(n.state.allParticipantsInput).then(function(e){n.props.setLotteryPool(e),n.next()}).catch(function(e){n.setState({error:e})})},n.loadDemoData=function(){n.onTextChange(D)},n.state={error:e.allParticipants&&e.allParticipants.length>0?"":"\u62bd\u5956\u6c60\u4e3a\u7a7a\uff01",allParticipantsInput:n.props.allParticipants.map(function(e){return x.participantToString(e)}).join("\n")},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.verifyParticipants()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"lottery-pool"},r.a.createElement("header",null,"\u62bd\u5956\u6c60\u8bbe\u7f6e"),r.a.createElement("section",null,"\u6bcf\u4e00\u884c\u8868\u793a\u4e00\u540d\u53c2\u4e0e\u8005\uff08\u683c\u5f0f\uff1a\u2018\u59d3\u540d \u624b\u673a\u53f7\u2019\uff09",r.a.createElement("span",{className:"load_demo"},r.a.createElement(N.a,{icon:T.c}),r.a.createElement("a",{onClick:this.loadDemoData},"\u52a0\u8f7d\u793a\u4f8b\u6570\u636e"))),r.a.createElement("div",{id:"input_container"},r.a.createElement("textarea",{id:"nameList",type:"text",multiple:!0,required:!0,placeholder:"\u90ed\u6653 13800138000",value:this.state.allParticipantsInput,onChange:function(t){return e.onTextChange(t.target.value)},style:{outlineColor:this.state.error?"#ff5417":"#50c617"}}),r.a.createElement("div",{className:"notice_msg"},this.state.error&&r.a.createElement("span",{className:"err_msg"},this.state.error),this.state.validParticipantCount&&r.a.createElement("div",null,"\u53c2\u4e0e\u8005\u603b\u6570\uff1a",this.state.validParticipantCount))),r.a.createElement("section",{className:"next-btn"},r.a.createElement("button",{disabled:!!this.state.error,className:this.state.error?"disable":"",onClick:this.saveNameList},"NEXT")))}},{key:"verifyParticipants",value:function(){var e=this;this.verifyParticipantsInput(this.state.allParticipantsInput).then(function(t){t.length>0?e.setState({error:"",validParticipantCount:t.length}):e.setState({error:"\u62bd\u5956\u6c60\u4e3a\u7a7a\uff01"})}).catch(function(t){e.setState({error:t.message})})}}]),t}(a.Component),B=Object(O.a)(function(e){return{allParticipants:e.dataReducer.lotteryPool.allParticipants}},{setLotteryPool:function(e){return{type:S,allParticipants:e}}})(_),L=function(){function e(){Object(o.a)(this,e),this.noDuplicate=!0,this.isRolling=!1,this.isPickBlocked=!1}return Object(l.a)(e,[{key:"rollUp",value:function(){if(!this.isRolling){if(clearInterval(this.timer),0===this.all.length)throw new Error("No item in pool");this.isRolling=!0,this.timer=setInterval(this.change.bind(this),80)}return this}},{key:"removeItem",value:function(e){this.all.splice(e,1)}},{key:"change",value:function(){var e=Math.floor(Math.random()*this.all.length);this.currentlySelectedIndex=e,this.currentlySelectedItem=this.all[e],this.onSelectedChangedCallback(this.currentlySelectedItem)}},{key:"setOnSelectedChangedCallback",value:function(e){return this.onSelectedChangedCallback=e,this}},{key:"setOnPickBlockedChangedCallback",value:function(e){return this.onPickBlockedChangedCallback=e,this}},{key:"setNoDuplicate",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.noDuplicate=e,this}},{key:"setPickBlocked",value:function(e){this.isPickBlocked=e,this.onPickBlockedChangedCallback(e)}},{key:"pickOneThenDo",value:function(e){var t=this;this.isPickBlocked||(this.setPickBlocked(!0),setTimeout(function(){clearInterval(t.timer),t.noDuplicate&&t.removeItem(t.currentlySelectedIndex),e(t.currentlySelectedItem),t.isRolling=!1,t.setPickBlocked(!1)}.bind(this),1e3,this))}}],[{key:"from",value:function(t){return e.instance||(e.instance=new e),e.instance.all=t,e.instance}}]),e}(),F=function(e,t){return r.a.createElement("div",null,e.substr(0,3),r.a.createElement("span",{class:"mask"},t),e.substr(7,11))},M=window.$,W=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e={entries:(this.props.tags.length>100?this.props.tags.slice(0,100):this.props.tags).map(function(e){return{label:e}}),width:1500,height:1024,radius:"65%",radiusMin:75,bgDraw:!1,opacityOver:.95,opacityOut:.05,opacitySpeed:6,fov:800,speed:.2,fontFamily:"Oswald, Arial, sans-serif",fontSize:"16",fontColor:"#eee",fontWeight:"normal",fontStyle:"normal",fontStretch:"normal",fontToUpperCase:!1};this.$el=M(this.el),this.$el.svg3DTagCloud(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tag-cloud",ref:function(t){return e.el=t}})}}]),t}(r.a.Component),q=(n(60),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onClick=function(){if(n.state.noPrize)n.props.history.push("/result");else{if(n.state.isPrizeChanged)return n.setState({isPrizeChanged:!1}),void n.computeCurrentPrize();try{n.drawService.isRolling?n.drawService.pickOneThenDo(function(e){e.prize=n.state.currentPrize,n.props.addWinner(e),n.computeCurrentPrize()}):n.drawService.rollUp()}catch(e){console.error(e.message)}}},n.getCurrentPrize=function(e){var t=n.props.lotteryPool.winners.filter(function(e){return e.prize.id===n.state.currentPrize.id});return!e&&(n.state.currentPrize.totalCount-t.length||0)>=0&&n.state.currentPrize?(0===(n.state.currentPrize.totalCount-t.length||0)&&n.setState({isPrizeChanged:!0}),n.state.currentPrize):n.props.lotteryDrawing.setting.find(function(e){var t=n.props.lotteryPool.winners.filter(function(t){return t.prize.id===e.id});return!((e.totalCount-t.length||0)<=0)})},n.computeCurrentPrize=function(){var e=n.getCurrentPrize(n.state.isPrizeChanged);if(e){var t=n.props.lotteryPool.winners.filter(function(t){return t.prize.id===e.id}).length;n.setState({currentPrize:e,existingCountOfCurrentPrize:t})}else n.setState({noPrize:!0});return e},n.getTitle=function(){return 0!==n.state.existingCountOfCurrentPrize||n.state.isPrizeChanged?n.state.noPrize?"":"".concat(n.state.currentPrize.title,"(").concat(n.state.existingCountOfCurrentPrize," / ").concat(n.state.currentPrize.totalCount,")"):"".concat(n.state.currentPrize.title,"(").concat(n.state.currentPrize.totalCount,"\u540d)")},n.getContent=function(){return n.state.selectedParticipant.phone&&(0!==n.state.existingCountOfCurrentPrize||n.drawService.isRolling||n.state.isPrizeChanged)?n.state.noPrize?"\u62bd\u5956\u7ed3\u675f":r.a.createElement("div",{className:"selectedParticipant"},r.a.createElement("div",{className:"name"},n.state.selectedParticipant.name),r.a.createElement("div",{className:"phone"},F(n.state.selectedParticipant.phone,"\ud83d\ude1d\ud83d\ude1d\ud83d\ude1d\ud83d\ude1d"))):"\u7b49\u5f85\u5f00\u5956"},n.getButton=function(){return n.state.noPrize?"\u62bd\u5956\u7ed3\u679c":n.drawService?n.drawService.isRolling?"stop":n.state.isPrizeChanged?"next":"start":""},n.state={selectedParticipant:{},currentPrize:"",isPrizeChanged:!1,btnDisabled:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"lottery-drawing"},r.a.createElement("div",{className:"name-cloud-container"},r.a.createElement(W,{tags:this.props.allParticipants.map(function(e){return e.name})})),r.a.createElement("div",null,r.a.createElement("header",{className:"prize-title"},this.getTitle()),r.a.createElement("div",{className:"rolling"},this.getContent()),r.a.createElement("button",{className:this.state.btnDisabled?"wait":"",disabled:this.state.btnDisabled,onClick:this.onClick.bind(this)},this.getButton())))}},{key:"launchFullscreen",value:function(e){e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}},{key:"componentDidMount",value:function(){var e=this,t=this.props.lotteryDrawing.setting.reduce(function(e,t){return e+t.totalCount},0);if(this.props.allParticipants.length<t)return alert("\u5956\u9879\u6570\u5927\u4e8e\u53c2\u4e0e\u8005\u6570"),void this.props.history.goBack();this.launchFullscreen(document.documentElement),this.drawService=L.from(this.props.allParticipants).setOnSelectedChangedCallback(function(t){e.setState({selectedParticipant:t})}).setNoDuplicate(!0).setOnPickBlockedChangedCallback(function(t){e.setState({btnDisabled:t})}),this.computeCurrentPrize()}}]),t}(a.Component)),A=Object(O.a)(function(e){return{allParticipants:e.dataReducer.lotteryPool.allParticipants,lotteryPool:e.dataReducer.lotteryPool,lotteryDrawing:e.dataReducer.lotteryDrawing}},{addWinner:function(e){return{type:z,winner:e}}})(q),$=(n(61),n(62),n(23)),G=n(34),H=Object($.SortableHandle)(function(){return r.a.createElement(N.a,{icon:T.a,size:16,className:"drag-handle"})}),J=Object($.SortableContainer)(function(e){var t=e.items,n=e.onItemChange,a=Object($.SortableElement)(function(e){var a=e.value,i=e.sortIndex;return r.a.createElement("div",{key:i,className:"lottery-item"},r.a.createElement(H,null),r.a.createElement("div",{className:"lottery-item-name"},r.a.createElement("input",{type:"text",defaultValue:a.title,onBlur:function(e){t.find(function(e){return e.id===a.id}).title=e.target.value,n(t)}})),r.a.createElement("div",{className:"lottery-item-count"},r.a.createElement("input",{type:"number",defaultValue:a.totalCount,onBlur:function(e){t.find(function(e){return e.id===a.id}).totalCount=parseInt(e.target.value),n(t)}})),r.a.createElement("div",{className:"lottery-item-remove",onClick:function(){t=t.filter(function(e){return e.id!==a.id}),n(t)}},r.a.createElement(N.a,{icon:T.d})))});return r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(a,{key:"item-".concat(t),index:t,value:e,sortIndex:t})}))}),U=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onSortEnd=function(e){var t=e.oldIndex,a=e.newIndex;n.props.setLottery(Object($.arrayMove)(n.props.lotteries,t,a))},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;setTimeout(function(){t.lotteryItemBodyRef&&t.lotteryItemBodyRef.scrollTo(t.lotteryItemBodyRef.scrollHeight,t.lotteryItemBodyRef.scrollHeight)},100)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"lottery-item-body",ref:function(t){return e.lotteryItemBodyRef=t}},r.a.createElement(J,{useDragHandle:!0,items:this.props.lotteries,onItemChange:function(t){return e.props.setLottery(Object.assign([],t))},onSortEnd:this.onSortEnd.bind(this)})),r.a.createElement("div",{className:"lottery-item-add",onClick:function(){var t=e.props.lotteries;t.push({id:G(),title:"\u5e78\u8fd0\u5956",totalCount:3}),e.props.setLottery(Object.assign([],t))}},r.a.createElement(N.a,{icon:T.b}),"\u6dfb\u52a0\u5956\u9879"))}}]),t}(r.a.Component),V=Object(O.a)(function(e){return{lotteries:e.dataReducer.lotteryDrawing.setting}},{setLottery:function(e){return{type:R,lottery:e}}})(U),Y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"prizes-container"},r.a.createElement("div",{className:"lottery-items-header"},r.a.createElement("div",{className:"lottery-item-name"},"\u5956\u9879"),r.a.createElement("div",{className:"lottery-item-count"},"\u6570\u91cf")),r.a.createElement(V,null)))}}]),t}(r.a.Component),X=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).next=function(){n.props.history.push("/lottery-drawing")},n.state={error:""},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"lottery-setting"},r.a.createElement("header",null,"\u5956\u9879\u8bbe\u7f6e"),r.a.createElement("section",{className:"lottery-edit"},r.a.createElement(Y,null)),r.a.createElement("section",{className:"next-btn"},r.a.createElement("button",{onClick:this.next},"NEXT")))}}]),t}(a.Component),Q=(n(65),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).onNameChange=function(e){n.setState({activityName:e.target.value})},n.next=function(){n.props.setActivityName(n.state.activityName),n.props.history.push("/lottery-pool")},n.state={activityName:e.activityName},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"activity-setting"},r.a.createElement("div",null,r.a.createElement("header",null,"\u6d3b\u52a8\u540d\u79f0"),r.a.createElement("section",null,r.a.createElement("input",{defaultValue:this.props.activityName,onChange:this.onNameChange.bind(this)})),r.a.createElement("section",{className:"next-btn"},r.a.createElement("button",{disabled:!this.state.activityName,className:this.state.activityName?"":"disable",onClick:this.next.bind(this)},"NEXT"))))}}]),t}(a.Component)),K=Object(O.a)(function(e){return{activityName:e.dataReducer.activitySetting.name}},{setActivityName:function(e){return{type:I,name:e}}})(Q),Z=(n(66),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,this.winnerList()))}},{key:"winnerList",value:function(){return r.a.createElement("div",{className:"result_part"},this.props.winnerGroups.reverse().map(function(e){return r.a.createElement("div",null,r.a.createElement("header",{className:"special_prize_result_header"},e.prizeName),e.winner.map(function(e){return r.a.createElement("div",{className:"result_item"},r.a.createElement("div",{className:"result_name"},e.name),r.a.createElement("div",{className:"result_phone"},F(e.phone,"****")))}))}))}}]),t}(a.Component)),ee=Object(O.a)(function(e){var t=e.dataReducer.lotteryPool.winners,n=[];return t.forEach(function(e){var t=n.findIndex(function(t){return t.prizeName===e.prize.title});t<0?n.push({prizeName:e.prize.title,totalCount:e.prize.totalCount,winner:[e]}):n[t].winner.push(e)}),{winnerGroups:n}})(Z),te=n(25),ne=n(14),ae=n(40),re=n.n(ae),ie=n(41),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{allParticipants:[],winners:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:e.allParticipants=t.allParticipants||[];break;case z:t.winner&&e.winners.push(t.winner)}return Object.assign({},e)},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:e.name=t.name||"Magpie \u62bd\u5956\u5e73\u53f0"}return Object.assign({},e)},le=n(34),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{setting:[{id:le(),title:"\u4e09\u7b49\u5956",totalCount:3},{id:le(),title:"\u4e8c\u7b49\u5956",totalCount:2},{id:le(),title:"\u4e00\u7b49\u5956",totalCount:1}]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:e.setting=t.lottery}return Object.assign({},e)},ue=Object(ne.combineReducers)({lotteryPool:ce,activitySetting:oe,lotteryDrawing:se}),me=Object(ie.composeWithDevTools)({}),de=function(e){return Object(ne.createStore)(Object(ne.combineReducers)({dataReducer:ue}),e?function(){var e=localStorage.getItem("state");return JSON.parse(e)}():void 0,me(Object(ne.applyMiddleware)(re.a)))},he=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).saveState=function(e){var t=JSON.stringify(e);localStorage.setItem("state",t)},n.state={confirmRecovered:!1},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("state")&&window.confirm("\u662f\u5426\u6062\u590d\u4e0a\u6b21\u6570\u636e\uff1f")?this.store=de(!0):(this.store=de(!1),localStorage.removeItem("state")),this.setState({confirmRecovered:!0}),this.store.subscribe(function(){window.onbeforeunload=function(t){var n=e.store.getState();e.saveState(n)}})}},{key:"render",value:function(){return r.a.createElement(P.a,null,r.a.createElement(b,{showBackground:!0},this.state.confirmRecovered?r.a.createElement(te.a,{store:this.store},r.a.createElement("div",null,r.a.createElement(w,{className:"header"}),r.a.createElement("article",{className:"main"},r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:j}),r.a.createElement(d.b,{path:"/result",component:ee}),r.a.createElement(d.b,{path:"/lottery-drawing",component:A}),r.a.createElement(d.b,{path:"/lottery-pool",component:B}),r.a.createElement(d.b,{path:"/lottery-setting",component:X}),r.a.createElement(d.b,{path:"/activity-setting",component:K}),r.a.createElement(d.a,{from:"/*",to:"/"}))),r.a.createElement(C,{className:"footer"}))):void 0))}}]),t}(a.Component),pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(he,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");pe?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):fe(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):fe(e)})}}()}},[[42,1,2]]]);
//# sourceMappingURL=main.b617e6da.chunk.js.map