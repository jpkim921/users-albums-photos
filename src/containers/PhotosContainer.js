import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPhotos } from "./../actions/photosActions";
import Photos from "../components/Photos/Photos";

class PhotosContainer extends Component {
  componentDidMount() {
    let { albumId } = this.props.match.params;
    this.props.fetchPhotos(albumId);
  }

  render() {
    let { photos } = this.props;
    console.log(this.props);

    return (
      <div>
        <Photos photos={photos} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    photos: state.photos.photos
  };
};

const mapDispatchToProps = {
  fetchPhotos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotosContainer);
