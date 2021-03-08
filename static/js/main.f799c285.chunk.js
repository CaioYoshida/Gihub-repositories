(this["webpackJsonpdesafio-07"]=this["webpackJsonpdesafio-07"]||[]).push([[0],{46:function(n,e,t){n.exports=t.p+"static/media/logo.d5cc199a.svg"},51:function(n,e,t){n.exports=t(80)},80:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),i=t(21),o=t.n(i),c=t(15),l=t(41),u=t(10),s=t(2),p=t(3);function d(){var n=Object(s.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  *:focus{\n    outline: 0;\n  }\n\n  html, body, #root {\n    height: 100%;\n  }\n\n  body {\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button, textarea {\n    font: 14px 'Roboto', sans-serif;\n  }\n\n  a {\n    list-style: none;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return d=function(){return n},n}var f=Object(p.a)(d()),m=t(4),b=t(19),g=function(n){var e=n.isPrivate,t=void 0!==e&&e,a=n.component,i=Object(b.a)(n,["isPrivate","component"]),o=Object(u.c)((function(n){return n}));return r.a.createElement(m.b,Object.assign({},i,{render:function(n){var e=n.location;return t===!!o.login?r.a.createElement(a,null):r.a.createElement(m.a,{to:{pathname:t?"/":"/dashboard",state:{from:e}}})}}))},x=t(6),h=t(7);function v(){var n=Object(s.a)(["\n      color: #2764bf;\n    "]);return v=function(){return n},n}function E(){var n=Object(s.a)(["\n      color: #2764bf;\n      border-color: #2764bf;\n    "]);return E=function(){return n},n}function j(){var n=Object(s.a)(["\n      border-color: #c53030;\n    "]);return j=function(){return n},n}function O(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 50px;\n  width: 100%;\n  padding: 0 10px;\n  background-color: #fbfbfb;\n  border-radius: 6px;\n  border: 2px solid #bbb;\n  color: #bbb;\n\n  & + div {\n    margin-top: 20px;\n  }\n\n  ","\n\n  ","\n\n  ","\n\n  svg {\n    margin-right: 8px;\n  }\n\n  input {\n    height: 25px;\n    font-size: 18px;\n    padding: 0px;\n    flex: 1;\n    border: 0;\n    background: transparent;\n    color: #444;\n    font-weight: bold;\n\n    &:focus {\n      outline: none;\n    }\n\n    &::placeholder {\n      color: #bbb;\n      font-weight: 400;\n      font-style: italic;\n    }\n  }\n"]);return O=function(){return n},n}var w=p.c.div(O(),(function(n){return n.isErrored&&Object(p.b)(j())}),(function(n){return n.isFocused&&Object(p.b)(E())}),(function(n){return n.isFilled&&Object(p.b)(v())})),y=function(n){var e=n.icon,t=n.isErrored,i=void 0!==t&&t,o=n.defaultValue,c=void 0===o?"":o,l=Object(b.a)(n,["icon","isErrored","defaultValue"]),u=Object(a.useRef)(null),s=Object(a.useState)(!1),p=Object(x.a)(s,2),d=p[0],f=p[1],m=Object(a.useState)(!1),g=Object(x.a)(m,2),h=g[0],v=g[1],E=Object(a.useCallback)((function(){f(!0)}),[]),j=Object(a.useCallback)((function(){f(!1),u.current&&u.current.value?v(!0):v(!1)}),[]);return r.a.createElement(w,{isErrored:i,isFilled:h,isFocused:d},e&&r.a.createElement(e,{size:20}),r.a.createElement("input",Object.assign({onFocus:E,onBlur:j,defaultValue:c,ref:u},l)))},k=t(46),S=t.n(k);function z(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  height: 50px;\n  width: 100%;\n  background-color: #2ad36e;\n  border-radius: 6px;\n  border: none;\n  color: #fff;\n  font-weight: bold;\n  font-size: 18px;\n  transition: background-color 0.2s;\n  outline: none;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #2cc66a;\n  }\n"]);return z=function(){return n},n}var C=p.c.button(z()),_=function(n){var e=n.children,t=Object(b.a)(n,["children"]);return(r.a.createElement(r.a.Fragment,null,r.a.createElement(C,Object.assign({type:"button"},t),e)))};function U(){var n=Object(s.a)(["\n  margin-top: 25px;\n"]);return U=function(){return n},n}function F(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  font-weight: bold;\n\n  color: #c53030;\n\n  margin-bottom: 5px;\n\n  svg {\n    margin-right: 5px;\n  }\n"]);return F=function(){return n},n}function R(){var n=Object(s.a)(["\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  width: 100%;\n  max-width: 400px;\n\n  > img {\n    margin-bottom: 25px;\n    width: 100%;\n    max-width: 400px;\n  }\n\n  @media (max-width: 430px) {\n    padding: 0 20px;\n  }\n"]);return R=function(){return n},n}function V(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  height: 100vh;\n"]);return V=function(){return n},n}var I=p.c.div(V()),N=p.c.div(R()),G=p.c.div(F()),B=Object(p.c)(_)(U()),M=function(){var n=Object(m.g)(),e=Object(u.b)(),t=Object(a.useState)(""),i=Object(x.a)(t,2),o=i[0],c=i[1],l=Object(a.useState)(""),s=Object(x.a)(l,2),p=s[0],d=s[1],f=Object(a.useState)(!1),b=Object(x.a)(f,2),g=b[0],v=b[1],E=Object(a.useCallback)((function(){"admin"===o&&"password"===p?(e(function(n,e){return{type:"@auth/SIGN_IN",payload:{login:n,password:e}}}(o,p)),v(!1),n.push("/dashboard")):v(!0)}),[o,p,n,e]);return r.a.createElement(I,null,r.a.createElement(N,null,r.a.createElement("img",{src:S.a,alt:"github-repositories"}),g&&r.a.createElement(G,null,r.a.createElement(h.a,{size:20}),r.a.createElement("span",null,"Usu\xe1rio e/ou senha inv\xe1lidos. Tente novamente!")),r.a.createElement(y,{icon:h.g,isErrored:g,defaultValue:o,onChange:function(n){return c(n.target.value)},placeholder:"Nome usu\xe1rio"}),r.a.createElement(y,{icon:h.d,isErrored:g,defaultValue:p,onChange:function(n){return d(n.target.value)},placeholder:"Senha",type:"password"}),r.a.createElement(B,{type:"button",onClick:E},"Entrar")))},P=t(20),T=t.n(P),A=t(22),H=t(47),J=t.n(H).a.create({baseURL:"https://api.github.com/users"});function L(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  width: 100%;\n  max-width: 250px;\n\n  button {\n    border: none;\n    background-color: transparent;\n    color: #c53030;\n\n    display: flex;\n    align-items: center;\n\n    span {\n      margin-left: 5px;\n      font-weight: 700;\n      font-size: 16px;\n    }\n  }\n\n  > div {\n    display: flex;\n    align-items: center;\n\n    span {\n      margin-right: 10px;\n      font-weight: 500;\n      font-size: 16px;\n    }\n\n    > img {\n      height: 44px;\n      border-radius: 22px;\n      border: 2px solid #c4c4c4;\n    }\n  }\n\n  @media (max-width: 500px) {\n    justify-content: flex-end;\n    > div {\n      display: none;\n    }\n  }\n"]);return L=function(){return n},n}function q(){var n=Object(s.a)(["\n  height: 70px;\n  width: 100%;\n  padding: 0 10px;\n  background-color: #fff;\n  position: fixed;\n  top: 0;\n\n  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.25);\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  > img {\n    height: 50px;\n    margin-right: 10px;\n  }\n"]);return q=function(){return n},n}var D=p.c.div(q()),K=p.c.div(L()),Q=function(){var n=Object(u.b)(),e=Object(u.c)((function(n){return n}));return r.a.createElement(D,null,r.a.createElement("img",{src:"https://i.imgur.com/acbFfn9.png",alt:"github-repositories"}),r.a.createElement(K,null,r.a.createElement("button",{type:"button",onClick:function(){return n({type:"@auth/SIGN_OUT"})}},r.a.createElement(h.c,{size:20}),r.a.createElement("span",null,"Sair")),r.a.createElement("div",null,r.a.createElement("span",null,"Ol\xe1, ".concat(e.login)),r.a.createElement("img",{src:"https://avatars.githubusercontent.com/u/810438?v=4",alt:"Fulano"}))))};function W(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n\n  margin-top: 40px;\n\n  > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    span {\n      font-size: 26px;\n      font-weight: 700;\n      color: #333;\n    }\n\n    strong {\n      font-size: 40px;\n      color: #2764bf;\n      margin-top: 20px;\n    }\n  }\n\n  @media (max-width: 500px) {\n    > div {\n      span {\n        font-size: 18px;\n      }\n\n      strong {\n        margin-top: 10px;\n        font-size: 26px;\n      }\n    }\n  }\n"]);return W=function(){return n},n}function X(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n\n  img {\n    height: 180px;\n    border-radius: 90px;\n\n    border: 6px solid #bbb;\n  }\n\n  > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    margin-left: 60px;\n\n    strong {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      color: #333;\n\n      > svg {\n        margin-right: 5px;\n      }\n    }\n\n    h3 {\n      margin-top: 10px;\n      font-size: 20px;\n      font-weight: 500;\n    }\n\n    p {\n      margin-top: 10px;\n      color: #555;\n      font-weight: 300;\n      font-style: italic;\n    }\n  }\n\n  @media (max-width: 600px) {\n    flex-direction: column;\n    align-items: center;\n\n    img {\n      height: 200px;\n      width: 200px;\n      border-radius: 100px;\n    }\n\n    > div {\n      margin-top: 20px;\n      margin-left: 0px;\n      align-items: center;\n    }\n  }\n"]);return X=function(){return n},n}function Y(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 100%;\n  max-width: 900px;\n\n  margin-top: 15px;\n  margin-left: 10px;\n  margin-right: 10px;\n\n  background-color: #fff;\n  padding: 50px;\n  border-radius: 8px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\n  button {\n    width: 100%;\n    max-width: 600px;\n    align-self: center;\n\n    margin-top: 30px;\n  }\n\n  @media (max-width: 600px) {\n    padding: 20px;\n  }\n"]);return Y=function(){return n},n}function Z(){var n=Object(s.a)(["\n  margin-top: 90px;\n  margin-left: 10px;\n  margin-right: 10px;\n\n  width: 100%;\n  max-width: 900px;\n\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\n  > span {\n    font-weight: 500;\n  }\n\n  > div {\n    display: flex;\n    flex-direction: row;\n\n    margin-top: 10px;\n\n    button {\n      width: 100%;\n      max-width: 80px;\n\n      margin-left: 10px;\n\n      svg {\n        display: none;\n      }\n    }\n  }\n\n  @media (max-width: 500px) {\n    > div {\n      button {\n        svg {\n          display: block;\n        }\n\n        span {\n          display: none;\n        }\n      }\n    }\n  }\n"]);return Z=function(){return n},n}function $(){var n=Object(s.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  height: 100vh;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: #e5e5e5;\n\n  @media (max-width: 900px) {\n    padding: 0 20px;\n  }\n"]);return $=function(){return n},n}var nn=p.c.div($()),en=p.c.div(Z()),tn=p.c.div(Y()),an=p.c.div(X()),rn=p.c.div(W()),on=function(){var n=Object(m.g)(),e=Object(u.b)(),t=Object(u.c)((function(n){return n})),i=Object(a.useState)(""),o=Object(x.a)(i,2),c=o[0],l=o[1],s=Object(a.useState)(),p=Object(x.a)(s,2),d=p[0],f=p[1],b=Object(a.useState)(!1),g=Object(x.a)(b,2),v=g[0],E=g[1],j=Object(a.useCallback)((function(){""===c?E(!0):e(function(n){return{type:"@auth/SEARCH_USER",payload:n}}(c))}),[c,e]);return Object(a.useEffect)((function(){function n(){return(n=Object(A.a)(T.a.mark((function n(){var e;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.searchUser){n.next=5;break}return n.next=3,J.get(t.searchUser);case 3:e=n.sent,f(e.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t.searchUser]),r.a.createElement(nn,null,r.a.createElement(Q,null),r.a.createElement(en,null,r.a.createElement("span",null,"Entre com o nome de um usu\xe1rio cadastrado no Github"),r.a.createElement("div",null,r.a.createElement(y,{isErrored:v,placeholder:"Busca de um usu\xe1rio",defaultValue:c,onChange:function(n){return l(n.target.value)}}),r.a.createElement(_,{type:"button",onClick:j},r.a.createElement(h.e,{size:18}),r.a.createElement("span",null,"Buscar")))),d&&r.a.createElement(tn,null,r.a.createElement(an,null,r.a.createElement("img",{src:d.avatar_url,alt:d.login}),r.a.createElement("div",null,r.a.createElement("strong",null,r.a.createElement(h.b,{size:14}),r.a.createElement("span",null,d.login)),r.a.createElement("h3",null,d.name),r.a.createElement("p",null,d.bio))),r.a.createElement(rn,null,r.a.createElement("div",null,r.a.createElement("span",null,"Reposit\xf3rios"),r.a.createElement("strong",null,d.public_repos)),r.a.createElement("div",null,r.a.createElement("span",null,"Seguidores"),r.a.createElement("strong",null,d.followers)),r.a.createElement("div",null,r.a.createElement("span",null,"Seguindo"),r.a.createElement("strong",null,d.following))),r.a.createElement(_,{type:"button",onClick:function(){return n.push("/repositories/".concat(t.searchUser))}},"Ver reposit\xf3rios")))},cn=t(48);function ln(){var n=Object(s.a)(["\n  background-color: #fff;\n  padding: 15px;\n  border-radius: 8px;\n\n  h3 {\n    font-size: 22px;\n    color: #2764bf;\n    margin-bottom: 10px;\n  }\n\n  span {\n    color: #888;\n    font-style: italic;\n  }\n\n  main {\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    justify-content: space-around;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  div {\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n\n    strong {\n      margin-left: 5px;\n      font-size: 25px;\n      color: #2764bf;\n    }\n  }\n\n  button {\n    margin-top: 20px;\n  }\n"]);return ln=function(){return n},n}function un(){var n=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  height: 100vh;\n  width: 100vw;\n  z-index: 5;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  background-color: rgba(0, 0, 0, 0.5);\n\n  @media (max-width: 500px) {\n    padding: 0 20px;\n  }\n"]);return un=function(){return n},n}var sn=p.c.div(un()),pn=p.c.div(ln()),dn=function(n){var e=n.handleClickOutsideModal,t=n.repository;return(r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(sn,{onClick:e},r.a.createElement(pn,null,r.a.createElement("h3",null,t.name),r.a.createElement("span",null,t.description),r.a.createElement("main",null,r.a.createElement("div",null,r.a.createElement(h.f,{size:25}),r.a.createElement("strong",null,t.stargazers_count)),r.a.createElement("div",null,r.a.createElement(cn.a,{size:25}),r.a.createElement("strong",null,t.forks_count)),r.a.createElement("div",null,r.a.createElement(h.a,{size:25}),r.a.createElement("strong",null,t.open_issues_count))),r.a.createElement("a",{href:"https://www.github.com/".concat(t.full_name)},r.a.createElement(_,{type:"button"},"Ver reposi\xf3rio"))))))};function fn(){var n=Object(s.a)(["\n  margin-top: 25px;\n  align-self: center;\n\n  button {\n    border: none;\n    background-color: transparent;\n\n    font-weight: 500;\n    color: #777;\n  }\n\n  strong {\n    margin: 0 15px;\n  }\n"]);return fn=function(){return n},n}function mn(){var n=Object(s.a)(["\n  width: 100%;\n  margin-top: 20px;\n\n  > button {\n    height: 60px;\n    border: none;\n    background-color: #d9e8fe;\n    border-radius: 8px;\n    width: 100%;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding-left: 8px;\n\n    & + button {\n      margin-top: 15px;\n    }\n\n    strong {\n      color: #2764bf;\n      font-size: 18px;\n    }\n\n    span {\n      margin-top: 5px;\n\n      color: #427dd6;\n      font-style: italic;\n    }\n  }\n\n  @media (max-width: 600px) {\n    > button {\n      width: 100%;\n\n      span {\n        display: none;\n      }\n    }\n  }\n"]);return mn=function(){return n},n}function bn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n\n  img {\n    height: 100px;\n    border-radius: 50px;\n\n    border: 4px solid #bbb;\n  }\n\n  > div {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n\n    margin-left: 30px;\n\n    strong {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      color: #333;\n\n      > svg {\n        margin-right: 5px;\n      }\n    }\n\n    h3 {\n      margin-top: 10px;\n      font-size: 20px;\n      font-weight: 500;\n    }\n\n    p {\n      margin-top: 10px;\n      color: #555;\n      font-weight: 300;\n      font-style: italic;\n    }\n  }\n\n  @media (max-width: 600px) {\n    > div {\n      margin-top: 20px;\n      margin-left: 30px;\n      align-items: center;\n\n      p {\n        display: none;\n      }\n    }\n  }\n"]);return bn=function(){return n},n}function gn(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 100%;\n  max-width: 900px;\n\n  margin-top: 90px;\n  margin-left: 10px;\n  margin-right: 10px;\n\n  background-color: #fff;\n  padding: 30px;\n  border-radius: 8px;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n\n  > strong {\n    margin-top: 25px;\n    font-size: 26px;\n    font-weight: 900;\n    color: #2764bf;\n  }\n\n  @media (max-width: 600px) {\n    align-items: center;\n\n    padding: 20px;\n  }\n"]);return gn=function(){return n},n}function xn(){var n=Object(s.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  height: 100vh;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: #e5e5e5;\n\n  @media (max-width: 900px) {\n    padding: 0 20px;\n  }\n"]);return xn=function(){return n},n}var hn=p.c.div(xn()),vn=p.c.div(gn()),En=p.c.div(bn()),jn=p.c.div(mn()),On=p.c.div(fn()),wn=function(){var n=Object(m.h)(),e=Object(a.useState)(1),t=Object(x.a)(e,2),i=t[0],o=t[1],c=Object(a.useState)(5),l=Object(x.a)(c,2),u=l[0],s=l[1],p=Object(a.useState)(!1),d=Object(x.a)(p,2),f=d[0],b=d[1],g=Object(a.useState)(),v=Object(x.a)(g,2),E=v[0],j=v[1],O=Object(a.useState)(),w=Object(x.a)(O,2),y=w[0],k=w[1],S=Object(a.useState)([]),z=Object(x.a)(S,2),C=z[0],_=z[1];Object(a.useEffect)((function(){function e(){return(e=Object(A.a)(T.a.mark((function e(){var t,a,r,o;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.get("".concat(n.params.user,"/repos?per_page=5&page=").concat(i));case 2:return t=e.sent,a=t.data,e.next=6,J.get("".concat(n.params.user));case 6:r=e.sent,o=r.data,_(a),j(o),s(Math.ceil(o.public_repos/5));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,n.params.user]);var U=Object(a.useCallback)((function(){o(i+1)}),[i]),F=Object(a.useCallback)((function(){i>=2&&o(i-1)}),[i]),R=Object(a.useCallback)((function(n){k(n),b(!0)}),[]),V=Object(a.useCallback)((function(){b(!1)}),[]);return r.a.createElement(hn,null,r.a.createElement(Q,null),f&&y&&r.a.createElement(dn,{handleClickOutsideModal:V,repository:y}),r.a.createElement(vn,null,E&&r.a.createElement(En,null,r.a.createElement("img",{src:E.avatar_url,alt:E.login}),r.a.createElement("div",null,r.a.createElement("strong",null,r.a.createElement(h.b,{size:14}),r.a.createElement("span",null,E.login)),r.a.createElement("h3",null,E.name),r.a.createElement("p",null,E.bio))),r.a.createElement("strong",null,"Lista de reposit\xf3rios"),r.a.createElement(jn,null,C&&C.map((function(n){return r.a.createElement("button",{key:n.id,type:"button",onClick:function(){return R(n)}},r.a.createElement("strong",null,n.name),r.a.createElement("span",null,n.description))}))),r.a.createElement(On,null,i>=2&&r.a.createElement("button",{type:"button",onClick:F},"anterior"),r.a.createElement("strong",null,i),i<u&&r.a.createElement("button",{type:"button",onClick:U},"pr\xf3xima"))))},yn=function(){return r.a.createElement(m.d,null,r.a.createElement(g,{exact:!0,path:"/",component:M}),r.a.createElement(g,{path:"/dashboard",component:on,isPrivate:!0}),r.a.createElement(g,{path:"/repositories/:user",component:wn,isPrivate:!0}))},kn=t(49),Sn=t.n(kn),zn=t(27),Cn=t(13),_n=t(50),Un={login:"",password:"",searchUser:""};var Fn={key:"@github-repositories",storage:Sn.a,blacklist:"auth"},Rn=Object(Cn.c)(Object(zn.a)(Fn,(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Un,e=arguments.length>1?arguments[1]:void 0;return Object(_n.a)(n,(function(n){switch(e.type){case"@auth/SIGN_IN":n.login=e.payload.login,n.password=e.payload.password;break;case"@auth/SIGN_OUT":n.login="",n.password="",n.searchUser="";break;case"@auth/SEARCH_USER":n.searchUser=e.payload}}))}))),Vn=Object(zn.b)(Rn),In=function(){return r.a.createElement(c.a,{basename:"/Gihub-repositories"},r.a.createElement(u.a,{store:Rn},r.a.createElement(l.a,{persistor:Vn},r.a.createElement(yn,null))),r.a.createElement(f,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(In,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.f799c285.chunk.js.map