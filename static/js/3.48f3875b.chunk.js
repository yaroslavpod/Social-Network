(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[3],{300:function(t,e,s){t.exports={status:"ProfileStatus_status__2Ry-O"}},301:function(t,e,s){t.exports={content:"Profile_content__3TWLB"}},302:function(t,e,s){t.exports={content:"ProfileInfo_content__3JbvX",fullName:"ProfileInfo_fullName__T9lgc",av_descr:"ProfileInfo_av_descr__36cG4"}},303:function(t,e,s){t.exports={posts:"Posts_posts__2ppDV",form:"Posts_form__2XJk-"}},304:function(t,e,s){t.exports={item:"Post_item__3hKEu"}},309:function(t,e,s){"use strict";s.r(e);var n=s(3),a=s(30),c=s(31),r=s(33),o=s(32),i=s(0),u=s(301),l=s.n(u),j=s(41),p=s(302),d=s.n(p),b=s.p+"static/media/profile_photo.d7120c35.png",f=s(127),O=s(300),h=s.n(O),m=s(1),x=function(t){var e=t.updateUserStatus,s=Object(j.a)(t,["updateUserStatus"]),n=Object(i.useState)(!1),a=Object(f.a)(n,2),c=a[0],r=a[1],o=Object(i.useState)(s.status),u=Object(f.a)(o,2),l=u[0],p=u[1];return Object(i.useEffect)((function(){l!==s.status&&p(s.status)}),[s.status]),Object(m.jsxs)("div",{className:h.a.status,children:[!c&&Object(m.jsx)("div",{children:Object(m.jsx)("span",{onClick:function(){r(!0)},children:s.status||"---"})}),c&&Object(m.jsx)("div",{children:Object(m.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},value:l,onBlur:function(){r(!1),e(l)},autoFocus:!0,onFocus:function(t){t.currentTarget.select()}})})]})},g=(i.Component,function(t){var e=t.profile,s=t.getUserStatus,a=t.updateUserStatus,c=t.status,r=Object(j.a)(t,["profile","getUserStatus","updateUserStatus","status"]);return Object(m.jsx)("div",{className:d.a.content,children:Object(m.jsxs)("div",{className:d.a.av_descr,children:[Object(m.jsx)("img",{src:e.photos.small?e.photos.small:b,alt:""}),Object(m.jsx)("div",{className:d.a.fullName,children:e.fullName}),Object(m.jsx)(x,Object(n.a)({status:c,updateUserStatus:a,getUserStatus:s,c:!0},r)),"avatar +descr"]})})}),v=s(95),_=s(42),P=s(303),S=s.n(P),N=s(304),U=s.n(N),k=function(t){return Object(m.jsxs)("div",{className:U.a.item,children:[Object(m.jsx)("img",{src:"https://w1.pngwing.com/pngs/793/504/png-transparent-avatar-icon-ninja-samurai-icon-design-red-smile-circle.png",alt:""}),t.message,Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{children:"Likes "}),t.likesCount]})]})},w=s(88),y=s(126),C=s(50),D=s(39),I=Object(C.a)(20),M=function(t){return Object(m.jsxs)("form",{className:S.a.form,onSubmit:t.handleSubmit,children:[Object(m.jsx)("div",{children:Object(m.jsx)(w.a,{validate:[C.b,I],cols:"30",rows:"5",component:D.b,name:"newPostMessage",placeholder:"Enter your post here"})}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})};M=Object(y.a)({form:"AddPostForm"})(M);var E=function(t){var e=Object(_.a)(t.postsData).map((function(t){return Object(m.jsx)(k,{id:t.id,message:t.message,likesCount:t.likesCount},t.id)}));return Object(i.useEffect)((function(){console.log("render")})),Object(m.jsxs)("div",{className:S.a.posts,children:[Object(m.jsx)("h3",{children:"My post"}),Object(m.jsx)(M,{onSubmit:function(e){t.addPost(e.newPostMessage)}}),Object(m.jsxs)("div",{children:["New Post",e]})]})},J=s(14),T=Object(J.b)((function(t){return{postsData:t.profilePage.postsData}}),{addPost:v.a})(E),A=s(26),F=function(t){return t.profile?Object(m.jsxs)("div",{className:l.a.content,children:[Object(m.jsx)(g,Object(n.a)({profile:t.profile},t)),Object(m.jsx)(T,{})]}):Object(m.jsx)(A.a,{})},z=s(9),B=s(94),L=s(10),X=function(t){Object(r.a)(s,t);var e=Object(o.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(c.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserID)||this.props.history.push("/login"),this.props.getProfile(t),this.props.getUserStatus(t)}},{key:"render",value:function(){return Object(m.jsx)(F,Object(n.a)({},this.props))}}]),s}(i.Component);e.default=Object(L.compose)(Object(J.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserID:t.authMenu.id,isAuth:t.authMenu.isAuth}}),{getProfile:v.c,getUserStatus:v.d,updateUserStatus:v.e}),z.g,B.a)(X)}}]);
//# sourceMappingURL=3.48f3875b.chunk.js.map