"use strict";(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[441],{1559:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.F},default:function(){return r}});var a=n(7294),l=n(1151);function s(e){const t=Object.assign({p:"p",span:"span",ul:"ul",li:"li",code:"code"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"I recently made my pen-drive bootable with Ubuntu 16.04. But I need to unboot my pen-drive now. Even though I formatted my pen-drive thrice, the size of the pen-drive still shows 2.25 MB. Whereas, this is a 32GB pen-drive."),"\n",a.createElement(t.p,null,"It looks like the picture below, somewhat..."),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 284px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 121.66666666666669%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAIAAAB1KUohAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB7klEQVR42qWT207bQBCG86iFmz4OF4mEGgm44RGq9rYiV6jqIQVciSaE2M6uvesz9h7G653KTkrSioQGfv2StbK+2fE/np7ZrmZDttPm0RjTa7YIAMqypIRWldBaB0HAOY/jOM9zIQRjDBF7fyo1j2Vta9sYAxqqsgIAY0zZSSklO1VV1cLWWkSUSmsAqGtjGiG1UlpIpTRAbZQG3KIVfO8HzmQ+uV/cefTL1e3PqXd75313JjOXzj1SN1thRLQ8SkkQJ1nhE+YTTsJISI2Iy9As7oIxzQqfRlGSLyhnLGVxuoR3a9X2y7SC7VPaA16O/vHFHvBSTdNUQpZC/Oe3rOAkSS4vP4csIQGfzf3xlUMIffb+9g9DRM/zDg4O37w9fP/h46eL0ehiFBDSonWNxjzhrmjvMRsA+Db+euM4Usr92hZCCqlsg6C0Rix/jOnRETs+DgeD4B/3+3Q4hDxfw4wnc5+GPHbdRSZ1cX3t9gf+u2F4csLPzv7y6Sk/P6+LYg1HcbqgjEcpDSOloZB6ytJfQSagbmN7Ju009wnjccLjFBGL4sFzieNMQ5a0I6xra8ym14F1N2c0jNq2/UBDHbJ45lKpNNRmZ2Ddo6pkXpRpXiRZoTSUpUiyh1cthrW4e2RreHMf9luMV63ky+Df79JpIhI4OQIAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="img"\n        title="Pendrive before formatting, after booting"\n        src="/blog/static/a78a4e3855edf0998b2bc0cf89c8bbea/6a62f/screenshot-21.png"\n        srcset="/blog/static/a78a4e3855edf0998b2bc0cf89c8bbea/5243c/screenshot-21.png 240w,\n/blog/static/a78a4e3855edf0998b2bc0cf89c8bbea/6a62f/screenshot-21.png 284w"\n        sizes="(max-width: 284px) 100vw, 284px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.p,null,"So in this tutorial, I am gonna help you to solve this problem. Follow these steps"),"\n",a.createElement(t.p,null,"First of all, start administrator's command prompt:"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"Type ",a.createElement(t.code,null,"cmd")," in the search tab"),"\n",a.createElement(t.li,null,"Press Ctrl+Shift+Enter to open the admin cmd\nOpen the utility called diskpart. I mean, enter ",a.createElement(t.code,null,"diskpart")," command."),"\n"),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"DISKPART> "),"prompt should appear."),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"LIST DISK"),"\nNow in diskpart prompt, type the command and it will list all your disks including your USB drive. Note the Disk number."),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"SELECT DISK #"),"\nType the command, where ",a.createElement(t.code,null,"#")," is your USB disk number. Just look for the right capacity of the drive."),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"LIST PARTITION"),"\nList all partitions on it."),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"SELECT PARTITION #"),"\nFor every one of them type:  , where ",a.createElement(t.code,null,"#")," is the number of partition and ",a.createElement(t.code,null,"DELETE PARTITION"),"."),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"LIST PARTITION"),"\nNow check there aren't any of partitions left. If there aren't any create one partition."),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"CREATE PARTITION PRIMARY"),"\nIf it asks about size, just use the default value. It is the max capacity."),"\n",a.createElement(t.p,null,a.createElement(t.code,null,"FORMAT FS=FAT32 QUICK"),"\nUSB flash drives use FAT32 filesystem by default. You could use NTFS instead too."),"\n",a.createElement(t.p,null,"Here is a screenshot for your reference.."),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 900px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 56.25%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABmElEQVR42o3Ry07CQBgF4NPLtB1aAlV3oMTX0YXaSlyYqi0UxB0bwqIkROPexMTgBjEaNG70CUz0aVqtgHHDTWugEI0mxrP9882Zfwae71cPD9IbG1s75rZpZmx7TdePjo9dzzvY3y+Xy47jVCqViuNUq9VSqVQsFi3Lqtfr/X4fw2F/aXkJgCAIADiOA7BpGK7rLi6kOJaTJIlSyrIsAIZheJ4HYBhGEAQIgkBbTxPCy7JMKVVVFcBuodDqtFOpFABCCMdx7DRhRzabneBVTQMQjUYJIaIgjma2/dJqJxIJAGFnGAYImy3LmmA9neZ5fnZulhCBjA+283m/1Ur+wpjiTCYzwWu6zgCxWEwQhEgkEmLv+TnxTwwgHldlWZYkaTSz7Sff/wN/XXuK46IoSnSEc/m86z39C69qE6woiqwoowfL5dqdznwyGX4e8y2EkJ/N4c5RRaHj5sLe3uvbW3KM/2p+//hY0TSWZdWZGUppuPO2aXYHg9u7u8tm8+rm5ur6utG4OK2d107OLy6b9cbZ/cNjt9f7BA6Usih/L1+2AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="img"\n        title="Command Prompt Screenshot"\n        src="/blog/static/0d0d3220a02a15b3bed6ab525016013f/7abe2/screenshot-23.png"\n        srcset="/blog/static/0d0d3220a02a15b3bed6ab525016013f/5243c/screenshot-23.png 240w,\n/blog/static/0d0d3220a02a15b3bed6ab525016013f/ab158/screenshot-23.png 480w,\n/blog/static/0d0d3220a02a15b3bed6ab525016013f/7abe2/screenshot-23.png 900w"\n        sizes="(max-width: 900px) 100vw, 900px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.p,null,"After following the series of these steps, you will find the problem fixed and the USB drive looks like this..."),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 287px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 120.41666666666669%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAIAAAB1KUohAAAACXBIWXMAAAsTAAALEwEAmpwYAAABu0lEQVR42tWUyW7bMBCG/ag59JHSS4Oil75CUfRYFLkEvbW2UaGuFUlctXKTRFIkCy1wkmazfet/ITnkN0MOOVwNz8s5Z4xxzh2GdtIwDLN95Se5WYfOBDDGIYBSSmstAABjXBRFXddCCEppCGF1WO29D/6+Rg/W2nlWa22MGYbRYoyx1nrvx8ghBCFVUTMuW6W6vGwYlzUT5WhRDVfzmsdaOTdO1ExEu2Sf0SQjP37t44ykKF9HcQpJhktr7dPw7JXkVZxiWtRxghJAf++BUH0I4bmYD2CtDRdKqpZxKVTHuNLGHgufpzv4n2SfBi+3dV7kOThjoqyartfuCEcLLKW8vHz76fOXXZyut9HXb9c/15tjE2atvXp3dfHm4v3HDzc33zfbrRDytG0bo+U95tUULDAXCiIyPckmr5pWKYQQpQQhBB8JAND3/R3MuISYFlWTQcJl27YdIkUCCJfKuWEqhAeaqQVuGM8ALsoG4lxrw5j4k+BNdFtz9cL+F7hte4AozktaVNMp5D7Fuz3gqnsdZlxATAktbzPUMFHVbBPFkJZHJcx7P1W5NdMv45w3YzuccFXnF8Z/Bf8Fs3t4paW2wm4AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="img"\n        title="Pendrive after formatting"\n        src="/blog/static/c4da6c04ec2aaa6e68319c9bd682ae31/4af4d/screenshot-22.png"\n        srcset="/blog/static/c4da6c04ec2aaa6e68319c9bd682ae31/5243c/screenshot-22.png 240w,\n/blog/static/c4da6c04ec2aaa6e68319c9bd682ae31/4af4d/screenshot-22.png 287w"\n        sizes="(max-width: 287px) 100vw, 287px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.p,null,"That's it!"),"\n",a.createElement(t.p,null,"Venu"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(s,e)):s(e)},o=n(4698);function r(e){return a.createElement(o.Z,e,a.createElement(i,e))}o.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-users-p-0-tt-3-r-blog-content-posts-reuse-pendrive-after-booting-index-mdx-378c182862ee768b38c8.js.map