(this["webpackJsonpe-shop"]=this["webpackJsonpe-shop"]||[]).push([[0],{42:function(n,e,t){"use strict";t.r(e);var i,c,r,s,a,o,d,l,p,u,b,j,h,x,m,f,g,O,v=t(0),k=t.n(v),w=t(17),y=t.n(w),I=t(16),B=t(5),N=t(3),C=t(4),S=Object(C.a)(i||(i=Object(N.a)(["\n*,\nhtml {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  min-height: 100vh;\n}\n\nsection {\n  min-height: calc(100vh - 60px - 50px);\n}\n"]))),P=C.b.footer(c||(c=Object(N.a)(["\n  width: 100%;\n  height: 50px;\n  background-color: black;\n  color: white;\n  display: grid;\n  place-items: center;\n"]))),A=C.b.p(r||(r=Object(N.a)(["\n  font-size: 18px;\n"]))),F=t(1),q=function(){return Object(F.jsx)(P,{children:Object(F.jsx)(A,{children:"MacRapacki 2021"})})},z=C.b.nav(s||(s=Object(N.a)(["\n  width: 100%;\n  max-width: 1500px;\n  height: 60px;\n  background-color: white;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 30px;\n  margin: 0 auto;\n"]))),E=C.b.ul(a||(a=Object(N.a)(["\n  width: 65%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n"]))),W=C.b.li(o||(o=Object(N.a)(["\n  list-style: none;\n  display: grid;\n  place-items: center;\n"]))),H=Object(C.b)(I.c)(d||(d=Object(N.a)(["\nposition: relative;\n  cursor: pointer;\n  padding: 10px 20px;\n  text-decoration: none;\n  &.active {\n    border-bottom: 2px solid blueviolet;\n  }\n\n  .basketCounter{\n    position: absolute;\n    top: 55%;\n    right: 20%;\n    background-color: black;\n    display: grid;\n    place-items: center;\n    width:  18px;\n    height: 18px;\n    border-radius: 50%;\n    color: white;\n  }\n"]))),T=Object(C.b)(I.b)(l||(l=Object(N.a)(["\n  cursor: pointer;\n  text-decoration: none;\n"]))),M=C.b.div(p||(p=Object(N.a)(["\n  width: 10px;\n"]))),R=C.b.img(u||(u=Object(N.a)(["\n  width: 25px;\n"]))),J=t(6),L=t.p+"static/media/shopping-basket.a534240c.svg",Q=function(){var n=Object(J.c)((function(n){return n.basket.itemsInBasket}));return Object(F.jsxs)(z,{children:[Object(F.jsx)(M,{children:Object(F.jsx)(T,{to:"/eShop",children:"eShop"})}),Object(F.jsxs)(E,{children:[Object(F.jsx)(W,{children:Object(F.jsx)(H,{to:"/eShop",children:"Home"})}),Object(F.jsx)(W,{children:Object(F.jsx)(H,{to:"/products",children:"Products"})}),Object(F.jsx)(W,{children:Object(F.jsxs)(H,{to:"/basket",children:[Object(F.jsx)(R,{src:L,alt:"basket"}),n.length>0&&Object(F.jsx)("div",{className:"basketCounter",children:n.length})]})})]})]})},D=t.p+"static/media/homebg.0bf8b4f4.jpg",K=C.b.section(b||(b=Object(N.a)(["\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  .intro {\n    background-color: rgba(0, 0, 0, 0.6);\n    /* width: 70%; */\n    /* height: 50%; */\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    padding: 55px;\n    color: white;\n    border-radius: 8px;\n\n    h1 {\n      font-size: 32px;\n      text-align: center;\n      width: 100%;\n      margin-bottom: 50px;\n    }\n\n    p {\n      font-size: 20px;\n      text-align: center;\n    }\n  }\n"])),D),Y=function(){return Object(F.jsxs)(K,{children:[" ",Object(F.jsxs)("div",{className:"intro",children:[Object(F.jsx)("h1",{children:"eShop"}),Object(F.jsxs)("p",{children:["Here you can find top trends products and best prices from whole internet."," "]})]})]})},G=t(23),U=t(13),V=Object(U.c)({name:"basket",initialState:{itemsInBasket:[]},reducers:{addItem:function(n,e){var t=Object(G.a)(Object(G.a)({},e.payload),{quantity:1}),i=n.itemsInBasket.findIndex((function(n){return n.id===t.id}));i>=0?n.itemsInBasket[i].quantity+=1:n.itemsInBasket.push(t)},removeItem:function(n,e){var t=e.payload;1===n.itemsInBasket[t].quantity?n.itemsInBasket.splice(t,1):n.itemsInBasket[t].quantity-=1}}}),X=V.actions,Z=X.addItem,$=X.removeItem,_=V.reducer,nn=C.b.section(j||(j=Object(N.a)(["\n  width: 100%;\n  min-height: calc(100vh - 60px - 50px);\n  padding: 20px;\n"]))),en=C.b.div(h||(h=Object(N.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin: 20px;\n"]))),tn=C.b.button(x||(x=Object(N.a)(["\n  width: 80px;\n  height: 40px;\n  margin: 5px 20px;\n  cursor: pointer;\n  border: none;\n\n  &:hover {\n    border-bottom: 2px solid black;\n  }\n"]))),cn=C.b.div(m||(m=Object(N.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n"]))),rn=C.b.div(f||(f=Object(N.a)(["\n  width: 250px;\n  border: 2px solid lightgray;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 15px;\n  margin-top: 15px;\n  transition: 0.2s linear;\n\n  &:hover {\n    border: 2px solid black;\n  }\n\n  & > * {\n    margin: 8px auto;\n  }\n  .imgWrapper {\n    width: 200px;\n    height: 200px;\n    display: grid;\n    place-items: center;\n    img {\n      max-width: 80%;\n      max-height: 200px;\n    }\n  }\n\n  p {\n    text-align: center;\n    height: 50px;\n    margin-top: 10px;\n  }\n\n  .price {\n    font-weight: bold;\n  }\n"]))),sn=t(18),an=function(){var n=Object(J.c)((function(n){return n.shopProducts.products})),e=Object(v.useState)(n),t=Object(sn.a)(e,2),i=t[0],c=t[1];return{handleFilter:function(e){if("men's clothing"===e){var t=n.filter((function(n){return n.category===e}));return c(t)}if("women's clothing"===e){var i=n.filter((function(n){return n.category===e}));return c(i)}if("all"===e)return c(n);var r=n.filter((function(n){return"men's clothing"!==n.category&&"women's clothing"!==n.category}));return c(r)},filteredArray:i}},on=function(){var n=an(),e=n.handleFilter,t=n.filteredArray,i=Object(J.b)(),c=Object(J.c)((function(n){var e;return null===n||void 0===n||null===(e=n.shopProducts)||void 0===e?void 0:e.products})),r=Object(J.c)((function(n){var e;return null===n||void 0===n||null===(e=n.shopProducts)||void 0===e?void 0:e.status}));return Object(v.useEffect)((function(){console.log("KAPPA")}),[c]),Object(F.jsxs)(nn,{children:[Object(F.jsxs)(en,{children:[Object(F.jsx)(tn,{onClick:function(){return e("all")},children:"All"}),Object(F.jsx)(tn,{onClick:function(){return e("women's clothing")},children:"Women's"}),Object(F.jsxs)(tn,{onClick:function(){return e("men's clothing")},children:["Men's"," "]}),Object(F.jsxs)(tn,{onClick:function(){return e("accesories")},children:["Accessoreis"," "]})]}),Object(F.jsx)(cn,{children:"success"!==r?Object(F.jsx)("p",{children:"loading..."}):null===t||void 0===t?void 0:t.map((function(n){var e=n.id,t=n.title,r=n.image,s=n.price;return Object(F.jsxs)(rn,{children:[Object(F.jsx)("div",{className:"imgWrapper",children:Object(F.jsx)("img",{src:r,alt:"product"})}),Object(F.jsx)("p",{className:"title",children:t}),Object(F.jsxs)("p",{className:"price",children:["\xa3",s]}),Object(F.jsx)(tn,{onClick:function(){return function(n){var e=c.filter((function(e){return e.id===n}));console.log(e[0]),i(Z(e[0]))}(e)},children:"Add to basket"})]},e)}))})]})},dn=C.b.section(g||(g=Object(N.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n\n  .item {\n    width: 500px;\n    height: 150px;\n    border: 1px solid black;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-items: center;\n    margin: 5px 0;\n    padding: 10px;\n    position: relative;\n\n    p {\n      width: 60%;\n      text-align: center;\n\n      .itemQuantity {\n        font-weight: bold;\n      }\n\n      &.price {\n        font-weight: bold;\n      }\n    }\n\n    .imgWrapper {\n      width: 35%;\n      height: 100%;\n\n      img {\n        height: 100%;\n        max-width: 100%;\n      }\n    }\n\n    .removeButton {\n      position: absolute;\n      /* width: 30px; */\n      height: 30px;\n      right: 10px;\n      bottom: 10px;\n    }\n  }\n\n  .summary {\n    width: 500px;\n    padding: 20px 10px;\n    margin: 10px 0 0 0;\n    border: 2px solid black;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n  }\n\n  .emptyBasketInfo {\n    margin: 50px 0 20px 0;\n  }\n"]))),ln=function(){var n=function(){var n=Object(J.c)((function(n){return n.basket.itemsInBasket})),e=Object(J.b)(),t=Object(v.useState)([]),i=Object(sn.a)(t,2),c=i[0],r=i[1],s=function(){var e=0;return n.forEach((function(n){e+=n.price*n.quantity})),r(e.toFixed(2))},a=n.length;return Object(v.useEffect)((function(){s()}),[n]),{totalCost:c,countTotalCost:s,removeHandler:function(n){e($(n))},numberOfItemsInBasket:a,itemsInBasket:n}}(),e=n.totalCost,t=n.removeHandler,i=n.numberOfItemsInBasket,c=n.itemsInBasket;return Object(F.jsxs)(dn,{children:[0===i&&Object(F.jsx)("p",{className:"emptyBasketInfo",children:"Your basket is empty."}),c.map((function(n,e){var i=n.id,c=n.title,r=n.image,s=n.price,a=n.quantity;return Object(F.jsxs)("div",{className:"item",children:[Object(F.jsx)("div",{className:"imgWrapper",children:Object(F.jsx)("img",{src:r,alt:"product"})}),Object(F.jsxs)("p",{className:"title",children:[Object(F.jsxs)("span",{className:"itemQuantity",children:[a,"x "]}),c]}),Object(F.jsxs)("p",{className:"price",children:["\xa3",s]}),Object(F.jsx)("button",{className:"removeButton",onClick:function(){return t(e)},children:"Remove item"})]},i)})),Object(F.jsxs)("div",{className:"summary",children:[Object(F.jsxs)("p",{className:"itemsAmount",children:["Number of Items: ",i]}),Object(F.jsxs)("p",{className:"totalCost",children:["Total cost: ",e]})]})]})},pn=t(15),un=t(24),bn=t.n(un),jn=t(29),hn=Object(U.b)("products/getProducts",Object(jn.a)(bn.a.mark((function n(){var e,t;return bn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://fakestoreapi.com/products");case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})))),xn=Object(U.c)({name:"products",initialState:{products:[],status:""},reducers:{},extraReducers:(O={},Object(pn.a)(O,hn.pending,(function(n,e){n.status="loading"})),Object(pn.a)(O,hn.fulfilled,(function(n,e){n.status="success",n.products=e.payload})),Object(pn.a)(O,hn.rejected,(function(n,e){n.status="failed"})),O)}).reducer;var mn=function(){var n=Object(J.b)();return Object(v.useEffect)((function(){n(hn())}),[]),Object(F.jsxs)(F.Fragment,{children:[Object(F.jsx)(S,{}),Object(F.jsxs)(I.a,{children:[Object(F.jsx)(Q,{}),Object(F.jsx)("main",{children:Object(F.jsxs)(B.c,{children:[Object(F.jsx)(B.a,{path:"/eShop",component:Y}),Object(F.jsx)(B.a,{path:"/products",component:on}),Object(F.jsx)(B.a,{path:"/basket",component:ln})]})}),Object(F.jsx)(q,{})]})]})},fn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(e){var t=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;t(n),i(n),c(n),r(n),s(n)}))},gn=Object(U.a)({reducer:{shopProducts:xn,basket:_}});y.a.render(Object(F.jsx)(k.a.StrictMode,{children:Object(F.jsx)(J.a,{store:gn,children:Object(F.jsx)(mn,{})})}),document.getElementById("root")),fn()}},[[42,1,2]]]);
//# sourceMappingURL=main.4b981cbe.chunk.js.map