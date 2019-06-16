(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(16),o=a.n(r),s=a(22),l=a(29),c=a(68),d=(a(88),a(19)),p=a(12),m=a(24),u=a(20),f=a(23),y=a(33),_=a(111),h=a(112),g=a(99),b=a(117),C=a(7),R=a(115),k=a(73),v=a.n(k),I=(a(89),function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).dialogBoxOpen=function(){a.setState({dialogBoxVisable:!0})},a.dialogBoxClose=function(){a.setState({dialogBoxVisable:!1})},a.dialogBoxHandler=function(e,t,i){a.dialogBoxClose(),"remove"===e?a.props.itemRemove(t,i):a.props.itemDuplicate(t,i)},a.dialogBox=function(){var e=a.props.classes;return n.a.createElement("div",{className:"dialogBox",display:a.state.dialogBoxVisable?"flex":"none"},n.a.createElement(R.a,{color:"primary",className:e.button,variant:"contained","aria-label":"Add",onClick:function(){return a.dialogBoxHandler("duplicate",a.props.listTitle,a.props.i)}},n.a.createElement(v.a,null)),n.a.createElement(R.a,{color:"default",className:e.button,variant:"contained","aria-label":"Add",onClick:function(){return a.dialogBoxHandler("remove",a.props.listTitle,a.props.i)}},"delete"))},a.state={dialogBoxVisable:!1},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){console.log(this.props.listType);var e=this.props.classes,t="Vinyl Records"===this.props.listType;return n.a.createElement("div",{className:t?"itemContainer":"itemContainer itemCd",style:{backgroundImage:"url(".concat(this.props.image)},onMouseEnter:this.dialogBoxOpen,onClick:this.dialogBoxOpen,onMouseLeave:this.dialogBoxClose},this.state.dialogBoxVisable?this.dialogBox():null,n.a.createElement(_.a,{container:!0,style:{width:t?null:150},justify:"space-between",alignItems:"center"},n.a.createElement(h.a,{color:"textPrimary",className:e.typography,variant:"body1"},this.props.genre),n.a.createElement(g.a,{className:e.avatar,src:this.props.artist_image})),n.a.createElement(_.a,{align:"center"},n.a.createElement(h.a,{color:"textPrimary",className:e.typographyf,variant:"h2"},this.props.artist_name.split(" ").map(function(e){return e[0].toUpperCase()+e.slice(1)}).join(" ")),n.a.createElement(h.a,{color:"textPrimary",className:e.typography,variant:"subtitle1"},this.props.name.split(" ").map(function(e){return e[0].toUpperCase()+e.slice(1)}).join(" "))),n.a.createElement(_.a,{container:!0,style:{width:t?null:150},justify:"space-between",alignItems:"center"},n.a.createElement(b.a,{label:this.props.tracks_number,className:e.chip}),n.a.createElement(b.a,{label:"".concat(this.props.quantity_in_stock,"/").concat(this.props.quantity),className:e.chip})))}}]),t}(i.Component)),j=Object(s.b)("",function(e){return{itemRemove:function(t,a){return e(function(e,t){return{type:"REMOVE",payload:{lsType:e,index:t}}}(t,a))},itemDuplicate:function(t,a){return e(function(e,t){return{type:"DUPLICATE",payload:{lsType:e,index:t}}}(t,a))}}})(Object(C.a)(function(e){return{button:{margin:"5px",borderRadius:"20px",width:"100px"},avatar:{height:50,width:50}}})(I)),L=a(116),O=a(118),E=a(75),T=a.n(E),x=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).onSubmit=function(){a.props.filterList(a.state.inputValue,a.props.listType),a.setState({inputValue:""})},a.state={inputValue:""},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"updateInputValue",value:function(e){this.setState({inputValue:e.target.value})}},{key:"render",value:function(){var e=this,t=this.props.classes;return n.a.createElement(_.a,{container:!0,className:t.root,justify:"space-between",alignItems:"center",m:"50px"},n.a.createElement(_.a,{item:!0,xs:6,sm:9,md:10},n.a.createElement(L.a,{fullWidth:!0,value:this.state.inputValue,onChange:function(t){return e.updateInputValue(t)},placeholder:"Search for ".concat(this.props.listType),endAdornment:n.a.createElement(O.a,{position:"end"},n.a.createElement(T.a,null))})),n.a.createElement(_.a,{item:!0},n.a.createElement(R.a,{size:"small",variant:"contained",className:t.button,color:"primary",onClick:function(t){return e.onSubmit(t)}},"search"),n.a.createElement(R.a,{size:"small",variant:"outlined","aria-label":"Add",className:t.button,color:"primary",onClick:function(){return e.props.filterReset(e.props.listType)}},"reset")))}}]),t}(i.Component),w=Object(s.b)("",function(e){return{filterList:function(t,a){return e(function(e,t){return{type:"Vinyl Records"===t?"FILTER_RECORDS_LIST":"FILTER_CDS_LIST",search:e}}(t,a))},filterReset:function(t){return e(function(e){return{type:"FILTER_RESET",listType:e}}(t))}}})(Object(C.a)(function(){return{root:{marginTop:20},button:{borderRadius:20,margin:2}}})(x)),B=a(113),V=a(114),A=(a(100),function(e){function t(){var e,a;Object(d.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).handleDelete=function(e,t){a.props.remove(e,t)},a.handleDuplicate=function(e,t){a.props.dulipcate(e,t)},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return n.a.createElement(B.a,{className:t.root},n.a.createElement(h.a,{variant:"h2",color:"commonBlack"},this.props.title),n.a.createElement(w,{listType:"Vinyl Records"===this.props.title?"Vinyl Records":"Cd"}),n.a.createElement(V.a,{className:t.gridList},this.props.listItems.map(function(t,a){return n.a.createElement(j,{listType:e.props.title,listTitle:e.props.title,key:a,i:a,genre:t.genre,artist_image:t.artist_image,artist_name:t.artist_name,name:t.name,image:t.image,tracks_number:t.tracks_number,quantity_in_stock:t.quantity_in_stock,quantity:t.quantity})})))}}]),t}(i.Component)),S=Object(C.a)(function(e){var t;return{root:{margin:"20px 0"},gridList:(t={justifyContent:"space-between"},Object(y.a)(t,e.breakpoints.down("xs"),{flexWrap:"nowrap"}),Object(y.a)(t,e.breakpoints.up("sm"),{flexWrap:"wrap"}),t)}})(A),N=a(58),D=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.storeInitialData(N.vinyl_records,"records"),this.props.storeInitialData(N.cds,"cds")}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(S,{listItems:this.props.filteredRecordLs.length>0?this.props.filteredRecordLs:this.props.initialRecordItems,title:"Vinyl Records"}),n.a.createElement(S,{listItems:this.props.filteredCdLs.length>0?this.props.filteredCdLs:this.props.initialCdItems,title:"Cds"}))}}]),t}(i.Component),q=Object(s.b)(function(e){return{initialRecordItems:e.initialRecordItems,initialCdItems:e.initialCdItems,filteredRecordLs:e.filteredRecordLs,filteredCdLs:e.filteredCdLs}},function(e){return{storeInitialData:function(t,a){return e(function(e,t){return function(a){e.map(function(e){return a(function(e,t){return e.artist_name=e.artist_name.toLowerCase(),e.name=e.name.toLowerCase(),{type:"STORE_INITIAL_DATA",payload:{item:e,itemType:t}}}(e,t))})}}(t,a))}}})(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=a(76),P=a.n(M),z=a(77),F=Object(z.a)({typography:{useNextVariants:!0,body1:{fontFamily:"'Varela Round', sans-serif"},h2:{fontFamily:"'Suez One', serif",fontSize:"1.5rem"},subtitle1:{fontFamily:"'Varela Round', sans-serif"}},palette:{primary:{light:"#63ccff",main:"#1d5fd8",dark:"#006db3",contrastText:"#fff"},text:{primary:"#fff",textSecondary:"rgba(0, 0, 0, 0.85)"}},breakpoints:{values:{xs:375,sm:600,md:960,lg:1280,xl:1920}}}),W=a(18),H=a(25),J={initialCdItems:[],initialRecordItems:[],filteredRecordLs:[],filteredCdLs:[]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STORE_INITIAL_DATA":return"records"===t.payload.itemType?Object(H.a)({},e,{initialRecordItems:[t.payload.item].concat(Object(W.a)(e.initialRecordItems))}):Object(H.a)({},e,{initialCdItems:[t.payload.item].concat(Object(W.a)(e.initialCdItems))});case"FILTER_RECORDS_LIST":var a=t.search.toLowerCase(),i=e.initialRecordItems.filter(function(e){return e.artist_name.includes(a)||e.name.includes(a)});return i.length<=0?alert("no items as been found"):alert("".concat(i.length," items found")),Object(H.a)({},e,{filteredRecordLs:i});case"FILTER_CDS_LIST":var n=t.search.toLowerCase(),r=e.initialCdItems.filter(function(e){return e.artist_name.includes(n)||e.name.includes(n)});return r.length<=0?alert("no items as been found"):alert("".concat(r.length," items found")),Object(H.a)({},e,{filteredCdLs:r});case"FILTER_RESET":return Object(H.a)({},e,{filteredRecordLs:"Vinyl Records"===t.listType?[]:e.filteredRecordLs,filteredCdLs:"Cd"===t.listType?[]:e.filteredCdLs});case"REMOVE":var o=[],s=e.initialRecordItems.indexOf(e.filteredRecordLs[t.payload.index]),l=e.initialCdItems.indexOf(e.filteredCdLs[t.payload.index]);return"Vinyl Records"===t.payload.lsType?o=s>=0?e.initialRecordItems.filter(function(e,t){return t!==s}):e.initialRecordItems.filter(function(e,a){return a!==t.payload.index}):"Cds"===t.payload.lsType&&(o=l>=0?e.initialCdItems.filter(function(e,t){return t!==l}):e.initialCdItems.filter(function(e,a){return a!==t.payload.index})),Object(H.a)({},e,{initialRecordItems:"Vinyl Records"===t.payload.lsType?o:e.initialRecordItems,initialCdItems:"Cds"===t.payload.lsType?o:e.initialCdItems,filteredRecordLs:"Vinyl Records"===t.payload.lsType?e.filteredRecordLs.filter(function(e,a){return a!==t.payload.index}):e.filteredRecordLs,filteredCdLs:"Cds"===t.payload.lsType?e.filteredCdLs.filter(function(e,a){return a!==t.payload.index}):e.filteredCdLs});case"DUPLICATE":var c="";return e.filteredRecordLs.length>0&&"Vinyl Records"===t.payload.lsType?c="RecordsLs":e.filteredCdLs.length>0&&"Cds"===t.payload.lsType&&(c="CdLs"),Object(H.a)({},e,{initialRecordItems:"Vinyl Records"===t.payload.lsType?[].concat(Object(W.a)(e.initialRecordItems),[e.initialRecordItems[t.payload.index]]):e.initialRecordItems,initialCdItems:"Cds"===t.payload.lsType?[].concat(Object(W.a)(e.initialCdItems),[e.initialCdItems[t.payload.index]]):e.initialCdItems,filteredRecordLs:"RecordsLs"===c?[].concat(Object(W.a)(e.filteredRecordLs),[e.filteredRecordLs[t.payload.index]]):e.filteredRecordLs,filteredCdLs:"CdLs"===c?[].concat(Object(W.a)(e.filteredCdLs),[e.filteredCdLs[t.payload.index]]):e.filteredCdLs});default:return e}},G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,K=Object(l.d)(U,G(Object(l.a)(function(e){return function(e){return function(t){return e(t)}}},c.a)));o.a.render(n.a.createElement(s.a,{store:K},n.a.createElement(P.a,{theme:F},n.a.createElement(q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e){e.exports={vinyl_records:[{genre:"Rock",artist_image:"https://live.staticflickr.com/2754/4226435386_f2aa37fe3a.jpg",artist_name:"Nirvana",name:"Nirvana",image:"https://upload.wikimedia.org/wikipedia/commons/2/2f/Nirvana_-_You_Know_You%27re_Right.jpg",tracks_number:14,quantity_in_stock:2,quantity:7},{genre:"Indie",artist_image:"https://upload.wikimedia.org/wikipedia/commons/1/1b/Arctic_Monkeys.jpg",artist_name:"Arctic Monkeys",name:"AM",image:"https://upload.wikimedia.org/wikipedia/commons/e/ed/%22AM%27%22_%28Arctic_Monkeys%29.jpg",tracks_number:12,quantity_in_stock:6,quantity:10},{genre:"Pop",artist_image:"https://upload.wikimedia.org/wikipedia/commons/c/cf/Amy_Winehouse_f4962007_crop.jpg",artist_name:"Amy Winehouse",name:"Back To Black",image:"https://live.staticflickr.com/219/509500547_b019f82353.jpg",tracks_number:11,quantity_in_stock:8,quantity:8},{genre:"Rock",artist_image:"https://upload.wikimedia.org/wikipedia/commons/6/60/Doors_electra_publicity_photo.JPG",artist_name:"The Doors",name:"Morrison Hotel",image:"https://upload.wikimedia.org/wikipedia/commons/9/98/Doors_-_Morrison_Hotel.jpg",tracks_number:11,quantity_in_stock:1,quantity:13},{genre:"Jazz",artist_image:"https://upload.wikimedia.org/wikipedia/commons/f/fa/Miles_Davis_by_Palumbo.jpg",artist_name:"Miles Davis",name:"Kind Of Blue",image:"https://live.staticflickr.com/7503/15642906150_119878c75c_b.jpg",tracks_number:5,quantity_in_stock:4,quantity:10}],cds:[{genre:"Rock",artist_image:"https://upload.wikimedia.org/wikipedia/commons/e/e7/QueenPerforming1977.jpg",artist_name:"Queen",name:"Greatest Hits",image:"https://live.staticflickr.com/5018/5549864193_90c6c41b3b_b.jpg",tracks_number:17,quantity_in_stock:3,quantity:4},{genre:"R&B",artist_image:"https://live.staticflickr.com/8506/8521348253_fe23ace4cf_z.jpg",artist_name:"Beyonc\xe9",name:"Beyonc\xe9",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Beyonc%C3%A9_-_Beyonc%C3%A9.svg/1024px-Beyonc%C3%A9_-_Beyonc%C3%A9.svg.png",tracks_number:14,quantity_in_stock:8,quantity:8},{genre:"Jazz",artist_image:"https://upload.wikimedia.org/wikipedia/commons/e/e8/Ray_Charles_classic_piano_pose.jpg",artist_name:"Ray Charles",name:"The Great Ray Charles",image:"https://live.staticflickr.com/3100/2552573614_11e9fbcbd2_b.jpg",tracks_number:8,quantity_in_stock:2,quantity:11}]}},79:function(e,t,a){e.exports=a(101)},88:function(e,t,a){},89:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.e84f28b8.chunk.js.map