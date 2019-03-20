webpackJsonp([1],{"7zck":function(t,e){},FsWx:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("/5sW"),i={data:function(){return{sideNav:!1}},name:"App",computed:{menuFunctions:function(){var t=[{icon:"insert_comment",content:"Blogs",link:"/blogs"},{icon:"face",content:"Sign Up",link:"/signup"},{icon:"lock_open",content:"Log In",link:"/login"}];return this.userAuthenticated&&(t=[{icon:"insert_comment",content:"Blogs",link:"/blogs"},{icon:"clear_all",content:"Create Blog",link:"/blog/new"},{icon:"account_circle",content:"User",link:"/profile"}]),t},userAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user}},methods:{onSignOut:function(){this.$store.dispatch("signOut"),this.$router.push("/")}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:t.toggleDarkTheme}},[a("h1"),t._v(" "),a("v-navigation-drawer",{attrs:{temporary:"",fixed:"","mobile-break-point":"",role:"menu","aria-label":"menu","aria-orientation":"vertical","aria-hidden":"true",tabindex:"-1"},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[a("v-list",{attrs:{dense:""}},[t._l(t.menuFunctions,function(e){return a("v-list-tile",{key:e.content,attrs:{to:e.link,"aria-haspopup":"true","aria-expanded":"false",role:"menuitem",tabindex:"-1"},on:{click:function(t){}}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),a("v-list-tile-content",[t._v(t._s(e.content))])],1)}),t._v(" "),t.userAuthenticated?a("v-list-tile",{attrs:{"aria-hidden":"true",role:"menuitem"},on:{click:t.onSignOut}},[a("v-list-tile-action",[a("v-icon",[t._v("exit_to_app")])],1),t._v(" "),a("v-list-tile-content",[t._v("Log Out")])],1):t._e(),t._v(" "),a("v-spacer"),t._v(" "),a("v-switch",{attrs:{tabindex:"-1",dense:"",label:"Dark Theme"},model:{value:t.toggleDarkTheme,callback:function(e){t.toggleDarkTheme=e},expression:"toggleDarkTheme"}})],2)],1),t._v(" "),a("v-toolbar",{staticClass:"toolbarColor",attrs:{role:"menu","aria-orientation":"horizontal"}},[a("v-toolbar-title",[a("router-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/",tag:"span","aria-label":"Welcome to the blog app. Press tab to navigate through the menu"}},[t._v("Accessibility")])],1),t._v(" "),a("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",attrs:{"aria-hidden":"false"},on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuFunctions,function(e){return a("v-btn",{key:e.content,attrs:{role:"menuitem",flat:"",to:e.link}},[a("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.content)+"\n      ")],1)}),t._v(" "),t.userAuthenticated?a("v-btn",{attrs:{flat:"",role:"menuitem","aria-label":"Log Out"},on:{click:t.onSignOut}},[a("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v("\n        Log Out\n      ")],1):t._e()],2)],1),t._v(" "),a("main",[a("router-view")],1)],1)},staticRenderFns:[]},o=a("VU/8")(i,s,!1,null,null,null).exports,n=a("/ocq"),l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-tabs",{attrs:{dark:"",color:"secondary","show-arrows":"",role:"menu",centered:""}},[a("v-tabs-slider",{attrs:{color:"toolbarColor"}}),t._v(" "),a("v-tab",{attrs:{ripple:"",tabindex:"0","aria-label":"The carousel",role:"menuitem"}},[t._v("\n      Carousel\n    ")]),t._v(" "),a("v-tab",{attrs:{ripple:"",tabindex:"0","aria-label":"The combo-box",role:"menuitem"}},[t._v("\n      Combobox\n    ")]),t._v(" "),a("v-tab",{attrs:{ripple:"",tabindex:"0","aria-label":"The hover-component",role:"menuitem"}},[t._v("\n      Hover\n    ")]),t._v(" "),a("v-tab-item",[t.loading?t._e():a("v-layout",{staticClass:"mt-1",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-carousel",{staticStyle:{cursor:"pointer"},attrs:{tabindex:"0","aria-atomic":"true","hide-delimiters":"","hide-controls":""}},t._l(t.blogs,function(e){return a("v-carousel-item",{key:e.id,attrs:{src:e.imageURL,alt:e.imageDescription},on:{click:function(a){t.onLoadBlog(e.id)}}},[a("div",{staticClass:"title"},[t._v("\n                "+t._s(e.title)+"\n              ")]),t._v(" "),a("div",{staticClass:"intro"},[t._v("\n                "+t._s(e.intro)+"\n              ")])])}))],1)],1)],1),t._v(" "),a("v-tab-item",[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-combobox",{attrs:{autofocus:"",role:"combobox","aria-autocomplete":"list","aria-label":"Select one of the items by using the arrow keys and pressing enter afterwards",items:t.items,label:"Select a favorite activity or create a new one"},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1)],1)],1)],1),t._v(" "),a("v-tab-item",[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-hover",{attrs:{"close-delay":"1000"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return a("v-card",{staticClass:"mx-auto",attrs:{color:"grey lighten-4","max-width":"600"}},[a("v-img",{attrs:{"aria-describedby":"imgDescription",tabindex:"0","aspect-ratio":2,"aria-haspopup":"true","aria-live":"polite",src:"https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/09/29/104740719-GettyImages-855370048-elon-musk.530x298.jpg?v=1544455606"}},[a("h2",{staticClass:"hidden",attrs:{id:"imgDescription"}},[t._v("\n                    A hover-component is shown. A picture of the futurist Elon Mask is visualized within the\n                    tooltip-component. On hover, one of his famous quotes is revealed: I could either\n                    watch it happen or be a part of it. Tab to read more!")]),t._v(" "),a("v-expand-transition",[r?a("div",{staticClass:"wrap xs12 sm10 md8 offset-sm1 offset-md2 transition-fast-in-fast-out secondary darken-2 v-card--reveal display-1 white--text",staticStyle:{height:"100%",width:"100%"},attrs:{"aria-atomic":"true","aria-expanded":"true","aria-label":"You just hovered over the component"}},[t._v('\n                      "I could either watch it happen or be a part of it." '),a("br"),a("br"),t._v(" -Elon Musk\n                    ")]):t._e()])],1),t._v(" "),a("v-card-text",{staticClass:"pt-4",staticStyle:{position:"relative"}},[a("h3",{staticClass:"font-weight-light black--text  mb-2",attrs:{tabindex:"0"}},[t._v("Tesla Taken in Space!")]),t._v(" "),a("h2",{staticClass:"display-0 font-weight-light secondary--text mb-2",attrs:{tabindex:"0"}},[t._v("Elon Musk, the CEO of\n                    Tesla and SpaceX, and his team made this historical moment happen.")]),t._v(" "),a("h3",{staticClass:"font-weight-light  mb-0",attrs:{tabindex:"0"}},[t._v("\n                    The 2008-model Roadster was previously used by Musk for commuting to work, and is the first\n                    production car in space.")]),t._v(" "),a("v-btn",{staticClass:"white--text",attrs:{to:"blogs/-LTNL_uPHWxpF2LAJqqS",absolute:"",color:"secondary",fab:"",large:"",right:"",top:"","aria-label":"Read full blog"}},[a("v-icon",[t._v("notes")])],1)],1)],1)}}])})],1)],1)],1)],1)],1),t._v(" "),a("v-layout",{attrs:{xs10:"","offset-xs1":""}},[a("v-flex",{staticClass:"text-xs-center text-xs-center",attrs:{xs12:"",sm6:""}},[a("v-btn",{staticClass:"secondary",attrs:{large:"",to:"/blogs","aria-label":"View all blogs"}},[t._v(" View Blogs\n      ")])],1),t._v(" "),a("v-flex",{staticClass:"text-xs-center text-sm-center",attrs:{xs12:"",sm6:""}},[a("v-btn",{staticClass:"secondary",attrs:{large:"",to:"/blog/new","aria-label":"Create a new blog"}},[t._v("Create Blog\n      ")])],1)],1),t._v(" "),a("v-layout",[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?a("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"secondary","aria-label":"Loading blogs. Please wait.","aria-live":"assertive","aria-atomic":"true",onfocus:""}}):t._e()],1)],1),t._v(" "),a("v-layout",{staticClass:"mt-4",attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[a("p",[t._v("The blogs")])])],1)],1)},staticRenderFns:[]};var d=a("VU/8")({name:"Index",data:function(){return{select:"Programming",items:["Programming","Design","Vue","Vuetify"]}},computed:{blogs:function(){return this.$store.getters.featuredBlogs},loading:function(){return this.$store.getters.loading}},methods:{onLoadBlog:function(t){this.$router.push("/blogs/"+t)}}},l,!1,function(t){a("FsWx")},"data-v-1ea6b810",null).exports,c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h3",{staticClass:"hidden",attrs:{"aria-label":"Overview of the published blogs:"}}),t._v(" "),a("v-layout",[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?a("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"secondary","aria-label":"Loading blogs. Please wait.","aria-live":"assertive","aria-atomic":"true",onfocus:""}}):t._e()],1)],1),t._v(" "),t._l(t.blogs,function(e){return a("v-layout",{key:e.id,staticClass:"mb-3",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm10:"",md8:"","offset-sm1":"","offset-md2":""}},[a("v-card",{staticClass:"info"},[a("v-container",{staticClass:"blogOverview",attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs5:"",sm4:"",md3:""}},[a("v-responsive",[a("v-img",{attrs:{tabindex:"0",src:e.imageURL,height:"130px",alt:e.imageDescription}})],1)],1),t._v(" "),a("v-flex",{attrs:{xs7:"",sm8:"",md9:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"hidden",attrs:{id:"titleOfBlog","aria-label":"Blog's title:"}}),t._v(" "),a("h2",{staticClass:"white--text mb-0",attrs:{tabindex:"0","aria-describedby":"titleOfBlog"}},[t._v(t._s(e.title)+" ")]),t._v(" "),a("h3",{staticClass:"hidden",attrs:{id:"introOfBlog","aria-label":"Blog's introduction:"}}),t._v(" "),a("h4",{attrs:{tabindex:"0","aria-describedby":"introOfBlog"}},[t._v(t._s(e.intro))]),t._v(" "),a("h3",{staticClass:"hidden",attrs:{id:"dateBlogPublished","aria-label":"Date published"}}),t._v(" "),a("div",{attrs:{tabindex:"0","aria-describedby":"dateBlogPublished"}},[t._v(t._s(t._f("date")(e.date)))])])])],1)],1),t._v(" "),a("v-layout",[a("v-spacer"),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{flat:"",to:"/blogs/"+e.id,"aria-label":"Visit to read full blog!"}},[a("v-icon",[t._v("arrow_forward")]),t._v("\n                Read More\n              ")],1),t._v(" "),a("v-btn",{attrs:{flat:"","aria-label":"Share blog with friends!"}},[a("v-icon",[t._v("arrow_forward")]),t._v("\n                Share Blog\n              ")],1)],1)],1)],1)],1)],1)],1)})],2)},staticRenderFns:[]};var u=a("VU/8")({data:function(){return{page:1}},name:"BlogOverview",computed:{blogs:function(){return this.$store.getters.loadedBlogs},loading:function(){return this.$store.getters.loading}}},c,!1,function(t){a("youH")},"data-v-07251822",null).exports,v={name:"BlogViewBlog",props:["id"],computed:{blog:function(){return this.$store.getters.loadedBlog(this.id)},userAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},userPublisher:function(){return!!this.userAuthenticated&&this.$store.getters.user.id===this.blog.userId},loading:function(){return this.$store.getters.loading}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("h3",{staticClass:"hidden",attrs:{"aria-label":"Currently viewing the blog:",role:"heading"}}),t._v(" "),t.loading?a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[a("v-progress-circular",{attrs:{size:70,width:7,indeterminate:"",color:"secondary"}})],1)],1):a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("h3",{staticClass:"hidden",attrs:{id:"blogTitle","aria-label":"Blog's title:"}}),t._v(" "),a("h2",{staticClass:"secondary--text",attrs:{tabindex:"0","aria-describedby":"blogTitle"}},[t._v("\n            "+t._s(t.blog.title))]),t._v(" "),a("v-spacer"),t._v(" "),a("h5",{staticClass:"dateColor--text pt-2",attrs:{tabindex:"0"}},[t._v(" date published: "+t._s(t._f("date")(t.blog.date))+". ")])],1),t._v(" "),a("v-responsive",[a("v-img",{attrs:{tabindex:"0",src:t.blog.imageURL,alt:t.blog.imageDescription,height:"280px"}})],1),t._v(" "),a("v-card-text",{staticClass:"primary--text"},[a("h3",{staticClass:"hidden",attrs:{id:"blogIntro","aria-label":"Blog's introduction:"}}),t._v(" "),a("div",{attrs:{tabindex:"0","aria-describedby":"blogIntro"}},[t._v(" "+t._s(t.blog.intro))])]),t._v(" "),a("v-card-text",[a("h3",{staticClass:"hidden",attrs:{"aria-label":"The blog:"}}),t._v(" "),a("div",{attrs:{tabindex:"0","aria-describedby":"blogEnd"}},[t._v(" "+t._s(t.blog.content))]),t._v(" "),a("h3",{staticClass:"hidden",attrs:{id:"blogEnd","aria-label":"This is the end of this blog."}})]),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),t.userPublisher?[a("app-edit-blog-dialog",{attrs:{blog:t.blog}})]:t._e(),t._v(" "),a("v-btn",{attrs:{flat:"",to:"/blogs",type:"submit","aria-label":"Go back to all blogs"}},[t._v("\n            Back\n          ")])],2)],1)],1)],1)],1)},staticRenderFns:[]};var g=a("VU/8")(v,m,!1,function(t){a("Y49G")},"data-v-7edfef51",null).exports,f={name:"blogCreate",data:function(){return{title:"",content:"",intro:"",imageURL:"",imageDescription:"",id:"",date:new Date,textfieldRules:[function(t){return!!t||"Please fill out this field"}]}},computed:{formCompleted:function(){return""!==this.title&&""!==this.content&&""!==this.intro&&""!==this.imageURL}},methods:{submitCreatedBlog:function(){if(this.formCompleted){var t={title:this.title,content:this.content,intro:this.intro,imageURL:this.imageURL,imageDescription:this.imageDescription,id:this.id,date:new Date};this.$store.dispatch("createBlog",t),this.$router.push("/blogs")}}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("h2",{staticClass:"secondary--text",attrs:{"aria-label":"Fill in all the fields to publish your new blog"}},[t._v("Create a Blog")])])],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submitCreatedBlog(e)}}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"mt-2",attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-text-field",{attrs:{name:"title",id:"title",counter:"50",autofocus:"",required:"",rules:t.textfieldRules,label:"Blog title",hint:"Please enter the title of your blog","aria-label":"The Title text field is automatically selected. Enter the title of your blog.","aria-required":"true"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"mt-3",attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-textarea",{attrs:{name:"content",id:"content",height:"250",box:"",required:"",rules:t.textfieldRules,label:"Main blog content",hint:"Begin writing your blog","aria-label":"Start composing your blog","aria-multiline":"true","aria-required":"true"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"mt-1",attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-textarea",{attrs:{name:"intro",id:"intro",height:"150",box:"",counter:"100",required:"",rules:t.textfieldRules,label:"Blog intro",hint:"Write an introduction for your blog","aria-label":"Write the introduction for your blog","aria-multiline":"true","aria-required":"true"},model:{value:t.intro,callback:function(e){t.intro=e},expression:"intro"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"mt-1",attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-text-field",{attrs:{name:"imageURL",id:"imgURL",hint:"Copy an img-URL from the internet and paste it here",required:"",rules:t.textfieldRules,label:"Paste the IMG-URL","aria-label":"Enter the URL of your image here.","aria-required":"true"},model:{value:t.imageURL,callback:function(e){t.imageURL=e},expression:"imageURL"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"mt-1",attrs:{xs12:"",sm6:"","offset-sm3":"","aria-label":"This is a preview of the image"}},[a("img",{attrs:{src:t.imageURL,height:"180"}})])],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"mt-1",attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-text-field",{attrs:{name:"imageDescription",id:"imageDescription",required:"",rules:t.textfieldRules,label:"Image description",hint:"Please describe the picture for the visually impaired","aria-label":"Provide a description for the image. This entry will be announced by screen readers afterward. When done, press tab to publish blog.","aria-required":"true"},model:{value:t.imageDescription,callback:function(e){t.imageDescription=e},expression:"imageDescription"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-btn",{staticClass:"secondary",attrs:{disabled:!t.formCompleted,type:"submit","aria-label":"Save changes and publish your blog. You will be redirected to your new blog afterward."}},[t._v("\n              Publish\n            ")])],1)],1)],1)])],1)],1)},staticRenderFns:[]};var b=a("VU/8")(f,h,!1,function(t){a("Xznj")},"data-v-1faafd20",null).exports,p={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var x=a("VU/8")({name:"UserProfile"},p,!1,function(t){a("xIzd")},"data-v-68983ccc",null).exports,_={name:"UserSignUp",data:function(){return{email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],password:"",passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=6||"Password must be at least 6 characters"}],confirmPassword:"",checkbox:!1}},computed:{comparePasswords:function(){return this.password===this.confirmPassword||"Your passwords does not match"},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},methods:{signedUp:function(){this.$store.dispatch("signUpUser",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[t.error?a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",[a("h2",{staticClass:"secondary--text",attrs:{"aria-label":"Please sign-up.",role:"heading"}},[t._v(" Sign Up ")])])],1)],1),t._v(" "),a("v-container",[a("form",{on:{submit:function(e){return e.preventDefault(),t.signedUp(e)}}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"email",label:"Your e-mail",id:"email",type:"email",rules:t.emailRules,autofocus:"",required:"",hint:"Enter your email","aria-required":"true","aria-label":"The email text field is automatically selected. Enter your email address"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"password",label:"Your Password",id:"password",type:"password",rules:t.passwordRules,required:"",hint:"Password must be at least 6 characters","aria-required":"true","aria-label":"Enter your password. Password must be at least 6 characters"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",rules:[t.comparePasswords],hint:"Confirm password","aria-required":"true","aria-label":"Confirm your password."},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),a("v-checkbox",{attrs:{role:"checkbox","aria-checked":"false",rules:[function(t){return!!t||"You must agree with the terms and conditions in order to continue."}],label:"I agree to the Terms and Conditions","aria-label":"You must agree with the terms and conditions in order to continue. Press space to agree.",required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{staticClass:"secondary",attrs:{type:"submit",disabled:t.loading,loading:t.loading,"aria-pressed":"false","aria-label":"Sign up. You will be automatically logged in into your account."}},[t._v("\n                    Sign Up\n                    "),a("span",{staticClass:"custom-loader",attrs:{slot:"leader"},slot:"leader"},[a("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]};var y=a("VU/8")(_,w,!1,function(t){a("iz15")},"data-v-100486a3",null).exports,C={name:"UserLogIn",data:function(){return{email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],password:"",passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=6||"Password must be at least 6 characters"}]}},computed:{user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},loading:function(){return this.$store.getters.loading}},methods:{loggedIn:function(){this.$store.dispatch("logInUser",{email:this.email,password:this.password})},onDismissed:function(){this.$store.dispatch("clearError")}},watch:{user:function(t){null!==t&&void 0!==t&&this.$router.push("/")}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[t.error?a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("app-alert",{attrs:{text:t.error.message},on:{dismissed:t.onDismissed}})],1)],1):t._e(),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-card-text",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",[a("h2",{staticClass:"secondary--text",attrs:{"aria-label":"Please log-in.",role:"heading"}},[t._v(" Log In ")])])],1)],1),t._v(" "),a("v-container",[a("form",{on:{submit:function(e){return e.preventDefault(),t.loggedIn(e)}}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"email",label:"Your e-mail",id:"email",type:"email",rules:t.emailRules,autofocus:"",required:"",hint:"Please enter your email","aria-label":"The email text field is automatically selected. Enter your email-address","aria-required":"true"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{name:"password",label:"Your Password",id:"password",type:"password",rules:t.passwordRules,required:"",hint:"Password must be at least 6 characters","aria-required":"true","aria-label":"Enter your password. Password must be at least 6 characters"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-btn",{staticClass:"secondary",attrs:{type:"submit",disabled:t.loading,loading:t.loading,"aria-label":"Log in. You will be redirected to the home page."}},[t._v("\n                    Log In\n                    "),a("span",{staticClass:"custom-loader",attrs:{slot:"leader"},slot:"leader"},[a("v-icon",{attrs:{light:""}},[t._v("cached")])],1)])],1)],1)],1)])],1)],1)],1)],1)],1)},staticRenderFns:[]};var B=a("VU/8")(C,k,!1,function(t){a("UZSd")},"data-v-8380de66",null).exports,U=a("NYxO"),L=a("Dd8w"),R=a.n(L),D=a("kxiW"),E={state:{loadedBlogs:[{id:"blog001",date:new Date,title:"Winter is Coming",intro:"Cold times are coming. Prepare yourself for the coldest winter",content:"This is the whole text",imageURL:"https://cdn-images-1.medium.com/max/2000/1*JdxXGixaRXNZT3kaQnKsEg.jpeg",imageDescription:"describing the image for visual impaired people"},{id:"blog002",date:"2018-12-7",title:"NewYork on a Rainy Day",intro:"It was a rainy day today in NYC. I could feel the big rain-drops on my hair",content:"This is the whole text",imageURL:"https://i.pinimg.com/originals/5d/65/84/5d65844ebb27abac13d0bc06097b4474.jpg",imageDescription:"Describing the image for visual imapaired people"}]},mutations:{setLoadedBlogs:function(t,e){t.loadedBlogs=e},createBlog:function(t,e){t.loadedBlogs.push(e)},updateBlog:function(t,e){var a=t.loadedBlogs.find(function(t){return t.id===e.id});e.title&&(a.title=e.title),e.content&&(a.content=e.content),e.intro&&(a.intro=e.intro)}},actions:{loadBlogs:function(t){var e=t.commit;e("setLoading",!0),D.database().ref("blogs").once("value").then(function(t){var a=[],r=t.val();for(var i in r)a.push({id:i,title:r[i].title,content:r[i].content,intro:r[i].intro,imageURL:r[i].imageURL,imageDescription:r[i].imageDescription,date:r[i].date,userId:r[i].userId});e("setLoadedBlogs",a),e("setLoading",!1)}).catch(function(t){console.log(t),e("setLoading",!1)})},createBlog:function(t,e){var a=t.commit,r=t.getters,i={title:e.title,content:e.content,intro:e.intro,imageURL:e.imageURL,imageDescription:e.imageDescription,date:e.date.toISOString(),userId:r.user.id};D.database().ref("blogs").push(i).then(function(t){var e=t.key;a("createBlog",R()({},i,{id:e}))}).catch(function(t){console.log(t)})},updateBlogData:function(t,e){var a=t.commit;a("setLoading",!0);var r={};e.title&&(r.title=e.title),e.content&&(r.content=e.content),e.intro&&(r.intro=e.intro),D.database().ref("blogs/").child(e.id).update(r).then(function(){a("setLoading",!1),a("updateBlog",e)}).catch(function(t){console.log(t),a("setLoading",!1)})}},getters:{loadedBlogs:function(t){return t.loadedBlogs.sort(function(t,e){return t.date>e.date})},featuredBlogs:function(t,e){return e.loadedBlogs.slice(0,5)},loadedBlog:function(t){return function(e){return t.loadedBlogs.find(function(t){return t.id===e})}}}},P={state:{user:null},mutations:{setUser:function(t,e){t.user=e}},actions:{signUpUser:function(t,e){var a=t.commit;a("setLoading",!0),a("clearError"),D.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){a("setLoading",!1);var e={id:t.uid,publishedBlogs:[]};a("setUser",e)}).catch(function(t){a("setLoading",!1),a("setError",t),console.log(t)})},logInUser:function(t,e){var a=t.commit;a("setLoading",!0),a("clearError"),D.auth().signInWithEmailAndPassword(e.email,e.password).then(function(t){a("setLoading",!1);var e={id:t.uid,publishedBlogs:[]};a("setUser",e)}).catch(function(t){a("setLoading",!1),a("setError",t),console.log(t)})},autoLogIn:function(t,e){(0,t.commit)("setUser",{id:e.uid,publishedBlogs:[]})},signOut:function(t){var e=t.commit;D.auth().signOut(),e("setUser",null)},fetchUserData:function(t){var e=t.commit,a=t.getters;e("setLoading",!0),D.database().ref("/blogs/"+a.user.id).once("value").then(function(t){var e=t.val();console.log(e)})}},getters:{user:function(t){return t.user}}};r.default.use(U.a);var $=new U.a.Store({modules:{blog:E,user:P,alerts:{state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{clearError:function(t){(0,t.commit)("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}}}}),I=function(t,e,a){$.getters.user?a():a("/login")};r.default.use(n.a);var T=new n.a({mode:"history",routes:[{path:"/",name:"Index",component:d,meta:{title:"The homepage of the application"}},{path:"/blogs",name:"BlogsOverview",component:u,meta:{title:"Blog overview"}},{path:"/blog/new",name:"BlogCreate",component:b,beforeEnter:I,meta:{title:"Create a blog"}},{path:"/blogs/:id",name:"BlogViewBlog",props:!0,component:g,meta:{title:"View blog"}},{path:"/profile",name:"UserProfile",component:x,beforeEnter:I,meta:{title:"Your profile"}},{path:"/signup",name:"UserSignUp",component:y,meta:{title:"Sign-up page"}},{path:"/login",name:"UserLogIn",component:B,meta:{title:"Log-in page"}}]}),S=a("3EgV"),q=a.n(S),O=(a("7zck"),a("IHMs")),F=a.n(O),V={render:function(){var t=this.$createElement;return(this._self._c||t)("v-alert",{attrs:{error:"",dismissible:"",value:!0,type:"error",role:"alert","aria-describedby":"text","aria-live":"assertive","aria-atomic":"true","aria-relevant":"additions",tabindex:"0"},on:{input:this.onClose}},[this._v("\n  "+this._s(this.text)+"\n")])},staticRenderFns:[]},Y=a("VU/8")({props:["text"],methods:{onClose:function(){this.$emit("dismissed")}}},V,!1,null,null,null).exports,A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"450px",persistent:""},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[a("v-btn",{staticClass:"secondary mb-1",attrs:{slot:"activator",accent:"","aria-haspopup":"dialog","aria-expanded":"true","aria-label":"Edit this blog."},slot:"activator"},[a("v-icon",[t._v("edit")])],1),t._v(" "),a("v-card",[a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-title",[a("h3",{staticClass:"secondary--text",attrs:{"aria-label":"Edit-Blog Dialog expanded.",role:"heading"}},[t._v(" Edit Blog ")])])],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-card-text",[a("v-text-field",{attrs:{name:"title",id:"title",counter:"50",autofocus:"",required:"",rules:t.textfieldRules,"aria-label":"Edit blog's title. Current title is:","aria-required":"true"},model:{value:t.editedTitle,callback:function(e){t.editedTitle=e},expression:"editedTitle"}}),t._v(" "),a("v-textarea",{attrs:{name:"intro",id:"intro",height:"100",box:"",counter:"100",required:"",rules:t.textfieldRules,"aria-label":"Edit blog's intro. Current intro is:","aria-multiline":"true","aria-required":"true"},model:{value:t.editedIntro,callback:function(e){t.editedIntro=e},expression:"editedIntro"}}),t._v(" "),a("v-textarea",{attrs:{name:"content",id:"content",height:"250",box:"",role:"textbox",required:"",rules:t.textfieldRules,"aria-label":"Edit blog's content. Current blog is:","aria-multiline":"true","aria-required":"true"},model:{value:t.editedContent,callback:function(e){t.editedContent=e},expression:"editedContent"}})],1)],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[a("a",{attrs:{href:"#",tabindex:"0","aria-label":"Press tab to close the dialog and discard changes. Press tab again to save changes"}}),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:"",outline:"","aria-label":"Close this dialog. Changes won't be saved."},on:{click:function(e){t.editDialog=!1}}},[t._v("\n          Close\n        ")]),t._v(" "),a("v-btn",{staticClass:"secondary",attrs:{flat:"",disabled:t.loading,loading:t.loading,"aria-label":"Save changes. You will be automatically redirected back to your blog."},on:{click:t.saveEditedBlog}},[t._v("\n          Save\n        ")])],1)],1)],1)],1)},staticRenderFns:[]};var z=a("VU/8")({name:"EditBlog",props:["blog"],data:function(){return{editDialog:!1,editedTitle:this.blog.title,editedContent:this.blog.content,editedIntro:this.blog.intro,textfieldRules:[function(t){return!!t||"Please fill out this field"}]}},methods:{saveEditedBlog:function(){""!==this.editedTitle.trim()&&""!==this.editedContent.trim()&&""!==this.editedIntro.trim()&&(this.editDialog=!1,this.$store.dispatch("updateBlogData",{id:this.blog.id,title:this.editedTitle,content:this.editedContent,intro:this.editedIntro}))}},computed:{loading:function(){return this.$store.getters.loading}}},A,!1,function(t){a("WQ4C")},"data-v-89172bc0",null).exports;r.default.use(q.a,{theme:{toolbarColor:F.a.teal.lighten5,blogOverview:F.a.blue.darken1,primary:F.a.teal.darken2,secondary:F.a.pink.darken4,accent:F.a.shades.black,error:F.a.red.accent3,dateColor:F.a.grey.darken3}}),r.default.config.productionTip=!1,r.default.filter("date",function(t){return new Date(t).toLocaleString(["en-US","de-de","nl-nl"],{weekday:"long",month:"long",day:"numeric",year:"numeric"})}),r.default.component("app-alert",Y),r.default.component("app-edit-blog-dialog",z),new r.default({store:$,el:"#app",data:function(){return{toggleDarkTheme:!1}},router:T,render:function(t){return t(o)},created:function(){var t=this;D.initializeApp({apiKey:"AIzaSyDBeKw1ZAFNFWCyFJ3uIKt13D45oS3OYmI",authDomain:"accessibilitypoc-2bbce.firebaseapp.com",databaseURL:"https://accessibilitypoc-2bbce.firebaseio.com",projectId:"accessibilitypoc-2bbce",storageBucket:""}),D.auth().onAuthStateChanged(function(e){e&&(t.$store.dispatch("autoLogIn",e),t.$store.dispatch("fetchUserData"))}),this.$store.dispatch("loadBlogs")}})},UZSd:function(t,e){},WQ4C:function(t,e){},Xznj:function(t,e){},Y49G:function(t,e){},iz15:function(t,e){},xIzd:function(t,e){},youH:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.94b2f53b00eb23de4596.js.map