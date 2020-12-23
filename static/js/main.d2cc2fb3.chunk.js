(this["webpackJsonpinitcard-project"]=this["webpackJsonpinitcard-project"]||[]).push([[0],{113:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),i=a(42),o=a.n(i),s=(a(113),a(13)),l=a(204),j=a(212),d=a(94),b=a(213),O=a(203),h=a(25),x="#3f4771",m={palette:{primary:{light:"#5c67a3",main:x,dark:"#2e355b",contrastText:"#fff"},secondary:{light:"#ff4081",main:"#ff79b0",dark:"#c60055",contrastText:"#000"},openTitle:x,protectedTitle:a(69).a[400]}},u=a(11),p=a(160),f=a(161),g=a(36),k=a(162),w=a(164),C=a(159),v=a(163),y=Object(C.a)((function(e){return{logo:{display:"flex",flexGrow:1},navigationItems:{display:"flex",flexGrow:9,flexDirection:"row"},publicItems:{display:"flex"},accountItems:{display:"flex",marginLeft:"auto"},offset:e.mixins.toolbar}})),S=function(e){var t=y(),a=Object(c.useState)(!0),r=Object(u.a)(a,2),i=r[0];r[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(p.a,{position:"fixed",children:Object(n.jsxs)(f.a,{variant:"dense",children:[Object(n.jsxs)("div",{className:t.logo,children:[Object(n.jsx)(g.a,{variant:"h6",children:"Init Card"}),i?null:Object(n.jsx)(k.a,{edge:!0,"aria-label":"menu",color:"inherit",children:Object(n.jsx)(v.a,{})})]}),Object(n.jsxs)("div",{className:t.navigationItems,children:[Object(n.jsxs)("div",{className:t.publicItems,children:[Object(n.jsx)(w.a,{component:h.b,to:"/home",color:"inherit",children:Object(n.jsx)(g.a,{children:"Home"})}),Object(n.jsx)(w.a,{component:h.b,to:"/",color:"inherit",children:Object(n.jsx)(g.a,{children:"Card"})}),Object(n.jsx)(w.a,{component:h.b,to:"/latest",color:"inherit",children:Object(n.jsx)(g.a,{children:"Latest"})}),Object(n.jsx)(w.a,{component:h.b,to:"/features",color:"inherit",children:Object(n.jsx)(g.a,{children:"Features"})}),Object(n.jsx)(w.a,{component:h.b,to:"/regions",color:"inherit",children:Object(n.jsx)(g.a,{children:"Regions"})})]}),Object(n.jsxs)("div",{className:t.accountItems,children:[Object(n.jsx)(w.a,{component:h.b,to:"/account",color:"inherit",children:Object(n.jsx)(g.a,{children:"Account"})}),Object(n.jsx)(w.a,{component:h.b,to:"/login",color:"inherit",children:Object(n.jsx)(g.a,{children:"Login"})})]})]})]})}),Object(n.jsx)("div",{className:t.offset})]})},I=a(21),N=a(7),B=a(26),L=a(71),D=a.n(L),F=a(180),M=a(205),T=a(97),A=a(185),E=a(186),H=a(187),R=a(188),W=a(214),P=a(190),_=a(191),q=a(192),G=a(170),J=a(207),K=a(195),Q=a(202),V=a(8),Y=a(211),Z=a(181),z=a(182),U=a(184),X=a(189),$=a(193),ee=a(194),te=a(196),ae=a(197),ne=a(198),ce=a(199),re=a(200),ie=a(201),oe=a(4),se=a(208),le=a(165),je=function(e){var t=e.children,a=e.value,c=e.index;return Object(n.jsx)(T.a,{width:"100%",children:a===c&&Object(n.jsx)(T.a,{p:3,children:t})})},de=a(206),be=a(43),Oe=a(90);Object(be.b)({OrbitControls:Oe.a});var he=function(){var e=Object(be.e)(),t=e.camera,a=e.gl.domElement,r=Object(c.useRef)();return Object(be.c)((function(e){return r.current.update()})),Object(n.jsx)("orbitControls",{ref:r,args:[t,a],enableZoom:!0,enablePan:!1})},xe=a(9),me=function(e){Object(c.useRef)();var t=Object(be.d)(xe.TextureLoader,[e.data.frontCard,e.data.backCard]),a=Object(u.a)(t,2),r=a[0],i=a[1];return Object(n.jsxs)("mesh",{scale:[22,16,.2],children:[Object(n.jsx)("boxBufferGeometry",{attach:"geometry"}),Object(n.jsx)("meshBasicMaterial",{attachArray:"material",color:"white"}),Object(n.jsx)("meshBasicMaterial",{attachArray:"material",color:"white"}),Object(n.jsx)("meshBasicMaterial",{attachArray:"material",color:"white"}),Object(n.jsx)("meshBasicMaterial",{attachArray:"material",color:"white"}),Object(n.jsx)("meshBasicMaterial",{attachArray:"material",map:r}),Object(n.jsx)("meshBasicMaterial",{attachArray:"material",map:i})]})},ue=function(e){return Object(n.jsx)(de.a,{sx:{width:"100%",height:"300px"},children:Object(n.jsxs)(be.a,{camera:{position:[0,0,15]},onCreated:function(e){return e.gl.setClearColor("black")},children:[Object(n.jsx)(he,{}),Object(n.jsx)(c.Suspense,{fallback:"",children:Object(n.jsx)(me,{data:e.data})})]})})},pe=Object(C.a)((function(e){return{twoDNameCard:{width:"100%"}}})),fe=function(e){var t=Object(c.useState)("one"),a=Object(u.a)(t,2),r=a[0],i=a[1],o=pe(),s=function(e,t){i(t)};return"3d"===e.cardDisplayType?Object(n.jsx)(ue,{data:e.data}):"2d"===e.display?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p.a,{position:"static",width:"100%",children:Object(n.jsxs)(se.a,{value:r,onChange:s,variant:"scrollable",scrollButtons:"auto",children:[Object(n.jsx)(le.a,{value:"one",label:"2D Name Card Front"}),Object(n.jsx)(le.a,{value:"two",label:"2D Name Card Back"})]})}),Object(n.jsx)(je,{value:r,index:"one",children:Object(n.jsx)("img",{src:e.data.frontCard,alt:"alternate front card",className:o.twoDNameCard})}),Object(n.jsx)(je,{value:r,index:"two",children:Object(n.jsx)("img",{src:e.data.backCard,alt:"alternate back card",className:o.twoDNameCard})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p.a,{position:"static",width:"100%",children:Object(n.jsxs)(se.a,{value:r,onChange:s,variant:"scrollable",scrollButtons:"auto",children:[Object(n.jsx)(le.a,{value:"one",label:"3D Name Card"}),Object(n.jsx)(le.a,{value:"two",label:"2D Name Card Front"}),Object(n.jsx)(le.a,{value:"three",label:"2D Name Card Back"})]})}),Object(n.jsx)(je,{value:r,index:"one",children:Object(n.jsx)(ue,{})}),Object(n.jsx)(je,{value:r,index:"two",children:Object(n.jsx)("img",{src:e.data.frontCard,alt:"alternate front card",className:o.twoDNameCard})}),Object(n.jsx)(je,{value:r,index:"three",children:Object(n.jsx)("img",{src:e.data.backCard,alt:"alternate back card",className:o.twoDNameCard})})]})},ge=a(173),ke=a(210),we=a(171),Ce=a(172),ve=a(166),ye=a(167),Se=a(168),Ie=a(169),Ne=function(e){var t;return Object(n.jsx)("li",{children:Object(n.jsx)(G.a,{color:"inherit",underline:"none",target:"_blank",rel:"noopener",component:"a",onClick:e.moreOptionsHandler,children:Object(n.jsxs)(ke.a,{button:!0,divider:!0,children:[Object(n.jsx)(we.a,{children:Object(n.jsx)(W.a,{children:(t=e.linkItem.label,"hide"===t?Object(n.jsx)(ve.a,{}):"block"===t?Object(n.jsx)(ye.a,{}):"report"===t?Object(n.jsx)(Se.a,{}):Object(n.jsx)(Ie.a,{}))})}),Object(n.jsx)(Ce.a,{primary:e.linkItem.title,secondary:e.linkItem.description})]})})})},Be=function(e){return Object(n.jsx)(ge.a,{children:e.moreOptions.map((function(t,a){return Object(n.jsx)(Ne,{linkItem:t,moreOptionsHandler:e.moreOptionsHandler},Math.random())}))})},Le=a(215),De=Object(C.a)((function(e){return{chip:{margin:e.spacing(1)}}})),Fe=function(e){var t=De(),a=function(e){e.fullWidth,e.indicator,e.selectionFollowsFocus,e.textColor;var a=e.item,c=Object(B.a)(e,["fullWidth","indicator","selectionFollowsFocus","textColor","item"]);return Object(n.jsx)(Le.a,Object(s.a)(Object(s.a)({label:"#".concat(a),className:t.chip},c),{},{clickable:!0,component:h.b,to:"/latest"}))};return Object(n.jsx)(se.a,{value:!1,variant:"scrollable",scrollButtons:"auto",children:e.data.tags.map((function(e,t){return Object(n.jsx)(a,{item:e},Math.random())}))})},Me=a(179),Te=a(174),Ae=a(175),Ee=a(176),He=a(177),Re=a(178),We=function(e){return Object(n.jsx)(G.a,{href:e.linkItem.link,color:"inherit",underline:"none",target:"_blank",rel:"noopener",component:"a",children:Object(n.jsxs)(ke.a,{button:!0,divider:!0,children:[Object(n.jsx)(Ce.a,{primary:e.linkItem.title}),Object(n.jsx)(Me.a,{children:function(e){var t=Object(n.jsx)(Ie.a,{});return e.startsWith("https://www.facebook.com")?t=Object(n.jsx)(Te.a,{}):e.startsWith("https://www.youtube.com")?t=Object(n.jsx)(Ae.a,{}):e.startsWith("https://www.linkedin.com")?t=Object(n.jsx)(Ee.a,{}):e.startsWith("https://www.whatsapp.com")?t=Object(n.jsx)(He.a,{}):e.startsWith("https://www.instagram.com")&&(t=Object(n.jsx)(Re.a,{})),t}(e.linkItem.link)})]})})},Pe=function(e){return Object(n.jsx)(ge.a,{children:e.data.links.map((function(e,t){return Object(n.jsx)(We,{linkItem:e},Math.random())}))})},_e=a.p+"static/media/chinese-business-card-translation-samples-intel-445-eng.d26d00e8.jpg",qe=a.p+"static/media/chinese-business-card-translation-samples-intel-445-sch.a17d7330.jpg",Ge=Object(C.a)((function(e){return{expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}})),Je=function(e){return{dialogCloseButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1)},dialogAddButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1)},moreOptionsContainer:{position:"relative"}}},Ke=Object(V.a)(Je)((function(e){var t=e.children,a=e.classes,c=e.onClose,r=e.onAdd,i=Object(B.a)(e,["children","classes","onClose","onAdd"]);return Object(n.jsxs)(F.a,Object(s.a)(Object(s.a)({disableTypography:!0},i),{},{children:[Object(n.jsx)(g.a,{variant:"h6",component:"div",children:t}),r?Object(n.jsx)(k.a,{"aria-label":"close",onClick:r,className:a.dialogAddButton,children:Object(n.jsx)(Z.a,{})}):null,c?Object(n.jsx)(k.a,{"aria-label":"close",onClick:c,className:a.dialogCloseButton,children:Object(n.jsx)(z.a,{})}):null]}))})),Qe=Object(Y.a)(M.a)({position:"absolute"}),Ve=Object(V.a)(Je)(r.a.forwardRef((function(e,t){var a=e.classes,c=e.children,r=Object(B.a)(e,["classes","children"]);return Object(n.jsx)(T.a,Object(s.a)(Object(s.a)({className:a.moreOptionsContainer},r),{},{children:c}))}))),Ye=function(e){var t=e.moreOptionsToggleHandler,a=e.popperId,c=e.moreOptions,r=e.moreOptionsIsOpen,i=e.anchorEl;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(k.a,{"aria-describedby":a,onClick:t,ref:i,disabled:r,children:Object(n.jsx)(U.a,{})}),Object(n.jsx)(A.a,{mouseEvent:"onMouseDown",touchEvent:"onTouchStart",onClickAway:t,children:Object(n.jsx)(Qe,{id:a,open:r,anchorEl:i,popperRef:i,placement:"bottom-end",modifiers:[{name:"flip",enabled:!1},{name:"preventOverflow",enabled:!1}],children:Object(n.jsx)(Ve,{children:Object(n.jsx)(Be,{moreOptions:c,moreOptionsHandler:t})})})})]})},Ze=function(){var e=Object(c.useState)({_id:"abcd1234",initLink:"chris",cardType:"public",frontCard:_e,backCard:qe,name:"Chris Martin Lee",companyName:"SomeCompany",position:"Software Engineer",website:"https://material-ui.com/",links:[{title:"Like me from Facebook",link:"https://www.facebook.com/"},{title:"Subscribe me from Youtube",link:"https://www.youtube.com/"},{title:"See my website for more info",link:"https://material-ui.com/"}],tags:["Semiconductor","Intel","Bob Swan","Intel Inside","Sponsors of Tomorrow","Look Inside","Experience What's Inside","Semiconductor","Intel","Bob Swan","Intel Inside","Sponsors of Tomorrow","Look Inside","Experience What's Inside"],categories:"Hardware Manufacture",description:"Intel Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California, in Silicon Valley",address:["KLCC"],contactPerson:{contactName:"Chris Martin Lee",contactNumber:"+60 198765432",contactEmail:"chrismartin@gmail.com"},createdBy:"Chris Martin Lee",updatedBy:"Chris Martin Lee",updated:(new Date).toISOString(),created:(new Date).toISOString(),expired:(new Date).toISOString()}),t=Object(u.a)(e,2),a=t[0],r=(t[1],Object(c.useState)([{label:"hide",title:"Hide",description:"Show Hide Options"},{label:"block",title:"Block",description:"Block the selected person"},{label:"report",title:"Report",description:"Show Report Options"}])),i=Object(u.a)(r,2),o=i[0],s=(i[1],Object(c.useState)("3d")),l=Object(u.a)(s,2),j=l[0],d=(l[1],Object(c.useState)(!0)),b=Object(u.a)(d,2),O=b[0],x=b[1],m=Object(c.useState)(!1),p=Object(u.a)(m,2),f=p[0],w=p[1],C=Object(c.useState)(null),v=Object(u.a)(C,2),y=v[0],S=v[1],I=Object(c.useState)(!1),B=Object(u.a)(I,2),L=B[0],F=B[1],M=Object(c.useState)(!1),T=Object(u.a)(M,2),A=T[0],V=T[1],Y=Object(c.useState)(!1),Z=Object(u.a)(Y,2),z=Z[0],U=Z[1],se=Ge(),le=function(){F((function(e){return!e}))},je=function(){V((function(e){return!e}))},de=function(){U((function(e){return!e}))},be=f?"more-options-popper":void 0;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(E.a,{container:!0,direction:"column",justify:"center",alignItems:"center",children:Object(n.jsx)(E.a,{item:!0,xs:12,sm:8,md:8,lg:6,xl:4,children:Object(n.jsxs)(H.a,{children:[Object(n.jsx)(R.a,{title:a.name,subheader:a.companyName,avatar:Object(n.jsx)(h.b,{to:"/account",children:Object(n.jsx)(W.a,{children:Object(n.jsx)(X.a,{})})}),action:Object(n.jsx)(Ye,{moreOptions:o,popperId:be,moreOptionsToggleHandler:function(e){w((function(e){return!e})),S(y?null:e.currentTarget)},moreOptionsIsOpen:f,anchorEl:y})}),Object(n.jsx)(P.a,{variant:"middle"}),Object(n.jsxs)(_.a,{children:[Object(n.jsx)(g.a,{children:a.description}),Object(n.jsx)(fe,{data:a,cardDisplayType:j}),Object(n.jsx)(Fe,{data:a})]}),Object(n.jsxs)(q.a,{disableSpacing:!0,children:[Object(n.jsx)(G.a,{href:a.website,underline:"none",target:"_blank",rel:"noopener",component:"a",children:Object(n.jsx)(k.a,{"aria-label":"website",children:Object(n.jsx)($.a,{})})}),Object(n.jsx)(k.a,{"aria-label":"bookmark",onClick:le,children:Object(n.jsx)(ee.a,{})}),Object(n.jsxs)(J.a,{open:L,"aria-labelledby":"bookmark-dialog-title",onClose:le,children:[Object(n.jsx)(Ke,{id:"bookmark-dialog-title",onClose:le,onAdd:function(){},children:"Bookmark"}),Object(n.jsx)(K.a,{dividers:!0,children:Object(n.jsx)(D.a,{value:a.initLink})})]}),Object(n.jsx)(G.a,{href:"tel:+".concat(a.contactPerson.contactNumber),underline:"none",target:"_self",rel:"noopener",component:"a",children:Object(n.jsx)(k.a,{"aria-label":"phone",children:Object(n.jsx)(te.a,{})})}),Object(n.jsx)(G.a,{href:"mailto:".concat(a.contactPerson.contactEmail),underline:"none",target:"_self",rel:"noopener",component:"a",children:Object(n.jsx)(k.a,{"aria-label":"email",children:Object(n.jsx)(ae.a,{})})}),Object(n.jsx)(G.a,{href:"sms:".concat(a.contactPerson.contactNumber),underline:"none",target:"_self",rel:"noopener",component:"a",children:Object(n.jsx)(k.a,{"aria-label":"message",children:Object(n.jsx)(ne.a,{})})}),Object(n.jsx)(k.a,{"aria-label":"share",onClick:je,children:Object(n.jsx)(ce.a,{})}),Object(n.jsxs)(J.a,{open:A,"aria-labelledby":"share-dialog-title",onClose:je,children:[Object(n.jsx)(Ke,{id:"share-dialog-title",onClose:je,children:"Share"}),Object(n.jsx)(K.a,{dividers:!0,children:Object(n.jsx)(D.a,{value:a.initLink})})]}),Object(n.jsx)(k.a,{"aria-label":"qr-code",onClick:de,children:Object(n.jsx)(re.a,{})}),Object(n.jsxs)(J.a,{open:z,"aria-labelledby":"qr-code-dialog-title",onClose:de,children:[Object(n.jsx)(Ke,{id:"qr-code-dialog-title",onClose:de,children:"QR Code"}),Object(n.jsx)(K.a,{dividers:!0,children:Object(n.jsx)(D.a,{value:a.initLink})})]}),Object(n.jsx)(k.a,{className:Object(oe.a)(se.expand,Object(N.a)({},se.expandOpen,O)),onClick:function(){x(!O)},"aria-expanded":O,"aria-label":"show more",children:Object(n.jsx)(ie.a,{})})]}),Object(n.jsx)(Q.a,{in:O,timeout:"auto",unmountOnExit:!0,children:Object(n.jsx)(_.a,{children:Object(n.jsx)(Pe,{data:a})})})]})})})})},ze=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(S,{}),Object(n.jsxs)(I.c,{children:[Object(n.jsx)(I.a,{exact:!0,path:"/",component:Ze}),Object(n.jsx)(I.a,{exact:!0,path:"/home",component:Ze,children:Object(n.jsx)("p",{children:"Home"})}),Object(n.jsx)(I.a,{exact:!0,path:"/latest",children:Object(n.jsx)("p",{children:"Latest"})}),Object(n.jsx)(I.a,{exact:!0,path:"/features",children:Object(n.jsx)("p",{children:"Features"})}),Object(n.jsx)(I.a,{exact:!0,path:"/regions",children:Object(n.jsx)("p",{children:"Regions"})}),Object(n.jsx)(I.a,{exact:!0,path:"/account",children:Object(n.jsx)("p",{children:"Account"})}),Object(n.jsx)(I.a,{exact:!0,path:"/login",children:Object(n.jsx)("p",{children:"Login"})})]})]})},Ue=function(){var e=Object(O.a)("(prefers-color-scheme: dark)"),t=Object(c.useMemo)((function(){return Object(j.a)(Object(d.a)(Object(s.a)(Object(s.a)({},m),{},{palette:Object(s.a)(Object(s.a)({},m.palette),{},{mode:e?"dark":"light"}),components:{MuiAppBar:{styleOverrides:{colorPrimary:{backgroundColor:e?m.palette.primary.dark:m.palette.primary.light}}}}})))}),[e]);return Object(n.jsx)(h.a,{children:Object(n.jsxs)(b.a,{theme:t,children:[Object(n.jsx)(l.a,{}),Object(n.jsx)(ze,{})]})})},Xe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,216)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Ue,{})}),document.getElementById("root")),Xe()}},[[135,1,2]]]);
//# sourceMappingURL=main.d2cc2fb3.chunk.js.map