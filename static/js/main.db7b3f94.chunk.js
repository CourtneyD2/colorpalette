(this.webpackJsonpreactpallete=this.webpackJsonpreactpallete||[]).push([[0],{214:function(e,t,a){},344:function(e,t,a){},345:function(e,t,a){"use strict";a.r(t);var o,n,r,l,i,c,s=a(3),d=a(0),h=a(9),m=a.n(h),u=(a(214),a(57)),p=a(88),b=a(21),j=a(22),g=a(13),f=a(27),x=a(26),O=a(30),v=a(411),C=a(409),y=a(177),w=a(42),k=a(349),S=a(12),N=a(47),P=a.n(N),D=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},F={ColorBox:(o={width:"20%",height:function(e){return e.showLink?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5px","&:hover button":{opacity:"1"}},Object(S.a)(o,D("lg"),{width:"25%",height:function(e){return e.showLink?"20%":"33.33%"}}),Object(S.a)(o,D("md"),{width:"50%",height:function(e){return e.showLink?"10%":"20%"}}),Object(S.a)(o,D("xs"),{width:"100%",height:function(e){return e.showLink?"5%":"10%"}}),o),copyText:{color:function(e){return P()(e.background).luminance()>=.5?"black":"white"}},colorName:{color:function(e){return P()(e.background).luminance()<=.2?"white":"black"}},seeMore:{background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",color:function(e){return P()(e.background).luminance()>=.5?"black":"white"},width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyBtn:{width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:function(e){return P()(e.background).luminance()>=.5?"black":"white"},textTransform:"uppercase",order:"none",transition:"all 0.2s ease-in-out",textDecoration:"none",boxShadow:"none",border:"none",opacity:"0"},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.4s ease-in-out"},showOverlay:{opacity:"1",zIndex:"10",transform:"scale(50)",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":Object(S.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.3)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},D("sm"),{fontSize:"2.5rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.15s"}},B=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(e){var o;return Object(b.a)(this,a),(o=t.call(this,e)).state={copied:!1},o.handleCopy=o.handleCopy.bind(Object(g.a)(o)),o}return Object(j.a)(a,[{key:"handleCopy",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1250)}))}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.background,o=e.paletteID,n=e.id,r=e.showLink,l=e.classes,i=this.state.copied;return Object(s.jsx)(y.CopyToClipboard,{text:a,onCopy:this.handleCopy,children:Object(s.jsxs)("div",{style:{background:a},className:l.ColorBox,children:[Object(s.jsx)("div",{style:{background:a},className:"".concat(l.copyOverlay," ").concat(i&&l.showOverlay)}),Object(s.jsxs)("div",{className:"".concat(l.copyMessage," ").concat(i&&l.showMessage),children:[Object(s.jsx)("h1",{children:"copied!"}),Object(s.jsx)("p",{className:l.copyText,children:this.props.background})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:l.boxContent,children:Object(s.jsx)("span",{className:l.colorName,children:t})}),Object(s.jsx)("button",{className:l.copyBtn,children:" Copy "})]}),r&&Object(s.jsx)(w.b,{to:"/colorpalette/palette/".concat(o,"/").concat(n),onClick:function(e){return e.stopPropagation()},children:Object(s.jsx)("span",{className:l.seeMore,children:"More"})})]})})}}]),a}(d.Component),I=Object(k.a)(F)(B),L=a(408),E=a(394),A=a(410),T=a(395),U=a(108),G=a.n(U),M=a(188),R=(a(223),{NavBar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(S.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"aliceblue ",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},D("sm"),{fontSize:"1rem",fontWeight:"500"}),slider:(n={width:"350px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{background:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:hover,.rc-slider-handle:focus":{background:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"0px",marginTop:"-2px"}},Object(S.a)(n,D("lg"),{width:"250px"}),Object(S.a)(n,D("md"),{width:"200px"}),Object(S.a)(n,D("sm"),{width:"125px"}),Object(S.a)(n,D("xs"),{width:"75px"}),n),selectContainer:{marginLeft:"auto",marginRight:"1rem"}}),z=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(e){var o;return Object(b.a)(this,a),(o=t.call(this,e)).state={open:!1},o.handleChange=o.handleChange.bind(Object(g.a)(o)),o.closeSB=o.closeSB.bind(Object(g.a)(o)),o}return Object(j.a)(a,[{key:"handleChange",value:function(e){this.setState({open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSB",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,t=e.level,a=e.changeLevel,o=e.format,n=e.showSlider,r=e.classes;return Object(s.jsxs)("header",{className:r.NavBar,children:[Object(s.jsx)("div",{className:r.logo,children:Object(s.jsx)(w.b,{to:"/colorpalette/",onClick:this.props.slideUp,children:"Color Palette"})}),n&&Object(s.jsxs)("div",{children:[Object(s.jsxs)("span",{children:["Level: ",t]}),Object(s.jsx)("div",{className:r.slider,children:Object(s.jsx)(M.a,{defaultValue:t,min:100,max:900,step:100,onChange:a})})]}),Object(s.jsx)("div",{className:r.selectContainer,children:Object(s.jsxs)(L.a,{value:o,onChange:this.handleChange,children:[Object(s.jsx)(E.a,{value:"hex",children:"Hex - #ffffff "}),Object(s.jsx)(E.a,{value:"rgb",children:"RGB - rgb(red,green,blue) "}),Object(s.jsx)(E.a,{value:"rgba",children:"RGBA - rgba(red,green,blue,alpha)"})]})}),Object(s.jsx)(A.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:this.state.open,autoHideDuration:2e3,message:Object(s.jsxs)("span",{id:"messageID",children:["Format Changed: ",o," "]}),ContentProps:{"aria-describedby":"messageID"},onClose:this.closeSB,action:[Object(s.jsx)(T.a,{onClick:this.closeSB,color:"inherit",children:Object(s.jsx)(G.a,{})})]})]})}}]),a}(d.Component),H=Object(k.a)(R)(z),V={Palette:{height:"100vh",display:"flex",flexDirection:"column"},PaletteColors:{height:"90%"},PaletteFooter:{background:"white",height:"4vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem "},goBack:(r={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5px",opacity:"1",backgroundColor:"black","& a":{width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",color:"white",textTransform:"uppercase",order:"none",transition:"all 0.2s ease-in-out",textDecoration:"none",boxShadow:"none",border:"none",opacity:"1"}},Object(S.a)(r,D("lg"),{width:"25%",height:"33.33%"}),Object(S.a)(r,D("md"),{width:"50%",height:"20%"}),Object(S.a)(r,D("xs"),{width:"100%",height:"10%"}),r)},q=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(e){var o;return Object(b.a)(this,a),(o=t.call(this,e)).state={level:500},o.changeLevel=o.changeLevel.bind(Object(g.a)(o)),o}return Object(j.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"render",value:function(){var e=this.state.level,t=this.props.palette,a=t.colors,o=t.paletteName,n=t.emoji,r=t.id,l=this.props,i=l.format,c=l.classes,d=a[e].map((function(e){return Object(s.jsx)(I,{background:e[i],name:e.name,id:e.id,paletteID:r,showLink:!0},e.id)}));return Object(s.jsxs)("div",{className:c.Palette,children:[Object(s.jsx)(H,{level:e,changeLevel:this.changeLevel,handleChange:this.props.handleChange,format:i,showSlider:!0,slideUp:this.props.slideUp}),Object(s.jsx)("div",{className:c.PaletteColors,children:d}),Object(s.jsxs)("footer",{className:c.PaletteFooter,children:[o,Object(s.jsx)("span",{className:c.emoji,children:n})]})]})}}]),a}(d.Component),W=Object(k.a)(V)(q),J=a(396),Y=a(397),K=a(393),_=a(347),Q=a(398),X=a(399),Z=a(179),$=a.n(Z),ee=a(412),te=a(113),ae=a(112),oe=a(109),ne=a.n(oe),re=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(e){var o;return Object(b.a)(this,a),(o=t.call(this,e)).deletePalette=o.deletePalette.bind(Object(g.a)(o)),o}return Object(j.a)(a,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.paletteName,o=e.emoji,n=e.colors,r=e.handleClick,l=n.map((function(e){return Object(s.jsx)("div",{className:t.miniColor,style:{backgroundColor:e.color}},e.name)}));return Object(s.jsx)("div",{onClick:this.props.slideDown,children:Object(s.jsxs)("div",{className:t.root,onClick:r,children:[Object(s.jsx)(ne.a,{className:t.deleteIcon,onClick:this.deletePalette}),Object(s.jsx)("div",{className:t.colors,children:l}),Object(s.jsxs)("h5",{className:t.title,children:[a,Object(s.jsx)("span",{className:t.emoji,children:o})]})]})})}}]),a}(d.Component),le=Object(k.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"0.25rem",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:"1"}},colors:{backgrounColor:"grey",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItem:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-5px"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:"10",opacity:"0",transition:"all 0.5s ease-in-out"}})(re),ie=a.p+"static/media/bg.21e48d04.svg",ce={"@global":{".fade-exit":{opacity:"1"},".fade-exit-active":{transition:"opacity 0.5s ease-out",opacity:"0"}},root:{height:"100vh",overflow:"scroll",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#000000",backgroundImage:"url(".concat(ie,")")},heading:{fontSize:"2rem"},container:(l={width:"50%",display:"flex",alignItem:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(S.a)(l,D("xl"),{width:"55%"}),Object(S.a)(l,D("lg"),{width:"65%"}),Object(S.a)(l,D("md"),{width:"60%"}),Object(S.a)(l,D("sm"),{width:"50%"}),l),nav:{display:"flex",width:"100%",justifyContent:"space-between",color:"white",alignItems:"center","& a":{color:"white"}},palettes:(i={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.5rem"},Object(S.a)(i,D("md"),{gridTemplateColumns:"repeat(2, 50%)",gridGap:"1rem"}),Object(S.a)(i,D("sm"),{gridTemplateColumns:"repeat(1, 100%)"}),i)},se=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(e){var o;return Object(b.a)(this,a),(o=t.call(this,e)).state={deleteDialogOpen:!1,deleteID:""},o.toggleDialog=o.toggleDialog.bind(Object(g.a)(o)),o.handleDelete=o.handleDelete.bind(Object(g.a)(o)),o}return Object(j.a)(a,[{key:"toggleDialog",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.setState((function(t){return{deleteDialogOpen:!t.deleteDialogOpen,deleteID:e}}))}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deleteID),this.toggleDialog()}},{key:"goToPalette",value:function(e){this.props.history.push("/colorpalette/palette/".concat(e))}},{key:"render",value:function(){var e=this,t=this.props,a=t.palettes,o=t.classes;t.deletePalette;return Object(s.jsxs)("div",{className:o.root,children:[Object(s.jsxs)("div",{className:o.container,children:[Object(s.jsxs)("nav",{className:o.nav,children:[Object(s.jsx)("h1",{className:o.heading,children:"Palettes"}),Object(s.jsx)(w.b,{to:"/colorpalette/palette/new",onClick:this.props.slideUp,children:"Create Palette"})]}),Object(s.jsx)(v.a,{className:o.palettes,children:a.map((function(t){return Object(s.jsx)(C.a,{classNames:"fade",timeout:500,children:Object(s.jsx)(le,Object(u.a)(Object(u.a)({id:t.id},t),{},{handleClick:function(){return e.goToPalette(t.id)},slideDown:e.props.slideDown,openDialog:e.toggleDialog}))},t.id)}))})]}),Object(s.jsxs)(J.a,{open:this.state.deleteDialogOpen,onClose:this.toggleDialog,children:[Object(s.jsx)(Y.a,{children:"Delete Palette"}),Object(s.jsxs)(K.a,{children:[Object(s.jsxs)(_.a,{button:!0,onClick:this.handleDelete,children:[Object(s.jsx)(Q.a,{children:Object(s.jsx)(ee.a,{style:{backgroundColor:te.a[100],color:te.a[600]},children:Object(s.jsx)($.a,{})})}),Object(s.jsx)(X.a,{primary:"delete"})]}),Object(s.jsxs)(_.a,{button:!0,onClick:this.toggleDialog,children:[Object(s.jsx)(Q.a,{children:Object(s.jsx)(ee.a,{style:{backgroundColor:ae.a[100],color:ae.a[600]},children:Object(s.jsx)(G.a,{})})}),Object(s.jsx)(X.a,{primary:"cancel"})]})]})]})]})}}]),a}(d.PureComponent),de=Object(k.a)(ce)(se),he=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(e){var o;return Object(b.a)(this,a),(o=t.call(this,e))._shades=o.gatherShades(o.props.palette,o.props.colorId),o}return Object(j.a)(a,[{key:"gatherShades",value:function(e,t){var a=[],o=e.colors;for(var n in o)a=a.concat(o[n].filter((function(e){return e.id===t})));return a.slice(1)}},{key:"render",value:function(){var e=this,t=this._shades.map((function(t){return Object(s.jsx)(I,{name:t.name,background:t[e.props.format],showLink:!1},t.name)})),a=this.props.classes;return Object(s.jsxs)("div",{className:"SC-Palette ".concat(a.Palette),children:[Object(s.jsx)(H,{handleChange:this.props.handleChange,format:this.props.format,showSlider:!1,slideUp:this.props.slideUp}),Object(s.jsxs)("div",{className:a.PaletteColors,children:[t,Object(s.jsx)("div",{className:a.goBack,children:Object(s.jsx)(w.b,{to:"/colorpalette/palette/".concat(this.props.palette.id),onClick:this.props.slideUp,children:"Go Back"})})]}),Object(s.jsxs)("footer",{className:a.PaletteFooter,children:[this.props.palette.paletteName,Object(s.jsx)("span",{className:a.emoji,children:this.props.palette.emoji})]})]})}}]),a}(d.Component),me=Object(k.a)(V)(he),ue=a(19),pe=a.n(ue),be=a(8),je=a(403),ge=a(402),fe=a(400),xe=a(401),Oe=a(60),ve=a(189),Ce=(a(237),function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(e){var o;return Object(b.a)(this,a),(o=t.call(this,e)).handleClickOpen=function(){o.setState({open:!0})},o.handleClose=function(){o.setState({open:!1})},o.state={stage:"form",newPaletteName:""},o.handleChange=o.handleChange.bind(Object(g.a)(o)),o.showEmojiPicker=o.showEmojiPicker.bind(Object(g.a)(o)),o.savePalette=o.savePalette.bind(Object(g.a)(o)),o}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;Oe.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(t){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==t.toLowerCase()}))}))}},{key:"handleChange",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"showEmojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){var t={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(t),this.setState({stage:""})}},{key:"render",value:function(){var e=this.state,t=e.newPaletteName,a=e.stage,o=this.props.hideForm;return Object(s.jsxs)("div",{children:[Object(s.jsxs)(J.a,{open:"emoji"===a,onClose:o,children:[Object(s.jsx)(Y.a,{id:"form-dialog-title",children:"Choose a Palette Emoji"}),Object(s.jsx)(ve.a,{title:"Pick a Palette Emoji",onSelect:this.savePalette})]}),Object(s.jsxs)(J.a,{open:"form"===a,"aria-labelledby":"form-dialog-title",onClose:o,children:[Object(s.jsx)(Y.a,{id:"form-dialog-title",children:"Choose a Palette Name"}),Object(s.jsxs)(Oe.ValidatorForm,{onSubmit:this.showEmojiPicker,children:[Object(s.jsxs)(fe.a,{children:[Object(s.jsx)(xe.a,{children:"Please enter a name for your new beautiful palette. Make sure it's unique!"}),Object(s.jsx)(Oe.TextValidator,{label:"Palette Name",value:t,name:"newPaletteName",onChange:this.handleChange,fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]})]}),Object(s.jsxs)(ge.a,{children:[Object(s.jsx)(je.a,{onClick:o,color:"primary",children:"Cancel"}),Object(s.jsx)(je.a,{variant:"contained",color:"primary",type:"submit",children:"Save Palette"})]})]})]})]})}}]),a}(d.Component)),ye=a(404),we=a(405),ke=a(406),Se=a(80),Ne=a(181),Pe=a.n(Ne),De=function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:"12",marginRight:"20"},navBtns:Object(S.a)({marginRight:"1rem","& a":{textDecoration:"none"}},D("xs"),{marginRight:"0"}),button:Object(S.a)({margin:"0 0.5rem"},D("sm"),{margin:"0 0",padding:"0"}),title:Object(S.a)({},D("md"),{display:"none"})}},Fe=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(e){var o;return Object(b.a)(this,a),(o=t.call(this,e)).state={newPaletteName:"",formShowing:!1},o.handleChange=o.handleChange.bind(Object(g.a)(o)),o.showForm=o.showForm.bind(Object(g.a)(o)),o.hideForm=o.hideForm.bind(Object(g.a)(o)),o}return Object(j.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.open,o=e.palettes,n=e.handleSubmit,r=e.handleDrawerOpen,l=this.state.formShowing;return Object(s.jsxs)("div",{className:t.root,children:[Object(s.jsx)(ye.a,{}),Object(s.jsxs)(we.a,{position:"fixed",color:"default",className:pe()(t.appBar,Object(S.a)({},t.appBarShift,a)),children:[Object(s.jsxs)(ke.a,{disableGutters:!a,children:[Object(s.jsx)(T.a,{color:"inherit","aria-label":"Open drawer",onClick:r,className:pe()(t.menuButton,Object(S.a)({},t.hide,a)),children:Object(s.jsx)(Pe.a,{})}),Object(s.jsx)(Se.a,{className:t.title,variant:"h6",color:"inherit",noWrap:!0,children:"Create A Palette"})]}),Object(s.jsxs)("div",{className:t.navBtns,children:[Object(s.jsx)(w.b,{to:"/colorpalette/",onClick:this.props.slideDown,children:Object(s.jsx)(je.a,{variant:"contained",color:"secondary",className:t.button,children:"Back"})}),Object(s.jsx)(je.a,{variant:"contained",color:"primary",onClick:this.showForm,className:t.button,children:"Save"})]})]}),l&&Object(s.jsx)(Ce,{palettes:o,handleSubmit:n,hideForm:this.hideForm})]})}}]),a}(d.Component),Be=Object(be.a)(De,{withTheme:!0})(Fe),Ie=a(187),Le={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}},Ee=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(e){var o;return Object(b.a)(this,a),(o=t.call(this,e)).state={currentColor:"teal",newColorName:""},o.updateCurrentColor=o.updateCurrentColor.bind(Object(g.a)(o)),o.handleChange=o.handleChange.bind(Object(g.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(g.a)(o)),o}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;Oe.ValidatorForm.addValidationRule("isColorNameUnique",(function(t){return e.props.colors.every((function(e){return e.name.toLowerCase()!==t.toLowerCase()}))})),Oe.ValidatorForm.addValidationRule("isColorUnique",(function(t){return e.props.colors.every((function(t){return t.color!==e.state.currentColor}))}))}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this.props,t=e.paletteIsFull,a=e.classes,o=this.state,n=o.currentColor,r=o.newColorName;return Object(s.jsxs)("div",{children:[Object(s.jsx)(Ie.a,{color:n,onChangeComplete:this.updateCurrentColor,className:a.picker}),Object(s.jsxs)(Oe.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1,children:[Object(s.jsx)(Oe.TextValidator,{value:r,className:a.colorNameInput,placeholder:"Color Name",name:"newColorName",variant:"filled",margin:"normal",onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already used!"]}),Object(s.jsx)(je.a,{variant:"contained",type:"submit",color:"primary",disabled:t,className:a.addColor,style:{backgroundColor:t?"grey":n},children:t?"Palette Full":"Add Color"})]})]})}}]),a}(d.Component),Ae=Object(be.a)(Le)(Ee),Te=a(413),Ue=a(407),Ge=a(186),Me=a.n(Ge),Re=a(77),ze={root:(c={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(S.a)(c,D("lg"),{width:"25%",height:"20%"}),Object(S.a)(c,D("md"),{width:"50%",height:"10%"}),Object(S.a)(c,D("sm"),{width:"100%",height:"5%"}),c),boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return P()(e.color).luminance()<=.08?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.6)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}},He=Object(Re.b)((function(e){var t=e.classes,a=e.handleClick,o=e.name,n=e.color;return Object(s.jsx)("div",{className:t.root,style:{backgroundColor:n},children:Object(s.jsxs)("div",{className:t.boxContent,children:[Object(s.jsxs)("span",{children:[" ",o]}),Object(s.jsx)(ne.a,{className:t.deleteIcon,onClick:a})]})})})),Ve=Object(k.a)(ze)(He),qe=Object(Re.a)((function(e){var t=e.colors,a=e.removeColor;return Object(s.jsx)(v.a,{style:{height:"100%"},children:t.map((function(e,t){return Object(s.jsx)(C.a,{classNames:"fade",timeout:500,children:Object(s.jsx)(Ve,{index:t,color:e.color,name:e.name,handleClick:function(){return a(e.name)}})},e.name)}))})})),We=Object(k.a)({"@global":{".fade-exit":{opacity:"1"},".fade-exit-active":{transition:"opacity 0.5s ease-out",opacity:"0"}}})(qe),Je=function(e){return{root:{display:"flex"},drawer:{width:400,flexShrink:0,height:"100vh"},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(u.a)(Object(u.a)({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}},Ye=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Ke=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(e){var o;return Object(b.a)(this,a),(o=t.call(this,e)).handleDrawerOpen=function(){o.setState({open:!0})},o.handleDrawerClose=function(){o.setState({open:!1})},o.onSortEnd=function(e){var t=e.oldIndex,a=e.newIndex;o.setState((function(e){var o=e.colors;return{colors:Object(Re.c)(o,t,a)}}))},o.state={open:!0,colors:Ye[0].colors},o.addNewColor=o.addNewColor.bind(Object(g.a)(o)),o.handleChange=o.handleChange.bind(Object(g.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(g.a)(o)),o.removeColor=o.removeColor.bind(Object(g.a)(o)),o.clearColors=o.clearColors.bind(Object(g.a)(o)),o.addRandomColor=o.addRandomColor.bind(Object(g.a)(o)),o}return Object(j.a)(a,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(p.a)(this.state.colors),[e]),newColorName:""})}},{key:"handleChange",value:function(e){this.setState(Object(S.a)({},e.target.name,e.target.value))}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){for(var e,t,a=this.props.palettes.map((function(e){return e.colors})).flat(),o=!0;o;)e=Math.floor(Math.random()*a.length),t=a[e],o=this.state.colors.some((function(e){return e.name===t.name}));this.setState({colors:[].concat(Object(p.a)(this.state.colors),[t])})}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.slideDown(),this.props.history.push("/colorpalette/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter((function(t){return t.name!==e}))})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.maxColors,o=e.palettes,n=this.state,r=n.open,l=n.colors,i=l.length>=a;return Object(s.jsxs)("div",{className:t.root,children:[Object(s.jsx)(Be,{open:r,palettes:o,handleSubmit:this.handleSubmit,slideDown:this.props.slideDown,handleDrawerOpen:this.handleDrawerOpen}),Object(s.jsxs)(Te.a,{className:t.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:t.drawerPaper},children:[Object(s.jsx)("div",{className:t.drawerHeader,children:Object(s.jsx)(T.a,{onClick:this.handleDrawerClose,children:Object(s.jsx)(Me.a,{})})}),Object(s.jsx)(Ue.a,{}),Object(s.jsxs)("div",{className:t.container,children:[Object(s.jsx)(Se.a,{variant:"h4",gutterBottom:!0,children:"Design Your Palette"}),Object(s.jsxs)("div",{className:t.buttons,children:[Object(s.jsx)(je.a,{variant:"contained",color:"secondary",onClick:this.clearColors,className:t.button,children:"Clear Palette"}),Object(s.jsx)(je.a,{variant:"contained",className:t.button,color:"primary",onClick:this.addRandomColor,disabled:i,children:"Random Color"})]}),Object(s.jsx)(Ae,{paletteIsFull:i,addNewColor:this.addNewColor,colors:l})]})]}),Object(s.jsxs)("main",{className:pe()(t.content,Object(S.a)({},t.contentShift,r)),children:[Object(s.jsx)("div",{className:t.drawerHeader}),Object(s.jsx)(We,{colors:l,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd,distance:20})]})]})}}]),a}(d.Component);Ke.defaultProps={maxColors:20};var _e=Object(be.a)(Je,{withTheme:!0})(Ke);var Qe=function(e){return Object(s.jsx)("section",{className:"page ".concat(e.dir),children:e.children})},Xe=a(140),Ze=[50,100,200,300,400,500,600,700,800,900];function $e(e){var t,a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object(Xe.a)(Ze);try{for(o.s();!(t=o.n()).done;){var n=t.value;a.colors[n]=[]}}catch(m){o.e(m)}finally{o.f()}var r,l,i,c=Object(Xe.a)(e.colors);try{for(c.s();!(r=c.n()).done;){var s=r.value,d=(l=s.color,i=10,P.a.scale(function(e){var t="#fff";return[P()(e).darken(1.4).hex(),e,t]}(l)).mode("lab").colors(i)).reverse();for(var h in d)a.colors[Ze[h]].push({name:"".concat(s.name," ").concat(Ze[h]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:d[h],rgb:P()(d[h]).css(),rgba:P()(d[h]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(m){c.e(m)}finally{c.f()}return a}a(344);var et=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(e){var o;Object(b.a)(this,a),o=t.call(this,e);var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||Ye,format:"hex",dir:"down"},o.savePalette=o.savePalette.bind(Object(g.a)(o)),o.findPalette=o.findPalette.bind(Object(g.a)(o)),o.deletePalette=o.deletePalette.bind(Object(g.a)(o)),o.changeFormat=o.changeFormat.bind(Object(g.a)(o)),o.slideUp=o.slideUp.bind(Object(g.a)(o)),o.slideDown=o.slideDown.bind(Object(g.a)(o)),o}return Object(j.a)(a,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(t){return t.id===e}))}},{key:"deletePalette",value:function(e){this.setState((function(t){return{palettes:t.palettes.filter((function(t){return t.id!==e}))}}),this.syncLocalStorage)}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(p.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"slideUp",value:function(){this.setState((function(){return{dir:"up"}}))}},{key:"slideDown",value:function(){this.setState((function(){return{dir:"down"}}))}},{key:"render",value:function(){var e=this;return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(O.a,{render:function(t){var a=t.location;return Object(s.jsx)(v.a,{children:Object(s.jsx)(C.a,{classNames:"page",timeout:500,children:Object(s.jsxs)(O.c,{location:a,children:[Object(s.jsx)(O.a,{exact:!0,path:"/colorpalette/palette/new",render:function(t){return Object(s.jsx)(Qe,{dir:e.state.dir,children:Object(s.jsx)(_e,Object(u.a)({savePalette:e.savePalette,palettes:e.state.palettes,slideDown:e.slideDown},t))})}}),Object(s.jsx)(O.a,{exact:!0,path:"/colorpalette/",render:function(t){return Object(s.jsx)(Qe,{dir:e.state.dir,children:Object(s.jsx)(de,Object(u.a)({deletePalette:e.deletePalette,palettes:e.state.palettes,slideUp:e.slideUp,slideDown:e.slideDown},t))})}}),Object(s.jsx)(O.a,{exact:!0,path:"/colorpalette/palette/:id",Page:!0,render:function(t){return Object(s.jsx)(Qe,{dir:e.state.dir,children:Object(s.jsx)(W,{format:e.state.format,handleChange:e.changeFormat,slideUp:e.slideUp,palette:$e(e.findPalette(t.match.params.id))})})}}),Object(s.jsx)(O.a,{exact:!0,path:"/colorpalette/palette/:paletteId/:colorId",render:function(t){return Object(s.jsx)(Qe,{dir:e.state.dir,children:Object(s.jsx)(me,{format:e.state.format,handleChange:e.changeFormat,colorId:t.match.params.colorId,slideUp:e.slideUp,palette:$e(e.findPalette(t.match.params.paletteId))})})}}),Object(s.jsx)(O.a,{render:function(t){return Object(s.jsx)(Qe,{dir:e.state.dir,children:Object(s.jsx)(de,Object(u.a)({deletePalette:e.deletePalette,palettes:e.state.palettes,slideUp:e.slideUp,slideDown:e.slideDown},t))})}})]})},a.key)})}})})}}]),a}(d.Component),tt=Object(O.f)(et),at=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,415)).then((function(t){var a=t.getCLS,o=t.getFID,n=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),o(e),n(e),r(e),l(e)}))};m.a.render(Object(s.jsx)(w.a,{children:Object(s.jsx)(d.StrictMode,{children:Object(s.jsx)(tt,{})})}),document.getElementById("root")),at()}},[[345,1,2]]]);
//# sourceMappingURL=main.db7b3f94.chunk.js.map