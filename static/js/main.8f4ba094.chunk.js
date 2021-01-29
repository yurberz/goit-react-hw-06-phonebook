(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{47:function(n,t,e){},58:function(n,t,e){"use strict";e.r(t);var a=e(1),o=e(0),r=e(7),c=e.n(r),i=e(5),l=(e(47),e(16)),s=e(17),u=e(20),d=e(19),p=e(8),b=e(9);function m(){var n=Object(p.a)(["\n  max-width: 1170px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 12px;\n  padding-right: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .h1Title {\n    text-align: center;\n    margin-bottom: 30px;\n    font-size: 46px;\n    color: honeydew;\n  }\n\n  .h2Title {\n    margin-bottom: 30px;\n    font-size: 32px;\n    color: honeydew;\n  }\n\n  .text {\n    font-size: 18px;\n    font-style: italic;\n    color: salmon;\n  }\n\n  .h1-appear {\n    transform: translateX(-300%);\n  }\n\n  .h1-appear-active {\n    transform: translateX(0);\n    transition: transform 500ms linear;\n  }\n"]);return m=function(){return n},n}var h=b.a.div(m()),f=e(10),x=e(24),j=e(6),g=e(31),O=e.n(g),y={addContact:Object(j.b)("contact/add",(function(n){return{payload:{contact:Object(x.a)(Object(x.a)({},n),{},{id:O.a.generate()})}}})),delContact:Object(j.b)("contact/del"),changeFilter:Object(j.b)("contacts/changeFilter")};function v(){var n=Object(p.a)(["\n  padding: 10px;\n  margin-bottom: 50px;\n  border: 1px dotted orange;\n\n  .label {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n    color: honeydew;\n    font-size: 22px;\n    font-weight: 700;\n  }\n\n  .input {\n    margin-top: 20px;\n    padding: 10px;\n    width: 250px;\n    height: 35px;\n    color: black;\n    font-size: 16px;\n    font-style: italic;\n  }\n\n  .submitBtn {\n    display: flex;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 10px;\n    min-width: 80px;\n    height: 25px;\n    outline: none;\n    border-radius: 4px;\n    border-bottom: solid 1px #d6d6d6;\n    background-color: honeydew;\n    color: black;\n    font-weight: 700;\n    font-size: 14px;\n\n    &:hover {\n      cursor: pointer;\n    }\n    &:active {\n      background-color: springgreen;\n    }\n  }\n"]);return v=function(){return n},n}var w=b.a.form(v()),C=function(n){Object(u.a)(e,n);var t=Object(d.a)(e);function e(){var n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=t.call.apply(t,[this].concat(o))).state={name:"",number:""},n.handleChange=function(t){var e=t.currentTarget,a=e.name,o=e.value;n.setState(Object(f.a)({},a,o))},n.handleSubmit=function(t){t.preventDefault(),n.props.onSubmit(n.state),n.setState({name:"",number:""})},n}return Object(s.a)(e,[{key:"render",value:function(){var n=this.state,t=n.name,e=n.number;return Object(a.jsxs)(w,{id:"contact",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{className:"label",children:["Name",Object(a.jsx)("input",{className:"input",type:"text",name:"name",value:t,onChange:this.handleChange,placeholder:"Type to name"})]}),Object(a.jsxs)("label",{className:"label",children:["Phone number",Object(a.jsx)("input",{className:"input",type:"text",name:"number",value:e,onChange:this.handleChange,placeholder:"Type to phone(e.g. 111-11-11)"})]}),Object(a.jsx)("button",{type:"submit",className:"submitBtn",children:"Add contact"})]})}}]),e}(o.Component),k={onSubmit:y.addContact},N=Object(i.b)(null,k)(C),S=e(60),z=e(59);function F(){var n=Object(p.a)(["\n  .contactList__item {\n    width: 400px;\n    display: flex;\n    justify-content: space-around;\n    align-items: baseline;\n    color: springgreen;\n    font-size: 19px;\n    font-weight: 500;\n\n    &:not(:last-child) {\n      margin-bottom: 20px;\n    }\n  }\n\n  .delBtn {\n    display: flex;\n    align-items: center;\n    outline: none;\n    border-radius: 4px;\n    border-bottom: solid 1px #d6d6d6;\n    min-width: 20px;\n    height: 25px;\n    padding: 10px;\n    background-color: honeydew;\n    color: black;\n    font-weight: 500;\n    font-size: 12px;\n\n    &:hover {\n      cursor: pointer;\n    }\n    &:active {\n      background-color: salmon;\n    }\n  }\n\n  .itemFade-enter {\n    opacity: 0;\n    transform: translateX(200%);\n  }\n\n  .itemFade-enter-active {\n    opacity: 1;\n    transform: translateX(0);\n    transition: all 250ms linear;\n  }\n\n  .itemFade-exit {\n    opacity: 1;\n    transform: translateX(0);\n  }\n\n  .itemFade-exit-active {\n    opacity: 0;\n    transform: translateX(-200%);\n    transition: all 250ms linear;\n  }\n"]);return F=function(){return n},n}var T=b.a.div(F()),X={onDeleteContact:y.delContact},B=Object(i.b)((function(n){var t=n.contacts,e=t.items,a=t.filter.toLowerCase();return{contacts:e.filter((function(n){return n.name.toLowerCase().includes(a)}))}}),X)((function(n){var t=n.contacts,e=n.onDeleteContact;return Object(a.jsx)(T,{children:Object(a.jsx)(S.a,{component:"ul",children:t.map((function(n){var t=n.id,o=n.name,r=n.number;return Object(a.jsx)(z.a,{timeout:250,classNames:"itemFade",children:Object(a.jsxs)("li",{className:"contactList__item",children:[Object(a.jsxs)("p",{children:[o,": ",r]}),Object(a.jsx)("button",{className:"delBtn",type:"button",onClick:function(){return e(t)},children:"Delete"})]})},t)}))})})}));function D(){var n=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  color: honeydew;\n  font-size: 22px;\n  font-weight: 700;\n\n  .input {\n    margin-top: 20px;\n    padding: 10px;\n    width: 250px;\n    height: 35px;\n    color: black;\n    font-size: 16px;\n    font-style: italic;\n  }\n\n  .filterScale-enter {\n    opacity: 0;\n    transform: scale(0.1);\n  }\n\n  .filterScale-enter-active {\n    opacity: 1;\n    transform: scale(1);\n    transition: all 250ms linear;\n  }\n\n  .filterScale-exit {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  .filterScale-exit-active {\n    opacity: 0;\n    transform: scale(0.1);\n    transition: all 250ms linear;\n  }\n"]);return D=function(){return n},n}var L,_=b.a.label(D()),P={onChange:y.changeFilter},A=Object(i.b)((function(n){return{value:n.contacts.filter}}),P)((function(n){var t=n.value,e=n.onChange;return Object(a.jsxs)(_,{children:["Find contacts by name",Object(a.jsx)("input",{className:"input",type:"text",value:t,onChange:function(n){return e(n.currentTarget.value)}})]})})),E=function(n){Object(u.a)(e,n);var t=Object(d.a)(e);function e(){return Object(l.a)(this,e),t.apply(this,arguments)}return Object(s.a)(e,[{key:"render",value:function(){return Object(a.jsxs)(h,{children:[Object(a.jsx)(z.a,{in:!0,appear:!0,timeout:500,classNames:"h1",unmountOnExit:!0,children:Object(a.jsx)("h1",{className:"h1Title",children:"Phonebook"})}),Object(a.jsx)(N,{}),Object(a.jsx)("h2",{className:"h2Title",children:"Contacts"}),Object(a.jsx)(A,{}),Object(a.jsx)(B,{}),!this.props.contacts.length&&Object(a.jsx)("p",{className:"text",children:"Your phonebook is empty. Please add contact."})]})}}]),e}(o.Component),J=Object(i.b)((function(n){return{contacts:n.contacts.items}}))(E),I=e(32),Y=e(4),q=Object(j.c)([],(L={},Object(f.a)(L,y.addContact,(function(n,t){return[].concat(Object(I.a)(n),[t.payload.contact])})),Object(f.a)(L,y.delContact,(function(n,t){return n.filter((function(n){return n.id!==t.payload}))})),L)),G=Object(j.c)("",Object(f.a)({},y.changeFilter,(function(n,t){return t.payload}))),H=Object(Y.c)({items:q,filter:G}),K=Object(j.a)({reducer:{contacts:H}});c.a.render(Object(a.jsx)(i.a,{store:K,children:Object(a.jsx)(J,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.8f4ba094.chunk.js.map