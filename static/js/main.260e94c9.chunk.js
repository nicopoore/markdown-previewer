(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{20:function(e,n,t){},21:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var i=t(1),r=t(0),a=t.n(r),c=t(7),o=t.n(c),s=(t(20),t(21),t(3)),d=t(4),l=t(8),u=t(6),h=t(5),b=t(2),j=function(e){Object(u.a)(t,e);var n=Object(h.a)(t);function t(e){var i;return Object(s.a)(this,t),(i=n.call(this,e)).handleChange=i.handleChange.bind(Object(l.a)(i)),i}return Object(d.a)(t,[{key:"handleChange",value:function(e){this.props.dispatch({type:"UPDATE",input:e.target.value})}},{key:"render",value:function(){return Object(i.jsxs)("div",{id:"EditorWrapper",class:"main-div",children:[Object(i.jsx)("div",{className:"main-div-header",children:Object(i.jsx)("h3",{children:"Editor"})}),Object(i.jsx)("textarea",{id:"editor",value:this.props.input,onChange:this.handleChange.bind(this)})]})}}]),t}(a.a.Component),p=Object(b.b)((function(e){return{input:e.input}}))(j),f=t(28);f.setOptions({breaks:!0});var v=function(e){Object(u.a)(t,e);var n=Object(h.a)(t);function t(e){return Object(s.a)(this,t),n.call(this,e)}return Object(d.a)(t,[{key:"render",value:function(){return Object(i.jsxs)("div",{id:"PreviewerWrapper",class:"main-div",children:[Object(i.jsx)("div",{className:"main-div-header",children:Object(i.jsx)("h3",{children:"Preview"})}),Object(i.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:f(this.props.input)}})]})}}]),t}(a.a.Component),O=Object(b.b)((function(e){return{input:e.input}}))(v),m=function(e){Object(u.a)(t,e);var n=Object(h.a)(t);function t(e){return Object(s.a)(this,t),n.call(this,e)}return Object(d.a)(t,[{key:"render",value:function(){return Object(i.jsxs)("div",{id:"HeaderWrapper",children:[Object(i.jsx)("h1",{id:"app-title",children:"Markdown Previewer"}),Object(i.jsxs)("span",{id:"credit",children:["by ",Object(i.jsx)("a",{id:"credit-name",href:"https://www.linkedin.com/in/nicolas-poore/",target:"_blank",rel:"noopener noreferrer",children:"Nicol\xe1s Poore"})]})]})}}]),t}(a.a.Component),g=t(9),w="UPDATE",x={input:"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n      - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n2. Use just 1s if you want!\n3. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://dummyimage.com/100x80/6153CA/fff.jpg&text=image)\n"};var k=Object(g.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case w:return{input:n.input};default:return e}}));var y=function(){return Object(i.jsxs)(b.a,{store:k,children:[Object(i.jsx)(m,{}),Object(i.jsx)(p,{}),Object(i.jsx)(O,{})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then((function(n){var t=n.getCLS,i=n.getFID,r=n.getFCP,a=n.getLCP,c=n.getTTFB;t(e),i(e),r(e),a(e),c(e)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root")),C()}},[[29,1,2]]]);
//# sourceMappingURL=main.260e94c9.chunk.js.map