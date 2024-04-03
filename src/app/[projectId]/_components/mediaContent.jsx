import React from 'react';

const MediaContent = ({ media,alt, isVideo, className }) => {
  if (isVideo) {
    return (
      <video src={media} autoPlay loop muted className={className} />
    );
  } else {
    return (
      <img src={media} alt={alt} className={className} />
    );
  }
};

export default MediaContent;