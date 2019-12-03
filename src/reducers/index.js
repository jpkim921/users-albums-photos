import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import AlbumsReducer from "./AlbumsReducer";
import PhotosReducer from "./PhotosReducer";

const rootReducer = combineReducers({
  users: UsersReducer,
  albums: AlbumsReducer,
  photos: PhotosReducer
});

export default rootReducer;
