import React from "react";

function Image({
  src,
  alt,
  className,
  imgWidth,
  imgDisplay,
  imgHeight,
  imgObjectFit,
  right,
  evennement,
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={evennement}
      style={{
        width: imgWidth,
        display: imgDisplay,
        height: imgHeight,
        objectFit: imgObjectFit,
        right: right,
      }}
    />
  );
}

export default Image;
