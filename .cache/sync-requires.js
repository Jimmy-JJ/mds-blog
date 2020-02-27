const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/anisa/Desktop/mds-blog/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/anisa/Desktop/mds-blog/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/anisa/Desktop/mds-blog/src/pages/index.js"))),
  "component---src-pages-learn-js": hot(preferDefault(require("/home/anisa/Desktop/mds-blog/src/pages/learn.js"))),
  "component---src-pages-news-js": hot(preferDefault(require("/home/anisa/Desktop/mds-blog/src/pages/news.js"))),
  "component---src-pages-tips-js": hot(preferDefault(require("/home/anisa/Desktop/mds-blog/src/pages/tips.js")))
}

