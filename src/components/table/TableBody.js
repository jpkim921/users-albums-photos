import React from "react";
import { Link } from "react-router-dom";

export function TableBody(props) {
  return (
    <tbody>
      <tr>
        <td>{props.user.name}</td>
        <td>
          <Link to={`/albums/${props.user.id}`}>Albums</Link>
        </td>
        <td>
          <button>Edit</button>
        </td>
        <td>
          <button>Delete</button>
        </td>
      </tr>
    </tbody>
  );
}
