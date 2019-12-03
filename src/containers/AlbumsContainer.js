import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAlbums } from "./../actions/albumsActions";
import Albums from "./../components/albums/Albums";

class AlbumsContainer extends Component {

  componentDidMount() {
    let { userId } = this.props.match.params;
    this.props.fetchAlbums(userId);
  }

  render() {
    let { albums } = this.props;

    return (
      <div>
        <Albums albums={albums} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums.albums
  };
};

const mapDispatchToProps = {
  fetchAlbums
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumsContainer);
