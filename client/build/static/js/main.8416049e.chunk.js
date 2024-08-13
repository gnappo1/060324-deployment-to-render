/*! For license information please see main.8416049e.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{186:function(e,t,r){"use strict";r.r(t);var n=r(67),i=r(8),s=r(3),a=r(5),c=r(0),o=r(76),l=r(4),d=r.n(l),j=r(1);var b=function(e){let{currentUser:t,updateUser:r}=e;const[n,a]=Object(c.useState)(!1),l=Object(s.n)();return Object(j.jsxs)(h,{children:[Object(j.jsx)(u,{children:"Flatiron Theater Company"}),Object(j.jsx)(p,{children:n?Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:()=>a(!n),children:"x"}),Object(j.jsx)("li",{children:Object(j.jsx)(i.a,{to:"/",children:" Home"})}),t&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.a,{to:"/productions/new",children:"New Production"})}),Object(j.jsx)("button",{onClick:()=>{fetch("/api/v1/signout",{method:"DELETE"}).then((e=>{e.ok?(r(null),d.a.success("See you soon!"),l("/")):e.json().then((e=>d.a.error(e.error)))}))},children:"Logout"})]}),!t&&Object(j.jsx)("li",{children:Object(j.jsx)(i.a,{to:"/registration",children:" Registration"})})]}):Object(j.jsx)("div",{onClick:()=>a(!n),children:Object(j.jsx)(o.a,{size:30})})})]})};const u=a.b.h1`
font-family: 'Splash', cursive;
`,h=a.b.div`
  display: flex;
  justify-content:space-between;
  
`,p=a.b.div`
  display: flex;
  align-items: center;
  a{
    text-decoration: none;
    color:white;
    font-family:Arial;
  }
  a:hover{
    color:pink
  }
  ul{
    list-style:none;
  }
  
`;r(87);var m=function(){const[e,t]=Object(c.useState)([]),[r,n]=Object(c.useState)(null),[i,a]=Object(c.useState)(!1),o=Object(s.n)();Object(c.useEffect)((()=>{fetch("/api/v1/productions").then((e=>{e.ok?e.json().then(t):e.json().then((e=>d.a.error(e.error)))})).catch((e=>d.a.error(e.message)))}),[]),Object(c.useEffect)((()=>{fetch("/api/v1/me").then((e=>{e.ok?e.json().then(n):e.json().then((e=>d.a.error(e.error)))})).catch((e=>d.a.error(e.message)))}),[]);const u=e=>{a(e),o(`/productions/${e.id}/edit`)},h=e=>n(e);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{}),Object(j.jsx)(b,{handleEdit:u,currentUser:r,updateUser:h}),Object(j.jsx)(l.Toaster,{}),Object(j.jsx)(s.a,{context:{currentUser:r,updateUser:h,addProduction:e=>t((t=>[...t,e])),updateProduction:e=>t((t=>t.map((t=>t.id===e.id?e:t)))),deleteProduction:e=>t((t=>t.filter((t=>t.id!==e.id)))),productions:e,production_edit:i,handleEdit:u}})]})};const x=a.a`
    body{
      background-color: black; 
      color:white;
    }
    `;var g=function(e){let{production:t}=e;const{title:r,budget:n,genre:s,image:a,id:c}=t;return Object(j.jsx)(O,{id:c,children:Object(j.jsxs)(i.a,{to:`/productions/${c}`,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:r}),Object(j.jsx)("p",{children:s}),Object(j.jsxs)("p",{children:["$ ",n]})]}),Object(j.jsx)("img",{src:a,alt:r})]})})};const O=a.b.li`
    display:flex;
    flex-direction:row;
    justify-content:start;
    font-family:Arial, sans-serif;
    margin:5px;
    &:hover {
      transform: scale(1.15);
      transform-origin: top left;
    }
    a{
      text-decoration:none;
      color:white;
    }
    img{
      width: 180px;
      margin-left:50%;
      mask-image: linear-gradient(to left, rgba(0, 0, 0, .9) 80%, transparent 100%);
    }
    position:relative;
    div{
     position:absolute;
    }
  `;var f=function(){const{productions:e}=Object(s.p)();return Object(j.jsxs)("div",{children:[Object(j.jsxs)(v,{children:[Object(j.jsx)("span",{children:"F"}),"latIron Theater ",Object(j.jsx)("span",{children:"C"}),"ompany"]}),Object(j.jsx)(y,{children:e&&e.map((e=>Object(j.jsx)(g,{production:e},e.id)))})]})};const v=a.b.h1`
    text-transform: uppercase;
    font-family:Arial, sans-serif;
    width:70px;
    font-size: 70px;
    line-height: .8;
   
    transform: scale(.7, 1.4);
    
    span{
        color:#42ddf5;
    }
`,y=a.b.ul`
    display:flex;
    flex-direction:column;

`;var w=function(e){let{productions:t}=e;return Object(j.jsxs)("div",{children:[Object(j.jsx)(C,{}),Object(j.jsx)(f,{productions:t})]})};const C=a.b.img.attrs((()=>({src:"https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"})))`
    position: absolute;
    z-index:-1;
  `;var S=()=>{const e=Object(s.s)();return Object(j.jsx)("div",{children:e.error.message})},k=r(7),q=r(17);let E=Object(k.b)({title:Object(k.c)("title must be of type string").required("title is required").min(1,"titles must contain at least one character"),genre:Object(k.c)("genre must be of type string").required("genre is required").oneOf(["Drama","Musical","Opera"],"Genre must be one of Musical, Opera or Drama"),budget:Object(k.a)("budget must be of type number").positive("budget must be positive").max(1e6,"budget can be 1000000 at max").required("budget must be present"),image:Object(k.c)().test("is-url","image must be in the format jpg, jpeg, or png and start with http or https",(e=>/^https?:\/\/.*\.(?:png|jpeg|jpg)$/g.test(e))),director:Object(k.c)("director must be of type string").required("director is required").min(1,"director must contain at least one character"),description:Object(k.c)("description must be of type string").required("description is required").min(10,"description has to be at least 10 characters")});const A={title:"",genre:"",budget:"",image:"",director:"",description:""};var N=function(){const{addProduction:e}=Object(s.p)(),t=Object(s.n)();return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(q.a,{initialValues:A,validationSchema:E,onSubmit:r=>{fetch("/api/v1/productions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then((r=>{r.ok?r.json().then((r=>{e(r),t(`/productions/${r.id}`)})):r.json().then((e=>d.a.error(e.error)))})).catch((e=>d.a.error(e.message)))},children:e=>{let{values:t,errors:r,touched:n,isSubmitting:i,handleBlur:s,handleChange:a,handleSubmit:c}=e;return Object(j.jsxs)(B,{onSubmit:c,children:[Object(j.jsx)("label",{children:"Title "}),Object(j.jsx)("input",{type:"text",name:"title",onChange:a,onBlur:s,value:t.title}),r.title&&n.title&&Object(j.jsx)("p",{className:"error-message show",children:r.title}),Object(j.jsx)("label",{children:" Genre"}),Object(j.jsx)("input",{type:"text",name:"genre",onChange:a,onBlur:s,value:t.genre}),r.genre&&n.genre&&Object(j.jsx)("p",{className:"error-message show",children:r.genre}),Object(j.jsx)("label",{children:"Budget"}),Object(j.jsx)("input",{type:"number",name:"budget",onChange:a,onBlur:s,value:t.budget}),r.budget&&n.budget&&Object(j.jsx)("p",{className:"error-message show",children:r.budget}),Object(j.jsx)("label",{children:"Image"}),Object(j.jsx)("input",{type:"text",name:"image",onChange:a,onBlur:s,value:t.image}),r.image&&n.image&&Object(j.jsx)("p",{className:"error-message show",children:r.image}),Object(j.jsx)("label",{children:"Director"}),Object(j.jsx)("input",{type:"text",name:"director",onChange:a,onBlur:s,value:t.director}),r.director&&n.director&&Object(j.jsx)("p",{className:"error-message show",children:r.director}),Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("textarea",{type:"text",rows:"4",cols:"50",name:"description",onChange:a,onBlur:s,value:t.description}),r.description&&n.description&&Object(j.jsx)("p",{className:"error-message show",children:r.description}),Object(j.jsx)("input",{type:"submit",disabled:i})]})}})})};const B=a.b.form`
    display:flex;
    flex-direction:column;
    width: 400px;
    margin:auto;
    font-family:Arial;
    font-size:30px;
    input[type=submit]{
      background-color:#42ddf5;
      color: white;
      height:40px;
      font-family:Arial;
      font-size:30px;
      margin-top:10px;
      margin-bottom:10px;
    }
  `;var _=function(){const[e,t]=Object(c.useState)(null),[r,n]=Object(c.useState)(null),{handleEdit:i,deleteProduction:a,currentUser:o}=Object(s.p)(),{projectId:l}=Object(s.q)(),b=Object(s.n)();if(Object(c.useEffect)((()=>{fetch(`/api/v1/productions/${l}`).then((e=>{e.ok?e.json().then(t):e.json().then((e=>d.a.error(e.error)))})).catch((e=>d.a.error(e.message)))}),[l]),r)return Object(j.jsx)("h2",{children:r});if(!e)return Object(j.jsx)("h2",{children:"Loading..."});const{id:u,title:h,genre:p,image:m,description:x,crew_members:g}=e;return Object(j.jsxs)(P,{id:u,children:[Object(j.jsx)("h1",{children:h}),Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Genre:"}),Object(j.jsx)("p",{children:p}),Object(j.jsx)("h3",{children:"Description:"}),Object(j.jsx)("p",{children:x}),Object(j.jsx)("h2",{children:"Cast Members"}),Object(j.jsx)("ul",{children:g.map((e=>Object(j.jsx)("li",{children:`${e.role} : ${e.name}`},e.id)))})]}),Object(j.jsx)("img",{src:m,alt:h})]}),o&&o.id===e.user_id&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("button",{onClick:()=>i(e),children:"Edit Production"}),Object(j.jsx)("button",{onClick:()=>{fetch(`/api/v1/productions/${l}`,{method:"DELETE"}).then((t=>{204===t.status?(a(e),b("/")):t.json().then((e=>d.a.error(e.error)))})).catch((e=>d.a.error(e.message)))},children:"Delete Production"})]})]})};const P=a.b.li`
    display:flex;
    flex-direction:column;
    justify-content:start;
    font-family:Arial, sans-serif;
    margin:5px;
    h1{
      font-size:60px;
      border-bottom:solid;
      border-color:#42ddf5;
    }
    .wrapper{
      display:flex;
      div{
        margin:10px;
      }
    }
    img{
      width: 300px;
    }
    button{
      background-color:#42ddf5;
      color: white;
      height:40px;
      font-family:Arial;
      font-size:30px;
      margin-top:10px;
    }
  `;var D=function(){const e=Object(s.n)(),{updateProduction:t,production_edit:r,currentUser:n}=Object(s.p)(),i=k.b().shape({title:k.c().required("Must enter a title"),budget:k.a().positive()});Object(c.useEffect)((()=>{n?n.id!==r.user_id&&(d.a.error("You're not the owner of this production: Access Denied"),e("/")):(d.a.error("You don't have permissions to see this form: Please log in"),e("/"))}),[n,e,r.user_id]);const a=Object(q.b)({initialValues:{title:r.title,genre:r.genre,budget:r.budget,image:r.image,director:r.director,description:r.description},validationSchema:i,onSubmit:e=>{}});return Object(j.jsxs)("div",{className:"App",children:[a.errors&&Object.values(a.errors).map((e=>Object(j.jsx)("h2",{children:e}))),Object(j.jsxs)(U,{onSubmit:a.handleSubmit,children:[Object(j.jsx)("label",{children:"Title "}),Object(j.jsx)("input",{type:"text",name:"title",value:a.values.title,onChange:a.handleChange}),Object(j.jsx)("label",{children:" Genre"}),Object(j.jsx)("input",{type:"text",name:"genre",value:a.values.genre,onChange:a.handleChange}),Object(j.jsx)("label",{children:"Budget"}),Object(j.jsx)("input",{type:"number",name:"budget",value:a.values.budget,onChange:a.handleChange}),Object(j.jsx)("label",{children:"Image"}),Object(j.jsx)("input",{type:"text",name:"image",value:a.values.image,onChange:a.handleChange}),Object(j.jsx)("label",{children:"Director"}),Object(j.jsx)("input",{type:"text",name:"director",value:a.values.director,onChange:a.handleChange}),Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("textarea",{type:"text",rows:"4",cols:"50",name:"description",value:a.values.description,onChange:a.handleChange}),Object(j.jsx)("input",{type:"submit"})]})]})};const U=a.b.form`
    display:flex;
    flex-direction:column;
    width: 400px;
    margin:auto;
    font-family:Arial;
    font-size:30px;
    input[type=submit]{
      background-color:#42ddf5;
      color: white;
      height:40px;
      font-family:Arial;
      font-size:30px;
      margin-top:10px;
      margin-bottom:10px;
    }
  `,z=Object(k.b)({username:Object(k.c)("username has to be a string").max(25,"username must be 25 characters max").required("username is required"),email:Object(k.c)("email has to be a string").email("email must be valid").max(80,"email must be 80 characters max").required("email is required"),password_hash:Object(k.c)("password has to be a string").min(8,"password has to be at least 8 characters long").max(25,"password must be 25 characters long max").required("password is required")}),T=Object(k.b)({email:Object(k.c)("email has to be a string").email("email must be valid").max(80,"email must be 80 characters max").required("email is required"),password_hash:Object(k.c)("password has to be a string").min(8,"password has to be at least 8 characters long").max(25,"password must be 25 characters long max").required("password is required")}),F={username:"",email:"",password_hash:""};var $=()=>{const[e,t]=Object(c.useState)(!0),{updateUser:r,currentUser:n}=Object(s.p)(),i=Object(s.n)();return Object(c.useEffect)((()=>{n&&i("/")}),[n,i]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Please Log in or Sign Up"}),Object(j.jsx)("h3",{children:e?"Not a Member?":"Already a member?"}),Object(j.jsx)("button",{onClick:()=>t((e=>!e)),children:e?"Register Now!":"Login!"}),Object(j.jsx)(q.a,{validationSchema:e?T:z,initialValues:F,onSubmit:t=>{fetch(e?"/api/v1/signin":"/api/v1/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>{e.ok?e.json().then((e=>{r(e),i("/")})):e.json().then((e=>d.a.error(e.error)))})).catch((e=>d.a.error(e.message)))},children:t=>{let{values:r,errors:n,touched:i,isSubmitting:s,handleChange:a,handleSubmit:c,handleBlur:o}=t;return Object(j.jsxs)(M,{onSubmit:c,children:[!e&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("label",{htmlFor:"username",children:"Username"}),Object(j.jsx)("input",{type:"text",name:"username",onChange:a,onBlur:o,value:r.username}),n.username&&i.username&&Object(j.jsx)("p",{className:"error-message show",children:n.username})]}),Object(j.jsx)("label",{htmlFor:"email",children:"Email"}),Object(j.jsx)("input",{type:"email",name:"email",onChange:a,onBlur:o,value:r.email}),n.email&&i.email&&Object(j.jsx)("p",{className:"error-message show",children:n.email}),Object(j.jsx)("label",{htmlFor:"password_hash",children:"Password"}),Object(j.jsx)("input",{type:"password",name:"password_hash",onChange:a,onBlur:o,value:r.password_hash}),n.password_hash&&i.password_hash&&Object(j.jsx)("p",{className:"error-message show",children:n.password_hash}),Object(j.jsx)("input",{type:"submit",value:e?"Login!":"Create Account!",disabled:s})]})}})]})};const M=a.b.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: auto;
  font-family: Arial;
  font-size: 30px;
  input[type="submit"] {
    background-color: #42ddf5;
    color: white;
    height: 40px;
    font-family: Arial;
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`,I=Object(i.c)([{path:"/",element:Object(j.jsx)(m,{}),errorElement:Object(j.jsx)(S,{}),children:[{index:!0,element:Object(j.jsx)(w,{})},{path:"registration",element:Object(j.jsx)($,{})},{path:"productions/new",element:Object(j.jsx)(N,{})},{path:"productions/:projectId/edit",element:Object(j.jsx)(D,{})},{path:"/productions/:projectId",element:Object(j.jsx)(_,{})}]}]),L=document.getElementById("root"),G=Object(n.createRoot)(L);console.log("\ud83d\ude80 ~ router:",I),G.render(Object(j.jsx)(i.b,{router:I}))},87:function(e,t,r){}},[[186,1,2]]]);
//# sourceMappingURL=main.8416049e.chunk.js.map