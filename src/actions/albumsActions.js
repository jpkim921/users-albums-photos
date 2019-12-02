export function fetchAlbums(userId) {
  return dispatch => {
    dispatch({ type: "LOADING_ALBUMS" });
    return (
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
        .then(response => response.json())
        // .then(albums => console.log(albums));
        .then(albums => dispatch({ type: "FETCH_ALBUMS", payload: albums }))
    );
  };
}
