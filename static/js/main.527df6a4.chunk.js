(this["webpackJsonpkomine-app"]=this["webpackJsonpkomine-app"]||[]).push([[0],[,,,,,,,,function(e,a,t){},,,,,,,,,,function(e,a,t){e.exports=t(39)},,,,,function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(16),l=t.n(i),s=(t(8),t(10)),c=(t(23),t(1)),o=(t(24),["btn--primary","btn--outline"]),m=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,i=e.buttonStyle,l=e.buttonSize,s=o.includes(i)?i:o[0],u=m.includes(l)?l:m[0];return r.a.createElement(c.b,{to:"/sign-in",className:"btn-mobile"},r.a.createElement("button",{className:"btn ".concat(s," ").concat(u),onClick:n,type:t},a))};var h=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)(!0),o=Object(s.a)(l,2),m=o[0],h=o[1],p=function(){return i(!1)},g=function(){window.innerWidth<=960?h(!1):h(!0)};return Object(n.useEffect)((function(){g()}),[]),window.addEventListener("resize",g),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(c.b,{to:"/komine-app",className:"navbar-logo",onClick:p},r.a.createElement("img",{className:"navbar-logo__komine-head",src:"/komine-app/images/KomineHead.png",alt:"Logo"}),r.a.createElement("img",{className:"navbar-logo__main-logo",src:"/komine-app/images/4.png",alt:"Logo"})),r.a.createElement("div",{className:"menu-icon",onClick:function(){return i(!t)}},r.a.createElement("i",{className:t?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/komine-app",className:"nav-links",onClick:p},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/latest",className:"nav-links",onClick:p},"Latest")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/genres",className:"nav-links",onClick:p},"Genres")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(c.b,{to:"/popular",className:"nav-links",onClick:p},"Popular")),r.a.createElement("li",{className:"nav-links-mobile"},r.a.createElement(c.b,{to:"/sign-in",className:"nav-links",onClick:p},r.a.createElement("i",{className:"fas fa-user-circle"})," Sign In"))),m&&r.a.createElement(u,{buttonStyle:"btn--outline"},r.a.createElement("i",{className:"fas fa-user-circle"})," SIGN IN"))))},p=t(2);t(30);var g=function(){function e(e){var a=e.src;return r.a.createElement("img",{src:a,alt:"manga-images"})}var a=[r.a.createElement(e,{src:"/komine-app/images/OnePunchMan.jpg"}),r.a.createElement(e,{src:"/komine-app/images/Naruto.jpg"}),r.a.createElement(e,{src:"/komine-app/images/OnePiece.jpg"}),r.a.createElement(e,{src:"/komine-app/images/TenseiShitaraSlime.jpg"}),r.a.createElement(e,{src:"/komine-app/images/TateNoYushaNoNariagari.jpg"})],t=Object(n.useState)(0),i=Object(s.a)(t,2),l=i[0],c=i[1],o=function(){l==-100*(a.length-1)?c(0):c(l-100)};return Object(n.useEffect)((function(){var e=setInterval(o,3e3);return function(){return clearInterval(e)}})),r.a.createElement("div",{className:"slider-container"},a.map((function(e,a){return r.a.createElement("div",{key:a,className:"slide",style:{transform:"translateX(".concat(l,"%)")}},e)})),r.a.createElement("button",{id:"goLeft",onClick:function(){c(0==l?-100*(a.length-1):l+100)}},r.a.createElement("i",{class:"fas fa-chevron-circle-left"})),r.a.createElement("button",{id:"goRight",onClick:o},r.a.createElement("i",{class:"fas fa-chevron-circle-right"})))};var f=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("li",{className:"cards__item"},r.a.createElement(c.b,{className:"cards__item--link",to:e.path},r.a.createElement("figure",{className:"cards__item__pic--wrap","data-category":e.genres,"data-chap":e.chap},r.a.createElement("img",{src:e.src,alt:"Manga",className:"cards__item--img"})),r.a.createElement("h4",null,e.title),r.a.createElement("div",{className:"cards__item--info"},r.a.createElement("h5",{className:"cards__item--text"},e.text)))))},d=(t(31),[{name:"One Piece",path:"/manga-info?Name=One-Piece",text:'As a child, Monkey D. Luffy was inspired to become a pirate by listening to the tales of the buccaneer "Red-Haired" Shanks. But Luffy\'s life changed when he accidentally ate the Gum-Gum Devil Fruit and gained the power to stretch like rubber...at the cost of never being able to swim again! Years later, still vowing to become the king of the pirates, Luffy sets out on his adventure...one guy alone in a rowboat, in search of the legendary  "One Piece," said to be the greatest treasure in the world...',genres:"Adventure, Fantasy",chaps:["992","991","990","889","888"],cover_image:"/images/OnePieceTitle.png",poster_images:"",week_rank:"1",month_rank:"2"},{name:"Naruto",path:"/manga-info?Name=Naruto",text:"Twelve years ago, the powerful Nine-Tailed Demon Fox attacked the ninja village of Konohagakure. The demon was quickly defeated and sealed into the infant Naruto Uzumaki, by the Fourth Hokage who sacrificed his life to protect the village. Now Naruto is the number one knucklehead ninja whos determined to become the next Hokage and gain recognition by everyone who ever doubted him!",genres:"Adventure, Fantasy",chaps:["700","609","608","607","606"],cover_image:"/images/NarutoTitle.jpg",poster_image:"/images/NarutoPoster.jpg",week_rank:"5",month_rank:"4"},{name:"One Punch Man",path:"/manga-info?Name=One-Punch-Man",text:"One-Punch Man (Japanese: \u30ef\u30f3\u30d1\u30f3\u30de\u30f3, Hepburn: Wanpanman) is a Japanese superhero franchise created by the artist ONE. It tells the story of Saitama, a superhero who can defeat any opponent with a single punch but seeks to find a worthy foe after growing bored by a lack of challenge due to his overwhelming strength.",genres:"Action, Comedy",chaps:["181","180","179","178","177"],cover_image:"/images/OnePunchManTitle.jpg",poster_images:"/",week_rank:"2",month_rank:"3"},{name:"Black Clover",path:"/manga-info?Name=Black-Clover",text:"Black Clover (Japanese: \u30d6\u30e9\u30c3\u30af\u30af\u30ed\u30fc\u30d0\u30fc, Hepburn: Burakku Kur\u014db\u0101) is a Japanese manga series written and illustrated by Y\u016bki Tabata. The story centers around Asta, a young boy seemingly born without any magic power, something that is unknown in the world he lives in. With his fellow mages from the Black Bulls, Asta plans to become the next Wizard King.",genres:"Adventure, Fantasy",chaps:["268","267","266","265","264"],cover_image:"/images/BlackCloverTitle.jpg",poster_images:"/",week_rank:"3",month_rank:"5"},{name:"Enen no Shouboutai",path:"/manga-info?Name=Enen-no-shouboutai",text:"In Year 198 of the Solar Era in Tokyo, Special Fire Force's are fighting against a phenomenon called Spontaneous Human Combustion where humans beings are turned into living infernos called \u201cInfernals.\u201d While the Infernals are First Generation cases of spontaneous human combustion, later generations possess the ability to manipulate flames while retaining human form. Shinra Kusakabe, a youth who gained the nickname Devil\u2019s Footprints for his ability to ignite his feet at will, joins the Special Fire Force Company 8 which composes of other flames users as they work to extinguish any Infernals they encounter. As a faction that is creating Infernals appears, Shinra begins to uncover the truth behind a mysterious fire that caused the death of his family twelve years ago.",genres:"Adventure, Dark Fantasy",chaps:["202","201","200","199","198"],cover_image:"/images/EnenNoShouboutaiTitle.png",poster_images:"/",week_rank:"4",month_rank:"1"},{name:"Mairimashita Iruma-kun",path:"/manga-info?Name=Mairimashita-Iruma-kun",text:"Sullivan is questioned by Demon Border Control. Most of the first years panic at the thought of their parents visiting the school. Sullivan appoints Naberius as temporary school director while the rest of the staff wonders what Sullivan did to get arrested. Kirio reveals that all Battlers give presentations competing for prizes, maybe even a rise in rank, but the Magical Apparatus Battler has such a small budget they normally stand no chance, until Iruma is inspired to create fireworks. As the testing requires darkness Kirio decides they must stay at school overnight. While trying to create gunpowder Kirio reveals he has an ability to create magical barriers, the only reason he survives so many explosions. Iruma asks Amelie to loan him one of her manga so Kirio can see what a firework should look like, but she refuses, at least until she realises she would get to see real fireworks. After they successfully create fireworks they exhaust themselves with a pillow fight, utilising Iruma's dodge ability and Kirio's barriers. Kirio is later contacted by a powerful demon that can use lightning magic, revealing he is the reason Sullivan has been arrested and he has been plotting with Kirio to create a machine to destroy the school.",genres:"Fantasy, Comedy",chaps:["175","174","173","172","171"],cover_image:"/images/MairimashitaIrumaKunTitle.png",poster_images:"/",week_rank:"6",month_rank:"8"},{name:"Kimetsu no Yaiba",path:"/manga-info?Name=Kimetsu-no-Yaiba",text:'Demon Slayer: Kimetsu no Yaiba (Japanese: \u9b3c\u6ec5\u306e\u5203, Hepburn: Kimetsu no Yaiba, lit. "Blade of Demon Destruction") is a Japanese manga series written and illustrated by Koyoharu Got\u014dge. It follows Tanjiro Kamado, a young boy who becomes a demon slayer after his family is slaughtered and his younger sister Nezuko is turned into a demon.',genres:"Adventure, Fantasy",chaps:["205","204","203","202","201"],cover_image:"/images/KimetsuNoYaibaTitle.jpg",poster_images:"/",week_rank:"7",month_rank:"6"},{name:"Dr.Stone",path:"/manga-info?Name=Dr-Stone",text:"In the modern world, every human on the planet was turned into stone after a mysterious flash of light. This manga tells the story of how some people from the Pre-Petrification World try to rebuild civilization in the Petrification Age, the Stone World. One of the main characters' first creations undoes the petrification and is called the stone formula.",genres:"Science fiction, Adventure",chaps:["168","167","166","165","164"],cover_image:"/images/DrStoneTitle.jpg",poster_images:"/",week_rank:"8",month_rank:"7"}]);var E=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cards",style:{background:e.color}},r.a.createElement(c.b,{to:e.link,className:"cards__title"},r.a.createElement("h1",null," ",e.title," ",r.a.createElement("i",{class:"fas fa-chevron-right"}))),r.a.createElement("div",{className:"cards__container"},r.a.createElement("div",{className:"cards__wrapper"},r.a.createElement("ul",{className:"cards__items"},d.map((function(e,a){return r.a.createElement(f,{key:a,title:e.name,path:e.path,genres:e.genres,src:"/komine-app"+e.cover_image,text:e.text,chap:e.chaps[0]})})))))))};t(32),t(33);var b=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"popular-cards__container"},r.a.createElement("div",{className:"ranking"},r.a.createElement("p",null,e.ranking)),r.a.createElement("div",{className:"popular-cards__content"},r.a.createElement("div",{className:"popular-cards__content--detail"},r.a.createElement("div",{className:"popular-cards__content--pic"},r.a.createElement("img",{src:"/komine-app"+e.src,alt:"Top Manga"})),r.a.createElement("div",{className:"popular-cards__content--info"},r.a.createElement("h4",null,e.genres),r.a.createElement("h3",null,e.name),r.a.createElement("p",null,"Chap ",e.chap))))))};var k=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"cards",style:{background:"#fff"}},r.a.createElement(c.b,{to:"/popular",className:"cards__title",id:"popular-section__link"},r.a.createElement("h1",{id:"main-title"}," MOST POPULAR"))),r.a.createElement("div",{className:"popular-sections"},r.a.createElement("div",{className:"popular-sections__container"},r.a.createElement("div",{className:"popular-week",style:{minHeight:"".concat(e.height,"px")}},r.a.createElement("div",{className:"cards",style:{background:"#fff"}},r.a.createElement(c.b,{to:"/popular",className:"cards__title",id:"popular-section__link"},r.a.createElement("h1",{id:"week-title"}," THIS WEEK ",r.a.createElement("i",{class:"fas fa-chevron-right"})))),r.a.createElement("div",{className:"popular-week__cards--container"},d.sort((function(e,a){return e.week_rank>a.week_rank?1:-1})).slice(0,e.number).map((function(e,a){return r.a.createElement(b,{ranking:e.week_rank,src:e.cover_image,genres:e.genres,name:e.name,chap:e.chaps[0]})})))),r.a.createElement("div",{className:"popular-month",style:{minHeight:"".concat(e.height,"px")}},r.a.createElement("div",{className:"cards",style:{background:"#fff"}},r.a.createElement(c.b,{to:"/popular",className:"cards__title",id:"popular-section__link"},r.a.createElement("h1",{id:"month-title"}," THIS MONTH ",r.a.createElement("i",{class:"fas fa-chevron-right"})))),r.a.createElement("div",{className:"popular-week__cards--container"},d.sort((function(e,a){return e.month_rank>a.month_rank?1:-1})).slice(0,e.number).map((function(e,a){return r.a.createElement(b,{ranking:e.month_rank,src:e.cover_image,genres:e.genres,name:e.name,chap:e.chaps[0]})})))))))};var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(E,{title:"Latest Manga Release",color:"#fff",link:"/latest"}),r.a.createElement(E,{title:"New Posted",color:"#ffe6e1",link:"/komine-app"}),r.a.createElement(k,{number:"5",height:"0"}))};function N(){return r.a.createElement("h1",{className:"sign-in"},"SIGN IN NOW")}function _(){return r.a.createElement("h1",{className:"latest"},"LATEST MANGA RELEASES")}function y(){return r.a.createElement("h1",{className:"genres"},"MANGA GENRES")}function w(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{number:"10",height:"1020"}))}t(34);var S=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"poster-container"},r.a.createElement("div",{className:"poster"},r.a.createElement("img",{src:e.src,alt:"Manga Poster"})),r.a.createElement("p",null,e.genres),r.a.createElement("h1",null,e.name)))};t(35);var F=function(){var e=function(e){var a=e.ep;return r.a.createElement(c.b,{className:"chapters-info",to:"/reading?Name=Naruto"},r.a.createElement("div",{className:"chapter-info"},r.a.createElement("i",{class:"fas fa-book-reader"}),r.a.createElement("p",{id:"chap"},"Chap ",a),r.a.createElement("p",{id:"date"},"Oct 11, 2020"),r.a.createElement("p",{id:"followers"},r.a.createElement("i",{class:"far fa-heart"})," 5,135")))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chapter-container"},r.a.createElement("div",{className:"chapters"},r.a.createElement("ul",{className:"chapter"},d.map((function(a,t){if("Naruto"===a.name)return a.chaps.slice(0,5).map((function(a){return r.a.createElement("li",{className:"chapter-number"},r.a.createElement(e,{ep:a}))}))})))),r.a.createElement("div",{className:"manga-description"},r.a.createElement("div",{className:"manga-description__reading-info"},r.a.createElement("div",{className:"reader-count"},r.a.createElement("p",null,r.a.createElement("i",{class:"fas fa-book-reader"})," 50.5k")),r.a.createElement("div",{className:"rating-star"},r.a.createElement("p",{id:"rating-score"},r.a.createElement("i",{class:"fas fa-star"})," 4.85"),r.a.createElement("p",{id:"icon"},"Rate"))),r.a.createElement("div",{className:"manga-description__info"},r.a.createElement("h3",null,r.a.createElement("i",{class:"fas fa-heart"})," DESCRIPTION")),r.a.createElement("div",{className:"manga-desciption__text"},d.map((function(e,a){if("Naruto"===e.name)return r.a.createElement("p",null,e.text)}))),r.a.createElement("div",{className:"btn-cfa"},r.a.createElement(c.b,{to:"/reading?Name=Naruto",className:"btn-mobile"},r.a.createElement("button",{q:!0,className:"btn btn--outline btn--large"},"READ NOW ",r.a.createElement("i",{class:"fas fa-chevron-right"})))))))};var x=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{src:"/komine-app/images/NarutoPoster.jpg",name:"Naruto",genres:"Adventure, Fantasy"}),r.a.createElement(F,null))};t(36);var I=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("section",{className:"footer-subscription"},r.a.createElement("p",{className:"footer-subscription-heading"},"Sign Up to receive an email for daily releases chapters"),r.a.createElement("p",{className:"footer-subscription-text"},"Let's explore the world of manga together"),r.a.createElement("div",{className:"input-areas"},r.a.createElement("form",null,r.a.createElement("input",{type:"email",name:"email",placeholder:"Your Email",className:"footer-input"}),r.a.createElement(u,{buttonStyle:"btn--outline"},"Subscribe")))),r.a.createElement("div",{class:"footer-links"},r.a.createElement("div",{className:"footer-link-wrapper"},r.a.createElement("div",{class:"footer-link-items"},r.a.createElement(c.b,{className:"footer__link--item",to:"/komine-app"},"About"),r.a.createElement(c.b,{className:"footer__link--item",to:"/komine-app"},"Feedback"),r.a.createElement(c.b,{className:"footer__link--item",to:"/komine-app"},"Help"),r.a.createElement(c.b,{className:"footer__link--item",to:"/komine-app"},"Terms"),r.a.createElement(c.b,{className:"footer__link--item",to:"/komine-app"},"Privacy"),r.a.createElement(c.b,{className:"footer__link--item",to:"/komine-app"},"Personal Data")))),r.a.createElement("section",{class:"social-media"},r.a.createElement("div",{class:"social-media-wrap"},r.a.createElement("div",{class:"social-icons"},r.a.createElement(c.b,{class:"social-icon-link facebook",to:"/",target:"_blank","aria-label":"Facebook"},r.a.createElement("i",{class:"fab fa-facebook-f"})),r.a.createElement(c.b,{class:"social-icon-link instagram",to:"/",target:"_blank","aria-label":"Instagram"},r.a.createElement("i",{class:"fab fa-instagram"})),r.a.createElement(c.b,{class:"social-icon-link youtube",to:"/",target:"_blank","aria-label":"Youtube"},r.a.createElement("i",{class:"fab fa-youtube"})),r.a.createElement(c.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"Twitter"},r.a.createElement("i",{class:"fab fa-twitter"})),r.a.createElement(c.b,{class:"social-icon-link twitter",to:"/",target:"_blank","aria-label":"LinkedIn"},r.a.createElement("i",{class:"fab fa-linkedin"}))))),r.a.createElement("small",{class:"website-rights"},"Copyright \xa9 2020"))};t(37);var T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dropdown-container"},r.a.createElement("button",{id:"prev-chap"},r.a.createElement("i",{class:"fas fa-chevron-circle-left"})),r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("select",{name:"chap",id:"chap"},d.map((function(e,a){if("Naruto"===e.name)return e.chaps.slice(0,5).map((function(e){return r.a.createElement("option",{value:e},"Chap ",e)}))}))))),r.a.createElement("button",{id:"next-chap"},r.a.createElement("i",{class:"fas fa-chevron-circle-right"}))))};t(38);var A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"reading-area__container"},r.a.createElement("p",null,"Manga Will Show Here")))};var O=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{src:"/komine-app/images/NarutoPoster.jpg",name:"Naruto",genres:"Adventure, Fantasy"}),r.a.createElement(T,null),r.a.createElement(A,null))};var j=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(h,null),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/komine-app",exact:!0,component:v}),r.a.createElement(p.a,{path:"/sign-in",exact:!0,component:N}),r.a.createElement(p.a,{path:"/latest",exact:!0,component:_}),r.a.createElement(p.a,{path:"/genres",exact:!0,component:y}),r.a.createElement(p.a,{path:"/popular",exact:!0,component:w}),r.a.createElement(p.a,{path:"/manga-info",component:x}),r.a.createElement(p.a,{path:"/reading",component:O})),r.a.createElement(I,null)))};l.a.render(r.a.createElement(j,null),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.527df6a4.chunk.js.map