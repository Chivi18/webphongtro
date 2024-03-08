import actionTypes from "./actionTypes";
import { apiGetPosts, apiGetPostsLimit,apiGetnewPost } from "../../services/post";

export const GetPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts();

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS,
        posts: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS,
      posts: null,
    });
  }
};

export const GetPostsLimit = (query) => async (dispatch) => {
  try {
    const response = await apiGetPostsLimit(query);

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        posts: response.data.response?.rows,
        count: response.data.response?.count,
      });
    } else {
      dispatch({
        type: actionTypes.GET_POSTS_LIMIT,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS_LIMIT,
      posts: null,
    });
  }
};

export const GetNewPost = () => async (dispatch) => {
  try {
    const response = await apiGetnewPost();

    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_NEW_POST,
        newPost: response.data.response,
       
      });
    } else {
      dispatch({
        type: actionTypes.GET_NEW_POST,
        newPost: null,
        msg:response.data.msg
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_NEW_POST,
      newPost: null,
    });
  }
};
