import React from "react";
import Album from "./Album";

export default function Albums(props) {
  
  let {albums} = props

  return (
    <div>
      <h2>Albums</h2>
      {albums.map((album, key) => <Album key={key} album={album} />)}
    </div>
  );
}
