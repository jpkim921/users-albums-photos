import React, { Component } from "react";

// export default class TableBody extends Component {
//   render() {
//     return (
//       <tbody>
//         <tr>
//           <td>{this.props.user.name}</td>
//           <td>Guard Dog</td>
//           <td>
//             <button>Edit</button>
//           </td>
//           <td>
//             <button>Delete</button>
//           </td>
//         </tr>
//       </tbody>
//     );
//   }
// }

export function TableBody(props) {
  return (
    <tbody>
      <tr>
        <td>{props.user.name}</td>
        <td>Link to album</td>
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
