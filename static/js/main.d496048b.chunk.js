(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,a,t){e.exports=t.p+"static/media/navbar-logo.df1e91e3.svg"},102:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGoSURBVHgB7VfNSgMxGMxq9SS4ogcFu1tQQTwVhIoXu4p9Ad9U6EnwTVr34LX1B/xhBY0T+MQ0ZJMv7hZFdmBIk3yZnUzpJhVSyqH8xkcJb8FjEQDU74N34LuHwxbqB9raqERzHVwRYdgE1xh1gwhOCnxYpoF78ALMjcKnKIqmIhDQjtGsGsMpeAnG1H9ThQV9FVNqc7Aj5gClS/pSawvdxIk2cVO3EeilpPtlYM9mIiWn47oTMRIYU3/JaoIWJHUmYkmgQ+PlJjTnlROxJaDNuU1QUaVEKIG8bCOmiQl1Ys9O2IkY60a2dRhbBF/VBlXnADx1CJqJxB4DCdc45s7BnvjBzvqe2q4rgUqA4LZ6ALO270usQYMG/w/qdw9mzFr1wtoSdYLemCN6E3Y9tVnoWaMW9cBDx3zbOAvaHr2YW0+GdwUdSi/ghqVIT4C9M87pS6eowsR1nzCFUhEAy/rEmP+Vm9WMjvTcMSslwDCSOE3UlYDHiPO2ncnZG1SlBDxGVLtjM/En/oHNJQGPEasJF84CH3YEPjN0iwXUXzM0H8BHEYYWc83VJ5CFmzkfg433AAAAAElFTkSuQmCC"},103:function(e,a,t){e.exports=t.p+"static/media/sketch.e2c20851.jpg"},104:function(e,a,t){e.exports=t.p+"static/media/wide.8d15d583.jpg"},106:function(e,a,t){e.exports=t.p+"static/media/1.e5f9ced1.png"},107:function(e,a,t){e.exports=t.p+"static/media/2.eb7e3ebc.png"},108:function(e,a,t){e.exports=t.p+"static/media/3.3728c5f6.png"},109:function(e,a,t){e.exports={search:"search_search__2BtSR"}},110:function(e,a,t){e.exports={tableContainer:"tablaTrabajosGuardados_tableContainer__2Ys3l"}},111:function(e,a,t){e.exports={listContainer:"listaTrabajos_listContainer__3iyHm"}},112:function(e,a,t){e.exports={icon:"optionListButton_icon__11Z4t"}},126:function(e,a,t){e.exports=t(140)},134:function(e,a,t){},135:function(e,a,t){},140:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(31),i=t.n(o),c=(t(134),t(193)),l=(t(135),t(52)),s=t(8),m=t(29),u={HOME:"home",PROTOTIPOS:"prototipos",TRABAJOS:"trabajos",PERSONALIZACION:"personalizacion"},d=/:[^/]+/gi,p=[{name:u.HOME,path:"/"},{name:u.PROTOTIPOS,path:"/prototipos"},{name:u.TRABAJOS,path:"/trabajos"},{name:u.PERSONALIZACION,path:"/personalizacion/:id"},{name:u.NOT_FOUND,path:"*"}].map(function(e){var a=Object(l.a)({},e),t=a.path;console.log("path: ",t);var n=t.match(d)||[];console.log("pathMatch: ",n);var r=n.map(function(e){return e.slice(1)});return console.log("pathParams: ",r),a.pathParams=r||[],a});var g,_=t(25),E=t(28),f=t(41),b=t(30),h=t(39),v=function(e){function a(){return Object(_.a)(this,a),Object(f.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(E.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this.props.router;a.urlFromLocation(t.location)!==a.urlFromLocation(e.router.location)&&(window.scrollTo(0,0),window.location.reload())}},{key:"render",value:function(){return this.props.children}}],[{key:"urlFromLocation",value:function(e){return"".concat(e.pathname).concat(e.search).concat(e.hash)}}]),a}(r.a.Component),x=(g=v,function(e){var a=Object(s.l)(),t=Object(s.n)(),n=Object(s.p)();return r.a.createElement(g,Object.assign({},e,{router:{location:a,navigate:t,params:n}}))}),C=function(e){return function(e){return e.map(function(e){var a=p.find(function(a){return a.name===e.name});return Object(l.a)({},e,a)})}(e).map(function(e){return r.a.createElement(s.a,{key:e.path,exact:!0,path:e.path,element:r.a.createElement(e.component,null)})})},N=function(e){var a=e.routeConfig;return r.a.createElement(m.a,{basename:"/aldea"},r.a.createElement(x,null,r.a.createElement(s.c,null,C(a))))},O=t(11),A=t(199),j=t(202),T=t(203),B=t(200),S=t(204),w=t(44),k=t.n(w),y=t(19),F=t.n(y),P=function(){function e(){Object(_.a)(this,e)}return Object(E.a)(e,null,[{key:"parseQueryParams",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a={},t=e;return t.length&&t.slice(1).split("&").forEach(function(e){var t=e.split("=").map(window.decodeURIComponent);a[t[0]]=t[1]}),a}},{key:"updateQueryParams",value:function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e.parseQueryParams(t),r=Object(l.a)({},n,a),o=Object.entries(r);return o.length?o.reduce(function(e,a,t){var n=Object(O.a)(a,2),r=n[0],o=n[1],i=window.encodeURIComponent(r),c=window.encodeURIComponent(o),l="".concat(i,"=").concat(c);return"".concat(e).concat(t>0?"&":"").concat(l)},"?"):""}},{key:"createQueryParams",value:function(e){return this.updateQueryParams(e,"")}}]),e}(),I=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=function(e){var a=p.find(function(a){return a.name===e});if(!a)throw new Error("Route name sent does not match any route. Route was '".concat(e,"'"));return a}(e),r=n.path;Object.keys(a).forEach(function(e){if(!n.pathParams.includes(e))throw new Error("Route path parameter name does not exist. Route is '".concat(r,"', and param was '").concat(e,"'"));r=r.replace(":".concat(e),a[e])});var o=P.createQueryParams(t);return"".concat(r).concat(o)},z=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};a(I(e,t,n))},R=function(e){var a=e.routeName,t=e.pathParams,n=e.queryParams,o=e.targetBlank,i=e.className,c=e.children,l=I(a,t,n),s={};return o&&(s={target:"_blank",rel:"noopener noreferrer"}),r.a.createElement(m.b,Object.assign({className:i,to:l},s),c)};R.defaultProps={className:"",pathParams:{},queryParams:{},targetBlank:!1};(function(e){function a(){return Object(_.a)(this,a),Object(f.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.routeName,t=e.pathParams,n=e.queryParams;z(a,t,n)}},{key:"render",value:function(){return null}}]),a}(r.a.Component)).defaultProps={pathParams:{},queryParams:{}};var D=t(95),M=t.n(D),Y=t(194),G=function(e){var a=e.label,t=e.className,n=e.error;return r.a.createElement(Y.a,{error:n,label:a,className:[F.a.textField,t].join(" "),variant:"filled",fullWidth:!0})},L=t(21),q=t.n(L),Q=t(206),U=t(207),H=t(205),J=t(100),V=t.n(J),X=function(e){var a=e.className;return r.a.createElement(H.a,{size:"large",edge:"start","aria-label":"menu",sx:{mr:2},className:[F.a.menuButton,a].join(" ")},r.a.createElement(V.a,null))},W=t(101),Z=t.n(W),K=t(84),$=t.n(K),ee=function(){var e=Object(s.n)();return n.createElement(T.a,null,n.createElement(Q.a,{position:"static",className:$.a.appbar},n.createElement(U.a,{className:$.a.navbar},n.createElement(B.a,{onClick:function(){return z(u.PROTOTIPOS,e)}},n.createElement("img",{src:Z.a,alt:"Logo Aldea"})),n.createElement(X,{className:" "}))))},ae=function(e){var a=e.title,t=e.className;return r.a.createElement(j.a,{className:[F.a.title,t].join(" ")},a)},te=function(e){var a=e.paragraph,t=e.className;return r.a.createElement(j.a,{className:[t,F.a.paragraph].join(" ")},a)},ne=t(74),re=t.n(ne),oe=function(e){var a=e.title,t=e.paragraph,r=e.open,o=Object(s.n)();return n.createElement("div",{className:F.a.baseMargin},n.createElement("div",{className:re.a.titleContainer},n.createElement(ae,{title:a,className:re.a.title}),r&&n.createElement(B.a,{variant:"contained",onClick:function(){z(u.TRABAJOS,o)},className:F.a.greenButton},"Abrir")),!!t&&n.createElement(te,{paragraph:t,className:re.a.paragraph}))},ie=t(51),ce=t.n(ie),le=function(e,a){return e===a?ce.a.current:e>a?ce.a.stepperItem:ce.a.complete},se=[{title:"1.  Aspectos generales",text:"Sistema constructivo y cantidad\n          de espacios."},{title:"2. El exterior de la casa",text:"Materialidad exterior de la casa."},{title:"3. Tercera etapa",text:"Especificaci\xf3n de terminaciones."},{title:"4. Resultado",text:""}],me=function(e){var a=e.currentStep;return r.a.createElement("ul",{className:ce.a.stepper},se.map(function(e,t){return r.a.createElement("li",{className:le(a,t)},r.a.createElement(j.a,{className:ce.a.title},e.title),r.a.createElement(j.a,{className:ce.a.text},e.text))}))},ue=t(102),de=t.n(ue),pe=t(103),ge=t.n(pe),_e=t(104),Ee=t.n(_e),fe="Breve memoria del proyecto con realizada por el estudio de arquitectura.\n                    Ser\xeda una descripci\xf3n a nivel conceptual..\n\n                    Breve memoria del proyecto con realizada por el estudio de arquitectura.\n                    Ser\xeda una descripci\xf3n a nivel conceptual.\n\n                    Breve memoria del proyecto con realizada por el estudio de arquitectura.\n                    Ser\xeda una descripci\xf3n a nivel conceptual.",be=function(){console.log("anterior")},he=function(){console.log("continuar")},ve=t(201),xe=t(43),Ce=t.n(xe),Ne=t(208),Oe=t(211),Ae=t(210),je=t(105),Te=t.n(je),Be=t(209),Se=t(32),we=t.n(Se),ke=function(e){var a=e.id,t=e.image,r=e.title,o=e.data,i=Object(s.n)();return n.createElement(Ne.a,{className:we.a.card},n.createElement(Be.a,{onClick:function(){z(u.PERSONALIZACION,i,{id:a})}},n.createElement(Ae.a,{component:"img",image:t}),n.createElement(Oe.a,{className:we.a.cardContent},n.createElement(j.a,{gutterBottom:!0,className:we.a.cardTitle,component:"div"},r),n.createElement("div",{className:we.a.dataDiv},n.createElement("ul",{className:we.a.list},n.createElement("li",null,n.createElement(j.a,{className:we.a.cardData},o.land)),n.createElement("li",null,n.createElement(j.a,{className:we.a.cardData},"".concat(o.m2," m2 interiores"))),n.createElement("li",null,n.createElement(j.a,{className:we.a.cardData},"".concat(o.bedrooms," dormitorios")))),n.createElement(B.a,{className:we.a.roundedButton},n.createElement(Te.a,{fontSize:"large",className:we.a.arrow}))))))},ye=t(106),Fe=t.n(ye),Pe=t(107),Ie=t.n(Pe),ze=t(108),Re=t.n(ze),De=[Fe.a,Ie.a,Re.a],Me=[{id:1,title:"Casa tito 1",data:{land:"Terreno X1",m2:"120",bedrooms:"2"}},{id:2,title:"Casa tito 2",data:{land:"Terreno X2",m2:"240",bedrooms:"3"}},{id:3,title:"Casa tito 3",data:{land:"Terreno X3",m2:"120",bedrooms:"2"}},{id:4,title:"Casa tito 4",data:{land:"Terreno X4",m2:"200",bedrooms:"3"}},{id:5,title:"Casa tito 5",data:{land:"Terreno X5",m2:"200",bedrooms:"3"}},{id:6,title:"Casa tito 6",data:{land:"Terreno X",m2:"200",bedrooms:"3"}}],Ye=t(3),Ge=t(99),Le=t(109),qe=t.n(Le),Qe=function(e){var a=e.filterText,t=e.setFilterText;return n.createElement(Y.a,{variant:"filled",label:"Buscar...",className:qe.a.search,value:a,onChange:function(e){t(e.target.value)},InputLabelProps:{sx:Object(Ye.a)({fontFamily:"Inter",fontWeight:700},"&.".concat(Ge.a.shrink),{color:"black"})}})},Ue=t(110),He=t.n(Ue),Je=t(15),Ve=t(5),Xe=t(192),We=t(85),Ze=t(212),Ke=t(213),$e=t(198),ea=t(214),aa=t(215),ta=t(216),na=t(111),ra=t.n(na),oa=t(114),ia=t(196),ca=t(113),la=t.n(ca),sa=t(112),ma=t.n(sa),ua=function(){var e=r.a.useState(null),a=Object(O.a)(e,2),t=a[0],n=a[1],o=Boolean(t),i=function(){n(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{id:"demo-positioned-button","aria-controls":o?"demo-positioned-menu":void 0,"aria-haspopup":"true","aria-expanded":o?"true":void 0,onClick:function(e){n(e.currentTarget)}},r.a.createElement(la.a,{className:ma.a.icon})),r.a.createElement(oa.a,{id:"demo-positioned-menu","aria-labelledby":"demo-positioned-button",anchorEl:t,open:o,onClose:i,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},r.a.createElement(ia.a,{onClick:i},"Editar"),r.a.createElement(ia.a,{onClick:i},"Eliminar")))},da=[{cliente:"Bruno",prototipo:"Casa Tito 1",fecha:"22-06-2023",precioFinal:"70.000",comentarios:"Agregar precios barandas."},{cliente:"Bruno 2",prototipo:"Casa Tito 2",fecha:"25-06-2023",precioFinal:"90.000",comentarios:"Agregar fotos."}],pa=Object(Ve.a)(Xe.a)(function(){var e;return e={},Object(Ye.a)(e,"&.".concat(We.a.head),{backgroundColor:"#8F9063",color:"#F5F5F5",fontFamily:"Inter",fontWeight:500}),Object(Ye.a)(e,"&.".concat(We.a.body),{fontSize:"16px",padding:"0 !important",paddingLeft:"10px !important",height:"28px"}),e}),ga=Object(Ve.a)(Ze.a)(function(){return{"&:nth-of-type(odd)":{backgroundColor:"#FFFFFF",outline:"solid 7px #8F9063",height:"35px"},"&:nth-of-type(even)":{backgroundColor:"#FFFFFF",outline:"solid 7px #8F9063",height:"35px"},"&:last-child td, &:last-child th":{border:0},"&:nth-child(n) td":{fontWeight:700}}}),_a=function(){Object(s.n)();return n.createElement("div",{className:ra.a.listContainer},n.createElement(Ke.a,{component:$e.a},n.createElement(ea.a,{size:"small","aria-label":"Trabajos guardados"},n.createElement(aa.a,null,n.createElement(Ze.a,null,n.createElement(pa,null,"Cliente"),n.createElement(pa,{align:"center"},"Prototipo"),n.createElement(pa,{align:"center"},"Fecha"),n.createElement(pa,{align:"center"},"Precio final"),n.createElement(pa,{align:"left"},"Comentarios"),n.createElement(pa,{align:"right"}))),n.createElement(ta.a,null,Object(Je.a)(Array(10)).map(function(e,a){return n.createElement(ga,{key:da[a%2].cliente,sx:{"&:last-child td, &:last-child th":{border:0}}},n.createElement(Xe.a,{align:"left"},da[a%2].cliente),n.createElement(Xe.a,{align:"center"},da[a%2].prototipo),n.createElement(Xe.a,{align:"center"},da[a%2].fecha),n.createElement(Xe.a,{align:"center"},da[a%2].precioFinal),n.createElement(Xe.a,{align:"left"},da[a%2].comentarios),n.createElement(Xe.a,{align:"right"},n.createElement(ua,null)))})))))},Ea=function(){var e=n.useState(""),a=Object(O.a)(e,2),t=a[0],r=a[1];Object(s.n)();return n.createElement("div",{className:[He.a.tableContainer,F.a.baseMargin].join(" ")},n.createElement(Qe,{filterText:t,setFilterText:r}),n.createElement(_a,{filterText:t,setFIlterText:r}))},fa=[{name:u.HOME,component:function(){var e=Object(s.n)(),a=r.a.useState(!1),t=Object(O.a)(a,2),n=t[0],o=t[1],i=r.a.useState(!1),c=Object(O.a)(i,2),l=c[0],m=c[1],d=r.a.useState(!1),p=Object(O.a)(d,2),g=p[0],_=p[1],E=r.a.useState(!1),f=Object(O.a)(E,2),b=f[0],h=f[1];return r.a.createElement("div",{className:k.a.container},r.a.createElement(A.a,{container:!0,className:k.a.gridContainer,direction:"column"},r.a.createElement(R,{routeName:"home",className:k.a.logoContainer},r.a.createElement("img",{src:M.a,alt:"Aldea Logo"})),r.a.createElement(j.a,{className:[F.a.text,k.a.subTitle].join(" ")},"Una nueva forma de habitar"),r.a.createElement(T.a,{sx:{width:583,maxWidth:"100%",display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(G,{error:b,label:"Nombre de usuario",className:k.a.input,value:l,onChange:function(e){h(!1),m(e.target.value)}}),r.a.createElement(G,{error:b,label:"Password",className:k.a.input,value:g,onChange:function(e){h(!1),_(e.target.value)}}),!n&&r.a.createElement(B.a,{onClick:function(){o(!0),setTimeout(function(){o(!1),z(u.PROTOTIPOS,e)},2e3)},className:k.a.button},"Iniciar"),n&&r.a.createElement(B.a,{className:k.a.button},r.a.createElement(S.a,{sx:{color:"white"}})))))}},{name:u.PROTOTIPOS,component:function(){return r.a.createElement("div",{className:Ce.a.container},r.a.createElement(A.a,{container:!0,className:Ce.a.gridContainer,direction:"column"},r.a.createElement(ee,null),r.a.createElement(oe,{title:"Los prototipos",paragraph:"Aqu\xed distintos prototipos de casas proyectados especialmente para el\nbarrio. Todos ellos siguen el esp\xedritu del barrio y est\xe1n pensadas en\nfunci\xf3n de los sistemas constructivos que se implementar\xedan.",open:!0}),r.a.createElement(T.a,{className:[Ce.a.boxContainer,F.a.baseMargin].join(" ")},r.a.createElement(ve.a,{direction:"row",spacing:2,className:Ce.a.stack},Me.map(function(e,a){return r.a.createElement(ke,{id:e.id,title:e.title,data:e.data,image:De[a%3]})})))))}},{name:u.TRABAJOS,component:function(){return r.a.createElement("div",{className:Ce.a.container},r.a.createElement(A.a,{container:!0,className:Ce.a.gridContainer,direction:"column"},r.a.createElement(ee,null),r.a.createElement(T.a,{className:Ce.a.boxContainer},r.a.createElement(oe,{title:"Trabajos guardados",paragraph:"Aqu\xed distintos prototipos de casas proyectados especialmente para el\nbarrio. Todos ellos siguen el esp\xedritu del barrio y est\xe1n pensadas en\nfunci\xf3n de los sistemas constructivos que se implementar\xedan.",open:!1}),r.a.createElement(Ea,null))))}},{name:u.PERSONALIZACION,component:function(){var e=r.a.useState(0),a=Object(O.a)(e,2),t=a[0],n=(a[1],r.a.useState(q.a.imageBox)),o=Object(O.a)(n,2),i=o[0],c=o[1],l=r.a.useState(q.a.imageTextDiv),s=Object(O.a)(l,2),m=s[0],u=s[1];return r.a.createElement("div",{className:q.a.container},r.a.createElement(A.a,{container:!0,className:q.a.gridContainer,direction:"column"},r.a.createElement(ee,null),r.a.createElement(oe,{title:"Personalizaci\xf3n",paragraph:null,open:!1}),r.a.createElement(T.a,{className:[q.a.boxContainer,F.a.baseMargin].join(" ")},r.a.createElement(me,{currentStep:t}),r.a.createElement(A.a,{className:q.a.innerGrid,spacing:8},r.a.createElement(A.a,{className:q.a.leftGrid,xs:4},r.a.createElement("div",{className:q.a.div},r.a.createElement(T.a,{component:"img",alt:"wide",src:Ee.a,className:q.a.imageBoxWide}),r.a.createElement(j.a,{className:q.a.title},"La Casa Tito."),r.a.createElement("ul",{className:q.a.list},r.a.createElement("li",null,"Terreno X1"),r.a.createElement("li",null,"120 m2 interiores"),r.a.createElement("li",null,"2 Dormitorios"),r.a.createElement("li",null,"2 ba\xf1os")),r.a.createElement("div",{className:q.a.informationTextDiv},r.a.createElement(j.a,null,fe)),r.a.createElement("div",{className:q.a.buttonLeftDiv},r.a.createElement(B.a,{variant:"contained",onClick:be,className:F.a.greenButton},"Anterior"),r.a.createElement(B.a,{variant:"contained",onClick:he,className:F.a.greenButton},"Continuar")))),r.a.createElement(A.a,{className:q.a.rightGrid,xs:8},r.a.createElement("div",{className:q.a.div},r.a.createElement("div",{className:q.a.buttonRightDiv},r.a.createElement(B.a,{variant:"contained",onClick:be,className:F.a.greenButton},"Plantas"),r.a.createElement(B.a,{variant:"contained",onClick:he,className:F.a.greenButton},"Cortes"),r.a.createElement(B.a,{variant:"contained",onClick:he,className:F.a.greenButton},"Fachadas"),r.a.createElement(B.a,{variant:"contained",onClick:he,className:F.a.greenButton},"Imagenes")),r.a.createElement(T.a,{component:"img",alt:"sketch",src:ge.a,className:i}),r.a.createElement("div",{className:m},r.a.createElement(j.a,{className:q.a.imageText},"Interact\xfaa con el modelo para\n                  conocer la volumetr\xeda del proyecto.")),r.a.createElement(B.a,{variant:"contained",onClick:function(){i===q.a.imageBox?(c(q.a.imageBoxExpanded),u(q.a.imageTextDivExpanded)):(c(q.a.imageBox),u(q.a.imageTextDiv))},className:q.a.expandButton},r.a.createElement("img",{src:de.a,alt:"expand"}))))))))}}];function ba(){return r.a.createElement("div",{className:"App",style:{height:"100%"}},r.a.createElement(N,{routeConfig:fa}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{injectFirst:!0},r.a.createElement(ba,null))),document.getElementById("root"))},19:function(e,a,t){e.exports={text:"globalStyles_text__2hI_j",menuButton:"globalStyles_menuButton__1YkJx",title:"globalStyles_title__57Y2o",paragraph:"globalStyles_paragraph__3LRVG",greenButton:"globalStyles_greenButton__ue9iX",baseMargin:"globalStyles_baseMargin__2n09x"}},21:function(e,a,t){e.exports={gridContainer:"personalizacoin_gridContainer__3tRUT",boxContainer:"personalizacoin_boxContainer__1vz7I",stack:"personalizacoin_stack__38Ic5",innerGrid:"personalizacoin_innerGrid__R04GQ",leftGrid:"personalizacoin_leftGrid__3jMW9",rightGrid:"personalizacoin_rightGrid__2TTtS",imageBox:"personalizacoin_imageBox__A0klW",imageBoxExpanded:"personalizacoin_imageBoxExpanded__3jQKE",imageBoxWide:"personalizacoin_imageBoxWide__AEZZb",div:"personalizacoin_div__3VHXc",title:"personalizacoin_title__40ijO",text:"personalizacoin_text__3hYD3",list:"personalizacoin_list__2g56Z",informationTextDiv:"personalizacoin_informationTextDiv__1q61F",buttonLeftDiv:"personalizacoin_buttonLeftDiv__3njKC",buttonRightDiv:"personalizacoin_buttonRightDiv__3zaXX",expandButton:"personalizacoin_expandButton__37Yfc",imageTextDiv:"personalizacoin_imageTextDiv__3_ZOP",imageTextDivExpanded:"personalizacoin_imageTextDivExpanded__2kK-S",imageText:"personalizacoin_imageText__2oCHV"}},32:function(e,a,t){e.exports={cardContent:"cardSlider_cardContent__kwQfw",card:"cardSlider_card__20AMe",list:"cardSlider_list__g7RRw",roundedButton:"cardSlider_roundedButton__26qP5",arrow:"cardSlider_arrow__Y1w6R",dataDiv:"cardSlider_dataDiv__5m8pf",cardTitle:"cardSlider_cardTitle__38voF",cardData:"cardSlider_cardData__2f4wT"}},43:function(e,a,t){e.exports={gridContainer:"prototipos_gridContainer__3YRMh",boxContainer:"prototipos_boxContainer__Cl3xG",stack:"prototipos_stack__1D3A6"}},44:function(e,a,t){e.exports={container:"home_container__2VcSu",gridContainer:"home_gridContainer__17oHA",logoContainer:"home_logoContainer__bDN92",subTitle:"home_subTitle__1rACH",input:"home_input__2_QzI",button:"home_button__1ZCAb"}},51:function(e,a,t){e.exports={stepper:"stepper_stepper__32i7G",stepperItem:"stepper_stepperItem__1dNY4",complete:"stepper_complete__KhwgJ",current:"stepper_current__3ClKR",title:"stepper_title__2nH5z",text:"stepper_text__jer7o"}},74:function(e,a,t){e.exports={title:"textContainer_title__3-Q5E",paragraph:"textContainer_paragraph__1cF4Z",titleContainer:"textContainer_titleContainer__19LGh"}},84:function(e,a,t){e.exports={appbar:"navbar_appbar__1qYok",navbar:"navbar_navbar__3IMwt",menuButton:"navbar_menuButton__2fdlf"}},95:function(e,a,t){e.exports=t.p+"static/media/aldea-logo-v1.f28c9bb3.svg"}},[[126,1,2]]]);
//# sourceMappingURL=main.d496048b.chunk.js.map