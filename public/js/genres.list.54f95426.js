(window['webpackJsonp']=window['webpackJsonp']||[]).push([['genres.list'],{'3d87':function(e,t,c){'use strict';var n=c('7a23'),r={class:'section section--head'},o={class:'container'},a={class:'row'},s={class:'col-12'},i={class:'section__title section__title--head'};function b(e,t,c,b,l,j){return Object(n['u'])(),Object(n['f'])('section',r,[Object(n['g'])('div',o,[Object(n['g'])('div',a,[Object(n['g'])('div',s,[Object(n['g'])('h1',i,Object(n['E'])(e.title),1)])])])])}var l=Object(n['k'])({props:{title:String}}),j=c('6b0d'),u=c.n(j);const O=u()(l,[['render',b]]);t['a']=O},'43f4':function(e,t,c){'use strict';c.d(t,'b',(function(){return r})),c.d(t,'a',(function(){return o}));var n=c('5e73');function r(){return Object(n['c'])('/genres')}function o(e){return Object(n['c'])('/genres/'.concat(e))}},'5b53':function(e,t,c){'use strict';c.r(t);c('b0c0');var n=c('7a23'),r={class:'container'},o={class:'row'};function a(e,t,c,a,s,i){var b=Object(n['C'])('Hero'),l=Object(n['C'])('placeholder'),j=Object(n['C'])('grid'),u=Object(n['C'])('genre');return Object(n['u'])(),Object(n['f'])(n['a'],null,[Object(n['j'])(b,{title:'Browse Genres'}),Object(n['g'])('div',r,[Object(n['g'])('div',o,[e.loading?(Object(n['u'])(),Object(n['d'])(j,{key:0},{default:Object(n['K'])((function(){return[Object(n['j'])(l),Object(n['j'])(l),Object(n['j'])(l),Object(n['j'])(l)]})),_:1})):(Object(n['u'])(),Object(n['d'])(j,{key:1},{default:Object(n['K'])((function(){return[(Object(n['u'])(!0),Object(n['f'])(n['a'],null,Object(n['A'])(e.genres,(function(e){return Object(n['u'])(),Object(n['d'])(u,{key:e.name,to:{name:'GenreView',params:{name:e.name}},poster:e.poster,name:e.name,movies:e.movies},null,8,['to','poster','name','movies'])})),128))]})),_:1}))])])],64)}var s=c('43f4'),i=c('3d87'),b=c('c2c0'),l={class:'col-12 col-sm-6 col-lg-4 col-xl-3'},j={class:'category__cover'},u=['src'],O={class:'category__title'},d={class:'category__value'};function g(e,t,c,r,o,a){var s=Object(n['C'])('router-link');return Object(n['u'])(),Object(n['f'])('div',l,[Object(n['j'])(s,{to:e.to,class:'category'},{default:Object(n['K'])((function(){return[Object(n['g'])('div',j,[Object(n['g'])('img',{src:e.posterImage,alt:''},null,8,u)]),Object(n['g'])('h3',O,Object(n['E'])(e.name),1),Object(n['g'])('span',d,Object(n['E'])(e.movies),1)]})),_:1},8,['to'])])}c('a9e3');var f=Object(n['k'])({name:'GenreGridItem',props:{to:Object,poster:String,name:String,movies:Number},computed:{posterImage:function(){return this.poster||'/img/poster-placeholder.png'}}}),m=c('6b0d'),v=c.n(m);const p=v()(f,[['render',g]]);var _=p,h=c('b71d'),k=Object(n['k'])({components:{Hero:i['a'],Grid:b['a'],Genre:_,Placeholder:h['a']},setup:function(){var e=Object(s['b'])(),t=e.loading,c=e.data;return{loading:t,genres:c}}});const w=v()(k,[['render',a]]);t['default']=w},b71d:function(e,t,c){'use strict';var n=c('7a23'),r={class:'col-12 col-sm-6 col-lg-4 col-xl-3 loading'},o=Object(n['g'])('div',{class:'category__cover'},[Object(n['g'])('img',{src:'/img/poster-placeholder.png',alt:''})],-1),a=Object(n['g'])('h3',{class:'category__title'},'Loading...',-1),s=[o,a];function i(e,t,c,o,a,i){return Object(n['u'])(),Object(n['f'])('div',r,s)}var b=Object(n['k'])({name:'GridPlaceholder'}),l=c('6b0d'),j=c.n(l);const u=j()(b,[['render',i]]);t['a']=u}}])
//# sourceMappingURL=genres.list.54f95426.js.map
