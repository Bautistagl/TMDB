(this["webpackJsonp26-tmdb"]=this["webpackJsonp26-tmdb"]||[]).push([[0],{100:function(e,c,t){"use strict";t.r(c);var s,a=t(1),n=t.n(a),r=t(25),i=t.n(r),j=(t(84),t(5)),l=t(7),b=t(18),d=t(0),o=function(e){var c=e.fav;return Object(d.jsx)("div",{children:Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsxs)("figure",{class:"card card--dark",children:[Object(d.jsx)("div",{class:"card__image-container",children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c.poster_path),alt:"Espeon",class:"card__image"})}),Object(d.jsx)("figcaption",{class:"card__caption",children:Object(d.jsx)("h1",{class:"card__name",children:c.title})})]})})},c.id)})},u=function(e){var c=e.peliculas;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"titulo",children:"Top 20 peliculas de la semana"}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{}),Object(d.jsx)("tbody",{className:"contenedor",children:c?c.map((function(e){return Object(d.jsx)(o,{fav:e})})):""})]})]})},O=function(){var e=Object(a.useState)([]),c=Object(l.a)(e,2),t=c[0],s=c[1],n=Object(j.o)();return Object(a.useEffect)((function(){b.a.get(" https://api.themoviedb.org/3/movie/popular?api_key=ea66feba16438f64ce278c1470d6d9b2&page=".concat(n.page)).then((function(e){return s(e.data)}))}),[]),Object(d.jsx)("div",{className:"background",children:Object(d.jsx)(u,{peliculas:t.results})})},h=t(37),x=function(){var e=Object(j.m)(),c=Object(a.useState)([]),t=Object(l.a)(c,2),s=t[0],n=t[1],r=Object(j.o)();Object(a.useEffect)((function(){b.a.get(" https://api.themoviedb.org/3/movie/".concat(r.id,"?api_key=ea66feba16438f64ce278c1470d6d9b2")).then((function(e){return n(e.data)}))}),[]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"titulo",children:"PELICULA"}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{}),Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{className:"container",children:[Object(d.jsxs)("td",{children:[Object(d.jsxs)("h4",{children:[" ",s.title]}),Object(d.jsx)("img",{className:"imagenes",src:"https://image.tmdb.org/t/p/w500".concat(s.poster_path),alt:"foto"})]}),Object(d.jsx)("td",{children:Object(d.jsxs)("h4",{children:["Fecha de estreno: ",s.release_date]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("h4",{children:["Puntuacion promedio: ",s.vote_average]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("h4",{children:["Duracion: ",s.runtime," minutos"]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("h4",{children:["Resumen: ",s.overview]})})]},s.id)})]}),Object(d.jsx)(h.a,{variant:"dark",onClick:function(){e("/buscarPelis")},children:"Seguir Buscando"})]})},p=t(27),m=t(77),f=Object(m.a)("https://gsjxzcheyqiznsssbnud.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdzanh6Y2hleXFpem5zc3NibnVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE1NDA2NTQsImV4cCI6MTk4NzExNjY1NH0.fbG91S4Biq6Uvi0DUTq1LuDCwFJn4iPJ-h61lsvSZ3I"),g=function(e){var c=e.favs;JSON.parse(localStorage.getItem("usuario"));return Object(d.jsxs)("div",{className:"background",children:[Object(d.jsx)("h1",{children:"Tus peliculas favoritas"}),Object(d.jsx)("table",{children:Object(d.jsx)("tbody",{className:"contenedor",children:c?c.map((function(e){return Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsxs)("figure",{class:"card card--dark",children:[Object(d.jsx)("div",{class:"card__image-container",children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.foto),alt:"Espeon",class:"card__image"})}),Object(d.jsxs)("figcaption",{class:"card__caption",children:[Object(d.jsx)("h1",{class:"card__name",children:e.titulo}),Object(d.jsxs)("button",{onClick:function(){!function(e){var c=f.from("peliculas").delete().eq("id",e.id).then((function(e){alert("se borro")})),t=c.error;if(c.data,t)throw t}(e)},children:[" ","borrar"]})]})]})})},e.id)})):""})})]})},v=t(30),_=t(20),N=(t(46),function(e){var c=e.favs;JSON.parse(localStorage.getItem("usuario"));return Object(d.jsxs)("div",{className:"background",children:[Object(d.jsx)("h1",{children:"Tus series favoritas"}),Object(d.jsx)("table",{children:Object(d.jsx)("tbody",{className:"contenedor",children:c?c.map((function(e){return Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsxs)("figure",{class:"card card--dark",children:[Object(d.jsx)("div",{class:"card__image-container",children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.foto),alt:"Espeon",class:"card__image"})}),Object(d.jsxs)("button",{onClick:function(){!function(e){var c=f.from("series1").delete().eq("id",e.id),t=c.error,s=c.data;if(t)throw t;console.log(s)}(e)},children:[" ","borrar"," "]}),Object(d.jsx)("figcaption",{class:"card__caption",children:Object(d.jsx)("h1",{class:"card__name",children:e.titulo})})]})})},e.id)})):""})})]})}),k=function(){var e=Object(j.m)(),c=Object(a.useState)([]),t=Object(l.a)(c,2);t[0],t[1],JSON.parse(localStorage.getItem("usuario"));return Object(d.jsxs)("div",{className:"background",children:[Object(d.jsx)("body",{children:Object(d.jsx)(_.a,{bg:"dark",variant:"dark",children:Object(d.jsx)(p.a,{children:Object(d.jsx)(_.a.Brand,{children:" Bienvenido !"})})})}),Object(d.jsx)("div",{className:"inicio",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){e("/BuscarPelis")},children:["Buscar Pelis",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})}),Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){e("/buscarSeries")},children:["Buscar series",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})}),Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){e("/pelisFavs")},children:["Peliculas favs",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})}),Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){e("/seriesFavs")},children:["Series Favs",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})}),Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){localStorage.removeItem("usuario"),e("/")},children:["Cerrar sesion",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})})]})})]})},S=function(){var e=Object(a.useState)([]),c=Object(l.a)(e,2),t=c[0],s=c[1],n=Object(j.o)(),r=Object(j.m)();Object(a.useEffect)((function(){b.a.get(" https://api.themoviedb.org/3/tv/".concat(n.id,"?api_key=ea66feba16438f64ce278c1470d6d9b2")).then((function(e){return s(e.data)}))}),[]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h5",{className:"titulo",children:"SERIE"}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{}),Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{className:"container",children:[Object(d.jsxs)("td",{children:[Object(d.jsxs)("h4",{className:"tituloSingular",children:[" ",t.title]}),Object(d.jsx)("img",{className:"imagenes",src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:"foto"})]}),Object(d.jsx)("td",{children:Object(d.jsxs)("h4",{children:["Fecha de estreno: ",t.release_date]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("h4",{children:["Puntuacion promedio: ",t.vote_average]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("h4",{children:["Duracion: ",t.runtime," minutos"]})}),Object(d.jsx)("td",{children:Object(d.jsxs)("h4",{children:["Resumen: ",t.overview]})})]},t.id)})]}),Object(d.jsx)(h.a,{variant:"dark",onClick:function(){r("/buscarSeries")},children:"Seguir Buscando"})]})},y=function(){var e=Object(j.m)();return Object(d.jsxs)(_.a,{bg:"dark",variant:"dark",children:[Object(d.jsx)(p.a,{children:Object(d.jsxs)(_.a.Brand,{href:"/",children:[Object(d.jsx)("img",{alt:"",src:"https://play-lh.googleusercontent.com/bBT7rPEvIr2tvzaXcoIdxeeFd8GNUbpWVl94tmiWOwrzwbjMwzDwyhNvAIl5t37u0c8",width:"40",height:"30",className:"imgnavbar"})," "]})}),Object(d.jsx)("div",{className:"navbar2",children:Object(d.jsx)("ul",{children:Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){e("/registro")},children:["Registrarse",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})})})}),Object(d.jsx)("div",{className:"navbar2",children:Object(d.jsx)("ul",{children:Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){e("/login")},children:["Iniciar sesion",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})})})})]})},w=function(){Object(v.b)(),Object(j.m)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(y,{}),Object(d.jsx)(O,{})]})},I=t(2),C=t.n(I),B=t(17),F=function(){var e=Object(j.m)(),c=Object(a.useState)(""),t=Object(l.a)(c,2),s=t[0],n=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),b=i[0],o=i[1],u=function(){var c=Object(B.a)(C.a.mark((function c(t){var a;return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:t.preventDefault();try{f.from("personas").select().eq("email",s).then((function(e){if(!e)return alert("error");window.localStorage.setItem("usuario",JSON.stringify(e.data[0]))})),e("/Usuario")}catch(n){a=n.response,alert("Ingreso mal la contrase\xf1a o email, pruebe de nuevo"),console.log((a.status,a.statusText))}case 2:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"screen",children:[Object(d.jsx)("div",{className:"screen__content",children:Object(d.jsxs)("form",{onSubmit:u,className:"login",children:[Object(d.jsxs)("div",{className:"login__field",children:[Object(d.jsx)("i",{className:"login__icon fas fa-user"}),Object(d.jsx)("input",{value:s,onChange:function(e){n(e.target.value)},type:"text",className:"login__input",placeholder:" Email"})]}),Object(d.jsxs)("div",{className:"login__field",children:[Object(d.jsx)("i",{className:"login__icon fas fa-lock"}),Object(d.jsx)("input",{value:b,onChange:function(e){o(e.target.value)},type:"password",className:"login__input",placeholder:"Contrase\xf1a"})]}),Object(d.jsxs)("button",{type:"submit",className:"button login__submit",children:[Object(d.jsx)("span",{className:"button__text",children:"Iniciar sesi\xf3n"}),Object(d.jsx)("i",{className:"button__icon fas fa-chevron-right"})]})]})}),Object(d.jsxs)("div",{className:"screen__background",children:[Object(d.jsx)("span",{className:"screen__background__shape screen__background__shape4"}),Object(d.jsx)("span",{className:"screen__background__shape screen__background__shape3"}),Object(d.jsx)("span",{className:"screen__background__shape screen__background__shape2"}),Object(d.jsx)("span",{className:"screen__background__shape screen__background__shape1"})]})]})})},E=function(){var e=Object(j.m)(),c=Object(a.useState)(""),t=Object(l.a)(c,2),s=t[0],n=t[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),o=i[0],u=i[1],O=Object(a.useState)(""),h=Object(l.a)(O,2),x=h[0],p=h[1],m=Object(a.useState)(""),g=Object(l.a)(m,2),v=g[0],_=g[1],N=function(){var c=Object(B.a)(C.a.mark((function c(t){return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t.preventDefault(),c.next=3,f.from("personas").insert({email:s,contra:o,nombre:x});case 3:c.sent,s?(b.a.post("/api/users",{email:s,password:o}),e("/")):alert("Rellene todos los campos porfavor");case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"screen",children:[Object(d.jsx)("div",{className:"screen__content",children:Object(d.jsxs)("form",{onSubmit:N,className:"login",children:[Object(d.jsxs)("div",{className:"login__field",children:[Object(d.jsx)("i",{className:"login__icon fas fa-user"}),Object(d.jsx)("input",{value:s,onChange:function(e){n(e.target.value)},type:"text",className:"login__input",placeholder:" Email"})]}),Object(d.jsxs)("div",{className:"login__field",children:[Object(d.jsx)("i",{className:"login__icon fas fa-lock"}),Object(d.jsx)("input",{value:o,onChange:function(e){u(e.target.value)},type:"password",className:"login__input",placeholder:"Password"})]}),Object(d.jsxs)("div",{className:"login__field",children:[Object(d.jsx)("i",{className:"login__icon fas fa-lock"}),Object(d.jsx)("input",{value:x,onChange:function(e){p(e.target.value)},className:"login__input",placeholder:"Nombre"})]}),Object(d.jsxs)("div",{className:"login__field",children:[Object(d.jsx)("i",{className:"login__icon fas fa-lock"}),Object(d.jsx)("input",{value:v,onChange:function(e){_(e.target.value)},className:"login__input",placeholder:"Apellido"})]}),Object(d.jsxs)("button",{type:"submit",className:"button login__submit",children:[Object(d.jsx)("span",{className:"button__text",children:"Registrarse"}),Object(d.jsx)("i",{className:"button__icon fas fa-chevron-right"})]})]})}),Object(d.jsxs)("div",{className:"screen__background",children:[Object(d.jsx)("span",{className:"screen__background__shape screen__background__shape4"}),Object(d.jsx)("span",{className:"screen__background__shape screen__background__shape3"}),Object(d.jsx)("span",{className:"screen__background__shape screen__background__shape2"}),Object(d.jsx)("span",{className:"screen__background__shape screen__background__shape1"})]})]})})},P=function(e){var c=e.fav,t=JSON.parse(localStorage.getItem("usuario")),s=function(){var e=Object(B.a)(C.a.mark((function e(c){var s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.from("series1").insert({foto:c.poster_path,titulo:c.name,fecha:c.release_date,idUsuario:t.id,valoracion:c.vote_average,resumen:c.overview});case 3:s=e.sent,s.data,s.error,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(c){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{children:Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsxs)("figure",{class:"card1 card--dark1",children:[Object(d.jsx)("div",{class:"card__image-container",children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c.poster_path),alt:"Sin-Foto",class:"card__image"})}),Object(d.jsxs)("figcaption",{class:"card__caption",children:[Object(d.jsx)("h1",{class:"card__name",children:c.name}),Object(d.jsx)("table",{class:"card__stats",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Fecha de estreno"}),Object(d.jsx)("td",{children:c.first_air_date})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Valoracion"}),Object(d.jsx)("td",{children:c.vote_average})]})]})}),Object(d.jsxs)("div",{class:"card__abilities",children:[Object(d.jsx)("h5",{children:"Resumen"}),Object(d.jsx)("br",{})]}),Object(d.jsxs)("span",{class:"card__label",children:[c.overview.slice(0,250),"..."]}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("img",{onClick:function(){s(c)},src:"/star (1).png",className:"like"})})]})]})})},c.id)})},U=function(e){var c=e.peliculas,t=c.results;return Object(d.jsx)("div",{className:"background",children:Object(d.jsxs)("table",{children:[Object(d.jsxs)("thead",{children:[" ",t?Object(d.jsx)(_.a,{children:Object(d.jsxs)(_.a.Brand,{children:[" ","Pagina ",c.page," de ",c.total_pages," "]})}):""]}),Object(d.jsx)("tbody",{className:"contenedor1",children:t?t.map((function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(P,{fav:e})})})):""})]})})},J=t(56),z=function(e){var c=Object(j.o)(),t=Object(j.m)(),s=Object(a.useState)(""),n=Object(l.a)(s,2),r=n[0],i=n[1],o=Object(a.useState)([]),u=Object(l.a)(o,2),O=u[0],h=u[1];return Object(d.jsxs)("div",{className:"background",children:[Object(d.jsxs)(_.a,{bg:"dark",variant:"dark",children:[Object(d.jsxs)(p.a,{children:[Object(d.jsx)(_.a.Brand,{children:" Buscar Peliculas"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.a.get("https://api.themoviedb.org/3/search/tv?api_key=ea66feba16438f64ce278c1470d6d9b2&query=".concat(r,"&page=").concat(c.id)).then((function(e){return h(e.data)}))},children:[Object(d.jsx)("label",{children:"Pelicula: "}),Object(d.jsx)("input",{value:r,onChange:function(e){i(e.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})]}),Object(d.jsxs)(J.a,{size:"sm","aria-label":"Basic example",children:[Object(d.jsx)("div",{className:"navbar2",children:Object(d.jsx)("ul",{children:Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){b.a.get("https://api.themoviedb.org/3/search/tv?api_key=ea66feba16438f64ce278c1470d6d9b2&query=".concat(r,"&page=").concat(parseInt(O.page)-1)).then((function(e){return h(e.data)}))},children:["Anterior",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})})})}),Object(d.jsx)("div",{className:"navbar2",children:Object(d.jsx)("ul",{children:Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){b.a.get("https://api.themoviedb.org/3/search/tv?api_key=ea66feba16438f64ce278c1470d6d9b2&query=".concat(r,"&page=").concat(parseInt(O.page)+1)).then((function(e){return h(e.data)}))},children:["Siguiente",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})})})}),Object(d.jsx)("div",{className:"navbar2",children:Object(d.jsx)("ul",{children:Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){t("/Usuario")},children:["Inicio",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})})})}),Object(d.jsx)("div",{className:"navbar2",children:Object(d.jsx)("ul",{children:Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){b.a.post("/api/users/logout"),t("/")},children:["Cerrar Sesion",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})})})})]})]}),Object(d.jsx)(U,{peliculas:O})]})},q=function(e){var c=e.fav,t=JSON.parse(localStorage.getItem("usuario")),s=Object(a.useState)({}),n=Object(l.a)(s,2),r=(n[0],n[1],function(){var e=Object(B.a)(C.a.mark((function e(c){var s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.from("peliculas").insert({foto:c.poster_path,titulo:c.title,fecha:c.release_date,valoracion:c.vote_average,resumen:c.overview,idUsuario:t.id});case 3:s=e.sent,s.data,s.error,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(c){return e.apply(this,arguments)}}());return Object(d.jsx)("div",{children:Object(d.jsx)("tr",{children:Object(d.jsx)("td",{children:Object(d.jsxs)("figure",{class:"card1 card--dark1",children:[Object(d.jsx)("div",{class:"card__image-container",children:Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(c.poster_path),alt:"Espeon",class:"card__image"})}),Object(d.jsxs)("figcaption",{class:"card__caption",children:[Object(d.jsx)("h1",{class:"card__name",children:c.title}),Object(d.jsx)("table",{class:"card__stats",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Fecha de estreno"}),Object(d.jsx)("td",{children:c.release_date})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Valoracion"}),Object(d.jsx)("td",{children:c.vote_average})]})]})}),Object(d.jsxs)("div",{class:"card__abilities",children:[Object(d.jsx)("h5",{children:"Resumen"}),Object(d.jsx)("br",{})]}),Object(d.jsxs)("span",{class:"card__label",children:[c.overview.slice(0,100),"..."]}),Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("img",{onClick:function(){r(c)},src:"/star (1).png",className:"like"})})]})]})})},c.id)})},D=function(e){var c=e.peliculas,t=c.results;return Object(d.jsx)("div",{className:"background",children:Object(d.jsxs)("table",{children:[Object(d.jsxs)("thead",{children:[" ",t?Object(d.jsx)(_.a,{children:Object(d.jsxs)(_.a.Brand,{children:[" ","Pagina ",c.page," de ",c.total_pages," "]})}):""]}),Object(d.jsx)("tbody",{className:"contenedor1",children:t?t.map((function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(q,{fav:e})})})):""})]})})},R=function(e){var c=Object(j.o)(),t=Object(j.m)(),s=Object(a.useState)(""),n=Object(l.a)(s,2),r=n[0],i=n[1],o=Object(a.useState)([]),u=Object(l.a)(o,2),O=u[0],h=u[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"background",children:Object(d.jsxs)("body",{children:[Object(d.jsxs)(_.a,{bg:"dark",variant:"dark",children:[Object(d.jsxs)(p.a,{children:[Object(d.jsx)(_.a.Brand,{children:" Buscar Peliculas"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b.a.get("https://api.themoviedb.org/3/search/movie?api_key=ea66feba16438f64ce278c1470d6d9b2&query=".concat(r,"&page=").concat(c.id)).then((function(e){return h(e.data)}))},children:[Object(d.jsx)("label",{children:"Pelicula: "}),Object(d.jsx)("input",{value:r,onChange:function(e){i(e.target.value)}}),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})]}),Object(d.jsxs)(J.a,{size:"sm","aria-label":"Basic example",children:[Object(d.jsx)("div",{className:"navbar2",children:Object(d.jsx)("ul",{children:Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){b.a.get("https://api.themoviedb.org/3/search/movie?api_key=ea66feba16438f64ce278c1470d6d9b2&query=".concat(r,"&page=").concat(parseInt(O.page)-1)).then((function(e){return h(e.data)}))},children:["Anterior",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})})})}),Object(d.jsx)("div",{className:"navbar2",children:Object(d.jsx)("ul",{children:Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){b.a.get("https://api.themoviedb.org/3/search/movie?api_key=ea66feba16438f64ce278c1470d6d9b2&query=".concat(r,"&page=").concat(parseInt(O.page)+1)).then((function(e){return h(e.data)}))},children:["Siguiente",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})})})}),Object(d.jsx)("div",{className:"navbar2",children:Object(d.jsx)("ul",{children:Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){t("/Usuario")},children:["Inicio",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})})})}),Object(d.jsx)("div",{className:"navbar2",children:Object(d.jsx)("ul",{children:Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){b.a.post("/api/users/logout"),t("/")},children:["Cerrar Sesion",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})})})})]})]}),Object(d.jsx)(D,{peliculas:O})]})})})},T=t(10),V=t(42),A={email:null,name:null,lastname:null,id:null},W=Object(V.b)("user/login",function(){var e=Object(B.a)(C.a.mark((function e(c,t){var s,a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=c.email,a=c.password,e.next=4,b.a.post("api/users/login",{email:s,password:a});case 4:return n=e.sent,e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",t.rejectWithValue({msg:"Credenciales incorrectas",codigo:401}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(c,t){return e.apply(this,arguments)}}()),X=Object(V.b)("user/isLoggedIn",function(){var e=Object(B.a)(C.a.mark((function e(c){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get("/api/users/PaginaUsuarios");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",c.rejectWithValue("No se encuentra usuario"));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(c){return e.apply(this,arguments)}}()),L=Object(V.c)({name:"user",initialState:A,reducers:{getUser:function(e,c){return e.user=c.payload},setUser:function(e,c){return e.user}},extraReducers:(s={},Object(T.a)(s,W.fulfilled,(function(e,c){e.name=c.payload.name,e.email=c.payload.email,e.lastname=c.payload.lastname,e.id=c.payload.id})),Object(T.a)(s,W.rejected,(function(e){return A})),Object(T.a)(s,X.fulfilled,(function(e,c){e.name=c.payload.name,e.email=c.payload.email,e.lastname=c.payload.lastname,e.id=c.payload.id})),s)}),M=L.actions,G=(M.getUser,M.setUser,L.reducer),Y=function(){var e=Object(j.m)();return Object(d.jsxs)(_.a,{bg:"dark",variant:"dark",children:[Object(d.jsx)(p.a,{children:Object(d.jsxs)(_.a.Brand,{href:"/",children:[Object(d.jsx)("img",{alt:"",src:"https://play-lh.googleusercontent.com/bBT7rPEvIr2tvzaXcoIdxeeFd8GNUbpWVl94tmiWOwrzwbjMwzDwyhNvAIl5t37u0c8",width:"40",height:"30",className:"imgnavbar"})," "]})}),Object(d.jsx)("div",{className:"navbar2",children:Object(d.jsx)("ul",{children:Object(d.jsx)("a",{className:"link1",href:"#",children:Object(d.jsxs)("li",{onClick:function(){e("/Usuario")},children:["Inicio",Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{}),Object(d.jsx)("span",{})]})})})})]})},Z=function(){Object(j.m)();var e=JSON.parse(localStorage.getItem("usuario")),c=Object(a.useState)([]),t=Object(l.a)(c,2),s=t[0],n=t[1];return Object(a.useEffect)((function(){f.from("peliculas").select().eq("idUsuario",e.id).then((function(e){return n(e.data)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Y,{}),Object(d.jsx)(g,{favs:s})]})},Q=function(){Object(j.m)();var e=JSON.parse(localStorage.getItem("usuario")),c=Object(a.useState)([]),t=Object(l.a)(c,2),s=t[0],n=t[1];return Object(a.useEffect)((function(){f.from("series1").select().eq("idUsuario",e.id).then((function(e){return n(e.data)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Y,{}),Object(d.jsx)(N,{favs:s})]})};var H=function(){return Object(d.jsxs)("div",{className:"background",children:[Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/buscarSeries",element:Object(d.jsx)(z,{})}),Object(d.jsx)(j.a,{path:"/login",element:Object(d.jsx)(F,{})}),Object(d.jsx)(j.a,{path:"/registro",element:Object(d.jsx)(E,{})}),Object(d.jsx)(j.a,{path:"/movies/:page",element:Object(d.jsx)(O,{})}),Object(d.jsx)(j.a,{path:"/buscarPelis/:id",element:Object(d.jsx)(x,{})}),Object(d.jsx)(j.a,{path:"/:id",element:Object(d.jsx)(x,{})}),Object(d.jsx)(j.a,{path:"/buscarSeries/series/:id",element:Object(d.jsx)(S,{})}),Object(d.jsx)(j.a,{path:"/series/:id",element:Object(d.jsx)(S,{})}),Object(d.jsx)(j.a,{exact:!0,path:"/Usuario",element:Object(d.jsx)(k,{})}),Object(d.jsx)(j.a,{path:"/buscarPelis/",element:Object(d.jsx)(R,{})}),Object(d.jsx)(j.a,{path:"/",element:Object(d.jsx)(w,{})}),Object(d.jsx)(j.a,{path:"/pelisFavs",element:Object(d.jsx)(Z,{})}),Object(d.jsx)(j.a,{path:"/seriesFavs",element:Object(d.jsx)(Q,{})})]}),Object(d.jsx)("form",{children:" "})]})},K=t(29),$=t(76),ee=t.n($),ce=Object(V.a)({middleware:function(e){return e({serializableCheck:!1}).concat(ee.a)},reducer:{user:G}});i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(K.a,{children:Object(d.jsx)(v.a,{store:ce,children:Object(d.jsx)(H,{})})})}),document.getElementById("root"))},84:function(e,c,t){}},[[100,1,2]]]);
//# sourceMappingURL=main.fe3bea8a.chunk.js.map