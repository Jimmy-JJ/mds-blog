/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React, { useEffect } from "react";
import LazyLoad from "vanilla-lazyload";

const lazyloadConfig = {
  elements_selector: ".lazy"
};

// if (!document.lazyLoadInstance) {
//   document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
// }

export { wrapRootElement } from "./src/apollo/wrap-root-element";
