import React from "react";
import Placeholder from "../images/logo.svg";

export class LazyImage extends React.Component {
  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  // Just render the image with data-src
  render() {
    const { alt, src, srcset, sizes, className } = this.props;
    return (
      <img
        src={Placeholder}
        alt={alt}
        className={`lazy ${className}`}
        data-src={src}
        data-srcset={srcset}
        data-sizes={sizes}
      />
    );
  }
}

export default LazyImage;
