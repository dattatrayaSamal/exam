import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  ADD_DATA,
  SET_FILTER,
  DELETE_POST,
} from "./action";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface State {
  posts: Post[];
  filter: string;
  error: string;
  loading: boolean;
}

let initialState: State = {
  posts: [],
  filter: "",
  error: "",
  loading: false,
};

export let postReducer = (state = initialState, action: any): State => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return { ...state, loading: true, error: "" };
    case FETCH_POST_SUCCESS:
      return { ...state, posts: action.payload, loading: false, error: "" };
    case FETCH_POST_FAILURE:
      return { ...state, posts: [], loading: false, error: action.payload };
    case ADD_DATA:
      return { ...state, posts: [...state.posts, action.payload] };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case DELETE_POST:
      return { ...state, posts: state.posts.filter((post) => post.id !== action.payload) };
    default:
      return state;
  }
};
