(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{50:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},51:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},52:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},53:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},54:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6",actions:"HighlightedQuote_actions__3W1GK"}},56:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),o=c(8),a=c(21),r=c(19),m=c(20),i=c(14),j=c(50),d=c.n(j),l=c(51),u=c.n(l),b=c(0),x=function(e){return Object(b.jsx)("li",{className:u.a.item,children:Object(b.jsx)("p",{children:e.text})})},O=c(52),h=c.n(O),f=function(e){return Object(b.jsx)("ul",{className:h.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(x,{text:e.text},e.id)}))})},p=c(53),_=c.n(p),N=function(e){var t=Object(n.useRef)(),c=Object(r.a)(m.a).sendRequest,s=e.onAddedComment;Object(n.useEffect)((function(){s()}),[s]);var o=function(n){n.preventDefault();var s=t.current.value;c({commentData:{text:s},quoteId:e.quoteId})};return Object(b.jsxs)("form",{className:_.a.form,onSubmit:o,children:[Object(b.jsxs)("div",{className:_.a.control,onSubmit:o,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:_.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},v=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],o=t[1],j=Object(s.j)(),l=Object(r.a)(m.c,!0),u=l.sendRequest,x=l.status,O=l.error,h=l.data,p=j.quoteId;Object(n.useEffect)((function(){u(p)}),[u,p]);var _=Object(n.useCallback)((function(){u(p)}),[u,p]),v=[];return"pending"===x&&(v=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(i.a,{})})),"error"===x&&(v=Object(b.jsx)("div",{className:"centered focused",children:Object(b.jsx)("p",{children:O})})),"completed"!==x||h&&0!==h.length||(v=Object(b.jsx)("div",{className:"centered focused",children:Object(b.jsx)("p",{children:"No comments available"})})),"completed"===x&&h.length>0&&(v=Object(b.jsx)(f,{comments:h})),Object(b.jsxs)("section",{className:d.a.comments,children:[!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(N,{quoteId:j.quoteId,onAddedComment:_}),v]})},g=c(54),q=c.n(g),C=function(e){return console.log("quote",e.quote),Object(b.jsx)(n.Fragment,{children:Object(b.jsxs)("figure",{className:q.a.quote,children:[Object(b.jsx)("p",{children:e.quote.text}),Object(b.jsx)("figcaption",{children:e.quote.author})]})})},w=c(22);t.default=function(){var e=Object(s.j)(),t=Object(s.k)(),c=Object(r.a)(m.e,!0),a=c.sendRequest,j=c.status,d=c.data,l=c.error,u=e.quoteId;return Object(n.useEffect)((function(){a(u)}),[a,u]),"pending"===j?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(i.a,{})}):"error"===j?Object(b.jsx)("p",{className:"centered focused",children:l}):"completed"!==j||d.text?Object(b.jsxs)(n.Fragment,{children:[Object(b.jsx)(C,{quote:d}),Object(b.jsx)(s.c,{path:"".concat(t.path),exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"".concat(t.url,"/comments"),children:"Load Comments"})})}),Object(b.jsx)(s.c,{path:"".concat(t.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)(w.a,{})}}}]);
//# sourceMappingURL=3.8ac20be3.chunk.js.map