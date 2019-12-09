import { getAlbums} from '../Actions/albums';

const initialState = {
  isLoading: false,
  albums: [],
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case String(getAlbums.pending):
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case String(getAlbums.fulfilled):
      return {
        ...state,
        isLoading: false,
        albums: action.payload,
        error: false
      }
    case String(getAlbums.rejected):
      return {
        ...state,
        isLoading: false,
        error: true
      }
    default:
      return state;
  }
}

export default reducer;
