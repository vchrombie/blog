# Blog

Gatsby Blog, [vchrombie.github.io/blog](https://vchrombie.github.io/blog/blog).

Theme, https://github.com/LekoArts/gatsby-starter-minimal-blog.

Comments with [giscus](https://giscus.app//), https://github.com/vchrombie/comments/discussions.

## Setup

Prerequisites
- [nvm](https://github.com/nvm-sh/nvm)
- [node](https://nodejs.org/en/) & [npm](https://www.npmjs.com/) (you can install using nvm)
  ```shell
  $ nvm install 16
  $ node --version && npm --version
    v16.13.2
    8.1.2
  ```
- [gatsby](https://www.gatsbyjs.com/)
  ```shell
  $ npm install -g gatsby-cli
  ```

Build the site locally
```shell
$ git clone https://github.com/vchrombie/blog
$ cd blog/
$ npm install
$ gatsby develop
```

Clean the cache
```shell
$ gatsby clean
```

Deploy to github pages
```shell
$ npm run deploy
```

## Plugins

### [giscus](https://github.com/giscus/giscus-component/tree/main/packages/react)

```shell
$ npm install @giscus/react
```

`node_modules/@lekoarts/gatsby-theme-minimal-blog/src/components/post.tsx`
```tsx
import {Giscus} from "@giscus/react";

...

      {children}
    </section>

    <Giscus
      id="comments"
      repo="vchrombie/comments"
      repoId="MDEwOlJlcG9zaXRvcnkyNjI1NjQ5ODM="
      category="Comments"
      categoryId="DIC_kwDOD6Zsd84CBE_4"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={theme}
      lang="en"
      loading="lazy"
    />
    
    <PostFooter post={post} />
  </Layout>
```

### [gatsby-plugin-google-gtag](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-gtag)

```shell
$ npm install gatsby-plugin-google-gtag
```

`gatsby-config.ts`
```ts
plugins: [
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds: [
        "G-C5Y4PDGXSR", // Google Analytics / GA
      ],
    },
  },
]
```

### [gh-pages](https://github.com/tschaub/gh-pages)

```shell
$ npm install gh-pages --save-dev
```

`gatsby-config.ts`
```ts
const config: GatsbyConfig = {
  pathPrefix: `/blog`,
}
```

`package.json`
```json
{
  "scripts": {
    "deploy": "gatsby build --prefix-paths && gh-pages -d public"
  }
}
```