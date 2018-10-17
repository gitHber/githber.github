(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{170:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"图片类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片类","aria-hidden":"true"}},[t._v("#")]),t._v(" 图片类")]),a("h3",{attrs:{id:"图片压缩处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片压缩处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 图片压缩处理")]),a("p",[t._v("在移动端，通常要保证页面中一切用到的图片都是经过压缩优化处理的，而不是医院图的形式直接使用的，因为那样很消耗流量，而且加载的时间更长。")]),a("h3",{attrs:{id:"使用较小的图片，合理使用base64内嵌图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用较小的图片，合理使用base64内嵌图片","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用较小的图片，合理使用base64内嵌图片")]),a("p",[t._v("在页面使用的背景图片不多且较小的情况下，可以将图片转换成base64编码嵌入到HTML页面或CSS文件中，这样可以减少页面的HTTP请求数，需要注意的是，要保证图片较小，一般图片大小超过2KB就不推荐使用base64嵌入显示了。")]),a("h3",{attrs:{id:"使用更高压缩比格式的图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用更高压缩比格式的图片","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用更高压缩比格式的图片")]),a("p",[t._v("使用具有较高压缩比格式的图片，如webp等，在同等图片画质的情况下，高压缩比格式的图片体积更小，能够更快完成文件传输，节省网络流量。")]),a("h3",{attrs:{id:"图片懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片懒加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 图片懒加载")]),a("p",[t._v("为了保证页面内容的最小化，加速页面的渲染，尽可能节省移动端网络流量，页面中的图片资源推荐使用懒加载实现。")]),a("h3",{attrs:{id:"使用media-query或srcset根据不同屏幕加载不同大小图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用media-query或srcset根据不同屏幕加载不同大小图片","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用Media Query或srcset根据不同屏幕加载不同大小图片")]),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("source.jpg"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("srcset")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("source_2x.jpg 2x, source_3x.jpg 3x"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("source.jpg"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("width")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("100%"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{attrs:{class:"token attr-name"}},[t._v("srcset")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("source_400.jpg 400w, source_600.jpg 600w, source_1280.jpg 1280w"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("2x、3x 表示目标屏幕的像素密度；400w、600w表示目标浏览器的宽度的限度，如浏览器宽度550w时，匹配600w的src。")]),a("h3",{attrs:{id:"使用iconfont代替图片图标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用iconfont代替图片图标","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用iconfont代替图片图标")]),a("p",[t._v("在页面中尽可能使用iconfont来代替图片图标，这么做有以下几个好处：使用iconfont体积较小，而且是矢量图，因此缩放是不会失真，颜色和大小也可以方便修改，需要注意的是，iconfont引用不同的webfont格式时的兼容性写法，根据经验推荐尽量按照一下顺序书写，否则不容易兼容。")]),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{attrs:{class:"token atrule"}},[a("span",{attrs:{class:"token rule"}},[t._v("@font-face")])]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("font-family")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" iconfont"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("src")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token url"}},[t._v('url("./iconfont.eot)')]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v("src")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token url"}},[t._v('url("./iconfont.eot?#iefix)')]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("format")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"eot"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(",\n      "),a("span",{attrs:{class:"token url"}},[t._v('url("./iconfont.woff")')]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("format")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"woff"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{attrs:{class:"token url"}},[t._v('url("./iconfont.ttf")')]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("format")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"truetype"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("h3",{attrs:{id:"定义图片的大小限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义图片的大小限制","aria-hidden":"true"}},[t._v("#")]),t._v(" 定义图片的大小限制")]),a("p",[t._v("加载的单张图片一般建议不超过30KB，避免大图片加载时间长而阻塞页面其他资源的下载，因此推荐在10KB以内，如果用户上传的图片过大，建议设置告警系统，帮助我们观察了解整个网站的图片流量情况，做出进一步的改善。")])])}],!1,null,null,null);r.options.__file="3.md";s.default=r.exports}}]);