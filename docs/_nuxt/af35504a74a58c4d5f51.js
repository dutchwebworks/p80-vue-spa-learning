(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{176:function(t,e,s){var n=s(185);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,s(17).default)("74c3772e",n,!0,{sourceMap:!1})},184:function(t,e,s){"use strict";var n=s(176);s.n(n).a},185:function(t,e,s){(t.exports=s(16)(!1)).push([t.i,"\n.news-detail{margin-top:40px;font-family:Roboto,Arial,sans-serif\n}\n.news-detail-title{color:#ff1493\n}\n.news-detail-thumbnail{box-shadow:0 10px 25px 0 rgba(0,0,0,.25)\n}\n.news-detail-date{font-size:18px;color:#00bfff\n}",""])},190:function(t,e,s){"use strict";s.r(e);var n={name:"NewsDetail",computed:{newsItem:function(){return this.$store.getters.newsItem(this.$route.params.id)}}},a=(s(184),s(10)),i=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"news-detail"},[s("img",{staticClass:"news-detail-thumbnail",attrs:{src:t.newsItem.thumbnail,alt:t.newsItem.title}}),t._v(" "),s("h1",{staticClass:"news-detail-title"},[t._v(t._s(t.newsItem.title))]),t._v(" "),s("p",{staticClass:"news-detail-date"},[s("small",[t._v(t._s(t.newsItem.dateNice))])]),t._v(" "),s("p",{staticClass:"paragraph"},[t._v(t._s(t.newsItem.description))])])},[],!1,null,null,null);i.options.__file="index.vue";e.default=i.exports}}]);