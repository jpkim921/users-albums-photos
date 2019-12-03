import React from "react";
import {Link} from "react-router-dom";

export default function Album(props) {

  let {album} = props
  // console.log(props)

  return (
    <div>
      <Link to={`/album/${album.userId}/${album.title}`}>{album.title}</Link>
    </div>
  );
}
