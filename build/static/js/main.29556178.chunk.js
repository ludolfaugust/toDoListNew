(this["webpackJsonpto-do-list-new"]=this["webpackJsonpto-do-list-new"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var o=n(2),c=n.n(o),i=n(8),a=n.n(i),r=(n(15),n(7)),s=n(3),u=n(1);var d=function(t){var e=Object(o.useState)(t.edit?t.edit.value:""),n=Object(s.a)(e,2),c=n[0],i=n[1],a=Object(o.useRef)(null);Object(o.useEffect)((function(){a.current.focus()}));var r=function(t){i(t.target.value)};return Object(u.jsx)("form",{className:"todo-form",onSubmit:function(e){e.preventDefault(),t.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),i("")},children:t.edit?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{type:"text",placeholder:"Was vergessen?",value:c,name:"text",className:"todo-input",onChange:r,ref:a}),Object(u.jsx)("button",{className:"todo-button",children:"Update"})]}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",{placeholder:"Walk the car!...wash the dog...your turn!",value:c,name:"text",className:"todo-input",onChange:r,ref:a}),Object(u.jsx)("button",{className:"todo-button",children:"Trau Dich!"})]})})},l=n(9),j=n(10);var b=function(t){var e=t.todos,n=t.completeTodo,c=t.removeTodo,i=t.updateTodo,a=Object(o.useState)({id:null,value:""}),r=Object(s.a)(a,2),b=r[0],m=r[1];return b.id?Object(u.jsx)(d,{edit:b,onSubmit:function(t){i(b.id,t),m({id:null,value:""})}}):e.map((function(t,e){return Object(u.jsxs)("div",{className:t.isComplete?"todo-row complete":"todo-row",children:[Object(u.jsx)("div",{onClick:function(){return n(t.id)},children:t.text},t.id),Object(u.jsxs)("div",{className:"icons",children:[Object(u.jsx)(l.a,{onClick:function(){return c(t.id)},className:"delete-icon"}),Object(u.jsx)(j.a,{onClick:function(){return m({id:t.id,value:t.text})},className:"edit-icon"})]})]},e)}))};var m=function(){var t=Object(o.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Was liegt heute an? "}),Object(u.jsx)(d,{onSubmit:function(t){var e=[t].concat(Object(r.a)(n));t.text&&!/^\s*$/.test(t.text)&&c(e)}}),Object(u.jsx)(b,{todos:n,completeTodo:function(t){var e=n.map((function(e){return e.id===t&&(e.isComplete=!e.isComplete),e}));c(e)},removeTodo:function(t){var e=Object(r.a)(n).filter((function(e){return e.id!==t}));c(e)},updateTodo:function(t,e){e.text&&!/^\s*$/.test(e.text)&&c((function(n){return n.map((function(n){return n.id===t?e:n}))}))}})]})};var f=function(){return Object(u.jsx)("div",{className:"todo-app",children:Object(u.jsx)(m,{})})};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.29556178.chunk.js.map