"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[588],{4765:function(e,t,a){a.d(t,{F:function(){return d},Z:function(){return p}});var n=a(7294),r=a(8733),i=a(795),o=a(6920),s=a(6799),l=a(8871);var c=e=>{let{post:t}=e;return null};const m=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var g=e=>{let{data:{post:t},children:a}=e;return(0,r.tZ)(o.Z,null,(0,r.tZ)(i.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(n.Fragment,null," — ",(0,r.tZ)(s.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},a),(0,r.tZ)(c,{post:t}))};const d=e=>{var t,a,n;let{data:{post:i}}=e;return(0,r.tZ)(l.Z,{title:i.title,description:i.description?i.description:i.excerpt,image:i.banner?null===(t=i.banner)||void 0===t||null===(a=t.childImageSharp)||void 0===a||null===(n=a.resize)||void 0===n?void 0:n.src:void 0,pathname:i.slug,canonicalUrl:i.canonicalUrl})};function p(e){let{...t}=e;return n.createElement(g,t)}},6799:function(e,t,a){var n=a(8733),r=a(7294),i=a(1883),o=a(3494),s=a(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:a,basePath:l}=(0,o.Z)();return(0,n.tZ)(r.Fragment,null,t.map(((e,t)=>(0,n.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,n.tZ)(i.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,s.Z)("/"+l+"/"+a+"/"+e.slug)},e.name)))))}},8871:function(e,t,a){var n=a(7294),r=a(1883),i=a(4232);t.Z=e=>{let{title:t="",description:a="",pathname:o="",image:s="",children:l=null,canonicalUrl:c=""}=e;const m=(0,i.Z)(),{siteTitle:g,siteTitleAlt:d,siteUrl:p,siteDescription:h,siteImage:b,author:u,siteLanguage:f}=m,A={title:t?t+" | "+g:d,description:a||h,url:""+p+(o||""),image:""+p+(s||b)};return n.createElement(n.Fragment,null,n.createElement("html",{lang:f}),n.createElement("title",null,A.title),n.createElement("meta",{name:"description",content:A.description}),n.createElement("meta",{name:"image",content:A.image}),n.createElement("meta",{property:"og:title",content:A.title}),n.createElement("meta",{property:"og:url",content:A.url}),n.createElement("meta",{property:"og:description",content:A.description}),n.createElement("meta",{property:"og:image",content:A.image}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:image:alt",content:A.description}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:A.title}),n.createElement("meta",{name:"twitter:url",content:A.url}),n.createElement("meta",{name:"twitter:description",content:A.description}),n.createElement("meta",{name:"twitter:image",content:A.image}),n.createElement("meta",{name:"twitter:image:alt",content:A.description}),n.createElement("meta",{name:"twitter:creator",content:u}),n.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),n.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),c?n.createElement("link",{rel:"canonical",href:c}):null,l)}},3258:function(e,t,a){a.r(t),a.d(t,{Head:function(){return s.F},default:function(){return l}});var n=a(7294),r=a(1151);function i(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",span:"span",em:"em",ol:"ol"},(0,r.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.p,null,"Hello"),"\n",n.createElement(t.p,null,"As we reached the end of the second coding period, I am writing this blog post to highlight the work done during this period. 🏄"),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,"\n",n.createElement(t.p,null,"In the initial weeks, I was concentrating on making the Prosoul results dashboard. There was an existing dashboard related to the Quality Models in the crossminer project, ",n.createElement(t.a,{href:"http://crossminer.bitergia.net/app/kibana#/dashboard/72ac14b0-456e-11e9-a208-9748f08b9341"},"scava-qm dashboard"),". I took this as a reference ✊, and I replicated the visualizations with the current results obtained. ",n.createElement(t.a,{href:"https://github.com/vchrombie/gsoc/issues/12#issuecomment-654420431"},"vchrombie/gsoc#12 (comment)"),"\n",n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACDklEQVR42jWRTU8UQRCGx4MXkYMXDx69+BP8G0YTszEejIiwCxgl8SqJ0X9hhCUgH0FNjFdQw0LQlYMBNQgsuLsKZt3Zj5npqq6PbjOz8uRNpzqVt7o6b3BnYMAAQhK3wnazGbbbHUAbRQmiNYDE5L36/zjn3EntiTjI5/MWZa/eDKHLIoAoosxiLXmnH3eOp1Z2F9cO5kuV+dX9hbXKfKmyUKrMftirHHeCiYnHjV/bWz+rGwdH3ZDiKLJEzvkEwHt+NFc+dfV5f266Lzfdf2P69LXJM9en+nLF4MqzmXc7wb0HDzvVMld/bL8PW387YCJKzU5EyGK9ZcYmP53NFS+Ovrz8dPnS+Jvzt15cuD137ubszMr3oDAyiklc2/jSqUWW2Ri0LMSiqgjQinH565/i6v7rcm1xs14+bBVL+ytbv9d3GodHYTA4OJg+5T2JxAaynR0xI6JJEoMEJKqSLiKKpM451fS0loK7+UJUPYyrB+I9M6tzW802snDmB5IuSNdw13DbcK0J7YS6wB3DljQYvj9eeTVXf7vE3gsRqXvy+VuYgAWI4xgsxcg9JcjGSlpDeiWWYGh0rLG50Siv98zAsrRbTYh7Yao6tNYSWSLOsJRiiUQ0GBoe9t4DYtYUA0BZw2WoOs6+oKp0MkIzUnOhMAKABjABZBZRZVER1xOgTYxhToelAaj7rzRL/QfKpEGAiGSVfwAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="dashboard"\n        title=""\n        src="/blog/static/14cbdc7f6fe87a3468671788c2e01e36/7d769/dashboard-2.png"\n        srcset="/blog/static/14cbdc7f6fe87a3468671788c2e01e36/5243c/dashboard-2.png 240w,\n/blog/static/14cbdc7f6fe87a3468671788c2e01e36/ab158/dashboard-2.png 480w,\n/blog/static/14cbdc7f6fe87a3468671788c2e01e36/7d769/dashboard-2.png 960w,\n/blog/static/14cbdc7f6fe87a3468671788c2e01e36/d6ebf/dashboard-2.png 1366w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n"),"\n",n.createElement(t.li,null,"\n",n.createElement(t.p,null,"We found the possibility to add two additional metrics to the ",n.createElement(t.em,null,"gitlabqm")," enricher, the number of issues attended and the number of merge requests attended. I have worked on it and completed implementing the extra metrics too. ",n.createElement(t.a,{href:"https://github.com/vchrombie/gsoc/issues/8"},"vchrombie/gsoc#8")),"\n"),"\n",n.createElement(t.li,null,"\n",n.createElement(t.p,null,"Next, I have performed a study on the ",n.createElement(t.a,{href:"https://amfoss.in/"},"amFOSS")," projects as I'm a bit familiar with the projects and I have an understanding of their growth. I used two data sources gitlab and git (qm enrichers) for 10 projects and the Developer Quality Model, which has 2 goals and 4 metrics. ",n.createElement(t.a,{href:"https://github.com/vchrombie/gsoc/issues/13"},"vchrombie/gsoc#13"),"\n",n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABzklEQVR42n1QPW8TQRC93wf8jNgYQzqaQItEB9ixjWRfR4dEQYFEiQhgJxIBAYUJCOwY2Ti5s2/3bnf2Y2YH3V0UJAqeVqPR7Js38ya6dvVKt9ftdh51KgwGj+M4Hg1H8SgeDodxHPcrDPr9fq+3X+FBZ//G3fu37z2M2u02MQdmDmX4P2qGchQfnT05/BXt7d1JhVLaarh4CqwstJBK5vqyWNa1zZWpc+YAANGt3d1QzQwXukxEeaEtGO/cP5M1GK2UNcYjgnFRu32z/jByY7INEyFRofTfLS93rqA1zBcr7z0YGzWb18EUUiRisxHpVgEYdDIvamqtUCYhIBEzf/v66ePr3ul8hsRRs9HUHpJsORXrH2orXKEcSJmTd6FiV0aC81Rrpcn6+O1TrQprfdRoNJi5yP1iBb/PjHPlpHUiD54dHL0YAzhlaPJhNZ7M0nUWmGWWrRYn1ujS885O2SyFXXyZL09WiBQ4bFLx6vnkzcv3yTL5vizGhz+P302nn+cWKS1sSWG2zketVqs6I54L2OaWmREJwFCFEEgr5b1HREJUYGaJAoe1l/LazqOUcptlQgohpXNeaeOct9bbMjpE8p4QSYM9lwYcVhX8A742T5E1R5lzAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="amfoss-dashboard"\n        title=""\n        src="/blog/static/4b991a72b075666fe1809a4eb57d2210/7d769/amfoss-dashboard-1.png"\n        srcset="/blog/static/4b991a72b075666fe1809a4eb57d2210/5243c/amfoss-dashboard-1.png 240w,\n/blog/static/4b991a72b075666fe1809a4eb57d2210/ab158/amfoss-dashboard-1.png 480w,\n/blog/static/4b991a72b075666fe1809a4eb57d2210/7d769/amfoss-dashboard-1.png 960w,\n/blog/static/4b991a72b075666fe1809a4eb57d2210/d6ebf/amfoss-dashboard-1.png 1366w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABxElEQVR42jVSy24TMRSdfyWBJlW/oHwNiyKxYYOE2LBCFQotFaICKpFnH1FIxjOTie37NrIDZ2Ff2zr3nHuvq8HgWQR0Tbvd1c41bddFwL73MWIEZCJGNBETUREf4rbzEVCYAagajUYIiEQignknZEViEfFAs22/dGHhwrwO6w7awE9tdJ4CKYtW5+cv27ZFpJTMew8AqiaqybTu4+vr+4ur1cX16tVk+eHH5vZh/+77+mrR3DvIymdnZ7VzhaPMnFJS1eIxY7Jo3t9uZlu/7uB61Xz6vfu6bH899T1a1/tqPD5tmibGaGZEbGZqhkQ5kem8Pkzmro9iln6u95fTerbxy60HTu3eV8Ph8yOzCEoJrJTMzBLIUDSyAadNh86TJQM2kBSAquFw2Pe996FY1SP56JlYkNPd5vDYQkC7WXUf77af582DA49GrJnMoh45kqSULGVyFhZGYtb0Zemmu0MAvZzWb27u3357nP45ZEes1WAwTAVmVtbcMNVjnKcbIkCeIBHLIcQAGCPkklSrFycn6aj4H8W2pn8XOZ2pcUE5H7NrJo/HpxHwEGCffw6zGLMCSSQh1vIUioxFQECS0s7cVJK/6wdlyCFuhhQAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="amfoss-dashboard"\n        title=""\n        src="/blog/static/f2964a106433ecc171c5a7ee37b24e7f/7d769/amfoss-dashboard-2.png"\n        srcset="/blog/static/f2964a106433ecc171c5a7ee37b24e7f/5243c/amfoss-dashboard-2.png 240w,\n/blog/static/f2964a106433ecc171c5a7ee37b24e7f/ab158/amfoss-dashboard-2.png 480w,\n/blog/static/f2964a106433ecc171c5a7ee37b24e7f/7d769/amfoss-dashboard-2.png 960w,\n/blog/static/f2964a106433ecc171c5a7ee37b24e7f/d6ebf/amfoss-dashboard-2.png 1366w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n"),"\n"),"\n",n.createElement(t.p,null,"You can check more results from here, ",n.createElement(t.a,{href:"https://github.com/vchrombie/gsoc/issues/13#issuecomment-656187839"},"vchrombie/gsoc#13 (comment)")),"\n",n.createElement(t.ul,null,"\n",n.createElement(t.li,null,"\n",n.createElement(t.p,null,"Later, we started working towards adding a few more data sources to the list. We have discussed the metrics for ",n.createElement(t.em,null,"pipermailqm")," ",n.createElement(t.a,{href:"https://github.com/vchrombie/gsoc/issues/11"},"vchrombie/gsoc#11")," and ",n.createElement(t.em,null,"meetupqm")," ",n.createElement(t.a,{href:"https://github.com/vchrombie/gsoc/issues/14"},"vchrombie/gsoc#14"),". I have worked on it for a few days and completed implementing all the planned metrics."),"\n"),"\n",n.createElement(t.li,null,"\n",n.createElement(t.p,null,"The next target was to add tests to the existing enrichers. I had some pretty good experience working with tests as I have tried it on the gitlabcomments enricher during the Community Bonding Period. I took some inspiration from the implementation of tests and started working."),"\n"),"\n"),"\n",n.createElement(t.p,null,"I have written reports sharing the weekly work in my blog. You can have a look. 👀"),"\n",n.createElement(t.ol,null,"\n",n.createElement(t.li,null,n.createElement(t.a,{href:"https://github.com/vchrombie/gsoc/tree/master/work/week-05#semana-cinco"},"semana cinco")),"\n",n.createElement(t.li,null,n.createElement(t.a,{href:"https://github.com/vchrombie/gsoc/tree/master/work/week-06#semana-seis"},"semana seis")),"\n",n.createElement(t.li,null,n.createElement(t.a,{href:"https://github.com/vchrombie/gsoc/tree/master/work/week-07#semana-siete"},"semana siete")),"\n",n.createElement(t.li,null,n.createElement(t.a,{href:"https://github.com/vchrombie/gsoc/tree/master/work/week-08#semana-ocho"},"semana ocho")),"\n"),"\n",n.createElement(t.p,null,"Gearing up for the final coding period. 🪂"),"\n",n.createElement(t.p,null,"If you have any comments or questions, please make sure to comment down below. :)"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?n.createElement(t,e,n.createElement(i,e)):i(e)},s=a(4765);function l(e){return n.createElement(s.Z,e,n.createElement(o,e))}s.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-coding-period-2-index-mdx-4fc1ff414b2d9fc330e5.js.map