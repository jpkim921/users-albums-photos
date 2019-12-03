import React from "react";

export default function Photo(props) {
  let { photo } = props;
  console.log(photo)

  return (
    <div>
        <img src={photo.thumbnailUrl} alt="thumbnail image" />
    </div>
  );
}
