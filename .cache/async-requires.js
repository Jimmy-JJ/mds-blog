// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-post-js": () => import("./../src/templates/post.js" /* webpackChunkName: "component---src-templates-post-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-learn-js": () => import("./../src/pages/learn.js" /* webpackChunkName: "component---src-pages-learn-js" */),
  "component---src-pages-news-js": () => import("./../src/pages/news.js" /* webpackChunkName: "component---src-pages-news-js" */),
  "component---src-pages-tips-js": () => import("./../src/pages/tips.js" /* webpackChunkName: "component---src-pages-tips-js" */)
}

