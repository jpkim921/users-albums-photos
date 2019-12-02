import React, { Component } from "react";
import { TableHeader } from "./TableHeader";
// import TableBody from "./TableBody";
import { TableBody } from "./TableBody";

class Table extends Component {
  renderUsers = users => {
    return users.map((user, key) => <TableBody user={user} key={key} />);
  };
  render() {
    let { users } = this.props;

    return (
      <div>
        <table>
          <TableHeader />
          {/* <TableBody users={this.props.users} /> */}
          {this.renderUsers(users)}
        </table>
      </div>
    );
  }
}

export default Table;
