(this.webpackJsonpdcfs=this.webpackJsonpdcfs||[]).push([[35],{1221:function(t,e,n){t.exports={title:"Erc_1155_title__HPqYj",internal:"Erc_1155_internal__LBYgT",toprow:"Erc_1155_toprow__3JM1t",bg:"Erc_1155_bg__W4kqT",tools:"Erc_1155_tools__v9YRi"}},1262:function(t,e,n){"use strict";n.r(e),n(591);var a=n(592),o=n.n(a),r=n(1),c=n(6),s=n(0),l=n(28),i=n(37),u=n.n(i),d=n(34),j=n(23),b=n.n(j),p=n(148),f=n(1221),g=n.n(f),h=n(3);e.default=function(){var t=Object(s.useState)({page:1,count:10,tokenType:3,orderType:0}),e=Object(c.a)(t,2),n=e[0],a=e[1],i=Object(l.g)(),j=[{title:"Token",dataIndex:"name",width:"75%",key:"name",render:function(t,e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(h.jsx)("img",{width:20,height:20,src:null==e?void 0:e.logo_path,alt:""})," ",Object(h.jsx)("a",{onClick:function(){i.push({pathname:"/token1155/".concat(null==e?void 0:e.contract_address),state:{tokenName:null==e?void 0:e.symbol}})},children:null==e?void 0:e.symbol})]})})}},{title:"Transfers(24H)",dataIndex:"transferCount1Day",key:"transferCount1Day"},{title:"Transfers(7D)",dataIndex:"transferCount7Day",key:"transferCount7Day"}],f=function(t,e,n){var a=Object(s.useState)([]),o=Object(c.a)(a,2),r=o[0],l=o[1],i=Object(s.useState)(),u=Object(c.a)(i,2),j=u[0],f=u[1],g=Object(s.useCallback)(Object(d.a)(b.a.mark((function n(){var a,o,r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(p.r)({page:t,count:e,orderColumnId:1});case 3:return a=n.sent,o=[],r=function(){var t=Object(d.a)(b.a.mark((function t(e){var n,a,o,r,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(o=null===(n=localStorage)||void 0===n?void 0:n["logoImg_".concat(null==e?void 0:e.logo_path)])){t.next=5;break}a=o,t.next=11;break;case 5:return t.next=7,Object(p.o)({image_id:null==e?void 0:e.logo_path});case 7:r=t.sent,c=r.base64_image,localStorage["logoImg_".concat(null==e?void 0:e.logo_path)]=c,a=c;case 11:return e.logo=a,t.abrupt("return",Promise.resolve());case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),null==a||a.tokens.forEach((function(t){o.push(r(t))})),n.next=9,Promise.all(o);case 9:l(a),f(!0),n.next=16;break;case 13:throw n.prev=13,n.t0=n.catch(0),n.t0;case 16:case"end":return n.stop()}}),n,null,[[0,13]])}))),[t,e,1]);return Object(s.useEffect)((function(){g()}),[g]),{tokenInfo:r,loading:j}}(n.page,n.count),v=f.tokenInfo,O=f.loading;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"d-title ".concat(g.a.title),children:["Multi-Token Token Tracker",Object(h.jsx)("span",{className:"font-16",children:"ERC-1155"})]}),Object(h.jsxs)("div",{className:g.a.internal,children:[Object(h.jsx)("div",{className:g.a.tools,children:Object(h.jsx)("div",{children:"Multi-Token Tokens"})}),null!=v&&v.totalCount?Object(h.jsxs)("div",{className:g.a.toprow,children:["A total of ",null==v?void 0:v.totalCount," Token Contracts found"]}):Object(h.jsx)(h.Fragment,{}),Object(h.jsx)("div",{className:g.a.bg}),Object(h.jsx)("div",{children:Object(h.jsx)(o.a,{columns:j,dataSource:null==v?void 0:v.tokens,loading:!O,rowKey:function(){return u.a.generate()},pagination:{position:["topRight","bottomRight"],onChange:function(t,e){a((function(n){return Object(r.a)(Object(r.a)({},n),{page:t,count:e})}))},total:null==v?void 0:v.totalCount,current:n.page}})})]})]})}}}]);