import React from "react";
import Album from "./Album";

export default function Albums(props) {
  return (
    <div>
      <h2>Albums Component</h2>
      {props.albums.map((album, key) => {
        return <Album album={album} key={key} />;
      })}
    </div>
  );
}
