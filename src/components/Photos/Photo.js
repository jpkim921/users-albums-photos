import React from "react";

export default function Photo(props) {
  let { photo } = props;
  console.log(photo)

  return (
    <div>
        <img className="photo" src={photo.thumbnailUrl} alt="thumbnail image" />
    </div>
  );
}
