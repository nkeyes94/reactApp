(window["webpackJsonpreact-game"]=window["webpackJsonpreact-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Taco","image":"https://i7.pngguru.com/preview/520/981/223/taco-mexican-cuisine-cartoon-clip-art-tacos.jpg"},{"id":2,"name":"Beer","image":"https://i1.pngguru.com/preview/781/392/1007/emoji-sticker-beer-filled-beer-mug-png-clipart.jpg"},{"id":3,"name":"Pizza","image":"https://i7.pngguru.com/preview/812/451/585/pizza-pizza-sticker-rat-fink-pizza.jpg"},{"id":4,"name":"Wings","image":"https://i7.pngguru.com/preview/606/565/269/buffalo-wing-barbecue-chicken-fried-chicken-chicken-wings.jpg"},{"id":5,"name":"Bacon","image":"https://i7.pngguru.com/preview/185/162/457/bacon-breakfast-cheeseburger-cartoon-clip-art-bacon.jpg"},{"id":6,"name":"Sandwich","image":"https://i7.pngguru.com/preview/652/652/900/5bbc0335cfae7.jpg"},{"id":7,"name":"Burger","image":"https://i7.pngguru.com/preview/989/1009/206/hamburger-burgers-vector-euclidean-vector-burger-png-vector-clipart.jpg"},{"id":8,"name":"Fries","image":"https://i7.pngguru.com/preview/232/714/350/french-fries-frying-french-fries.jpg"},{"id":9,"name":"Salad","image":"https://i7.pngguru.com/preview/793/592/988/greek-salad-caesar-salad-israeli-salad-spinach-salad-fattoush-egg-salad.jpg"},{"id":10,"name":"Ribs","image":"https://i7.pngguru.com/preview/175/88/901/spare-ribs-barbecue-grill-barbecue-sauce-barbecue-chicken-grill.jpg"},{"id":11,"name":"Cheese","image":"https://i7.pngguru.com/preview/219/12/30/gruyere-cheese-swiss-cheese-yellow-cheese.jpg"},{"id":12,"name":"Wine","image":"https://i7.pngguru.com/preview/366/743/693/red-wine-wine-glass-wine-cocktail-white-wine-pour-wine.jpg"}]')},,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(3),c=a.n(i),o=(a(14),a(4)),s=a(5),l=a(7),g=a(6),p=a(8),u=(a(15),a(16),function(e){return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{className:"img-thumbnail img-responsive",alt:e.name,src:e.image,onClick:function(){return e.clickPicture(e.id)}})))}),m=(a(17),function(e){return n.a.createElement("div",{className:"true"===e.shakeWrapper?"wrapperShake":"wrapper"},e.pictures)}),d=a(1),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(n)))).state={cards:d,clickedArray:[],topScore:0,score:0,message:""},a.clickPicture=function(e){var t=a.shuffleArray(d);a.setState({cards:t}),a.state.clickedArray.includes(e)?a.setState({score:0,clickedArray:[],message:"Nope. Click to restart"}):a.setState({clickedArray:a.state.clickedArray.concat([e]),score:a.state.score+1,message:"Good -- Keep going"}),a.state.score>a.state.topScore&&a.setState({topScore:a.state.score})},a.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=[e[a],e[t]];e[t]=r[0],e[a]=r[1]}return e},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("h3",{className:"App-intro"},n.a.createElement("strong",null,"Click cards to earn points. If you click the same card more than once, you lose"),n.a.createElement("p",{className:"score"},n.a.createElement("strong",null,"Score: ",this.state.score," | TopScore: ",this.state.topScore)),n.a.createElement("p",{className:"message"},n.a.createElement("strong",null,this.state.message))),n.a.createElement(m,{pictures:this.state.cards.map((function(t){return n.a.createElement(u,{clickPicture:e.clickPicture,id:t.id,key:t.id,name:t.name,image:t.image})}))}))}}]),t}(r.Component),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(n.a.createElement(h,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/reactApp",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/reactApp","/service-worker.js");f?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):w(e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.088344f4.chunk.js.map