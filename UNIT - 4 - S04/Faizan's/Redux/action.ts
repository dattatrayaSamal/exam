import axios from "axios";

export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";

export const ADD_DATA = "ADD_DATA";

export const SET_FILTER = "SET_FILTER";

export const DELETE_POST = "DELETE_POST";




let URL = "https://jsonplaceholder.typicode.com/posts";

//Action Creators
export const dataLoading = () => ({
  type: FETCH_POST_REQUEST,
});

export const dataError = (error: string) => ({
  type: FETCH_POST_FAILURE,
  payload: error,
});

export const setFilter = (filter: string) => ({
  type: SET_FILTER,
  payload: filter,
});

export const setDelete = (id: Number) => ({
  type: DELETE_POST,
  payload: id,
});


// ***********************************to fetch data**********************************************************************
//Asynchronous Thunk Actions.
export const fetchPost = () => {
  return async (dispatch: any) => { // use of dispatch
    dispatch(dataLoading());          // setting dispatch to dataloading
    try {
      const response = await axios.get(URL);
      dispatch({ type: FETCH_POST_SUCCESS, payload: response.data }); //again updating dispatch with type sucess
    } catch (error) {
      console.log("Error fetching posts:", error);
    }
  };
};


// *************************TO POST DATA*****************************************************
export const postData = (post: { title: string; body: string }) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.post(URL, post);  // Axios will automatically set the Content-Type to application/json
      dispatch({ type: ADD_DATA, payload: response.data });  // Dispatch action with newly created post data
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
};

//*********************************delete post**************************** */
export const deletePost = (id: number) => {
  return async (dispatch: any) => {
    try {
      await axios.delete(`${URL}/${id}`);
      dispatch(setDelete(id)); // Dispatch delete action with the post ID
    } catch (error) {
      console.log("Error deleting post:", error);
      dispatch(dataError("Failed to delete post"));
    }
  };
};
