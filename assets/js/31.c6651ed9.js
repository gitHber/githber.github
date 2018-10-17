(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{168:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"渲染类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染类","aria-hidden":"true"}},[t._v("#")]),t._v(" 渲染类")]),s("h3",{attrs:{id:"使用viewport固定屏幕渲染，可以加速页面渲染内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用viewport固定屏幕渲染，可以加速页面渲染内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用Viewport固定屏幕渲染，可以加速页面渲染内容")]),s("p",[t._v("一般认为，在移动端设置Viewport可以加速页面的渲染，同时可以避免缩放导致页面重排重绘，在移动端固定Viewport设置的方法如下。")]),s("div",{staticClass:"language-html line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"避免各种形式重排重绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#避免各种形式重排重绘","aria-hidden":"true"}},[t._v("#")]),t._v(" 避免各种形式重排重绘")]),s("p",[t._v("页面的重排重绘会很耗性能，所以一定要尽可能减少页面的重排重绘，例如页面图片的大小变化，元素位置变化等这些情况都会导致重排重绘。")]),s("h3",{attrs:{id:"使用css3动画，开启gpu加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用css3动画，开启gpu加速","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用CSS3动画，开启GPU加速")]),s("p",[t._v("使用CSS3动画时可以设置transform: translateZ(0)来开启设备浏览器的图形处理加速，让动画过程更加流畅。")]),s("h3",{attrs:{id:"合理使用cavas和requestanimationframe"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#合理使用cavas和requestanimationframe","aria-hidden":"true"}},[t._v("#")]),t._v(" 合理使用cavas和requestAnimationFrame")]),s("p",[t._v("选择canvas或requestAnimationFrame等更搞笑的动画实现方式，尽量避免使用setTimeout处理连续动画。")]),s("h3",{attrs:{id:"svg代替图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#svg代替图片","aria-hidden":"true"}},[t._v("#")]),t._v(" SVG代替图片")]),s("p",[t._v("部分情况下可以考虑使用SVG代替图片实现动画，因为使用SVG格式内容更小，而且SVG DOM结构方便调整。")]),s("h3",{attrs:{id:"不滥用float"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不滥用float","aria-hidden":"true"}},[t._v("#")]),t._v(" 不滥用float")]),s("p",[t._v("在DOM渲染树生成后的布局渲染阶段，使用Float的元素布局计算比较消耗性能，所以尽量减少float的使用，推荐使用固定布局或flex-box弹性布局的房还是来实现页面元素布局。")]),s("h3",{attrs:{id:"不滥用web字体或过多的font-size声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不滥用web字体或过多的font-size声明","aria-hidden":"true"}},[t._v("#")]),t._v(" 不滥用web字体或过多的font-size声明")]),s("p",[t._v("过多的font-size声明会增加字体的大小计算，而且也是没有必要的。")])])}],!1,null,null,null);n.options.__file="5.md";a.default=n.exports}}]);