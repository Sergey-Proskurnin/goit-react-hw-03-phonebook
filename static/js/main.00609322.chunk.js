(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"ContactForm_form__3n_Za",input:"ContactForm_input__22GTG",span:"ContactForm_span__31fQc",button:"ContactForm_button__2QNeX"}},,,,,function(t,e,n){t.exports={item:"ElementContactList_item__2ygqS",span:"ElementContactList_span__TkU0g",btnList:"ElementContactList_btnList__1u1wx"}},,function(t,e,n){t.exports={label:"Filter_label__1HcEq",span:"Filter_span__2V9x0",input:"Filter_input__3glaR"}},function(t,e,n){t.exports={container:"Container_container__2efJW",title:"Container_title__3-zFp"}},,,,function(t,e,n){t.exports={list:"ContactList_list__3v76d"}},function(t){t.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),s=n.n(r),i=(n(21),n(16)),o=n(3),l=n(4),u=n(6),m=n(5),b=(n(22),n(25)),d=n(13),p=n(2),h=n.n(p),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:t.props.name,number:t.props.number},t.nameInputId=Object(b.a)(),t.numberInputId=Object(b.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("form",{className:h.a.form,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{htmlFor:this.nameInputId,className:"lable",children:[Object(j.jsx)("span",{className:h.a.span,children:"Name"}),Object(j.jsx)("input",{className:h.a.input,type:"text",name:"name",value:e,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,id:this.nameInputId})]}),Object(j.jsxs)("label",{htmlFor:this.numberInputId,className:"lable",children:[Object(j.jsx)("span",{className:h.a.span,children:"Number"}),Object(j.jsx)("input",{className:h.a.input,type:"tel",name:"number",value:n,onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,id:this.numberInputId})]}),Object(j.jsx)("button",{className:h.a.button,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component);f.defaultProps={name:"",number:""};var O=f,C=n(9),_=n.n(C),x=Object(b.a)(),v=function(t){var e=t.filter,n=t.onChangeFilter;return Object(j.jsxs)("label",{htmlFor:x,children:[Object(j.jsx)("span",{className:_.a.span,children:"Find contacts by name and number"}),Object(j.jsx)("input",{className:_.a.input,type:"text",value:e,onChange:n,id:x})]})},g=n(7),N=n.n(g),y=function(t){var e=t.contacts,n=t.deleteContact;return e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(j.jsxs)("li",{className:N.a.item,children:[Object(j.jsx)("span",{className:N.a.span}),e,": ",a,Object(j.jsx)("button",{type:"button",className:N.a.btnList,onClick:function(){return n(c)},children:"Delete"})]},c)}))},S=n(14),F=n.n(S),I=function(t){var e=t.contacts,n=t.deleteContact;return Object(j.jsx)("ul",{className:F.a.list,children:Object(j.jsx)(y,{contacts:e,deleteContact:n})})},k=n(10),w=n.n(k),A=function(t){var e=t.children,n=t.title;return Object(j.jsxs)("div",{className:w.a.container,children:[Object(j.jsx)("h1",{className:w.a.title,children:n}),e]})},L=n(15),J=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:t.props.contacts,filter:t.props.filter},t.formAddContact=function(e){var n=e.name,a=e.number,c=t.state.contacts,r={name:n,number:a,id:Object(b.a)()};c.some((function(t){return t.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(n," is already in contacts")):c.some((function(t){return t.number===r.number}))?alert("".concat(a," is already in contacts")):t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(i.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)||t.number.includes(n)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t){var e=this.state.contacts;e!==t.contacts&&localStorage.setItem("contacts",JSON.stringify(e))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(j.jsxs)(A,{title:"Phonebook",children:[Object(j.jsx)(O,{onSubmit:this.formAddContact}),Object(j.jsx)("h2",{className:"title",children:"Contacts"}),Object(j.jsx)(v,{filter:t,onChangeFilter:this.changeFilter}),Object(j.jsx)(I,{contacts:e,deleteContact:this.deleteContact})]})}}]),n}(a.Component);J.defaultProps={contacts:L,filter:""};var E=J;s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.00609322.chunk.js.map