(this.webpackJsonpmusic_app=this.webpackJsonpmusic_app||[]).push([[0],{32:function(t,e,a){},71:function(t,e,a){"use strict";a.r(e);var s=a(1),c=a(0),r=a.n(c),i=a(18),n=a.n(i),l=a(6),o=a.n(l),u=a(19),m=a(20),d=a(21),j=a(25),p=a(24),h=(a(32),a(22)),b=a.n(h),v=a(23),x=a.n(v);var O=function(t){t.artistId;var e=t.collectionName,a=t.artistName,c=t.previewUrl,r=t.artworkUrl100;return Object(s.jsxs)("div",{className:"music",children:[Object(s.jsx)("img",{src:r,alt:e,title:e}),Object(s.jsxs)("div",{className:"music_data",children:[Object(s.jsx)("h3",{className:"music_title",children:e}),Object(s.jsx)("h5",{className:"music_artName",children:a}),Object(s.jsx)(x.a,{url:c,width:"400px",height:"50px",playing:!1,controls:!0})]})]})},N=function(t){Object(j.a)(a,t);var e=Object(p.a)(a);function a(){var t;Object(m.a)(this,a);for(var s=arguments.length,c=new Array(s),r=0;r<s;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={isLoading:!0,musics:[]},t.getMusics=Object(u.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("http://itunes.apple.com/search?term=\uc7a5\ubc94\uc900&media=music&country=kr&limit=10");case 2:a=e.sent,t.setState({musics:a,isLoading:!1});case 4:case"end":return e.stop()}}),e)}))),t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.getMusics()}},{key:"render",value:function(){var t=this.state,e=t.isLoading,a=t.musics;return Object(s.jsx)("section",{className:"container",children:e?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(s.jsx)("div",{className:"musics",children:a.data.results.map((function(t){return Object(s.jsx)(O,{artistId:t.artistId,collectionName:t.collectionName,artistName:t.artistName,artworkUrl100:t.artworkUrl100,previewUrl:t.previewUrl})}))})})}}]),a}(r.a.Component);n.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.c7e7b0a0.chunk.js.map