import React from "react";
import Photo from "./Photo";

export default function Photos(props) {
  let { photos } = props;

  return (
    <div>
      <h2>Photos</h2>
      <div className="photos-flex-display">
        {photos.map((photo, key) => (
          <Photo key={key} photo={photo} />
        ))}
      </div>
    </div>
  );
}
