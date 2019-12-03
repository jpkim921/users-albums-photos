export default function PhotosReducer(
  state = { loading: false, photos: [] },
  action
) {
  switch (action.type) {
    case "LOADING_PHOTOS":
      return Object.assign({}, state, { loading: true });
    case "FETCH_PHOTOS":
      return Object.assign(
        {},
        state,
        { loading: false },
        { photos: action.payload }
      );
    default:
      return state;
  }
}
