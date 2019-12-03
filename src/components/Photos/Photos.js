import React from "react";
import Photo from "./Photo";

export default function Photos(props) {
  let { photos } = props;

  return (
    <div>
      <h2>PUT TITLE OF PHOTO ALBUM HERE</h2>
      <div className="photos-flex-display">
        {photos.map((photo, key) => (
          <Photo key={key} photo={photo} />
        ))}
      </div>
    </div>
  );
}
