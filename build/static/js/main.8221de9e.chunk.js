(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){e.exports=t(51)},31:function(e,a,t){},32:function(e,a,t){},45:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),m=t.n(l),s=(t(31),t(6)),c=t(7),o=t(10),i=t(9),u=t(11),d=(t(32),t(33),t(34),t(35),t(8)),E=t(52),p=t(53),g=t(54),f=t(66),b=t(55),v=t(56),N=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).toggleNav=t.toggleNav.bind(Object(d.a)(t)),t.state={isNavOpen:!1,infoEmpresa:e.infoEmpresa},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"toggleNav",value:function(){this.setState({isNavOpen:!this.state.isNavOpen})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(E.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(p.a,{href:"/"},this.state.infoEmpresa.nome),r.a.createElement(g.a,{onClick:this.toggleNav}),r.a.createElement(f.a,{isOpen:this.state.isNavOpen,navbar:!0},r.a.createElement(b.a,{className:"ml-auto",navbar:!0},r.a.createElement(v.a,null,r.a.createElement("span",{className:"text-white"},this.state.infoEmpresa.email," | ",this.state.infoEmpresa.telefone," | ",this.state.infoEmpresa.whatsapp)))))))}}]),a}(n.Component),h=t(57),O=t(58),x=t(59),j=t(60),w=t(61),y=t(62),k=t(63),P=t(64);var S=function(e){var a=e.servicosEmpresa.map(function(e){return console.log(e),r.a.createElement(h.a,{md:4,key:e.id},r.a.createElement(O.a,{className:"mt-3 mt-md-0 cardServicos"},r.a.createElement(x.a,null,r.a.createElement("div",{className:"text-center"},r.a.createElement("span",{className:"display-1"},r.a.createElement("i",{className:e.imagem,"aria-hidden":"true"}))),r.a.createElement(j.a,{className:"text-center"},e.nome),r.a.createElement(w.a,{style:{fontSize:"14px",paddingTop:"5%"},className:"text-center"},e.descricao))))});return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{className:"alturaJumbotronServicos bg-white mb-0",fluid:!0},r.a.createElement(k.a,{className:"my-5",fluid:!0},r.a.createElement("h1",{className:"text-dark"},"Servi\xe7os"),r.a.createElement(k.a,null,r.a.createElement(P.a,{className:"justify-content-center my-5"},a)))))},C=t(24),L="assets/images/pc.jpg";var q=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.Parallax,{blur:5,bgImage:L,bgImageAlt:"MSK Informatica",strength:800},r.a.createElement("div",{id:"blocoVantagensServicos"},r.a.createElement("div",{className:"container"},r.a.createElement(P.a,null,r.a.createElement("div",{className:"col-12 col-md-12 my-sm-5"},r.a.createElement("h1",{className:"mt-md-5 text-white"},"Veja as vantagens de contratar nossos servi\xe7os:"))),r.a.createElement(P.a,{className:"mb-md-5"},r.a.createElement(h.a,{xs:"12",md:"4",className:"text-black "},r.a.createElement(O.a,{className:"mt-3 mt-md-5 cardVantagensServicos"},r.a.createElement(x.a,{className:"p-5"},r.a.createElement(j.a,null,r.a.createElement("b",null,"Seguran\xe7a")),r.a.createElement(x.a,null,"Sua empresa seguir\xe1 normas de seguran\xe7a e ter\xe1 um profissional capacitado para agir em caso de brechas.")))),r.a.createElement(h.a,{xs:"12",md:"4",className:"text-black cardVantagensServicos"},r.a.createElement(O.a,{className:"mt-2 mt-md-5"},r.a.createElement(x.a,{className:"p-5"},r.a.createElement(j.a,null,r.a.createElement("b",null,"Confiabilidade")),r.a.createElement(x.a,null,"Tempo \xe9 dinheiro! Sabemos disso e oferecemos as solu\xe7\xf5es para manter sua empresa ",r.a.createElement("b",null,"sempre")," funcionando.")))),r.a.createElement(h.a,{xs:"12",md:"4",className:"text-black cardVantagensServicos"},r.a.createElement(O.a,{className:"mt-2 mt-md-5"},r.a.createElement(x.a,{className:"p-5"},r.a.createElement(j.a,null,r.a.createElement("b",null,"Rapidez")),r.a.createElement(x.a,null,"Aqui trabalhamos para evitar problemas, por\xe9m, quando eles aparecem, trabalhamos para resolv\xea-lo.")))))))))},I={nome:"MSK Inform\xe1tica",endereco:"Rua Henrique Raffard, 67D",bairro:"Bingen",cidade:"Petr\xf3polis",telefone:"(24) 2222 - 2222",whatsapp:"(24) 33344-7262",email:"mskinformatica@gmail.com",logo:"assets/images/logo.png"};var J=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{className:"mb-0 alturaJumbotronSobre corJumbotron",fluid:!0},r.a.createElement(k.a,{className:"my-5 text-white"},r.a.createElement(P.a,null,r.a.createElement(h.a,{md:"12"},r.a.createElement("h1",{className:"text-left"},"Sobre"))),r.a.createElement(P.a,{className:"my-md-5"},r.a.createElement(h.a,{className:"mt-md-5",md:"7"},r.a.createElement("p",{className:"text-left"},"A MSK Inform\xe1tica possui + de 10 anos de experi\xeancia com uma cartela de parceiros que confiam em nosso trabalho e profissionais capacitados para atender suas necessidades tecn\xf3logicas.")),r.a.createElement(h.a,{md:"5"},r.a.createElement("img",{id:"logoEmpresa",src:I.logo,alt:"Logo da empresa",className:"img-fluid"}))))))},V=t(65);var F=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{className:"mb-0 alturaJumbotronSobre bg-dark",fluid:!0},r.a.createElement(k.a,{className:"my-5 text-white parceiros"},r.a.createElement(P.a,null,r.a.createElement(h.a,{md:"12"},r.a.createElement("h1",{className:"text-center"},"Parceiros"))),r.a.createElement(P.a,{className:"my-md-5"},r.a.createElement(h.a,{className:"mt-md-5",md:"3"},r.a.createElement(O.a,{className:"bg-dark"},r.a.createElement(V.a,{top:!0,src:"assets/images/logoPolycart.png",alt:"Logo Polycart - Petropolis"}))),r.a.createElement(h.a,{className:"mt-md-5",md:"3"},r.a.createElement(O.a,null,r.a.createElement(V.a,{top:!0,src:"assets/images/logoClinicaPasteur.png",alt:"Logo Clinica Pasteur - Petropolis"}))),r.a.createElement(h.a,{className:"mt-md-5",md:"3"},r.a.createElement(O.a,null,r.a.createElement(V.a,{top:!0,src:"assets/images/logoOftalmoClinica.png",alt:"Logo OftalmoClinica - Petropolis"}))),r.a.createElement(h.a,{className:"mt-md-5",md:"3"},r.a.createElement(O.a,null,r.a.createElement(V.a,{top:!0,src:"assets/images/logoJacquard.gif",alt:"Logo Jacquard Tecidos - Petropolis"})))),r.a.createElement(P.a,{className:"my-md-5"},r.a.createElement(h.a,{className:"mt-md-5",md:"3"},r.a.createElement(O.a,null,r.a.createElement(V.a,{top:!0,src:"assets/images/logoClinicaPasteur.png",alt:"Logo Clinica Pasteur - Petropolis"}))),r.a.createElement(h.a,{className:"mt-md-5",md:"3"},r.a.createElement(O.a,null,r.a.createElement(V.a,{top:!0,src:"assets/images/logoOftalmoClinica.png",alt:"Logo Clinica Pasteur - Petropolis"}))),r.a.createElement(h.a,{className:"mt-md-5",md:"3"},r.a.createElement(O.a,null,r.a.createElement(V.a,{top:!0,src:"assets/images/logoOftalmoClinica.png",alt:"Logo Clinica Pasteur - Petropolis"}))),r.a.createElement(h.a,{className:"mt-md-5",md:"3"},r.a.createElement(O.a,null,r.a.createElement(V.a,{top:!0,src:"assets/images/logoImperial.png",alt:"Logo Clinica Pasteur - Petropolis"})))))))},M=[{id:1,nome:"Visita para or\xe7amento",preco:150,descricao:"Vamos ao local para or\xe7amento e caso n\xe3o seja poss\xedvel o reparo no local, indicamos a melhor maneira de resolver o problema.",imagem:"fa fa-car"},{id:2,nome:"Manuten\xe7\xe3o de computadores e notebooks",preco:150,descricao:"Garantimos que seu equipamento ser\xe1 diagnosticado e feito manuten\xe7\xe3o preventiva em todo o servi\xe7o.",imagem:"fa fa-wrench"},{id:3,nome:"Implementa\xe7\xe3o e controle de servidores",preco:150,descricao:"Oferecemos as melhores ferramentas baseadas em Linux e Windows para que voc\xea esteja seguro e mais pr\xf3ximo da sua empresa",imagem:"fa fa-microchip"}],K=(t(45),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).state={infoEmpresa:I,servicosEmpresa:M},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{infoEmpresa:this.state.infoEmpresa}),r.a.createElement(J,null),r.a.createElement(F,null),r.a.createElement(S,{servicosEmpresa:this.state.servicosEmpresa}),r.a.createElement(q,null))}}]),a}(n.Component)),A=t(25),B=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(A.Helmet,null,r.a.createElement("title",null,"MSK Informatica"),r.a.createElement("meta",{name:"description",content:"Servi\xe7os de informatica para resid\xeancia e empresas com o melhor da tecnologia e seguran\xe7a"})),r.a.createElement(K,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.8221de9e.chunk.js.map