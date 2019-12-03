export function fetchPhotos(albumId) {
  return dispatch => {
    dispatch({ type: "LOADING_PHOTOS" });
    return (
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(response => response.json())
        // .then(photos => console.log(photos))
        .then(photos => dispatch({ type: "FETCH_PHOTOS", payload: photos }))
    );
  };
}
