"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[681],{4765:function(e,t,a){a.d(t,{F:function(){return h},Z:function(){return g}});var n=a(7294),r=a(8733),i=a(795),o=a(6920),l=a(6799),s=a(8871);var c=e=>{let{post:t}=e;return null};const m=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var p=e=>{let{data:{post:t},children:a}=e;return(0,r.tZ)(o.Z,null,(0,r.tZ)(i.X6,{as:"h1",variant:"styles.h1"},t.title),(0,r.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.tZ)("time",null,t.date),t.tags&&(0,r.tZ)(n.Fragment,null," — ",(0,r.tZ)(l.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.tZ)("span",null,t.timeToRead," min read")),(0,r.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:m.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},a),(0,r.tZ)(c,{post:t}))};const h=e=>{var t,a,n;let{data:{post:i}}=e;return(0,r.tZ)(s.Z,{title:i.title,description:i.description?i.description:i.excerpt,image:i.banner?null===(t=i.banner)||void 0===t||null===(a=t.childImageSharp)||void 0===a||null===(n=a.resize)||void 0===n?void 0:n.src:void 0,pathname:i.slug,canonicalUrl:i.canonicalUrl})};function g(e){let{...t}=e;return n.createElement(p,t)}},6799:function(e,t,a){var n=a(8733),r=a(7294),i=a(1883),o=a(3494),l=a(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:a,basePath:s}=(0,o.Z)();return(0,n.tZ)(r.Fragment,null,t.map(((e,t)=>(0,n.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,n.tZ)(i.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,l.Z)("/"+s+"/"+a+"/"+e.slug)},e.name)))))}},8871:function(e,t,a){var n=a(7294),r=a(1883),i=a(4232);t.Z=e=>{let{title:t="",description:a="",pathname:o="",image:l="",children:s=null,canonicalUrl:c=""}=e;const m=(0,i.Z)(),{siteTitle:p,siteTitleAlt:h,siteUrl:g,siteDescription:d,siteImage:u,author:b,siteLanguage:f}=m,w={title:t?t+" | "+p:h,description:a||d,url:""+g+(o||""),image:""+g+(l||u)};return n.createElement(n.Fragment,null,n.createElement("html",{lang:f}),n.createElement("title",null,w.title),n.createElement("meta",{name:"description",content:w.description}),n.createElement("meta",{name:"image",content:w.image}),n.createElement("meta",{property:"og:title",content:w.title}),n.createElement("meta",{property:"og:url",content:w.url}),n.createElement("meta",{property:"og:description",content:w.description}),n.createElement("meta",{property:"og:image",content:w.image}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{property:"og:image:alt",content:w.description}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:title",content:w.title}),n.createElement("meta",{name:"twitter:url",content:w.url}),n.createElement("meta",{name:"twitter:description",content:w.description}),n.createElement("meta",{name:"twitter:image",content:w.image}),n.createElement("meta",{name:"twitter:image:alt",content:w.description}),n.createElement("meta",{name:"twitter:creator",content:b}),n.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),n.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),c?n.createElement("link",{rel:"canonical",href:c}):null,s)}},3993:function(e,t,a){a.r(t),a.d(t,{Head:function(){return l.F},default:function(){return s}});var n=a(7294),r=a(1151);function i(e){const t=Object.assign({p:"p",a:"a",span:"span"},(0,r.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.p,null,"Hi all. For the ones who haven't heard about this news, I joined Bitergia as a Backend Developer. It has been almost a month since I joined the company. I wanted to share the work and life updates about it through this post."),"\n",n.createElement(t.p,null,"I had a great experience working with ",n.createElement(t.a,{href:"https://chaoss.community"},"CHAOSS Community")," on the GrimoireLab project as a part of the ",n.createElement(t.a,{href:"https://summerofcode.withgoogle.com/archive/2020/projects/6524989651550208"},"Google Summer of Code 2020 program"),". You can read more about it from the final report of the program, ",n.createElement(t.a,{href:"https://vchrombie.github.io/blog/gsoc-final-report"},"reporte final"),". Also, I got the opportunity to share details about my GSoC project in the CHAOSScast, which is the CHAOSS Community podcast. Be sure to check the episode, ",n.createElement(t.a,{href:"https://podcast.chaoss.community/21"},"GSOC Pt. 2: Extending GrimoireLab projects with Ria and Venu"),"."),"\n",n.createElement("iframe",{src:"https://open.spotify.com/embed-podcast/episode/4ihS6lBsMd2CVEva8ICEQp",width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}),"\n",n.createElement(t.p,null,"I started hunting for work opportunities so that I can join after the GSoC period. I prefer a remote position as traveling in the middle of a pandemic didn't seem right to me. I was also interested in working on open-source projects and communities. This was just interest but not a crucial factor."),"\n",n.createElement(t.p,null,"I heard about ",n.createElement(t.a,{href:"https://bitergia.com"},"Bitergia")," almost a year back when I started contributing to the ",n.createElement(t.a,{href:"https://grimoirelab.github.io"},"GrimoireLab")," project. I was always inspired by their work. My mentors, ",n.createElement(t.a,{href:"https://valeriocos.github.io"},"Valerio Cosentino"),", and ",n.createElement(t.a,{href:"https://dlumbrer.github.io"},"David Moreno Lumbreras"),", are working at Bitergia. I received great help from them throughout the GSoC period. I was interested in joining Bitergia as my first work after my final year. So, I shared my idea with them and asked about it. They supported me to reach out to ",n.createElement(t.a,{href:"https://twitter.com/jsmanrique"},"Manrique")," and ask about it."),"\n",n.createElement(t.p,null,"Very soon, I came across a few openings on the ",n.createElement(t.a,{href:"https://bitergia.com"},"Bitergia website"),". I didn't have any second thought, and I applied for the Backend Developer position. After having to clear the whole interview process, I was offered the role. I was really excited about joining the team and working with them. So, I accepted the offer right away. It is a remote position, and most of the work is around the GrimoireLab. Read about it from here, ",n.createElement(t.a,{href:"https://blog.bitergia.com/2020/10/21/meet-the-new-bitergians-eva-and-venu"},"Meet the new Bitergians: Eva and Venu"),"."),"\n",n.createElement(t.a,{href:"https://blog.bitergia.com/2020/10/21/meet-the-new-bitergians-eva-and-venu"},n.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 600px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/webp;base64,UklGRqQAAABXRUJQVlA4IJgAAAAwBQCdASoUABQAPtFcp04oJSOiKAqpABoJZQCAAARRYkrUw4jhDt3tuaanuWHCSEf+AAD+7+yW5icjWVHYoJhQhId4/AlP8QgpNxie4H6KRwDcAe6b9rX18I3KWs6PS21L500jJotoV+Xm/WQPDxd5lNlnOCQaA6hc2SEgI38lsi/+CZ1/c9opemXekHdsy+YVOuxyTiAAAA==\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="Venu - Bitergia"\n        title=""\n        src="/blog/static/8a165587156819585af4580c38cdd2fa/f8b1b/venu-bitergia.webp"\n        srcset="/blog/static/8a165587156819585af4580c38cdd2fa/cbea2/venu-bitergia.webp 240w,\n/blog/static/8a165587156819585af4580c38cdd2fa/42669/venu-bitergia.webp 480w,\n/blog/static/8a165587156819585af4580c38cdd2fa/f8b1b/venu-bitergia.webp 600w"\n        sizes="(max-width: 600px) 100vw, 600px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}})),"\n",n.createElement(t.p,null,"As I said, it has been more than a month since I joined the Bitergia team officially. I started working on a new ",n.createElement(t.a,{href:"https://github.com/Bitergia/release-tools"},"set of tools")," to automate and generate GrimoireLab releases. I'm enjoying the work and also the team."),"\n",n.createElement(t.p,null,"Until next time. :)"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?n.createElement(t,e,n.createElement(i,e)):i(e)},l=a(4765);function s(e){return n.createElement(l.Z,e,n.createElement(o,e))}l.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-what-next-index-mdx-d34be19baf1afe7b6ce7.js.map