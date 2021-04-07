const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/patricklehmann/Documents/GitHub/slicks-slices/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/patricklehmann/Documents/GitHub/slicks-slices/src/pages/404.js"))),
  "component---src-pages-beers-page-js": hot(preferDefault(require("/Users/patricklehmann/Documents/GitHub/slicks-slices/src/pages/BeersPage.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/patricklehmann/Documents/GitHub/slicks-slices/src/pages/index.js"))),
  "component---src-pages-pizzas-page-js": hot(preferDefault(require("/Users/patricklehmann/Documents/GitHub/slicks-slices/src/pages/PizzasPage.js")))
}

