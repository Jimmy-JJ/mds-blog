/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import LazyLoad from "vanilla-lazyload";

const lazyloadConfig = {
  elements_selector: ".lazy"
};

// if (!document.lazyLoadInstance) {
//   document.lazyLoadInstance = new LazyLoad(lazyloadConfig);
// }

export { wrapRootElement } from "./src/apollo/wrap-root-element";
