(this.webpackJsonpmusic_app=this.webpackJsonpmusic_app||[]).push([[0],{32:function(t,e,s){},71:function(t,e,s){"use strict";s.r(e);var a=s(0),c=s(1),n=s.n(c),i=s(18),r=s.n(i),l=s(6),o=s.n(l),u=s(19),h=s(20),d=s(21),m=s(25),j=s(24),p=(s(32),s(22)),b=s.n(p),v=s(23),O=s.n(v);var x=function(t){t.artistId;var e=t.collectionName,s=t.artistName,c=t.previewUrl,n=t.artworkUrl100;return Object(a.jsxs)("div",{className:"music",children:[Object(a.jsx)("img",{src:n,alt:e,title:e}),Object(a.jsxs)("div",{className:"music_data",children:[Object(a.jsx)("h3",{className:"music_title",children:e}),Object(a.jsx)("h5",{className:"music_artName",children:s}),Object(a.jsx)(O.a,{url:c,width:"400px",height:"50px",playing:!1,controls:!0})]})]})},g=function(t){Object(m.a)(s,t);var e=Object(j.a)(s);function s(){var t;Object(h.a)(this,s);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(t=e.call.apply(e,[this].concat(c))).state={isLoading:!0,term:"",holder:"SEARCH",musics:[]},t.getMusics=Object(u.a)(o.a.mark((function e(){var s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t.setState.term),e.next=3,b.a.get("http://itunes.apple.com/search?term=".concat(t.state.term,"&media=music&country=kr&limit=10"));case 3:s=e.sent,t.setState({musics:s});case 5:case"end":return e.stop()}}),e)}))),t}return Object(d.a)(s,[{key:"handleClick",value:function(t){t?this.setState({isLoading:!1,term:""}):this.setState({isLoading:!0}),this.getMusics()}},{key:"handleChange",value:function(t){this.setState({term:t.target.value})}},{key:"componentDidMount",value:function(){this.handleChange=this.handleChange.bind(this),this.getMusics()}},{key:"render",value:function(){var t=this,e=this.state,s=e.isLoading,c=e.musics;return Object(a.jsx)("section",{className:"container",children:s?Object(a.jsx)("div",{className:"loader",children:Object(a.jsxs)("form",{id:"content",children:[Object(a.jsx)("label",{children:Object(a.jsx)("input",{type:"search",name:"input",class:"input",value:this.state.term,placeholder:this.state.holder,onChange:this.handleChange})}),Object(a.jsx)("button",{class:"search",onClick:function(){return t.handleClick(s)}})]})}):Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)("div",{className:"prev_button",children:Object(a.jsx)("button",{class:"prev",onClick:function(){return t.handleClick()}})}),Object(a.jsx)("div",{className:"musics",children:c.data.results.map((function(t){return Object(a.jsx)(x,{artistId:t.artistId,collectionName:t.collectionName,artistName:t.artistName,artworkUrl100:t.artworkUrl100,previewUrl:t.previewUrl})}))})]})})}}]),s}(n.a.Component);r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(g,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.a635fc15.chunk.js.map