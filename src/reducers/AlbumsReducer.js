export default function AlbumsReducer(
  state = { loading: false, albums: [] },
  action
) {
  switch (action.type) {
    case "LOADING_ALBUMS":
      return Object.assign({}, state, { loading: true });
    case "FETCH_ALBUMS":
      return Object.assign(
        {},
        state,
        { loading: false },
        { albums: action.payload }
      );
    default:
      return state;
  }
}
