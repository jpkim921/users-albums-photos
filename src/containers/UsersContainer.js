import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./../actions/usersActions";
import Table from "./../components/table/Table";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    let { users } = this.props;

    return (
      <div>
        <h1>Users Container</h1>
        <Table users={users} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = {
  fetchUsers
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
